    /* Allowed languages */
    const LANGS = ['en', 'ru', 'uz'];

    function getStoredLang() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function setStoredLang(lang) {
        try {
            if (LANGS.includes(lang)) {
                localStorage.setItem(STORAGE_KEY, lang);
            }
        } catch (e) {
            // ignore storage errors
        }
    }

    function getCurrentLang() {
        const stored = getStoredLang();
        return LANGS.includes(stored) ? stored : 'en';
    }

    function t(key, lang) {
        const dict = translations[lang] || translations['en'];
        return (dict && dict[key]) || translations['en'][key] || '';
    }

    /* Apply translations to elements with data-i18n */
    function applyTranslations(lang) {
        document.documentElement.lang = lang;

        const nodes = document.querySelectorAll('[data-i18n]');
        nodes.forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const value = t(key, lang);
            if (!value) return;

            // If element has data-i18n-html, set innerHTML; else use textContent.
            if (el.hasAttribute('data-i18n-html')) {
                el.innerHTML = value;
            } else {
                el.textContent = value;
            }
        });

        /* Update page titles where needed */
        const titleEl = document.querySelector('[data-i18n-title]');
        if (titleEl) {
            const key = titleEl.getAttribute('data-i18n-title');
            const val = t(key, lang);
            if (val) document.title = val;
        }
    }

    /* Create language switcher and inject into header */
    function addLanguageSwitcher() {
        // Avoid duplicate insertion
        if (document.getElementById('qd-lang-switcher')) return;

        const container = document.createElement('div');
        container.id = 'qd-lang-switcher';
        container.style.display = 'inline-flex';
        container.style.alignItems = 'center';
        container.style.gap = '6px';
        container.style.fontSize = '0.8rem';
        container.style.marginLeft = '12px';

        const currentLang = getCurrentLang();

        LANGS.forEach(function (code) {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.textContent = code.toUpperCase();
            btn.style.border = 'none';
            btn.style.background = 'transparent';
            btn.style.cursor = 'pointer';
            btn.style.padding = '2px 4px';
            btn.style.fontWeight = currentLang === code ? '700' : '500';
            btn.style.color = currentLang === code ? '#0f76te' : '#6b7280';

            if (currentLang === code) {
                btn.style.textDecoration = 'underline';
            }

            btn.addEventListener('click', function () {
                setStoredLang(code);
                applyTranslations(code);
                notifyLangChange(code);
                // Re-render switcher styles
                document.getElementById('qd-lang-switcher').remove();
                addLanguageSwitcher();
            });

            container.appendChild(btn);

            if (code !== LANGS[LANGS.length - 1]) {
                const sep = document.createElement('span');
                sep.textContent = '|';
                sep.style.color = '#d1d5db';
                sep.style.marginRight = '2px';
                container.appendChild(sep);
            }
        });

        // Try to append into header nav or logo area; fallback: top-right fixed.
        const navLinks = document.querySelector('.nav-links');
        if (navLinks) {
            navLinks.appendChild(container);
            return;
        }

        const headerInner = document.querySelector('.header-inner, .page-nav');
        if (headerInner) {
            headerInner.style.position = 'relative';
            container.style.position = 'absolute';
            container.style.right = '0';
            container.style.top = '50%';
            container.style.transform = 'translateY(-50%)';
            headerInner.appendChild(container);
            return;
        }

        // Fallback: fixed top-right for any page
        container.style.position = 'fixed';
        container.style.top = '8px';
        container.style.right = '12px';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
    }

    /* Language change listeners for dynamic content (e.g., tutorials grid) */
    var langChangeListeners = [];

    function notifyLangChange(lang) {
        langChangeListeners.forEach(function (fn) {
            try { fn(lang); } catch (e) { /* ignore */ } 
        });
    }

    /* Expose minimal API for other scripts (e.g., tutorials) */
    window.QD_I18N = {
        t: function (key) {
            return t(key, getCurrentLang());
        },
        getCurrentLang: getCurrentLang,
        onLangChange: function (callback) {
            if (typeof callback === 'function') {
                langChangeListeners.push(callback);
            }
        }
    };

    /* Initialize */
    (function init() {
        const lang = getCurrentLang();
        applyTranslations(lang);
        addLanguageSwitcher();
    })();
})();
