/**
 * Liya Trails — instant client-side language switcher
 * Works across all pages via localStorage. No Google Translate.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'liyaLang';

  var T = {
    en: {
      nav_home: 'Home',
      nav_tours: 'Explore Tours',
      nav_about: 'About',
      nav_journals: 'Journals',
      nav_concierge: 'Concierge',
      footer_home: 'Home',
      footer_tours: 'Tours',
      footer_about: 'About',
      btn_book_wa: 'Book via WhatsApp',
      btn_inquire: 'Inquire on WhatsApp',
      btn_wa: 'WhatsApp Concierge',
      btn_all_tours: 'All Tours',
      btn_view_tours: 'View Journeys',
      btn_contact: 'Contact Concierge',
      btn_design_journey: 'Design Your Journey',
      btn_explore_experiences: 'View Journeys',
      btn_excursions: 'Excursions',
      btn_itineraries: 'Itineraries',
      btn_about_us: 'About Us',
      btn_why_us: 'Why Us',
      btn_best_time: 'Best Time to Visit',
      btn_gallery: 'Gallery',
      btn_faq: 'FAQ',
      btn_reviews: 'Reviews',
      btn_blog: 'Blog',
      btn_send_inquiry: 'Send Inquiry',
      btn_vip_login: 'Liya Circle',
      btn_guide: 'Send Me the Guide',
      hero_tag: 'Born on the Kenyan coast',
      hero_title: 'Private Kenya. Coast & Classic.',
      hero_sub: 'Marine days and high-touch safaris from the Indian Ocean shore to the Maasai Mara, Amboseli and beyond.',
      preloader_sub: 'Curating your journey...',
      chat_title: 'Liya Concierge',
      chat_sub: 'Quick answers · then WhatsApp',
      sec_how: 'How we work with you',
      sec_guest_notes: 'Guest Notes',
      sec_featured: 'Signature Journeys',
      sec_journals: 'Travel Journals',
      sec_begin: 'Begin your journey',
      contact_blurb: 'Tell us your dates and what you want to experience. We reply within a few hours and shape a private plan around you.',
      guide_title: 'Coastal Safari Guide 2026',
      guide_blurb: 'Free guide: best months for dolphins, Great Migration timing from the coast, and what to pack.',
      guide_email_ph: 'Your email address',
      vip_title: 'Liya Circle',
      vip_sub: 'Members-only concierge access'
    },
    sw: {
      nav_home: 'Nyumbani',
      nav_tours: 'Chunguza Ziara',
      nav_about: 'Kuhusu',
      nav_journals: 'Jarida',
      nav_concierge: 'Huduma',
      footer_home: 'Nyumbani',
      footer_tours: 'Ziara',
      footer_about: 'Kuhusu',
      btn_book_wa: 'Weka kupitia WhatsApp',
      btn_inquire: 'Uliza kwenye WhatsApp',
      btn_wa: 'WhatsApp Concierge',
      btn_all_tours: 'Ziara Zote',
      btn_view_tours: 'Tazama Safari',
      btn_contact: 'Wasiliana',
      btn_design_journey: 'Buni Safari Yako',
      btn_explore_experiences: 'Tazama Safari',
      btn_excursions: 'Safari za Siku',
      btn_itineraries: 'Ratiba',
      btn_about_us: 'Kuhusu Sisi',
      btn_why_us: 'Kwa Nini Sisi',
      btn_best_time: 'Wakati Bora',
      btn_gallery: 'Picha',
      btn_faq: 'Maswali',
      btn_reviews: 'Maoni',
      btn_blog: 'Blogu',
      btn_send_inquiry: 'Tuma Ombi',
      btn_vip_login: 'Liya Circle',
      btn_guide: 'Nitumie Mwongozo',
      hero_tag: 'Tumezaliwa pwani ya Kenya',
      hero_title: 'Kenya ya Kibinafsi. Pwani na Classic.',
      hero_sub: 'Siku za bahari na safari za hali ya juu kutoka pwani ya Bahari ya Hindi hadi Maasai Mara, Amboseli na zaidi.',
      preloader_sub: 'Tunatayarisha safari yako...',
      chat_title: 'Liya Concierge',
      chat_sub: 'Majibu ya haraka · kisha WhatsApp',
      sec_how: 'Jinsi tunavyofanya kazi nawe',
      sec_guest_notes: 'Maoni ya Wageni',
      sec_featured: 'Safari Maarufu',
      sec_journals: 'Jarida la Safari',
      sec_begin: 'Anza safari yako',
      contact_blurb: 'Tuambie tarehe na unachotaka. Tunajibu ndani ya masaa machache na kuunda mpango wa kibinafsi.',
      guide_title: 'Mwongozo wa Safari ya Pwani 2026',
      guide_blurb: 'Bure: miezi bora kwa pomboo, muda wa Great Migration kutoka pwani, na nini upake.',
      guide_email_ph: 'Barua pepe yako',
      vip_title: 'Liya Circle',
      vip_sub: 'Huduma ya wanachama pekee'
    },
    fr: {
      nav_home: 'Accueil',
      nav_tours: 'Explorer les circuits',
      nav_about: 'À propos',
      nav_journals: 'Journaux',
      nav_concierge: 'Conciergerie',
      footer_home: 'Accueil',
      footer_tours: 'Circuits',
      footer_about: 'À propos',
      btn_book_wa: 'Réserver via WhatsApp',
      btn_inquire: 'Demander sur WhatsApp',
      btn_wa: 'Conciergerie WhatsApp',
      btn_all_tours: 'Tous les circuits',
      btn_view_tours: 'Voir les voyages',
      btn_contact: 'Contacter',
      btn_design_journey: 'Concevoir votre voyage',
      btn_explore_experiences: 'Voir les voyages',
      btn_excursions: 'Excursions',
      btn_itineraries: 'Itinéraires',
      btn_about_us: 'À propos de nous',
      btn_why_us: 'Pourquoi nous',
      btn_best_time: 'Meilleure période',
      btn_gallery: 'Galerie',
      btn_faq: 'FAQ',
      btn_reviews: 'Avis',
      btn_blog: 'Blog',
      btn_send_inquiry: 'Envoyer une demande',
      btn_vip_login: 'Liya Circle',
      btn_guide: 'Recevoir le guide',
      hero_tag: 'Nés sur la côte kenyane',
      hero_title: 'Kenya privé. Côte & Classic.',
      hero_sub: 'Journées marines et safaris haut de gamme de l’océan Indien au Maasai Mara, Amboseli et au-delà.',
      preloader_sub: 'Préparation de votre voyage...',
      chat_title: 'Liya Concierge',
      chat_sub: 'Réponses rapides · puis WhatsApp',
      sec_how: 'Comment nous travaillons avec vous',
      sec_guest_notes: 'Notes des voyageurs',
      sec_featured: 'Voyages signature',
      sec_journals: 'Carnets de voyage',
      sec_begin: 'Commencez votre voyage',
      contact_blurb: 'Indiquez vos dates et vos envies. Nous répondons en quelques heures et construisons un plan privé autour de vous.',
      guide_title: 'Guide Safari Côtier 2026',
      guide_blurb: 'Guide gratuit : meilleurs mois pour les dauphins, migration depuis la côte, et quoi emporter.',
      guide_email_ph: 'Votre adresse e-mail',
      vip_title: 'Liya Circle',
      vip_sub: 'Accès conciergerie réservé aux membres'
    },
    it: {
      nav_home: 'Home',
      nav_tours: 'Esplora i tour',
      nav_about: 'Chi siamo',
      nav_journals: 'Diari',
      nav_concierge: 'Concierge',
      footer_home: 'Home',
      footer_tours: 'Tour',
      footer_about: 'Chi siamo',
      btn_book_wa: 'Prenota via WhatsApp',
      btn_inquire: 'Richiedi su WhatsApp',
      btn_wa: 'Concierge WhatsApp',
      btn_all_tours: 'Tutti i tour',
      btn_view_tours: 'Vedi i viaggi',
      btn_contact: 'Contatta',
      btn_design_journey: 'Progetta il tuo viaggio',
      btn_explore_experiences: 'Vedi i viaggi',
      btn_excursions: 'Escursioni',
      btn_itineraries: 'Itinerari',
      btn_about_us: 'Chi siamo',
      btn_why_us: 'Perché noi',
      btn_best_time: 'Periodo migliore',
      btn_gallery: 'Galleria',
      btn_faq: 'FAQ',
      btn_reviews: 'Recensioni',
      btn_blog: 'Blog',
      btn_send_inquiry: 'Invia richiesta',
      btn_vip_login: 'Liya Circle',
      btn_guide: 'Inviami la guida',
      hero_tag: 'Nati sulla costa keniota',
      hero_title: 'Kenya privato. Costa & Classic.',
      hero_sub: 'Giornate marine e safari di alto livello dalla costa dell’Oceano Indiano al Maasai Mara, Amboseli e oltre.',
      preloader_sub: 'Prepariamo il tuo viaggio...',
      chat_title: 'Liya Concierge',
      chat_sub: 'Risposte rapide · poi WhatsApp',
      sec_how: 'Come lavoriamo con te',
      sec_guest_notes: 'Note degli ospiti',
      sec_featured: 'Viaggi signature',
      sec_journals: 'Diari di viaggio',
      sec_begin: 'Inizia il tuo viaggio',
      contact_blurb: 'Dicci le date e cosa desideri. Rispondiamo in poche ore e creiamo un piano privato intorno a te.',
      guide_title: 'Guida Safari Costiero 2026',
      guide_blurb: 'Guida gratuita: mesi migliori per i delfini, migrazione dalla costa e cosa portare.',
      guide_email_ph: 'La tua email',
      vip_title: 'Liya Circle',
      vip_sub: 'Accesso concierge riservato ai membri'
    },
    de: {
      nav_home: 'Start',
      nav_tours: 'Touren entdecken',
      nav_about: 'Über uns',
      nav_journals: 'Journale',
      nav_concierge: 'Concierge',
      footer_home: 'Start',
      footer_tours: 'Touren',
      footer_about: 'Über uns',
      btn_book_wa: 'Per WhatsApp buchen',
      btn_inquire: 'Per WhatsApp anfragen',
      btn_wa: 'WhatsApp Concierge',
      btn_all_tours: 'Alle Touren',
      btn_view_tours: 'Reisen ansehen',
      btn_contact: 'Kontakt',
      btn_design_journey: 'Reise gestalten',
      btn_explore_experiences: 'Reisen ansehen',
      btn_excursions: 'Ausflüge',
      btn_itineraries: 'Routen',
      btn_about_us: 'Über uns',
      btn_why_us: 'Warum wir',
      btn_best_time: 'Beste Zeit',
      btn_gallery: 'Galerie',
      btn_faq: 'FAQ',
      btn_reviews: 'Bewertungen',
      btn_blog: 'Blog',
      btn_send_inquiry: 'Anfrage senden',
      btn_vip_login: 'Liya Circle',
      btn_guide: 'Guide senden',
      hero_tag: 'Geboren an der kenianischen Küste',
      hero_title: 'Privates Kenia. Küste & Classic.',
      hero_sub: 'Meerestage und hochwertige Safaris vom Indischen Ozean bis Maasai Mara, Amboseli und darüber hinaus.',
      preloader_sub: 'Ihre Reise wird vorbereitet...',
      chat_title: 'Liya Concierge',
      chat_sub: 'Schnelle Antworten · dann WhatsApp',
      sec_how: 'So arbeiten wir mit Ihnen',
      sec_guest_notes: 'Gästenotizen',
      sec_featured: 'Signature-Reisen',
      sec_journals: 'Reisejournale',
      sec_begin: 'Beginnen Sie Ihre Reise',
      contact_blurb: 'Nennen Sie uns Ihre Daten und Wünsche. Wir antworten innerhalb weniger Stunden und gestalten einen privaten Plan.',
      guide_title: 'Küsten-Safari-Guide 2026',
      guide_blurb: 'Kostenloser Guide: beste Monate für Delfine, Migration von der Küste und Packliste.',
      guide_email_ph: 'Ihre E-Mail-Adresse',
      vip_title: 'Liya Circle',
      vip_sub: 'Mitglieder-exklusiver Concierge-Zugang'
    },
    es: {
      nav_home: 'Inicio',
      nav_tours: 'Explorar tours',
      nav_about: 'Nosotros',
      nav_journals: 'Diarios',
      nav_concierge: 'Concierge',
      footer_home: 'Inicio',
      footer_tours: 'Tours',
      footer_about: 'Nosotros',
      btn_book_wa: 'Reservar por WhatsApp',
      btn_inquire: 'Consultar por WhatsApp',
      btn_wa: 'Concierge WhatsApp',
      btn_all_tours: 'Todos los tours',
      btn_view_tours: 'Ver viajes',
      btn_contact: 'Contactar',
      btn_design_journey: 'Diseña tu viaje',
      btn_explore_experiences: 'Ver viajes',
      btn_excursions: 'Excursiones',
      btn_itineraries: 'Itinerarios',
      btn_about_us: 'Sobre nosotros',
      btn_why_us: 'Por qué nosotros',
      btn_best_time: 'Mejor época',
      btn_gallery: 'Galería',
      btn_faq: 'FAQ',
      btn_reviews: 'Reseñas',
      btn_blog: 'Blog',
      btn_send_inquiry: 'Enviar consulta',
      btn_vip_login: 'Liya Circle',
      btn_guide: 'Enviarme la guía',
      hero_tag: 'Nacidos en la costa de Kenia',
      hero_title: 'Kenia privada. Costa y Classic.',
      hero_sub: 'Días marinos y safaris de alto nivel desde el océano Índico hasta el Maasai Mara, Amboseli y más allá.',
      preloader_sub: 'Preparando tu viaje...',
      chat_title: 'Liya Concierge',
      chat_sub: 'Respuestas rápidas · luego WhatsApp',
      sec_how: 'Cómo trabajamos contigo',
      sec_guest_notes: 'Notas de huéspedes',
      sec_featured: 'Viajes signature',
      sec_journals: 'Diarios de viaje',
      sec_begin: 'Comienza tu viaje',
      contact_blurb: 'Cuéntanos tus fechas y lo que deseas. Respondemos en pocas horas y diseñamos un plan privado.',
      guide_title: 'Guía Safari Costero 2026',
      guide_blurb: 'Guía gratis: mejores meses para delfines, migración desde la costa y qué empacar.',
      guide_email_ph: 'Tu correo electrónico',
      vip_title: 'Liya Circle',
      vip_sub: 'Acceso concierge exclusivo para miembros'
    },
    zh: {
      nav_home: '首页',
      nav_tours: '探索行程',
      nav_about: '关于我们',
      nav_journals: '游记',
      nav_concierge: '礼宾服务',
      footer_home: '首页',
      footer_tours: '行程',
      footer_about: '关于',
      btn_book_wa: '通过WhatsApp预订',
      btn_inquire: 'WhatsApp咨询',
      btn_wa: 'WhatsApp礼宾',
      btn_all_tours: '全部行程',
      btn_view_tours: '查看旅程',
      btn_contact: '联系我们',
      btn_design_journey: '定制您的旅程',
      btn_explore_experiences: '查看旅程',
      btn_excursions: '短途游览',
      btn_itineraries: '行程安排',
      btn_about_us: '关于我们',
      btn_why_us: '为何选择我们',
      btn_best_time: '最佳季节',
      btn_gallery: '图库',
      btn_faq: '常见问题',
      btn_reviews: '评价',
      btn_blog: '博客',
      btn_send_inquiry: '发送咨询',
      btn_vip_login: 'Liya Circle',
      btn_guide: '发送指南给我',
      hero_tag: '源自肯尼亚海岸',
      hero_title: '私享肯尼亚。海岸与经典。',
      hero_sub: '从印度洋海岸到马赛马拉、安博塞利及更远的海滨日与高品质狩猎之旅。',
      preloader_sub: '正在为您筹备旅程...',
      chat_title: 'Liya礼宾',
      chat_sub: '快速解答 · 随后WhatsApp',
      sec_how: '我们如何与您合作',
      sec_guest_notes: '旅客评价',
      sec_featured: '精选旅程',
      sec_journals: '旅行札记',
      sec_begin: '开启您的旅程',
      contact_blurb: '告诉我们您的日期与期望。我们会在数小时内回复，并为您量身定制私人方案。',
      guide_title: '2026海岸狩猎指南',
      guide_blurb: '免费指南：看海豚的最佳月份、从海岸出发的大迁徙时间，以及打包清单。',
      guide_email_ph: '您的电子邮箱',
      vip_title: 'Liya Circle',
      vip_sub: '会员专属礼宾通道'
    }
  };

  function getLang() {
    try {
      return localStorage.getItem(STORAGE_KEY) || 'en';
    } catch (e) {
      return 'en';
    }
  }

  function applyTranslations(code) {
    var dict = T[code] || T.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) {
        el.setAttribute('placeholder', dict[key]);
      }
    });
    document.documentElement.lang = code === 'zh' ? 'zh-CN' : code;
  }

  function syncDropdown(code) {
    var sel = document.getElementById('customLangDropdown');
    if (sel && sel.value !== code) {
      sel.value = code;
    }
  }

  window.setLanguage = function (code) {
    if (!T[code]) code = 'en';
    try {
      localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {}
    applyTranslations(code);
    syncDropdown(code);
  };

  // Restore on every page load — instant, no Google
  function init() {
    var code = getLang();
    applyTranslations(code);
    syncDropdown(code);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Safe no-op if page doesn't define its own currency switcher (tours/index have real ones)
  if (typeof window.switchWealthCurrency !== 'function') {
    window.switchWealthCurrency = function (currency) {
      try { localStorage.setItem('liyaCurrency', currency); } catch (e) {}
    };
  }

})();
