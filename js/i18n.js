const STORAGE_KEY = '63agency-lang';

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.apply': 'Postuler',
    'nav.open': 'Ouvrir le menu',
    'nav.close': 'Fermer le menu',

    'hero.eyebrow': "Système d'acquisition pour générer des rendez-vous et des visites qualifiées.",
    'hero.title': 'Générez entre <span class="hero__mark">150 et 14000</span><br>prospects <span class="hero__mark">qualifiés</span> chaque mois.',
    'hero.subtitle': 'Selon la capacité et les objectifs de votre établissement.',
    'hero.note': "Spécialisés dans l'éducation, les entreprises de services B2B & B2C, et l'immobilier.",
    'hero.cta': 'Parler à un expert',
    'partners.title': 'Ils nous font<br>confiance',
    'partners.aria': 'Partenaires',

    'why.title': 'Pourquoi nous avons créé 63Agency.com',
    'why.text': "La plupart de ce qui est enseigné en ligne aujourd'hui n'est que du bruit — tactiques recyclées, formations superficielles et programmes d'influenceurs. 63Agency.com existe pour corriger cela. Nous avons construit nos propres systèmes avec les mêmes stratégies que nous installons pour les autres. Si vous gagnez déjà et voulez aller plus vite, plus proprement et à plus grande échelle, vous êtes au bon endroit.",
    'why.alt': 'Fondateur de 63Agency.com',

    'statement.title': 'Là où les meilleurs deviennent encore meilleurs',
    'statement.text': '63Agency.com est l’agence marketing privée pour les entrepreneurs qui gagnent déjà — et qui veulent aller plus loin, plus vite.',
    'service.monetise': 'Monetise',
    'service.monetise.desc': 'Pour les fondateurs en phase de lancement de leur premier business digital.',
    'service.uplevel': 'UpLevel',
    'service.uplevel.desc': 'Pour les fondateurs qui veulent un accompagnement concrètement opérationnel pour construire et lancer.',
    'service.quantum': 'Quantum',
    'service.quantum.desc': 'Pour les fondateurs avancés (+20K$/mois) qui veulent installer les systèmes qui ont scalé nos propres sociétés.',
    'service.masterminds': 'Masterminds',
    'service.masterminds.desc': 'Rencontres en présentiel sur invitation, avec les esprits les plus élites du digital.',

    'ads.title': 'Les chiffres ne mentent pas.',
    'ads.meta.title': 'Meta Ads : volume de leads qualifiés et coût par lead optimisé.',
    'ads.meta.text': 'Nos campagnes Meta ciblent la génération de leads via formulaires : résultats, coût par lead, budget et dépenses, impressions et portée.',
    'ads.meta.emphasis': 'Des milliers de leads générés, un coût par lead maîtrisé.',
    'ads.google.title': 'Google Ads : des conversions et un coût par acquisition maîtrisés.',
    'ads.google.text': 'Nous structurons vos campagnes Google pour la génération de leads sur des services à forte valeur. Suivi des ventes et du coût en temps réel.',
    'ads.google.emphasis': 'Performance tracée, budget optimisé, ROI mesurable.',
    'ads.cta': 'Parler à un expert',

    'testimonials.title': 'Ce que disent nos clients',
    'testimonials.samir.role': 'Fondateur — London Academy',
    'testimonials.samir.quote': '« C’est clairement la meilleure expérience que nous ayons eue avec une agence. Rien à voir avec nos anciennes collaborations. Un résultat sérieux et performant. »',
    'testimonials.kenza.role': 'Fondatrice — ETC Academy',
    'testimonials.kenza.quote': '« Contenu de très bon niveau. Créatif, pro, adapté à notre positionnement. »',
    'testimonials.tarik.role': 'CEO — Oum Palace & New Hotel',
    'testimonials.tarik.quote': '« Je travaille avec Saad et 63 agency depuis plus de 4 ans. C’est quelqu’un de sérieux, fiable et constant dans la performance. On a généré de bons résultats ensemble et la relation est basée sur la confiance. »',
    'testimonials.leila.role': 'Sales Manager — Madariss Achbal Al Atlas',
    'testimonials.leila.quote': '« Fière de travailler avec Saad. Partenaire sérieux et performant. »',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Questions fréquentes',
    'faq.sub': 'Les réponses aux questions que l’on nous pose le plus souvent.',
    'faq.q1': 'Pour qui est faite 63Agency ?',
    'faq.a1': 'Pour les entreprises et établissements qui veulent un système d’acquisition clair : éducation, services B2B & B2C, et immobilier. Idéal si vous voulez des prospects qualifiés, pas seulement de la visibilité.',
    'faq.q2': 'Combien de temps faut-il pour voir des résultats ?',
    'faq.a2': 'Les premiers signaux apparaissent souvent dès les premières semaines. Les résultats solides se construisent avec le suivi, l’optimisation et la qualification des leads sur 1 à 3 mois.',
    'faq.q3': 'Travaillez-vous uniquement dans l’éducation ?',
    'faq.a3': 'Non. L’éducation est un de nos secteurs forts, mais nous accompagnons aussi les entreprises de services B2B & B2C et l’immobilier, avec le même système : contenu, publicité, automatisation et suivi commercial.',
    'faq.q4': 'Quel budget publicitaire faut-il prévoir ?',
    'faq.a4': 'Cela dépend de vos objectifs et de votre capacité. Nous définissons un budget adapté lors de l’audit, pour générer des leads qualifiés sans gaspiller la dépense media.',
    'faq.q5': 'Comment se passe le démarrage ?',
    'faq.a5': 'On commence par un échange / audit pour comprendre votre offre, votre marché et vos objectifs. Ensuite on met en place le système : positionnement, campagnes, tunnel de qualification et suivi.',
    'faq.q6': 'Proposez-vous un audit gratuit ?',
    'faq.a6': 'Oui. Vous pouvez demander un audit marketing gratuit pour identifier vos quick wins et un plan d’action clair avant de démarrer.',

    'certified.eyebrow': 'Partenaires & Certifications',
    'certified.tag': '/ Certifié',
    'certified.title': 'Certifiés là où<br><span>ça compte.</span>',
    'certified.meta': 'Business Partner',
    'certified.google': 'Partner',
    'certified.tiktok': 'Marketing Partner',

    'cta.title': 'Prêt à construire quelque chose de vraiment rentable ?',
    'cta.text': "Nous ne travaillons pas avec tout le monde. Mais si vous êtes le bon profil, ce sera la relation business la plus précieuse que vous aurez jamais eue.",
    'cta.btn': 'Postuler pour travailler avec nous',

    'footer.disclaimer': "Avertissement : Ce site ne fait pas partie du site Facebook ni de Facebook Inc. Ce site n'est en aucun cas approuvé par Facebook. FACEBOOK est une marque de FACEBOOK, Inc.",
    'footer.copy': '© 2026 63Agency.com Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
    'footer.terms': 'Conditions générales',
    'float.whatsapp': 'Discuter sur WhatsApp',
    'float.top': 'Retour en haut',

    'contact.tag': 'CONTACT',
    'contact.title': 'Êtes-vous prêt à commencer ?',
    'contact.sub': 'Envoyez-nous votre demande.',
    'contact.rating': '120+ clients satisfaits',
    'contact.sidebar.title': 'Obtenez votre audit marketing gratuit et découvrez vos 5 quick wins immédiats',
    'contact.sidebar.desc': "L'objectif de cette réunion est de vous partager un plan d'action clair pour optimiser votre génération de prospects et maximiser votre ROI.",
    'contact.stat.projects': 'projets livrés',
    'contact.stat.clients': 'clients satisfaits',
    'contact.stat.revenue': 'MAD générés',
    'contact.g1': 'Sans engagement',
    'contact.g2': 'Réponse sous 24h',
    'contact.g3': 'Système prouvé',
    'contact.alert.title': 'PLACES LIMITÉES',
    'contact.alert.text': 'Pour garantir qualité maximale : 5 nouveaux clients/mois seulement.',
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
    'form.role': "Quelle est votre fonction au sein de l'établissement ? *",
    'form.role.founder': 'Fondateur(trice)',
    'form.role.director': 'Directeur(trice) / Gérant(e)',
    'form.role.marketing': 'Responsable Marketing',
    'form.role.investor': 'Investisseur(seuse)',
    'form.role.other': 'Autres',
    'form.objective': 'Quel est votre objectif principal ? *',
    'form.obj.leads': 'Générer plus de prospects qualifiés',
    'form.obj.sales': 'Booster mes ventes',
    'form.obj.content': 'Créer du contenu publicitaire',
    'form.obj.brand': 'Améliorer ma notoriété',
    'form.campaigns': 'Avez-vous déjà lancé des campagnes publicitaires ? *',
    'form.camp.noresult': 'Oui, mais sans résultats',
    'form.camp.optimize': 'Oui, je veux optimiser',
    'form.camp.never': 'Non, jamais',
    'form.sector': "Quel est votre secteur d'activité ? *",
    'form.sector.edu': 'Éducation',
    'form.sector.realestate': 'Immobilier',
    'form.sector.b2b': 'B2B et B2C',
    'form.sector.other': 'Autre',
    'form.budget': 'Budget prêt à investir',
    'form.budget.6': '6 000 – 10 000 MAD',
    'form.budget.10': '10 k – 20 k MAD',
    'form.budget.20': '20 k – 50 k MAD',
    'form.budget.50': '50 k – 100 k MAD',
    'form.budget.100': '100 k – 500 k MAD',
    'form.budget.500': 'Plus de 500 k MAD',
    'form.budget.undecided': "Pas encore prêt à décider du montant à investir",
    'form.when': 'Quand êtes-vous prêt ?',
    'form.when.asap': 'Dès que possible',
    'form.when.week': 'Cette semaine',
    'form.when.month': 'Ce mois-ci',
    'form.when.explore': "En phase d'exploration",
    'form.back': 'Retour',
    'form.next': 'Continuer',
    'form.submit': 'Envoyer votre demande',
    'form.success': 'Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 24h.',

    'sys.eyebrow': 'Notre Système',
    'sys.title': "Un système d'acquisition<br>structuré en 5 étapes",
    'sys.text': "De l'étude stratégique au scaling : un processus éprouvé pour générer des inscriptions et des rendez-vous admissions de façon prévisible.",
    'sys.1.title': 'Benchmark & création de contenu',
    'sys.1.text': 'Positionnement, concurrence et contenus à forte valeur.',
    'sys.1.t1': '+ Benchmark & positionnement',
    'sys.1.t2': '+ Étude concurrentielle',
    'sys.1.t3': '+ Contenus à forte valeur',
    'sys.1.t4': '+ Attractivité marque',
    'sys.2.title': 'Campagnes publicitaires',
    'sys.2.text': 'Meta & Google optimisées pour prospects qualifiés.',
    'sys.2.t1': '+ Meta & Instagram',
    'sys.2.t2': '+ Google Ads',
    'sys.2.t3': '+ Ciblage & optimisation',
    'sys.2.t4': '+ Prospects qualifiés',
    'sys.3.title': 'Tunnel de qualification',
    'sys.3.text': 'Filtrer et orienter les prospects vers des RDV admissions.',
    'sys.3.t1': '+ Filtrage des leads',
    'sys.3.t2': '+ Orientation admissions',
    'sys.3.t3': '+ RDV structurés',
    'sys.3.t4': '+ Qualification',
    'sys.4.title': 'CRM & automatisation',
    'sys.4.text': "Suivi des leads, relances et pipeline d'inscription.",
    'sys.4.t1': '+ Suivi des leads',
    'sys.4.t2': '+ Relances automatisées',
    'sys.4.t3': '+ Pipeline inscription',
    'sys.4.t4': '+ CRM dédié',
    'sys.5.title': 'Analyse & scaling',
    'sys.5.text': 'Optimisation continue et volume selon vos objectifs.',
    'sys.5.t1': '+ Analyse continue',
    'sys.5.t2': '+ Optimisation',
    'sys.5.t3': '+ Scaling',
    'sys.5.t4': '+ Objectifs',

    'promise.heading': 'Agence de Performance & Marketing Digital Orientée ROI<span class="promise__dot">.</span>',
    'promise.quote': '<span class="promise__mark">“</span>Notre promesse est simple :<br>Des résultats mesurables. Une performance prévisible.<span class="promise__mark">”</span>',
    'promise.caption': 'Saad CHAHOUBI - Fondateur, 63 Agency',
    'promise.cta': 'Parler à un expert',

    'about.hero.title': 'De la visibilité aux résultats.',
    'about.hero.lead': '63 Agency est née avec une ambition simple : transformer le marketing en véritable moteur de croissance.',
    'about.story.1': 'Nous accompagnons les entreprises qui veulent aller au-delà de la visibilité et générer de réelles opportunités commerciales.',
    'about.story.2': 'Notre approche réunit quatre leviers essentiels : contenu, publicité, automatisation et suivi commercial.',
    'about.story.3': 'L’objectif : construire un système capable d’attirer les bonnes personnes, de les convertir en prospects qualifiés et de transformer davantage d’opportunités en clients.',
    'about.path.eyebrow': 'Le parcours d’acquisition',
    'about.path.title': 'Nous ne cherchons pas simplement à générer des clics, des vues ou des formulaires.',
    'about.path.sub': 'Nous construisons tout le parcours d’acquisition :',
    'about.step1.title': 'Attirer',
    'about.step1.text': 'Des contenus et campagnes publicitaires conçus pour capter l’attention de votre marché.',
    'about.step2.title': 'Convertir',
    'about.step2.text': 'Des funnels pensés pour transformer cette attention en prospects qualifiés.',
    'about.step3.title': 'Automatiser',
    'about.step3.text': 'Des connexions et automatisations pour que chaque lead arrive au bon endroit et soit traité rapidement.',
    'about.step4.title': 'Optimiser',
    'about.step4.text': 'Un suivi continu des campagnes, des leads et des performances commerciales pour améliorer les résultats.',
    'about.metric.title': 'Une seule métrique compte vraiment : la croissance.',
    'about.metric.1': 'Notre travail ne s’arrête pas au marketing.',
    'about.metric.2': 'Nous cherchons à comprendre ce qui se passe après le lead : combien de prospects répondent, prennent rendez-vous, se présentent et deviennent réellement clients.',
    'about.metric.3': 'Parce qu’au final, le marketing n’a de valeur que lorsqu’il contribue à développer votre chiffre d’affaires.',
    'about.cta': 'Parler à un expert',

    'sfaq.eyebrow': 'FAQ Services',
    'sfaq.title': 'Questions sur notre système',
    'sfaq.sub': 'Tout ce qu’il faut savoir sur notre processus d’acquisition en 5 étapes.',
    'sfaq.q1': 'En quoi consiste votre système en 5 étapes ?',
    'sfaq.a1': 'Un parcours complet : benchmark & contenu, campagnes Meta/Google, tunnel de qualification, CRM & automatisation, puis analyse & scaling. L’objectif : générer des leads qualifiés et des rendez-vous de façon prévisible.',
    'sfaq.q2': 'Faut-il prendre les 5 étapes ou peut-on commencer par une seule ?',
    'sfaq.a2': 'Le système est conçu pour fonctionner ensemble. Selon votre situation, on peut prioriser certaines étapes au démarrage, puis compléter le parcours pour maximiser les résultats.',
    'sfaq.q3': 'Gérez-vous Meta Ads et Google Ads en interne ?',
    'sfaq.a3': 'Oui. Nous structurons, lançons et optimisons vos campagnes Meta & Google pour générer des prospects qualifiés, avec un suivi du coût par lead et de la performance.',
    'sfaq.q4': 'Comment fonctionne le tunnel de qualification ?',
    'sfaq.a4': 'Il filtre et oriente les leads vers des RDV admissions structurés. L’idée : moins de leads froids, plus de conversations avec des prospects réellement intéressés.',
    'sfaq.q5': 'Mettez-vous en place un CRM et des automatisations ?',
    'sfaq.a5': 'Oui. Suivi des leads, relances automatisées et pipeline d’inscription : chaque prospect arrive au bon endroit et est traité rapidement.',
    'sfaq.q6': 'Comment mesurez-vous et scalez les résultats ?',
    'sfaq.a6': 'Analyse continue des campagnes, des leads et des performances commerciales. On optimise ce qui marche, on coupe ce qui ne convertit pas, puis on scale selon vos objectifs.'
  },

  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.about': 'About Us',
    'nav.contact': 'Contact',
    'nav.apply': 'Apply Now',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',

    'hero.eyebrow': 'Acquisition system to generate qualified appointments and visits.',
    'hero.title': 'Generate between <span class="hero__mark">150 and 14,000</span><br>prospects <span class="hero__mark">qualified</span> every month.',
    'hero.subtitle': 'Based on the capacity and goals of your organization.',
    'hero.note': 'Specialized in education, B2B & B2C service businesses, and real estate.',
    'hero.cta': 'Talk to an expert',
    'partners.title': 'Trusted<br>by',
    'partners.aria': 'Partners',

    'why.title': 'Why We Built 63Agency.com',
    'why.text': "Most of what's taught online today is noise — recycled tactics, surface-level courses, and influencer-led programs. 63Agency.com exists to fix that. We built our own systems using the same strategies we now install for others. If you're already winning but want to win faster, cleaner, and at scale, you're in the right place.",
    'why.alt': 'Founder of 63Agency.com',

    'statement.title': 'Where the Best Go to Get Even Better',
    'statement.text': '63Agency.com is the private marketing agency for business owners who are already winning — and who want to go further and faster.',
    'service.monetise': 'Monetise',
    'service.monetise.desc': 'For early-stage founders building and launching their first digital product business.',
    'service.uplevel': 'UpLevel',
    'service.uplevel.desc': 'For founders seeking hands-on consulting support to build and launch a digital product business.',
    'service.quantum': 'Quantum',
    'service.quantum.desc': 'For high-level founders earning $20K+/mo who want to install the exact systems that scaled our own companies.',
    'service.masterminds': 'Masterminds',
    'service.masterminds.desc': 'Invite-only in-person gatherings with the most elite minds in the digital space.',

    'ads.title': "The Numbers Don't Lie.",
    'ads.meta.title': 'Meta Ads: qualified lead volume and optimized cost per lead.',
    'ads.meta.text': 'Our Meta campaigns focus on lead generation via forms: results, cost per lead, budget and spend, impressions and reach.',
    'ads.meta.emphasis': 'Thousands of leads generated, with a controlled cost per lead.',
    'ads.google.title': 'Google Ads: conversions and a controlled cost per acquisition.',
    'ads.google.text': 'We structure your Google campaigns for lead generation on high-value services. Real-time tracking of sales and cost.',
    'ads.google.emphasis': 'Tracked performance, optimized budget, measurable ROI.',
    'ads.cta': 'Talk to an expert',

    'testimonials.title': 'What Our Clients Are Saying',
    'testimonials.samir.role': 'Founder — London Academy',
    'testimonials.samir.quote': '“Clearly the best experience we have ever had with an agency. Nothing like our previous collaborations. Serious and high-performing results.”',
    'testimonials.kenza.role': 'Founder — ETC Academy',
    'testimonials.kenza.quote': '“Very high-quality content. Creative, professional, and perfectly aligned with our positioning.”',
    'testimonials.tarik.role': 'CEO — Oum Palace & New Hotel',
    'testimonials.tarik.quote': '“I have worked with Saad and 63 Agency for over 4 years. He is serious, reliable, and consistently high-performing. We generated strong results together and the relationship is built on trust.”',
    'testimonials.leila.role': 'Sales Manager — Madariss Achbal Al Atlas',
    'testimonials.leila.quote': '“Proud to work with Saad. A serious and high-performing partner.”',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'faq.sub': 'Answers to the questions we get asked most often.',
    'faq.q1': 'Who is 63Agency for?',
    'faq.a1': 'For businesses and institutions that want a clear acquisition system: education, B2B & B2C services, and real estate. Ideal if you want qualified prospects, not just visibility.',
    'faq.q2': 'How long does it take to see results?',
    'faq.a2': 'Early signals often appear within the first weeks. Strong results build over 1 to 3 months through tracking, optimization, and lead qualification.',
    'faq.q3': 'Do you only work in education?',
    'faq.a3': 'No. Education is one of our strongest sectors, but we also support B2B & B2C service businesses and real estate with the same system: content, ads, automation, and sales follow-up.',
    'faq.q4': 'What advertising budget should I plan for?',
    'faq.a4': 'It depends on your goals and capacity. We define a suitable budget during the audit to generate qualified leads without wasting media spend.',
    'faq.q5': 'How does onboarding work?',
    'faq.a5': 'We start with a call / audit to understand your offer, market, and goals. Then we install the system: positioning, campaigns, qualification funnel, and follow-up.',
    'faq.q6': 'Do you offer a free audit?',
    'faq.a6': 'Yes. You can request a free marketing audit to identify your quick wins and a clear action plan before getting started.',

    'certified.eyebrow': 'Partners & Certifications',
    'certified.tag': '/ Certified',
    'certified.title': 'Certified where<br><span>it counts.</span>',
    'certified.meta': 'Business Partner',
    'certified.google': 'Partner',
    'certified.tiktok': 'Marketing Partner',

    'cta.title': 'Ready to Build Something Disgustingly Profitable?',
    'cta.text': "We don't work with everyone. But if you're the right fit, this will be the most valuable relationship you've ever had in business.",
    'cta.btn': 'Apply to Work With Us',

    'footer.disclaimer': 'Disclaimer: This site is not a part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.',
    'footer.copy': '© 2026 63Agency.com All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'float.whatsapp': 'Chat on WhatsApp',
    'float.top': 'Back to top',

    'contact.tag': 'CONTACT',
    'contact.title': 'Are you ready to get started?',
    'contact.sub': 'Send us your request.',
    'contact.rating': '120+ satisfied clients',
    'contact.sidebar.title': 'Get your free marketing audit and discover your 5 immediate quick wins',
    'contact.sidebar.desc': 'The goal of this meeting is to share a clear action plan to optimize your lead generation and maximize your ROI.',
    'contact.stat.projects': 'projects delivered',
    'contact.stat.clients': 'satisfied clients',
    'contact.stat.revenue': 'MAD generated',
    'contact.g1': 'No commitment',
    'contact.g2': 'Reply within 24h',
    'contact.g3': 'Proven system',
    'contact.alert.title': 'LIMITED SPOTS',
    'contact.alert.text': 'To guarantee maximum quality: only 5 new clients per month.',
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
    'form.role': 'What is your role within the organization? *',
    'form.role.founder': 'Founder',
    'form.role.director': 'Director / Manager',
    'form.role.marketing': 'Marketing Manager',
    'form.role.investor': 'Investor',
    'form.role.other': 'Other',
    'form.objective': 'What is your main goal? *',
    'form.obj.leads': 'Generate more qualified leads',
    'form.obj.sales': 'Boost my sales',
    'form.obj.content': 'Create advertising content',
    'form.obj.brand': 'Improve brand awareness',
    'form.campaigns': 'Have you already run ad campaigns? *',
    'form.camp.noresult': 'Yes, but without results',
    'form.camp.optimize': 'Yes, I want to optimize',
    'form.camp.never': 'No, never',
    'form.sector': 'What is your industry? *',
    'form.sector.edu': 'Education',
    'form.sector.realestate': 'Real estate',
    'form.sector.b2b': 'B2B and B2C',
    'form.sector.other': 'Other',
    'form.budget': 'Budget ready to invest',
    'form.budget.6': '6,000 – 10,000 MAD',
    'form.budget.10': '10k – 20k MAD',
    'form.budget.20': '20k – 50k MAD',
    'form.budget.50': '50k – 100k MAD',
    'form.budget.100': '100k – 500k MAD',
    'form.budget.500': 'More than 500k MAD',
    'form.budget.undecided': 'Not ready to decide the investment amount yet',
    'form.when': 'When are you ready?',
    'form.when.asap': 'As soon as possible',
    'form.when.week': 'This week',
    'form.when.month': 'This month',
    'form.when.explore': 'Still exploring',
    'form.back': 'Back',
    'form.next': 'Continue',
    'form.submit': 'Submit your request',
    'form.success': 'Thank you! Your request has been sent. We will contact you within 24 hours.',

    'sys.eyebrow': 'Our System',
    'sys.title': 'An acquisition system<br>structured in 5 steps',
    'sys.text': 'From strategic research to scaling: a proven process to generate enrollments and admissions appointments predictably.',
    'sys.1.title': 'Benchmark & content creation',
    'sys.1.text': 'Positioning, competition, and high-value content.',
    'sys.1.t1': '+ Benchmark & positioning',
    'sys.1.t2': '+ Competitive research',
    'sys.1.t3': '+ High-value content',
    'sys.1.t4': '+ Brand attractiveness',
    'sys.2.title': 'Advertising campaigns',
    'sys.2.text': 'Meta & Google optimized for qualified prospects.',
    'sys.2.t1': '+ Meta & Instagram',
    'sys.2.t2': '+ Google Ads',
    'sys.2.t3': '+ Targeting & optimization',
    'sys.2.t4': '+ Qualified prospects',
    'sys.3.title': 'Qualification funnel',
    'sys.3.text': 'Filter and guide prospects toward admissions appointments.',
    'sys.3.t1': '+ Lead filtering',
    'sys.3.t2': '+ Admissions routing',
    'sys.3.t3': '+ Structured appointments',
    'sys.3.t4': '+ Qualification',
    'sys.4.title': 'CRM & automation',
    'sys.4.text': 'Lead tracking, follow-ups, and enrollment pipeline.',
    'sys.4.t1': '+ Lead tracking',
    'sys.4.t2': '+ Automated follow-ups',
    'sys.4.t3': '+ Enrollment pipeline',
    'sys.4.t4': '+ Dedicated CRM',
    'sys.5.title': 'Analysis & scaling',
    'sys.5.text': 'Continuous optimization and volume based on your goals.',
    'sys.5.t1': '+ Continuous analysis',
    'sys.5.t2': '+ Optimization',
    'sys.5.t3': '+ Scaling',
    'sys.5.t4': '+ Goals',

    'promise.heading': 'Performance & Digital Marketing Agency Focused on ROI<span class="promise__dot">.</span>',
    'promise.quote': '<span class="promise__mark">“</span>Our promise is simple:<br>Measurable results. Predictable performance.<span class="promise__mark">”</span>',
    'promise.caption': 'Saad CHAHOUBI - Founder, 63 Agency',
    'promise.cta': 'Talk to an expert',

    'about.hero.title': 'From visibility to results.',
    'about.hero.lead': '63 Agency was born with a simple ambition: turn marketing into a real growth engine.',
    'about.story.1': 'We support companies that want to go beyond visibility and generate real business opportunities.',
    'about.story.2': 'Our approach brings together four essential levers: content, advertising, automation, and sales follow-up.',
    'about.story.3': 'The goal: build a system that attracts the right people, converts them into qualified prospects, and turns more opportunities into clients.',
    'about.path.eyebrow': 'The acquisition journey',
    'about.path.title': 'We are not just looking to generate clicks, views, or form fills.',
    'about.path.sub': 'We build the full acquisition journey:',
    'about.step1.title': 'Attract',
    'about.step1.text': 'Content and ad campaigns designed to capture your market’s attention.',
    'about.step2.title': 'Convert',
    'about.step2.text': 'Funnels built to turn that attention into qualified prospects.',
    'about.step3.title': 'Automate',
    'about.step3.text': 'Connections and automations so every lead reaches the right place and is handled quickly.',
    'about.step4.title': 'Optimize',
    'about.step4.text': 'Continuous tracking of campaigns, leads, and sales performance to improve results.',
    'about.metric.title': 'Only one metric truly matters: growth.',
    'about.metric.1': 'Our work does not stop at marketing.',
    'about.metric.2': 'We look at what happens after the lead: how many prospects reply, book a meeting, show up, and actually become clients.',
    'about.metric.3': 'Because in the end, marketing only has value when it helps grow your revenue.',
    'about.cta': 'Talk to an expert',

    'sfaq.eyebrow': 'Services FAQ',
    'sfaq.title': 'Questions about our system',
    'sfaq.sub': 'Everything you need to know about our 5-step acquisition process.',
    'sfaq.q1': 'What does your 5-step system include?',
    'sfaq.a1': 'A full journey: benchmark & content, Meta/Google campaigns, qualification funnel, CRM & automation, then analysis & scaling. The goal: generate qualified leads and appointments predictably.',
    'sfaq.q2': 'Do we need all 5 steps, or can we start with one?',
    'sfaq.a2': 'The system is designed to work together. Depending on your situation, we can prioritize certain steps first, then complete the journey to maximize results.',
    'sfaq.q3': 'Do you manage Meta Ads and Google Ads in-house?',
    'sfaq.a3': 'Yes. We structure, launch, and optimize your Meta & Google campaigns to generate qualified prospects, with tracking of cost per lead and performance.',
    'sfaq.q4': 'How does the qualification funnel work?',
    'sfaq.a4': 'It filters and routes leads toward structured admissions appointments. The idea: fewer cold leads, more conversations with genuinely interested prospects.',
    'sfaq.q5': 'Do you set up CRM and automations?',
    'sfaq.a5': 'Yes. Lead tracking, automated follow-ups, and an enrollment pipeline so every prospect reaches the right place and is handled quickly.',
    'sfaq.q6': 'How do you measure and scale results?',
    'sfaq.a6': 'Continuous analysis of campaigns, leads, and sales performance. We optimize what works, cut what doesn’t convert, then scale according to your goals.'
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
