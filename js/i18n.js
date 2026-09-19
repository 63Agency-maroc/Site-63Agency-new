const STORAGE_KEY = '63agency-lang';

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.apply': 'Parler à un expert',
    'nav.open': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',

    'hero.eyebrow': 'Agence spécialisée en génération de prospects qualifiés pour les entreprises de services.',
    'hero.title': 'Générez entre <span class="hero__mark">150 et 14000</span><br>prospects <span class="hero__mark">qualifiés</span> chaque mois.',
    'hero.subtitle': 'Des leads prêts à prendre rendez-vous, adaptés à votre capacité et à vos objectifs.',
    'hero.cta': 'Parler à un expert',
    'partners.title': 'Ils nous font<br>confiance',
    'partners.aria': 'Partenaires',

    'why.title': 'Pourquoi 63 Agency existe',
    'why.text': "Trop d'entreprises paient pour de la visibilité et reçoivent des leads froids. 63 Agency construit un système d'acquisition clair : attirer les bonnes personnes, les qualifier, et les transformer en rendez-vous commerciaux. Si vous vendez un service et voulez des prospects réellement intéressés, vous êtes au bon endroit.",
    'why.alt': 'Fondateur de 63 Agency',

    'statement.title': 'Une chose claire dès la première seconde',
    'statement.text': '63 Agency génère des prospects qualifiés pour les entreprises de services, pas juste des clics, pas juste de la notoriété.',
    'service.monetise': 'Attirer',
    'service.monetise.desc': 'Contenus et campagnes pour capter les bons clients potentiels.',
    'service.uplevel': 'Qualifier',
    'service.uplevel.desc': 'Filtrer les leads pour ne garder que les demandes sérieuses.',
    'service.quantum': 'Convertir',
    'service.quantum.desc': 'Transformer les prospects en rendez-vous et en opportunités commerciales.',
    'service.masterminds': 'Scaler',
    'service.masterminds.desc': 'Augmenter le volume de leads qualifiés selon vos objectifs.',

    'ads.title': 'Les chiffres ne mentent pas.',
    'ads.meta.title': 'Meta Ads : plus de leads qualifiés, un coût par lead maîtrisé.',
    'ads.meta.text': 'Campagnes Meta et Instagram conçues pour générer des demandes via formulaires : volume, coût par lead, budget et performance, suivis en continu.',
    'ads.meta.emphasis': 'Des milliers de leads générés. Un coût par prospect sous contrôle.',
    'ads.google.title': 'Google Ads : des demandes à forte intention d’achat.',
    'ads.google.text': 'Campagnes Google structurées pour les services à forte valeur : attirer les personnes qui cherchent déjà votre offre, avec suivi du coût et des conversions.',
    'ads.google.emphasis': 'Performance mesurée. Budget optimisé. ROI lisible.',
    'ads.cta': 'Parler à un expert',

    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.samir.role': 'Fondateur, London Academy',
    'testimonials.samir.quote': '« Clairement la meilleure expérience avec une agence. Un travail sérieux, orienté résultats, rien à voir avec nos anciennes collaborations. »',
    'testimonials.kenza.role': 'Fondatrice, ETC Academy',
    'testimonials.kenza.quote': '« Contenu de très bon niveau. Créatif, professionnel, parfaitement aligné avec notre positionnement. »',
    'testimonials.tarik.role': 'CEO, Oum Palace and New Hotel',
    'testimonials.tarik.quote': '« Je travaille avec Saad et 63 Agency depuis plus de 4 ans. Sérieux, fiable, constant. On a généré de vrais résultats et la relation est basée sur la confiance. »',
    'testimonials.leila.role': 'Sales Manager, Madariss Achbal Al Atlas',
    'testimonials.leila.quote': '« Fière de travailler avec Saad. Un partenaire sérieux, orienté performance. »',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions fréquentes',
    'faq.sub': 'Les réponses les plus utiles, sans jargon.',
    'faq.q1': 'Que fait exactement 63 Agency ?',
    'faq.a1': 'Nous générons des prospects qualifiés pour les entreprises de services : écoles, formations, B2B et B2C, immobilier. Objectif clair : des leads qui peuvent devenir des rendez-vous et des clients, pas seulement de la visibilité.',
    'faq.q2': 'Pour qui êtes-vous faits ?',
    'faq.a2': 'Pour les entreprises qui vendent un service et veulent un flux prévisible de demandes qualifiées. Idéal si vous avez déjà une offre claire et une équipe (ou un process) pour traiter les leads.',
    'faq.q3': 'Combien de temps pour voir des résultats ?',
    'faq.a3': 'Les premiers signaux arrivent souvent dès les premières semaines. Un système solide (volume + qualité + suivi) se construit généralement sur 1 à 3 mois.',
    'faq.q4': 'Quel budget publicitaire prévoir ?',
    'faq.a4': 'Ça dépend de votre marché, de votre offre et de votre capacité à traiter les leads. On définit un budget réaliste lors de l’audit pour générer des prospects qualifiés sans gaspiller la dépense média.',
    'faq.q5': 'Comment se passe le démarrage ?',
    'faq.a5': 'Un échange / audit pour comprendre votre offre et vos objectifs. Ensuite on met en place le système : positionnement, campagnes, qualification, suivi commercial.',
    'faq.q6': 'Proposez-vous un audit gratuit ?',
    'faq.a6': 'Oui. Vous pouvez demander un audit pour identifier vos quick wins et un plan d’action clair avant de démarrer.',

    'certified.eyebrow': 'Partenaires & Certifications',
    'certified.tag': '/ Certifié',
    'certified.title': 'Certifiés là où<br><span>ça compte.</span>',

    'cta.title': 'Prêt à générer des prospects qualifiés, chaque mois ?',
    'cta.text': 'Si vous vendez un service et voulez un système d’acquisition clair, parlons-en. Places limitées pour garder la qualité.',
    'cta.btn': 'Parler à un expert',

    'footer.disclaimer': "Avertissement : Ce site ne fait pas partie du site Facebook ni de Facebook Inc. Ce site n'est en aucun cas approuvé par Facebook. FACEBOOK est une marque de FACEBOOK, Inc.",
    'footer.copy': '© 2026 63Agency Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'float.whatsapp': 'Discuter sur WhatsApp',
    'float.top': 'Retour en haut',

    'contact.tag': 'CONTACT',
    'contact.title': 'Prêt à générer plus de prospects qualifiés ?',
    'contact.sub': 'Parlez-nous de votre business de services.',
    'contact.rating': '120+ clients accompagnés',
    'contact.sidebar.title': 'Découvrez le potentiel d’acquisition de votre entreprise',
    'contact.sidebar.desc': "Lors de cet échange, on vous partage un plan d'action clair pour générer plus de leads qualifiés et améliorer votre ROI.",
    'contact.stat.projects': 'projets livrés',
    'contact.stat.clients': 'clients satisfaits',
    'contact.stat.revenue': 'MAD générés',
    'contact.g1': 'Sans engagement',
    'contact.g2': 'Réponse sous 24h',
    'contact.g3': 'Spécialistes leads services',
    'contact.alert.title': 'PLACES LIMITÉES',
    'contact.alert.text': 'Pour garantir la qualité : 3 nouveaux clients / mois maximum.',
    'contact.offices': 'Visitez nos bureaux',

    'form.step1': 'Informations',
    'form.step2': 'Votre rôle',
    'form.step3': 'Dernière étape',
    'form.name': 'Nom complet *',
    'form.email': 'Adresse email *',
    'form.company': "Nom de l'entreprise",
    'form.employees': "Nombre d'employés",
    'form.city': 'Ville',
    'form.phone': 'Numéro de téléphone *',
    'form.placeholder': 'Saisissez votre réponse.',
    'form.select': 'Sélectionner',
    'form.emp.1': '1 employé',
    'form.emp.1-5': '1-5 employés',
    'form.emp.6-20': '6-20 employés',
    'form.emp.21-50': '21-50 employés',
    'form.emp.51-200': '51-200 employés',
    'form.emp.200': '200+ employés',
    'form.role': "Quelle est votre fonction ? *",
    'form.role.founder': 'Fondateur(trice)',
    'form.role.director': 'Directeur(trice) / Gérant(e)',
    'form.role.marketing': 'Responsable Marketing',
    'form.role.investor': 'Investisseur(se)',
    'form.role.other': 'Autres',
    'form.objective': 'Quel est votre objectif principal ? *',
    'form.obj.leads': 'Générer plus de prospects qualifiés',
    'form.obj.sales': 'Remplir mon agenda de rendez-vous',
    'form.obj.content': 'Créer du contenu publicitaire qui convertit',
    'form.obj.brand': 'Améliorer ma notoriété (avec des leads derrière)',
    'form.campaigns': 'Avez-vous déjà lancé des campagnes publicitaires ? *',
    'form.camp.noresult': 'Oui, mais sans résultats',
    'form.camp.optimize': 'Oui, je veux optimiser',
    'form.camp.never': 'Non, jamais',
    'form.sector': "Quel est votre secteur ? *",
    'form.sector.edu': 'Éducation / Formation',
    'form.sector.realestate': 'Immobilier',
    'form.sector.b2b': 'Services B2B & B2C',
    'form.sector.other': 'Autre entreprise de services',
    'form.budget': 'Budget prêt à investir',
    'form.budget.6': '6 000 – 10 000 MAD',
    'form.budget.10': '10 k – 20 k MAD',
    'form.budget.20': '20 k – 50 k MAD',
    'form.budget.50': '50 k – 100 k MAD',
    'form.budget.100': '100 k – 500 k MAD',
    'form.budget.500': 'Plus de 500 k MAD',
    'form.budget.undecided': "Pas encore décidé",
    'form.when': 'Quand êtes-vous prêt ?',
    'form.when.asap': 'Dès que possible',
    'form.when.week': 'Cette semaine',
    'form.when.month': 'Ce mois-ci',
    'form.when.explore': "En phase d'exploration",
    'form.back': 'Retour',
    'form.next': 'Continuer',
    'form.submit': 'Envoyer votre demande',
    'form.success': 'Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24h.',

    'sys.eyebrow': 'Notre système',
    'sys.title': "Un système d'acquisition<br>en 5 étapes",
    'sys.text': "De la stratégie au scaling : un process clair pour générer des prospects qualifiés et des rendez-vous, de façon prévisible.",
    'sys.1.title': 'Benchmark & contenu',
    'sys.1.text': 'Positionnement, concurrence et messages qui attirent les bons prospects.',
    'sys.1.t1': '+ Positionnement clair',
    'sys.1.t2': '+ Étude concurrentielle',
    'sys.1.t3': '+ Contenus qui convertissent',
    'sys.1.t4': '+ Offre attractive',
    'sys.2.title': 'Campagnes publicitaires',
    'sys.2.text': 'Meta et Google orientées prospects qualifiés, sans budget gaspillé.',
    'sys.2.t1': '+ Meta & Instagram',
    'sys.2.t2': '+ Google Ads',
    'sys.2.t3': '+ Ciblage précis',
    'sys.2.t4': '+ Leads qualifiés',
    'sys.3.title': 'Tunnel de qualification',
    'sys.3.text': 'Filtrer les demandes pour ne garder que les prospects sérieux.',
    'sys.3.t1': '+ Filtrage des leads',
    'sys.3.t2': '+ Orientation commerciale',
    'sys.3.t3': '+ RDV structurés',
    'sys.3.t4': '+ Qualité avant volume',
    'sys.4.title': 'CRM & automatisation',
    'sys.4.text': 'Chaque lead est suivi, relancé et traité au bon moment.',
    'sys.4.t1': '+ Suivi des leads',
    'sys.4.t2': '+ Relances automatisées',
    'sys.4.t3': '+ Pipeline commercial',
    'sys.4.t4': '+ CRM dédié',
    'sys.5.title': 'Analyse & scaling',
    'sys.5.text': 'Mesurer, optimiser, puis augmenter le volume selon vos objectifs.',
    'sys.5.t1': '+ Analyse continue',
    'sys.5.t2': '+ Optimisation',
    'sys.5.t3': '+ Scaling contrôlé',
    'sys.5.t4': '+ Objectifs business',

    'promise.heading': 'Agence de Performance &amp; Marketing Digital Orientée ROI<span class="promise__dot">.</span>',
    'promise.quote': '<span class="promise__mark">“</span>Notre promesse est simple :<br>Des leads qualifiés. Des rendez-vous. Une croissance mesurable.<span class="promise__mark">”</span>',
    'promise.caption': 'Saad CHAHOUBI, Fondateur, 63 Agency',
    'promise.cta': 'Parler à un expert',

    'about.scroll.brand': '63 Agency',
    'about.scroll.title': 'Nous traçons<br>la ligne entre<br>l’attention<br>et le client.',
    'about.scroll.hint': 'Un système d’acquisition clair — des prospects qualifiés, pas du bruit.',
    'about.scroll.lead': '63 Agency aide les entreprises de services à générer des prospects qualifiés — rapidement, clairement, de façon mesurable.',
    'about.scroll.meta1': 'Maroc<br>&amp; online',
    'about.scroll.meta2': 'Acquisition<br>orientée ROI',
    'about.scroll.meta3': 'Prospects<br>qualifiés',
    'about.scroll.meta4': 'Rendez-vous<br>&amp; clients',
    'about.rail1.title': 'Des leads. Pas du bruit.',
    'about.rail1.text': 'Nous aidons les entreprises de services à remplir leur pipeline — pas seulement à être vues.',
    'about.rail2.title': 'Quatre leviers. Une trajectoire.',
    'about.rail2.text': 'Contenu, publicité, qualification et suivi commercial — reliés pour convertir l’intérêt en rendez-vous.',
    'about.rail3.title': 'Attirer. Qualifier.',
    'about.rail3.text': 'Captez le bon marché, filtrez les demandes sérieuses, et gardez uniquement les prospects qui peuvent avancer.',
    'about.rail4.title': 'Automatiser. Optimiser.',
    'about.rail4.text': 'Chaque lead arrive au bon endroit, au bon moment — puis on affine ce qui convertit vraiment.',
    'about.rail5.title': 'La seule métrique : la croissance.',
    'about.rail5.text': 'On regarde après le formulaire : réponses, rendez-vous, présence, clients signés.',
    'about.step1.title': 'Attirer',
    'about.step1.text': 'Contenus et campagnes pour capter l’attention de votre marché cible.',
    'about.step2.title': 'Qualifier',
    'about.step2.text': 'Des tunnels pour transformer l’intérêt en demandes sérieuses.',
    'about.step3.title': 'Automatiser',
    'about.step3.text': 'Chaque lead arrive au bon endroit et est traité rapidement.',
    'about.step4.title': 'Optimiser',
    'about.step4.text': 'Suivi continu des campagnes, des leads et des rendez-vous pour améliorer les résultats.',
    'about.cta': 'Parler à un expert',

    'sfaq.eyebrow': 'FAQ Services',
    'sfaq.title': 'Questions sur notre système',
    'sfaq.sub': 'Comment nous générons des prospects qualifiés pour votre business de services.',
    'sfaq.q1': 'En quoi consiste votre système en 5 étapes ?',
    'sfaq.a1': 'Un parcours complet : benchmark & contenu, campagnes Meta/Google, tunnel de qualification, CRM & automatisation, puis analyse & scaling. Objectif : des leads qualifiés et des rendez-vous de façon prévisible.',
    'sfaq.q2': 'Faut-il prendre les 5 étapes ou peut-on commencer plus petit ?',
    'sfaq.a2': 'Le système est conçu pour fonctionner ensemble. Selon votre situation, on peut prioriser certaines étapes au démarrage, puis compléter le parcours.',
    'sfaq.q3': 'Gérez-vous Meta Ads et Google Ads en interne ?',
    'sfaq.a3': 'Oui. Nous structurons, lançons et optimisons vos campagnes pour générer des prospects qualifiés, avec suivi du coût par lead et de la performance.',
    'sfaq.q4': 'Comment fonctionne le tunnel de qualification ?',
    'sfaq.a4': 'Il filtre et oriente les leads vers des rendez-vous structurés. Moins de leads froids, plus de conversations avec des prospects réellement intéressés.',
    'sfaq.q5': 'Mettez-vous en place un CRM et des automatisations ?',
    'sfaq.a5': 'Oui. Suivi, relances et pipeline commercial : chaque prospect est traité au bon moment.',
    'sfaq.q6': 'Comment scalez-vous les résultats ?',
    'sfaq.a6': 'On analyse en continu, on optimise ce qui convertit, on coupe ce qui ne performe pas, puis on augmente le volume selon vos objectifs.'
  },

  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.apply': 'Talk to an expert',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',

    'hero.eyebrow': 'Lead generation agency specialized in qualified prospects for service businesses.',
    'hero.title': 'Generate between <span class="hero__mark">150 and 14,000</span><br>prospects <span class="hero__mark">qualified</span> every month.',
    'hero.subtitle': 'Leads ready to book a meeting, matched to your capacity and goals.',
    'hero.cta': 'Talk to an expert',
    'partners.title': 'Trusted<br>by',
    'partners.aria': 'Partners',

    'why.title': 'Why 63 Agency exists',
    'why.text': 'Too many businesses pay for visibility and get cold leads. 63 Agency builds a clear acquisition system: attract the right people, qualify them, and turn them into sales appointments. If you sell a service and want genuinely interested prospects, you are in the right place.',
    'why.alt': 'Founder of 63 Agency',

    'statement.title': 'One thing clear in the first second',
    'statement.text': '63 Agency generates qualified prospects for service businesses, not just clicks, not just brand awareness.',
    'service.monetise': 'Attract',
    'service.monetise.desc': 'Content and campaigns that capture the right potential clients.',
    'service.uplevel': 'Qualify',
    'service.uplevel.desc': 'Filter leads so you only keep serious requests.',
    'service.quantum': 'Convert',
    'service.quantum.desc': 'Turn prospects into appointments and real sales opportunities.',
    'service.masterminds': 'Scale',
    'service.masterminds.desc': 'Increase qualified lead volume based on your goals.',

    'ads.title': "The Numbers Don't Lie.",
    'ads.meta.title': 'Meta Ads: more qualified leads, controlled cost per lead.',
    'ads.meta.text': 'Meta and Instagram campaigns built to generate form requests: volume, cost per lead, budget and performance, tracked continuously.',
    'ads.meta.emphasis': 'Thousands of leads generated. Cost per prospect under control.',
    'ads.google.title': 'Google Ads: high-intent service requests.',
    'ads.google.text': 'Google campaigns structured for high-value services: reach people already looking for your offer, with cost and conversion tracking.',
    'ads.google.emphasis': 'Measured performance. Optimized budget. Clear ROI.',
    'ads.cta': 'Talk to an expert',

    'testimonials.title': 'What our clients say',
    'testimonials.samir.role': 'Founder, London Academy',
    'testimonials.samir.quote': '"Clearly the best agency experience we have had. Serious, results-driven work, nothing like our previous collaborations."',
    'testimonials.kenza.role': 'Founder, ETC Academy',
    'testimonials.kenza.quote': '“Very strong content. Creative, professional, perfectly aligned with our positioning.”',
    'testimonials.tarik.role': 'CEO, Oum Palace and New Hotel',
    'testimonials.tarik.quote': '"I have worked with Saad and 63 Agency for over 4 years. Serious, reliable, consistent. We generated real results and the relationship is built on trust."',
    'testimonials.leila.role': 'Sales Manager, Madariss Achbal Al Atlas',
    'testimonials.leila.quote': '“Proud to work with Saad. A serious, performance-focused partner.”',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.sub': 'Straight answers. No fluff.',
    'faq.q1': 'What does 63 Agency actually do?',
    'faq.a1': 'We generate qualified prospects for service businesses: schools, training, B2B and B2C services, real estate. Clear goal: leads that can become appointments and clients, not just visibility.',
    'faq.q2': 'Who is this for?',
    'faq.a2': 'For companies that sell a service and want a predictable flow of qualified requests. Ideal if you already have a clear offer and a way to handle leads.',
    'faq.q3': 'How long to see results?',
    'faq.a3': 'Early signals often appear within the first weeks. A solid system (volume + quality + follow-up) usually builds over 1 to 3 months.',
    'faq.q4': 'What advertising budget should I plan?',
    'faq.a4': 'It depends on your market, offer, and capacity to handle leads. We define a realistic budget during the audit to generate qualified prospects without wasting media spend.',
    'faq.q5': 'How does onboarding work?',
    'faq.a5': 'A call / audit to understand your offer and goals. Then we install the system: positioning, campaigns, qualification, and sales follow-up.',
    'faq.q6': 'Do you offer a free audit?',
    'faq.a6': 'Yes. You can request an audit to identify quick wins and a clear action plan before starting.',

    'certified.eyebrow': 'Partners & Certifications',
    'certified.tag': '/ Certified',
    'certified.title': 'Certified where<br><span>it counts.</span>',

    'cta.title': 'Ready to generate qualified prospects every month?',
    'cta.text': 'If you sell a service and want a clear acquisition system, let’s talk. Limited spots to protect quality.',
    'cta.btn': 'Talk to an expert',

    'footer.disclaimer': 'Disclaimer: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.',
    'footer.copy': '© 2026 63Agency.com All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'float.whatsapp': 'Chat on WhatsApp',
    'float.top': 'Back to top',

    'contact.tag': 'CONTACT',
    'contact.title': 'Ready to generate more qualified prospects?',
    'contact.sub': 'Tell us about your service business.',
    'contact.rating': '120+ clients supported',
    'contact.sidebar.title': 'Discover your company’s acquisition potential',
    'contact.sidebar.desc': 'In this call, we share a clear action plan to generate more qualified leads and improve your ROI.',
    'contact.stat.projects': 'projects delivered',
    'contact.stat.clients': 'satisfied clients',
    'contact.stat.revenue': 'MAD generated',
    'contact.g1': 'No commitment',
    'contact.g2': 'Reply within 24h',
    'contact.g3': 'Service-lead specialists',
    'contact.alert.title': 'LIMITED SPOTS',
    'contact.alert.text': 'To protect quality: max 3 new clients per month.',
    'contact.offices': 'Visit our offices',

    'form.step1': 'Information',
    'form.step2': 'Your role',
    'form.step3': 'Final step',
    'form.name': 'Full name *',
    'form.email': 'Email address *',
    'form.company': 'Company name',
    'form.employees': 'Number of employees',
    'form.city': 'City',
    'form.phone': 'Phone number *',
    'form.placeholder': 'Enter your answer.',
    'form.select': 'Select',
    'form.emp.1': '1 employee',
    'form.emp.1-5': '1-5 employees',
    'form.emp.6-20': '6-20 employees',
    'form.emp.21-50': '21-50 employees',
    'form.emp.51-200': '51-200 employees',
    'form.emp.200': '200+ employees',
    'form.role': 'What is your role? *',
    'form.role.founder': 'Founder',
    'form.role.director': 'Director / Manager',
    'form.role.marketing': 'Marketing Manager',
    'form.role.investor': 'Investor',
    'form.role.other': 'Other',
    'form.objective': 'What is your main goal? *',
    'form.obj.leads': 'Generate more qualified prospects',
    'form.obj.sales': 'Fill my calendar with appointments',
    'form.obj.content': 'Create advertising content that converts',
    'form.obj.brand': 'Improve awareness (with leads behind it)',
    'form.campaigns': 'Have you already run ad campaigns? *',
    'form.camp.noresult': 'Yes, but without results',
    'form.camp.optimize': 'Yes, I want to optimize',
    'form.camp.never': 'No, never',
    'form.sector': 'What is your industry? *',
    'form.sector.edu': 'Education / Training',
    'form.sector.realestate': 'Real estate',
    'form.sector.b2b': 'B2B & B2C services',
    'form.sector.other': 'Other service business',
    'form.budget': 'Budget ready to invest',
    'form.budget.6': '6,000 – 10,000 MAD',
    'form.budget.10': '10k – 20k MAD',
    'form.budget.20': '20k – 50k MAD',
    'form.budget.50': '50k – 100k MAD',
    'form.budget.100': '100k – 500k MAD',
    'form.budget.500': 'More than 500k MAD',
    'form.budget.undecided': 'Not decided yet',
    'form.when': 'When are you ready?',
    'form.when.asap': 'As soon as possible',
    'form.when.week': 'This week',
    'form.when.month': 'This month',
    'form.when.explore': 'Still exploring',
    'form.back': 'Back',
    'form.next': 'Continue',
    'form.submit': 'Submit your request',
    'form.success': 'Thank you! Your request has been sent. We will contact you within 24 hours.',

    'sys.eyebrow': 'Our system',
    'sys.title': 'A 5-step<br>acquisition system',
    'sys.text': 'From strategy to scaling: a clear process to generate qualified prospects and appointments, predictably.',
    'sys.1.title': 'Benchmark & content',
    'sys.1.text': 'Positioning, competition, and messages that attract the right prospects.',
    'sys.1.t1': '+ Clear positioning',
    'sys.1.t2': '+ Competitive research',
    'sys.1.t3': '+ Content that converts',
    'sys.1.t4': '+ Attractive offer',
    'sys.2.title': 'Ad campaigns',
    'sys.2.text': 'Meta and Google focused on qualified prospects, with no wasted budget.',
    'sys.2.t1': '+ Meta & Instagram',
    'sys.2.t2': '+ Google Ads',
    'sys.2.t3': '+ Precise targeting',
    'sys.2.t4': '+ Qualified leads',
    'sys.3.title': 'Qualification funnel',
    'sys.3.text': 'Filter requests so you only keep serious prospects.',
    'sys.3.t1': '+ Lead filtering',
    'sys.3.t2': '+ Sales routing',
    'sys.3.t3': '+ Structured meetings',
    'sys.3.t4': '+ Quality before volume',
    'sys.4.title': 'CRM & automation',
    'sys.4.text': 'Every lead is tracked, followed up, and handled at the right time.',
    'sys.4.t1': '+ Lead tracking',
    'sys.4.t2': '+ Automated follow-ups',
    'sys.4.t3': '+ Sales pipeline',
    'sys.4.t4': '+ Dedicated CRM',
    'sys.5.title': 'Analysis & scaling',
    'sys.5.text': 'Measure, optimize, then increase volume based on your goals.',
    'sys.5.t1': '+ Continuous analysis',
    'sys.5.t2': '+ Optimization',
    'sys.5.t3': '+ Controlled scaling',
    'sys.5.t4': '+ Business goals',

    'promise.heading': 'Performance &amp; Digital Marketing Agency Focused on ROI<span class="promise__dot">.</span>',
    'promise.quote': '<span class="promise__mark">“</span>Our promise is simple:<br>Qualified leads. Appointments. Measurable growth.<span class="promise__mark">”</span>',
    'promise.caption': 'Saad CHAHOUBI, Founder, 63 Agency',
    'promise.cta': 'Talk to an expert',

    'about.scroll.brand': '63 Agency',
    'about.scroll.title': 'We draw<br>the line from<br>attention<br>to client.',
    'about.scroll.hint': 'A clear acquisition system — qualified prospects, not noise.',
    'about.scroll.lead': '63 Agency helps service businesses generate qualified prospects — fast, clear, and measurable.',
    'about.scroll.meta1': 'Morocco<br>&amp; online',
    'about.scroll.meta2': 'ROI-driven<br>acquisition',
    'about.scroll.meta3': 'Qualified<br>prospects',
    'about.scroll.meta4': 'Meetings<br>&amp; clients',
    'about.rail1.title': 'Leads. Not noise.',
    'about.rail1.text': 'We help service businesses fill their pipeline — not just get seen.',
    'about.rail2.title': 'Four levers. One trajectory.',
    'about.rail2.text': 'Content, ads, qualification, and sales follow-up — connected to turn interest into meetings.',
    'about.rail3.title': 'Attract. Qualify.',
    'about.rail3.text': 'Reach the right market, filter serious requests, and keep only prospects who can move forward.',
    'about.rail4.title': 'Automate. Optimize.',
    'about.rail4.text': 'Every lead lands in the right place, at the right time — then we refine what actually converts.',
    'about.rail5.title': 'The only metric: growth.',
    'about.rail5.text': 'We look past the form: replies, meetings, show-ups, signed clients.',
    'about.step1.title': 'Attract',
    'about.step1.text': 'Content and campaigns that capture your target market’s attention.',
    'about.step2.title': 'Qualify',
    'about.step2.text': 'Funnels that turn interest into serious requests.',
    'about.step3.title': 'Automate',
    'about.step3.text': 'Every lead reaches the right place and is handled quickly.',
    'about.step4.title': 'Optimize',
    'about.step4.text': 'Continuous tracking of campaigns, leads, and appointments to improve results.',
    'about.cta': 'Talk to an expert',

    'sfaq.eyebrow': 'Services FAQ',
    'sfaq.title': 'Questions about our system',
    'sfaq.sub': 'How we generate qualified prospects for your service business.',
    'sfaq.q1': 'What does your 5-step system include?',
    'sfaq.a1': 'A full journey: benchmark & content, Meta/Google campaigns, qualification funnel, CRM & automation, then analysis & scaling. Goal: qualified leads and appointments predictably.',
    'sfaq.q2': 'Do we need all 5 steps, or can we start smaller?',
    'sfaq.a2': 'The system is designed to work together. Depending on your situation, we can prioritize certain steps first, then complete the journey.',
    'sfaq.q3': 'Do you manage Meta Ads and Google Ads in-house?',
    'sfaq.a3': 'Yes. We structure, launch, and optimize your campaigns to generate qualified prospects, with cost-per-lead and performance tracking.',
    'sfaq.q4': 'How does the qualification funnel work?',
    'sfaq.a4': 'It filters and routes leads toward structured appointments. Fewer cold leads, more conversations with genuinely interested prospects.',
    'sfaq.q5': 'Do you set up CRM and automations?',
    'sfaq.a5': 'Yes. Tracking, follow-ups, and a sales pipeline so every prospect is handled at the right time.',
    'sfaq.q6': 'How do you scale results?',
    'sfaq.a6': 'We analyze continuously, optimize what converts, cut what does not perform, then increase volume based on your goals.'
  }
};

export function getLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'fr' || saved === 'en') return saved;
  return 'fr';
}

export function t(key, lang = getLang()) {
  return translations[lang]?.[key] ?? translations.fr[key] ?? key;
}

export function applyLanguage(lang) {
  const dict = translations[lang] || translations.fr;
  document.documentElement.lang = lang;
  localStorage.setItem(STORAGE_KEY, lang);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const value = dict[key];
    if (value == null) return;

    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = value;
      return;
    }

    if (el.matches('a, button') && el.querySelector(':scope > span')) {
      const textSpan = [...el.querySelectorAll(':scope > span')].find(
        (span) => !span.querySelector('svg') && !span.className.includes('icon')
      );
      if (textSpan) {
        textSpan.textContent = value;
        return;
      }
    }

    el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const value = dict[key];
    if (value != null) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = dict[key];
    if (value != null) el.setAttribute('placeholder', value);
  });

  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const key = el.getAttribute('data-i18n-aria');
    const value = dict[key];
    if (value != null) el.setAttribute('aria-label', value);
  });

  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    const value = dict[key];
    if (value != null) el.setAttribute('title', value);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt');
    const value = dict[key];
    if (value != null) el.setAttribute('alt', value);
  });

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    const active = btn.getAttribute('data-set-lang') === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

export function initI18n() {
  applyLanguage(getLang());

  document.querySelectorAll('[data-set-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.getAttribute('data-set-lang'));
    });
  });
}
