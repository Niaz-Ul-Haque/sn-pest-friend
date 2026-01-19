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
  }
};
