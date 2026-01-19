'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './quote-calculator.module.css';

// Types
type Language = 'en' | 'fr' | 'es' | 'zh' | 'it' | 'fa' | 'ar';
type Severity = 'low' | 'medium' | 'high' | 'no-idea';
type PropertyType = 'apartment' | 'townhouse' | 'detached-small' | 'detached-large' | 'commercial';
type ServiceFrequency = 'one-time' | 'seasonal' | 'monthly';
type ProtectionPlan = 'none' | '4-month' | '6-month' | '1-year';

interface FormData {
  address: string;
  phone: string;
  propertyType: PropertyType | '';
  serviceFrequency: ServiceFrequency | '';
  protectionPlan: ProtectionPlan;
}

interface SelectedService {
  severity: Severity;
}

// Pricing data
const pricing: Record<PropertyType, Record<string, number>> = {
  apartment: {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 150, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  townhouse: {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 200, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  'detached-small': {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 250, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  'detached-large': {
    mice: 120, rats: 120, ants: 120, spiders: 100, cockroaches: 120,
    wasps: 150, bedbugs: 250, fleas: 120, silverfish: 100, earwigs: 100,
    centipedes: 100, 'carpenter-ants': 120, 'fruit-flies': 100,
    'rodent-family': 220, 'crawling-defense': 280, 'general-guard': 240,
  },
  commercial: {
    mice: 80, rats: 80, ants: 69, spiders: 69, cockroaches: 80,
    wasps: 100, bedbugs: 100, fleas: 80, silverfish: 69, earwigs: 69,
    centipedes: 69, 'carpenter-ants': 80, 'fruit-flies': 69,
    'rodent-family': 150, 'crawling-defense': 180, 'general-guard': 160,
  },
};

const packages: Record<string, string[]> = {
  'rodent-family': ['mice', 'rats'],
  'crawling-defense': ['ants', 'spiders', 'cockroaches'],
  'general-guard': ['ants', 'spiders', 'mice'],
};

const severityMultipliers: Record<Severity, number> = {
  low: 1.0,
  medium: 1.2,
  high: 1.5,
  'no-idea': 1.25,
};

const protectionPlanPricing: Record<ProtectionPlan, number> = {
  none: 0,
  '4-month': 40,
  '6-month': 50,
  '1-year': 60,
};

// Translations
const translations = {
  planInfo: {
    seasonal: {
      en: "Great choice! You'll receive a 20% discount on your total service cost, billed quarterly. Proceed to select the pests for your plan.",
      fr: "Excellent choix! Vous recevrez une remise de 20% sur le coût total de votre service, facturé trimestriellement. Procédez à la sélection des nuisibles pour votre plan.",
      es: "¡Excelente elección! Recibirá un 20% de descuento en el costo total de su servicio, facturado trimestralmente. Proceda a seleccionar las plagas para su plan.",
      zh: "很好的选择！您将获得总服务费用20%的折扣，按季度计费。请继续为您的计划选择害虫。",
      it: "Ottima scelta! Riceverai uno sconto del 20% sul costo totale del servizio, fatturato trimestralmente. Procedi a selezionare i parassiti per il tuo piano.",
      fa: "انتخاب عالی! شما 20% تخفیف از کل هزینه خدمات دریافت خواهید کرد که سه ماهه صورتحساب می‌شود. برای انتخاب آفات برنامه خود ادامه دهید.",
      ar: "اختيار ممتاز! ستحصل على خصم 20% من إجمالي تكلفة الخدمة، يتم إصدار فاتورة بها ربع سنوياً. تابع لاختيار الآفات لخطتك.",
    },
    monthly: {
      en: "Our best value! You'll receive a 30% discount on your total service cost, billed monthly. Proceed to select the pests for your plan.",
      fr: "Notre meilleure valeur! Vous recevrez une remise de 30% sur le coût total de votre service, facturé mensuellement. Procédez à la sélection des nuisibles pour votre plan.",
      es: "¡Nuestro mejor valor! Recibirá un 30% de descuento en el costo total de su servicio, facturado mensualmente. Proceda a seleccionar las plagas para su plan.",
      zh: "我们最超值的选择！您将获得总服务费用30%的折扣，按月计费。请继续为您的计划选择害虫。",
      it: "Il nostro miglior valore! Riceverai uno sconto del 30% sul costo totale del servizio, fatturato mensilmente. Procedi a selezionare i parassiti per il tuo piano.",
      fa: "بهترین ارزش ما! شما 30% تخفیف از کل هزینه خدمات دریافت خواهید کرد که ماهانه صورتحساب می‌شود. برای انتخاب آفات برنامه خود ادامه دهید.",
      ar: "أفضل قيمة لدينا! ستحصل على خصم 30% من إجمالي تكلفة الخدمة، يتم إصدار فاتورة بها شهرياً. تابع لاختيار الآفات لخطتك.",
    },
  },
  quote: {
    noSelection: {
      en: "Please select at least one service or package from Step 2.",
      fr: "Veuillez sélectionner au moins un service ou forfait à l'étape 2.",
      es: "Por favor seleccione al menos un servicio o paquete del Paso 2.",
      zh: "请从步骤2中至少选择一项服务或套餐。",
      it: "Seleziona almeno un servizio o pacchetto dal Passo 2.",
      fa: "لطفاً حداقل یک خدمات یا بسته از مرحله 2 را انتخاب کنید.",
      ar: "يرجى اختيار خدمة أو حزمة واحدة على الأقل من الخطوة 2.",
    },
    basePrice: { en: "Base price", fr: "Prix de base", es: "Precio base", zh: "基础价格", it: "Prezzo base", fa: "قیمت پایه", ar: "السعر الأساسي" },
    severity: { en: "severity", fr: "gravité", es: "gravedad", zh: "严重程度", it: "gravità", fa: "شدت", ar: "الخطورة" },
    baseTotal: { en: "Base Total", fr: "Total de Base", es: "Total Base", zh: "基础总计", it: "Totale Base", fa: "مجموع پایه", ar: "المجموع الأساسي" },
    highSeverityTooltip: { en: "2+ pests at High severity", fr: "2+ nuisibles à gravité élevée", es: "2+ plagas con gravedad alta", zh: "2个以上高严重程度害虫", it: "2+ parassiti ad alta gravità", fa: "2+ آفات با شدت بالا", ar: "2+ آفات بخطورة عالية" },
    majorInfestationDeal: { en: "Major Infestation Deal", fr: "Offre Infestation Majeure", es: "Oferta de Infestación Mayor", zh: "重大虫害优惠", it: "Offerta Infestazione Maggiore", fa: "معامله آلودگی عمده", ar: "عرض الإصابة الكبيرة" },
    promoCode: { en: "Promo Code", fr: "Code Promo", es: "Código Promocional", zh: "促销代码", it: "Codice Promozionale", fa: "کد تخفیف", ar: "رمز الترويج" },
    discount: { en: "discount", fr: "remise", es: "descuento", zh: "折扣", it: "sconto", fa: "تخفیف", ar: "خصم" },
    seasonalPlanDiscount: { en: "Seasonal Plan Discount (20%)", fr: "Remise Plan Saisonnier (20%)", es: "Descuento Plan Estacional (20%)", zh: "季节性计划折扣 (20%)", it: "Sconto Piano Stagionale (20%)", fa: "تخفیف برنامه فصلی (20%)", ar: "خصم الخطة الموسمية (20%)" },
    billedQuarterly: { en: "Billed quarterly", fr: "Facturé trimestriellement", es: "Facturado trimestralmente", zh: "按季度计费", it: "Fatturato trimestralmente", fa: "صورتحساب سه‌ماهه", ar: "يتم إصدار فاتورة ربع سنوية" },
    monthlyPlanDiscount: { en: "Monthly Plan Discount (30%)", fr: "Remise Plan Mensuel (30%)", es: "Descuento Plan Mensual (30%)", zh: "月度计划折扣 (30%)", it: "Sconto Piano Mensile (30%)", fa: "تخفیف برنامه ماهانه (30%)", ar: "خصم الخطة الشهرية (30%)" },
    billedMonthly: { en: "Billed monthly", fr: "Facturé mensuellement", es: "Facturado mensualmente", zh: "按月计费", it: "Fatturato mensilmente", fa: "صورتحساب ماهانه", ar: "يتم إصدار فاتورة شهرية" },
    finalTotal: { en: "FINAL TOTAL", fr: "TOTAL FINAL", es: "TOTAL FINAL", zh: "最终总计", it: "TOTALE FINALE", fa: "مجموع نهایی", ar: "المجموع النهائي" },
  },
  packageNames: {
    'rodent-family': { en: "The Rodent Family", fr: "La Famille des Rongeurs", es: "La Familia de Roedores", zh: "啮齿动物家族", it: "La Famiglia dei Roditori", fa: "خانواده جوندگان", ar: "عائلة القوارض" },
    'crawling-defense': { en: "Crawling Insect Defense", fr: "Défense contre les Insectes Rampants", es: "Defensa contra Insectos Rastreros", zh: "爬行昆虫防护", it: "Difesa dagli Insetti Striscianti", fa: "دفاع در برابر حشرات خزنده", ar: "دفاع ضد الحشرات الزاحفة" },
    'general-guard': { en: "General Home Guard", fr: "Protection Générale du Foyer", es: "Guardia General del Hogar", zh: "家庭综合防护", it: "Guardia Generale della Casa", fa: "محافظ عمومی خانه", ar: "حارس المنزل العام" },
  },
  serviceNames: {
    mice: { en: "Mice", fr: "Souris", es: "Ratones", zh: "老鼠", it: "Topi", fa: "موش", ar: "فئران" },
    rats: { en: "Rats", fr: "Rats", es: "Ratas", zh: "大鼠", it: "Ratti", fa: "موش صحرایی", ar: "جرذان" },
    ants: { en: "Ants", fr: "Fourmis", es: "Hormigas", zh: "蚂蚁", it: "Formiche", fa: "مورچه", ar: "نمل" },
    spiders: { en: "Spiders", fr: "Araignées", es: "Arañas", zh: "蜘蛛", it: "Ragni", fa: "عنکبوت", ar: "عناكب" },
    cockroaches: { en: "Cockroaches", fr: "Cafards", es: "Cucarachas", zh: "蟑螂", it: "Scarafaggi", fa: "سوسک", ar: "صراصير" },
    wasps: { en: "Wasps", fr: "Guêpes", es: "Avispas", zh: "黄蜂", it: "Vespe", fa: "زنبور", ar: "دبابير" },
    bedbugs: { en: "Bed Bugs", fr: "Punaises de Lit", es: "Chinches", zh: "臭虫", it: "Cimici da Letto", fa: "ساس تخت", ar: "بق الفراش" },
    fleas: { en: "Fleas", fr: "Puces", es: "Pulgas", zh: "跳蚤", it: "Pulci", fa: "کک", ar: "براغيث" },
    silverfish: { en: "Silverfish", fr: "Poissons d'Argent", es: "Pececillos de Plata", zh: "蠹虫", it: "Pesciolini d'Argento", fa: "ماهی نقره‌ای", ar: "السمك الفضي" },
    earwigs: { en: "Earwigs", fr: "Perce-Oreilles", es: "Tijeretas", zh: "蠼螋", it: "Forbicine", fa: "گوش‌خزک", ar: "أبو مقص" },
    centipedes: { en: "Centipedes", fr: "Mille-Pattes", es: "Ciempiés", zh: "蜈蚣", it: "Centopiedi", fa: "صدپا", ar: "أم أربعة وأربعين" },
    'carpenter-ants': { en: "Carpenter Ants", fr: "Fourmis Charpentières", es: "Hormigas Carpinteras", zh: "木蚁", it: "Formiche del Legno", fa: "مورچه نجار", ar: "النمل النجار" },
    'fruit-flies': { en: "Fruit Flies", fr: "Mouches à Fruits", es: "Moscas de la Fruta", zh: "果蝇", it: "Moscerini della Frutta", fa: "مگس میوه", ar: "ذباب الفاكهة" },
  },
  severityNames: {
    low: { en: "Low", fr: "Faible", es: "Bajo", zh: "轻微", it: "Basso", fa: "کم", ar: "منخفض" },
    medium: { en: "Medium", fr: "Moyen", es: "Medio", zh: "中等", it: "Medio", fa: "متوسط", ar: "متوسط" },
    high: { en: "High", fr: "Élevé", es: "Alto", zh: "严重", it: "Alto", fa: "زیاد", ar: "عالي" },
    'no-idea': { en: "No idea", fr: "Aucune idée", es: "No sé", zh: "不清楚", it: "Non so", fa: "نمی‌دانم", ar: "لا أعرف" },
  },
  protectionPlanNames: {
    none: { en: "No Extended Plan", fr: "Aucun Plan Étendu", es: "Sin Plan Extendido", zh: "无延长计划", it: "Nessun Piano Esteso", fa: "بدون برنامه تمدید شده", ar: "لا توجد خطة ممتدة" },
    '4-month': { en: "4-Month Guarantee - $40", fr: "Garantie 4 Mois - 40$", es: "Garantía de 4 Meses - $40", zh: "4个月保证 - $40", it: "Garanzia 4 Mesi - $40", fa: "ضمانت 4 ماهه - 40$", ar: "ضمان 4 أشهر - 40$" },
    '6-month': { en: "6-Month Guarantee - $50", fr: "Garantie 6 Mois - 50$", es: "Garantía de 6 Meses - $50", zh: "6个月保证 - $50", it: "Garanzia 6 Mesi - $50", fa: "ضمانت 6 ماهه - 50$", ar: "ضمان 6 أشهر - 50$" },
    '1-year': { en: "1-Year Guarantee - $60 (Best Value!)", fr: "Garantie 1 An - 60$ (Meilleure Valeur!)", es: "Garantía de 1 Año - $60 (¡Mejor Valor!)", zh: "1年保证 - $60（最超值！）", it: "Garanzia 1 Anno - $60 (Miglior Valore!)", fa: "ضمانت 1 ساله - 60$ (بهترین ارزش!)", ar: "ضمان سنة واحدة - 60$ (أفضل قيمة!)" },
  },
};

// Services data
const services = [
  { id: 'ants', image: '/images/ants.jpeg' },
  { id: 'mice', image: '/images/mice.jpeg' },
  { id: 'spiders', image: '/images/spiders.jpeg' },
  { id: 'cockroaches', image: '/images/cockroaches.jpeg' },
  { id: 'rats', image: '/images/rats.jpeg' },
  { id: 'wasps', image: '/images/wasps.jpeg' },
  { id: 'bedbugs', image: '/images/bedbugs.jpeg' },
  { id: 'fleas', image: '/images/fleas.jpeg' },
  { id: 'silverfish', image: '/images/silverfish.jpeg' },
  { id: 'earwigs', image: '/images/earwigs.jpeg' },
  { id: 'centipedes', image: '/images/centipedes.jpeg' },
  { id: 'carpenter-ants', image: '/images/carpenter-ants.jpeg' },
  { id: 'fruit-flies', image: '/images/fruit-flies.jpeg' },
];

const proTips: Record<string, Record<Language, string>> = {
  ants: {
    en: "Pro Tip: Ants follow scent trails to food sources. Eliminating these trails and food access is crucial for control.",
    fr: "Conseil Pro: Les fourmis suivent les pistes odorantes vers les sources de nourriture. Éliminer ces pistes et l'accès à la nourriture est crucial pour le contrôle.",
    es: "Consejo Profesional: Las hormigas siguen rastros de olor hacia las fuentes de comida. Eliminar estos rastros y el acceso a la comida es crucial para el control.",
    zh: "专业提示：蚂蚁沿着气味轨迹寻找食物来源。消除这些轨迹和食物来源对于控制至关重要。",
    it: "Consiglio Professionale: Le formiche seguono tracce odorose verso le fonti di cibo. Eliminare queste tracce e l'accesso al cibo è cruciale per il controllo.",
    fa: "نکته حرفه‌ای: مورچه‌ها از مسیرهای بویایی برای یافتن منابع غذا استفاده می‌کنند. از بین بردن این مسیرها و دسترسی به غذا برای کنترل حیاتی است.",
    ar: "نصيحة محترفة: يتبع النمل مسارات الرائحة إلى مصادر الطعام. إزالة هذه المسارات والوصول إلى الطعام أمر بالغ الأهمية للسيطرة.",
  },
  mice: {
    en: "Pro Tip: Mice can contaminate food and spread diseases. Prevention through proper food storage is key.",
    fr: "Conseil Pro: Les souris peuvent contaminer la nourriture et propager des maladies. La prévention par un stockage approprié des aliments est essentielle.",
    es: "Consejo Profesional: Los ratones pueden contaminar la comida y propagar enfermedades. La prevención mediante el almacenamiento adecuado de alimentos es clave.",
    zh: "专业提示：小鼠可能会污染食物并传播疾病。通过适当的食物储存进行预防是关键。",
    it: "Consiglio Professionale: I topi possono contaminare il cibo e diffondere malattie. La prevenzione attraverso la corretta conservazione degli alimenti è fondamentale.",
    fa: "نکته حرفه‌ای: موش‌ها می‌توانند غذا را آلوده کنند و بیماری‌ها را منتشر کنند. پیشگیری از طریق ذخیره‌سازی صحیح مواد غذایی کلیدی است.",
    ar: "نصيحة محترفة: يمكن للفئران تلويث الطعام ونشر الأمراض. الوقاية من خلال التخزين السليم للطعام هو المفتاح.",
  },
  spiders: {
    en: "Pro Tip: Spiders are natural pest controllers, but large populations can indicate other pest issues. Regular cleaning helps prevent infestations.",
    fr: "Conseil Pro: Les araignées sont des contrôleurs naturels de nuisibles, mais de grandes populations peuvent indiquer d'autres problèmes de nuisibles. Un nettoyage régulier aide à prévenir les infestations.",
    es: "Consejo Profesional: Las arañas son controladores naturales de plagas, pero poblaciones grandes pueden indicar otros problemas de plagas. La limpieza regular ayuda a prevenir infestaciones.",
    zh: "专业提示：蜘蛛是天然的害虫控制者，但大量蜘蛛可能表明存在其他害虫问题。定期清洁有助于防止虫害。",
    it: "Consiglio Professionale: I ragni sono controller naturali di parassiti, ma grandi popolazioni possono indicare altri problemi di parassiti. La pulizia regolare aiuta a prevenire le infestazioni.",
    fa: "نکته حرفه‌ای: عنکبوت‌ها کنترل‌کننده‌های طبیعی آفات هستند، اما جمعیت‌های بزرگ می‌توانند نشان‌دهنده مشکلات آفت دیگر باشند. تمیز کردن منظم به جلوگیری از آلودگی کمک می‌کند.",
    ar: "نصيحة محترفة: العناكب هي مكافحات طبيعية للآفات، ولكن الأعداد الكبيرة يمكن أن تشير إلى مشاكل آفات أخرى. التنظيف المنتظم يساعد على منع الإصابات.",
  },
  cockroaches: {
    en: "Pro Tip: Cockroaches spread bacteria and allergens. They thrive in warm, moist environments. Professional treatment is often necessary for effective control.",
    fr: "Conseil Pro: Les cafards propagent des bactéries et des allergènes. Ils prospèrent dans des environnements chauds et humides. Un traitement professionnel est souvent nécessaire pour un contrôle efficace.",
    es: "Consejo Profesional: Las cucarachas propagan bacterias y alérgenos. Prosperan en ambientes cálidos y húmedos. El tratamiento profesional suele ser necesario para un control efectivo.",
    zh: "专业提示：蟑螂传播细菌和过敏原。它们在温暖潮湿的环境中繁衍生息。专业治疗通常是有效控制所必需的。",
    it: "Consiglio Professionale: Gli scarafaggi diffondono batteri e allergeni. Prosperano in ambienti caldi e umidi. Il trattamento professionale è spesso necessario per un controllo efficace.",
    fa: "نکته حرفه‌ای: سوسک‌ها باکتری‌ها و آلرژن‌ها را منتشر می‌کنند. آن‌ها در محیط‌های گرم و مرطوب رشد می‌کنند. درمان حرفه‌ای اغلب برای کنترل مؤثر ضروری است.",
    ar: "نصيحة محترفة: تنشر الصراصير البكتيريا ومسببات الحساسية. تزدهر في البيئات الدافئة والرطبة. العلاج المهني غالبًا ما يكون ضروريًا للسيطرة الفعالة.",
  },
  rats: {
    en: "Pro Tip: Rats can transmit diseases and damage property. Sealing entry points is the most effective long-term solution.",
    fr: "Conseil Pro: Les rats peuvent transmettre des maladies et endommager la propriété. Sceller les points d'entrée est la solution la plus efficace à long terme.",
    es: "Consejo Profesional: Las ratas pueden transmitir enfermedades y dañar la propiedad. Sellar los puntos de entrada es la solución más efectiva a largo plazo.",
    zh: "专业提示：大鼠可能传播疾病并损坏财产。密封入口点是最有效的长期解决方案。",
    it: "Consiglio Professionale: I ratti possono trasmettere malattie e danneggiare la proprietà. Sigillare i punti di ingresso è la soluzione più efficace a lungo termine.",
    fa: "نکته حرفه‌ای: موش‌های صحرایی می‌توانند بیماری‌ها را منتقل کنند و به اموال آسیب برسانند. مسدود کردن نقاط ورود مؤثرترین راه‌حل بلندمدت است.",
    ar: "نصيحة محترفة: يمكن للجرذان نقل الأمراض والإضرار بالممتلكات. إغلاق نقاط الدخول هو الحل الأكثر فعالية على المدى الطويل.",
  },
  wasps: {
    en: "Pro Tip: Wasps can be aggressive when their nest is threatened. Professional removal is recommended for safety.",
    fr: "Conseil Pro: Les guêpes peuvent être agressives lorsque leur nid est menacé. L'enlèvement professionnel est recommandé pour la sécurité.",
    es: "Consejo Profesional: Las avispas pueden ser agresivas cuando su nido está amenazado. Se recomienda la eliminación profesional por seguridad.",
    zh: "专业提示：当蜂巢受到威胁时，黄蜂可能会变得具有攻击性。为了安全起见，建议专业清除。",
    it: "Consiglio Professionale: Le vespe possono essere aggressive quando il loro nido è minacciato. Si raccomanda la rimozione professionale per sicurezza.",
    fa: "نکته حرفه‌ای: زنبورها زمانی که لانه آن‌ها تهدید می‌شود می‌توانند پرخاشگر شوند. برای ایمنی، حذف حرفه‌ای توصیه می‌شود.",
    ar: "نصيحة محترفة: يمكن أن تكون الدبابير عدوانية عندما يتعرض عشها للتهديد. يوصى بالإزالة المهنية من أجل السلامة.",
  },
  bedbugs: {
    en: "Pro Tip: Bed bugs are notoriously difficult to eliminate. Early detection and professional treatment are essential for successful eradication. We offer a follow-up treatment at $75 if needed.",
    fr: "Conseil Pro: Les punaises de lit sont notoirement difficiles à éliminer. La détection précoce et le traitement professionnel sont essentiels pour une éradication réussie. Nous offrons un traitement de suivi à 75$ si nécessaire.",
    es: "Consejo Profesional: Las chinches son notoriamente difíciles de eliminar. La detección temprana y el tratamiento profesional son esenciales para una erradicación exitosa. Ofrecemos un tratamiento de seguimiento a $75 si es necesario.",
    zh: "专业提示：臭虫很难消灭。早期发现和专业治疗对于成功根除至关重要。如果需要，我们提供75美元的后续治疗。",
    it: "Consiglio Professionale: Le cimici dei letti sono notoriamente difficili da eliminare. Il rilevamento precoce e il trattamento professionale sono essenziali per un'eradicazione di successo. Offriamo un trattamento di follow-up a $75 se necessario.",
    fa: "نکته حرفه‌ای: ساس‌ها معمولاً از بین بردن آن‌ها دشوار است. تشخیص زودهنگام و درمان حرفه‌ای برای ریشه‌کنی موفق ضروری است. ما در صورت نیاز درمان پیگیری به قیمت 75 دلار ارائه می‌دهیم.",
    ar: "نصيحة محترفة: من الصعب جدًا القضاء على بق الفراش. الاكتشاف المبكر والعلاج المهني ضروريان للإبادة الناجحة. نحن نقدم علاجًا متابعة بقيمة 75 دولارًا إذا لزم الأمر.",
  },
  fleas: {
    en: "Pro Tip: Fleas can jump long distances and reproduce rapidly. Pet treatment and environmental control are both necessary.",
    fr: "Conseil Pro: Les puces peuvent sauter de longues distances et se reproduire rapidement. Le traitement des animaux et le contrôle environnemental sont tous deux nécessaires.",
    es: "Consejo Profesional: Las pulgas pueden saltar largas distancias y reproducirse rápidamente. El tratamiento de las mascotas y el control ambiental son ambos necesarios.",
    zh: "专业提示：跳蚤可以跳远距离并迅速繁殖。宠物治疗和环境控制都是必要的。",
    it: "Consiglio Professionale: Le pulci possono saltare lunghe distanze e riprodursi rapidamente. Il trattamento degli animali domestici e il controllo ambientale sono entrambi necessari.",
    fa: "نکته حرفه‌ای: کک‌ها می‌توانند مسافت‌های طولانی بپرند و به سرعت تولید مثل کنند. درمان حیوانات خانگی و کنترل محیطی هر دو ضروری هستند.",
    ar: "نصيحة محترفة: يمكن للبراغيث القفز لمسافات طويلة والتكاثر بسرعة. علاج الحيوانات الأليفة والتحكم في البيئة كلاهما ضروريان.",
  },
  silverfish: {
    en: "Pro Tip: Silverfish thrive in humid environments and feed on starchy materials. Reducing moisture and removing food sources helps control them.",
    fr: "Conseil Pro: Les poissons d'argent prospèrent dans des environnements humides et se nourrissent de matières féculentes. Réduire l'humidité et éliminer les sources de nourriture aide à les contrôler.",
    es: "Consejo Profesional: Los pececillos de plata prosperan en ambientes húmedos y se alimentan de materiales con almidón. Reducir la humedad y eliminar las fuentes de alimento ayuda a controlarlos.",
    zh: "专业提示：蠹虫在潮湿环境中繁殖，以淀粉质材料为食。减少湿度和去除食物来源有助于控制它们。",
    it: "Consiglio Professionale: I pesciolini d'argento prosperano in ambienti umidi e si nutrono di materiali amidacei. Ridurre l'umidità e rimuovere le fonti di cibo aiuta a controllarli.",
    fa: "نکته حرفه‌ای: ماهی‌های نقره‌ای در محیط‌های مرطوب رشد می‌کنند و از مواد نشاسته‌ای تغذیه می‌کنند. کاهش رطوبت و حذف منابع غذایی به کنترل آن‌ها کمک می‌کند.",
    ar: "نصيحة محترفة: تزدهر الأسماك الفضية في البيئات الرطبة وتتغذى على المواد النشوية. تقليل الرطوبة وإزالة مصادر الطعام يساعد على السيطرة عليها.",
  },
  earwigs: {
    en: "Pro Tip: Earwigs prefer damp, dark spaces and are mostly active at night. Eliminating moisture and hiding spots reduces their population.",
    fr: "Conseil Pro: Les perce-oreilles préfèrent les espaces humides et sombres et sont principalement actifs la nuit. Éliminer l'humidité et les cachettes réduit leur population.",
    es: "Consejo Profesional: Las tijeretas prefieren espacios húmedos y oscuros y son principalmente activas por la noche. Eliminar la humedad y los escondites reduce su población.",
    zh: "专业提示：蠼螋喜欢潮湿、黑暗的空间，主要在夜间活动。消除湿度和藏身之处可以减少它们的数量。",
    it: "Consiglio Professionale: Le forbicine preferiscono spazi umidi e bui e sono per lo più attive di notte. Eliminare l'umidità e i nascondigli riduce la loro popolazione.",
    fa: "نکته حرفه‌ای: گوش‌خزک‌ها فضاهای مرطوب و تاریک را ترجیح می‌دهند و بیشتر در شب فعال هستند. از بین بردن رطوبت و مکان‌های مخفی جمعیت آن‌ها را کاهش می‌دهد.",
    ar: "نصيحة محترفة: تفضل إبر الأذن الأماكن الرطبة والمظلمة وتكون نشطة في الغالب في الليل. إزالة الرطوبة وأماكن الاختباء يقلل من أعدادها.",
  },
  centipedes: {
    en: "Pro Tip: Centipedes hunt other insects and prefer moist environments. Reducing humidity and sealing entry points helps control them.",
    fr: "Conseil Pro: Les mille-pattes chassent d'autres insectes et préfèrent les environnements humides. Réduire l'humidité et sceller les points d'entrée aide à les contrôler.",
    es: "Consejo Profesional: Los ciempiés cazan otros insectos y prefieren ambientes húmedos. Reducir la humedad y sellar los puntos de entrada ayuda a controlarlos.",
    zh: "专业提示：蜈蚣捕食其他昆虫，喜欢潮湿的环境。减少湿度和密封入口点有助于控制它们。",
    it: "Consiglio Professionale: I centopiedi cacciano altri insetti e preferiscono ambienti umidi. Ridurre l'umidità e sigillare i punti di ingresso aiuta a controllarli.",
    fa: "نکته حرفه‌ای: صدپاها حشرات دیگر را شکار می‌کنند و محیط‌های مرطوب را ترجیح می‌دهند. کاهش رطوبت و مسدود کردن نقاط ورود به کنترل آن‌ها کمک می‌کند.",
    ar: "نصيحة محترفة: تصطاد الحريش الحشرات الأخرى وتفضل البيئات الرطبة. تقليل الرطوبة وإغلاق نقاط الدخول يساعد على السيطرة عليها.",
  },
  'carpenter-ants': {
    en: "Pro Tip: Carpenter ants damage wood structures by excavating galleries. Quick professional treatment prevents extensive structural damage.",
    fr: "Conseil Pro: Les fourmis charpentières endommagent les structures en bois en creusant des galeries. Un traitement professionnel rapide prévient des dommages structurels importants.",
    es: "Consejo Profesional: Las hormigas carpinteras dañan las estructuras de madera excavando galerías. El tratamiento profesional rápido previene daños estructurales extensos.",
    zh: "专业提示：木蚁通过挖掘隧道破坏木质结构。快速的专业治疗可以防止广泛的结构损坏。",
    it: "Consiglio Professionale: Le formiche carpentiere danneggiano le strutture in legno scavando gallerie. Un trattamento professionale rapido previene danni strutturali estesi.",
    fa: "نکته حرفه‌ای: مورچه‌های نجار با حفر گالری‌ها به سازه‌های چوبی آسیب می‌زنند. درمان حرفه‌ای سریع از آسیب ساختاری گسترده جلوگیری می‌کند.",
    ar: "نصيحة محترفة: يدمر النمل النجار الهياكل الخشبية عن طريق حفر الأنفاق. العلاج المهني السريع يمنع الأضرار الهيكلية الواسعة.",
  },
  'fruit-flies': {
    en: "Pro Tip: Fruit flies breed rapidly in fermenting organic matter. Removing breeding sources and thorough cleaning are essential for control.",
    fr: "Conseil Pro: Les mouches à fruits se reproduisent rapidement dans la matière organique en fermentation. Éliminer les sources de reproduction et un nettoyage approfondi sont essentiels pour le contrôle.",
    es: "Consejo Profesional: Las moscas de la fruta se reproducen rápidamente en materia orgánica en fermentación. Eliminar las fuentes de reproducción y una limpieza exhaustiva son esenciales para el control.",
    zh: "专业提示：果蝇在发酵的有机物中迅速繁殖。清除繁殖来源和彻底清洁对于控制至关重要。",
    it: "Consiglio Professionale: I moscerini della frutta si riproducono rapidamente nella materia organica in fermentazione. Rimuovere le fonti di riproduzione e una pulizia approfondita sono essenziali per il controllo.",
    fa: "نکته حرفه‌ای: مگس‌های میوه به سرعت در مواد آلی در حال تخمیر تولید مثل می‌کنند. حذف منابع تولید مثل و تمیز کردن کامل برای کنترل ضروری است.",
    ar: "نصيحة محترفة: تتكاثر ذباب الفاكهة بسرعة في المواد العضوية المتخمرة. إزالة مصادر التكاثر والتنظيف الشامل ضروريان للسيطرة.",
  },
};

export default function QuoteCalculatorClient() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');
  const [selectedServices, setSelectedServices] = useState<Record<string, SelectedService>>({});
  const [selectedPackages, setSelectedPackages] = useState<Set<string>>(new Set());
  const [appliedPromoCode, setAppliedPromoCode] = useState<string | null>(null);
  const [promoInput, setPromoInput] = useState('');
  const [showPromoSuccess, setShowPromoSuccess] = useState(false);
  const [showPromoError, setShowPromoError] = useState(false);
  const [showCopySuccess, setShowCopySuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    address: '',
    phone: '',
    propertyType: '',
    serviceFrequency: '',
    protectionPlan: 'none',
  });

  // Apply language to data attributes
  useEffect(() => {
    document.querySelectorAll('[data-en]').forEach((element) => {
      const el = element as HTMLElement;
      const text = el.dataset[currentLanguage];
      if (text) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          (el as HTMLInputElement).placeholder = text;
        } else if (el.tagName === 'IMG') {
          (el as HTMLImageElement).alt = text;
        } else {
          el.textContent = text;
        }
      }
    });
  }, [currentLanguage, currentStep]);

  const isStep1Valid = formData.propertyType !== '' && formData.serviceFrequency !== '';

  const getPackageDisplayName = useCallback((packageName: string) => {
    return translations.packageNames[packageName as keyof typeof translations.packageNames]?.[currentLanguage] || packageName;
  }, [currentLanguage]);

  const getServiceDisplayName = useCallback((service: string) => {
    return translations.serviceNames[service as keyof typeof translations.serviceNames]?.[currentLanguage] || service;
  }, [currentLanguage]);

  const getSeverityDisplayName = useCallback((severity: Severity) => {
    return translations.severityNames[severity][currentLanguage];
  }, [currentLanguage]);

  const togglePackage = useCallback((packageName: string) => {
    const isSelected = selectedPackages.has(packageName);
    const newPackages = new Set(selectedPackages);
    const newServices = { ...selectedServices };

    if (isSelected) {
      newPackages.delete(packageName);
      packages[packageName].forEach((service) => {
        delete newServices[service];
      });
    } else {
      newPackages.add(packageName);
      packages[packageName].forEach((service) => {
        newServices[service] = { severity: 'medium' };
      });
    }

    setSelectedPackages(newPackages);
    setSelectedServices(newServices);
  }, [selectedPackages, selectedServices]);

  const toggleService = useCallback((service: string) => {
    const isSelected = selectedServices[service];
    const newServices = { ...selectedServices };

    if (isSelected) {
      delete newServices[service];
      // Check if this breaks any packages
      const newPackages = new Set(selectedPackages);
      for (const [packageName, packageServices] of Object.entries(packages)) {
        if (newPackages.has(packageName) && packageServices.includes(service)) {
          newPackages.delete(packageName);
        }
      }
      setSelectedPackages(newPackages);
    } else {
      newServices[service] = { severity: 'medium' };
      // Check if this completes any packages
      const newPackages = new Set(selectedPackages);
      for (const [packageName, packageServices] of Object.entries(packages)) {
        if (!newPackages.has(packageName)) {
          const allSelected = packageServices.every((s) => newServices[s]);
          if (allSelected) {
            newPackages.add(packageName);
          }
        }
      }
      setSelectedPackages(newPackages);
    }

    setSelectedServices(newServices);
  }, [selectedPackages, selectedServices]);

  const selectSeverity = useCallback((service: string, severity: Severity) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: { severity },
    }));
  }, []);

  const applyPromoCode = useCallback(() => {
    const code = promoInput.trim().toUpperCase();
    const validCodes = ['SILVER10', 'SAVE20'];

    setShowPromoSuccess(false);
    setShowPromoError(false);

    if (validCodes.includes(code)) {
      setAppliedPromoCode(code);
      setShowPromoSuccess(true);
      setTimeout(() => setShowPromoSuccess(false), 3000);
    } else if (code === '') {
      setAppliedPromoCode(null);
    } else {
      setShowPromoError(true);
      setTimeout(() => setShowPromoError(false), 3000);
    }
  }, [promoInput]);

  const calculateQuote = useCallback(() => {
    if (!formData.propertyType || (selectedPackages.size === 0 && Object.keys(selectedServices).length === 0)) {
      return null;
    }

    const propertyPricing = pricing[formData.propertyType as PropertyType];
    const lines: Array<{ label: string; amount: number; tooltip?: string }> = [];
    let baseTotal = 0;

    // Add packages
    for (const packageName of selectedPackages) {
      const price = propertyPricing[packageName];
      lines.push({ label: getPackageDisplayName(packageName), amount: price });
      baseTotal += price;
    }

    // Add individual services not in packages
    for (const [service, details] of Object.entries(selectedServices)) {
      const isInPackage = Array.from(selectedPackages).some((pkg) => packages[pkg].includes(service));
      if (!isInPackage) {
        const basePrice = propertyPricing[service];
        const multiplier = severityMultipliers[details.severity];
        const finalPrice = Math.round(basePrice * multiplier);
        const severityText = getSeverityDisplayName(details.severity);
        const tooltipText = `${translations.quote.basePrice[currentLanguage]} $${basePrice} × ${multiplier}x (${severityText} ${translations.quote.severity[currentLanguage]})`;
        lines.push({ label: `${getServiceDisplayName(service)} (${severityText})`, amount: finalPrice, tooltip: tooltipText });
        baseTotal += finalPrice;
      }
    }

    // Protection plan
    const protectionCost = protectionPlanPricing[formData.protectionPlan];
    if (protectionCost > 0) {
      lines.push({ label: translations.protectionPlanNames[formData.protectionPlan][currentLanguage], amount: protectionCost });
      baseTotal += protectionCost;
    }

    lines.push({ label: translations.quote.baseTotal[currentLanguage], amount: baseTotal });

    let subtotal = baseTotal;

    // High severity discount
    const highSeverityCount = Object.values(selectedServices).filter((s) => s.severity === 'high').length;
    if (highSeverityCount >= 2) {
      lines.push({ label: translations.quote.majorInfestationDeal[currentLanguage], amount: -50, tooltip: translations.quote.highSeverityTooltip[currentLanguage] });
      subtotal -= 50;
    }

    // Promo code discount
    if (appliedPromoCode) {
      let promoDiscount = 0;
      if (appliedPromoCode === 'SILVER10') promoDiscount = Math.round(subtotal * 0.1);
      else if (appliedPromoCode === 'SAVE20') promoDiscount = Math.round(subtotal * 0.2);

      if (promoDiscount > 0) {
        const discountPercent = appliedPromoCode === 'SILVER10' ? '10%' : '20%';
        lines.push({ label: `${translations.quote.promoCode[currentLanguage]} (${appliedPromoCode})`, amount: -promoDiscount, tooltip: `${discountPercent} ${translations.quote.discount[currentLanguage]}` });
        subtotal -= promoDiscount;
      }
    }

    // Plan discount
    let finalTotal = subtotal;
    if (formData.serviceFrequency === 'seasonal') {
      const discount = Math.round(subtotal * 0.2);
      lines.push({ label: translations.quote.seasonalPlanDiscount[currentLanguage], amount: -discount, tooltip: translations.quote.billedQuarterly[currentLanguage] });
      finalTotal -= discount;
    } else if (formData.serviceFrequency === 'monthly') {
      const discount = Math.round(subtotal * 0.3);
      lines.push({ label: translations.quote.monthlyPlanDiscount[currentLanguage], amount: -discount, tooltip: translations.quote.billedMonthly[currentLanguage] });
      finalTotal -= discount;
    }

    lines.push({ label: translations.quote.finalTotal[currentLanguage], amount: finalTotal });

    return { lines, finalTotal };
  }, [formData, selectedPackages, selectedServices, appliedPromoCode, currentLanguage, getPackageDisplayName, getServiceDisplayName, getSeverityDisplayName]);

  const copyQuote = useCallback(() => {
    const quote = calculateQuote();
    if (!quote) return;

    const propertyNames: Record<PropertyType, string> = {
      apartment: currentLanguage === 'en' ? 'Apartment/Condo' : 'Appartement/Condo',
      townhouse: currentLanguage === 'en' ? 'Townhouse' : 'Maison de Ville',
      'detached-small': currentLanguage === 'en' ? 'Detached Home (<2500 sq ft)' : 'Maison Individuelle (<2500 pi²)',
      'detached-large': currentLanguage === 'en' ? 'Detached Home (>2500 sq ft)' : 'Maison Individuelle (>2500 pi²)',
      commercial: currentLanguage === 'en' ? 'Commercial Business' : 'Entreprise Commerciale',
    };

    const frequencyNames: Record<ServiceFrequency, string> = {
      'one-time': currentLanguage === 'en' ? 'One-Time Service' : 'Service Ponctuel',
      seasonal: currentLanguage === 'en' ? 'Seasonal Plan' : 'Plan Saisonnier',
      monthly: currentLanguage === 'en' ? 'Monthly Plan' : 'Plan Mensuel',
    };

    const quoteText = `
SN Pest Control - ${currentLanguage === 'en' ? 'Quote Request' : 'Demande de Devis'}

${currentLanguage === 'en' ? 'Customer Information' : 'Informations Client'}:
${currentLanguage === 'en' ? 'Address' : 'Adresse'}: ${formData.address || (currentLanguage === 'en' ? 'Not provided' : 'Non fourni')}
${currentLanguage === 'en' ? 'Phone' : 'Téléphone'}: ${formData.phone || (currentLanguage === 'en' ? 'Not provided' : 'Non fourni')}
${currentLanguage === 'en' ? 'Property Type' : 'Type de Propriété'}: ${propertyNames[formData.propertyType as PropertyType] || ''}
${currentLanguage === 'en' ? 'Service Frequency' : 'Fréquence de Service'}: ${frequencyNames[formData.serviceFrequency as ServiceFrequency] || ''}
${currentLanguage === 'en' ? 'Protection Plan' : 'Plan de Protection'}: ${translations.protectionPlanNames[formData.protectionPlan][currentLanguage]}

${currentLanguage === 'en' ? 'Quote Details' : 'Détails du Devis'}:
${quote.lines.map((l) => `${l.label}: $${l.amount}`).join('\n')}

${currentLanguage === 'en' ? 'All prices include Quebec GST (5%) and QST (9.975%) as required by law.' : 'Tous les prix incluent la TPS du Québec (5%) et la TVQ (9,975%) comme requis par la loi.'}

${currentLanguage === 'en' ? 'CONTACT INFORMATION:' : 'INFORMATIONS DE CONTACT:'}
📧 Email: snpest20@gmail.com
📞 Phone: (514) 582-4400
📱 WhatsApp: +1 (514) 582-4400 (${currentLanguage === 'en' ? 'Response within 1 hour!' : 'Réponse en moins d\'une heure!'})
📍 Address: 2311 RUE LISE MONTREAL, QC H8N 1M7
🌐 Website: silvernestpestcontrol.com

${currentLanguage === 'en' ? 'Say Goodbye to Pests, Hello to Peace!' : 'Dites Adieu aux Nuisibles, Bonjour à la Paix!'}
    `.trim();

    navigator.clipboard.writeText(quoteText).then(() => {
      setShowCopySuccess(true);
      setTimeout(() => setShowCopySuccess(false), 3000);
    });
  }, [calculateQuote, formData, currentLanguage]);

  const resetCalculator = useCallback(() => {
    setCurrentStep(1);
    setSelectedServices({});
    setSelectedPackages(new Set());
    setAppliedPromoCode(null);
    setPromoInput('');
    setFormData({
      address: '',
      phone: '',
      propertyType: '',
      serviceFrequency: '',
      protectionPlan: 'none',
    });
  }, []);

  const quote = calculateQuote();

  return (
    <main id="main-content" className={styles.container}>
      {/* Language Dropdown */}
      <div className={styles.languageDropdown}>
        <select
          className={styles.languageSelect}
          value={currentLanguage}
          onChange={(e) => setCurrentLanguage(e.target.value as Language)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="zh">中文</option>
          <option value="it">Italiano</option>
          <option value="fa">فارسی</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <div className={styles.logo}>SN Pest Control</div>
        <p
          className={styles.subtitle}
          data-en="Say Goodbye to Pests, Hello to Peace!"
          data-fr="Dites Adieu aux Nuisibles, Bonjour à la Paix!"
          data-es="¡Despídete de las Plagas, Hola a la Paz!"
          data-zh="告别害虫，迎接安宁！"
          data-it="Dì Addio ai Parassiti, Ciao alla Pace!"
          data-fa="با آفات خداحافظی کنید، با آرامش سلام کنید!"
          data-ar="قل وداعاً للآفات، مرحباً بالسلام!"
        >
          Say Goodbye to Pests, Hello to Peace!
        </p>
      </div>

      {/* Progress Bar */}
      <div className={styles.progressBar}>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={`${styles.progressStep} ${currentStep === step ? styles.active : ''} ${currentStep > step ? styles.completed : ''}`}
          >
            <span
              data-en={`Step ${step}: ${step === 1 ? 'Your Info' : step === 2 ? 'Pest Details' : 'Your Quote'}`}
              data-fr={`Étape ${step}: ${step === 1 ? 'Vos Infos' : step === 2 ? 'Détails des Nuisibles' : 'Votre Devis'}`}
              data-es={`Paso ${step}: ${step === 1 ? 'Tu Información' : step === 2 ? 'Detalles de Plagas' : 'Tu Cotización'}`}
              data-zh={`步骤${step}：${step === 1 ? '您的信息' : step === 2 ? '害虫详情' : '您的报价'}`}
              data-it={`Passo ${step}: ${step === 1 ? 'Le Tue Informazioni' : step === 2 ? 'Dettagli dei Parassiti' : 'Il Tuo Preventivo'}`}
              data-fa={`مرحله ${step}: ${step === 1 ? 'اطلاعات شما' : step === 2 ? 'جزئیات آفات' : 'قیمت شما'}`}
              data-ar={`الخطوة ${step}: ${step === 1 ? 'معلوماتك' : step === 2 ? 'تفاصيل الآفات' : 'عرض الأسعار'}`}
            >
              Step {step}: {step === 1 ? 'Your Info' : step === 2 ? 'Pest Details' : 'Your Quote'}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className={styles.step}>
          <h2
            data-en="Your Information & Service Plan"
            data-fr="Vos Informations & Plan de Service"
            data-es="Tu Información y Plan de Servicio"
            data-zh="您的信息和服务计划"
            data-it="Le Tue Informazioni e Piano di Servizio"
            data-fa="اطلاعات شما و برنامه خدمات"
            data-ar="معلوماتك وخطة الخدمة"
          >
            Your Information & Service Plan
          </h2>

          <div className={styles.formGroup}>
            <label
              data-en="Street Address (Optional)"
              data-fr="Adresse (Optionnel)"
              data-es="Dirección (Opcional)"
              data-zh="街道地址（可选）"
              data-it="Indirizzo (Opzionale)"
              data-fa="آدرس خیابان (اختیاری)"
              data-ar="عنوان الشارع (اختياري)"
            >
              Street Address (Optional)
            </label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="123 Main Street"
            />
          </div>

          <div className={styles.formGroup}>
            <label
              data-en="Phone Number (Optional)"
              data-fr="Numéro de Téléphone (Optionnel)"
              data-es="Número de Teléfono (Opcional)"
              data-zh="电话号码（可选）"
              data-it="Numero di Telefono (Opzionale)"
              data-fa="شماره تلفن (اختیاری)"
              data-ar="رقم الهاتف (اختياري)"
            >
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(555) 123-4567"
            />
          </div>

          <div className={styles.formGroup}>
            <label
              data-en="Property Type *"
              data-fr="Type de Propriété *"
              data-es="Tipo de Propiedad *"
              data-zh="物业类型 *"
              data-it="Tipo di Proprietà *"
              data-fa="نوع ملک *"
              data-ar="نوع العقار *"
            >
              Property Type *
            </label>
            <div className={styles.radioGroup}>
              {[
                { value: 'apartment', en: 'Apartment/Condo', fr: 'Appartement/Condo' },
                { value: 'townhouse', en: 'Townhouse', fr: 'Maison de Ville' },
                { value: 'detached-small', en: 'Detached Home (<2500 sq ft)', fr: 'Maison Individuelle (<2500 pi²)' },
                { value: 'detached-large', en: 'Detached Home (>2500 sq ft)', fr: 'Maison Individuelle (>2500 pi²)' },
                { value: 'commercial', en: 'Commercial Business', fr: 'Entreprise Commerciale' },
              ].map((option) => (
                <div
                  key={option.value}
                  className={`${styles.radioOption} ${formData.propertyType === option.value ? styles.selected : ''}`}
                  onClick={() => setFormData({ ...formData, propertyType: option.value as PropertyType })}
                >
                  <input
                    type="radio"
                    name="property"
                    checked={formData.propertyType === option.value}
                    onChange={() => {}}
                  />
                  <span data-en={option.en} data-fr={option.fr}>{option.en}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label
              data-en="Service Frequency *"
              data-fr="Fréquence de Service *"
              data-es="Frecuencia de Servicio *"
              data-zh="服务频率 *"
              data-it="Frequenza del Servizio *"
              data-fa="تکرار خدمات *"
              data-ar="تكرار الخدمة *"
            >
              Service Frequency *
            </label>
            <div className={styles.radioGroup}>
              {[
                { value: 'one-time', en: 'One-Time Service', fr: 'Service Ponctuel' },
                { value: 'seasonal', en: 'Seasonal Plan', fr: 'Plan Saisonnier' },
                { value: 'monthly', en: 'Monthly Plan', fr: 'Plan Mensuel' },
              ].map((option) => (
                <div
                  key={option.value}
                  className={`${styles.radioOption} ${formData.serviceFrequency === option.value ? styles.selected : ''}`}
                  onClick={() => setFormData({ ...formData, serviceFrequency: option.value as ServiceFrequency })}
                >
                  <input
                    type="radio"
                    name="frequency"
                    checked={formData.serviceFrequency === option.value}
                    onChange={() => {}}
                  />
                  <span data-en={option.en} data-fr={option.fr}>{option.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Plan Info */}
          {(formData.serviceFrequency === 'seasonal' || formData.serviceFrequency === 'monthly') && (
            <div className={styles.infoBox}>
              {translations.planInfo[formData.serviceFrequency][currentLanguage]}
            </div>
          )}

          {/* Protection Plan */}
          {formData.serviceFrequency && formData.serviceFrequency !== 'one-time' && (
            <div className={styles.formGroup}>
              <label
                data-en="Extended Protection Plan (Optional)"
                data-fr="Plan de Protection Étendu (Optionnel)"
              >
                Extended Protection Plan (Optional)
              </label>
              <div className={styles.radioGroup}>
                {(['none', '4-month', '6-month', '1-year'] as ProtectionPlan[]).map((plan) => (
                  <div
                    key={plan}
                    className={`${styles.radioOption} ${formData.protectionPlan === plan ? styles.selected : ''}`}
                    onClick={() => setFormData({ ...formData, protectionPlan: plan })}
                  >
                    <input
                      type="radio"
                      name="protection"
                      checked={formData.protectionPlan === plan}
                      onChange={() => {}}
                    />
                    <span>{translations.protectionPlanNames[plan][currentLanguage]}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className={styles.step}>
          <h2
            data-en="Pest Details & Severity"
            data-fr="Détails des Nuisibles & Gravité"
          >
            Pest Details & Severity
          </h2>

          <div className={styles.servicesSection}>
            <h3 data-en="Service Packages" data-fr="Forfaits de Service">Service Packages</h3>

            {Object.entries(packages).map(([packageName, packageServices]) => (
              <div
                key={packageName}
                className={`${styles.packageCard} ${selectedPackages.has(packageName) ? styles.selected : ''}`}
                onClick={() => togglePackage(packageName)}
              >
                <h4>{getPackageDisplayName(packageName)}</h4>
                <div className={styles.packageIncludes}>
                  {currentLanguage === 'en' ? 'Includes: ' : 'Inclus: '}
                  {packageServices.map((s) => getServiceDisplayName(s)).join(', ')}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.servicesSection}>
            <h3 data-en="Individual Services" data-fr="Services Individuels">Individual Services</h3>

            {services.map((service) => (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${selectedServices[service.id] ? styles.selected : ''}`}
                onClick={(e) => {
                  if (!(e.target as HTMLElement).classList.contains(styles.severityBtn)) {
                    toggleService(service.id);
                  }
                }}
              >
                <div className={styles.serviceInfo}>
                  <div className={styles.serviceDetails}>
                    <strong>{getServiceDisplayName(service.id)}</strong>
                    <Image
                      src={service.image}
                      alt={getServiceDisplayName(service.id)}
                      width={50}
                      height={50}
                      className={styles.pestImage}
                    />
                  </div>
                  <div className={styles.severityControls}>
                    {(['low', 'medium', 'high', 'no-idea'] as Severity[]).map((severity) => (
                      <button
                        key={severity}
                        className={`${styles.severityBtn} ${selectedServices[service.id]?.severity === severity ? styles.selected : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          selectSeverity(service.id, severity);
                        }}
                      >
                        {getSeverityDisplayName(severity)}
                      </button>
                    ))}
                  </div>
                </div>
                {selectedServices[service.id] && proTips[service.id] && (
                  <div className={styles.proTip}>
                    {proTips[service.id][currentLanguage]}
                  </div>
                )}
                {service.id === 'bedbugs' && selectedServices[service.id] && (
                  <div className={styles.bedbugPricingInfo}>
                    <strong
                      data-en="Treatment Pricing:"
                      data-fr="Prix du Traitement:"
                    >
                      Treatment Pricing:
                    </strong>
                    <br />
                    <span
                      data-en="3½ rooms (Apartments): $150 | 4½ rooms (Townhouse): $200 | 5½ rooms (Large Homes): $250"
                      data-fr="3½ pièces (Appartements): 150$ | 4½ pièces (Maisons de ville): 200$ | 5½ pièces (Grandes maisons): 250$"
                    >
                      3½ rooms (Apartments): $150 | 4½ rooms (Townhouse): $200 | 5½ rooms (Large Homes): $250
                    </span>
                    <br />
                    <strong
                      data-en="2nd Treatment: $75 (if needed)"
                      data-fr="2e Traitement: 75$ (si nécessaire)"
                    >
                      2nd Treatment: $75 (if needed)
                    </strong>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Step 3 */}
      {currentStep === 3 && (
        <div className={styles.step}>
          <h2 data-en="Your Quote" data-fr="Votre Devis">Your Quote</h2>

          <div
            className={styles.disclaimer}
            data-en="This is a real-time estimate. Prices are subject to a final on-site inspection."
            data-fr="Ceci est une estimation en temps réel. Les prix sont sujets à une inspection finale sur place."
          >
            This is a real-time estimate. Prices are subject to a final on-site inspection.
          </div>

          <div className={styles.formGroup}>
            <label
              data-en="Promo Code (Optional)"
              data-fr="Code Promo (Optionnel)"
            >
              Promo Code (Optional)
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value)}
                placeholder="SILVER10"
                style={{ flex: 1 }}
              />
              <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={applyPromoCode}>
                {currentLanguage === 'en' ? 'Apply' : 'Appliquer'}
              </button>
            </div>
            {showPromoSuccess && (
              <div className={styles.successMessage} style={{ display: 'block' }}>
                {currentLanguage === 'en' ? 'Promo code applied!' : 'Code promo appliqué!'}
              </div>
            )}
            {showPromoError && (
              <div className={styles.errorMessage} style={{ display: 'block' }}>
                {currentLanguage === 'en' ? 'Invalid promo code' : 'Code promo invalide'}
              </div>
            )}
          </div>

          <div className={styles.quoteSummary}>
            {!quote ? (
              <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
                <p>{translations.quote.noSelection[currentLanguage]}</p>
              </div>
            ) : (
              quote.lines.map((line, index) => (
                <div
                  key={index}
                  className={styles.quoteLine}
                  style={index === quote.lines.length - 1 ? { fontWeight: 700, fontSize: '1.3rem', color: '#2e8b57', background: 'linear-gradient(135deg, #e8f5e8, #f0fff4)', margin: '16px -32px -32px', padding: '24px 32px', borderRadius: '0 0 17px 17px' } : undefined}
                >
                  <span>
                    {line.label}
                    {line.tooltip && (
                      <span className={styles.tooltip} data-tooltip={line.tooltip}>?</span>
                    )}
                  </span>
                  <span>${line.amount}</span>
                </div>
              ))
            )}
          </div>

          <button
            className={`${styles.btn} ${styles.copyBtn}`}
            onClick={copyQuote}
            data-en="Copy Quote & Email Us"
            data-fr="Copier le Devis & Nous Envoyer un Email"
          >
            Copy Quote & Email Us
          </button>
          {showCopySuccess && (
            <div className={styles.successMessage} style={{ display: 'block', textAlign: 'center' }}>
              {currentLanguage === 'en' ? 'Copied to clipboard!' : 'Copié dans le presse-papiers!'}
            </div>
          )}

          <div className={styles.contactInfo}>
            <div className={styles.emailInfo}>📧 snpest20@gmail.com</div>
            <div className={styles.whatsappInfo}>
              📱 <strong>WhatsApp: +1 (514) 582-4400</strong>{' '}
              <span
                data-en="(Response within 1 hour!)"
                data-fr="(Réponse en moins d'une heure!)"
              >
                (Response within 1 hour!)
              </span>
            </div>
            <div className={styles.phoneInfo}>📞 <strong>+1 (514) 582-4400</strong></div>
            <div className={styles.addressInfo}>📍 2311 RUE LISE MONTREAL, QC H8N 1M7</div>
          </div>

          <div className={styles.nextSteps}>
            <h4 data-en="📋 Next Steps:" data-fr="📋 Prochaines Étapes:">📋 Next Steps:</h4>
            <div className={styles.stepsList}>
              {[
                { en: "After clicking 'Copy Quote', paste it into your email app or WhatsApp", fr: "Après avoir cliqué sur 'Copier le Devis', collez-le dans votre app email ou WhatsApp" },
                { en: "Send to snpest20@gmail.com, call (514) 582-4400, or WhatsApp +1 (514) 582-4400", fr: "Envoyez à snpest20@gmail.com, appelez (514) 582-4400, ou WhatsApp +1 (514) 582-4400" },
                { en: "Get your response within 1 hour via WhatsApp, phone, or email!", fr: "Recevez votre réponse en moins d'une heure via WhatsApp, téléphone ou email!" },
              ].map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  <span className={styles.stepNumber}>{index + 1}</span>
                  <span data-en={step.en} data-fr={step.fr}>{step.en}</span>
                </div>
              ))}
            </div>
            <div className={styles.whatsappEmphasis}>
              <strong
                data-en="💬 Prefer WhatsApp? We're very responsive on WhatsApp for faster communication!"
                data-fr="💬 Préférez WhatsApp? Nous sommes très réactifs sur WhatsApp pour une communication plus rapide!"
              >
                💬 Prefer WhatsApp? We&apos;re very responsive on WhatsApp for faster communication!
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className={styles.navigation}>
        <div>
          <Link href="/" className={`${styles.btn} ${styles.btnSecondary}`}>
            {currentLanguage === 'en' ? '← Back to Home' : '← Retour à l\'Accueil'}
          </Link>
          <button className={`${styles.btn} ${styles.btnDanger}`} onClick={resetCalculator}>
            {currentLanguage === 'en' ? 'Start Over' : 'Recommencer'}
          </button>
        </div>
        <div>
          {currentStep > 1 && (
            <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={() => setCurrentStep(currentStep - 1)}>
              {currentLanguage === 'en' ? 'Back' : 'Retour'}
            </button>
          )}
          {currentStep < 3 && (
            <button
              className={`${styles.btn} ${styles.btnPrimary}`}
              onClick={() => setCurrentStep(currentStep + 1)}
              disabled={currentStep === 1 && !isStep1Valid}
            >
              {currentLanguage === 'en' ? 'Next' : 'Suivant'}
            </button>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p
          data-en="This tool provides an instant estimate. Follow the steps to build your quote. Please note that all online quotes are estimates and may be adjusted after a final on-site inspection."
          data-fr="Cet outil fournit une estimation instantanée. Suivez les étapes pour créer votre devis. Veuillez noter que tous les devis en ligne sont des estimations et peuvent être ajustés après une inspection finale sur place."
        >
          This tool provides an instant estimate. Follow the steps to build your quote. Please note that all online quotes are estimates and may be adjusted after a final on-site inspection.
        </p>
        <p
          style={{ marginTop: '16px', fontWeight: 600, color: '#2e8b57' }}
          data-en="All prices include Quebec GST (5%) and QST (9.975%) as required by law. Service available throughout Montreal and surrounding areas."
          data-fr="Tous les prix incluent la TPS du Québec (5%) et la TVQ (9,975%) comme requis par la loi. Service disponible dans tout Montréal et les régions environnantes."
        >
          All prices include Quebec GST (5%) and QST (9.975%) as required by law. Service available throughout Montreal and surrounding areas.
        </p>
      </div>
    </main>
  );
}
