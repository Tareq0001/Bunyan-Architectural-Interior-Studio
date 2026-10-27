/**
 * Smart Saudi Construction & Finishing Cost Estimator Engine
 * Compliant with Saudi Building Code (SBC) Standards and market rates in Riyadh, Jeddah & Eastern Province.
 */

export interface PhaseBreakdownItem {
  id: string;
  nameAr: string;
  nameEn: string;
  codeRef: string; // e.g. SBC 301, SBC 601
  descriptionAr: string;
  descriptionEn: string;
  percentage: number; // baseline share of base cost
  cost: number;
}

export interface AddOnItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  fixedCost: number;
  areaMultiplierCost: number; // additional cost per m2 of land or building if applicable
  icon: string;
}

export interface FinishingTierSpec {
  id: 'shell' | 'turnkey' | 'royal' | 'salmani';
  nameAr: string;
  nameEn: string;
  badgeAr: string;
  badgeEn: string;
  baseRatePerM2: number; // SAR per m2 built-up area
  descriptionAr: string;
  descriptionEn: string;
  phaseWeights: number[]; // 7 phases
}

export interface EstimatorInput {
  landArea: number; // m2
  footprintRatio: number; // e.g. 0.60
  hasBasement: boolean;
  hasGroundFloor: boolean; // always true
  hasFirstFloor: boolean;
  hasPenthouseAnnex: boolean;
  finishingTier: 'shell' | 'turnkey' | 'royal' | 'salmani';
  selectedAddOns: string[];
  city: 'riyadh' | 'jeddah' | 'abha' | 'dammam' | 'neom';
}

export interface EstimatorResult {
  landArea: number;
  footprintArea: number;
  totalFloorsCount: number;
  builtUpArea: number; // BUA in m2
  finishingTier: FinishingTierSpec;
  cityMultiplier: number;
  baseConstructionCost: number;
  phases: PhaseBreakdownItem[];
  addOnsCost: number;
  activeAddOns: AddOnItem[];
  engineeringSupervisionFee: number; // 5%
  contingencyReserve: number; // 3%
  subtotalBeforeTax: number;
  vatAmount: number; // 15%
  grandTotal: number;
  costPerM2: number; // SAR per m2 BUA
}

export const FINISHING_TIERS: Record<string, FinishingTierSpec> = {
  shell: {
    id: 'shell',
    nameAr: 'الهيكل الإنشائي (عظم بالمواد)',
    nameEn: 'Structural Shell (Core & Shell)',
    badgeAr: 'أساس متين',
    badgeEn: 'Foundation Grade',
    baseRatePerM2: 780,
    descriptionAr: 'حفر، أساسات خرسانية مسلحة مقاومة للأملاح، حديد سابك، عزل مائي وحراري للجدران والقواعد وفق كود SBC 304.',
    descriptionEn: 'Excavation, sulfate-resistant reinforced concrete, SABIC rebar, foundation waterproofing & perimeter thermal insulation.',
    phaseWeights: [0.65, 0.15, 0.10, 0.02, 0.05, 0.01, 0.02]
  },
  turnkey: {
    id: 'turnkey',
    nameAr: 'تشطيب عصري متكامل (مودرن تسليم مفتاح)',
    nameEn: 'Contemporary Turnkey (Ready to Live)',
    badgeAr: 'الأكثر طلباً',
    badgeEn: 'Most Popular',
    baseRatePerM2: 1750,
    descriptionAr: 'بورسلان إسباني نخب أول، دهانات جوتن الفاخرة، تكييف سبليت مخفي موفر، واجهات حجر طبيعي مطعم ببديل الخشب، أسقف جبسية مودرن.',
    descriptionEn: 'First-choice Spanish porcelain, Jotun premium paints, concealed energy-efficient HVAC, natural stone with wood composites, modern gypsum ceilings.',
    phaseWeights: [0.32, 0.08, 0.18, 0.14, 0.12, 0.10, 0.06]
  },
  royal: {
    id: 'royal',
    nameAr: 'فيلا فاخرة ملكية (رخام إيطالي وتكييف مركزي)',
    nameEn: 'Royal Luxury Villa (Italian Marble & VRF)',
    badgeAr: 'فخامة مطلقة',
    badgeEn: 'Royal Luxury',
    baseRatePerM2: 2650,
    descriptionAr: 'رخام ستتواريو وكلكتا إيطالي، تكييف VRF مركزي ياباني، واجهات حجر الرياض الفاخر وزجاج دبل كورتن وول، أبواب خشب جوز أمريكي، إضاءة غائرة ذكية.',
    descriptionEn: 'Italian Statuario & Calacatta marble, Japanese VRF HVAC, Riyadh stone & structural curtain walls, American walnut solid doors, architectural cove LED.',
    phaseWeights: [0.28, 0.07, 0.19, 0.18, 0.13, 0.10, 0.05]
  },
  salmani: {
    id: 'salmani',
    nameAr: 'قصر بطراز سلماني خاص (فائق الفخامة Bespoke)',
    nameEn: 'Salmani Palace Bespoke (Ultra-Luxury Haute Architecture)',
    badgeAr: 'هوية معمارية خالدة',
    badgeEn: 'Bespoke Architectural Masterpiece',
    baseRatePerM2: 3850,
    descriptionAr: 'عمارة سلمانية موثقة، كسوات حجر طبيعي منقوش يدوي، زجاج ذكي معالج حرارياً، أرضيات رخام بوكماتش ملكي، أكسسوارات ذهبية ونحاسية مسحوبة، مواصفات قصر رئاسي.',
    descriptionEn: 'Bespoke Salmani architectural grammar, hand-chiseled natural stone, smart electrochromic low-E glass, bookmatched royal marble, architectural brass fittings.',
    phaseWeights: [0.26, 0.07, 0.18, 0.20, 0.14, 0.09, 0.06]
  }
};

export const AVAILABLE_ADDONS: AddOnItem[] = [
  {
    id: 'knx_smart_home',
    nameAr: 'أتمتة ذكية كاملة (نظام KNX الألماني)',
    nameEn: 'Complete KNX Smart Home Automation',
    descriptionAr: 'تحكم ذكي في الإضاءة، التكييف، الستائر، الحساسات الأمنية، وشاشات لمس جدارية مع تكامل صوتي وسيناريوهات ترحيبية.',
    descriptionEn: 'German KNX protocol controlling lighting, HVAC, automated shading, biometric security, and architectural wall touchscreens.',
    fixedCost: 75000,
    areaMultiplierCost: 35,
    icon: '⚡'
  },
  {
    id: 'infinity_pool',
    nameAr: 'مسبح إنفينيتي خارجي مع شلال رخامي',
    nameEn: 'Heated Infinity Pool with Marble Water Feature',
    descriptionAr: 'مسبح متماهٍ مع الأفق بنظام تدفئة ومضخات متغيرة السرعة، تكسيات فسيفساء زجاجية فاخرة، وتجهيز لسباحة عكسية.',
    descriptionEn: 'Heated infinity edge pool with variable frequency drives, luxury glass mosaic tiles, and counter-current swimming jet setup.',
    fixedCost: 140000,
    areaMultiplierCost: 0,
    icon: '🏊'
  },
  {
    id: 'hydraulic_elevator',
    nameAr: 'مصعد بانورامي هيدروليكي زجاجي (3 محطات)',
    nameEn: 'Panoramic Glass Hydraulic Elevator (3 Stops)',
    descriptionAr: 'مصعد إيطالي بدون غرفة محركات (MRL) بكابينة زجاجية مقوسة وإضاءة غائرة وأبواب أوتوماتيكية هادئة للغاية.',
    descriptionEn: 'Italian machine-room-less (MRL) panoramic glass elevator with brushed stainless frame and ultra-quiet hydraulic drive.',
    fixedCost: 95000,
    areaMultiplierCost: 0,
    icon: '🛗'
  },
  {
    id: 'solar_energy',
    nameAr: 'منظومة طاقة شمسية كهروضوئية هجينة (15kW)',
    nameEn: 'Hybrid Rooftop Solar PV System (15 kW)',
    descriptionAr: 'ألواح Tier-1 عالية الكفاءة مع محول طاقة هجين وبنك بطاريات ليثيوم لتغطية 45% من استهلاك الفيلا مع مراقبة ذكية.',
    descriptionEn: 'Tier-1 bifacial monocrystalline panels, hybrid inverter, and lithium storage bank covering ~45% of villa energy consumption.',
    fixedCost: 68000,
    areaMultiplierCost: 0,
    icon: '☀️'
  },
  {
    id: 'landscaped_courtyard',
    nameAr: 'فناء معماري داخلي مع نوافير ونظام ضباب',
    nameEn: 'Courtyard Oasis with Fogging & Stone Fountains',
    descriptionAr: 'فناء نجدي/سلماني داخلي مفتوح على السماء مع أشجار نخيل ونباتات ظل محلية، شلال حجر مائي، ونظام رذاذ لتلطيف الحرارة 8 درجات.',
    descriptionEn: 'Traditional courtyard open to the sky with native olive/palm flora, sculpted stone water cascade, and high-pressure evaporative cooling.',
    fixedCost: 55000,
    areaMultiplierCost: 25,
    icon: '🌿'
  },
  {
    id: 'home_cinema_spa',
    nameAr: 'قاعة سينما معزولة صوتياً ومنطقة سبا وسونا',
    nameEn: 'Acoustic Home Cinema & Finnish Sauna Spa',
    descriptionAr: 'معالجة صوتية معتمدة THX بألواح خشبية مثقبة، شاشة 4K ليزرية، بالإضافة لغرفة سونا خشب أرز كندي ومروش مطري.',
    descriptionEn: 'THX acoustic isolation treatment, 4K laser projector layout, Finnish cedar sauna, and thermostatic sensory rain shower.',
    fixedCost: 110000,
    areaMultiplierCost: 0,
    icon: '🎬'
  }
];

export const CITY_FACTORS: Record<string, { factor: number; nameAr: string; nameEn: string }> = {
  riyadh: { factor: 1.05, nameAr: 'مدينة الرياض (العاصمة)', nameEn: 'Riyadh City (Capital)' },
  jeddah: { factor: 1.03, nameAr: 'جدة (عروس البحر الأحمر)', nameEn: 'Jeddah Coastal' },
  abha: { factor: 1.00, nameAr: 'أبها ومنطقة عسير', nameEn: 'Abha & Asir Region' },
  dammam: { factor: 1.02, nameAr: 'المنطقة الشرقية (الدمام والخبر)', nameEn: 'Eastern Province (Dammam / Khobar)' },
  neom: { factor: 1.15, nameAr: 'نيوم والبحر الأحمر', nameEn: 'NEOM & Red Sea Destination' }
};

export class CostEstimatorEngine {
  public static calculate(input: EstimatorInput): EstimatorResult {
    const tier = FINISHING_TIERS[input.finishingTier] || FINISHING_TIERS.royal;
    const cityFactor = (CITY_FACTORS[input.city] || CITY_FACTORS.riyadh).factor;

    // Built-Up Area (BUA) computation
    const footprintArea = input.landArea * input.footprintRatio;

    let floorsCount = 1; // Ground Floor
    let totalBUA = footprintArea; // Ground floor area

    if (input.hasBasement) {
      floorsCount += 1;
      totalBUA += footprintArea * 0.95; // Basement typically 95% of footprint
    }
    if (input.hasFirstFloor) {
      floorsCount += 1;
      totalBUA += footprintArea * 1.05; // First floor often includes overhangs/balconies
    }
    if (input.hasPenthouseAnnex) {
      floorsCount += 0.5;
      totalBUA += footprintArea * 0.50; // Upper annex limited to 50% by municipal regulations
    }

    // Base Construction Cost
    const adjustedRate = tier.baseRatePerM2 * cityFactor;
    const baseConstructionCost = Math.round(totalBUA * adjustedRate);

    // 7 Engineering Phases Definition
    const phaseNames = [
      {
        id: 'phase_structure',
        nameAr: 'الحفر والأساسات والهيكل الإنشائي والحديد',
        nameEn: 'Excavation & Concrete Structure',
        codeRef: 'SBC 301 / 304',
        descAr: 'أعمال التسوية والحفر، صبة النظافة، القواعد الشريطية والمنفصلة، أعمدة خرسانية مسبقة الخلط، حديد سابك عالي المقاومة.',
        descEn: 'Excavation, sulfate-resistant footings, reinforced concrete framing, SABIC rebar, and curing testing.'
      },
      {
        id: 'phase_insulation',
        nameAr: 'العزل المائي والحراري المعتمد',
        nameEn: 'Thermal & Waterproofing Insulation',
        codeRef: 'SBC 601 / 602',
        descAr: 'عزل القواعد والميد والأسطح بنظام الممبرين المزدوج، وعزل الجدران بالبوليسترين المبثوق (XPS) لتحقيق كفاءة استهلاك طاقة عالية.',
        descEn: 'Substructure SBS membrane waterproofing, roof double membrane, and XPS wall thermal insulation per SBC energy code.'
      },
      {
        id: 'phase_mep',
        nameAr: 'الأعمال الكهروميكانيكية (الكهرباء، السباكة، التكييف)',
        nameEn: 'MEP: Electrical, Plumbing & VRF HVAC',
        codeRef: 'SBC 401 / 801',
        descAr: 'تمديدات أسلاك الرياض المقاومة للحريق، مواسير السباكة الحرارية الخضراء، شبكات الصرف الصامت، والتأسيسات الكاملة لتكييف VRF.',
        descEn: 'Fire-resistant cabling, thermofused PPR plumbing pipes, acoustic drainage stacks, and concealed VRF ductwork.'
      },
      {
        id: 'phase_flooring',
        nameAr: 'الأرضيات وتكسيات الرخام والبورسلان',
        nameEn: 'Flooring & Marble Cladding',
        codeRef: 'SBC 1001',
        descAr: 'تركيب ألواح الرخام الطبيعي بوكماتش للمجالس والصالات الرئيسية، وبورسلان إسباني 120×120 للغرف مع فواصل تمدد وغراء لاتكس خاص.',
        descEn: 'Bookmatched natural marble slabs for salon, Spanish large-format porcelain, and flexible polymer-modified mortar.'
      },
      {
        id: 'phase_facades',
        nameAr: 'الواجهات الحجرية السلمانية والزجاج المزدوج',
        nameEn: 'Facades & Salmani Stone / Curtain Wall',
        codeRef: 'SBC 201 Architectural',
        descAr: 'تكسيات حجر الرياض الطبيعي بنظام التعليق الميكانيكي المجلفن المقاوم، وزجاج ستركشر دبل منخفض الانبعاث Low-E لعزل الحرارة والصوت.',
        descEn: 'Mechanically anchored natural Riyadh stone panels with stainless clips, and double-glazed acoustic Low-E curtain walls.'
      },
      {
        id: 'phase_woodwork',
        nameAr: 'الأبواب والأسقف الخشبية والديكورات الجبسية',
        nameEn: 'Interior Woodwork, Doors & Gypsum',
        codeRef: 'SBC 201 Interior',
        descAr: 'أبواب خشب جوز وبلوط طبيعي مصمت بارتفاع 2.8م مع مسكات مغناطيسية مخفية، وأسقف جبسية بورد مضاد للرطوبة بتجاويف إضاءة مخفية.',
        descEn: 'Solid American walnut/oak 2.8m architectural doors with magnetic concealed hinges, and moisture-resistant gypsum drop ceilings.'
      },
      {
        id: 'phase_smart_landscape',
        nameAr: 'الأنظمة الذكية والمصاعد والمحيط الخارجي',
        nameEn: 'Smart Systems, Elevator & Landscaping',
        codeRef: 'SBC 901 / KNX',
        descAr: 'تجهيزات المصعد، الإنارة الخارجية المحيطية، بوابات الدخول الذكية، تنسيق المسطحات الخضراء، وشبكة الري بالتنقيط المؤتمتة.',
        descEn: 'Shaft elevator provisions, architectural exterior wash lighting, automated access gates, and smart drip irrigation landscaping.'
      }
    ];

    const phases: PhaseBreakdownItem[] = phaseNames.map((p, idx) => {
      const weight = tier.phaseWeights[idx] || 0.14;
      const cost = Math.round(baseConstructionCost * weight);
      return {
        id: p.id,
        nameAr: p.nameAr,
        nameEn: p.nameEn,
        codeRef: p.codeRef,
        descriptionAr: p.descAr,
        descriptionEn: p.descEn,
        percentage: Math.round(weight * 100),
        cost
      };
    });

    // Add-ons Calculation
    let addOnsCost = 0;
    const activeAddOns: AddOnItem[] = [];

    input.selectedAddOns.forEach((addonId) => {
      const found = AVAILABLE_ADDONS.find((a) => a.id === addonId);
      if (found) {
        activeAddOns.push(found);
        const cost = found.fixedCost + found.areaMultiplierCost * input.landArea;
        addOnsCost += cost;
      }
    });

    // Direct Engineering Sum
    const subtotalDirect = baseConstructionCost + addOnsCost;

    // Engineering Supervision & Quality Control (5% standard Saudi practice)
    const engineeringSupervisionFee = Math.round(subtotalDirect * 0.05);

    // Contingency Reserve (3% standard risk reserve)
    const contingencyReserve = Math.round(subtotalDirect * 0.03);

    const subtotalBeforeTax = subtotalDirect + engineeringSupervisionFee + contingencyReserve;

    // 15% Saudi VAT
    const vatAmount = Math.round(subtotalBeforeTax * 0.15);
    const grandTotal = subtotalBeforeTax + vatAmount;

    const costPerM2 = Math.round(grandTotal / totalBUA);

    return {
      landArea: input.landArea,
      footprintArea: Math.round(footprintArea),
      totalFloorsCount: floorsCount,
      builtUpArea: Math.round(totalBUA),
      finishingTier: tier,
      cityMultiplier: cityFactor,
      baseConstructionCost,
      phases,
      addOnsCost,
      activeAddOns,
      engineeringSupervisionFee,
      contingencyReserve,
      subtotalBeforeTax,
      vatAmount,
      grandTotal,
      costPerM2
    };
  }
}