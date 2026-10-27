/**
 * Saudi Building Code (SBC) Standards & Architectural Accreditation
 * Official engineering references aligned with Vision 2030 and Saudi Building Code National Committee.
 */

export interface SBCStandard {
  code: string;
  titleAr: string;
  titleEn: string;
  scopeAr: string;
  scopeEn: string;
  complianceRuleAr: string;
  complianceRuleEn: string;
  icon: string;
}

export const LEAD_ARCHITECT_INFO = {
  nameAr: 'أ. طارق ابوعشي',
  nameEn: 'Tareq Aboushi',
  titleAr: 'كبير المعماريين ومصمم المنصة الرقمية',
  titleEn: 'Lead System Architect & Senior Design Director',
  accreditationAr: 'معتمد وفق الكود السعودي للمباني السكنية SBC 1101',
  accreditationEn: 'Certified Residential Systems Architect (SBC 1101 Compliant)',
  officeAr: 'استوديو بُـنْـيان للتصميم المعماري الفاخر',
  officeEn: 'Bunyan Architectural & Interior Design Studio',
  verificationRef: 'BNY-SBC-SA-2026-HQ'
};

export const SBC_STANDARDS: SBCStandard[] = [
  {
    code: 'SBC 201',
    titleAr: 'كود البناء المعماري العام',
    titleEn: 'General Architectural Code',
    scopeAr: 'تخطيط الفراغات المعمارية، الارتدادات النظامية، ارتفاع الأسقف، وسلامة المداخل والمخارج.',
    scopeEn: 'Spatial zoning, municipal setbacks, clear floor-to-ceiling heights, and egress compliance.',
    complianceRuleAr: 'ضمان ارتداد لا يقل عن 2 متر، وارتفاع صافي لا يقل عن 3.4م للمجالس والصالات الفاخرة.',
    complianceRuleEn: 'Minimum 2.0m property setbacks and >= 3.4m ceiling height in luxury living areas.',
    icon: '📐'
  },
  {
    code: 'SBC 301 / 304',
    titleAr: 'كود الهياكل والخرسانة المسلحة',
    titleEn: 'Structural Concrete & Foundations Code',
    scopeAr: 'مواصفات الخرسانة المقاومة للكبريتات (Type V)، نسب حديد التسليح، وفحوصات الهبوط والضغط.',
    scopeEn: 'Sulfate-resistant concrete (Type V), rebar yield limits, slump tests, and core compression tests.',
    complianceRuleAr: 'خرسانة جاهزة معتمدة بإجهاد لا يقل عن 35 N/mm² مع حماية كاملة للقواعد تحت الأرض.',
    complianceRuleEn: 'Certified ready-mix concrete >= 35 MPa with subterranean bitumen membrane protection.',
    icon: '🏗️'
  },
  {
    code: 'SBC 601 / 602',
    titleAr: 'كود كفاءة الطاقة والعزل الحراري',
    titleEn: 'Energy Conservation & Insulation Code',
    scopeAr: 'العزل الحراري للجدران الخارجية، الأسطح، والزجاج المزدوج منخفض الانبعاث (Low-E).',
    scopeEn: 'Envelope thermal insulation, roof U-values, and double Low-E glazed curtain walls.',
    complianceRuleAr: 'معامل انتقال حراري U-Value للجدران لا يتجاوز 0.34 W/m²·K وللأسقف 0.20 W/m²·K.',
    complianceRuleEn: 'Wall U-Value <= 0.34 W/m²·K and roof U-Value <= 0.20 W/m²·K for high efficiency.',
    icon: '🌡️'
  },
  {
    code: 'SBC 401',
    titleAr: 'كود التمديدات الكهربائية والسلامة',
    titleEn: 'Electrical Installations & Safety Code',
    scopeAr: 'شبكات التأريض، القواطع الذكية، الأسلاك المقاومة للهالوجين، وحماية الصواعق.',
    scopeEn: 'Earthing grids, arc-fault circuit breakers, zero-halogen flame-retardant wiring, and surge protection.',
    complianceRuleAr: 'تأريض مستقل بنسبة مقاومة أقل من 5 أوم، وتوزيع أحمال متوازن لكل دور.',
    complianceRuleEn: 'Dedicated grounding grid < 5 Ohms and balanced 3-phase load distribution per floor.',
    icon: '⚡'
  },
  {
    code: 'SBC 801',
    titleAr: 'كود الحماية والوقاية من الحريق',
    titleEn: 'Fire Protection & Life Safety Code',
    scopeAr: 'كواشف الدخان المتصلة، أنظمة الإطفاء التلقائي، والأبواب المقاومة للحريق لمدة 60 دقيقة.',
    scopeEn: 'Interlinked optical smoke detectors, automatic suppression provisions, and 60-min fire-rated doors.',
    complianceRuleAr: 'كواشف دخان متزامنة في كل غرفة ومطبخ وممرات الهروب متصلة باللوحة الرئيسية.',
    complianceRuleEn: 'Synchronized wireless/wired smoke alarms on all floors connected to central alarm panel.',
    icon: '🛡️'
  },
  {
    code: 'SBC 1001',
    titleAr: 'كود التمديدات الصحية والسباكة',
    titleEn: 'Sanitary & Plumbing Code',
    scopeAr: 'أنظمة تغذية المياه بالضغط المستمر، أنابيب البولي بروبيلين الحراري، والعزل الصوتي للصرف.',
    scopeEn: 'Constant pressure booster pumps, PPR hot/cold piping, and acoustic insulated DWV stacks.',
    complianceRuleAr: 'مواسير صرف صامتة عازلة للصوت 3 طبقات، وخزانات مياه أرضية معزولة بايبوكسي صحي معتمد.',
    complianceRuleEn: 'Triple-layer acoustic drainage piping and food-grade epoxy-coated subterranean potable reservoirs.',
    icon: '💧'
  }
];