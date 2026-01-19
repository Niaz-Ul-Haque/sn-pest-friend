export interface PestData {
  slug: string;
  title: { en: string; fr: string };
  description: { en: string; fr: string };
  heroLead: { en: string; fr: string };
  image: string;
  imageAlt: { en: string; fr: string };
  imageCaption: { en: string; fr: string };
  metaKeywords: string;
  identification: { en: string; fr: string }[];
  lifecycle: {
    icon: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  }[];
  behaviour: { en: string; fr: string }[];
  healthRisks: { en: string; fr: string }[];
  hideSpots: { en: string; fr: string }[];
  signs: {
    icon: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  }[];
  prevention: {
    icon: string;
    title: { en: string; fr: string };
    description: { en: string; fr: string };
  }[];
  faqs: {
    question: { en: string; fr: string };
    answer: { en: string; fr: string };
  }[];
}

export const pestsData: Record<string, PestData> = {
  'bed-bugs': {
    slug: 'bed-bugs',
    title: { en: 'Bed Bugs', fr: 'Punaises de lit' },
    description: {
      en: 'Complete guide on bed bugs in Montreal. Learn to identify bed bugs, their life cycle, signs of infestation, and professional treatment options.',
      fr: "Guide complet sur les punaises de lit à Montréal. Apprenez à identifier les punaises de lit, leur cycle de vie, les signes d'infestation et les options de traitement professionnel."
    },
    heroLead: {
      en: 'Bed bugs are small, parasitic insects that feed on human blood. They are excellent hitchhikers and can spread quickly through apartment buildings, hotels, and homes.',
      fr: "Les punaises de lit sont de petits insectes parasites qui se nourrissent de sang humain. Ce sont d'excellentes auto-stoppeuses qui peuvent se propager rapidement dans les immeubles d'appartements, les hôtels et les maisons."
    },
    image: '/images/bedbugs.jpeg',
    imageAlt: { en: 'Adult bed bug close-up', fr: 'Punaise de lit adulte vue de près' },
    imageCaption: { en: 'Adult bed bug (Cimex lectularius) - approximately 5-7mm', fr: 'Punaise de lit adulte (Cimex lectularius) - environ 5-7mm' },
    metaKeywords: 'bed bugs Montreal, bed bug extermination, bed bug identification, bed bug treatment',
    identification: [
      { en: 'Oval, flattened body shape', fr: 'Corps de forme ovale et aplati' },
      { en: 'Reddish-brown color (darker after feeding)', fr: 'Couleur brun-rougeâtre (plus foncée après alimentation)' },
      { en: 'Size: 5-7mm (apple seed size)', fr: "Taille: 5-7mm (taille d'un pépin de pomme)" },
      { en: '6 legs, 2 antennae', fr: '6 pattes, 2 antennes' },
      { en: 'Cannot fly or jump', fr: 'Ne peut ni voler ni sauter' },
      { en: 'Sweet, musty odor when crushed', fr: "Odeur douce et de moisi lorsqu'écrasée" }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'White, 1mm long. Female lays 1-5 eggs per day, up to 500 in lifetime. Hatch in 6-10 days.', fr: 'Blancs, 1mm de long. La femelle pond 1-5 œufs par jour, jusqu\'à 500 dans sa vie. Éclosion en 6-10 jours.' } },
      { icon: '🐛', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: '5 molting stages. Require blood meal between each stage. Total development: 5-8 weeks.', fr: '5 stades de mue. Nécessitent un repas de sang entre chaque stade. Développement total: 5-8 semaines.' } },
      { icon: '🪲', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 6-12 months. Feed every 5-10 days. Can survive months without feeding.', fr: 'Vivent 6-12 mois. Se nourrissent tous les 5-10 jours. Peuvent survivre des mois sans se nourrir.' } },
      { icon: '🔄', title: { en: 'Reproduction', fr: 'Reproduction' }, description: { en: 'Continuous breeding. One female can start an infestation of thousands in months.', fr: 'Reproduction continue. Une femelle peut démarrer une infestation de milliers en quelques mois.' } }
    ],
    behaviour: [
      { en: 'Nocturnal feeders - most active between 2-5 AM', fr: 'Se nourrissent la nuit - plus actives entre 2h et 5h du matin' },
      { en: 'Attracted by body heat and CO2 from breathing', fr: 'Attirées par la chaleur corporelle et le CO2 de la respiration' },
      { en: 'Hide within 8 feet of sleeping areas during day', fr: 'Se cachent à moins de 2,5 mètres des zones de sommeil pendant la journée' },
      { en: 'Travel through walls, electrical outlets, pipes', fr: 'Voyagent à travers les murs, prises électriques, tuyaux' },
      { en: 'Excellent hitchhikers on luggage, clothing, furniture', fr: 'Excellentes auto-stoppeuses sur les bagages, vêtements, meubles' }
    ],
    healthRisks: [
      { en: 'Itchy welts and skin irritation from bites', fr: 'Marques rouges et irritation cutanée dues aux piqûres' },
      { en: 'Allergic reactions in some individuals', fr: 'Réactions allergiques chez certaines personnes' },
      { en: 'Secondary skin infections from scratching', fr: 'Infections cutanées secondaires dues au grattage' },
      { en: 'Anxiety, insomnia, psychological distress', fr: 'Anxiété, insomnie, détresse psychologique' },
      { en: 'No known disease transmission (but research ongoing)', fr: 'Pas de transmission de maladies connue (mais recherche en cours)' }
    ],
    hideSpots: [
      { en: 'Mattress seams and box springs', fr: 'Coutures de matelas et sommiers' },
      { en: 'Bed frame joints and headboards', fr: 'Joints de cadre de lit et têtes de lit' },
      { en: 'Behind baseboards and wall outlets', fr: 'Derrière les plinthes et prises murales' },
      { en: 'Inside furniture and dresser drawers', fr: "À l'intérieur des meubles et tiroirs de commode" },
      { en: 'Behind picture frames and wallpaper', fr: 'Derrière les cadres et le papier peint' },
      { en: 'In carpet edges and curtain folds', fr: 'Dans les bords de tapis et plis de rideaux' }
    ],
    signs: [
      { icon: '🔴', title: { en: 'Bite Marks', fr: 'Marques de Piqûres' }, description: { en: 'Red, itchy welts in lines or clusters on exposed skin', fr: 'Marques rouges et qui démangent en lignes ou groupes' } },
      { icon: '💉', title: { en: 'Blood Stains', fr: 'Taches de Sang' }, description: { en: 'Small reddish-brown spots on sheets from crushed bugs', fr: "Petites taches brun-rougeâtre sur les draps" } },
      { icon: '💩', title: { en: 'Fecal Spots', fr: 'Taches Fécales' }, description: { en: 'Dark spots (digested blood) on mattress and walls', fr: 'Taches sombres (sang digéré) sur le matelas et les murs' } },
      { icon: '🐚', title: { en: 'Shed Skins', fr: 'Peaux Mues' }, description: { en: 'Translucent exoskeletons from molting nymphs', fr: 'Exosquelettes translucides des nymphes qui muent' } },
      { icon: '👃', title: { en: 'Musty Odor', fr: 'Odeur de Moisi' }, description: { en: 'Sweet, musty smell in heavy infestations', fr: "Odeur douce et de moisi dans les infestations importantes" } },
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Tiny white eggs (1mm) in crevices and seams', fr: 'Minuscules œufs blancs (1mm) dans les fissures' } }
    ],
    prevention: [
      { icon: '🧳', title: { en: 'When Traveling', fr: 'En Voyage' }, description: { en: "Inspect hotel rooms, keep luggage elevated, wash clothes on return", fr: "Inspectez les chambres d'hôtel, gardez les bagages surélevés" } },
      { icon: '🛋️', title: { en: 'Second-Hand Furniture', fr: 'Meubles Usagés' }, description: { en: 'Thoroughly inspect any used furniture before bringing home', fr: 'Inspectez soigneusement tout meuble usagé' } },
      { icon: '🛏️', title: { en: 'Mattress Protection', fr: 'Protection du Matelas' }, description: { en: 'Use bed bug-proof encasements on mattresses', fr: 'Utilisez des housses anti-punaises sur les matelas' } },
      { icon: '🧹', title: { en: 'Regular Cleaning', fr: 'Nettoyage Régulier' }, description: { en: 'Vacuum frequently, reduce clutter, wash bedding in hot water', fr: "Passez l'aspirateur fréquemment, réduisez l'encombrement" } },
      { icon: '🔍', title: { en: 'Regular Inspections', fr: 'Inspections Régulières' }, description: { en: 'Check mattress seams, headboards, and furniture regularly', fr: 'Vérifiez régulièrement les coutures de matelas' } },
      { icon: '🏢', title: { en: 'Building Entry Points', fr: "Points d'Entrée" }, description: { en: 'Seal cracks around baseboards, outlets, and pipe entries', fr: 'Scellez les fissures autour des plinthes et prises' } }
    ],
    faqs: [
      { question: { en: 'How do I know if I have bed bugs?', fr: "Comment savoir si j'ai des punaises de lit?" }, answer: { en: 'Common signs include itchy bites in lines or clusters, small blood stains on sheets, dark fecal spots on mattress seams, shed skins, and a sweet musty odor.', fr: 'Les signes courants incluent des piqûres qui démangent en lignes ou groupes, des taches de sang sur les draps, des taches fécales sombres sur les coutures de matelas.' } },
      { question: { en: 'Can bed bugs transmit diseases?', fr: 'Les punaises de lit peuvent-elles transmettre des maladies?' }, answer: { en: 'While bed bugs are not currently known to transmit diseases, their bites can cause significant discomfort including itching, skin irritation, and allergic reactions.', fr: "Bien que les punaises de lit ne soient pas connues pour transmettre des maladies, leurs piqûres peuvent causer un inconfort important." } },
      { question: { en: 'How much does bed bug extermination cost in Montreal?', fr: "Combien coûte l'extermination de punaises de lit à Montréal?" }, answer: { en: 'For apartments, typical costs range from $300-$800. For houses, expect $600-$1,500. All treatments include follow-up visits.', fr: 'Pour les appartements, les coûts varient de 300$ à 800$. Pour les maisons, comptez entre 600$ et 1500$.' } },
      { question: { en: 'How long does bed bug treatment take?', fr: 'Combien de temps prend le traitement?' }, answer: { en: 'Chemical treatment typically requires 2-3 applications spaced 2-3 weeks apart. Complete elimination is usually achieved within 4-6 weeks.', fr: 'Le traitement chimique nécessite généralement 2-3 applications espacées de 2-3 semaines. Élimination complète en 4-6 semaines.' } }
    ]
  },
  'rats': {
    slug: 'rats',
    title: { en: 'Rats', fr: 'Rats' },
    description: {
      en: 'Complete guide on rats in Montreal. Learn to identify rats, their behavior, signs of infestation, and professional extermination options.',
      fr: "Guide complet sur les rats à Montréal. Apprenez à identifier les rats, leur comportement, les signes d'infestation et les options d'extermination professionnelle."
    },
    heroLead: {
      en: 'Rats are large, destructive rodents that can cause significant property damage and spread diseases. Norway rats are the most common species in Montreal.',
      fr: "Les rats sont de gros rongeurs destructeurs qui peuvent causer des dommages importants à la propriété et propager des maladies. Les rats de Norvège sont l'espèce la plus commune à Montréal."
    },
    image: '/images/rats.jpeg',
    imageAlt: { en: 'Brown rat close-up', fr: 'Rat brun vue de près' },
    imageCaption: { en: 'Norway rat (Rattus norvegicus) - 20-25cm body length', fr: 'Rat de Norvège (Rattus norvegicus) - 20-25cm de longueur' },
    metaKeywords: 'rats Montreal, rat extermination, rat identification, rat control',
    identification: [
      { en: 'Brown or gray fur, lighter on belly', fr: 'Fourrure brune ou grise, plus claire sur le ventre' },
      { en: 'Body length: 20-25cm (plus 18-25cm tail)', fr: 'Longueur du corps: 20-25cm (plus 18-25cm de queue)' },
      { en: 'Weight: 350-500 grams', fr: 'Poids: 350-500 grammes' },
      { en: 'Small ears, blunt nose', fr: 'Petites oreilles, nez arrondi' },
      { en: 'Thick, scaly tail shorter than body', fr: 'Queue épaisse et écailleuse plus courte que le corps' },
      { en: 'Droppings: 1.5-2cm, capsule-shaped', fr: 'Excréments: 1,5-2cm, en forme de capsule' }
    ],
    lifecycle: [
      { icon: '🐣', title: { en: 'Birth', fr: 'Naissance' }, description: { en: '6-12 pups per litter. Born hairless, blind. Weaned at 3-4 weeks.', fr: '6-12 petits par portée. Naissent sans poils, aveugles. Sevrés à 3-4 semaines.' } },
      { icon: '🐀', title: { en: 'Juvenile', fr: 'Juvénile' }, description: { en: 'Sexually mature at 5 weeks. Can reproduce at 3 months old.', fr: 'Maturité sexuelle à 5 semaines. Peuvent se reproduire à 3 mois.' } },
      { icon: '🪤', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 1-2 years. Females can have 5-10 litters per year.', fr: 'Vivent 1-2 ans. Les femelles peuvent avoir 5-10 portées par an.' } },
      { icon: '📈', title: { en: 'Population', fr: 'Population' }, description: { en: 'Two rats can produce 1,250 offspring in one year if unchecked.', fr: 'Deux rats peuvent produire 1250 descendants en un an sans contrôle.' } }
    ],
    behaviour: [
      { en: 'Nocturnal - most active at night', fr: 'Nocturnes - plus actifs la nuit' },
      { en: 'Excellent climbers and swimmers', fr: 'Excellents grimpeurs et nageurs' },
      { en: 'Can squeeze through 2.5cm gaps', fr: 'Peuvent se faufiler par des trous de 2,5cm' },
      { en: 'Neophobic - wary of new objects', fr: 'Néophobes - méfiants des nouveaux objets' },
      { en: 'Travel along walls and established paths', fr: 'Voyagent le long des murs et chemins établis' }
    ],
    healthRisks: [
      { en: 'Leptospirosis, Hantavirus, Salmonella', fr: 'Leptospirose, Hantavirus, Salmonelle' },
      { en: 'Rat-bite fever from bites or scratches', fr: 'Fièvre par morsure de rat' },
      { en: 'Food contamination from droppings and urine', fr: 'Contamination alimentaire par excréments et urine' },
      { en: 'Allergies and asthma from dander', fr: 'Allergies et asthme dus aux squames' },
      { en: 'Parasites: fleas, mites, ticks', fr: 'Parasites: puces, acariens, tiques' }
    ],
    hideSpots: [
      { en: 'Basements and crawl spaces', fr: 'Sous-sols et vides sanitaires' },
      { en: 'Behind walls and in wall voids', fr: 'Derrière les murs et dans les cavités' },
      { en: 'Under concrete slabs and foundations', fr: 'Sous les dalles de béton et fondations' },
      { en: 'In sewers and drainage systems', fr: 'Dans les égouts et systèmes de drainage' },
      { en: 'Near garbage and food storage', fr: 'Près des poubelles et stockage alimentaire' },
      { en: 'In cluttered storage areas', fr: 'Dans les zones de stockage encombrées' }
    ],
    signs: [
      { icon: '💩', title: { en: 'Droppings', fr: 'Excréments' }, description: { en: 'Capsule-shaped, 1.5-2cm long, dark brown', fr: 'En forme de capsule, 1,5-2cm, brun foncé' } },
      { icon: '🐾', title: { en: 'Tracks & Rub Marks', fr: 'Traces et Marques' }, description: { en: 'Greasy rub marks along walls and runways', fr: 'Marques graisseuses le long des murs' } },
      { icon: '🔊', title: { en: 'Sounds', fr: 'Sons' }, description: { en: 'Scratching, squeaking, gnawing noises at night', fr: 'Grattements, couinements, bruits de rongement la nuit' } },
      { icon: '🕳️', title: { en: 'Burrows', fr: 'Terriers' }, description: { en: 'Holes 5-7cm diameter near foundations', fr: 'Trous de 5-7cm de diamètre près des fondations' } },
      { icon: '⚡', title: { en: 'Gnaw Marks', fr: 'Marques de Rongement' }, description: { en: 'Damage to wires, wood, pipes, and food packaging', fr: 'Dommages aux fils, bois, tuyaux et emballages' } },
      { icon: '👃', title: { en: 'Odor', fr: 'Odeur' }, description: { en: 'Strong ammonia smell from urine', fr: "Forte odeur d'ammoniac de l'urine" } }
    ],
    prevention: [
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: "Sceller les Points d'Entrée" }, description: { en: 'Close gaps larger than 1.5cm with steel wool and caulk', fr: "Fermez les trous de plus de 1,5cm avec laine d'acier" } },
      { icon: '🗑️', title: { en: 'Waste Management', fr: 'Gestion des Déchets' }, description: { en: 'Use sealed garbage bins, remove waste regularly', fr: 'Utilisez des poubelles fermées, videz régulièrement' } },
      { icon: '🍎', title: { en: 'Food Storage', fr: 'Stockage Alimentaire' }, description: { en: 'Store food in sealed containers, clean up spills', fr: 'Stockez la nourriture dans des contenants hermétiques' } },
      { icon: '🌿', title: { en: 'Yard Maintenance', fr: 'Entretien de la Cour' }, description: { en: 'Trim vegetation, remove debris and wood piles', fr: 'Taillez la végétation, enlevez les débris' } },
      { icon: '💧', title: { en: 'Eliminate Water', fr: "Éliminer l'Eau" }, description: { en: 'Fix leaks, drain standing water sources', fr: "Réparez les fuites, drainez l'eau stagnante" } },
      { icon: '📦', title: { en: 'Reduce Clutter', fr: "Réduire l'Encombrement" }, description: { en: 'Organize storage areas, elevate items off floor', fr: 'Organisez les zones de stockage, surélevez les objets' } }
    ],
    faqs: [
      { question: { en: 'How do rats enter homes?', fr: 'Comment les rats entrent-ils dans les maisons?' }, answer: { en: 'Rats can squeeze through gaps as small as 2.5cm. Common entry points include gaps around pipes, vents, doors, and foundation cracks.', fr: 'Les rats peuvent se faufiler par des trous de 2,5cm. Points d\'entrée communs: tuyaux, évents, portes, fissures de fondation.' } },
      { question: { en: 'Are rats dangerous?', fr: 'Les rats sont-ils dangereux?' }, answer: { en: 'Yes, rats can transmit diseases like leptospirosis and salmonella, contaminate food, cause property damage, and trigger allergies.', fr: 'Oui, les rats peuvent transmettre des maladies, contaminer la nourriture, causer des dommages et déclencher des allergies.' } },
      { question: { en: 'How much does rat extermination cost?', fr: "Combien coûte l'extermination de rats?" }, answer: { en: 'Costs typically range from $200-$500 for treatment, depending on infestation severity. Exclusion work may cost additional.', fr: 'Les coûts varient généralement de 200$ à 500$ selon la gravité. Les travaux d\'exclusion peuvent coûter plus.' } },
      { question: { en: 'How long does it take to get rid of rats?', fr: 'Combien de temps pour se débarrasser des rats?' }, answer: { en: 'Most rat infestations can be controlled within 2-4 weeks with professional treatment and proper exclusion measures.', fr: 'La plupart des infestations peuvent être contrôlées en 2-4 semaines avec un traitement professionnel.' } }
    ]
  },
  'mice': {
    slug: 'mice',
    title: { en: 'Mice', fr: 'Souris' },
    description: {
      en: 'Complete guide on mice in Montreal. Learn to identify mice, their behavior, signs of infestation, and professional extermination options.',
      fr: "Guide complet sur les souris à Montréal. Apprenez à identifier les souris, leur comportement, les signes d'infestation et les options d'extermination."
    },
    heroLead: {
      en: 'Mice are small rodents that can squeeze through tiny openings. They contaminate food, damage structures, and reproduce rapidly.',
      fr: 'Les souris sont de petits rongeurs qui peuvent se faufiler par de petites ouvertures. Elles contaminent la nourriture et se reproduisent rapidement.'
    },
    image: '/images/mice.jpeg',
    imageAlt: { en: 'House mouse', fr: 'Souris domestique' },
    imageCaption: { en: 'House mouse (Mus musculus) - 6-10cm body length', fr: 'Souris domestique (Mus musculus) - 6-10cm de longueur' },
    metaKeywords: 'mice Montreal, mouse extermination, mouse control, house mice',
    identification: [
      { en: 'Gray or brown fur, lighter belly', fr: 'Fourrure grise ou brune, ventre plus clair' },
      { en: 'Body length: 6-10cm (plus 7-10cm tail)', fr: 'Longueur: 6-10cm (plus 7-10cm de queue)' },
      { en: 'Weight: 15-30 grams', fr: 'Poids: 15-30 grammes' },
      { en: 'Large ears relative to body', fr: 'Grandes oreilles par rapport au corps' },
      { en: 'Pointed snout, small eyes', fr: 'Museau pointu, petits yeux' },
      { en: 'Droppings: 3-6mm, rod-shaped', fr: 'Excréments: 3-6mm, en forme de bâtonnet' }
    ],
    lifecycle: [
      { icon: '🐣', title: { en: 'Birth', fr: 'Naissance' }, description: { en: '5-12 pups per litter. Weaned at 3 weeks.', fr: '5-12 petits par portée. Sevrés à 3 semaines.' } },
      { icon: '🐭', title: { en: 'Juvenile', fr: 'Juvénile' }, description: { en: 'Sexually mature at 6-8 weeks old.', fr: 'Maturité sexuelle à 6-8 semaines.' } },
      { icon: '🪤', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 1-2 years. Females have 5-10 litters per year.', fr: 'Vivent 1-2 ans. 5-10 portées par an.' } },
      { icon: '📈', title: { en: 'Population', fr: 'Population' }, description: { en: 'One pair can produce 200+ offspring in 4 months.', fr: 'Une paire peut produire 200+ descendants en 4 mois.' } }
    ],
    behaviour: [
      { en: 'Active mainly at night', fr: 'Actives principalement la nuit' },
      { en: 'Curious and exploratory', fr: 'Curieuses et exploratrices' },
      { en: 'Can squeeze through 6mm gaps', fr: 'Peuvent passer par des trous de 6mm' },
      { en: 'Excellent climbers and jumpers', fr: 'Excellentes grimpeuses et sauteuses' },
      { en: 'Territorial, travel same routes', fr: 'Territoriales, suivent les mêmes routes' }
    ],
    healthRisks: [
      { en: 'Hantavirus, Salmonella, Lymphocytic choriomeningitis', fr: 'Hantavirus, Salmonelle, Chorioméningite lymphocytaire' },
      { en: 'Food contamination from droppings', fr: 'Contamination alimentaire par excréments' },
      { en: 'Allergies and asthma triggers', fr: "Déclencheurs d'allergies et d'asthme" },
      { en: 'Fire hazard from gnawed wires', fr: "Risque d'incendie par fils rongés" },
      { en: 'Parasites: fleas, mites, lice', fr: 'Parasites: puces, acariens, poux' }
    ],
    hideSpots: [
      { en: 'Behind kitchen appliances', fr: 'Derrière les appareils de cuisine' },
      { en: 'Inside walls and cabinets', fr: 'À l\'intérieur des murs et armoires' },
      { en: 'Under sinks and in closets', fr: 'Sous les éviers et dans les placards' },
      { en: 'In attics and basements', fr: 'Dans les greniers et sous-sols' },
      { en: 'Near food storage areas', fr: 'Près des zones de stockage alimentaire' },
      { en: 'In insulation and boxes', fr: 'Dans l\'isolation et les boîtes' }
    ],
    signs: [
      { icon: '💩', title: { en: 'Droppings', fr: 'Excréments' }, description: { en: 'Small, dark pellets 3-6mm long', fr: 'Petites crottes sombres de 3-6mm' } },
      { icon: '🔊', title: { en: 'Sounds', fr: 'Sons' }, description: { en: 'Scratching and squeaking in walls', fr: 'Grattements et couinements dans les murs' } },
      { icon: '🕳️', title: { en: 'Entry Holes', fr: "Trous d'Entrée" }, description: { en: 'Small holes with gnaw marks', fr: 'Petits trous avec marques de rongement' } },
      { icon: '🐾', title: { en: 'Tracks', fr: 'Traces' }, description: { en: 'Footprints and tail marks in dust', fr: 'Empreintes et marques de queue dans la poussière' } },
      { icon: '📦', title: { en: 'Damage', fr: 'Dommages' }, description: { en: 'Gnawed food packages and materials', fr: 'Emballages et matériaux rongés' } },
      { icon: '🪺', title: { en: 'Nests', fr: 'Nids' }, description: { en: 'Shredded materials in hidden areas', fr: 'Matériaux déchiquetés dans les zones cachées' } }
    ],
    prevention: [
      { icon: '🚪', title: { en: 'Seal Gaps', fr: 'Sceller les Trous' }, description: { en: 'Close any opening larger than 6mm', fr: 'Fermez toute ouverture de plus de 6mm' } },
      { icon: '🍎', title: { en: 'Food Storage', fr: 'Stockage Alimentaire' }, description: { en: 'Use sealed containers for all food', fr: 'Utilisez des contenants hermétiques' } },
      { icon: '🧹', title: { en: 'Cleanliness', fr: 'Propreté' }, description: { en: 'Clean up crumbs and spills immediately', fr: 'Nettoyez les miettes et déversements' } },
      { icon: '📦', title: { en: 'Reduce Clutter', fr: "Réduire l'Encombrement" }, description: { en: 'Organize storage to eliminate hiding spots', fr: 'Organisez le stockage pour éliminer les cachettes' } },
      { icon: '🗑️', title: { en: 'Waste Management', fr: 'Gestion des Déchets' }, description: { en: 'Use sealed bins, remove garbage regularly', fr: 'Utilisez des poubelles fermées' } },
      { icon: '🏠', title: { en: 'Exterior Maintenance', fr: 'Entretien Extérieur' }, description: { en: 'Trim vegetation away from building', fr: 'Taillez la végétation loin du bâtiment' } }
    ],
    faqs: [
      { question: { en: 'What is the difference between mice and rats?', fr: 'Quelle est la différence entre souris et rats?' }, answer: { en: 'Mice are smaller (6-10cm body), with larger ears and pointed snouts. Rats are larger (20-25cm body), with smaller ears and blunt snouts.', fr: 'Les souris sont plus petites (6-10cm), avec de plus grandes oreilles. Les rats sont plus gros (20-25cm), avec de petites oreilles.' } },
      { question: { en: 'How do mice get inside?', fr: 'Comment les souris entrent-elles?' }, answer: { en: 'Mice can squeeze through gaps as small as 6mm (size of a pencil). Common entry points include gaps around pipes, vents, and doors.', fr: 'Les souris peuvent passer par des trous de 6mm. Points d\'entrée communs: tuyaux, évents, portes.' } },
      { question: { en: 'How quickly can mice multiply?', fr: 'À quelle vitesse les souris se multiplient-elles?' }, answer: { en: 'One pair of mice can produce over 200 offspring in just 4 months under ideal conditions.', fr: 'Une paire de souris peut produire plus de 200 descendants en 4 mois.' } },
      { question: { en: 'Are mice dangerous?', fr: 'Les souris sont-elles dangereuses?' }, answer: { en: 'Yes, mice can spread diseases, contaminate food, trigger allergies, and cause property damage including fire hazards from gnawed wires.', fr: 'Oui, les souris peuvent propager des maladies, contaminer la nourriture et causer des dommages.' } }
    ]
  },
  'cockroaches': {
    slug: 'cockroaches',
    title: { en: 'Cockroaches', fr: 'Coquerelles' },
    description: {
      en: 'Complete guide on cockroaches in Montreal. Learn to identify cockroaches, their behavior, signs of infestation, and professional extermination options.',
      fr: "Guide complet sur les coquerelles à Montréal. Apprenez à identifier les coquerelles, leur comportement et les options d'extermination."
    },
    heroLead: {
      en: 'Cockroaches are resilient insects that thrive in warm, humid environments. They spread bacteria and can trigger allergies and asthma.',
      fr: "Les coquerelles sont des insectes résistants qui prospèrent dans les environnements chauds et humides. Elles propagent des bactéries."
    },
    image: '/images/cockroaches.jpeg',
    imageAlt: { en: 'German cockroach', fr: 'Coquerelle germanique' },
    imageCaption: { en: 'German cockroach (Blattella germanica) - most common in Montreal', fr: 'Coquerelle germanique (Blattella germanica) - la plus commune à Montréal' },
    metaKeywords: 'cockroaches Montreal, cockroach extermination, German cockroach, cockroach control',
    identification: [
      { en: 'Light brown with 2 dark stripes behind head', fr: 'Brun clair avec 2 rayures sombres derrière la tête' },
      { en: 'Size: 12-15mm (German cockroach)', fr: 'Taille: 12-15mm (coquerelle germanique)' },
      { en: 'Flat, oval-shaped body', fr: 'Corps plat et ovale' },
      { en: 'Long antennae, 6 spiny legs', fr: '6 pattes épineuses, longues antennes' },
      { en: 'Wings present but rarely fly', fr: 'Ailes présentes mais vole rarement' },
      { en: 'Fast runners, prefer to hide', fr: 'Coureurs rapides, préfèrent se cacher' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: '30-40 eggs per capsule. Female carries until hatching.', fr: '30-40 œufs par capsule. La femelle la porte jusqu\'à l\'éclosion.' } },
      { icon: '🐛', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: '6-7 molts over 6-12 weeks to reach adulthood.', fr: '6-7 mues sur 6-12 semaines pour atteindre l\'âge adulte.' } },
      { icon: '🪳', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 6-12 months. Females produce 4-8 egg cases.', fr: 'Vivent 6-12 mois. Les femelles produisent 4-8 capsules.' } },
      { icon: '📈', title: { en: 'Population', fr: 'Population' }, description: { en: 'One female can produce 300+ offspring in her lifetime.', fr: 'Une femelle peut produire 300+ descendants dans sa vie.' } }
    ],
    behaviour: [
      { en: 'Nocturnal - active at night', fr: 'Nocturnes - actives la nuit' },
      { en: 'Prefer warm, humid environments', fr: 'Préfèrent les environnements chauds et humides' },
      { en: 'Omnivorous - eat almost anything', fr: 'Omnivores - mangent presque tout' },
      { en: 'Can survive weeks without food', fr: 'Peuvent survivre des semaines sans nourriture' },
      { en: 'Aggregate in groups using pheromones', fr: 'Se regroupent en utilisant des phéromones' }
    ],
    healthRisks: [
      { en: 'Spread bacteria: E. coli, Salmonella', fr: 'Propagent des bactéries: E. coli, Salmonelle' },
      { en: 'Trigger allergies and asthma', fr: "Déclenchent des allergies et de l'asthme" },
      { en: 'Contaminate food and surfaces', fr: 'Contaminent la nourriture et les surfaces' },
      { en: 'Carry parasitic worms', fr: 'Portent des vers parasites' },
      { en: 'Leave allergens in droppings and shed skins', fr: 'Laissent des allergènes dans les excréments' }
    ],
    hideSpots: [
      { en: 'Under kitchen sinks and appliances', fr: 'Sous les éviers et appareils de cuisine' },
      { en: 'Behind refrigerators and stoves', fr: 'Derrière les réfrigérateurs et cuisinières' },
      { en: 'In cabinet hinges and cracks', fr: 'Dans les charnières et fissures' },
      { en: 'Around plumbing and drains', fr: 'Autour de la plomberie et des drains' },
      { en: 'Inside electronics and appliances', fr: 'À l\'intérieur des électroniques et appareils' },
      { en: 'In cardboard boxes and paper', fr: 'Dans les boîtes en carton et le papier' }
    ],
    signs: [
      { icon: '💩', title: { en: 'Droppings', fr: 'Excréments' }, description: { en: 'Small black specks like coffee grounds', fr: 'Petites taches noires comme du marc de café' } },
      { icon: '🐚', title: { en: 'Egg Cases', fr: 'Capsules d\'Œufs' }, description: { en: 'Brown capsules 6-8mm long', fr: 'Capsules brunes de 6-8mm' } },
      { icon: '👃', title: { en: 'Musty Odor', fr: 'Odeur de Moisi' }, description: { en: 'Oily, musty smell in infested areas', fr: 'Odeur huileuse et de moisi' } },
      { icon: '🌙', title: { en: 'Night Sightings', fr: 'Observations Nocturnes' }, description: { en: 'Seeing roaches when lights turn on', fr: 'Voir des coquerelles quand on allume' } },
      { icon: '🐚', title: { en: 'Shed Skins', fr: 'Peaux Mues' }, description: { en: 'Cast-off skins from molting nymphs', fr: 'Peaux abandonnées des nymphes' } },
      { icon: '💀', title: { en: 'Dead Roaches', fr: 'Coquerelles Mortes' }, description: { en: 'Finding dead cockroaches indicates infestation', fr: 'Trouver des coquerelles mortes indique une infestation' } }
    ],
    prevention: [
      { icon: '🧹', title: { en: 'Cleanliness', fr: 'Propreté' }, description: { en: 'Clean kitchen daily, no crumbs or grease', fr: 'Nettoyez la cuisine quotidiennement' } },
      { icon: '🍎', title: { en: 'Food Storage', fr: 'Stockage Alimentaire' }, description: { en: 'Seal all food in airtight containers', fr: 'Scellez la nourriture dans des contenants hermétiques' } },
      { icon: '💧', title: { en: 'Fix Leaks', fr: 'Réparer les Fuites' }, description: { en: 'Eliminate moisture sources and leaks', fr: 'Éliminez les sources d\'humidité et les fuites' } },
      { icon: '🚪', title: { en: 'Seal Cracks', fr: 'Sceller les Fissures' }, description: { en: 'Caulk gaps around pipes and cabinets', fr: 'Calfeutrez les trous autour des tuyaux' } },
      { icon: '🗑️', title: { en: 'Garbage', fr: 'Ordures' }, description: { en: 'Use sealed bins, empty daily', fr: 'Utilisez des poubelles fermées, videz quotidiennement' } },
      { icon: '📦', title: { en: 'Reduce Clutter', fr: "Réduire l'Encombrement" }, description: { en: 'Remove cardboard boxes and paper piles', fr: 'Enlevez les boîtes en carton et piles de papier' } }
    ],
    faqs: [
      { question: { en: 'Why do I have cockroaches?', fr: 'Pourquoi ai-je des coquerelles?' }, answer: { en: 'Cockroaches are attracted to food, water, and warmth. They can enter through cracks, drains, or be carried in on packages and bags.', fr: 'Les coquerelles sont attirées par la nourriture, l\'eau et la chaleur. Elles peuvent entrer par les fissures ou drains.' } },
      { question: { en: 'Are cockroaches dangerous?', fr: 'Les coquerelles sont-elles dangereuses?' }, answer: { en: 'Yes, cockroaches spread bacteria, trigger allergies and asthma, and contaminate food. Their presence can cause health issues.', fr: 'Oui, les coquerelles propagent des bactéries, déclenchent des allergies et contaminent la nourriture.' } },
      { question: { en: 'How fast do cockroaches multiply?', fr: 'À quelle vitesse les coquerelles se multiplient-elles?' }, answer: { en: 'A single German cockroach female can produce over 300 offspring in her 6-12 month lifespan.', fr: 'Une femelle de coquerelle germanique peut produire plus de 300 descendants dans sa vie de 6-12 mois.' } },
      { question: { en: 'Can I get rid of cockroaches myself?', fr: 'Puis-je me débarrasser des coquerelles moi-même?' }, answer: { en: 'Minor infestations may respond to baits and sanitation, but professional treatment is usually needed for complete elimination.', fr: 'Les infestations mineures peuvent répondre aux appâts, mais un traitement professionnel est généralement nécessaire.' } }
    ]
  },
  'ants': {
    slug: 'ants',
    title: { en: 'Ants', fr: 'Fourmis' },
    description: {
      en: 'Complete guide on ants in Montreal. Learn to identify carpenter ants and pavement ants, their behavior, and professional extermination options.',
      fr: "Guide complet sur les fourmis à Montréal. Apprenez à identifier les fourmis charpentières et de pavé, et les options d'extermination."
    },
    heroLead: {
      en: 'Ants are social insects that form large colonies. Carpenter ants can damage wood structures, while pavement ants invade kitchens.',
      fr: 'Les fourmis sont des insectes sociaux formant de grandes colonies. Les fourmis charpentières endommagent le bois.'
    },
    image: '/images/ants.jpeg',
    imageAlt: { en: 'Carpenter ant', fr: 'Fourmi charpentière' },
    imageCaption: { en: 'Carpenter ant (Camponotus spp.) - can damage wood structures', fr: 'Fourmi charpentière (Camponotus spp.) - peut endommager les structures en bois' },
    metaKeywords: 'ants Montreal, carpenter ants, ant extermination, ant control',
    identification: [
      { en: 'Carpenter ants: Black, 6-13mm, single node waist', fr: 'Fourmis charpentières: Noires, 6-13mm, taille à un seul nœud' },
      { en: 'Pavement ants: Brown-black, 2.5-4mm, 2 nodes', fr: 'Fourmis de pavé: Brun-noir, 2,5-4mm, 2 nœuds' },
      { en: 'Pharaoh ants: Yellow-brown, 1.5-2mm, indoor pest', fr: 'Fourmis pharaon: Jaune-brun, 1,5-2mm, nuisible intérieur' },
      { en: 'All have elbowed antennae', fr: 'Toutes ont des antennes coudées' },
      { en: '6 legs, 3 body segments', fr: '6 pattes, 3 segments corporels' },
      { en: 'Winged reproductives during swarming', fr: 'Reproducteurs ailés pendant l\'essaimage' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Queen lays eggs continuously. Hatch in 1-2 weeks.', fr: 'La reine pond continuellement. Éclosion en 1-2 semaines.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Fed by workers. Pupate after 2-3 weeks.', fr: 'Nourries par les ouvrières. Nymphose après 2-3 semaines.' } },
      { icon: '🐜', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Workers live 1-3 years. Queens live 10-25 years.', fr: 'Les ouvrières vivent 1-3 ans. Les reines vivent 10-25 ans.' } },
      { icon: '👑', title: { en: 'Colony', fr: 'Colonie' }, description: { en: 'Mature colonies have 2,000-50,000 workers.', fr: 'Les colonies matures ont 2000-50000 ouvrières.' } }
    ],
    behaviour: [
      { en: 'Follow pheromone trails to food sources', fr: 'Suivent des pistes de phéromones vers la nourriture' },
      { en: 'Carpenter ants excavate wood for nesting', fr: 'Les fourmis charpentières creusent le bois pour nicher' },
      { en: 'Most active in spring and summer', fr: 'Plus actives au printemps et en été' },
      { en: 'Swarm in spring to establish new colonies', fr: 'Essaiment au printemps pour établir de nouvelles colonies' },
      { en: 'Communicate through chemical signals', fr: 'Communiquent par signaux chimiques' }
    ],
    healthRisks: [
      { en: 'Food contamination', fr: 'Contamination alimentaire' },
      { en: 'Carpenter ants cause structural damage', fr: 'Les fourmis charpentières causent des dommages structurels' },
      { en: 'Some species can bite or sting', fr: 'Certaines espèces peuvent mordre ou piquer' },
      { en: 'Pharaoh ants spread pathogens in hospitals', fr: 'Les fourmis pharaon propagent des pathogènes dans les hôpitaux' },
      { en: 'Property damage from nesting activities', fr: 'Dommages matériels dus aux activités de nidification' }
    ],
    hideSpots: [
      { en: 'Wood with moisture damage (carpenter ants)', fr: 'Bois endommagé par l\'humidité (fourmis charpentières)' },
      { en: 'Wall voids and insulation', fr: 'Cavités murales et isolation' },
      { en: 'Under floors and in ceilings', fr: 'Sous les planchers et dans les plafonds' },
      { en: 'Around windows and door frames', fr: 'Autour des fenêtres et cadres de portes' },
      { en: 'In kitchens near food sources', fr: 'Dans les cuisines près des sources de nourriture' },
      { en: 'Under concrete slabs (pavement ants)', fr: 'Sous les dalles de béton (fourmis de pavé)' }
    ],
    signs: [
      { icon: '🐜', title: { en: 'Ant Trails', fr: 'Pistes de Fourmis' }, description: { en: 'Lines of ants following scent trails', fr: 'Lignes de fourmis suivant des pistes odorantes' } },
      { icon: '🪵', title: { en: 'Sawdust Piles', fr: 'Tas de Sciure' }, description: { en: 'Frass from carpenter ant excavation', fr: 'Sciure de l\'excavation des fourmis charpentières' } },
      { icon: '🔊', title: { en: 'Rustling Sounds', fr: 'Bruits de Froissement' }, description: { en: 'Sounds in walls from large colonies', fr: 'Sons dans les murs des grandes colonies' } },
      { icon: '🪰', title: { en: 'Winged Ants', fr: 'Fourmis Ailées' }, description: { en: 'Swarmers indicate mature colony nearby', fr: 'Les essaimeurs indiquent une colonie mature' } },
      { icon: '🏠', title: { en: 'Wood Damage', fr: 'Dommages au Bois' }, description: { en: 'Smooth galleries in wood structures', fr: 'Galeries lisses dans les structures en bois' } },
      { icon: '🌍', title: { en: 'Dirt Mounds', fr: 'Monticules de Terre' }, description: { en: 'Small soil piles near pavement cracks', fr: 'Petits tas de terre près des fissures de pavé' } }
    ],
    prevention: [
      { icon: '💧', title: { en: 'Fix Moisture Issues', fr: "Réparer les Problèmes d'Humidité" }, description: { en: 'Repair leaks, ensure proper drainage', fr: 'Réparez les fuites, assurez un bon drainage' } },
      { icon: '🪵', title: { en: 'Remove Wood Debris', fr: 'Enlever les Débris de Bois' }, description: { en: 'Clear dead trees, stumps, and wood piles', fr: 'Enlevez les arbres morts et piles de bois' } },
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: "Sceller les Points d'Entrée" }, description: { en: 'Caulk cracks around windows, doors, pipes', fr: 'Calfeutrez les fissures autour des fenêtres' } },
      { icon: '🌿', title: { en: 'Trim Vegetation', fr: 'Tailler la Végétation' }, description: { en: 'Keep plants away from building foundation', fr: 'Gardez les plantes loin de la fondation' } },
      { icon: '🍎', title: { en: 'Food Storage', fr: 'Stockage Alimentaire' }, description: { en: 'Seal food, clean up crumbs and spills', fr: 'Scellez la nourriture, nettoyez les miettes' } },
      { icon: '🗑️', title: { en: 'Waste Management', fr: 'Gestion des Déchets' }, description: { en: 'Use sealed garbage containers', fr: 'Utilisez des poubelles fermées' } }
    ],
    faqs: [
      { question: { en: 'How do I know if I have carpenter ants?', fr: 'Comment savoir si j\'ai des fourmis charpentières?' }, answer: { en: 'Signs include large black ants (6-13mm), sawdust piles near wood, rustling sounds in walls, and winged ants in spring.', fr: 'Les signes incluent de grosses fourmis noires (6-13mm), des tas de sciure, des sons dans les murs.' } },
      { question: { en: 'Do carpenter ants eat wood?', fr: 'Les fourmis charpentières mangent-elles le bois?' }, answer: { en: 'No, they excavate wood to create nests but don\'t eat it. They prefer moist, damaged wood and eat proteins and sugars.', fr: 'Non, elles creusent le bois pour créer des nids mais ne le mangent pas.' } },
      { question: { en: 'Why do I have ants in winter?', fr: 'Pourquoi ai-je des fourmis en hiver?' }, answer: { en: 'Indoor ant activity in winter usually indicates a nest inside the building, likely in walls or near a heat source.', fr: 'L\'activité de fourmis en hiver indique généralement un nid à l\'intérieur du bâtiment.' } },
      { question: { en: 'How much does ant extermination cost?', fr: 'Combien coûte l\'extermination de fourmis?' }, answer: { en: 'Costs range from $150-$500 depending on species and severity. Carpenter ant treatment may require additional inspection.', fr: 'Les coûts varient de 150$ à 500$ selon l\'espèce et la gravité.' } }
    ]
  },
  'wasps': {
    slug: 'wasps',
    title: { en: 'Wasps', fr: 'Guêpes' },
    description: {
      en: 'Complete guide on wasps in Montreal. Learn to identify wasps, their behavior, risks, and professional nest removal options.',
      fr: "Guide complet sur les guêpes à Montréal. Apprenez à identifier les guêpes, leur comportement et les options de retrait de nids."
    },
    heroLead: {
      en: 'Wasps are stinging insects that build nests around homes. They can be aggressive when threatened and pose risks to those with allergies.',
      fr: "Les guêpes sont des insectes piqueurs qui construisent des nids autour des maisons. Elles peuvent être agressives et présentent des risques pour les allergiques."
    },
    image: '/images/wasps.jpeg',
    imageAlt: { en: 'Wasp on nest', fr: 'Guêpe sur nid' },
    imageCaption: { en: 'Yellow jacket wasp - aggressive when nest is threatened', fr: 'Guêpe jaune - agressive quand le nid est menacé' },
    metaKeywords: 'wasps Montreal, wasp nest removal, yellow jackets, wasp extermination',
    identification: [
      { en: 'Yellow and black striped body', fr: 'Corps rayé jaune et noir' },
      { en: 'Narrow waist between thorax and abdomen', fr: 'Taille étroite entre le thorax et l\'abdomen' },
      { en: 'Size: 10-25mm depending on species', fr: 'Taille: 10-25mm selon l\'espèce' },
      { en: '2 pairs of wings, 6 legs', fr: '2 paires d\'ailes, 6 pattes' },
      { en: 'Smooth, shiny body (unlike fuzzy bees)', fr: 'Corps lisse et brillant (contrairement aux abeilles velues)' },
      { en: 'Can sting multiple times', fr: 'Peuvent piquer plusieurs fois' }
    ],
    lifecycle: [
      { icon: '👑', title: { en: 'Queen', fr: 'Reine' }, description: { en: 'Emerges in spring to start new colony.', fr: 'Émerge au printemps pour démarrer une nouvelle colonie.' } },
      { icon: '🏠', title: { en: 'Nest Building', fr: 'Construction du Nid' }, description: { en: 'Queen builds initial cells, lays first eggs.', fr: 'La reine construit les premières cellules, pond les premiers œufs.' } },
      { icon: '🐝', title: { en: 'Workers', fr: 'Ouvrières' }, description: { en: 'Take over nest duties. Colony grows all summer.', fr: 'Prennent en charge les tâches du nid. La colonie grandit tout l\'été.' } },
      { icon: '❄️', title: { en: 'Fall', fr: 'Automne' }, description: { en: 'New queens mate, old colony dies. Queens hibernate.', fr: 'Les nouvelles reines s\'accouplent, l\'ancienne colonie meurt. Les reines hibernent.' } }
    ],
    behaviour: [
      { en: 'Social insects living in colonies', fr: 'Insectes sociaux vivant en colonies' },
      { en: 'Defend nest aggressively', fr: 'Défendent le nid agressivement' },
      { en: 'Attracted to sweet foods and proteins', fr: 'Attirées par les aliments sucrés et les protéines' },
      { en: 'More aggressive in late summer/fall', fr: 'Plus agressives en fin d\'été/automne' },
      { en: 'Can sting repeatedly when threatened', fr: 'Peuvent piquer plusieurs fois quand menacées' }
    ],
    healthRisks: [
      { en: 'Painful stings causing swelling', fr: 'Piqûres douloureuses causant un gonflement' },
      { en: 'Severe allergic reactions (anaphylaxis)', fr: 'Réactions allergiques graves (anaphylaxie)' },
      { en: 'Multiple stings can be dangerous', fr: 'Les piqûres multiples peuvent être dangereuses' },
      { en: 'Life-threatening for allergic individuals', fr: 'Potentiellement mortel pour les personnes allergiques' },
      { en: 'Secondary infections from scratching', fr: 'Infections secondaires dues au grattage' }
    ],
    hideSpots: [
      { en: 'Under eaves and roof overhangs', fr: 'Sous les avant-toits et débords de toit' },
      { en: 'In wall voids and attics', fr: 'Dans les cavités murales et greniers' },
      { en: 'Underground (yellow jackets)', fr: 'Sous terre (guêpes jaunes)' },
      { en: 'In bushes and trees', fr: 'Dans les buissons et arbres' },
      { en: 'Around deck and porch areas', fr: 'Autour des terrasses et vérandas' },
      { en: 'In sheds and garages', fr: 'Dans les remises et garages' }
    ],
    signs: [
      { icon: '🐝', title: { en: 'Wasp Activity', fr: 'Activité de Guêpes' }, description: { en: 'Multiple wasps flying in same area', fr: 'Plusieurs guêpes volant dans la même zone' } },
      { icon: '🏠', title: { en: 'Visible Nest', fr: 'Nid Visible' }, description: { en: 'Paper-like nests under eaves or in trees', fr: 'Nids en papier sous les avant-toits ou dans les arbres' } },
      { icon: '🕳️', title: { en: 'Ground Holes', fr: 'Trous au Sol' }, description: { en: 'Wasps entering/exiting ground holes', fr: 'Guêpes entrant/sortant de trous au sol' } },
      { icon: '🔊', title: { en: 'Buzzing', fr: 'Bourdonnement' }, description: { en: 'Loud buzzing from nest location', fr: 'Bourdonnement fort de l\'emplacement du nid' } },
      { icon: '⚠️', title: { en: 'Aggression', fr: 'Agressivité' }, description: { en: 'Wasps becoming defensive when approaching area', fr: 'Guêpes devenant défensives quand on approche' } },
      { icon: '🪵', title: { en: 'Chewed Wood', fr: 'Bois Mâché' }, description: { en: 'Wasps scraping wood for nest building', fr: 'Guêpes grattant le bois pour construire le nid' } }
    ],
    prevention: [
      { icon: '🗑️', title: { en: 'Cover Food', fr: 'Couvrir la Nourriture' }, description: { en: 'Keep outdoor food covered, clean up spills', fr: 'Gardez la nourriture extérieure couverte' } },
      { icon: '🍾', title: { en: 'Seal Garbage', fr: 'Sceller les Ordures' }, description: { en: 'Use tight-fitting lids on trash cans', fr: 'Utilisez des couvercles hermétiques sur les poubelles' } },
      { icon: '🚪', title: { en: 'Seal Openings', fr: 'Sceller les Ouvertures' }, description: { en: 'Close gaps in siding, soffits, and foundations', fr: 'Fermez les trous dans le revêtement et les fondations' } },
      { icon: '🌺', title: { en: 'Avoid Attractants', fr: 'Éviter les Attractifs' }, description: { en: 'Don\'t wear bright colors or perfumes outdoors', fr: 'Ne portez pas de couleurs vives ou de parfums à l\'extérieur' } },
      { icon: '🔍', title: { en: 'Early Detection', fr: 'Détection Précoce' }, description: { en: 'Inspect property in spring for new nests', fr: 'Inspectez la propriété au printemps pour les nouveaux nids' } },
      { icon: '🏠', title: { en: 'Professional Removal', fr: 'Retrait Professionnel' }, description: { en: 'Never attempt to remove large nests yourself', fr: 'Ne tentez jamais de retirer de gros nids vous-même' } }
    ],
    faqs: [
      { question: { en: 'How dangerous are wasp stings?', fr: 'Les piqûres de guêpes sont-elles dangereuses?' }, answer: { en: 'For most people, stings cause pain and swelling. For those with allergies, stings can cause life-threatening anaphylaxis requiring immediate medical attention.', fr: 'Pour la plupart des gens, les piqûres causent douleur et gonflement. Pour les allergiques, elles peuvent causer une anaphylaxie potentiellement mortelle.' } },
      { question: { en: 'When should I remove a wasp nest?', fr: 'Quand devrais-je retirer un nid de guêpes?' }, answer: { en: 'Small nests can be treated in early spring. Large or hard-to-reach nests should always be handled by professionals.', fr: 'Les petits nids peuvent être traités au début du printemps. Les gros nids doivent toujours être traités par des professionnels.' } },
      { question: { en: 'Will wasps return after nest removal?', fr: 'Les guêpes reviendront-elles après le retrait du nid?' }, answer: { en: 'Wasps may return to the same location. Sealing entry points and preventive treatments can discourage rebuilding.', fr: 'Les guêpes peuvent revenir au même endroit. Sceller les points d\'entrée peut décourager la reconstruction.' } },
      { question: { en: 'How much does wasp nest removal cost?', fr: 'Combien coûte le retrait d\'un nid de guêpes?' }, answer: { en: 'Costs typically range from $100-$300 depending on nest size, location, and accessibility.', fr: 'Les coûts varient généralement de 100$ à 300$ selon la taille du nid, l\'emplacement et l\'accessibilité.' } }
    ]
  },
  'spiders': {
    slug: 'spiders',
    title: { en: 'Spiders', fr: 'Araignées' },
    description: {
      en: 'Complete guide on spiders in Montreal. Learn to identify common spiders, their behavior, and when professional treatment is needed.',
      fr: "Guide complet sur les araignées à Montréal. Apprenez à identifier les araignées communes et quand un traitement professionnel est nécessaire."
    },
    heroLead: {
      en: 'Spiders are eight-legged arachnids that often enter homes seeking prey. Most species in Montreal are harmless but can cause concern.',
      fr: "Les araignées sont des arachnides à huit pattes qui entrent souvent dans les maisons à la recherche de proies. La plupart des espèces à Montréal sont inoffensives."
    },
    image: '/images/spiders.jpeg',
    imageAlt: { en: 'House spider', fr: 'Araignée domestique' },
    imageCaption: { en: 'House spider - common in Montreal homes', fr: 'Araignée domestique - commune dans les maisons de Montréal' },
    metaKeywords: 'spiders Montreal, spider control, house spiders, spider removal',
    identification: [
      { en: '8 legs, 2 body segments (cephalothorax and abdomen)', fr: '8 pattes, 2 segments corporels (céphalothorax et abdomen)' },
      { en: 'Size varies: 1-25mm body length', fr: 'Taille variable: 1-25mm de longueur de corps' },
      { en: 'Most have 8 eyes in various patterns', fr: 'La plupart ont 8 yeux dans divers motifs' },
      { en: 'Silk-producing spinnerets', fr: 'Filières productrices de soie' },
      { en: 'Colors: brown, gray, black, or patterned', fr: 'Couleurs: brun, gris, noir ou à motifs' },
      { en: 'No wings or antennae', fr: 'Pas d\'ailes ni d\'antennes' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 100-3000 eggs in silk sac.', fr: 'La femelle pond 100-3000 œufs dans un sac de soie.' } },
      { icon: '🕷️', title: { en: 'Spiderlings', fr: 'Araignées Juvéniles' }, description: { en: 'Molt 5-10 times before adulthood.', fr: 'Muent 5-10 fois avant l\'âge adulte.' } },
      { icon: '🕸️', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 1-2 years depending on species.', fr: 'Vivent 1-2 ans selon l\'espèce.' } },
      { icon: '🔄', title: { en: 'Reproduction', fr: 'Reproduction' }, description: { en: 'Males often die after mating.', fr: 'Les mâles meurent souvent après l\'accouplement.' } }
    ],
    behaviour: [
      { en: 'Most are nocturnal hunters', fr: 'La plupart sont des chasseurs nocturnes' },
      { en: 'Build webs to catch prey (most species)', fr: 'Construisent des toiles pour attraper des proies (la plupart des espèces)' },
      { en: 'Prefer dark, undisturbed areas', fr: 'Préfèrent les zones sombres et tranquilles' },
      { en: 'Enter homes in fall seeking warmth', fr: 'Entrent dans les maisons en automne pour la chaleur' },
      { en: 'Beneficial - eat many pest insects', fr: 'Bénéfiques - mangent de nombreux insectes nuisibles' }
    ],
    healthRisks: [
      { en: 'Most Montreal spiders are harmless', fr: 'La plupart des araignées de Montréal sont inoffensives' },
      { en: 'Bites rare and usually mild', fr: 'Les morsures sont rares et généralement légères' },
      { en: 'May cause fear and anxiety (arachnophobia)', fr: 'Peuvent causer peur et anxiété (arachnophobie)' },
      { en: 'No dangerous species native to Quebec', fr: 'Aucune espèce dangereuse native du Québec' },
      { en: 'Webs can be unsightly nuisance', fr: 'Les toiles peuvent être une nuisance inesthétique' }
    ],
    hideSpots: [
      { en: 'Corners of ceilings and walls', fr: 'Coins des plafonds et murs' },
      { en: 'Behind furniture and in closets', fr: 'Derrière les meubles et dans les placards' },
      { en: 'In basements and attics', fr: 'Dans les sous-sols et greniers' },
      { en: 'Around windows and door frames', fr: 'Autour des fenêtres et cadres de portes' },
      { en: 'In garages and sheds', fr: 'Dans les garages et remises' },
      { en: 'Under eaves and in gutters', fr: 'Sous les avant-toits et dans les gouttières' }
    ],
    signs: [
      { icon: '🕸️', title: { en: 'Webs', fr: 'Toiles' }, description: { en: 'Spider webs in corners and hidden areas', fr: 'Toiles d\'araignée dans les coins et zones cachées' } },
      { icon: '🕷️', title: { en: 'Sightings', fr: 'Observations' }, description: { en: 'Seeing spiders, especially at night', fr: 'Voir des araignées, surtout la nuit' } },
      { icon: '🥚', title: { en: 'Egg Sacs', fr: 'Sacs d\'Œufs' }, description: { en: 'Silky white or tan egg sacs', fr: 'Sacs d\'œufs soyeux blancs ou beiges' } },
      { icon: '🪲', title: { en: 'Prey Insects', fr: 'Insectes Proies' }, description: { en: 'Many insects attract spiders', fr: 'Beaucoup d\'insectes attirent les araignées' } },
      { icon: '🐚', title: { en: 'Shed Skins', fr: 'Peaux Mues' }, description: { en: 'Exoskeletons from molting spiders', fr: 'Exosquelettes des araignées qui muent' } },
      { icon: '🏚️', title: { en: 'Clutter', fr: 'Encombrement' }, description: { en: 'Undisturbed areas attract spiders', fr: 'Les zones non dérangées attirent les araignées' } }
    ],
    prevention: [
      { icon: '🧹', title: { en: 'Regular Cleaning', fr: 'Nettoyage Régulier' }, description: { en: 'Vacuum corners, remove webs regularly', fr: 'Passez l\'aspirateur dans les coins, enlevez les toiles' } },
      { icon: '📦', title: { en: 'Reduce Clutter', fr: 'Réduire l\'Encombrement' }, description: { en: 'Eliminate hiding spots and storage piles', fr: 'Éliminez les cachettes et piles de rangement' } },
      { icon: '🪲', title: { en: 'Control Insects', fr: 'Contrôler les Insectes' }, description: { en: 'Reduce prey insects to discourage spiders', fr: 'Réduisez les insectes proies pour décourager les araignées' } },
      { icon: '💡', title: { en: 'Outdoor Lighting', fr: 'Éclairage Extérieur' }, description: { en: 'Use yellow bulbs that attract fewer insects', fr: 'Utilisez des ampoules jaunes qui attirent moins d\'insectes' } },
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: 'Sceller les Points d\'Entrée' }, description: { en: 'Caulk gaps around windows and doors', fr: 'Calfeutrez les trous autour des fenêtres et portes' } },
      { icon: '🌿', title: { en: 'Trim Vegetation', fr: 'Tailler la Végétation' }, description: { en: 'Keep plants away from building', fr: 'Gardez les plantes loin du bâtiment' } }
    ],
    faqs: [
      { question: { en: 'Are spiders in Montreal dangerous?', fr: 'Les araignées à Montréal sont-elles dangereuses?' }, answer: { en: 'No dangerous spider species are native to Quebec. Most house spiders are harmless and rarely bite. If bitten, reactions are usually mild.', fr: 'Aucune espèce d\'araignée dangereuse n\'est native du Québec. La plupart des araignées domestiques sont inoffensives.' } },
      { question: { en: 'Why do I have so many spiders?', fr: 'Pourquoi ai-je tant d\'araignées?' }, answer: { en: 'Spiders follow their food source - insects. Reducing insect populations and eliminating hiding spots will decrease spider numbers.', fr: 'Les araignées suivent leur source de nourriture - les insectes. Réduire les populations d\'insectes diminuera le nombre d\'araignées.' } },
      { question: { en: 'Should I kill spiders in my home?', fr: 'Devrais-je tuer les araignées dans ma maison?' }, answer: { en: 'Spiders are beneficial as they eat pest insects. Consider relocating them outdoors unless infestations are severe.', fr: 'Les araignées sont bénéfiques car elles mangent des insectes nuisibles. Envisagez de les déplacer à l\'extérieur.' } },
      { question: { en: 'When do spiders come inside?', fr: 'Quand les araignées entrent-elles à l\'intérieur?' }, answer: { en: 'Spiders are most likely to enter homes in fall when seeking warmth and in spring when looking for mates.', fr: 'Les araignées sont plus susceptibles d\'entrer dans les maisons en automne quand elles cherchent la chaleur.' } }
    ]
  },
  'fleas': {
    slug: 'fleas',
    title: { en: 'Fleas', fr: 'Puces' },
    description: {
      en: 'Complete guide on fleas in Montreal. Learn to identify fleas, their lifecycle, signs of infestation, and professional treatment options.',
      fr: "Guide complet sur les puces à Montréal. Apprenez à identifier les puces, leur cycle de vie et les options de traitement professionnel."
    },
    heroLead: {
      en: 'Fleas are tiny, jumping parasites that feed on blood from pets and humans. They can quickly infest homes and cause itchy bites.',
      fr: 'Les puces sont de minuscules parasites sauteurs qui se nourrissent du sang des animaux et des humains. Elles peuvent rapidement infester les maisons.'
    },
    image: '/images/fleas.jpeg',
    imageAlt: { en: 'Flea close-up', fr: 'Puce vue de près' },
    imageCaption: { en: 'Cat flea (Ctenocephalides felis) - most common species in homes', fr: 'Puce du chat (Ctenocephalides felis) - espèce la plus commune dans les maisons' },
    metaKeywords: 'fleas Montreal, flea extermination, flea treatment, flea control',
    identification: [
      { en: 'Tiny, dark brown or reddish-brown', fr: 'Minuscules, brun foncé ou brun-rougeâtre' },
      { en: 'Size: 1.5-3mm (sesame seed size)', fr: 'Taille: 1,5-3mm (taille d\'une graine de sésame)' },
      { en: 'Laterally flattened body', fr: 'Corps aplati latéralement' },
      { en: 'Powerful jumping legs', fr: 'Pattes sauteuses puissantes' },
      { en: 'No wings', fr: 'Pas d\'ailes' },
      { en: 'Can jump 150 times body length', fr: 'Peuvent sauter 150 fois leur longueur' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 20-50 eggs per day. Fall off host into carpet, bedding.', fr: 'La femelle pond 20-50 œufs par jour. Tombent dans le tapis, la literie.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Feed on organic debris for 5-11 days. Avoid light.', fr: 'Se nourrissent de débris organiques pendant 5-11 jours. Évitent la lumière.' } },
      { icon: '🐚', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: 'Can remain dormant for months waiting for host vibrations.', fr: 'Peuvent rester dormantes des mois en attendant les vibrations d\'un hôte.' } },
      { icon: '🦟', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 2-3 months. Start feeding within hours of finding host.', fr: 'Vivent 2-3 mois. Commencent à se nourrir en quelques heures.' } }
    ],
    behaviour: [
      { en: 'Blood-feeding parasites', fr: 'Parasites se nourrissant de sang' },
      { en: 'Jump onto hosts for feeding', fr: 'Sautent sur les hôtes pour se nourrir' },
      { en: 'Prefer pets but will bite humans', fr: 'Préfèrent les animaux mais mordent les humains' },
      { en: 'Eggs fall into environment, not on host', fr: 'Les œufs tombent dans l\'environnement, pas sur l\'hôte' },
      { en: 'Pupae can survive for months', fr: 'Les pupes peuvent survivre des mois' }
    ],
    healthRisks: [
      { en: 'Itchy, uncomfortable bites', fr: 'Piqûres qui démangent et inconfortables' },
      { en: 'Allergic reactions (flea allergy dermatitis)', fr: 'Réactions allergiques (dermatite allergique aux puces)' },
      { en: 'Can transmit tapeworms', fr: 'Peuvent transmettre des vers solitaires' },
      { en: 'Murine typhus (rare)', fr: 'Typhus murin (rare)' },
      { en: 'Anemia in pets with severe infestations', fr: 'Anémie chez les animaux avec infestations graves' }
    ],
    hideSpots: [
      { en: 'Carpets and rugs', fr: 'Tapis et moquettes' },
      { en: 'Pet bedding and furniture', fr: 'Literie d\'animaux et meubles' },
      { en: 'Upholstered furniture', fr: 'Meubles rembourrés' },
      { en: 'Cracks in hardwood floors', fr: 'Fissures dans les planchers de bois' },
      { en: 'Baseboards and floor edges', fr: 'Plinthes et bords de plancher' },
      { en: 'Under furniture and appliances', fr: 'Sous les meubles et appareils' }
    ],
    signs: [
      { icon: '🩸', title: { en: 'Bites', fr: 'Piqûres' }, description: { en: 'Itchy red bumps, often around ankles', fr: 'Bosses rouges qui démangent, souvent autour des chevilles' } },
      { icon: '🐕', title: { en: 'Pet Scratching', fr: 'Grattage des Animaux' }, description: { en: 'Excessive scratching and biting at fur', fr: 'Grattage et mordillement excessifs de la fourrure' } },
      { icon: '💩', title: { en: 'Flea Dirt', fr: 'Excréments de Puces' }, description: { en: 'Black specks (digested blood) in pet fur', fr: 'Taches noires (sang digéré) dans la fourrure' } },
      { icon: '👀', title: { en: 'Visible Fleas', fr: 'Puces Visibles' }, description: { en: 'Small jumping insects on pets or carpet', fr: 'Petits insectes sauteurs sur les animaux ou le tapis' } },
      { icon: '🪺', title: { en: 'Eggs & Larvae', fr: 'Œufs et Larves' }, description: { en: 'White specks in carpets and bedding', fr: 'Petites taches blanches dans les tapis et literie' } },
      { icon: '📉', title: { en: 'Pet Hair Loss', fr: 'Perte de Poils' }, description: { en: 'Patches of hair loss from scratching', fr: 'Zones de perte de poils dues au grattage' } }
    ],
    prevention: [
      { icon: '🐕', title: { en: 'Treat Pets', fr: 'Traiter les Animaux' }, description: { en: 'Use veterinarian-recommended flea prevention', fr: 'Utilisez une prévention contre les puces recommandée par le vétérinaire' } },
      { icon: '🧹', title: { en: 'Vacuum Regularly', fr: 'Aspirer Régulièrement' }, description: { en: 'Vacuum carpets, furniture, pet areas frequently', fr: 'Aspirez fréquemment les tapis, meubles, zones d\'animaux' } },
      { icon: '🧺', title: { en: 'Wash Bedding', fr: 'Laver la Literie' }, description: { en: 'Wash pet and human bedding in hot water', fr: 'Lavez la literie des animaux et humains à l\'eau chaude' } },
      { icon: '🌿', title: { en: 'Yard Maintenance', fr: 'Entretien de la Cour' }, description: { en: 'Keep grass short, remove debris', fr: 'Gardez l\'herbe courte, enlevez les débris' } },
      { icon: '🦔', title: { en: 'Wildlife Control', fr: 'Contrôle de la Faune' }, description: { en: 'Prevent wildlife that carry fleas', fr: 'Prévenez la faune qui transporte des puces' } },
      { icon: '🏠', title: { en: 'Regular Grooming', fr: 'Toilettage Régulier' }, description: { en: 'Groom pets and check for fleas', fr: 'Toilettez les animaux et vérifiez les puces' } }
    ],
    faqs: [
      { question: { en: 'Can fleas live without pets?', fr: 'Les puces peuvent-elles vivre sans animaux?' }, answer: { en: 'Yes, fleas can survive on human blood and pupae can remain dormant for months. Infestations can persist even after pets are removed.', fr: 'Oui, les puces peuvent survivre avec du sang humain et les pupes peuvent rester dormantes des mois.' } },
      { question: { en: 'How long does flea treatment take?', fr: 'Combien de temps dure le traitement contre les puces?' }, answer: { en: 'Complete elimination typically takes 2-4 weeks due to the flea lifecycle. Multiple treatments may be needed.', fr: 'L\'élimination complète prend généralement 2-4 semaines en raison du cycle de vie des puces.' } },
      { question: { en: 'Why do I still have fleas after treatment?', fr: 'Pourquoi ai-je encore des puces après le traitement?' }, answer: { en: 'Pupae are resistant to treatments. New adults may emerge for weeks. Continued treatment and vacuuming are essential.', fr: 'Les pupes sont résistantes aux traitements. De nouveaux adultes peuvent émerger pendant des semaines.' } },
      { question: { en: 'Can I treat fleas myself?', fr: 'Puis-je traiter les puces moi-même?' }, answer: { en: 'Minor infestations may respond to thorough cleaning and OTC products, but professional treatment is usually needed for complete elimination.', fr: 'Les infestations mineures peuvent répondre au nettoyage, mais un traitement professionnel est généralement nécessaire.' } }
    ]
  },
  'termites': {
    slug: 'termites',
    title: { en: 'Termites', fr: 'Termites' },
    description: {
      en: 'Complete guide on termites in Montreal. Learn to identify termites, their colony structure, signs of infestation, and professional treatment options for structural damage prevention.',
      fr: "Guide complet sur les termites à Montréal. Apprenez à identifier les termites, leur structure de colonie, les signes d'infestation et les options de traitement professionnel pour prévenir les dommages structurels."
    },
    heroLead: {
      en: 'Termites are wood-destroying insects that cause billions of dollars in structural damage annually. Often called "silent destroyers," they can compromise the integrity of your home before you even notice their presence.',
      fr: "Les termites sont des insectes destructeurs de bois qui causent des milliards de dollars de dommages structurels chaque année. Souvent appelés « destructeurs silencieux », ils peuvent compromettre l'intégrité de votre maison avant même que vous ne remarquiez leur présence."
    },
    image: '/images/termites.jpg',
    imageAlt: { en: 'Termite workers on damaged wood', fr: 'Termites ouvriers sur du bois endommagé' },
    imageCaption: { en: 'Subterranean termite workers - approximately 3-4mm', fr: 'Termites souterrains ouvriers - environ 3-4mm' },
    metaKeywords: 'termites Montreal, termite extermination, termite damage, wood destroying insects, termite inspection',
    identification: [
      { en: 'Pale, soft-bodied insects (3-10mm)', fr: 'Insectes au corps mou et pâle (3-10mm)' },
      { en: 'Workers are creamy white, blind', fr: 'Les ouvriers sont blanc crème, aveugles' },
      { en: 'Soldiers have large, dark heads with mandibles', fr: 'Les soldats ont de grandes têtes foncées avec des mandibules' },
      { en: 'Swarmers (alates) are dark with wings', fr: 'Les essaimeurs (ailés) sont foncés avec des ailes' },
      { en: 'Straight antennae (vs. elbowed in ants)', fr: 'Antennes droites (vs. coudées chez les fourmis)' },
      { en: 'Thick waist (vs. pinched waist in ants)', fr: 'Taille épaisse (vs. taille pincée chez les fourmis)' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Queen lays thousands of eggs. Hatch in 2-4 weeks into nymphs.', fr: 'La reine pond des milliers d\'œufs. Éclosion en 2-4 semaines en nymphes.' } },
      { icon: '🐛', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: 'Develop into workers, soldiers, or reproductives based on colony needs.', fr: 'Se développent en ouvriers, soldats ou reproducteurs selon les besoins de la colonie.' } },
      { icon: '🏗️', title: { en: 'Castes', fr: 'Castes' }, description: { en: 'Workers feed colony, soldiers defend, reproductives start new colonies.', fr: 'Les ouvriers nourrissent la colonie, les soldats défendent, les reproducteurs fondent de nouvelles colonies.' } },
      { icon: '👑', title: { en: 'Queen', fr: 'Reine' }, description: { en: 'Lives 15-25 years. Mature colony: 60,000-1 million termites.', fr: 'Vit 15-25 ans. Colonie mature: 60 000 à 1 million de termites.' } }
    ],
    behaviour: [
      { en: 'Live in underground colonies connected to food sources', fr: 'Vivent dans des colonies souterraines connectées aux sources de nourriture' },
      { en: 'Build mud tubes for protected travel above ground', fr: 'Construisent des tubes de boue pour voyager protégés hors sol' },
      { en: 'Feed on cellulose in wood, paper, cardboard', fr: 'Se nourrissent de cellulose dans le bois, papier, carton' },
      { en: 'Work 24/7, never sleep', fr: 'Travaillent 24h/24, ne dorment jamais' },
      { en: 'Swarm in spring to establish new colonies', fr: 'Essaiment au printemps pour établir de nouvelles colonies' }
    ],
    healthRisks: [
      { en: 'No direct health risks to humans', fr: 'Pas de risques directs pour la santé humaine' },
      { en: 'Structural damage can create safety hazards', fr: 'Les dommages structurels peuvent créer des risques de sécurité' },
      { en: 'Mold growth in damaged wood areas', fr: 'Croissance de moisissures dans les zones de bois endommagées' },
      { en: 'Stress and anxiety from property damage', fr: 'Stress et anxiété dus aux dommages matériels' },
      { en: 'Financial burden from repairs', fr: 'Fardeau financier des réparations' }
    ],
    hideSpots: [
      { en: 'Foundation walls and floor joists', fr: 'Murs de fondation et solives de plancher' },
      { en: 'Wooden support beams and posts', fr: 'Poutres et poteaux de support en bois' },
      { en: 'Behind walls near plumbing', fr: 'Derrière les murs près de la plomberie' },
      { en: 'Around window and door frames', fr: 'Autour des cadres de fenêtres et portes' },
      { en: 'In crawl spaces and basements', fr: 'Dans les vides sanitaires et sous-sols' },
      { en: 'Wooden decks and porches', fr: 'Terrasses et porches en bois' }
    ],
    signs: [
      { icon: '🪵', title: { en: 'Damaged Wood', fr: 'Bois Endommagé' }, description: { en: 'Hollow-sounding wood, maze-like patterns inside', fr: 'Bois qui sonne creux, motifs en labyrinthe à l\'intérieur' } },
      { icon: '🏗️', title: { en: 'Mud Tubes', fr: 'Tubes de Boue' }, description: { en: 'Pencil-width tubes on foundation walls', fr: 'Tubes de la largeur d\'un crayon sur les murs de fondation' } },
      { icon: '🪰', title: { en: 'Swarmers', fr: 'Essaimeurs' }, description: { en: 'Winged termites or discarded wings near windows', fr: 'Termites ailés ou ailes abandonnées près des fenêtres' } },
      { icon: '💩', title: { en: 'Frass', fr: 'Excréments' }, description: { en: 'Wood-colored droppings (drywood termites)', fr: 'Excréments couleur bois (termites de bois sec)' } },
      { icon: '🔊', title: { en: 'Sounds', fr: 'Sons' }, description: { en: 'Clicking or rustling sounds in walls', fr: 'Cliquetis ou bruissements dans les murs' } },
      { icon: '📐', title: { en: 'Warping', fr: 'Déformation' }, description: { en: 'Doors and windows that stick or warp', fr: 'Portes et fenêtres qui coincent ou se déforment' } }
    ],
    prevention: [
      { icon: '💧', title: { en: 'Moisture Control', fr: 'Contrôle de l\'Humidité' }, description: { en: 'Fix leaks, ensure proper drainage away from foundation', fr: 'Réparez les fuites, assurez un drainage adéquat loin de la fondation' } },
      { icon: '🪵', title: { en: 'Wood-to-Soil Contact', fr: 'Contact Bois-Sol' }, description: { en: 'Maintain 6-inch gap between wood and soil', fr: 'Maintenez un espace de 15 cm entre le bois et le sol' } },
      { icon: '🌬️', title: { en: 'Ventilation', fr: 'Ventilation' }, description: { en: 'Ensure crawl spaces and basements are well-ventilated', fr: 'Assurez que les vides sanitaires et sous-sols sont bien ventilés' } },
      { icon: '🔍', title: { en: 'Annual Inspections', fr: 'Inspections Annuelles' }, description: { en: 'Professional termite inspections yearly', fr: 'Inspections professionnelles annuelles contre les termites' } },
      { icon: '🪨', title: { en: 'Barrier Treatments', fr: 'Traitements Barrières' }, description: { en: 'Consider preventive soil treatments around foundation', fr: 'Envisagez des traitements préventifs du sol autour de la fondation' } },
      { icon: '📦', title: { en: 'Storage', fr: 'Entreposage' }, description: { en: 'Keep firewood and lumber away from home', fr: 'Gardez le bois de chauffage et le bois d\'œuvre loin de la maison' } }
    ],
    faqs: [
      { question: { en: 'How do I know if I have termites or ants?', fr: 'Comment savoir si j\'ai des termites ou des fourmis?' }, answer: { en: 'Termites have straight antennae, thick waists, and equal-length wings. Ants have elbowed antennae, pinched waists, and unequal wing lengths. Termites are pale; ants are darker.', fr: 'Les termites ont des antennes droites, des tailles épaisses et des ailes de longueur égale. Les fourmis ont des antennes coudées, des tailles pincées et des ailes de longueurs inégales.' } },
      { question: { en: 'How much damage can termites cause?', fr: 'Combien de dommages les termites peuvent-ils causer?' }, answer: { en: 'A mature colony can eat about 1 pound of wood per day. Over time, this can cause thousands of dollars in structural damage, often before homeowners notice.', fr: 'Une colonie mature peut manger environ 450g de bois par jour. Avec le temps, cela peut causer des milliers de dollars de dommages structurels.' } },
      { question: { en: 'How much does termite treatment cost?', fr: 'Combien coûte le traitement contre les termites?' }, answer: { en: 'Treatment costs typically range from $500-$2,500 depending on infestation size and treatment method. Extensive damage may require additional repair costs.', fr: 'Les coûts de traitement varient généralement de 500$ à 2500$ selon la taille de l\'infestation et la méthode de traitement.' } },
      { question: { en: 'Are termites common in Montreal?', fr: 'Les termites sont-ils communs à Montréal?' }, answer: { en: 'While less common than in warmer climates, subterranean termites do exist in Quebec. Climate change is expanding their range northward. Regular inspections are recommended.', fr: 'Bien que moins communs que dans les climats plus chauds, les termites souterrains existent au Québec. Le changement climatique étend leur territoire vers le nord.' } }
    ]
  },
  'mosquitoes': {
    slug: 'mosquitoes',
    title: { en: 'Mosquitoes', fr: 'Moustiques' },
    description: {
      en: 'Complete guide on mosquitoes in Montreal. Learn about mosquito species, breeding habits, disease risks, and professional control solutions for your property.',
      fr: "Guide complet sur les moustiques à Montréal. Découvrez les espèces de moustiques, leurs habitudes de reproduction, les risques de maladies et les solutions de contrôle professionnelles."
    },
    heroLead: {
      en: 'Mosquitoes are blood-feeding insects that can turn your backyard into an uncomfortable zone during summer months. Beyond the itchy bites, they can transmit serious diseases like West Nile virus.',
      fr: "Les moustiques sont des insectes se nourrissant de sang qui peuvent transformer votre cour en zone inconfortable pendant les mois d'été. Au-delà des piqûres qui démangent, ils peuvent transmettre des maladies graves comme le virus du Nil occidental."
    },
    image: '/images/mosquitoes.jpg',
    imageAlt: { en: 'Mosquito feeding on skin', fr: 'Moustique se nourrissant sur la peau' },
    imageCaption: { en: 'Common house mosquito (Culex pipiens) - 3-6mm', fr: 'Moustique domestique commun (Culex pipiens) - 3-6mm' },
    metaKeywords: 'mosquitoes Montreal, mosquito control, West Nile virus, mosquito extermination, mosquito prevention',
    identification: [
      { en: 'Slender body with long legs (3-6mm)', fr: 'Corps mince avec de longues pattes (3-6mm)' },
      { en: 'Long, needle-like proboscis for feeding', fr: 'Trompe longue en forme d\'aiguille pour se nourrir' },
      { en: 'One pair of wings with scales', fr: 'Une paire d\'ailes avec des écailles' },
      { en: 'Gray, brown, or black coloring', fr: 'Coloration grise, brune ou noire' },
      { en: 'Distinctive high-pitched buzzing sound', fr: 'Bourdonnement aigu distinctif' },
      { en: 'Females have feathery antennae', fr: 'Les femelles ont des antennes plumeuses' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Laid on water surface or damp areas. Hatch in 24-48 hours.', fr: 'Pondus sur la surface de l\'eau ou zones humides. Éclosent en 24-48 heures.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: '"Wigglers" live in water, feed on microorganisms. 7-10 days.', fr: '« Frétilleurs » vivent dans l\'eau, se nourrissent de micro-organismes. 7-10 jours.' } },
      { icon: '🫛', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: '"Tumblers" don\'t feed. Transform into adults in 2-3 days.', fr: '« Culbuteurs » ne se nourrissent pas. Se transforment en adultes en 2-3 jours.' } },
      { icon: '🦟', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Males live 1 week, females 2-3 weeks. Only females bite.', fr: 'Les mâles vivent 1 semaine, les femelles 2-3 semaines. Seules les femelles piquent.' } }
    ],
    behaviour: [
      { en: 'Females require blood meals for egg production', fr: 'Les femelles ont besoin de repas de sang pour la production d\'œufs' },
      { en: 'Most active at dawn and dusk', fr: 'Plus actifs à l\'aube et au crépuscule' },
      { en: 'Attracted by CO2, body heat, and sweat', fr: 'Attirés par le CO2, la chaleur corporelle et la sueur' },
      { en: 'Breed in any standing water (even bottle caps)', fr: 'Se reproduisent dans toute eau stagnante (même les bouchons de bouteille)' },
      { en: 'Can fly 1-3 miles from breeding sites', fr: 'Peuvent voler 1-5 km des sites de reproduction' }
    ],
    healthRisks: [
      { en: 'West Nile virus (present in Quebec)', fr: 'Virus du Nil occidental (présent au Québec)' },
      { en: 'Eastern Equine Encephalitis', fr: 'Encéphalite équine de l\'Est' },
      { en: 'Zika virus (travel-related risk)', fr: 'Virus Zika (risque lié aux voyages)' },
      { en: 'Allergic reactions to bites', fr: 'Réactions allergiques aux piqûres' },
      { en: 'Secondary skin infections from scratching', fr: 'Infections cutanées secondaires dues au grattage' }
    ],
    hideSpots: [
      { en: 'Standing water in containers, tires, gutters', fr: 'Eau stagnante dans les conteneurs, pneus, gouttières' },
      { en: 'Birdbaths and pet water dishes', fr: 'Bains d\'oiseaux et plats d\'eau pour animaux' },
      { en: 'Clogged rain gutters and downspouts', fr: 'Gouttières et descentes pluviales bouchées' },
      { en: 'Flower pot saucers and planters', fr: 'Soucoupes de pots de fleurs et jardinières' },
      { en: 'Pool covers and tarps that collect water', fr: 'Couvertures de piscine et bâches qui collectent l\'eau' },
      { en: 'Low areas in yards that hold water', fr: 'Zones basses dans les cours qui retiennent l\'eau' }
    ],
    signs: [
      { icon: '🦟', title: { en: 'Adult Mosquitoes', fr: 'Moustiques Adultes' }, description: { en: 'Seeing or hearing mosquitoes around your property', fr: 'Voir ou entendre des moustiques autour de votre propriété' } },
      { icon: '🩸', title: { en: 'Bites', fr: 'Piqûres' }, description: { en: 'Itchy, red welts especially on exposed skin', fr: 'Marques rouges qui démangent, surtout sur la peau exposée' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Wiggling larvae in standing water sources', fr: 'Larves frétillantes dans les sources d\'eau stagnante' } },
      { icon: '💧', title: { en: 'Breeding Sites', fr: 'Sites de Reproduction' }, description: { en: 'Standing water that has been present for days', fr: 'Eau stagnante présente depuis plusieurs jours' } },
      { icon: '🌅', title: { en: 'Peak Activity', fr: 'Activité de Pointe' }, description: { en: 'Increased activity at dawn and dusk', fr: 'Activité accrue à l\'aube et au crépuscule' } },
      { icon: '🔊', title: { en: 'Buzzing', fr: 'Bourdonnement' }, description: { en: 'High-pitched buzzing sound near ears', fr: 'Bourdonnement aigu près des oreilles' } }
    ],
    prevention: [
      { icon: '💧', title: { en: 'Eliminate Standing Water', fr: 'Éliminer l\'Eau Stagnante' }, description: { en: 'Empty containers, fix drainage, change birdbath water weekly', fr: 'Videz les conteneurs, réparez le drainage, changez l\'eau des bains d\'oiseaux' } },
      { icon: '🧹', title: { en: 'Clean Gutters', fr: 'Nettoyer les Gouttières' }, description: { en: 'Keep gutters clear to prevent water pooling', fr: 'Gardez les gouttières dégagées pour éviter l\'accumulation d\'eau' } },
      { icon: '🪟', title: { en: 'Screen Repairs', fr: 'Réparation des Moustiquaires' }, description: { en: 'Fix holes in window and door screens', fr: 'Réparez les trous dans les moustiquaires' } },
      { icon: '🌿', title: { en: 'Yard Maintenance', fr: 'Entretien de la Cour' }, description: { en: 'Trim vegetation, keep grass short', fr: 'Taillez la végétation, gardez l\'herbe courte' } },
      { icon: '💨', title: { en: 'Fans', fr: 'Ventilateurs' }, description: { en: 'Use outdoor fans - mosquitoes are weak fliers', fr: 'Utilisez des ventilateurs extérieurs - les moustiques volent mal' } },
      { icon: '🧴', title: { en: 'Repellents', fr: 'Répulsifs' }, description: { en: 'Use DEET or picaridin-based repellents outdoors', fr: 'Utilisez des répulsifs à base de DEET ou picaridine' } }
    ],
    faqs: [
      { question: { en: 'Why do mosquitoes bite some people more?', fr: 'Pourquoi les moustiques piquent-ils certaines personnes plus que d\'autres?' }, answer: { en: 'Mosquitoes are attracted to CO2, body heat, sweat, and certain blood types (Type O). Pregnant women and people who exercise also attract more mosquitoes.', fr: 'Les moustiques sont attirés par le CO2, la chaleur corporelle, la sueur et certains groupes sanguins (Type O). Les femmes enceintes et les personnes qui font de l\'exercice attirent aussi plus de moustiques.' } },
      { question: { en: 'Is West Nile virus a concern in Montreal?', fr: 'Le virus du Nil occidental est-il une préoccupation à Montréal?' }, answer: { en: 'Yes, West Nile virus is present in Quebec. Most infected people show no symptoms, but it can cause serious illness in some cases. Prevention is key.', fr: 'Oui, le virus du Nil occidental est présent au Québec. La plupart des personnes infectées ne présentent aucun symptôme, mais il peut causer des maladies graves dans certains cas.' } },
      { question: { en: 'How can I make my yard less attractive to mosquitoes?', fr: 'Comment rendre ma cour moins attrayante pour les moustiques?' }, answer: { en: 'Eliminate all standing water, trim vegetation, use fans outdoors, consider professional barrier treatments, and plant mosquito-repelling plants like citronella and lavender.', fr: 'Éliminez toute eau stagnante, taillez la végétation, utilisez des ventilateurs à l\'extérieur, envisagez des traitements barrières professionnels.' } },
      { question: { en: 'Do mosquito traps and zappers work?', fr: 'Les pièges et zappers à moustiques fonctionnent-ils?' }, answer: { en: 'Bug zappers attract and kill many insects but few mosquitoes. CO2 traps are more effective but work best as part of an integrated control program.', fr: 'Les zappers attirent et tuent de nombreux insectes mais peu de moustiques. Les pièges à CO2 sont plus efficaces mais fonctionnent mieux dans un programme de contrôle intégré.' } }
    ]
  },
  'silverfish': {
    slug: 'silverfish',
    title: { en: 'Silverfish', fr: 'Poissons d\'argent' },
    description: {
      en: 'Complete guide on silverfish in Montreal. Learn to identify silverfish, their habits, what attracts them to your home, and professional extermination solutions.',
      fr: "Guide complet sur les poissons d'argent à Montréal. Apprenez à identifier les poissons d'argent, leurs habitudes, ce qui les attire chez vous et les solutions d'extermination professionnelles."
    },
    heroLead: {
      en: 'Silverfish are primitive, wingless insects known for their fish-like movements and silvery scales. They thrive in damp, dark environments and can damage books, wallpaper, clothing, and stored foods.',
      fr: "Les poissons d'argent sont des insectes primitifs sans ailes connus pour leurs mouvements de poisson et leurs écailles argentées. Ils prospèrent dans les environnements sombres et humides et peuvent endommager les livres, le papier peint, les vêtements et les aliments stockés."
    },
    image: '/images/silverfish.jpeg',
    imageAlt: { en: 'Silverfish on paper', fr: 'Poisson d\'argent sur du papier' },
    imageCaption: { en: 'Common silverfish (Lepisma saccharina) - 12-19mm', fr: 'Poisson d\'argent commun (Lepisma saccharina) - 12-19mm' },
    metaKeywords: 'silverfish Montreal, silverfish extermination, silverfish control, silverfish damage, bathroom insects',
    identification: [
      { en: 'Elongated, teardrop-shaped body (12-19mm)', fr: 'Corps allongé en forme de goutte (12-19mm)' },
      { en: 'Silvery-gray metallic scales', fr: 'Écailles métalliques gris argenté' },
      { en: 'Three long tail-like appendages', fr: 'Trois longs appendices en forme de queue' },
      { en: 'Two long antennae', fr: 'Deux longues antennes' },
      { en: 'No wings, cannot fly', fr: 'Sans ailes, ne peut pas voler' },
      { en: 'Fish-like wiggling movement', fr: 'Mouvement ondulant comme un poisson' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 1-3 eggs daily in cracks and crevices. Hatch in 2-8 weeks.', fr: 'La femelle pond 1-3 œufs par jour dans les fissures. Éclosent en 2-8 semaines.' } },
      { icon: '🐛', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: 'Look like small adults. Molt continuously throughout life.', fr: 'Ressemblent aux adultes en miniature. Muent continuellement tout au long de leur vie.' } },
      { icon: '🦎', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 2-8 years. Continue molting 50+ times as adults.', fr: 'Vivent 2-8 ans. Continuent de muer plus de 50 fois à l\'âge adulte.' } },
      { icon: '🔄', title: { en: 'Reproduction', fr: 'Reproduction' }, description: { en: 'Can survive months without food. Populations grow slowly.', fr: 'Peuvent survivre des mois sans nourriture. Les populations croissent lentement.' } }
    ],
    behaviour: [
      { en: 'Nocturnal - hide during the day', fr: 'Nocturnes - se cachent pendant la journée' },
      { en: 'Prefer humidity above 75%', fr: 'Préfèrent une humidité supérieure à 75%' },
      { en: 'Feed on starches, sugars, cellulose', fr: 'Se nourrissent d\'amidons, sucres, cellulose' },
      { en: 'Can survive months without food', fr: 'Peuvent survivre des mois sans nourriture' },
      { en: 'Move quickly when disturbed', fr: 'Se déplacent rapidement lorsqu\'ils sont dérangés' }
    ],
    healthRisks: [
      { en: 'No direct health risks - don\'t bite or sting', fr: 'Pas de risques directs pour la santé - ne mordent ni ne piquent' },
      { en: 'May trigger allergies in sensitive individuals', fr: 'Peuvent déclencher des allergies chez les personnes sensibles' },
      { en: 'Can contaminate food products', fr: 'Peuvent contaminer les produits alimentaires' },
      { en: 'Damage to valuable books and documents', fr: 'Dommages aux livres et documents précieux' },
      { en: 'Staining on fabrics and papers', fr: 'Taches sur les tissus et papiers' }
    ],
    hideSpots: [
      { en: 'Bathrooms (especially under sinks)', fr: 'Salles de bains (surtout sous les éviers)' },
      { en: 'Basements and laundry rooms', fr: 'Sous-sols et buanderies' },
      { en: 'Kitchen cabinets and pantries', fr: 'Armoires de cuisine et garde-manger' },
      { en: 'Behind wallpaper and baseboards', fr: 'Derrière le papier peint et les plinthes' },
      { en: 'In stored boxes and old books', fr: 'Dans les boîtes stockées et vieux livres' },
      { en: 'Attic insulation', fr: 'Isolation du grenier' }
    ],
    signs: [
      { icon: '👀', title: { en: 'Live Insects', fr: 'Insectes Vivants' }, description: { en: 'Seeing silverfish, especially at night', fr: 'Voir des poissons d\'argent, surtout la nuit' } },
      { icon: '📄', title: { en: 'Paper Damage', fr: 'Dommages au Papier' }, description: { en: 'Irregular holes and notches in books, wallpaper', fr: 'Trous irréguliers et encoches dans les livres, papier peint' } },
      { icon: '👕', title: { en: 'Fabric Damage', fr: 'Dommages aux Tissus' }, description: { en: 'Yellow stains or holes in clothing', fr: 'Taches jaunes ou trous dans les vêtements' } },
      { icon: '💩', title: { en: 'Droppings', fr: 'Excréments' }, description: { en: 'Tiny black pepper-like droppings', fr: 'Minuscules excréments comme du poivre noir' } },
      { icon: '🐚', title: { en: 'Shed Skins', fr: 'Peaux Mues' }, description: { en: 'Translucent molted skins in hiding areas', fr: 'Peaux muées translucides dans les cachettes' } },
      { icon: '🟡', title: { en: 'Yellow Stains', fr: 'Taches Jaunes' }, description: { en: 'Yellowish residue on fabric and paper', fr: 'Résidu jaunâtre sur les tissus et papiers' } }
    ],
    prevention: [
      { icon: '💨', title: { en: 'Reduce Humidity', fr: 'Réduire l\'Humidité' }, description: { en: 'Use dehumidifiers, fix leaks, improve ventilation', fr: 'Utilisez des déshumidificateurs, réparez les fuites, améliorez la ventilation' } },
      { icon: '📦', title: { en: 'Proper Storage', fr: 'Entreposage Approprié' }, description: { en: 'Store books and clothes in sealed containers', fr: 'Rangez les livres et vêtements dans des contenants hermétiques' } },
      { icon: '🧹', title: { en: 'Regular Cleaning', fr: 'Nettoyage Régulier' }, description: { en: 'Vacuum regularly, especially in dark corners', fr: 'Passez l\'aspirateur régulièrement, surtout dans les coins sombres' } },
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: 'Sceller les Points d\'Entrée' }, description: { en: 'Caulk cracks around pipes, baseboards, windows', fr: 'Calfeutrez les fissures autour des tuyaux, plinthes, fenêtres' } },
      { icon: '🍞', title: { en: 'Food Storage', fr: 'Stockage Alimentaire' }, description: { en: 'Keep dry goods in airtight containers', fr: 'Gardez les aliments secs dans des contenants hermétiques' } },
      { icon: '📰', title: { en: 'Reduce Clutter', fr: 'Réduire l\'Encombrement' }, description: { en: 'Remove old newspapers, magazines, cardboard boxes', fr: 'Enlevez les vieux journaux, magazines, boîtes en carton' } }
    ],
    faqs: [
      { question: { en: 'Are silverfish harmful?', fr: 'Les poissons d\'argent sont-ils nuisibles?' }, answer: { en: 'Silverfish don\'t bite, sting, or transmit diseases. However, they can cause significant damage to books, documents, wallpaper, clothing, and stored foods.', fr: 'Les poissons d\'argent ne mordent pas, ne piquent pas et ne transmettent pas de maladies. Cependant, ils peuvent causer des dommages importants aux livres, documents, papier peint, vêtements et aliments.' } },
      { question: { en: 'Why do I have silverfish in my bathroom?', fr: 'Pourquoi ai-je des poissons d\'argent dans ma salle de bain?' }, answer: { en: 'Silverfish thrive in humid environments. Bathrooms provide moisture, warmth, and food sources like paper and soap residue. Improving ventilation helps deter them.', fr: 'Les poissons d\'argent prospèrent dans les environnements humides. Les salles de bains offrent humidité, chaleur et sources de nourriture comme le papier et les résidus de savon.' } },
      { question: { en: 'How do I get rid of silverfish permanently?', fr: 'Comment me débarrasser des poissons d\'argent définitivement?' }, answer: { en: 'Reduce humidity below 50%, seal entry points, remove food sources, and use professional treatments. Because they live 2-8 years, persistent treatment is needed.', fr: 'Réduisez l\'humidité sous 50%, scellez les points d\'entrée, éliminez les sources de nourriture et utilisez des traitements professionnels. Parce qu\'ils vivent 2-8 ans, un traitement persistant est nécessaire.' } },
      { question: { en: 'Do silverfish mean my house is dirty?', fr: 'Les poissons d\'argent signifient-ils que ma maison est sale?' }, answer: { en: 'Not necessarily. Silverfish are attracted to humidity and food sources like paper and starches. Even clean homes can have silverfish if moisture levels are high.', fr: 'Pas nécessairement. Les poissons d\'argent sont attirés par l\'humidité et les sources de nourriture comme le papier et les amidons. Même les maisons propres peuvent avoir des poissons d\'argent.' } }
    ]
  },
  'centipedes': {
    slug: 'centipedes',
    title: { en: 'Centipedes', fr: 'Centipèdes' },
    description: {
      en: 'Complete guide on centipedes in Montreal. Learn to identify house centipedes, their behavior, why they enter homes, and professional control options.',
      fr: "Guide complet sur les centipèdes à Montréal. Apprenez à identifier les scutigères, leur comportement, pourquoi ils entrent dans les maisons et les options de contrôle professionnel."
    },
    heroLead: {
      en: 'House centipedes are fast-moving, multi-legged predators that often startle homeowners. While unsettling in appearance, they actually help control other pest populations by feeding on insects and spiders.',
      fr: "Les scutigères sont des prédateurs rapides à plusieurs pattes qui surprennent souvent les propriétaires. Bien qu'ils aient une apparence inquiétante, ils aident en fait à contrôler les populations d'autres nuisibles en se nourrissant d'insectes et d'araignées."
    },
    image: '/images/centipedes.jpeg',
    imageAlt: { en: 'House centipede on wall', fr: 'Scutigère sur un mur' },
    imageCaption: { en: 'House centipede (Scutigera coleoptrata) - 25-35mm', fr: 'Scutigère (Scutigera coleoptrata) - 25-35mm' },
    metaKeywords: 'centipedes Montreal, house centipede, centipede control, centipede extermination, many-legged insects',
    identification: [
      { en: 'Elongated, flattened body (25-35mm)', fr: 'Corps allongé et aplati (25-35mm)' },
      { en: '15 pairs of long, banded legs', fr: '15 paires de longues pattes striées' },
      { en: 'Yellowish-gray with dark stripes', fr: 'Gris jaunâtre avec des rayures foncées' },
      { en: 'Last pair of legs longer than body', fr: 'Dernière paire de pattes plus longue que le corps' },
      { en: 'Long, sensitive antennae', fr: 'Longues antennes sensibles' },
      { en: 'Move extremely fast', fr: 'Se déplacent extrêmement vite' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 35-150 eggs in soil. Guards them until hatching.', fr: 'La femelle pond 35-150 œufs dans le sol. Les garde jusqu\'à l\'éclosion.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Hatch with only 4 pairs of legs. Gain more with each molt.', fr: 'Éclosent avec seulement 4 paires de pattes. En gagnent à chaque mue.' } },
      { icon: '🦎', title: { en: 'Juveniles', fr: 'Juvéniles' }, description: { en: 'Molt 5-6 times, gaining legs each time until 15 pairs.', fr: 'Muent 5-6 fois, gagnant des pattes à chaque fois jusqu\'à 15 paires.' } },
      { icon: '🔄', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 3-7 years. Females reproduce multiple times.', fr: 'Vivent 3-7 ans. Les femelles se reproduisent plusieurs fois.' } }
    ],
    behaviour: [
      { en: 'Nocturnal hunters - hide during the day', fr: 'Chasseurs nocturnes - se cachent pendant la journée' },
      { en: 'Extremely fast runners (1.3 feet per second)', fr: 'Coureurs extrêmement rapides (40 cm par seconde)' },
      { en: 'Hunt and eat other insects and spiders', fr: 'Chassent et mangent d\'autres insectes et araignées' },
      { en: 'Prefer cool, damp environments', fr: 'Préfèrent les environnements frais et humides' },
      { en: 'Can live several years', fr: 'Peuvent vivre plusieurs années' }
    ],
    healthRisks: [
      { en: 'Can bite if handled, but rare', fr: 'Peuvent mordre si manipulés, mais rare' },
      { en: 'Bites cause mild, localized pain', fr: 'Les morsures causent une douleur légère et localisée' },
      { en: 'Not venomous enough to harm humans', fr: 'Pas assez venimeux pour nuire aux humains' },
      { en: 'May trigger fear or anxiety', fr: 'Peuvent déclencher peur ou anxiété' },
      { en: 'Indicate presence of other pests', fr: 'Indiquent la présence d\'autres nuisibles' }
    ],
    hideSpots: [
      { en: 'Bathrooms (tubs, sinks, showers)', fr: 'Salles de bains (baignoires, éviers, douches)' },
      { en: 'Basements and crawl spaces', fr: 'Sous-sols et vides sanitaires' },
      { en: 'Under boxes and storage items', fr: 'Sous les boîtes et objets entreposés' },
      { en: 'Near floor drains', fr: 'Près des drains de sol' },
      { en: 'Behind baseboards and in wall voids', fr: 'Derrière les plinthes et dans les cavités murales' },
      { en: 'In closets and laundry areas', fr: 'Dans les placards et buanderies' }
    ],
    signs: [
      { icon: '👀', title: { en: 'Live Sightings', fr: 'Observations Vivantes' }, description: { en: 'Seeing centipedes, especially at night', fr: 'Voir des centipèdes, surtout la nuit' } },
      { icon: '🚿', title: { en: 'In Wet Areas', fr: 'Dans les Zones Humides' }, description: { en: 'Found in bathtubs, sinks, basements', fr: 'Trouvés dans les baignoires, éviers, sous-sols' } },
      { icon: '🦗', title: { en: 'Other Pest Activity', fr: 'Activité d\'Autres Nuisibles' }, description: { en: 'Presence indicates prey insects nearby', fr: 'Leur présence indique des insectes proies à proximité' } },
      { icon: '💧', title: { en: 'Moisture Issues', fr: 'Problèmes d\'Humidité' }, description: { en: 'Often correlates with dampness problems', fr: 'Souvent corrélé avec des problèmes d\'humidité' } },
      { icon: '🌙', title: { en: 'Night Activity', fr: 'Activité Nocturne' }, description: { en: 'Most commonly seen after dark', fr: 'Plus souvent vus après la tombée de la nuit' } },
      { icon: '⚡', title: { en: 'Fast Movement', fr: 'Mouvement Rapide' }, description: { en: 'Quick escape when lights turned on', fr: 'Fuite rapide quand les lumières s\'allument' } }
    ],
    prevention: [
      { icon: '💨', title: { en: 'Reduce Humidity', fr: 'Réduire l\'Humidité' }, description: { en: 'Use dehumidifiers in basements and bathrooms', fr: 'Utilisez des déshumidificateurs dans les sous-sols et salles de bains' } },
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: 'Sceller les Points d\'Entrée' }, description: { en: 'Caulk cracks around foundation, doors, windows', fr: 'Calfeutrez les fissures autour de la fondation, portes, fenêtres' } },
      { icon: '🦗', title: { en: 'Control Prey Insects', fr: 'Contrôler les Insectes Proies' }, description: { en: 'Reduce other insects they feed on', fr: 'Réduisez les autres insectes dont ils se nourrissent' } },
      { icon: '📦', title: { en: 'Reduce Clutter', fr: 'Réduire l\'Encombrement' }, description: { en: 'Remove hiding spots in storage areas', fr: 'Éliminez les cachettes dans les zones de stockage' } },
      { icon: '🌿', title: { en: 'Yard Cleanup', fr: 'Nettoyage de la Cour' }, description: { en: 'Remove leaf litter, mulch away from foundation', fr: 'Enlevez les feuilles mortes, éloignez le paillis de la fondation' } },
      { icon: '🧹', title: { en: 'Regular Cleaning', fr: 'Nettoyage Régulier' }, description: { en: 'Vacuum regularly to remove insects and eggs', fr: 'Passez l\'aspirateur régulièrement pour enlever insectes et œufs' } }
    ],
    faqs: [
      { question: { en: 'Are house centipedes dangerous?', fr: 'Les scutigères sont-ils dangereux?' }, answer: { en: 'House centipedes can bite but rarely do. Their venom is not dangerous to humans - similar to a bee sting at worst. They\'re actually beneficial as they eat other pests.', fr: 'Les scutigères peuvent mordre mais le font rarement. Leur venin n\'est pas dangereux pour les humains - similaire à une piqûre d\'abeille au pire. Ils sont en fait bénéfiques car ils mangent d\'autres nuisibles.' } },
      { question: { en: 'Why are there centipedes in my house?', fr: 'Pourquoi y a-t-il des centipèdes dans ma maison?' }, answer: { en: 'Centipedes enter seeking moisture and prey. Their presence usually indicates both a moisture issue and other insects they\'re hunting. Address both to reduce centipedes.', fr: 'Les centipèdes entrent à la recherche d\'humidité et de proies. Leur présence indique généralement un problème d\'humidité et d\'autres insectes qu\'ils chassent.' } },
      { question: { en: 'Should I kill house centipedes?', fr: 'Devrais-je tuer les scutigères?' }, answer: { en: 'While unsettling, house centipedes are beneficial predators that eat cockroaches, silverfish, moths, and other pests. Consider tolerating them or addressing the underlying pest problem.', fr: 'Bien qu\'inquiétants, les scutigères sont des prédateurs bénéfiques qui mangent les coquerelles, poissons d\'argent, mites et autres nuisibles. Envisagez de les tolérer ou de traiter le problème de nuisibles sous-jacent.' } },
      { question: { en: 'How do I get rid of centipedes?', fr: 'Comment me débarrasser des centipèdes?' }, answer: { en: 'Reduce humidity, seal entry points, eliminate their prey insects, and remove clutter. Professional treatment may be needed for persistent infestations.', fr: 'Réduisez l\'humidité, scellez les points d\'entrée, éliminez les insectes proies et enlevez l\'encombrement. Un traitement professionnel peut être nécessaire pour les infestations persistantes.' } }
    ]
  },
  'earwigs': {
    slug: 'earwigs',
    title: { en: 'Earwigs', fr: 'Perce-oreilles' },
    description: {
      en: 'Complete guide on earwigs in Montreal. Learn to identify earwigs, their habits, why they invade homes, and professional control solutions.',
      fr: "Guide complet sur les perce-oreilles à Montréal. Apprenez à identifier les perce-oreilles, leurs habitudes, pourquoi ils envahissent les maisons et les solutions de contrôle professionnelles."
    },
    heroLead: {
      en: 'Earwigs are nocturnal insects recognizable by their distinctive pincer-like appendages. Despite myths, they do not crawl into ears. They prefer damp environments and can damage garden plants and occasionally invade homes.',
      fr: "Les perce-oreilles sont des insectes nocturnes reconnaissables à leurs appendices en forme de pinces. Malgré les mythes, ils n'entrent pas dans les oreilles. Ils préfèrent les environnements humides et peuvent endommager les plantes de jardin et parfois envahir les maisons."
    },
    image: '/images/earwigs.jpeg',
    imageAlt: { en: 'Earwig with pincers', fr: 'Perce-oreille avec ses pinces' },
    imageCaption: { en: 'European earwig (Forficula auricularia) - 12-25mm', fr: 'Perce-oreille européen (Forficula auricularia) - 12-25mm' },
    metaKeywords: 'earwigs Montreal, earwig control, earwig extermination, perce-oreilles, garden pests',
    identification: [
      { en: 'Elongated, flattened dark brown body (12-25mm)', fr: 'Corps allongé, aplati, brun foncé (12-25mm)' },
      { en: 'Distinctive pincer-like cerci at rear', fr: 'Cerques distinctifs en forme de pinces à l\'arrière' },
      { en: 'Males have curved pincers, females straight', fr: 'Les mâles ont des pinces courbées, les femelles droites' },
      { en: 'Short, leathery forewings', fr: 'Ailes antérieures courtes et coriaces' },
      { en: 'Long, thin antennae', fr: 'Antennes longues et fines' },
      { en: 'Six legs, moves quickly', fr: 'Six pattes, se déplace rapidement' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 30-50 eggs in underground nest. Guards and cleans eggs.', fr: 'La femelle pond 30-50 œufs dans un nid souterrain. Garde et nettoie les œufs.' } },
      { icon: '🐛', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: 'Hatch in spring. Look like small adults. Molt 4-5 times.', fr: 'Éclosent au printemps. Ressemblent aux adultes en miniature. Muent 4-5 fois.' } },
      { icon: '🦗', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Mature in about 70 days. Live approximately one year.', fr: 'Matures en environ 70 jours. Vivent environ un an.' } },
      { icon: '❄️', title: { en: 'Overwintering', fr: 'Hivernage' }, description: { en: 'Adults and eggs survive winter in soil. Active in spring.', fr: 'Les adultes et œufs survivent l\'hiver dans le sol. Actifs au printemps.' } }
    ],
    behaviour: [
      { en: 'Nocturnal - hide during the day', fr: 'Nocturnes - se cachent pendant la journée' },
      { en: 'Attracted to lights at night', fr: 'Attirés par les lumières la nuit' },
      { en: 'Prefer cool, moist hiding places', fr: 'Préfèrent les cachettes fraîches et humides' },
      { en: 'Omnivorous - eat plants, insects, decaying matter', fr: 'Omnivores - mangent plantes, insectes, matière en décomposition' },
      { en: 'Use pincers for defense, not attacking humans', fr: 'Utilisent les pinces pour la défense, pas pour attaquer les humains' }
    ],
    healthRisks: [
      { en: 'No significant health risks to humans', fr: 'Pas de risques significatifs pour la santé humaine' },
      { en: 'Pinch from pincers is harmless (no venom)', fr: 'Le pincement des pinces est inoffensif (pas de venin)' },
      { en: 'Do NOT crawl into ears (myth)', fr: 'N\'entrent PAS dans les oreilles (mythe)' },
      { en: 'May damage garden plants and seedlings', fr: 'Peuvent endommager les plantes et semis de jardin' },
      { en: 'Can be a nuisance when invading in large numbers', fr: 'Peuvent être une nuisance lors d\'invasions en grand nombre' }
    ],
    hideSpots: [
      { en: 'Under mulch, rocks, and garden debris', fr: 'Sous le paillis, les roches et débris de jardin' },
      { en: 'In flower pots and planters', fr: 'Dans les pots de fleurs et jardinières' },
      { en: 'Under welcome mats and doormats', fr: 'Sous les tapis d\'entrée et paillassons' },
      { en: 'In basement and bathroom crevices', fr: 'Dans les fissures du sous-sol et de la salle de bain' },
      { en: 'Around foundation plantings', fr: 'Autour des plantations de fondation' },
      { en: 'In stacked firewood and lumber', fr: 'Dans le bois de chauffage et le bois d\'œuvre empilés' }
    ],
    signs: [
      { icon: '👀', title: { en: 'Live Earwigs', fr: 'Perce-oreilles Vivants' }, description: { en: 'Seeing earwigs, especially at night or when disturbing hiding spots', fr: 'Voir des perce-oreilles, surtout la nuit ou en dérangeant leurs cachettes' } },
      { icon: '🌱', title: { en: 'Plant Damage', fr: 'Dommages aux Plantes' }, description: { en: 'Irregular holes in leaves, damaged seedlings', fr: 'Trous irréguliers dans les feuilles, semis endommagés' } },
      { icon: '💧', title: { en: 'Damp Areas', fr: 'Zones Humides' }, description: { en: 'Found near moisture sources and damp locations', fr: 'Trouvés près des sources d\'humidité et endroits humides' } },
      { icon: '🌙', title: { en: 'Night Activity', fr: 'Activité Nocturne' }, description: { en: 'Active at night, hiding during daylight hours', fr: 'Actifs la nuit, se cachent pendant la journée' } },
      { icon: '💡', title: { en: 'Light Attraction', fr: 'Attraction à la Lumière' }, description: { en: 'Gathered around exterior lights at night', fr: 'Rassemblés autour des lumières extérieures la nuit' } },
      { icon: '🚪', title: { en: 'Entry Points', fr: 'Points d\'Entrée' }, description: { en: 'Found near doors, windows, foundation cracks', fr: 'Trouvés près des portes, fenêtres, fissures de fondation' } }
    ],
    prevention: [
      { icon: '💧', title: { en: 'Reduce Moisture', fr: 'Réduire l\'Humidité' }, description: { en: 'Fix leaks, improve drainage, reduce irrigation near foundation', fr: 'Réparez les fuites, améliorez le drainage, réduisez l\'irrigation près de la fondation' } },
      { icon: '🌿', title: { en: 'Yard Cleanup', fr: 'Nettoyage de la Cour' }, description: { en: 'Remove leaf litter, mulch, and debris from foundation', fr: 'Enlevez les feuilles mortes, paillis et débris de la fondation' } },
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: 'Sceller les Points d\'Entrée' }, description: { en: 'Caulk cracks around doors, windows, pipes, foundation', fr: 'Calfeutrez les fissures autour des portes, fenêtres, tuyaux, fondation' } },
      { icon: '💡', title: { en: 'Exterior Lighting', fr: 'Éclairage Extérieur' }, description: { en: 'Use yellow bulbs or move lights away from doors', fr: 'Utilisez des ampoules jaunes ou éloignez les lumières des portes' } },
      { icon: '🪵', title: { en: 'Firewood Storage', fr: 'Stockage du Bois' }, description: { en: 'Store firewood away from home, elevated off ground', fr: 'Stockez le bois de chauffage loin de la maison, surélevé' } },
      { icon: '🧹', title: { en: 'Regular Inspection', fr: 'Inspection Régulière' }, description: { en: 'Check under mats, pots, and around entry points', fr: 'Vérifiez sous les tapis, pots et autour des points d\'entrée' } }
    ],
    faqs: [
      { question: { en: 'Do earwigs really crawl into ears?', fr: 'Les perce-oreilles entrent-ils vraiment dans les oreilles?' }, answer: { en: 'No, this is a myth. Earwigs have no interest in human ears and do not seek them out. The name comes from old European superstitions, not actual behavior.', fr: 'Non, c\'est un mythe. Les perce-oreilles n\'ont aucun intérêt pour les oreilles humaines. Le nom vient de vieilles superstitions européennes, pas d\'un comportement réel.' } },
      { question: { en: 'Are earwigs dangerous?', fr: 'Les perce-oreilles sont-ils dangereux?' }, answer: { en: 'Earwigs are not dangerous. Their pincers can pinch if handled, but they have no venom and don\'t transmit diseases. They\'re more of a nuisance than a threat.', fr: 'Les perce-oreilles ne sont pas dangereux. Leurs pinces peuvent pincer si on les manipule, mais ils n\'ont pas de venin et ne transmettent pas de maladies.' } },
      { question: { en: 'Why are earwigs in my house?', fr: 'Pourquoi y a-t-il des perce-oreilles dans ma maison?' }, answer: { en: 'Earwigs enter seeking moisture, shelter from extreme weather, or following lights at night. They often come in through cracks near foundations and doors.', fr: 'Les perce-oreilles entrent à la recherche d\'humidité, d\'abri contre les conditions météorologiques extrêmes, ou en suivant les lumières la nuit.' } },
      { question: { en: 'How do I get rid of earwigs?', fr: 'Comment me débarrasser des perce-oreilles?' }, answer: { en: 'Reduce moisture and hiding spots around your home, seal entry points, adjust exterior lighting, and remove garden debris. Professional treatment may help for large infestations.', fr: 'Réduisez l\'humidité et les cachettes autour de votre maison, scellez les points d\'entrée, ajustez l\'éclairage extérieur et enlevez les débris de jardin.' } }
    ]
  },
  'fruit-flies': {
    slug: 'fruit-flies',
    title: { en: 'Fruit Flies', fr: 'Mouches à fruits' },
    description: {
      en: 'Complete guide on fruit flies in Montreal. Learn to identify fruit flies, what attracts them, how to eliminate breeding sources, and professional control options.',
      fr: "Guide complet sur les mouches à fruits à Montréal. Apprenez à identifier les mouches à fruits, ce qui les attire, comment éliminer les sources de reproduction et les options de contrôle professionnel."
    },
    heroLead: {
      en: 'Fruit flies are tiny, nuisance insects that seem to appear out of nowhere in kitchens. They breed rapidly on overripe fruits, vegetables, and fermented materials, and can quickly become a frustrating infestation.',
      fr: "Les mouches à fruits sont de minuscules insectes nuisibles qui semblent apparaître de nulle part dans les cuisines. Elles se reproduisent rapidement sur les fruits trop mûrs, les légumes et les matières fermentées, et peuvent rapidement devenir une infestation frustrante."
    },
    image: '/images/fruit-flies.jpeg',
    imageAlt: { en: 'Fruit fly on fruit', fr: 'Mouche à fruits sur un fruit' },
    imageCaption: { en: 'Common fruit fly (Drosophila melanogaster) - 2-4mm', fr: 'Mouche à fruits commune (Drosophila melanogaster) - 2-4mm' },
    metaKeywords: 'fruit flies Montreal, fruit fly control, kitchen flies, drosophila, fruit fly extermination',
    identification: [
      { en: 'Very small size (2-4mm)', fr: 'Très petite taille (2-4mm)' },
      { en: 'Tan/brown body with red eyes', fr: 'Corps beige/brun avec des yeux rouges' },
      { en: 'Translucent wings', fr: 'Ailes translucides' },
      { en: 'Hover around fruit and garbage', fr: 'Volent autour des fruits et poubelles' },
      { en: 'Slow, hovering flight pattern', fr: 'Vol lent et stationnaire' },
      { en: 'Found near fermenting materials', fr: 'Trouvées près des matières en fermentation' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 500+ eggs on fermenting fruit. Hatch in 24-30 hours.', fr: 'La femelle pond plus de 500 œufs sur les fruits en fermentation. Éclosent en 24-30 heures.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Feed on yeast and fungi in fermenting material. 5-6 days.', fr: 'Se nourrissent de levures et champignons dans la matière en fermentation. 5-6 jours.' } },
      { icon: '🫛', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: 'Pupate near breeding site. Emerge as adults in 2-3 days.', fr: 'Se nymphosent près du site de reproduction. Émergent adultes en 2-3 jours.' } },
      { icon: '🪰', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 40-50 days. Can reproduce within 2 days of emergence.', fr: 'Vivent 40-50 jours. Peuvent se reproduire dans les 2 jours suivant l\'émergence.' } }
    ],
    behaviour: [
      { en: 'Attracted to fermenting fruits and vegetables', fr: 'Attirées par les fruits et légumes en fermentation' },
      { en: 'Breed in drains, garbage, and mops', fr: 'Se reproduisent dans les drains, poubelles et vadrouilles' },
      { en: 'Can detect ripening fruit from long distances', fr: 'Peuvent détecter les fruits mûrissants de loin' },
      { en: 'Active during daytime', fr: 'Actives pendant la journée' },
      { en: 'Population explodes rapidly in warm weather', fr: 'La population explose rapidement par temps chaud' }
    ],
    healthRisks: [
      { en: 'Can transfer bacteria from contaminated surfaces', fr: 'Peuvent transférer des bactéries de surfaces contaminées' },
      { en: 'May contaminate food with microorganisms', fr: 'Peuvent contaminer la nourriture avec des micro-organismes' },
      { en: 'Generally more of a nuisance than health threat', fr: 'Généralement plus une nuisance qu\'une menace pour la santé' },
      { en: 'Indicate sanitation issues that need addressing', fr: 'Indiquent des problèmes d\'assainissement à traiter' },
      { en: 'Can cause food spoilage', fr: 'Peuvent causer la détérioration des aliments' }
    ],
    hideSpots: [
      { en: 'Overripe fruits and vegetables', fr: 'Fruits et légumes trop mûrs' },
      { en: 'Garbage disposals and drains', fr: 'Broyeurs à déchets et drains' },
      { en: 'Recycling bins with bottles and cans', fr: 'Bacs de recyclage avec bouteilles et canettes' },
      { en: 'Wet mops and cleaning rags', fr: 'Vadrouilles humides et chiffons de nettoyage' },
      { en: 'Compost bins', fr: 'Bacs à compost' },
      { en: 'Empty bottles and cans', fr: 'Bouteilles et canettes vides' }
    ],
    signs: [
      { icon: '🪰', title: { en: 'Adult Flies', fr: 'Mouches Adultes' }, description: { en: 'Small flies hovering around fruit, garbage, or drains', fr: 'Petites mouches volant autour des fruits, poubelles ou drains' } },
      { icon: '🍌', title: { en: 'Near Produce', fr: 'Près des Produits' }, description: { en: 'Concentrated around ripening or rotting fruit', fr: 'Concentrées autour des fruits mûrissants ou pourris' } },
      { icon: '🗑️', title: { en: 'At Garbage', fr: 'Aux Poubelles' }, description: { en: 'Swarming around waste bins and recycling', fr: 'Essaims autour des poubelles et du recyclage' } },
      { icon: '🚰', title: { en: 'Near Drains', fr: 'Près des Drains' }, description: { en: 'Flying up from sink and floor drains', fr: 'S\'envolant des drains d\'évier et de sol' } },
      { icon: '🍷', title: { en: 'Near Alcohol', fr: 'Près de l\'Alcool' }, description: { en: 'Attracted to wine, beer, and fermented beverages', fr: 'Attirées par le vin, la bière et les boissons fermentées' } },
      { icon: '📈', title: { en: 'Rapid Increase', fr: 'Augmentation Rapide' }, description: { en: 'Population seems to explode suddenly', fr: 'La population semble exploser soudainement' } }
    ],
    prevention: [
      { icon: '🍎', title: { en: 'Store Produce Properly', fr: 'Ranger les Produits Correctement' }, description: { en: 'Refrigerate ripe fruit, discard overripe produce', fr: 'Réfrigérez les fruits mûrs, jetez les produits trop mûrs' } },
      { icon: '🗑️', title: { en: 'Garbage Management', fr: 'Gestion des Déchets' }, description: { en: 'Empty bins frequently, use tight-fitting lids', fr: 'Videz les poubelles fréquemment, utilisez des couvercles hermétiques' } },
      { icon: '🚰', title: { en: 'Clean Drains', fr: 'Nettoyer les Drains' }, description: { en: 'Regularly clean and flush drains with hot water', fr: 'Nettoyez et rincez régulièrement les drains à l\'eau chaude' } },
      { icon: '♻️', title: { en: 'Rinse Recyclables', fr: 'Rincer les Recyclables' }, description: { en: 'Rinse bottles and cans before recycling', fr: 'Rincez les bouteilles et canettes avant le recyclage' } },
      { icon: '🧹', title: { en: 'Clean Spills', fr: 'Nettoyer les Déversements' }, description: { en: 'Wipe up spills immediately, especially sugary liquids', fr: 'Essuyez les déversements immédiatement, surtout les liquides sucrés' } },
      { icon: '🧽', title: { en: 'Dry Cleaning Tools', fr: 'Sécher les Outils de Nettoyage' }, description: { en: 'Wring out mops and sponges, let them dry', fr: 'Essorez les vadrouilles et éponges, laissez-les sécher' } }
    ],
    faqs: [
      { question: { en: 'Where do fruit flies come from?', fr: 'D\'où viennent les mouches à fruits?' }, answer: { en: 'Fruit flies enter on produce from stores or through open doors and windows. They can also breed from eggs already on fruit or in drains with organic buildup.', fr: 'Les mouches à fruits entrent sur les produits des magasins ou par les portes et fenêtres ouvertes. Elles peuvent aussi se reproduire à partir d\'œufs déjà sur les fruits ou dans les drains.' } },
      { question: { en: 'How do I get rid of fruit flies fast?', fr: 'Comment me débarrasser rapidement des mouches à fruits?' }, answer: { en: 'Remove all breeding sources (ripe fruit, garbage, drain buildup). Set traps with apple cider vinegar and dish soap. Clean drains with enzyme cleaner or boiling water.', fr: 'Enlevez toutes les sources de reproduction (fruits mûrs, poubelles, accumulation dans les drains). Installez des pièges avec du vinaigre de cidre et du savon à vaisselle.' } },
      { question: { en: 'Why do fruit flies keep coming back?', fr: 'Pourquoi les mouches à fruits reviennent-elles?' }, answer: { en: 'There\'s likely a breeding source you haven\'t found - check drains, garbage disposals, under appliances, recycling bins, and any moist organic material.', fr: 'Il y a probablement une source de reproduction que vous n\'avez pas trouvée - vérifiez les drains, broyeurs, sous les appareils, bacs de recyclage.' } },
      { question: { en: 'Are fruit flies harmful?', fr: 'Les mouches à fruits sont-elles nuisibles?' }, answer: { en: 'While mainly a nuisance, fruit flies can transfer bacteria from contaminated surfaces to your food. They indicate sanitation issues that should be addressed.', fr: 'Bien que principalement une nuisance, les mouches à fruits peuvent transférer des bactéries de surfaces contaminées à votre nourriture.' } }
    ]
  },
  'carpet-beetles': {
    slug: 'carpet-beetles',
    title: { en: 'Carpet Beetles', fr: 'Anthrènes des tapis' },
    description: {
      en: 'Complete guide on carpet beetles in Montreal. Learn to identify carpet beetles, what they damage, how to prevent infestations, and professional treatment options.',
      fr: "Guide complet sur les anthrènes des tapis à Montréal. Apprenez à identifier les anthrènes, ce qu'ils endommagent, comment prévenir les infestations et les options de traitement professionnel."
    },
    heroLead: {
      en: 'Carpet beetles are small, destructive pests whose larvae feed on natural fibers, causing damage to carpets, clothing, upholstery, and stored items. They are one of the most common fabric pests in homes.',
      fr: "Les anthrènes des tapis sont de petits nuisibles destructeurs dont les larves se nourrissent de fibres naturelles, causant des dommages aux tapis, vêtements, tissus d'ameublement et articles stockés. Ils sont parmi les nuisibles de tissus les plus communs dans les maisons."
    },
    image: '/images/carpet-beetles.jpg',
    imageAlt: { en: 'Carpet beetle adult and larva', fr: 'Anthrène des tapis adulte et larve' },
    imageCaption: { en: 'Varied carpet beetle (Anthrenus verbasci) - 2-4mm', fr: 'Anthrène bigarré (Anthrenus verbasci) - 2-4mm' },
    metaKeywords: 'carpet beetles Montreal, carpet beetle damage, fabric pests, wool damage, carpet beetle extermination',
    identification: [
      { en: 'Adults: Small, oval, 2-4mm', fr: 'Adultes: Petits, ovales, 2-4mm' },
      { en: 'Varied patterns of white, brown, yellow scales', fr: 'Motifs variés d\'écailles blanches, brunes, jaunes' },
      { en: 'Larvae: Fuzzy, carrot-shaped, brown', fr: 'Larves: Velues, en forme de carotte, brunes' },
      { en: 'Larvae have bristly hairs', fr: 'Les larves ont des poils hérissés' },
      { en: 'Adults attracted to light, often at windows', fr: 'Adultes attirés par la lumière, souvent aux fenêtres' },
      { en: 'Shed larval skins near damage', fr: 'Peaux larvaires mues près des dommages' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 40-100 eggs near food sources. Hatch in 1-2 weeks.', fr: 'La femelle pond 40-100 œufs près des sources de nourriture. Éclosent en 1-2 semaines.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Destructive stage. Feed for 2-12 months depending on conditions.', fr: 'Stade destructeur. Se nourrissent pendant 2-12 mois selon les conditions.' } },
      { icon: '🫛', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: 'Transform inside last larval skin. 1-2 weeks.', fr: 'Se transforment dans la dernière peau larvaire. 1-2 semaines.' } },
      { icon: '🪲', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 2-6 weeks. Feed on pollen outdoors, don\'t damage fabrics.', fr: 'Vivent 2-6 semaines. Se nourrissent de pollen à l\'extérieur, n\'endommagent pas les tissus.' } }
    ],
    behaviour: [
      { en: 'Larvae cause all the damage, not adults', fr: 'Les larves causent tous les dommages, pas les adultes' },
      { en: 'Feed on wool, silk, leather, feathers, fur', fr: 'Se nourrissent de laine, soie, cuir, plumes, fourrure' },
      { en: 'Also eat dead insects and pet hair', fr: 'Mangent aussi les insectes morts et poils d\'animaux' },
      { en: 'Adults fly and are attracted to flowers', fr: 'Les adultes volent et sont attirés par les fleurs' },
      { en: 'Prefer dark, undisturbed areas', fr: 'Préfèrent les endroits sombres et non dérangés' }
    ],
    healthRisks: [
      { en: 'Larval hairs can cause skin irritation', fr: 'Les poils larvaires peuvent causer une irritation cutanée' },
      { en: 'May trigger allergic reactions in some people', fr: 'Peuvent déclencher des réactions allergiques chez certaines personnes' },
      { en: 'Can cause "carpet beetle dermatitis"', fr: 'Peuvent causer la "dermatite des anthrènes"' },
      { en: 'Significant damage to valuable textiles', fr: 'Dommages significatifs aux textiles de valeur' },
      { en: 'Can destroy irreplaceable items', fr: 'Peuvent détruire des articles irremplaçables' }
    ],
    hideSpots: [
      { en: 'Under furniture and along carpet edges', fr: 'Sous les meubles et le long des bords de tapis' },
      { en: 'In closets with wool or silk clothing', fr: 'Dans les placards avec des vêtements en laine ou soie' },
      { en: 'Around air ducts and vents (lint buildup)', fr: 'Autour des conduits d\'air et bouches d\'aération (accumulation de peluches)' },
      { en: 'In stored blankets, rugs, furs', fr: 'Dans les couvertures, tapis et fourrures stockés' },
      { en: 'Near pet bedding and accumulated pet hair', fr: 'Près de la literie d\'animaux et accumulation de poils' },
      { en: 'In taxidermy, museum specimens, collections', fr: 'Dans la taxidermie, spécimens de musée, collections' }
    ],
    signs: [
      { icon: '🕳️', title: { en: 'Fabric Damage', fr: 'Dommages aux Tissus' }, description: { en: 'Irregular holes in wool, silk, or other natural fibers', fr: 'Trous irréguliers dans la laine, soie ou autres fibres naturelles' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Fuzzy, brown, carrot-shaped larvae in fabrics', fr: 'Larves velues, brunes, en forme de carotte dans les tissus' } },
      { icon: '🐚', title: { en: 'Shed Skins', fr: 'Peaux Mues' }, description: { en: 'Light brown, bristly cast skins', fr: 'Peaux mues brun clair et hérissées' } },
      { icon: '🪲', title: { en: 'Adult Beetles', fr: 'Coléoptères Adultes' }, description: { en: 'Small beetles on windowsills or near light sources', fr: 'Petits coléoptères sur les rebords de fenêtres ou près des lumières' } },
      { icon: '💩', title: { en: 'Fecal Pellets', fr: 'Granules Fécaux' }, description: { en: 'Tiny, sand-like droppings near damaged items', fr: 'Minuscules excréments comme du sable près des articles endommagés' } },
      { icon: '🧶', title: { en: 'Damaged Areas', fr: 'Zones Endommagées' }, description: { en: 'Thin spots or bare patches in carpets and rugs', fr: 'Points minces ou zones dénudées dans les tapis et moquettes' } }
    ],
    prevention: [
      { icon: '🧹', title: { en: 'Regular Vacuuming', fr: 'Aspiration Régulière' }, description: { en: 'Vacuum carpets, upholstery, and under furniture frequently', fr: 'Aspirez fréquemment les tapis, tissus d\'ameublement et sous les meubles' } },
      { icon: '👕', title: { en: 'Clean Before Storage', fr: 'Nettoyer Avant Stockage' }, description: { en: 'Clean wool and silk items before storing', fr: 'Nettoyez les articles en laine et soie avant de les ranger' } },
      { icon: '📦', title: { en: 'Sealed Storage', fr: 'Stockage Hermétique' }, description: { en: 'Store susceptible items in airtight containers', fr: 'Rangez les articles susceptibles dans des contenants hermétiques' } },
      { icon: '❄️', title: { en: 'Freeze Items', fr: 'Congeler les Articles' }, description: { en: 'Freeze infested items for 72 hours to kill larvae', fr: 'Congelez les articles infestés pendant 72 heures pour tuer les larves' } },
      { icon: '🐕', title: { en: 'Pet Hair Cleanup', fr: 'Nettoyage des Poils d\'Animaux' }, description: { en: 'Regularly clean pet bedding and accumulated hair', fr: 'Nettoyez régulièrement la literie d\'animaux et les poils accumulés' } },
      { icon: '🔍', title: { en: 'Regular Inspection', fr: 'Inspection Régulière' }, description: { en: 'Check stored clothing and textiles periodically', fr: 'Vérifiez périodiquement les vêtements et textiles stockés' } }
    ],
    faqs: [
      { question: { en: 'How do I know if I have carpet beetles?', fr: 'Comment savoir si j\'ai des anthrènes des tapis?' }, answer: { en: 'Look for irregular holes in natural fiber items, fuzzy brown larvae, shed skins, and small beetles near windows. Damage is often found in hidden areas like closets and under furniture.', fr: 'Recherchez des trous irréguliers dans les articles en fibres naturelles, des larves velues brunes, des peaux mues et de petits coléoptères près des fenêtres.' } },
      { question: { en: 'What do carpet beetles eat?', fr: 'Que mangent les anthrènes des tapis?' }, answer: { en: 'Larvae eat natural fibers: wool, silk, leather, feathers, fur, and also dead insects, pet hair, and lint. They don\'t eat synthetic fibers unless blended with natural ones.', fr: 'Les larves mangent les fibres naturelles: laine, soie, cuir, plumes, fourrure, ainsi que les insectes morts, poils d\'animaux et peluches.' } },
      { question: { en: 'Are carpet beetles harmful to humans?', fr: 'Les anthrènes des tapis sont-ils nuisibles aux humains?' }, answer: { en: 'They don\'t bite, but larval hairs can cause skin irritation and allergic reactions in some people, called "carpet beetle dermatitis." The main concern is property damage.', fr: 'Ils ne mordent pas, mais les poils larvaires peuvent causer une irritation cutanée et des réactions allergiques chez certaines personnes, appelées "dermatite des anthrènes".' } },
      { question: { en: 'How do I get rid of carpet beetles?', fr: 'Comment me débarrasser des anthrènes des tapis?' }, answer: { en: 'Thorough vacuuming, laundering or dry cleaning affected items, freezing infested materials, and professional treatment for severe infestations. Finding and eliminating the source is essential.', fr: 'Aspiration approfondie, lavage ou nettoyage à sec des articles affectés, congélation des matériaux infestés et traitement professionnel pour les infestations graves.' } }
    ]
  },
  'moths': {
    slug: 'moths',
    title: { en: 'Moths', fr: 'Mites' },
    description: {
      en: 'Complete guide on clothes moths and pantry moths in Montreal. Learn to identify moths, prevent damage to clothing and food, and professional extermination options.',
      fr: "Guide complet sur les mites des vêtements et mites alimentaires à Montréal. Apprenez à identifier les mites, prévenir les dommages aux vêtements et à la nourriture, et les options d'extermination professionnelle."
    },
    heroLead: {
      en: 'Moths are a common household pest that can destroy clothing, fabrics, and stored foods. Clothes moths damage wool, silk, and fur, while pantry moths infest grains, cereals, and dried goods.',
      fr: "Les mites sont un nuisible domestique commun qui peut détruire les vêtements, tissus et aliments stockés. Les mites des vêtements endommagent la laine, la soie et la fourrure, tandis que les mites alimentaires infestent les grains, céréales et produits secs."
    },
    image: '/images/moths.jpg',
    imageAlt: { en: 'Clothes moth on fabric', fr: 'Mite des vêtements sur tissu' },
    imageCaption: { en: 'Webbing clothes moth (Tineola bisselliella) - 6-8mm wingspan', fr: 'Mite des vêtements (Tineola bisselliella) - 6-8mm d\'envergure' },
    metaKeywords: 'moths Montreal, clothes moths, pantry moths, moth damage, moth extermination, wool moths',
    identification: [
      { en: 'Clothes moths: Small (6-8mm), golden/buff colored', fr: 'Mites des vêtements: Petites (6-8mm), couleur dorée/chamois' },
      { en: 'Clothes moth larvae: Creamy white with brown head', fr: 'Larves de mites des vêtements: Blanc crème avec tête brune' },
      { en: 'Pantry moths: Larger (8-10mm), gray with copper tips', fr: 'Mites alimentaires: Plus grandes (8-10mm), grises avec extrémités cuivrées' },
      { en: 'Clothes moths avoid light, flutter weakly', fr: 'Les mites des vêtements évitent la lumière, volent faiblement' },
      { en: 'Pantry moths fly strongly toward lights', fr: 'Les mites alimentaires volent fortement vers les lumières' },
      { en: 'Silken tubes or webbing in infested areas', fr: 'Tubes de soie ou toiles dans les zones infestées' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 40-300 eggs on food source. Hatch in 4-10 days.', fr: 'La femelle pond 40-300 œufs sur la source de nourriture. Éclosent en 4-10 jours.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Damaging stage. Feed for 1 month to 2 years depending on conditions.', fr: 'Stade dommageable. Se nourrissent de 1 mois à 2 ans selon les conditions.' } },
      { icon: '🫛', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: 'Spin cocoon in hidden location. Transform in 2-4 weeks.', fr: 'Tissent un cocon dans un endroit caché. Se transforment en 2-4 semaines.' } },
      { icon: '🦋', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 2-4 weeks. Don\'t eat - only reproduce.', fr: 'Vivent 2-4 semaines. Ne mangent pas - se reproduisent seulement.' } }
    ],
    behaviour: [
      { en: 'Larvae cause all damage, not adults', fr: 'Les larves causent tous les dommages, pas les adultes' },
      { en: 'Clothes moths prefer dark, undisturbed areas', fr: 'Les mites des vêtements préfèrent les endroits sombres et non dérangés' },
      { en: 'Pantry moths infest stored dry goods', fr: 'Les mites alimentaires infestent les produits secs stockés' },
      { en: 'Attracted to soiled fabrics (sweat, food stains)', fr: 'Attirées par les tissus souillés (sueur, taches de nourriture)' },
      { en: 'Can survive on pet hair and lint', fr: 'Peuvent survivre sur les poils d\'animaux et les peluches' }
    ],
    healthRisks: [
      { en: 'No direct health risks from clothes moths', fr: 'Pas de risques directs pour la santé des mites des vêtements' },
      { en: 'Pantry moth contamination makes food inedible', fr: 'La contamination par les mites alimentaires rend la nourriture non comestible' },
      { en: 'Larvae, webbing, and droppings in food', fr: 'Larves, toiles et excréments dans la nourriture' },
      { en: 'Significant damage to valuable clothing and textiles', fr: 'Dommages significatifs aux vêtements et textiles de valeur' },
      { en: 'Can destroy irreplaceable heirlooms', fr: 'Peuvent détruire des héritages irremplaçables' }
    ],
    hideSpots: [
      { en: 'Closets with wool, silk, or fur items', fr: 'Placards avec des articles en laine, soie ou fourrure' },
      { en: 'Stored clothing and blankets', fr: 'Vêtements et couvertures stockés' },
      { en: 'Under furniture and in carpet edges', fr: 'Sous les meubles et dans les bords de tapis' },
      { en: 'Pantry shelves with grains, cereals, flour', fr: 'Étagères de garde-manger avec grains, céréales, farine' },
      { en: 'Pet food and birdseed storage', fr: 'Stockage de nourriture pour animaux et graines d\'oiseaux' },
      { en: 'Dried flower arrangements', fr: 'Arrangements de fleurs séchées' }
    ],
    signs: [
      { icon: '🕳️', title: { en: 'Holes in Fabric', fr: 'Trous dans les Tissus' }, description: { en: 'Irregular holes in wool, silk, or natural fibers', fr: 'Trous irréguliers dans la laine, soie ou fibres naturelles' } },
      { icon: '🕸️', title: { en: 'Webbing', fr: 'Toiles' }, description: { en: 'Silken tubes or webbing on fabrics or in food', fr: 'Tubes de soie ou toiles sur les tissus ou dans la nourriture' } },
      { icon: '🦋', title: { en: 'Adult Moths', fr: 'Mites Adultes' }, description: { en: 'Small moths flying or resting in closets or kitchen', fr: 'Petites mites volant ou se reposant dans les placards ou la cuisine' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Creamy white caterpillars in fabrics or food', fr: 'Chenilles blanc crème dans les tissus ou la nourriture' } },
      { icon: '🫛', title: { en: 'Cocoons', fr: 'Cocons' }, description: { en: 'Silken cases in corners or attached to items', fr: 'Étuis de soie dans les coins ou attachés aux articles' } },
      { icon: '💩', title: { en: 'Frass', fr: 'Déjections' }, description: { en: 'Sandy droppings and debris near damaged items', fr: 'Excréments sablonneux et débris près des articles endommagés' } }
    ],
    prevention: [
      { icon: '👕', title: { en: 'Clean Before Storage', fr: 'Nettoyer Avant Stockage' }, description: { en: 'Always clean clothes before long-term storage', fr: 'Nettoyez toujours les vêtements avant le stockage à long terme' } },
      { icon: '📦', title: { en: 'Sealed Containers', fr: 'Contenants Hermétiques' }, description: { en: 'Store clothes and food in airtight containers', fr: 'Rangez les vêtements et la nourriture dans des contenants hermétiques' } },
      { icon: '🌿', title: { en: 'Natural Repellents', fr: 'Répulsifs Naturels' }, description: { en: 'Cedar, lavender, or moth balls (use carefully)', fr: 'Cèdre, lavande ou boules de naphtaline (utiliser avec précaution)' } },
      { icon: '🧹', title: { en: 'Regular Cleaning', fr: 'Nettoyage Régulier' }, description: { en: 'Vacuum closets and pantries regularly', fr: 'Aspirez régulièrement les placards et garde-manger' } },
      { icon: '🔄', title: { en: 'Rotate Items', fr: 'Faire Tourner les Articles' }, description: { en: 'Disturb stored items periodically - moths prefer stillness', fr: 'Dérangez périodiquement les articles stockés - les mites préfèrent l\'immobilité' } },
      { icon: '❄️', title: { en: 'Freeze or Heat', fr: 'Congeler ou Chauffer' }, description: { en: 'Freeze items for 72 hours or heat to kill larvae', fr: 'Congelez les articles pendant 72 heures ou chauffez pour tuer les larves' } }
    ],
    faqs: [
      { question: { en: 'What\'s the difference between clothes moths and pantry moths?', fr: 'Quelle est la différence entre les mites des vêtements et les mites alimentaires?' }, answer: { en: 'Clothes moths are small, golden, avoid light, and damage fabrics. Pantry moths are larger, gray/copper colored, fly toward light, and infest stored foods like grains and cereals.', fr: 'Les mites des vêtements sont petites, dorées, évitent la lumière et endommagent les tissus. Les mites alimentaires sont plus grandes, de couleur grise/cuivrée, volent vers la lumière et infestent les aliments stockés.' } },
      { question: { en: 'Why do moths eat clothes?', fr: 'Pourquoi les mites mangent-elles les vêtements?' }, answer: { en: 'It\'s actually the larvae, not adult moths, that eat clothes. They need the protein (keratin) found in natural fibers like wool, silk, and fur to grow.', fr: 'Ce sont en fait les larves, pas les mites adultes, qui mangent les vêtements. Elles ont besoin de la protéine (kératine) des fibres naturelles comme la laine, la soie et la fourrure.' } },
      { question: { en: 'Do moth balls work?', fr: 'Les boules de naphtaline fonctionnent-elles?' }, answer: { en: 'Moth balls can deter moths but are toxic and should be used carefully, never in contact with food or skin. Cedar and lavender are safer natural alternatives.', fr: 'Les boules de naphtaline peuvent dissuader les mites mais sont toxiques et doivent être utilisées avec précaution, jamais en contact avec la nourriture ou la peau. Le cèdre et la lavande sont des alternatives naturelles plus sûres.' } },
      { question: { en: 'How do I get rid of pantry moths?', fr: 'Comment me débarrasser des mites alimentaires?' }, answer: { en: 'Dispose of all infested food, clean shelves thoroughly, store new food in airtight containers, and use pheromone traps to catch remaining adults. Professional treatment may be needed for severe cases.', fr: 'Jetez tous les aliments infestés, nettoyez les étagères à fond, stockez les nouveaux aliments dans des contenants hermétiques et utilisez des pièges à phéromones.' } }
    ]
  },
  'ticks': {
    slug: 'ticks',
    title: { en: 'Ticks', fr: 'Tiques' },
    description: {
      en: 'Complete guide on ticks in Montreal. Learn to identify ticks, understand Lyme disease risks, proper tick removal, and professional yard treatment options.',
      fr: "Guide complet sur les tiques à Montréal. Apprenez à identifier les tiques, comprendre les risques de la maladie de Lyme, le retrait approprié et les options de traitement professionnel."
    },
    heroLead: {
      en: 'Ticks are blood-feeding parasites that can transmit serious diseases including Lyme disease. They are increasingly common in Quebec and pose risks to humans and pets during outdoor activities.',
      fr: "Les tiques sont des parasites se nourrissant de sang qui peuvent transmettre des maladies graves, dont la maladie de Lyme. Elles sont de plus en plus communes au Québec et présentent des risques pour les humains et les animaux lors d'activités extérieures."
    },
    image: '/images/ticks.jpg',
    imageAlt: { en: 'Tick on skin', fr: 'Tique sur la peau' },
    imageCaption: { en: 'Blacklegged tick (Ixodes scapularis) - 3-5mm', fr: 'Tique à pattes noires (Ixodes scapularis) - 3-5mm' },
    metaKeywords: 'ticks Montreal, Lyme disease Quebec, tick removal, tick prevention, blacklegged tick',
    identification: [
      { en: 'Small, flat, oval-shaped body (3-5mm unfed)', fr: 'Corps petit, plat, de forme ovale (3-5mm non nourrie)' },
      { en: 'Eight legs (arachnid, not insect)', fr: 'Huit pattes (arachnide, pas insecte)' },
      { en: 'Brown to reddish-brown color', fr: 'Couleur brune à brun-rougeâtre' },
      { en: 'Engorged ticks swell to 10mm, turn gray', fr: 'Les tiques gorgées gonflent jusqu\'à 10mm, deviennent grises' },
      { en: 'Blacklegged ticks have dark legs and shield', fr: 'Les tiques à pattes noires ont des pattes foncées et un bouclier' },
      { en: 'No antennae or wings', fr: 'Pas d\'antennes ni d\'ailes' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 2,000-3,000 eggs in spring, then dies.', fr: 'La femelle pond 2000-3000 œufs au printemps, puis meurt.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Six-legged "seed ticks." Feed on small animals. Active late summer.', fr: 'Tiques "graines" à six pattes. Se nourrissent sur petits animaux. Actives en fin d\'été.' } },
      { icon: '🦎', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: 'Eight-legged, poppy seed size. Most likely to transmit disease. Spring/summer.', fr: 'Huit pattes, taille de graine de pavot. Plus susceptibles de transmettre des maladies. Printemps/été.' } },
      { icon: '🕷️', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Seek larger hosts including humans. Active fall through spring.', fr: 'Cherchent des hôtes plus grands, y compris les humains. Actives de l\'automne au printemps.' } }
    ],
    behaviour: [
      { en: 'Cannot jump or fly - wait on vegetation (questing)', fr: 'Ne peuvent ni sauter ni voler - attendent sur la végétation (quête)' },
      { en: 'Detect hosts by breath, body odor, warmth', fr: 'Détectent les hôtes par le souffle, l\'odeur corporelle, la chaleur' },
      { en: 'Attach and feed for 3-7 days', fr: 'S\'attachent et se nourrissent pendant 3-7 jours' },
      { en: 'Need 24-48 hours attached to transmit Lyme', fr: 'Doivent être attachées 24-48 heures pour transmettre Lyme' },
      { en: 'Most active spring through fall', fr: 'Plus actives du printemps à l\'automne' }
    ],
    healthRisks: [
      { en: 'Lyme disease (Borrelia burgdorferi)', fr: 'Maladie de Lyme (Borrelia burgdorferi)' },
      { en: 'Anaplasmosis, Babesiosis', fr: 'Anaplasmose, Babésiose' },
      { en: 'Rocky Mountain spotted fever', fr: 'Fièvre pourprée des Montagnes Rocheuses' },
      { en: 'Powassan virus (rare but serious)', fr: 'Virus Powassan (rare mais grave)' },
      { en: 'Alpha-gal syndrome (red meat allergy)', fr: 'Syndrome alpha-gal (allergie à la viande rouge)' }
    ],
    hideSpots: [
      { en: 'Tall grass and brush', fr: 'Hautes herbes et broussailles' },
      { en: 'Leaf litter and ground cover', fr: 'Litière de feuilles et couvre-sol' },
      { en: 'Edges of wooded areas', fr: 'Lisières des zones boisées' },
      { en: 'Around stone walls and wood piles', fr: 'Autour des murets de pierre et piles de bois' },
      { en: 'Overgrown gardens and shrubs', fr: 'Jardins et arbustes envahis' },
      { en: 'Areas with deer and wildlife activity', fr: 'Zones avec activité de cerfs et faune' }
    ],
    signs: [
      { icon: '🕷️', title: { en: 'Attached Tick', fr: 'Tique Attachée' }, description: { en: 'Finding a tick attached to skin after outdoor activity', fr: 'Trouver une tique attachée à la peau après une activité extérieure' } },
      { icon: '🎯', title: { en: 'Bull\'s-eye Rash', fr: 'Éruption en Cible' }, description: { en: 'Expanding red rash (erythema migrans) - Lyme disease sign', fr: 'Éruption rouge en expansion (érythème migrant) - signe de maladie de Lyme' } },
      { icon: '🤒', title: { en: 'Flu-like Symptoms', fr: 'Symptômes Grippaux' }, description: { en: 'Fever, fatigue, muscle aches after tick bite', fr: 'Fièvre, fatigue, douleurs musculaires après piqûre de tique' } },
      { icon: '🐕', title: { en: 'Ticks on Pets', fr: 'Tiques sur Animaux' }, description: { en: 'Finding ticks on dogs or cats after outdoor time', fr: 'Trouver des tiques sur les chiens ou chats après temps dehors' } },
      { icon: '🌿', title: { en: 'Tick Habitat', fr: 'Habitat de Tiques' }, description: { en: 'Tall grass, brush, wooded edges on property', fr: 'Hautes herbes, broussailles, lisières boisées sur la propriété' } },
      { icon: '🦌', title: { en: 'Wildlife Activity', fr: 'Activité de la Faune' }, description: { en: 'Deer and rodents frequenting your yard', fr: 'Cerfs et rongeurs fréquentant votre cour' } }
    ],
    prevention: [
      { icon: '👖', title: { en: 'Protective Clothing', fr: 'Vêtements Protecteurs' }, description: { en: 'Wear long pants tucked into socks, light colors', fr: 'Portez des pantalons longs rentrés dans les chaussettes, couleurs claires' } },
      { icon: '🧴', title: { en: 'Repellents', fr: 'Répulsifs' }, description: { en: 'Use DEET on skin, permethrin on clothing', fr: 'Utilisez du DEET sur la peau, de la perméthrine sur les vêtements' } },
      { icon: '🔍', title: { en: 'Tick Checks', fr: 'Vérifications de Tiques' }, description: { en: 'Check body thoroughly after outdoor activities', fr: 'Vérifiez le corps entièrement après les activités extérieures' } },
      { icon: '🚿', title: { en: 'Shower After', fr: 'Douche Après' }, description: { en: 'Shower within 2 hours of coming indoors', fr: 'Douchez-vous dans les 2 heures suivant le retour à l\'intérieur' } },
      { icon: '🌿', title: { en: 'Yard Maintenance', fr: 'Entretien de la Cour' }, description: { en: 'Keep grass short, remove leaf litter, create barriers', fr: 'Gardez l\'herbe courte, enlevez les feuilles, créez des barrières' } },
      { icon: '🐕', title: { en: 'Pet Protection', fr: 'Protection des Animaux' }, description: { en: 'Use veterinarian-recommended tick prevention for pets', fr: 'Utilisez une prévention anti-tiques recommandée par le vétérinaire' } }
    ],
    faqs: [
      { question: { en: 'How do I remove a tick properly?', fr: 'Comment retirer une tique correctement?' }, answer: { en: 'Use fine-tipped tweezers to grasp the tick as close to skin as possible. Pull upward with steady pressure. Clean the area and save the tick for identification if needed.', fr: 'Utilisez des pinces à pointe fine pour saisir la tique le plus près possible de la peau. Tirez vers le haut avec une pression constante. Nettoyez la zone et gardez la tique pour identification si nécessaire.' } },
      { question: { en: 'Is Lyme disease a concern in Quebec?', fr: 'La maladie de Lyme est-elle une préoccupation au Québec?' }, answer: { en: 'Yes, Lyme disease cases have increased significantly in Quebec. The Montérégie, Estrie, and Outaouais regions have established blacklegged tick populations.', fr: 'Oui, les cas de maladie de Lyme ont considérablement augmenté au Québec. Les régions de la Montérégie, de l\'Estrie et de l\'Outaouais ont des populations établies de tiques à pattes noires.' } },
      { question: { en: 'When are ticks most active?', fr: 'Quand les tiques sont-elles les plus actives?' }, answer: { en: 'Nymphs are most active May-July and are most likely to transmit disease. Adults are active spring and fall. Ticks can be active any time temperatures are above 4°C.', fr: 'Les nymphes sont plus actives de mai à juillet et sont les plus susceptibles de transmettre des maladies. Les adultes sont actives au printemps et à l\'automne. Les tiques peuvent être actives quand la température dépasse 4°C.' } },
      { question: { en: 'Can professional treatment reduce ticks in my yard?', fr: 'Un traitement professionnel peut-il réduire les tiques dans ma cour?' }, answer: { en: 'Yes, professional yard treatments can significantly reduce tick populations. Combined with habitat modification (removing leaf litter, keeping grass short), this provides effective protection.', fr: 'Oui, les traitements professionnels de cour peuvent réduire significativement les populations de tiques. Combiné à la modification de l\'habitat, cela offre une protection efficace.' } }
    ]
  },
  'hornets': {
    slug: 'hornets',
    title: { en: 'Hornets', fr: 'Frelons' },
    description: {
      en: 'Complete guide on hornets in Montreal. Learn to identify hornets vs wasps, understand their behavior, nest removal safety, and professional extermination services.',
      fr: "Guide complet sur les frelons à Montréal. Apprenez à identifier les frelons vs guêpes, comprendre leur comportement, la sécurité du retrait de nid et les services d'extermination professionnels."
    },
    heroLead: {
      en: 'Hornets are large, aggressive stinging insects that can deliver painful stings and attack in swarms when their nest is threatened. Their stings are more painful than wasps and can be dangerous for allergic individuals.',
      fr: "Les frelons sont de gros insectes piqueurs agressifs qui peuvent infliger des piqûres douloureuses et attaquer en essaim lorsque leur nid est menacé. Leurs piqûres sont plus douloureuses que celles des guêpes et peuvent être dangereuses pour les personnes allergiques."
    },
    image: '/images/hornets.jpg',
    imageAlt: { en: 'Hornet on nest', fr: 'Frelon sur nid' },
    imageCaption: { en: 'European hornet (Vespa crabro) - 25-35mm', fr: 'Frelon européen (Vespa crabro) - 25-35mm' },
    metaKeywords: 'hornets Montreal, hornet nest removal, hornet extermination, hornet vs wasp, stinging insects',
    identification: [
      { en: 'Large size: 25-35mm (larger than wasps)', fr: 'Grande taille: 25-35mm (plus grands que les guêpes)' },
      { en: 'Brown and yellow/orange coloring', fr: 'Coloration brune et jaune/orange' },
      { en: 'Thick waist (vs thin waist of wasps)', fr: 'Taille épaisse (vs taille fine des guêpes)' },
      { en: 'Large, paper nests often in trees or structures', fr: 'Grands nids de papier souvent dans les arbres ou structures' },
      { en: 'Loud buzzing sound when flying', fr: 'Bourdonnement fort en volant' },
      { en: 'More aggressive than typical wasps', fr: 'Plus agressifs que les guêpes typiques' }
    ],
    lifecycle: [
      { icon: '👑', title: { en: 'Queen Emerges', fr: 'Émergence de la Reine' }, description: { en: 'Fertilized queen emerges in spring, starts new colony alone.', fr: 'La reine fécondée émerge au printemps, commence une nouvelle colonie seule.' } },
      { icon: '🏗️', title: { en: 'Nest Building', fr: 'Construction du Nid' }, description: { en: 'Queen builds initial cells, lays eggs, raises first workers.', fr: 'La reine construit les premières cellules, pond des œufs, élève les premiers ouvriers.' } },
      { icon: '📈', title: { en: 'Colony Growth', fr: 'Croissance de la Colonie' }, description: { en: 'Workers take over nest building. Colony reaches 400-700 hornets.', fr: 'Les ouvriers prennent en charge la construction. La colonie atteint 400-700 frelons.' } },
      { icon: '❄️', title: { en: 'Colony Death', fr: 'Mort de la Colonie' }, description: { en: 'Only new queens survive winter. Old colony dies in fall.', fr: 'Seules les nouvelles reines survivent à l\'hiver. L\'ancienne colonie meurt à l\'automne.' } }
    ],
    behaviour: [
      { en: 'Highly defensive of nest - attack in swarms', fr: 'Très défensifs de leur nid - attaquent en essaim' },
      { en: 'Can sting multiple times (unlike bees)', fr: 'Peuvent piquer plusieurs fois (contrairement aux abeilles)' },
      { en: 'Hunt other insects including bees', fr: 'Chassent d\'autres insectes, y compris les abeilles' },
      { en: 'Attracted to light at night', fr: 'Attirés par la lumière la nuit' },
      { en: 'Most aggressive in late summer/fall', fr: 'Plus agressifs en fin d\'été/automne' }
    ],
    healthRisks: [
      { en: 'Painful stings with more venom than wasps', fr: 'Piqûres douloureuses avec plus de venin que les guêpes' },
      { en: 'Severe allergic reactions (anaphylaxis)', fr: 'Réactions allergiques sévères (anaphylaxie)' },
      { en: 'Multiple stings can be dangerous even without allergy', fr: 'Les piqûres multiples peuvent être dangereuses même sans allergie' },
      { en: 'Swarm attacks can be life-threatening', fr: 'Les attaques en essaim peuvent être mortelles' },
      { en: 'Stings near airways are medical emergencies', fr: 'Les piqûres près des voies respiratoires sont des urgences médicales' }
    ],
    hideSpots: [
      { en: 'Tree branches and hollow trees', fr: 'Branches d\'arbres et arbres creux' },
      { en: 'Under eaves and roof overhangs', fr: 'Sous les avant-toits et surplombs de toit' },
      { en: 'In attics and wall voids', fr: 'Dans les greniers et cavités murales' },
      { en: 'Inside sheds and outbuildings', fr: 'À l\'intérieur des remises et dépendances' },
      { en: 'Underground in abandoned burrows', fr: 'Sous terre dans des terriers abandonnés' },
      { en: 'Behind exterior shutters and siding', fr: 'Derrière les volets extérieurs et le revêtement' }
    ],
    signs: [
      { icon: '🐝', title: { en: 'Hornet Sightings', fr: 'Observations de Frelons' }, description: { en: 'Seeing large hornets regularly around your property', fr: 'Voir régulièrement de gros frelons autour de votre propriété' } },
      { icon: '🪺', title: { en: 'Paper Nest', fr: 'Nid de Papier' }, description: { en: 'Large, gray, football-shaped paper nest', fr: 'Grand nid de papier gris en forme de ballon de football' } },
      { icon: '🔊', title: { en: 'Buzzing Sounds', fr: 'Bourdonnements' }, description: { en: 'Loud buzzing from walls, trees, or structures', fr: 'Bourdonnement fort venant des murs, arbres ou structures' } },
      { icon: '✈️', title: { en: 'Flight Patterns', fr: 'Trajectoires de Vol' }, description: { en: 'Hornets flying to and from a specific location', fr: 'Frelons volant vers et depuis un endroit spécifique' } },
      { icon: '🌙', title: { en: 'Night Activity', fr: 'Activité Nocturne' }, description: { en: 'Hornets attracted to lights at night', fr: 'Frelons attirés par les lumières la nuit' } },
      { icon: '⚠️', title: { en: 'Aggressive Behavior', fr: 'Comportement Agressif' }, description: { en: 'Hornets approaching or following people', fr: 'Frelons s\'approchant ou suivant les gens' } }
    ],
    prevention: [
      { icon: '🔍', title: { en: 'Early Detection', fr: 'Détection Précoce' }, description: { en: 'Check for small nests in spring when easier to remove', fr: 'Vérifiez les petits nids au printemps quand ils sont plus faciles à enlever' } },
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: 'Sceller les Points d\'Entrée' }, description: { en: 'Close gaps in siding, soffits, and around utilities', fr: 'Fermez les espaces dans le revêtement, les soffites et autour des utilités' } },
      { icon: '🗑️', title: { en: 'Garbage Management', fr: 'Gestion des Déchets' }, description: { en: 'Keep garbage sealed, clean up fallen fruit', fr: 'Gardez les poubelles fermées, ramassez les fruits tombés' } },
      { icon: '🍖', title: { en: 'Food Protection', fr: 'Protection de la Nourriture' }, description: { en: 'Cover food at outdoor events', fr: 'Couvrez la nourriture lors des événements extérieurs' } },
      { icon: '💡', title: { en: 'Light Management', fr: 'Gestion de l\'Éclairage' }, description: { en: 'Use yellow bulbs or sodium vapor lights outdoors', fr: 'Utilisez des ampoules jaunes ou des lampes à vapeur de sodium à l\'extérieur' } },
      { icon: '⚠️', title: { en: 'Professional Removal', fr: 'Retrait Professionnel' }, description: { en: 'Never attempt to remove hornet nests yourself', fr: 'N\'essayez jamais de retirer les nids de frelons vous-même' } }
    ],
    faqs: [
      { question: { en: 'What\'s the difference between hornets and wasps?', fr: 'Quelle est la différence entre les frelons et les guêpes?' }, answer: { en: 'Hornets are larger (25-35mm vs 10-15mm for wasps), have thicker bodies, are brown/orange colored, and are generally more aggressive. Their stings contain more venom.', fr: 'Les frelons sont plus grands (25-35mm vs 10-15mm pour les guêpes), ont des corps plus épais, sont de couleur brune/orange et sont généralement plus agressifs. Leurs piqûres contiennent plus de venin.' } },
      { question: { en: 'Are hornet stings dangerous?', fr: 'Les piqûres de frelons sont-elles dangereuses?' }, answer: { en: 'Hornet stings are more painful and contain more venom than wasp stings. They\'re dangerous for allergic individuals and multiple stings can be serious for anyone. Seek medical attention if stung multiple times or if you have difficulty breathing.', fr: 'Les piqûres de frelons sont plus douloureuses et contiennent plus de venin que les piqûres de guêpes. Elles sont dangereuses pour les personnes allergiques et les piqûres multiples peuvent être graves pour n\'importe qui.' } },
      { question: { en: 'Should I remove a hornet nest myself?', fr: 'Devrais-je retirer un nid de frelons moi-même?' }, answer: { en: 'No. Hornet nest removal is dangerous and should only be done by professionals with proper equipment. Hornets will swarm attack when their nest is disturbed.', fr: 'Non. Le retrait d\'un nid de frelons est dangereux et ne devrait être fait que par des professionnels avec l\'équipement approprié. Les frelons attaquent en essaim quand leur nid est dérangé.' } },
      { question: { en: 'When is the best time to remove hornet nests?', fr: 'Quel est le meilleur moment pour retirer les nids de frelons?' }, answer: { en: 'Early spring when nests are small and colonies are just starting, or at night when hornets are less active. However, professional removal is always recommended.', fr: 'Au début du printemps quand les nids sont petits et les colonies commencent, ou la nuit quand les frelons sont moins actifs. Cependant, le retrait professionnel est toujours recommandé.' } }
    ]
  },
  'house-flies': {
    slug: 'house-flies',
    title: { en: 'House Flies', fr: 'Mouches domestiques' },
    description: {
      en: 'Complete guide on house flies in Montreal. Learn about fly behavior, disease transmission risks, sanitation solutions, and professional fly control services.',
      fr: "Guide complet sur les mouches domestiques à Montréal. Découvrez le comportement des mouches, les risques de transmission de maladies, les solutions d'assainissement et les services professionnels de contrôle."
    },
    heroLead: {
      en: 'House flies are one of the most common pests worldwide. They breed in garbage and organic waste, spread disease-causing pathogens, and can quickly become a major nuisance in homes and businesses.',
      fr: "Les mouches domestiques sont l'un des nuisibles les plus communs au monde. Elles se reproduisent dans les ordures et les déchets organiques, propagent des agents pathogènes et peuvent rapidement devenir une nuisance majeure dans les maisons et les entreprises."
    },
    image: '/images/house-flies.jpg',
    imageAlt: { en: 'House fly close-up', fr: 'Mouche domestique en gros plan' },
    imageCaption: { en: 'House fly (Musca domestica) - 6-7mm', fr: 'Mouche domestique (Musca domestica) - 6-7mm' },
    metaKeywords: 'house flies Montreal, fly control, fly extermination, disease transmission flies, sanitation pests',
    identification: [
      { en: 'Gray body with four dark stripes on thorax', fr: 'Corps gris avec quatre rayures foncées sur le thorax' },
      { en: 'Size: 6-7mm in length', fr: 'Taille: 6-7mm de longueur' },
      { en: 'Large, red compound eyes', fr: 'Grands yeux composés rouges' },
      { en: 'Single pair of wings (unlike most flying insects)', fr: 'Une seule paire d\'ailes (contrairement à la plupart des insectes volants)' },
      { en: 'Sponging mouthparts (cannot bite)', fr: 'Pièces buccales en éponge (ne peuvent pas mordre)' },
      { en: 'Erratic, buzzing flight pattern', fr: 'Vol erratique et bourdonnant' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 75-150 eggs at a time in organic matter. Hatch in 12-24 hours.', fr: 'La femelle pond 75-150 œufs à la fois dans la matière organique. Éclosent en 12-24 heures.' } },
      { icon: '🐛', title: { en: 'Larvae (Maggots)', fr: 'Larves (Asticots)' }, description: { en: 'White, legless maggots feed on organic waste. 3-5 days.', fr: 'Asticots blancs sans pattes se nourrissent de déchets organiques. 3-5 jours.' } },
      { icon: '🫛', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: 'Develop inside dark brown cases. 3-6 days.', fr: 'Se développent dans des coques brun foncé. 3-6 jours.' } },
      { icon: '🪰', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 15-30 days. Female can lay 500+ eggs in lifetime.', fr: 'Vivent 15-30 jours. La femelle peut pondre plus de 500 œufs dans sa vie.' } }
    ],
    behaviour: [
      { en: 'Feed by regurgitating digestive fluids onto food', fr: 'Se nourrissent en régurgitant des fluides digestifs sur la nourriture' },
      { en: 'Defecate every few minutes', fr: 'Défèquent toutes les quelques minutes' },
      { en: 'Attracted to food odors, garbage, and waste', fr: 'Attirées par les odeurs de nourriture, ordures et déchets' },
      { en: 'Rest on ceilings, walls, and wires at night', fr: 'Se reposent sur les plafonds, murs et fils la nuit' },
      { en: 'Most active on warm, sunny days', fr: 'Plus actives les jours chauds et ensoleillés' }
    ],
    healthRisks: [
      { en: 'Carry 100+ pathogens on body and in gut', fr: 'Transportent plus de 100 pathogènes sur le corps et dans l\'intestin' },
      { en: 'Spread Salmonella, E. coli, Shigella', fr: 'Propagent Salmonella, E. coli, Shigella' },
      { en: 'Transmit typhoid fever and cholera', fr: 'Transmettent la fièvre typhoïde et le choléra' },
      { en: 'Cause food poisoning and diarrheal diseases', fr: 'Causent des intoxications alimentaires et des maladies diarrhéiques' },
      { en: 'Can transmit parasitic worms', fr: 'Peuvent transmettre des vers parasites' }
    ],
    hideSpots: [
      { en: 'Garbage cans and dumpsters', fr: 'Poubelles et bennes à ordures' },
      { en: 'Compost piles and organic waste', fr: 'Tas de compost et déchets organiques' },
      { en: 'Animal waste and manure', fr: 'Déjections animales et fumier' },
      { en: 'Rotting food and spills', fr: 'Nourriture pourrie et déversements' },
      { en: 'Dirty drains and sewage', fr: 'Drains sales et égouts' },
      { en: 'Pet food and litter areas', fr: 'Nourriture pour animaux et zones de litière' }
    ],
    signs: [
      { icon: '🪰', title: { en: 'Adult Flies', fr: 'Mouches Adultes' }, description: { en: 'Seeing flies buzzing around, especially near food or waste', fr: 'Voir des mouches bourdonner, surtout près de la nourriture ou des déchets' } },
      { icon: '🐛', title: { en: 'Maggots', fr: 'Asticots' }, description: { en: 'White larvae in garbage or organic waste', fr: 'Larves blanches dans les ordures ou déchets organiques' } },
      { icon: '💩', title: { en: 'Fecal Spots', fr: 'Taches Fécales' }, description: { en: 'Small dark spots on surfaces where flies rest', fr: 'Petites taches sombres sur les surfaces où les mouches se reposent' } },
      { icon: '🔊', title: { en: 'Buzzing', fr: 'Bourdonnement' }, description: { en: 'Constant buzzing sound from multiple flies', fr: 'Bourdonnement constant de plusieurs mouches' } },
      { icon: '🗑️', title: { en: 'Breeding Sites', fr: 'Sites de Reproduction' }, description: { en: 'Dirty garbage areas, compost, or organic buildup', fr: 'Zones de poubelles sales, compost ou accumulation organique' } },
      { icon: '🍽️', title: { en: 'Food Contamination', fr: 'Contamination Alimentaire' }, description: { en: 'Flies landing on food and food prep surfaces', fr: 'Mouches atterrissant sur la nourriture et surfaces de préparation' } }
    ],
    prevention: [
      { icon: '🗑️', title: { en: 'Waste Management', fr: 'Gestion des Déchets' }, description: { en: 'Use sealed garbage containers, empty frequently', fr: 'Utilisez des poubelles fermées, videz fréquemment' } },
      { icon: '🧹', title: { en: 'Sanitation', fr: 'Assainissement' }, description: { en: 'Clean up spills immediately, keep areas clean', fr: 'Nettoyez les déversements immédiatement, gardez les zones propres' } },
      { icon: '🪟', title: { en: 'Screens', fr: 'Moustiquaires' }, description: { en: 'Install and maintain window and door screens', fr: 'Installez et maintenez les moustiquaires aux fenêtres et portes' } },
      { icon: '🍎', title: { en: 'Food Storage', fr: 'Stockage Alimentaire' }, description: { en: 'Cover food, refrigerate produce promptly', fr: 'Couvrez la nourriture, réfrigérez les produits rapidement' } },
      { icon: '🐕', title: { en: 'Pet Waste', fr: 'Déchets d\'Animaux' }, description: { en: 'Clean up pet waste immediately', fr: 'Ramassez les déjections d\'animaux immédiatement' } },
      { icon: '🚰', title: { en: 'Drain Cleaning', fr: 'Nettoyage des Drains' }, description: { en: 'Keep drains clean and free of organic buildup', fr: 'Gardez les drains propres et sans accumulation organique' } }
    ],
    faqs: [
      { question: { en: 'Why are there so many flies in my house?', fr: 'Pourquoi y a-t-il tant de mouches dans ma maison?' }, answer: { en: 'Flies are attracted to food sources and breeding sites. Check for exposed garbage, dirty drains, pet waste, or rotting produce. They can also enter through open doors and damaged screens.', fr: 'Les mouches sont attirées par les sources de nourriture et les sites de reproduction. Vérifiez les ordures exposées, drains sales, déjections d\'animaux ou produits pourris.' } },
      { question: { en: 'How do flies spread disease?', fr: 'Comment les mouches propagent-elles les maladies?' }, answer: { en: 'Flies feed on garbage, feces, and rotting material, picking up pathogens. They then land on food and surfaces, regurgitating digestive fluids and leaving fecal deposits that contaminate everything they touch.', fr: 'Les mouches se nourrissent d\'ordures, d\'excréments et de matière en décomposition, ramassant des pathogènes. Elles atterrissent ensuite sur la nourriture et les surfaces, régurgitant des fluides digestifs et laissant des dépôts fécaux.' } },
      { question: { en: 'Do fly traps and zappers work?', fr: 'Les pièges et zappers à mouches fonctionnent-ils?' }, answer: { en: 'Traps can help reduce fly populations but won\'t solve an infestation. The key is eliminating breeding sources through proper sanitation. Professional treatment may be needed for severe problems.', fr: 'Les pièges peuvent aider à réduire les populations de mouches mais ne résoudront pas une infestation. La clé est d\'éliminer les sources de reproduction par un assainissement approprié.' } },
      { question: { en: 'How fast do house flies reproduce?', fr: 'À quelle vitesse les mouches domestiques se reproduisent-elles?' }, answer: { en: 'Extremely fast. One female can lay 500+ eggs in her 30-day lifetime. Eggs hatch in 12-24 hours, and development from egg to adult takes only 7-10 days in warm conditions.', fr: 'Extrêmement vite. Une femelle peut pondre plus de 500 œufs en 30 jours de vie. Les œufs éclosent en 12-24 heures, et le développement de l\'œuf à l\'adulte ne prend que 7-10 jours dans des conditions chaudes.' } }
    ]
  },
  'drain-flies': {
    slug: 'drain-flies',
    title: { en: 'Drain Flies', fr: 'Mouches de drain' },
    description: {
      en: 'Complete guide on drain flies in Montreal. Learn to identify drain flies, understand their breeding habits in pipes, and effective elimination and prevention methods.',
      fr: "Guide complet sur les mouches de drain à Montréal. Apprenez à identifier les mouches de drain, comprendre leurs habitudes de reproduction dans les tuyaux et les méthodes efficaces d'élimination et de prévention."
    },
    heroLead: {
      en: 'Drain flies are small, fuzzy, moth-like flies that breed in the organic buildup inside drains and pipes. While harmless, they can quickly become a nuisance in bathrooms, kitchens, and basements.',
      fr: "Les mouches de drain sont de petites mouches duveteuses ressemblant à des mites qui se reproduisent dans l'accumulation organique à l'intérieur des drains et des tuyaux. Bien qu'inoffensives, elles peuvent rapidement devenir une nuisance dans les salles de bains, cuisines et sous-sols."
    },
    image: '/images/drain-flies.jpg',
    imageAlt: { en: 'Drain fly on surface', fr: 'Mouche de drain sur une surface' },
    imageCaption: { en: 'Drain fly (Psychodidae family) - 2-5mm', fr: 'Mouche de drain (famille Psychodidae) - 2-5mm' },
    metaKeywords: 'drain flies Montreal, sewer flies, moth flies, bathroom flies, drain fly control',
    identification: [
      { en: 'Small size: 2-5mm', fr: 'Petite taille: 2-5mm' },
      { en: 'Fuzzy, moth-like appearance', fr: 'Apparence duveteuse, ressemblant à une mite' },
      { en: 'Large, leaf-shaped wings held roof-like', fr: 'Grandes ailes en forme de feuille tenues comme un toit' },
      { en: 'Gray or tan color', fr: 'Couleur grise ou beige' },
      { en: 'Poor, short, hopping flight', fr: 'Vol faible, court et sautillant' },
      { en: 'Body covered in tiny hairs', fr: 'Corps couvert de minuscules poils' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Female lays 30-100 eggs in drain film. Hatch in 32-48 hours.', fr: 'La femelle pond 30-100 œufs dans le film du drain. Éclosent en 32-48 heures.' } },
      { icon: '🐛', title: { en: 'Larvae', fr: 'Larves' }, description: { en: 'Feed on bacteria, fungi in drain slime. 9-15 days.', fr: 'Se nourrissent de bactéries, champignons dans la boue du drain. 9-15 jours.' } },
      { icon: '🫛', title: { en: 'Pupae', fr: 'Pupes' }, description: { en: 'Pupate near water surface in drain. 20-40 hours.', fr: 'Se nymphosent près de la surface de l\'eau dans le drain. 20-40 heures.' } },
      { icon: '🪰', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Live 2-3 weeks. Don\'t travel far from breeding site.', fr: 'Vivent 2-3 semaines. Ne s\'éloignent pas du site de reproduction.' } }
    ],
    behaviour: [
      { en: 'Weak fliers - make short, hopping flights', fr: 'Mauvais voiliers - font de courts vols sautillants' },
      { en: 'Rest on walls and ceilings near drains', fr: 'Se reposent sur les murs et plafonds près des drains' },
      { en: 'Most active at night', fr: 'Plus actives la nuit' },
      { en: 'Attracted to light', fr: 'Attirées par la lumière' },
      { en: 'Don\'t bite or spread disease', fr: 'Ne mordent pas et ne propagent pas de maladies' }
    ],
    healthRisks: [
      { en: 'Generally harmless to humans', fr: 'Généralement inoffensives pour les humains' },
      { en: 'May trigger asthma in sensitive individuals', fr: 'Peuvent déclencher l\'asthme chez les personnes sensibles' },
      { en: 'Dead flies and debris can cause allergies', fr: 'Les mouches mortes et débris peuvent causer des allergies' },
      { en: 'Indicate drainage or plumbing issues', fr: 'Indiquent des problèmes de drainage ou de plomberie' },
      { en: 'Nuisance pest affecting quality of life', fr: 'Nuisible affectant la qualité de vie' }
    ],
    hideSpots: [
      { en: 'Bathroom sink and shower drains', fr: 'Drains d\'évier de salle de bain et de douche' },
      { en: 'Kitchen sink drains', fr: 'Drains d\'évier de cuisine' },
      { en: 'Floor drains in basements', fr: 'Drains de sol dans les sous-sols' },
      { en: 'Rarely used toilets and drains', fr: 'Toilettes et drains rarement utilisés' },
      { en: 'Sump pump pits', fr: 'Fosses de pompe de puisard' },
      { en: 'Air conditioning drain pans', fr: 'Bacs de récupération de climatisation' }
    ],
    signs: [
      { icon: '🪰', title: { en: 'Adult Flies', fr: 'Mouches Adultes' }, description: { en: 'Small, fuzzy flies on bathroom walls and ceilings', fr: 'Petites mouches duveteuses sur les murs et plafonds de salle de bain' } },
      { icon: '🚿', title: { en: 'Near Drains', fr: 'Près des Drains' }, description: { en: 'Flies emerging from or resting near drains', fr: 'Mouches émergeant ou se reposant près des drains' } },
      { icon: '🌙', title: { en: 'Night Activity', fr: 'Activité Nocturne' }, description: { en: 'More flies visible at night, attracted to lights', fr: 'Plus de mouches visibles la nuit, attirées par les lumières' } },
      { icon: '📈', title: { en: 'Increasing Numbers', fr: 'Nombres Croissants' }, description: { en: 'Population growing over days or weeks', fr: 'Population augmentant sur des jours ou semaines' } },
      { icon: '🧪', title: { en: 'Tape Test', fr: 'Test du Ruban' }, description: { en: 'Flies caught on tape placed over drain overnight', fr: 'Mouches prises sur du ruban placé sur le drain pendant la nuit' } },
      { icon: '👃', title: { en: 'Drain Odors', fr: 'Odeurs de Drain' }, description: { en: 'Musty or sewage smells from drains', fr: 'Odeurs de moisi ou d\'égout venant des drains' } }
    ],
    prevention: [
      { icon: '🚰', title: { en: 'Regular Drain Cleaning', fr: 'Nettoyage Régulier des Drains' }, description: { en: 'Clean drains weekly with brush and enzyme cleaners', fr: 'Nettoyez les drains chaque semaine avec une brosse et des nettoyants enzymatiques' } },
      { icon: '💧', title: { en: 'Run Water Regularly', fr: 'Faire Couler l\'Eau Régulièrement' }, description: { en: 'Flush unused drains weekly to prevent buildup', fr: 'Rincez les drains inutilisés chaque semaine pour prévenir l\'accumulation' } },
      { icon: '🔧', title: { en: 'Fix Leaks', fr: 'Réparer les Fuites' }, description: { en: 'Repair leaky pipes and fixtures promptly', fr: 'Réparez rapidement les tuyaux et robinets qui fuient' } },
      { icon: '🌬️', title: { en: 'Improve Ventilation', fr: 'Améliorer la Ventilation' }, description: { en: 'Use exhaust fans to reduce bathroom humidity', fr: 'Utilisez des ventilateurs d\'extraction pour réduire l\'humidité de la salle de bain' } },
      { icon: '🧹', title: { en: 'Clean Overflow Holes', fr: 'Nettoyer les Trous de Trop-plein' }, description: { en: 'Don\'t forget overflow holes in sinks and tubs', fr: 'N\'oubliez pas les trous de trop-plein dans les éviers et baignoires' } },
      { icon: '🔌', title: { en: 'Check AC Drains', fr: 'Vérifier les Drains de Climatisation' }, description: { en: 'Clean air conditioning condensate drains', fr: 'Nettoyez les drains de condensat de climatisation' } }
    ],
    faqs: [
      { question: { en: 'How do I know if I have drain flies?', fr: 'Comment savoir si j\'ai des mouches de drain?' }, answer: { en: 'Place a piece of clear tape over suspect drains overnight. If drain flies are breeding there, adults will get stuck to the tape when emerging. Also look for small, fuzzy, moth-like flies on bathroom walls.', fr: 'Placez un morceau de ruban transparent sur les drains suspects pendant la nuit. Si des mouches de drain s\'y reproduisent, les adultes resteront collés au ruban en émergeant.' } },
      { question: { en: 'Are drain flies harmful?', fr: 'Les mouches de drain sont-elles nuisibles?' }, answer: { en: 'Drain flies don\'t bite or transmit diseases. However, their body parts can trigger allergies and asthma in sensitive people. They\'re mainly a nuisance pest indicating plumbing issues.', fr: 'Les mouches de drain ne mordent pas et ne transmettent pas de maladies. Cependant, leurs parties corporelles peuvent déclencher des allergies et de l\'asthme chez les personnes sensibles.' } },
      { question: { en: 'Why do drain flies keep coming back?', fr: 'Pourquoi les mouches de drain reviennent-elles?' }, answer: { en: 'The organic buildup in your drains wasn\'t fully removed. Drain fly larvae live in the slime coating pipes. You need to physically clean the drain with a brush and use enzyme cleaners regularly.', fr: 'L\'accumulation organique dans vos drains n\'a pas été complètement éliminée. Les larves vivent dans la boue qui recouvre les tuyaux. Vous devez nettoyer physiquement le drain avec une brosse.' } },
      { question: { en: 'Will bleach kill drain flies?', fr: 'L\'eau de Javel tue-t-elle les mouches de drain?' }, answer: { en: 'Bleach may kill some adults but doesn\'t effectively remove the organic buildup where larvae live. Enzyme or bacterial drain cleaners work better as they digest the organic material.', fr: 'L\'eau de Javel peut tuer certains adultes mais n\'élimine pas efficacement l\'accumulation organique où vivent les larves. Les nettoyants enzymatiques ou bactériens fonctionnent mieux.' } }
    ]
  },
  'boxelder-bugs': {
    slug: 'boxelder-bugs',
    title: { en: 'Boxelder Bugs', fr: 'Punaises de l\'érable' },
    description: {
      en: 'Complete guide on boxelder bugs in Montreal. Learn to identify these seasonal invaders, understand their fall invasion behavior, and prevention methods.',
      fr: "Guide complet sur les punaises de l'érable à Montréal. Apprenez à identifier ces envahisseurs saisonniers, comprendre leur comportement d'invasion automnale et les méthodes de prévention."
    },
    heroLead: {
      en: 'Boxelder bugs are harmless but annoying seasonal invaders that congregate on sunny walls in fall seeking winter shelter. They enter homes through cracks and can become a significant nuisance in large numbers.',
      fr: "Les punaises de l'érable sont des envahisseurs saisonniers inoffensifs mais ennuyeux qui se rassemblent sur les murs ensoleillés à l'automne pour chercher un abri d'hiver. Elles entrent dans les maisons par les fissures et peuvent devenir une nuisance importante en grand nombre."
    },
    image: '/images/boxelder-bugs.jpg',
    imageAlt: { en: 'Boxelder bug on surface', fr: 'Punaise de l\'érable sur une surface' },
    imageCaption: { en: 'Boxelder bug (Boisea trivittata) - 11-14mm', fr: 'Punaise de l\'érable (Boisea trivittata) - 11-14mm' },
    metaKeywords: 'boxelder bugs Montreal, fall invaders, seasonal pests, boxelder bug control, overwintering insects',
    identification: [
      { en: 'Elongated oval body: 11-14mm', fr: 'Corps ovale allongé: 11-14mm' },
      { en: 'Black with red-orange markings', fr: 'Noir avec des marques rouge-orange' },
      { en: 'Three red lines on thorax', fr: 'Trois lignes rouges sur le thorax' },
      { en: 'Red veins on wing edges', fr: 'Veines rouges sur les bords des ailes' },
      { en: 'Nymphs are bright red', fr: 'Les nymphes sont rouge vif' },
      { en: 'Often seen in large groups', fr: 'Souvent vues en grands groupes' }
    ],
    lifecycle: [
      { icon: '🥚', title: { en: 'Eggs', fr: 'Œufs' }, description: { en: 'Laid in bark crevices and on leaves in spring. Hatch in 10-14 days.', fr: 'Pondus dans les crevasses d\'écorce et sur les feuilles au printemps. Éclosent en 10-14 jours.' } },
      { icon: '🐛', title: { en: 'Nymphs', fr: 'Nymphes' }, description: { en: 'Bright red, wingless. Feed on boxelder seeds. 5 molts over summer.', fr: 'Rouge vif, sans ailes. Se nourrissent de graines d\'érable. 5 mues pendant l\'été.' } },
      { icon: '🪲', title: { en: 'Adults', fr: 'Adultes' }, description: { en: 'Develop by late summer. Seek shelter in fall.', fr: 'Se développent en fin d\'été. Cherchent un abri à l\'automne.' } },
      { icon: '❄️', title: { en: 'Overwintering', fr: 'Hivernage' }, description: { en: 'Adults hibernate in walls and buildings. Emerge in spring.', fr: 'Les adultes hibernent dans les murs et bâtiments. Émergent au printemps.' } }
    ],
    behaviour: [
      { en: 'Congregate on sunny, south-facing walls in fall', fr: 'Se rassemblent sur les murs ensoleillés orientés sud à l\'automne' },
      { en: 'Enter structures through cracks seeking warmth', fr: 'Entrent dans les structures par les fissures pour chercher la chaleur' },
      { en: 'Feed primarily on boxelder and maple seeds', fr: 'Se nourrissent principalement de graines d\'érable négondo et d\'érable' },
      { en: 'Become active on warm winter days indoors', fr: 'Deviennent actives les jours d\'hiver chauds à l\'intérieur' },
      { en: 'Release unpleasant odor when crushed', fr: 'Dégagent une odeur désagréable lorsqu\'écrasées' }
    ],
    healthRisks: [
      { en: 'Do not bite or sting', fr: 'Ne mordent pas et ne piquent pas' },
      { en: 'Do not transmit diseases', fr: 'Ne transmettent pas de maladies' },
      { en: 'Do not damage structures or food', fr: 'N\'endommagent pas les structures ni la nourriture' },
      { en: 'Fecal spots can stain surfaces', fr: 'Les taches fécales peuvent tacher les surfaces' },
      { en: 'Unpleasant odor when crushed', fr: 'Odeur désagréable lorsqu\'écrasées' }
    ],
    hideSpots: [
      { en: 'Wall voids and attics', fr: 'Cavités murales et greniers' },
      { en: 'Behind siding and shutters', fr: 'Derrière le revêtement et les volets' },
      { en: 'Around window and door frames', fr: 'Autour des cadres de fenêtres et portes' },
      { en: 'In cracks and crevices of foundations', fr: 'Dans les fissures et crevasses des fondations' },
      { en: 'Near boxelder and maple trees', fr: 'Près des érables négondo et des érables' },
      { en: 'On sunny exterior walls in fall', fr: 'Sur les murs extérieurs ensoleillés à l\'automne' }
    ],
    signs: [
      { icon: '🪲', title: { en: 'Aggregations', fr: 'Rassemblements' }, description: { en: 'Large groups on sunny walls in fall', fr: 'Grands groupes sur les murs ensoleillés à l\'automne' } },
      { icon: '🏠', title: { en: 'Indoor Sightings', fr: 'Observations Intérieures' }, description: { en: 'Bugs appearing indoors on warm winter days', fr: 'Punaises apparaissant à l\'intérieur les jours d\'hiver chauds' } },
      { icon: '🌡️', title: { en: 'Warm Day Activity', fr: 'Activité par Temps Chaud' }, description: { en: 'Bugs becoming active when temperatures rise', fr: 'Punaises devenant actives quand les températures montent' } },
      { icon: '💩', title: { en: 'Fecal Staining', fr: 'Taches Fécales' }, description: { en: 'Reddish-brown stains on curtains, walls', fr: 'Taches brun-rougeâtre sur les rideaux, murs' } },
      { icon: '👃', title: { en: 'Odor', fr: 'Odeur' }, description: { en: 'Unpleasant smell when bugs are disturbed or crushed', fr: 'Odeur désagréable quand les punaises sont dérangées ou écrasées' } },
      { icon: '🌳', title: { en: 'Nearby Trees', fr: 'Arbres à Proximité' }, description: { en: 'Boxelder or maple trees on or near property', fr: 'Érables négondo ou érables sur ou près de la propriété' } }
    ],
    prevention: [
      { icon: '🚪', title: { en: 'Seal Entry Points', fr: 'Sceller les Points d\'Entrée' }, description: { en: 'Caulk cracks around windows, doors, foundations', fr: 'Calfeutrez les fissures autour des fenêtres, portes, fondations' } },
      { icon: '🪟', title: { en: 'Screen Repairs', fr: 'Réparation des Moustiquaires' }, description: { en: 'Fix or replace damaged window screens', fr: 'Réparez ou remplacez les moustiquaires endommagées' } },
      { icon: '🏠', title: { en: 'Weatherstripping', fr: 'Coupe-froid' }, description: { en: 'Install door sweeps and weatherstripping', fr: 'Installez des bas de porte et des coupe-froid' } },
      { icon: '🌳', title: { en: 'Tree Management', fr: 'Gestion des Arbres' }, description: { en: 'Consider removing female boxelder trees', fr: 'Envisagez de retirer les érables négondo femelles' } },
      { icon: '🧹', title: { en: 'Vacuum', fr: 'Aspirer' }, description: { en: 'Vacuum bugs rather than crushing (prevents odor)', fr: 'Aspirez les punaises plutôt que de les écraser (prévient l\'odeur)' } },
      { icon: '💧', title: { en: 'Exterior Treatment', fr: 'Traitement Extérieur' }, description: { en: 'Professional perimeter treatment in early fall', fr: 'Traitement professionnel du périmètre au début de l\'automne' } }
    ],
    faqs: [
      { question: { en: 'Are boxelder bugs harmful?', fr: 'Les punaises de l\'érable sont-elles nuisibles?' }, answer: { en: 'Boxelder bugs are harmless. They don\'t bite, sting, transmit diseases, or damage structures. Their feces can stain light-colored surfaces, and they release an unpleasant odor when crushed.', fr: 'Les punaises de l\'érable sont inoffensives. Elles ne mordent pas, ne piquent pas, ne transmettent pas de maladies et n\'endommagent pas les structures. Leurs excréments peuvent tacher les surfaces claires.' } },
      { question: { en: 'Why are there so many boxelder bugs on my house?', fr: 'Pourquoi y a-t-il tant de punaises de l\'érable sur ma maison?' }, answer: { en: 'In fall, boxelder bugs congregate on sun-warmed surfaces seeking shelter for winter. South and west-facing walls are especially attractive. Nearby boxelder or maple trees provide their food source.', fr: 'À l\'automne, les punaises de l\'érable se rassemblent sur les surfaces chauffées par le soleil pour chercher un abri pour l\'hiver. Les murs orientés sud et ouest sont particulièrement attractifs.' } },
      { question: { en: 'How do I get rid of boxelder bugs inside my home?', fr: 'Comment me débarrasser des punaises de l\'érable dans ma maison?' }, answer: { en: 'Vacuum them up (don\'t crush them - they smell). Seal entry points to prevent more from entering. For severe infestations, professional treatment of the exterior walls in fall is most effective.', fr: 'Aspirez-les (ne les écrasez pas - elles sentent mauvais). Scellez les points d\'entrée pour empêcher d\'autres d\'entrer. Pour les infestations graves, un traitement professionnel des murs extérieurs à l\'automne est le plus efficace.' } },
      { question: { en: 'When is the best time to treat for boxelder bugs?', fr: 'Quel est le meilleur moment pour traiter les punaises de l\'érable?' }, answer: { en: 'Early fall, before they enter structures, is the best time for professional perimeter treatments. Sealing entry points before September is also important for prevention.', fr: 'Le début de l\'automne, avant qu\'elles n\'entrent dans les structures, est le meilleur moment pour les traitements professionnels du périmètre. Sceller les points d\'entrée avant septembre est également important.' } }
    ]
  }
};
