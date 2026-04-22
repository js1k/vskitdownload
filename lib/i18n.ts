export const locales = ['zh', 'en', 'fr', 'hi', 'ar', 'id', 'fil', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export type LocaleDirection = 'ltr' | 'rtl';

export type LocaleMeta = {
    code: Locale;
    nativeName: string;
    localeTag: string;
    ogLocale: string;
    dir: LocaleDirection;
    hreflang: string;
};

export type FeatureCard = {
    title: string;
    desc: string;
};

export type InstallStep = {
    title: string;
    desc: string;
};

export type FaqItem = {
    q: string;
    a: string;
};

export type LocaleDictionary = {
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string[];
    langMenuLabel: string;
    navFeatures: string;
    navInstall: string;
    navFaq: string;
    heroBadge: string;
    heroTitle: string;
    heroSubtitle: string;
    ctaPrimary: string;
    loadingText: string;
    packageLabel: string;
    updatedLabel: string;
    featuresTitle: string;
    featuresLead: string;
    features: FeatureCard[];
    installTitle: string;
    installSteps: InstallStep[];
    faqTitle: string;
    faqs: FaqItem[];
    finalTitle: string;
    finalLead: string;
    footerNote: string;
    screenshotAltPrefix: string;
    downloadNow: string;
};

export const localeMeta: Record<Locale, LocaleMeta> = {
    zh: {
        code: 'zh',
        nativeName: '简体中文',
        localeTag: 'zh-CN',
        ogLocale: 'zh_CN',
        dir: 'ltr',
        hreflang: 'zh-CN'
    },
    en: {
        code: 'en',
        nativeName: 'English',
        localeTag: 'en-US',
        ogLocale: 'en_US',
        dir: 'ltr',
        hreflang: 'en'
    },
    fr: {
        code: 'fr',
        nativeName: 'Français',
        localeTag: 'fr-FR',
        ogLocale: 'fr_FR',
        dir: 'ltr',
        hreflang: 'fr'
    },
    hi: {
        code: 'hi',
        nativeName: 'हिन्दी',
        localeTag: 'hi-IN',
        ogLocale: 'hi_IN',
        dir: 'ltr',
        hreflang: 'hi'
    },
    ar: {
        code: 'ar',
        nativeName: 'العربية',
        localeTag: 'ar-SA',
        ogLocale: 'ar_SA',
        dir: 'rtl',
        hreflang: 'ar'
    },
    id: {
        code: 'id',
        nativeName: 'Bahasa Indonesia',
        localeTag: 'id-ID',
        ogLocale: 'id_ID',
        dir: 'ltr',
        hreflang: 'id'
    },
    fil: {
        code: 'fil',
        nativeName: 'Filipino',
        localeTag: 'fil-PH',
        ogLocale: 'fil_PH',
        dir: 'ltr',
        hreflang: 'fil'
    },
    es: {
        code: 'es',
        nativeName: 'Español',
        localeTag: 'es-ES',
        ogLocale: 'es_ES',
        dir: 'ltr',
        hreflang: 'es'
    }
};

const dictionaries: Record<Locale, LocaleDictionary> = {
    zh: {
        metaTitle: 'VSKit Drama APK 下载 - 短剧视频安卓安装包',
        metaDescription: '下载 VSKit drama short video APK。页面通过官方接口实时解析下载地址，支持 Android 安装。',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', '短剧下载', 'com.community.vskit'],
        langMenuLabel: '切换语言',
        navFeatures: '功能介绍',
        navInstall: '安装教程',
        navFaq: '常见问题',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'VSKit 短剧 APK 下载站',
        heroSubtitle: '官方 VSKit Drama 应用下载站。点击下载按钮即可获取最新 APK 文件。',
        ctaPrimary: '下载 VSKit APK',
        loadingText: '正在获取最新 APK 地址...',
        packageLabel: '包名',
        updatedLabel: '接口更新时间',
        featuresTitle: 'VSKit 应用特色',
        featuresLead: '享受短剧视频的最佳体验。',
        features: [
            {
                title: '海量短剧内容',
                desc: '每天更新最新的短剧视频，随时随地观看。'
            },
            {
                title: '高清流畅播放',
                desc: '支持多种清晰度，快速加载无卡顿。'
            },
            {
                title: '个性化推荐',
                desc: '智能推荐算法，为你精选喜爱的内容。'
            },
            {
                title: '离线缓存播放',
                desc: '下载喜爱的短剧，无网络也能观看。'
            }
        ],
        installTitle: 'Android 安装步骤',
        installSteps: [
            {
                title: '点击下载按钮',
                desc: '获取最新的 VSKit APK 文件。'
            },
            {
                title: '允许未知来源安装',
                desc: '在系统设置中授权浏览器或文件管理器安装应用。'
            },
            {
                title: '安装并打开应用',
                desc: '安装完成后打开 VSKit，开始观看短剧内容。'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: 'VSKit 是什么？',
                a: 'VSKit 是一款专业的短剧视频应用，提供海量优质短剧内容。'
            },
            {
                q: '下载后如何安装？',
                a: '下载 APK 文件后，在文件管理器中点击安装，按照提示完成安装。'
            },
            {
                q: '支持哪些 Android 版本？',
                a: '支持 Android 5.0 及以上版本。'
            },
            {
                q: '应用是否免费使用？',
                a: '完全免费，无需付费即可观看所有内容。'
            }
        ],
        finalTitle: '开始下载 VSKit Drama APK',
        finalLead: '点击下载按钮，获取最新 APK 文件并安装。',
        footerNote: 'VSKit 与相关商标归其所属方所有。本页用于提供 VSKit APK 下载服务。',
        screenshotAltPrefix: 'VSKit 应用截图',
        downloadNow: '立即下载'
    },
    en: {
        metaTitle: 'VSKit Drama APK Download - Short Drama Android App',
        metaDescription: 'Download VSKit drama short video APK for Android. Get the latest APK file from the official interface.',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', 'drama apk download', 'com.community.vskit'],
        langMenuLabel: 'Switch language',
        navFeatures: 'Features',
        navInstall: 'Install Guide',
        navFaq: 'FAQ',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'VSKit Short Drama APK Download',
        heroSubtitle: 'The official VSKit Drama app download site. Click the download button to get the latest APK file.',
        ctaPrimary: 'Download VSKit APK',
        loadingText: 'Fetching latest APK URL...',
        packageLabel: 'Package',
        updatedLabel: 'Interface Updated',
        featuresTitle: 'VSKit App Features',
        featuresLead: 'Enjoy the best short drama video experience.',
        features: [
            {
                title: 'Massive Content Library',
                desc: 'New short dramas updated daily, watch anytime anywhere.'
            },
            {
                title: 'Crystal Clear Playback',
                desc: 'Multiple quality options with fast loading and smooth playback.'
            },
            {
                title: 'Smart Recommendations',
                desc: 'AI-powered suggestions tailored to your preferences.'
            },
            {
                title: 'Offline Download',
                desc: 'Save your favorite dramas to watch without internet.'
            }
        ],
        installTitle: 'Android Install Steps',
        installSteps: [
            {
                title: 'Tap download',
                desc: 'Get the latest VSKit APK file.'
            },
            {
                title: 'Allow unknown app source',
                desc: 'Enable install permission for your browser or file manager.'
            },
            {
                title: 'Install and open',
                desc: 'Finish setup and start watching short dramas.'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: 'What is VSKit?',
                a: 'VSKit is a professional short drama video app with a massive library of quality content.'
            },
            {
                q: 'How do I install after downloading?',
                a: 'Tap the APK file in your file manager and follow the installation prompts.'
            },
            {
                q: 'What Android versions are supported?',
                a: 'Supports Android 5.0 and above.'
            },
            {
                q: 'Is the app free to use?',
                a: 'Yes, completely free. No payment required to watch all content.'
            }
        ],
        finalTitle: 'Download VSKit Drama APK Now',
        finalLead: 'Click the download button to get the latest APK and install it.',
        footerNote: 'VSKit and related marks belong to their owners. This page provides VSKit APK download service.',
        screenshotAltPrefix: 'VSKit app screenshot',
        downloadNow: 'Download Now'
    },
    fr: {
        metaTitle: 'Télécharger VSKit Drama APK - App Android de mini-séries',
        metaDescription: "Téléchargez l'APK VSKit drama pour Android. Obtenez le fichier APK le plus récent.",
        metaKeywords: ['vskit', 'vskit apk', 'drama apk', 'short drama', 'télécharger vskit', 'com.community.vskit'],
        langMenuLabel: 'Changer de langue',
        navFeatures: 'Fonctionnalités',
        navInstall: "Guide d'installation",
        navFaq: 'FAQ',
        heroBadge: 'VSKIT DRAMA · APK VIDÉO COURTE',
        heroTitle: 'Téléchargement APK VSKit Drama',
        heroSubtitle: "Le site officiel de téléchargement de l'application VSKit Drama. Cliquez sur le bouton de téléchargement pour obtenir le fichier APK le plus récent.",
        ctaPrimary: 'Télécharger VSKit APK',
        loadingText: 'Récupération de la dernière URL APK...',
        packageLabel: 'Package',
        updatedLabel: 'Mise à jour interface',
        featuresTitle: 'Fonctionnalités de VSKit',
        featuresLead: 'Profitez de la meilleure expérience de vidéo courte.',
        features: [
            {
                title: 'Contenu massif',
                desc: "Nouveaux dramas mis à jour quotidiennement, regardez n'importe quand."
            },
            {
                title: 'Lecture cristalline',
                desc: 'Options de qualité multiples avec chargement rapide et lecture fluide.'
            },
            {
                title: 'Recommandations intelligentes',
                desc: "Suggestions alimentées par l'IA adaptées à vos préférences."
            },
            {
                title: 'Téléchargement hors ligne',
                desc: 'Enregistrez vos dramas préférés pour regarder sans Internet.'
            }
        ],
        installTitle: "Étapes d'installation Android",
        installSteps: [
            {
                title: 'Cliquer sur Télécharger',
                desc: 'Obtenez le fichier APK VSKit le plus récent.'
            },
            {
                title: 'Autoriser les sources inconnues',
                desc: "Autorisez l'installation depuis le navigateur ou le gestionnaire de fichiers."
            },
            {
                title: 'Installer puis ouvrir',
                desc: 'Terminez la configuration et commencez à regarder.'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: "Qu'est-ce que VSKit?",
                a: 'VSKit est une application vidéo de drama court avec une vaste bibliothèque de contenu de qualité.'
            },
            {
                q: 'Comment installer après le téléchargement?',
                a: 'Appuyez sur le fichier APK dans votre gestionnaire de fichiers et suivez les invites.'
            },
            {
                q: 'Quelles versions Android sont supportées?',
                a: 'Supporte Android 5.0 et supérieur.'
            },
            {
                q: "L'application est-elle gratuite?",
                a: 'Oui, complètement gratuit. Aucun paiement requis.'
            }
        ],
        finalTitle: 'Télécharger VSKit Drama APK',
        finalLead: "Cliquez sur le bouton de téléchargement pour obtenir et installer l'APK le plus récent.",
        footerNote: 'VSKit et marques associées appartiennent à leurs propriétaires. Cette page fournit le service de téléchargement APK.',
        screenshotAltPrefix: 'Capture VSKit',
        downloadNow: 'Télécharger'
    },
    hi: {
        metaTitle: 'VSKit Drama APK डाउनलोड - शॉर्ट ड्रामा Android ऐप',
        metaDescription: 'Android के लिए VSKit drama APK डाउनलोड करें। नवीनतम APK फ़ाइल प्राप्त करें।',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', 'drama apk download', 'com.community.vskit'],
        langMenuLabel: 'भाषा बदलें',
        navFeatures: 'सुविधाएं',
        navInstall: 'इंस्टॉलेशन गाइड',
        navFaq: 'FAQ',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'VSKit शॉर्ट ड्रामा APK डाउनलोड',
        heroSubtitle: 'VSKit Drama ऐप की आधिकारिक डाउनलोड साइट। नवीनतम APK फ़ाइल प्राप्त करने के लिए डाउनलोड बटन पर क्लिक करें।',
        ctaPrimary: 'VSKit APK डाउनलोड करें',
        loadingText: 'नवीनतम APK URL लाया जा रहा है...',
        packageLabel: 'पैकेज',
        updatedLabel: 'इंटरफ़ेस अपडेट समय',
        featuresTitle: 'VSKit ऐप की सुविधाएँ',
        featuresLead: 'शॉर्ट ड्रामा वीडियो का सर्वोत्तम अनुभव प्राप्त करें।',
        features: [
            {
                title: 'बड़ी कंटेंट लाइब्रेरी',
                desc: 'हर दिन नए ड्रामा अपडेट, कभी भी कहीं भी देखें।'
            },
            {
                title: 'क्रिस्टल क्लियर प्लेबैक',
                desc: 'कई गुणवत्ता विकल्प तेज़ लोडिंग और सहज प्लेबैक के साथ।'
            },
            {
                title: 'स्मार्ट सिफारिशें',
                desc: 'आपकी पसंद के अनुसार AI-संचालित सुझाव।'
            },
            {
                title: 'ऑफ़लाइन डाउनलोड',
                desc: 'अपने पसंदीदा ड्रामा को बिना इंटरनेट के देखने के लिए सहेजें।'
            }
        ],
        installTitle: 'Android इंस्टॉल स्टेप्स',
        installSteps: [
            {
                title: 'डाउनलोड बटन दबाएँ',
                desc: 'नवीनतम VSKit APK फ़ाइल प्राप्त करें।'
            },
            {
                title: 'Unknown source अनुमति दें',
                desc: 'अपने ब्राउज़र या फ़ाइल मैनेजर के लिए इंस्टॉल परमिशन सक्षम करें।'
            },
            {
                title: 'इंस्टॉल और खोलें',
                desc: 'सेटअप पूरा करें और शॉर्ट ड्रामा देखना शुरू करें।'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: 'VSKit क्या है?',
                a: 'VSKit एक व्यावसायिक शॉर्ट ड्रामा वीडियो ऐप है जिसमें गुणवत्ता वाली कंटेंट की विशाल लाइब्रेरी है।'
            },
            {
                q: 'डाउनलोड के बाद कैसे इंस्टॉल करें?',
                a: 'अपने फ़ाइल मैनेजर में APK फ़ाइल पर टैप करें और इंस्टॉलेशन का अनुसरण करें।'
            },
            {
                q: 'कौन सी Android संस्करण समर्थित हैं?',
                a: 'Android 5.0 और उससे ऊपर समर्थित है।'
            },
            {
                q: 'क्या ऐप उपयोग करने के लिए मुफ़्त है?',
                a: 'हाँ, पूरी तरह मुफ़्त। सभी कंटेंट देखने के लिए कोई भुगतान आवश्यक नहीं है।'
            }
        ],
        finalTitle: 'VSKit Drama APK डाउनलोड करें',
        finalLead: 'नवीनतम APK प्राप्त करने और इंस्टॉल करने के लिए डाउनलोड बटन पर क्लिक करें।',
        footerNote: 'VSKit और संबंधित ट्रेडमार्क उनके मालिकों के हैं। यह पेज VSKit APK डाउनलोड सेवा प्रदान करता है।',
        screenshotAltPrefix: 'VSKit ऐप स्क्रीनशॉट',
        downloadNow: 'अभी डाउनलोड करें'
    },
    ar: {
        metaTitle: 'تنزيل VSKit Drama APK - تطبيق الدراما القصيرة لأندرويد',
        metaDescription: 'حمّل VSKit drama APK لأندرويد. احصل على أحدث ملف APK من الواجهة الرسمية.',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', 'drama apk download', 'com.community.vskit'],
        langMenuLabel: 'تبديل اللغة',
        navFeatures: 'المزايا',
        navInstall: 'دليل التثبيت',
        navFaq: 'الأسئلة',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'تنزيل APK لتطبيق VSKit القصير',
        heroSubtitle: 'الموقع الرسمي لتنزيل تطبيق VSKit Drama. انقر على زر التنزيل للحصول على أحدث ملف APK.',
        ctaPrimary: 'تنزيل VSKit APK',
        loadingText: 'جاري جلب أحدث رابط APK...',
        packageLabel: 'اسم الحزمة',
        updatedLabel: 'وقت تحديث الواجهة',
        featuresTitle: 'مميزات تطبيق VSKit',
        featuresLead: 'استمتع بأفضل تجربة فيديو drama قصيرة.',
        features: [
            {
                title: 'محتوى ضخم',
                desc: 'دراما جديدة محدثة يوميًا، شاهد في أي وقت وأي مكان.'
            },
            {
                title: 'تشغيل صافي',
                desc: 'خيارات جودة متعددة مع تحميل سريع وتشغيل سلس.'
            },
            {
                title: 'توصيات ذكية',
                desc: 'اقتراحات مدعومة بالذكاء الاصطناعي حسب تفضيلاتك.'
            },
            {
                title: 'تحميل بدون إنترنت',
                desc: 'احفظ دراماتك المفضلة للمشاهدة بدون إنترنت.'
            }
        ],
        installTitle: 'خطوات التثبيت على أندرويد',
        installSteps: [
            {
                title: 'اضغط زر التنزيل',
                desc: 'احصل على أحدث ملف APK لـ VSKit.'
            },
            {
                title: 'السماح بمصدر غير معروف',
                desc: 'فعّل إذن التثبيت من المتصفح أو مدير الملفات.'
            },
            {
                title: 'ثبّت وافتح',
                desc: 'أكمل الإعداد وابدأ المشاهدة.'
            }
        ],
        faqTitle: 'الأسئلة الشائعة',
        faqs: [
            {
                q: 'ما هو VSKit؟',
                a: 'VSKit تطبيق دراما قصيرة احترافي يوفر مكتبة ضخمة من المحتوى الجيد.'
            },
            {
                q: 'كيف أثبت التطبيق بعد التنزيل؟',
                a: 'اضغط على ملف APK في مدير الملفات واتبع خطوات التثبيت.'
            },
            {
                q: 'ما إصدارات أندرويد المدعومة؟',
                a: 'يدعم أندرويد 5.0 والإصدارات الأحدث.'
            },
            {
                q: 'هل التطبيق مجاني الاستخدام؟',
                a: 'نعم، مجاني تماما. لا حاجة لدفع أي رسوم.'
            }
        ],
        finalTitle: 'ابدأ تنزيل VSKit Drama APK',
        finalLead: 'اضغط زر التنزيل للحصول على أحدث APK وثبته.',
        footerNote: 'جميع حقوق علامة VSKit والعلامات المرتبطة تعود لمالكيها. هذه الصفحة توفر خدمة تنزيل APK.',
        screenshotAltPrefix: 'لقطة VSKit',
        downloadNow: 'تنزيل الآن'
    },
    id: {
        metaTitle: 'Unduh VSKit Drama APK - Aplikasi Drama Pendek Android',
        metaDescription: 'Unduh VSKit drama APK untuk Android. Dapatkan file APK terbaru.',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', 'drama apk download', 'com.community.vskit'],
        langMenuLabel: 'Ganti bahasa',
        navFeatures: 'Fitur',
        navInstall: 'Panduan Instalasi',
        navFaq: 'FAQ',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'Unduh VSKit Short Drama APK',
        heroSubtitle: 'Situs download resmi aplikasi VSKit Drama. Klik tombol download untuk mendapatkan file APK terbaru.',
        ctaPrimary: 'Unduh VSKit APK',
        loadingText: 'Mengambil URL APK terbaru...',
        packageLabel: 'Paket',
        updatedLabel: 'Waktu update interface',
        featuresTitle: 'Fitur Aplikasi VSKit',
        featuresLead: 'Nikmati pengalaman video drama pendek terbaik.',
        features: [
            {
                title: 'Konten Masif',
                desc: 'Drama baru diperbarui setiap hari, tonton kapan saja di mana saja.'
            },
            {
                title: 'Pemutaran Jernih',
                desc: 'Beberapa pilihan kualitas dengan pemuatan cepat dan pemutaran lancar.'
            },
            {
                title: 'Rekomendasi Cerdas',
                desc: 'Saran bertenaga AI yang disesuaikan dengan preferensi Anda.'
            },
            {
                title: 'Unduh Offline',
                desc: 'Simpan drama favorit Anda untuk ditonton tanpa internet.'
            }
        ],
        installTitle: 'Langkah instal Android',
        installSteps: [
            {
                title: 'Tap tombol unduh',
                desc: 'Dapatkan file APK VSKit terbaru.'
            },
            {
                title: 'Izinkan sumber tidak dikenal',
                desc: 'Aktifkan izin install dari browser atau file manager.'
            },
            {
                title: 'Install dan buka',
                desc: 'Selesaikan setup dan mulai tonton.'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: 'Apa itu VSKit?',
                a: 'VSKit adalah aplikasi drama pendek profesional dengan perpustakaan konten berkualitas besar.'
            },
            {
                q: 'Bagaimana cara install setelah download?',
                a: 'Tap file APK di file manager dan ikuti petunjuk instalasi.'
            },
            {
                q: 'Versi Android apa yang didukung?',
                a: 'Mendukung Android 5.0 ke atas.'
            },
            {
                q: 'Apakah aplikasi gratis digunakan?',
                a: 'Ya, sepenuhnya gratis. Tidak perlu pembayaran apa pun.'
            }
        ],
        finalTitle: 'Unduh VSKit Drama APK sekarang',
        finalLead: 'Klik tombol download untuk mendapatkan dan install APK terbaru.',
        footerNote: 'VSKit dan merek terkait dimiliki oleh pemilik masing-masing. Halaman ini menyediakan layanan download APK.',
        screenshotAltPrefix: 'Screenshot VSKit',
        downloadNow: 'Unduh Sekarang'
    },
    fil: {
        metaTitle: 'VSKit Drama APK Download - Short Drama App para sa Android',
        metaDescription: 'I-download ang VSKit drama APK sa Android. Kunin ang pinakabagong APK file.',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', 'drama apk download', 'com.community.vskit'],
        langMenuLabel: 'Palitan ang wika',
        navFeatures: 'Mga Feature',
        navInstall: 'Install Guide',
        navFaq: 'FAQ',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'VSKit Short Drama APK Download',
        heroSubtitle: 'Ang opisyal na download site ng VSKit Drama app. I-click ang download button para makuha ang latest APK file.',
        ctaPrimary: 'I-download ang VSKit APK',
        loadingText: 'Kinukuha ang latest APK URL...',
        packageLabel: 'Package',
        updatedLabel: 'Oras ng update ng interface',
        featuresTitle: 'VSKit App Features',
        featuresLead: 'Tamasahin ang best short drama video experience.',
        features: [
            {
                title: 'Malaking Content Library',
                desc: 'Bagong drama daily update, manood anumang oras kahit saan.'
            },
            {
                title: 'Crystal Clear Playback',
                desc: 'Maraming quality options na may mabilis na loading at smooth playback.'
            },
            {
                title: 'Smart Recommendations',
                desc: 'AI-powered suggestions na para sa iyo.'
            },
            {
                title: 'Offline Download',
                desc: 'I-save ang favorite drama mo para manood kahit walang internet.'
            }
        ],
        installTitle: 'Android install steps',
        installSteps: [
            {
                title: 'Pindutin ang download',
                desc: 'Kunin ang latest VSKit APK file.'
            },
            {
                title: 'Payagan ang unknown source',
                desc: 'I-enable ang install permission para sa browser/file manager.'
            },
            {
                title: 'I-install at buksan',
                desc: 'Tapusin ang setup at simulan ang panonood.'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: 'Ano ang VSKit?',
                a: 'VSKit ay professional short drama video app na may malaking library ng quality content.'
            },
            {
                q: 'Paano mag-install pagkatapos mag-download?',
                a: 'I-tap ang APK file sa file manager at sundin ang install instructions.'
            },
            {
                q: 'Anong Android versions ang supported?',
                a: 'Suportado ang Android 5.0 at higher.'
            },
            {
                q: 'Free ba ang app na gamitin?',
                a: 'Oo, completely free. Walang payment na kailangan.'
            }
        ],
        finalTitle: 'I-download ang VSKit Drama APK',
        finalLead: 'I-click ang download button para makuha at i-install ang latest APK.',
        footerNote: 'Ang VSKit at related marks ay pag-aari ng kani-kanilang may-ari. Multilingual APK download service ang page na ito.',
        screenshotAltPrefix: 'VSKit screenshot',
        downloadNow: 'Download Now'
    },
    es: {
        metaTitle: 'Descargar VSKit Drama APK - App de drama corto para Android',
        metaDescription: 'Descarga VSKit drama APK para Android. Obtén el archivo APK más reciente.',
        metaKeywords: ['vskit', 'vskit apk', 'vskit drama', 'short drama apk', 'drama apk download', 'com.community.vskit'],
        langMenuLabel: 'Cambiar idioma',
        navFeatures: 'Características',
        navInstall: 'Guía de instalación',
        navFaq: 'FAQ',
        heroBadge: 'VSKIT DRAMA · SHORT VIDEO APK',
        heroTitle: 'Descarga de VSKit Short Drama APK',
        heroSubtitle: 'El sitio oficial de descarga de la aplicación VSKit Drama. Haz clic en el botón de descarga para obtener el archivo APK más reciente.',
        ctaPrimary: 'Descargar VSKit APK',
        loadingText: 'Obteniendo la última URL APK...',
        packageLabel: 'Paquete',
        updatedLabel: 'Actualizado por interfaz',
        featuresTitle: 'Características de VSKit',
        featuresLead: 'Disfruta de la mejor experiencia de video drama corto.',
        features: [
            {
                title: 'Contenido masivo',
                desc: 'Drama nuevo actualizado diariamente, mira en cualquier momento en cualquier lugar.'
            },
            {
                title: 'Reproducción cristalina',
                desc: 'Múltiples opciones de calidad con carga rápida y reproducción suave.'
            },
            {
                title: 'Recomendaciones inteligentes',
                desc: 'Sugerencias impulsadas por IA adaptadas a tus preferencias.'
            },
            {
                title: 'Descarga sin conexión',
                desc: 'Guarda tu drama favorito para ver sin internet.'
            }
        ],
        installTitle: 'Pasos de instalación en Android',
        installSteps: [
            {
                title: 'Pulsa descargar',
                desc: 'Obtén el archivo APK VSKit más reciente.'
            },
            {
                title: 'Permitir fuentes desconocidas',
                desc: 'Activa permisos de instalación para navegador o gestor de archivos.'
            },
            {
                title: 'Instalar y abrir',
                desc: 'Completa la instalación y comienza a ver.'
            }
        ],
        faqTitle: 'FAQ',
        faqs: [
            {
                q: '¿Qué es VSKit?',
                a: 'VSKit es una aplicación profesional de drama corto con una gran biblioteca de contenido de calidad.'
            },
            {
                q: '¿Cómo instalo después de descargar?',
                a: 'Toca el archivo APK en el administrador de archivos y sigue los pasos de instalación.'
            },
            {
                q: '¿Qué versiones de Android se admiten?',
                a: 'Admite Android 5.0 y superior.'
            },
            {
                q: '¿Es gratis usar la aplicación?',
                a: 'Sí, completamente gratis. No se requiere ningún pago.'
            }
        ],
        finalTitle: 'Descarga VSKit Drama APK ahora',
        finalLead: 'Haz clic en el botón de descarga para obtener e instalar el APK más reciente.',
        footerNote: 'VSKit y marcas relacionadas pertenecen a sus dueños. Esta página proporciona servicio de descarga APK.',
        screenshotAltPrefix: 'Captura VSKit',
        downloadNow: 'Descargar ahora'
    }
};

export function isLocale(value: string): value is Locale {
    return (locales as readonly string[]).includes(value);
}

export function getDictionary(locale: Locale): LocaleDictionary {
    return dictionaries[locale];
}

export function getLocaleMeta(locale: Locale): LocaleMeta {
    return localeMeta[locale];
}

export function getLocalePath(locale: Locale): string {
    return locale === defaultLocale ? '/' : `/${locale}`;
}

export function getAlternateLanguageMap(): Record<string, string> {
    const result: Record<string, string> = {};
    for (const locale of locales) {
        result[localeMeta[locale].hreflang] = getLocalePath(locale);
    }
    result['x-default'] = getLocalePath(defaultLocale);
    return result;
}
