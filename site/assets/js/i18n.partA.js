/* i18n for QarzDaftar static site (EN / RU / UZ) */
(function () {
    const STORAGE_KEY = 'qd_site_lang';

    /* Translation dictionary */
    const translations = {
        en: {
            // NAV
            nav_features: "Features",
            nav_howItWorks: "How It Works",
            nav_tutorials: "Tutorials",
            nav_privacyPolicy: "Privacy Policy",
            nav_termsOfUse: "Terms of Use",
            nav_dataDeletion: "Data Deletion",

            // HERO
            hero_label: "Android App · Available on Google Play",
            hero_title: "Track Loans & Debts with Confidence",
            hero_subtitle: "QarzDaftar is a secure, privacy-first Android app for managing personal loans and debts. Back up to your Google Drive, share ledgers with partners, and keep everything organized — all on your device.",
            btn_getOnGooglePlay: "Get it on Google Play",
            btn_learnMore: "Learn more",
            hero_youtubeText: "Watch on YouTube:",

            // TRUST STRIP
            trust_secureSignIn: "Secure Google Sign-In",
            trust_encryptedBackups: "Encrypted Backups on Google Drive",
            trust_sharedLedgers: "Private Shared Ledgers",

            // FEATURES
            features_title: "Everything You Need to Track Debts",
            features_subtitle: "QarzDaftar is built for clarity, privacy, and long-term reliability.",

            feature_personalLoansTitle: "Personal Loans & Debts",
            feature_personalLoansDesc: "Track money you owe or are owed with clear balances and history.",

            feature_sharedLedgerTitle: "Shared Ledger",
            feature_sharedLedgerDesc: "Link a partner’s device to sync shared accounts via Google Drive.",

            feature_backupSyncTitle: "Google Drive Backup & Sync",
            feature_backupSyncDesc: "Safely back up your data to your own Google Drive account.",

            feature_multiLangTitle: "Multi-Language Support",
            feature_multiLangDesc: "Available in 21 languages including English, Russian, Uzbek, and more.",

            feature_biometricTitle: "Biometric Lock & Privacy",
            feature_biometricDesc: "Protect the app with fingerprint or face recognition.",

            feature_exportTitle: "Export to PDF & Excel",
            feature_exportDesc: "Generate reports for your records (Pro subscription).",

            // HOW IT WORKS
            howItWorks_title: "How QarzDaftar Works",
            howItWorks_subtitle: "Simple steps to get started — no web login required.",

            step1_installTitle: "Install the App",
            step1_installDesc: "Download QarzDaftar from Google Play on your Android device.",

            step2_signInTitle: "Sign In with Google",
            step2_signInDesc: "Use secure Google Sign-In to enable backups and shared ledgers.",

            step3_addLoansTitle: "Add Your Loans & Debts",
            step3_addLoansDesc: "Create accounts, log transactions, attach receipts, and track balances.",

            step4_backupSyncTitle: "Back Up & Sync",
            step4_backupSyncDesc: "Enable Google Drive backup and optionally share a ledger with a partner.",

            // VIDEO SECTION
            videoSection_title: "See QarzDaftar in Action",
            videoSection_subtitle: "Watch our short video to see how the app works, or explore step-by-step tutorials.",
            btn_watchOnYouTube: "Watch on YouTube",
            btn_viewTutorials: "View Tutorials",

            // REVIEWER NOTE (above footer)
            reviewerNote_title: "Important Note for Reviewers and New Users",
            reviewerNote_body: 'QarzDaftar is an Android mobile application. There is no web login or browser-based dashboard — all actions happen inside the app on your device.<br>To get started, install from <a href="https://play.google.com/store/apps/details?id=uz.devior.qarzdaftar" target="_blank" rel="noopener">Google Play</a>, then sign in with Google and manage your data directly in the app.',

            // FOOTER
            footer_tagline: "Personal Debt & Loan Tracker",
            footer_supportLabel: "For support:",
            footer_link_tutorials: "Tutorials",
            footer_link_privacyPolicy: "Privacy Policy",
            footer_link_termsOfUse: "Terms of Use",
            footer_link_dataDeletion: "Data Deletion",
            footer_link_googlePlay: "Google Play",

            // TUTORIALS PAGE
            backToQarzDaftar: "Back to QarzDaftar",
            tutorials_heroTitle: "QarzDaftar Tutorials",
            tutorials_heroSubtitle: "Personal Debt & Loan Tracker — Video Guides",

            tutorial1_title: "QarzDaftar #1 — Overview and Settings",
            tutorial1_desc: "General overview of the app, interface navigation, language selection, security settings, and basic configuration.",

            tutorial2_title: "QarzDaftar #2 — Accounts, Transactions, and Export",
            tutorial2_desc: "How to create accounts, add transactions, attach receipts, manage balances, and export data to PDF or Excel.",

            tutorial3_title: "QarzDaftar #3 — Cloud Backup and Restore",
            tutorial3_desc: "How to enable Google Drive backup, restore your data on a new device, and use the Shared Ledger feature."
        },

        ru: {
            // NAV
            nav_features: "Возможности",
            nav_howItWorks: "Как это работает",
            nav_tutorials: "Обучение",
            nav_privacyPolicy: "Политика конфиденциальности",
            nav_termsOfUse: "Условия использования",
            nav_dataDeletion: "Удаление данных",

            // HERO
            hero_label: "Android-приложение · Доступно в Google Play",
            hero_title: "Контролируйте займы и долги уверенно",
            hero_subtitle: "QarzDaftar — безопасное Android-приложение для учёта личных займов и долгов. Резервное копирование в Google Drive, общие журналы с партнёрами и полный порядок — всё на вашем устройстве.",
            btn_getOnGooglePlay: "Скачать в Google Play",
            btn_learnMore: "Подробнее",
            hero_youtubeText: "Смотреть на YouTube:",

            // TRUST STRIP
            trust_secureSignIn: "Безопасный вход через Google",
            trust_encryptedBackups: "Зашифрованные резервные копии в Google Drive",
            trust_sharedLedgers: "Приватные общие журналы",

            // FEATURES
            features_title: "Всё необходимое для учёта долгов",
            features_subtitle: "QarzDaftar создан с упором на ясность, конфиденциальность и надёжность.",

            feature_personalLoansTitle: "Личные займы и долги",
            feature_personalLoansDesc: "Отслеживайте, что должны вы или вам, с чёткими балансами и историей операций.",

            feature_sharedLedgerTitle: "Общий журнал",
            feature_sharedLedgerDesc: "Привяжите устройство партнёра для синхронизации общих счетов через Google Drive.",

            feature_backupSyncTitle: "Резервное копирование и синхронизация в Google Drive",
            feature_backupSyncDesc: "Безопасно храните данные в своём аккаунте Google Drive.",

            feature_multiLangTitle: "Поддержка нескольких языков",
            feature_multiLangDesc: "Доступно на 21 языке, включая английский, русский и узбекский.",

            feature_biometricTitle: "Биометрическая защита и конфиденциальность",
            feature_biometricDesc: "Защитите приложение отпечатком пальца или распознаванием лица.",

            feature_exportTitle: "Экспорт в PDF и Excel",
            feature_exportDesc: "Формируйте отчёты для своих записей (подписка Pro).",

            // HOW IT WORKS
            howItWorks_title: "Как работает QarzDaftar",
            howItWorks_subtitle: "Простые шаги для начала — веб-вход не требуется.",

            step1_installTitle: "Установите приложение",
            step1_installDesc: "Скачайте QarzDaftar из Google Play на ваше Android-устройство.",

            step2_signInTitle: "Войдите через Google",
            step2_signInDesc: "Используйте безопасный вход через Google для резервного копирования и общих журналов.",

            step3_addLoansTitle: "Добавьте займы и долги",
            step3_addLoansDesc: "Создавайте счета, фиксируйте операции, прикрепляйте чеки и отслеживайте балансы.",

            step4_backupSyncTitle: "Резервное копирование и синхронизация",
            step4_backupSyncDesc: "Включите резервное копирование в Google Drive и при необходимости поделитесь журналом с партнёром.",

            // VIDEO SECTION
            videoSection_title: "Посмотрите QarzDaftar в действии",
            videoSection_subtitle: "Смотрите короткое видео о работе приложения или изучайте пошаговые инструкции.",
            btn_watchOnYouTube: "Смотреть на YouTube",
            btn_viewTutorials: "Смотреть обучение",

            // REVIEWER NOTE (above footer)
            reviewerNote_title: "Важное примечание для рецензентов и новых пользователей",
            reviewerNote_body: 'QarzDaftar — это мобильное Android-приложение. Веб-входа или панели в браузере нет — все действия выполняются внутри приложения на вашем устройстве.<br>Чтобы начать, установите приложение из <a href="https://play.google.com/store/apps/details?id=uz.devior.qarzdaftar" target="_blank" rel="noopener">Google Play</a>, войдите через Google и управляйте данными прямо в приложении.',

            // FOOTER
            footer_tagline: "Персональный учёт долгов и займов",
            footer_supportLabel: "Для поддержки:",
            footer_link_tutorials: "Обучение",
            footer_link_privacyPolicy: "Политика конфиденциальности",
            footer_link_termsOfUse: "Условия использования",
            footer_link_dataDeletion: "Удаление данных",
            footer_link_googlePlay: "Google Play",

            // TUTORIALS PAGE
            backToQarzDaftar: "На главную QarzDaftar",
            tutorials_heroTitle: "Обучающие материалы QarzDaftar",
            tutorials_heroSubtitle: "Персональный учёт долгов и займов — Видеоинструкции",

            tutorial1_title: "QarzDaftar #1 — Обзор и настройки",
            tutorial1_desc: "Общий обзор приложения, навигация по интерфейсу, выбор языка, параметры безопасности и базовая настройка.",

            tutorial2_title: "QarzDaftar #2 — Счета, операции и экспорт",
            tutorial2_desc: "Как создавать счета, добавлять операции, прикреплять чеки, управлять балансами и экспортировать данные в PDF или Excel.",

            tutorial3_title: "QarzDaftar #3 — Облачное резервное копирование и восстановление",
            tutorial3_desc: "Как включить резервное копирование в Google Drive, восстановить данные на новом устройстве и использовать функцию общего журнала."
        },

        uz: {
            // NAV
            nav_features: "Imkoniyatlar",
            nav_howItWorks: "Qanday ishlaydi",
            nav_tutorials: "Darsliklar",
            nav_privacyPolicy: "Maxfiylik siyosati",
            nav_termsOfUse: "Foydalanish shartlari",
            nav_dataDeletion: "Ma’lumotlarni o‘chirish",

            // HERO
            hero_label: "Android ilova · Google Play’dan yuklab oling",
            hero_title: "Qarz va qarzdorliklarni ishonch bilan boshqaring",
            hero_subtitle: "QarzDaftar — shaxsiy qarz va qarzdorliklarni boshqarish uchun xavfsiz, maxfiy Android ilova. Google Drive’ga zaxira nusxa oling, sheriklar bilan kitoblarni ulashing va hamma narsani tartibli saqlang — hammasi qurilmangizda.",
            btn_getOnGooglePlay: "Google Play’dan yuklab olish",
            btn_learnMore: "Batafsil",
            hero_youtubeText: "YouTube’da tomosha qiling:",

            // TRUST STRIP
            trust_secureSignIn: "Xavfsiz Google orqali kirish",
            trust_encryptedBackups: "Google Drive’da shifrlangan zaxira nusxalar",
            trust_sharedLedgers: "Maxfiy umumiy kitoblar",

            // FEATURES
            features_title: "Qarzlarni kuzatish uchun kerakli hamma narsa",
            features_subtitle: "QarzDaftar tushunarlik, maxfiy va uzoq muddatli ishonchlilik uchun yaratilgan.",

            feature_personalLoansTitle: "Shaxsiy qarzlar va qarzdorliklar",
            feature_personalLoansDesc: "Siz bergan yoki olgan pulni aniq balans va tarix bilan kuzating.",

            feature_sharedLedgerTitle: "Umumiy kitob (Shared Ledger)",
            feature_sharedLedgerDesc: "Sherik qurilmasini ulash orqali Google Drive’da umumiy hisoblarni sinxronlashtiring.",

            feature_backupSyncTitle: "Google Drive zaxira va sinxronlash",
            feature_backupSyncDesc: "Ma’lumotlaringizni o‘z Google Drive akkauntingizga xavfsiz saqlang.",

            feature_multiLangTitle: "Ko‘p tilli qo‘llab-quvvatlash",
            feature_multiLangDesc: "Ingliz, rus, o‘zbek va boshqa 21 tilda mavjud.",

            feature_biometricTitle: "Biometrik qulf va maxfiylik",
            feature_biometricDesc: "Ilovani barmoq izi yoki yuz orqali himoyalang.",

            feature_exportTitle: "PDF va Excel’ga eksport",
            feature_exportDesc: "Yozuvlaringiz uchun hisobotlar yarating (Pro obuna).",

            // HOW IT WORKS
            howItWorks_title: "QarzDaftar qanday ishlaydi",
            howItWorks_subtitle: "Boshlash uchun oddiy qadamlar — veb-kirish talab qilinmaydi.",

            step1_installTitle: "Ilovani o‘rnating",
            step1_installDesc: "QarzDaftar’ni Google Play’dan Android qurilmangizga yuklab oling.",

            step2_signInTitle: "Google orqali kiring",
            step2_signInDesc: "Zaxira nusxalar va umumiy kitoblar uchun xavfsiz Google kirishdan foydalaning.",

            step3_addLoansTitle: "Qarz va qarzdorliklarni qo‘shing",
            step3_addLoansDesc: "Hisoblar yarating, operatsiyalarni yozib boring, kvitansiyalar biriktiring va balanslarni kuzating.",

            step4_backupSyncTitle: "Zaxira nusxa va sinxronlash",
            step4_backupSyncDesc: "Google Drive zaxirani yoqing va xohlasangiz kitobni sherik bilan ulashing.",

            // VIDEO SECTION
            videoSection_title: "QarzDaftar’ni amalda ko‘ring",
            videoSection_subtitle: "Ilova qanday ishlaydi haqida qisqa videoni tomosha qiling yoki bosqichma-bosqich darsliklarni ko‘rib chiqing.",
            btn_watchOnYouTube: "YouTube’da tomosha qilish",
            btn_viewTutorials: "Darsliklarni ko‘rish",

            // REVIEWER NOTE (above footer)
            reviewerNote_title: "Sharhlovchilar va yangi foydalanuvchilar uchun muhim eslatma",
            reviewerNote_body: 'QarzDaftar — bu Android mobil ilova. Veb-kirish yoki brauzer paneli yo‘q — barcha harakatlar qurilmangizdagi ilova ichida amalga oshiriladi.<br>Boshlash uchun <a href="https://play.google.com/store/apps/details?id=uz.devior.qarzdaftar" target="_blank" rel="noopener">Google Play</a>’dan yuklab oling, Google orqali kiring va ma’lumotlarni to‘g‘ridan-to‘g‘ri ilovada boshqaring.',

            // FOOTER
            footer_tagline: "Shaxsiy qarz va qarzdorlik trakeri",
            footer_supportLabel: "Yordam uchun:",
            footer_link_tutorials: "Darsliklar",
            footer_link_privacyPolicy: "Maxfiylik siyosati",
            footer_link_termsOfUse: "Foydalanish shartlari",
            footer_link_dataDeletion: "Ma’lumotlarni o‘chirish",
            footer_link_googlePlay: "Google Play",

            // TUTORIALS PAGE
            backToQarzDaftar: "QarzDaftar’ga qaytish",
            tutorials_heroTitle: "QarzDaftar darsliklari",
            tutorials_heroSubtitle: "Shaxsiy qarz va qarzdorlik trakeri — Video ko‘rsatmalar",

            tutorial1_title: "QarzDaftar #1 — Umumiy ko‘rinish va sozlamalar",
            tutorial1_desc: "Ilova bo‘yicha umumiy ma’lumot, interfeysda harakatlanish, til tanlash, xavfsizlik sozlamalari va asosiy konfiguratsiya.",

            tutorial2_title: "QarzDaftar #2 — Hisoblar, operatsiyalar va eksport",
            tutorial2_desc: "Hisob yaratish, operatsiyalar qo‘shish, kvitansiyalar biriktirish, balanslarni boshqarish va ma’lumotlarni PDF yoki Excel’ga eksport qilish.",

            tutorial3_title: "QarzDaftar #3 — Bulutli zaxira nusxa va tiklash",
            tutorial3_desc: "Google Drive zaxirani yoqish, yangi qurilmada ma’lumotlarni tiklash va umumiy kitob (Shared Ledger) funksiyasidan foydalanish."
        }
    };
