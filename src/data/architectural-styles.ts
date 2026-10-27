/**
 * Curated Saudi Architectural Styles Atlas
 * Blending Saudi Heritage & Vision 2030 Global Modernity.
 */

export interface ArchitecturalStyle {
  id: string;
  titleAr: string;
  titleEn: string;
  regionAr: string;
  regionEn: string;
  category: 'salmani' | 'heritage' | 'mountain' | 'coastal' | 'minimalist';
  tagAr: string;
  tagEn: string;
  conceptAr: string;
  conceptEn: string;
  philosophicalQuoteAr: string;
  philosophicalQuoteEn: string;
  wwr: number; // Window to Wall Ratio %
  uValue: number; // Thermal Transmittance W/m2.K
  timelineMonths: number;
  budgetRangeSAR: string;
  featuresAr: string[];
  featuresEn: string[];
  presetEstimator: {
    landArea: number;
    footprintRatio: number;
    hasBasement: boolean;
    hasGroundFloor: boolean;
    hasFirstFloor: boolean;
    hasPenthouseAnnex: boolean;
    finishingTier: 'shell' | 'turnkey' | 'royal' | 'salmani';
    selectedAddOns: string[];
  };
  svgGraphic: string; // Architectural SVG illustration
}

export const ARCHITECTURAL_STYLES: ArchitecturalStyle[] = [
  {
    id: 'contemporary-salmani',
    titleAr: 'العمارة السلمانية المعاصرة',
    titleEn: 'Contemporary Salmani Architecture',
    regionAr: 'الرياض ووسط المملكة',
    regionEn: 'Riyadh & Central Province',
    category: 'salmani',
    tagAr: 'الأصالة والرؤية',
    tagEn: 'Heritage & Vision',
    conceptAr: 'طراز معماري أصيل أطلقه خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز، يجسد الهوية النجدية بمرونة وجماليات الحداثة العالمية عبر الكتل الحجرية الرصينة والفتحات الرأسية المتناسقة.',
    conceptEn: 'An authentic architectural movement established by King Salman, embodying Najdi identity with modern geometric proportions, vertical slit windows, and hand-chiseled Riyadh stone.',
    philosophicalQuoteAr: '«العمارة ليست مجرد جدران، بل هي مرآة الروح الوطنية وثبات الهوية في وجه العولمة»',
    philosophicalQuoteEn: '"Architecture is not merely walls; it is the physical mirror of national soul and enduring identity."',
    wwr: 32,
    uValue: 0.28,
    timelineMonths: 18,
    budgetRangeSAR: '3,200 - 4,500 / م²',
    featuresAr: [
      'تكسيات حجر الرياض الكريمي المنحوت ميكانيكياً',
      'نسب ذهبية في الفتحات الرأسية مع كاسرات شمسية ذكية',
      'فناء وسطي واسع يضمن الخصوصية العائلية المطلقة',
      'أبواب رئيسية عملاقة من خشب السدر والحديد المطروق'
    ],
    featuresEn: [
      'Mechanically anchored cream Riyadh limestone panels',
      'Golden-ratio vertical slits with integrated solar shading',
      'Generous central courtyard providing absolute privacy',
      'Monumental solid cedarwood pivot entry portal'
    ],
    presetEstimator: {
      landArea: 750,
      footprintRatio: 0.60,
      hasBasement: true,
      hasGroundFloor: true,
      hasFirstFloor: true,
      hasPenthouseAnnex: true,
      finishingTier: 'salmani',
      selectedAddOns: ['knx_smart_home', 'landscaped_courtyard', 'hydraulic_elevator']
    },
    svgGraphic: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="salmani_sky" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1e1b4b" stop-opacity="0.8"/>
          <stop offset="1" stop-color="#030712"/>
        </linearGradient>
        <linearGradient id="stone_gold" x1="0" y1="0" x2="400" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#f59e0b"/>
          <stop offset="1" stop-color="#b45309"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#salmani_sky)"/>
      <!-- Monumental Villa Block -->
      <rect x="70" y="80" width="260" height="130" rx="4" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="110" y="50" width="180" height="160" rx="2" fill="#0f172a" stroke="#d97706" stroke-width="1.5"/>
      <!-- Salmani Vertical Slits & Battlements -->
      <path d="M120 50 L130 50 L130 65 L140 65 L140 50 L150 50 L150 65 L160 65 L160 50 L170 50 L170 65 L180 65 L180 50 L190 50 L190 65 L200 65 L200 50 L210 50 L210 65 L220 65 L220 50 L230 50 L230 65 L240 65 L240 50 L250 50 L250 65 L260 65 L260 50 L270 50 L270 65 L280 65 L280 50" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <!-- Windows -->
      <rect x="140" y="90" width="16" height="50" rx="2" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8"/>
      <rect x="170" y="90" width="16" height="50" rx="2" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8"/>
      <rect x="214" y="90" width="16" height="50" rx="2" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8"/>
      <rect x="244" y="90" width="16" height="50" rx="2" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8"/>
      <!-- Grand Pivot Portal -->
      <rect x="180" y="150" width="40" height="60" rx="1" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
      <circle cx="210" cy="180" r="3" fill="#f59e0b"/>
      <!-- Ground Horizon & Travertine Walkway -->
      <line x1="30" y1="210" x2="370" y2="210" stroke="#f59e0b" stroke-opacity="0.5" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'modern-najdi-courtyard',
    titleAr: 'فيلا الفناء النجدي الحديث',
    titleEn: 'Modern Najdi Courtyard Villa',
    regionAr: 'الدرعية وحطين',
    regionEn: 'Diriyah & Hittin',
    category: 'heritage',
    tagAr: 'الخصوصية المناخية',
    tagEn: 'Climatic Sanctuary',
    conceptAr: 'إعادة إحياء العمارة الطينية النجدية العريقة بلغة المواد المعاصرة، حيث تتنفس الفيلا نحو الداخل من خلال فناء مشجر يوفر نسيم هواء طبيعي وخصوصية متناهية للعائلة.',
    conceptEn: 'A high-tech reinvention of mud-brick vernacular, inward-focused around a sunken oasis courtyard engineered for passive evaporative cooling and supreme family sanctuary.',
    philosophicalQuoteAr: '«البيت النجدي قلبٌ ينبض بالداخل، وجدارٌ صامد يحمي السكينة من ضجيج العالم»',
    philosophicalQuoteEn: '"The Najdi home is an inward-pulsing heart, wrapped in protective silence."',
    wwr: 28,
    uValue: 0.24,
    timelineMonths: 16,
    budgetRangeSAR: '2,800 - 3,800 / م²',
    featuresAr: [
      'فناء داخلي غاطس مزود بأشجار سدر ونوافير مائية حجرية',
      'تدرج الكتل المعمارية لمحاكاة أزقة بلدة الدرعية التاريخية',
      'تجاويف مثلثة (شرفات وفرجات) للتهوية الطبيعية والإضاءة الهادئة',
      'عزل حراري فائق يخفض استهلاك التكييف بنسبة تصل إلى 42%'
    ],
    featuresEn: [
      'Sunken courtyard with native Sidr trees and carved fountains',
      'Stepped geometric massing echoing historic Diriyah alleyways',
      'Traditional triangular apertures (Furajat) for airflow & soft light',
      'High-performance insulation cutting cooling energy by up to 42%'
    ],
    presetEstimator: {
      landArea: 600,
      footprintRatio: 0.65,
      hasBasement: false,
      hasGroundFloor: true,
      hasFirstFloor: true,
      hasPenthouseAnnex: true,
      finishingTier: 'royal',
      selectedAddOns: ['landscaped_courtyard', 'knx_smart_home', 'solar_energy']
    },
    svgGraphic: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="najdi_sky" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2d1b09" stop-opacity="0.9"/>
          <stop offset="1" stop-color="#030712"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#najdi_sky)"/>
      <!-- Courtyard Wings Left & Right -->
      <rect x="60" y="80" width="100" height="130" fill="#1e1810" stroke="#d97706" stroke-width="1.5"/>
      <rect x="240" y="80" width="100" height="130" fill="#1e1810" stroke="#d97706" stroke-width="1.5"/>
      <!-- Center Sunken Courtyard -->
      <rect x="160" y="140" width="80" height="70" fill="#0f172a" stroke="#10b981" stroke-width="1"/>
      <!-- Courtyard Tree -->
      <circle cx="200" cy="155" r="14" fill="#059669" fill-opacity="0.6"/>
      <line x1="200" y1="169" x2="200" y2="185" stroke="#78350f" stroke-width="3"/>
      <!-- Triangular Furajat Pattern -->
      <polygon points="90,105 100,90 110,105" fill="#f59e0b" fill-opacity="0.7"/>
      <polygon points="115,105 125,90 135,105" fill="#f59e0b" fill-opacity="0.7"/>
      <polygon points="270,105 280,90 290,105" fill="#f59e0b" fill-opacity="0.7"/>
      <polygon points="295,105 305,90 315,105" fill="#f59e0b" fill-opacity="0.7"/>
      <!-- Ground line -->
      <line x1="30" y1="210" x2="370" y2="210" stroke="#b45309" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'asir-highland-pavilion',
    titleAr: 'أجنحة الحجر العسيري والضباب',
    titleEn: 'Asir Highland Stone Pavilion',
    regionAr: 'أبها وجبال عسير',
    regionEn: 'Abha & Asir Highlands',
    category: 'mountain',
    tagAr: 'قمم الطبيعة والضباب',
    tagEn: 'Mist & Mountain Majesty',
    conceptAr: 'عمارة جبلية شامخة مستوحاة من قلاع وحصون منطقة عسير (رجال ألمع)، ترتكز على مداميك حجر المرو الأبيض والشست الداكن، مع إطلالات بانورامية تسبح في سحر الضباب والغيوم.',
    conceptEn: 'Rugged mountain architecture inspired by Asir fortress palaces, featuring stepped slate stone masonry layered with white quartz bands and sweeping glass terraces above the clouds.',
    philosophicalQuoteAr: '«في جبال عسير، تنبثق العمارة كصخرة من صلب الأرض، وتعانق السحاب بعزة وشموخ»',
    philosophicalQuoteEn: '"In Asir peaks, architecture rises from the living bedrock, touching the mist in timeless dignity."',
    wwr: 45,
    uValue: 0.22,
    timelineMonths: 20,
    budgetRangeSAR: '3,000 - 4,200 / م²',
    featuresAr: [
      'جدران حجرية جبلية مدعمة بمداميك المرو الأبيض العاكسة للضوء',
      'تراسات بانورامية واسعة معلقة تطل على منحدرات السودة والوديان',
      'مدافئ حطب مركزية مفتوحة مع مداخن حجرية بارتفاعات مزدوجة',
      'أسقف خشبية جمالية من جذوع العرعر العطري المقاوم للرطوبة'
    ],
    featuresEn: [
      'Indigenous slate stone layered with luminous white quartz belts',
      'Cantilevered panoramic terraces hovering over the mist valleys',
      'Double-height open stone hearth fireplaces with sculptural flues',
      'Aromatic native juniper timber exposed roof beams'
    ],
    presetEstimator: {
      landArea: 900,
      footprintRatio: 0.50,
      hasBasement: true,
      hasGroundFloor: true,
      hasFirstFloor: true,
      hasPenthouseAnnex: true,
      finishingTier: 'royal',
      selectedAddOns: ['infinity_pool', 'knx_smart_home', 'home_cinema_spa']
    },
    svgGraphic: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="asir_sky" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#042f2e" stop-opacity="0.8"/>
          <stop offset="1" stop-color="#022c22"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#asir_sky)"/>
      <!-- Stepped Fortress Towers -->
      <polygon points="80,210 110,70 170,70 180,210" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <polygon points="180,210 190,95 250,95 260,210" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>
      <polygon points="260,210 270,60 320,60 330,210" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- White Quartz Bands (مرو عسيري) -->
      <line x1="102" y1="105" x2="173" y2="105" stroke="#ffffff" stroke-width="3"/>
      <line x1="97" y1="140" x2="175" y2="140" stroke="#ffffff" stroke-width="3"/>
      <line x1="187" y1="125" x2="253" y2="125" stroke="#ffffff" stroke-width="3"/>
      <line x1="267" y1="95" x2="323" y2="95" stroke="#ffffff" stroke-width="3"/>
      <line x1="264" y1="135" x2="326" y2="135" stroke="#ffffff" stroke-width="3"/>
      <!-- Glass Terrace Cantilever -->
      <rect x="130" y="160" width="140" height="30" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
    </svg>`
  },
  {
    id: 'redsea-dune-residence',
    titleAr: 'قصر الكثبان الساحلي',
    titleEn: 'Red Sea Coastal Dune Residence',
    regionAr: 'أمالا والبحر الأحمر',
    regionEn: 'Amaala & Red Sea Coast',
    category: 'coastal',
    tagAr: 'الرفاهية التجددية',
    tagEn: 'Regenerative Marine Luxury',
    conceptAr: 'خطوط انسيابية منحنية تحاكي حركة الكثبان الرملية الذهبية وأمواج البحر الأحمر، مصنوعة من مواد طبيعية مستدامة وتندمج بالكامل مع البيئة البحرية الحساسة بنظام طاقة متجددة 100%.',
    conceptEn: 'Organic undulating curves emulating windswept dunes and Red Sea swells, engineered from bio-adaptive materials with zero carbon footprint and pristine private marina access.',
    philosophicalQuoteAr: '«العمارة التجددية لا تقف على الأرض متطفلة، بل تنمو منها كنبتة ساحلية تعيد إليها الحياة»',
    philosophicalQuoteEn: '"Regenerative design never intrudes upon the earth; it rises naturally as coastal flora giving back life."',
    wwr: 58,
    uValue: 0.20,
    timelineMonths: 22,
    budgetRangeSAR: '4,000 - 5,800 / م²',
    featuresAr: [
      'هيكل إنشائي منحني ثلاثي الأبعاد من الخشب الرقائقي الهندسي (Glulam)',
      'تكسيات حجرية مسامية ملحية تقاوم رطوبة البحر بنظام عزل ذكي',
      'مسبح إنفينيتي مياه بحرية مدمج مع الشاطئ الخاص والمرسى اليخوتي',
      'منظومة طاقة شمسية وتخزين بطاريات تعمل بنسبة 100% خارج الشبكة'
    ],
    featuresEn: [
      'Parametric 3D glulam curved timber superstructures',
      'Porous saline-resistant coral stone rain-screen panels',
      'Integrated saltwater infinity basin merging with private lagoon',
      '100% off-grid bifacial solar and microgrid lithium battery storage'
    ],
    presetEstimator: {
      landArea: 1200,
      footprintRatio: 0.50,
      hasBasement: false,
      hasGroundFloor: true,
      hasFirstFloor: true,
      hasPenthouseAnnex: false,
      finishingTier: 'salmani',
      selectedAddOns: ['infinity_pool', 'solar_energy', 'knx_smart_home']
    },
    svgGraphic: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dune_sky" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#082f49"/>
          <stop offset="1" stop-color="#030712"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#dune_sky)"/>
      <!-- Dynamic Dune Wave Canopy -->
      <path d="M40 180 Q120 70 200 130 T360 100 L360 210 L40 210 Z" fill="#0c4a6e" fill-opacity="0.5" stroke="#38bdf8" stroke-width="2"/>
      <!-- Lower Glass Pavilion Curve -->
      <path d="M80 180 Q160 110 240 150 T340 130" stroke="#f59e0b" stroke-width="2" fill="none"/>
      <!-- Glowing Swimming Lagoon -->
      <path d="M60 210 C120 195 240 195 340 210 Z" fill="#0284c7" fill-opacity="0.4"/>
    </svg>`
  },
  {
    id: 'minimalist-cantilever-villa',
    titleAr: 'الحداثة الزجاجية المينيمال',
    titleEn: 'Minimalist Cantilever Glass Villa',
    regionAr: 'شمال الرياض والواجهة البحرية بالخبر',
    regionEn: 'North Riyadh & Khobar Waterfront',
    category: 'minimalist',
    tagAr: 'النقاء المعماري',
    tagEn: 'Sculptural Minimalism',
    conceptAr: 'عمارة كتلية طائرة وجريئة تعتمد على بروزات خرسانية عملاقة تصل إلى 7 أمتار بدون أعمدة وسيطة، محاطة بواجهات زجاجية منزلقة من الأرضية للسقف تمحو الحدود بين الداخل والطبيعة.',
    conceptEn: 'Audacious cantilevered monolithic architecture with 7-meter column-free structural overhangs, surrounded by frameless motorized glass that completely dissolves interior-exterior thresholds.',
    philosophicalQuoteAr: '«الجمال هو كل ما لا يمكن حذفه دون الإخلال بجوهر المكان»',
    philosophicalQuoteEn: '"Perfection is reached not when there is nothing more to add, but when there is nothing left to take away."',
    wwr: 65,
    uValue: 0.19,
    timelineMonths: 17,
    budgetRangeSAR: '2,900 - 4,100 / م²',
    featuresAr: [
      'بروزات كابولية خرسانية مسبقة الإجهاد (Post-Tensioned) 7 أمتار',
      'واجهات زجاجية معمارية بدون فواصل ألمنيوم ظاهرة (Frameless)',
      'أرضيات مايكروسمنت إيطالي ممتدة بدون أي فواصل تمدد أرضية',
      'إضاءة خطية معمارية مخفية غائرة ومضبوطة سينمائياً'
    ],
    featuresEn: [
      '7-meter post-tensioned reinforced concrete cantilevers',
      'Structural frameless double Low-E motorized glass sliders',
      'Seamless continuous Italian microcement flooring surfaces',
      'Recessed architectural knife-edge cove LED channels'
    ],
    presetEstimator: {
      landArea: 650,
      footprintRatio: 0.55,
      hasBasement: true,
      hasGroundFloor: true,
      hasFirstFloor: true,
      hasPenthouseAnnex: true,
      finishingTier: 'royal',
      selectedAddOns: ['knx_smart_home', 'hydraulic_elevator', 'infinity_pool']
    },
    svgGraphic: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="minimal_sky" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#18181b"/>
          <stop offset="1" stop-color="#030712"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#minimal_sky)"/>
      <!-- Lower Ground Transparent Volume -->
      <rect x="120" y="130" width="180" height="80" fill="#27272a" stroke="#71717a" stroke-width="1.5"/>
      <!-- Massive Cantilever Upper Volume Flying Left -->
      <rect x="50" y="75" width="230" height="60" fill="#09090b" stroke="#f59e0b" stroke-width="2"/>
      <!-- Frameless Panoramic Glass -->
      <rect x="60" y="85" width="210" height="40" fill="#38bdf8" fill-opacity="0.2" stroke="#38bdf8" stroke-width="1"/>
      <line x1="30" y1="210" x2="370" y2="210" stroke="#f59e0b" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'neo-hejazi-rawasheen',
    titleAr: 'الرواشين الحجازية المطورة',
    titleEn: 'Neo-Hejazi Rawasheen Residence',
    regionAr: 'جدة التاريخية والساحل الغربي',
    regionEn: 'Historic Jeddah & Western Coast',
    category: 'heritage',
    tagAr: 'الخشب المنحوت والنسيم',
    tagEn: 'Artisanal Woodcraft & Breeze',
    conceptAr: 'تحفة هندسية تعيد صياغة رواشين ومشربيات جدة القديمة بقطع ليزري عالي الدقة وتقنيات حركة أوتوماتيكية تتفاعل مع حركة الشمس لضبط الظلال والتهوية الساحلية وتوفير راحة حرارية قصوى.',
    conceptEn: 'A masterful modernization of Jeddah rawashin mashrabiya lattice screens, utilizing precision CNC laser craftsmanship and kinetic facades that track sun orientation for optimal passive cooling.',
    philosophicalQuoteAr: '«الروشان ليس مجرد شباك، بل هو فن ترشيح النور واستراق النسيم بحياء وجمال»',
    philosophicalQuoteEn: '"The Rawasheen is an artistic instrument that filters daylight and invites coastal breezes in poise."',
    wwr: 38,
    uValue: 0.25,
    timelineMonths: 19,
    budgetRangeSAR: '3,100 - 4,300 / م²',
    featuresAr: [
      'مشربيات خشبية ورواشين هندسية ذات تحكم حركي ذكي بموضع الشمس',
      'حجر المنقبي البحري الطبيعي المستخدم في ترميم جدة التاريخية',
      'أفنية علوية رأسية مع مداخن سحب وتبريد هواء طبيعي (Wind-catchers)',
      'زخارف هندسية إسلامية معاصرة مدمجة مع زجاج عاكس ملون'
    ],
    featuresEn: [
      'Smart kinetic CNC carved teakwood Rawasheen lattices',
      'Authentic local coastal Mangabi stone wall claddings',
      'Vertical thermal wind-catcher towers inducing natural breeze',
      'Contemporary Islamic geometric motifs paired with dichroic glass'
    ],
    presetEstimator: {
      landArea: 800,
      footprintRatio: 0.60,
      hasBasement: false,
      hasGroundFloor: true,
      hasFirstFloor: true,
      hasPenthouseAnnex: true,
      finishingTier: 'royal',
      selectedAddOns: ['knx_smart_home', 'landscaped_courtyard', 'hydraulic_elevator']
    },
    svgGraphic: `<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hejazi_sky" x1="0" y1="0" x2="0" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1e1b4b"/>
          <stop offset="1" stop-color="#030712"/>
        </linearGradient>
      </defs>
      <rect width="400" height="240" fill="url(#hejazi_sky)"/>
      <!-- Tall Multi-Level Hejazi Facade -->
      <rect x="100" y="45" width="200" height="165" fill="#18181b" stroke="#f59e0b" stroke-width="1.5"/>
      <!-- Projecting Rawasheen Bay Windows -->
      <rect x="120" y="70" width="55" height="75" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
      <rect x="225" y="70" width="55" height="75" fill="#451a03" stroke="#f59e0b" stroke-width="1.5"/>
      <!-- Laser-cut Mashrabiya Crosshatch Grid -->
      <line x1="120" y1="85" x2="175" y2="85" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="120" y1="100" x2="175" y2="100" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="120" y1="115" x2="175" y2="115" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="120" y1="130" x2="175" y2="130" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="225" y1="85" x2="280" y2="85" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="225" y1="100" x2="280" y2="100" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="225" y1="115" x2="280" y2="115" stroke="#f59e0b" stroke-width="0.8"/>
      <line x1="225" y1="130" x2="280" y2="130" stroke="#f59e0b" stroke-width="0.8"/>
      <!-- Arched Grand Portal -->
      <path d="M180 210 L180 165 Q200 145 220 165 L220 210 Z" fill="#292524" stroke="#f59e0b" stroke-width="1.5"/>
    </svg>`
  }
];