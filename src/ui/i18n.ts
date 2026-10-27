/**
 * Bilingual (Arabic / English) Internationalization Engine
 * Full RTL/LTR layout management and reactive string dictionaries.
 */

export type Language = 'ar' | 'en';

type Listener = (lang: Language) => void;

class I18nEngine {
  private currentLang: Language = 'ar';
  private listeners: Listener[] = [];

  private dictionary: Record<string, { ar: string; en: string }> = {
    // Brand & Header
    brandName: { ar: 'بُـنْـيان', en: 'BUNYAN' },
    brandTagline: { ar: 'استوديو التصميم المعماري والداخلي الفاخر وحاسبة البناء الذكية', en: 'Architectural & Interior Studio | Smart Construction Estimator' },
    leadArchitectLabel: { ar: 'إشراف وتصميم المعماري:', en: 'Lead Architect & Designer:' },
    leadArchitectName: { ar: 'أ. طارق ابوعشي', en: 'Tareq Aboushi' },
    navEstimator: { ar: 'حاسبة التكاليف الفاخرة', en: 'Cost Estimator' },
    navStudio: { ar: 'استوديو الإضاءة والخامات', en: 'Lighting & Materials' },
    navAtlas: { ar: 'أطلس الطرز المعمارية', en: 'Architectural Atlas' },
    navStandards: { ar: 'معايير كود البناء SBC', en: 'SBC Standards' },
    navSaved: { ar: 'المشروعات المحفوظة', en: 'Saved Projects' },
    ctaEstimateNow: { ar: 'ابدأ التقدير الفوري', en: 'Estimate Now' },
    themeDark: { ar: 'الوضع الليلي الفاخر', en: 'Obsidian Studio' },
    themeLight: { ar: 'وضع النهار العاجي', en: 'Ivory Blueprint' },
    soundToggle: { ar: 'المؤثرات الصوتية', en: 'Architectural Audio' },

    // Hero Section
    heroBadge: { ar: 'هندسة معمارية ترتقي بمستقبل السكن الفاخر وفق رؤية 2030', en: 'Haute Architecture Elevated for Saudi Vision 2030' },
    heroTitlePart1: { ar: 'صياغة التحف المعمارية', en: 'Sculpting Architectural Masterpieces' },
    heroTitlePart2: { ar: 'وحساب أدق تكاليف البناء في المملكة', en: '& Precision Saudi Construction Costing' },
    heroDesc: {
      ar: 'منصة هندسية استشارية متكاملة تدمج فنون العمارة السلمانية والنجدية المعاصرة مع حاسبة تكاليف تنفيذية دقيقة متوافقة مع كود البناء السعودي (SBC)، واستوديو تفاعلي حي لمحاكاة الإضاءة والرخام والخامات الطبيعية.',
      en: 'A premier engineering platform synthesizing contemporary Salmani and Najdi aesthetics with precision SBC construction economics, paired with a real-time lighting and tactile material visualizer.'
    },
    heroBtnStart: { ar: 'حساب تكلفة فيلتك الآن', en: 'Calculate Your Villa Cost' },
    heroBtnExplore: { ar: 'استكشاف استوديو الخامات', en: 'Explore Material Studio' },
    heroStat1Val: { ar: '100%', en: '100%' },
    heroStat1Label: { ar: 'توافق كود البناء السعودي SBC', en: 'SBC Code Compliance' },
    heroStat2Val: { ar: '7', en: '7' },
    heroStat2Label: { ar: 'مراحل هندسية تفصيلية', en: 'Itemized Engineering Phases' },
    heroStat3Val: { ar: '98%', en: '98%' },
    heroStat3Label: { ar: 'دقة التقدير المالي للسوق', en: 'Market Costing Accuracy' },

    // Estimator Section
    estimatorTitle: { ar: 'حاسبة تكاليف البناء والتشطيب الذكية', en: 'Smart Construction & Finishing Cost Estimator' },
    estimatorSubtitle: { ar: 'تقدير مالي وهندسي فوري مبني على أسعار التوريد والتنفيذ الحالية في السوق السعودي', en: 'Instant engineering cost estimation reflecting current Saudi construction market benchmarks' },
    landAreaLabel: { ar: 'مساحة الأرض الإجمالية:', en: 'Total Land Area:' },
    footprintLabel: { ar: 'نسبة مسطح البناء بالأرض:', en: 'Building Footprint Ratio:' },
    citySelectLabel: { ar: 'المدينة / المنطقة الجغرافية:', en: 'City / Geographic Region:' },
    floorsConfigLabel: { ar: 'تكوين الأدوار والمستويات:', en: 'Floor Levels Configuration:' },
    floorBasement: { ar: 'طابق القبو (بدروم)', en: 'Basement Level' },
    floorGround: { ar: 'الدور الأرضي (أساسي)', en: 'Ground Floor (Core)' },
    floorFirst: { ar: 'الدور الأول (أجنحة النوم)', en: 'First Floor (Suites)' },
    floorAnnex: { ar: 'الملحق العلوي (بنتهاوس)', en: 'Rooftop Annex' },
    buaComputedLabel: { ar: 'إجمالي مسطحات البناء (BUA):', en: 'Total Built-Up Area (BUA):' },
    
    tierSelectTitle: { ar: 'مستوى وفئة التشطيب المعماري:', en: 'Architectural Finishing Tier:' },
    addOnsTitle: { ar: 'الأنظمة والترقيات الهندسية الذكية (Smart Add-ons):', en: 'Smart Engineering Upgrades & Systems:' },
    
    // Estimator Results
    resultsTitle: { ar: 'الموجز المالي والهندسي المعتمد', en: 'Certified Financial & Engineering Summary' },
    baseCostLabel: { ar: 'تكلفة البناء والتشطيب الأساسية:', en: 'Base Construction & Finishing:' },
    addOnsCostLabel: { ar: 'تكلفة الأنظمة والترقيات المضافة:', en: 'Smart Add-ons & Systems Cost:' },
    supervisionFeeLabel: { ar: 'الإشراف الهندسي وإدارة الجودة (5%):', en: 'Engineering Supervision & QA (5%):' },
    contingencyLabel: { ar: 'مخصص الطوارئ والمخاطر الهندسية (3%):', en: 'Contingency & Risk Reserve (3%):' },
    subtotalBeforeTaxLabel: { ar: 'المجموع قبل ضريبة القيمة المضافة:', en: 'Subtotal Before VAT:' },
    vatLabel: { ar: 'ضريبة القيمة المضافة (15%):', en: 'Saudi VAT (15%):' },
    grandTotalLabel: { ar: 'التكلفة الإجمالية التقديرية للمشروع:', en: 'Estimated Grand Total Project Cost:' },
    ratePerM2Label: { ar: 'متوسط تكلفة المتر المربع مسطح بنائي:', en: 'Average Cost per m² Built-Up Area:' },
    sarCurrency: { ar: 'ريال سعودي', en: 'SAR' },
    sarPerM2: { ar: 'ريال / م²', en: 'SAR / m²' },
    
    btnGenerateBOQ: { ar: 'توليد جدول الكميات وعرض السعر المعتمد (BOQ)', en: 'Generate Official BOQ & Engineering Proposal' },
    btnSaveEstimate: { ar: 'حفظ هذا التقدير للمقارنة', en: 'Save Estimate for Comparison' },
    
    phasesBreakdownTitle: { ar: 'توزيع التكلفة على المراحل الهندسية السبع (وفق كود SBC)', en: 'Cost Breakdown Across 7 Engineering Phases (SBC Aligned)' },

    // Lighting & Material Studio
    studioTitle: { ar: 'استوديو الإضاءة والخامات المعمارية التفاعلي', en: 'Interactive Lighting & Material Studio' },
    studioSubtitle: { ar: 'محاكاة حية لسقوط الضوء وتفاعل الرخام والأخشاب والأحجار الطبيعية في الصالون الملكي', en: 'Real-time ray & shadow simulation of marble, timber, and stone under varying color temperatures' },
    lightModeTitle: { ar: 'درجة حرارة ولون الإضاءة:', en: 'Lighting Temperature & Mood:' },
    lightDimmerLabel: { ar: 'شدة الإضاءة العامة (Dimmer):', en: 'Luminance Intensity (Dimmer):' },
    floorSelectTitle: { ar: 'خامة الأرضيات (Flooring):', en: 'Flooring Surface Material:' },
    wallSelectTitle: { ar: 'تكسية الجدران المعمارية (Wall Cladding):', en: 'Wall Architectural Cladding:' },
    harmonyScoreLabel: { ar: 'مؤشر التناغم المعماري:', en: 'Architectural Harmony Score:' },
    acousticLabel: { ar: 'مؤشر امتصاص الصوت (NRC):', en: 'Acoustic Absorption (NRC):' },
    thermalLabel: { ar: 'السعة الحرارية (Thermal Mass):', en: 'Thermal Mass Index:' },
    livingRoomEstimateLabel: { ar: 'تكلفة توريد وتركيب صالون 50م²:', en: 'Estimated Materials for 50m² Salon:' },
    applyMaterialsToEstimator: { ar: 'تطبيق هذه الخامات على حاسبة التكاليف', en: 'Apply Materials to Cost Estimator' },

    // Atlas
    atlasTitle: { ar: 'أطلس الطرز المعمارية السعودية والعالمية', en: 'Atlas of Saudi & Contemporary Architectural Styles' },
    atlasSubtitle: { ar: 'ستة طرز معمارية مختارة بعناية تعكس الهوية السعودية الأصيلة برؤية عالمية خالدة', en: 'Six curated architectural movements blending deep Saudi vernacular with Vision 2030 excellence' },
    filterAll: { ar: 'كافة الطرز', en: 'All Styles' },
    filterSalmani: { ar: 'العمارة السلمانية', en: 'Salmani' },
    filterHeritage: { ar: 'التراث المتطور (نجدي / حجازي)', en: 'Heritage Evolved' },
    filterMountain: { ar: 'العمارة الجبلية (عسير)', en: 'Mountain Highlands' },
    filterCoastal: { ar: 'العمارة الساحلية (البحر الأحمر)', en: 'Coastal Dune' },
    filterMinimalist: { ar: 'المينيماليزم المعاصر', en: 'Minimalist' },
    loadIntoEstimatorBtn: { ar: 'تحميل هذا الطراز في الحاسبة', en: 'Load Style into Estimator' },
    wwrLabel: { ar: 'نسبة النوافذ للواجهات:', en: 'Window-to-Wall (WWR):' },
    uValueLabel: { ar: 'العزل الحراري U-Value:', en: 'Thermal U-Value:' },
    timelineLabel: { ar: 'المدة التقديرية للتنفيذ:', en: 'Estimated Construction Time:' },
    monthsUnit: { ar: 'شهراً', en: 'months' },

    // Comparison View
    savedEstimatesTitle: { ar: 'مقارنة المشروعات والتقديرات المحفوظة', en: 'Saved Villa Estimates & Comparison Matrix' },
    savedEstimatesSubtitle: { ar: 'قارن بين سيناريوهات البناء المختلفة لاختيار البديل الأمثل لميزانيتك', en: 'Compare multiple villa scenarios side by side to pinpoint the optimal budget trajectory' },
    noSavedEstimates: { ar: 'لا توجد تقديرات محفوظة حالياً. استخدم زر "حفظ هذا التقدير للمقارنة" في الحاسبة أعلاه.', en: 'No saved estimates yet. Use "Save Estimate for Comparison" button in the estimator above.' },
    btnDeleteEstimate: { ar: 'حذف', en: 'Delete' },
    btnLoadEstimate: { ar: 'استرجاع في الحاسبة', en: 'Load in Estimator' },

    // Official BOQ Modal
    boqModalTitle: { ar: 'عرض سعر هندسي وجدول كميات معتمد (Official Engineering BOQ)', en: 'Official Engineering Proposal & Bill of Quantities' },
    boqDocHeader: { ar: 'المملكة العربية السعودية | كود البناء السعودي SBC 1101', en: 'Kingdom of Saudi Arabia | Saudi Building Code SBC 1101' },
    boqRefNo: { ar: 'رقم المرجع الهندسي:', en: 'Engineering Ref No:' },
    boqDate: { ar: 'تاريخ الإصدار:', en: 'Issue Date:' },
    boqClientLabel: { ar: 'اسم العميل الموقر:', en: 'Valued Client Name:' },
    boqDefaultClient: { ar: 'سعادة المالك الكريم', en: 'Distinguished Property Owner' },
    boqProjectLocation: { ar: 'موقع المشروع المقترح:', en: 'Project Location:' },
    boqSupervisingArchitect: { ar: 'كبير المعماريين المسؤول:', en: 'Lead System Architect:' },
    boqColItem: { ar: 'البند الهندسي ومجال العمل', en: 'Engineering Item & Scope' },
    boqColCode: { ar: 'المرجع بالكود', en: 'SBC Code' },
    boqColQty: { ar: 'المسطح / الكمية', en: 'Quantity' },
    boqColTotal: { ar: 'الإجمالي (ريال)', en: 'Total (SAR)' },
    boqColPercent: { ar: 'النسبة', en: 'Weight' },
    boqSealText: { ar: 'وثيقة تسعير هندسية معتمدة رقمياً ومطابقة لمعايير كود البناء السعودي SBC', en: 'Digitally verified engineering proposal strictly compliant with Saudi Building Code' },
    boqTermsTitle: { ar: 'الشروط والضمانات الهندسية المعتمدة:', en: 'Engineering Warranties & Contractual Terms:' },
    boqTerm1: { ar: 'ضمان إنشائي شامل لمدة 10 سنوات على الهيكل الخرساني والأساسات المعتمدة.', en: '10-Year comprehensive structural warranty on reinforced concrete framing and foundations.' },
    boqTerm2: { ar: 'ضمان لمدة 5 سنوات على أعمال العزل المائي للأسطح والقواعد ودورات المياه.', en: '5-Year certified warranty on roof and substructure membrane waterproofing systems.' },
    boqTerm3: { ar: 'ضمان لمدة 2 سنوات على التمديدات الكهروميكانيكية (MEP) وشبكات التكييف.', en: '2-Year warranty covering concealed MEP installations, ducting, and electrical safety gear.' },
    boqTerm4: { ar: 'الأسعار شاملة ضريبة القيمة المضافة 15% والتصاريح الهندسية المعتمدة من بلدي.', en: 'All itemized costs include 15% Saudi VAT and municipal engineering inspection approvals.' },
    btnPrintBOQ: { ar: 'طباعة وتصدير مستند رسمي (PDF)', en: 'Print & Export Official PDF' },
    btnCloseBOQ: { ar: 'إغلاق العرض', en: 'Close Proposal' },

    // Footer
    footerAbout: {
      ar: 'بُـنْـيان هو استوديو للتصميم المعماري والداخلي الفاخر وحساب تكاليف الإنشاءات في المملكة العربية السعودية، تأسس لتقديم حلول معمارية وهندسية تجمع بين أصالة العمارة السلمانية والنجدية وأحدث المعايير العالمية لكود البناء السعودي.',
      en: 'Bunyan is a luxury architectural and interior design studio and smart construction estimation platform in Saudi Arabia, marrying the soul of Salmani vernacular with cutting-edge engineering standards.'
    },
    footerRights: { ar: 'جميع الحقوق محفوظة © 2026 | استوديو بُـنْـيان المعماري', en: 'All Rights Reserved © 2026 | Bunyan Architectural Studio' },
    footerLeadCredit: { ar: 'تصميم وإشراف وتنفيذ المعماري: أ. طارق ابوعشي', en: 'Designed, Engineered & Supervised by Lead Architect: Tareq Aboushi' }
  };

  constructor() {
    const saved = localStorage.getItem('bunyan_lang');
    if (saved === 'ar' || saved === 'en') {
      this.currentLang = saved;
    } else {
      this.currentLang = 'ar';
    }
  }

  public init() {
    this.applyToDOM();
  }

  public getLang(): Language {
    return this.currentLang;
  }

  public setLanguage(lang: Language) {
    if (this.currentLang === lang) return;
    this.currentLang = lang;
    localStorage.setItem('bunyan_lang', lang);
    this.applyToDOM();
    this.notify();
  }

  public toggleLanguage(): Language {
    const next = this.currentLang === 'ar' ? 'en' : 'ar';
    this.setLanguage(next);
    return next;
  }

  public subscribe(cb: Listener) {
    this.listeners.push(cb);
  }

  public t(key: string): string {
    const entry = this.dictionary[key];
    if (!entry) return key;
    return entry[this.currentLang] || entry['ar'] || key;
  }

  private applyToDOM() {
    document.documentElement.lang = this.currentLang;
    document.documentElement.dir = this.currentLang === 'ar' ? 'rtl' : 'ltr';

    // Update all elements with data-i18n attribute
    document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && this.dictionary[key]) {
        el.textContent = this.t(key);
      }
    });

    // Update all elements with data-i18n-placeholder
    document.querySelectorAll<HTMLInputElement>('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && this.dictionary[key]) {
        el.placeholder = this.t(key);
      }
    });
  }

  private notify() {
    this.listeners.forEach((cb) => cb(this.currentLang));
  }
}

export const i18n = new I18nEngine();