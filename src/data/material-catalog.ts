/**
 * Material Catalog & Lighting Modes Specification
 * For the Interactive Luxury Lounge Visualizer & Moodboard Studio.
 */

export interface MaterialSwatch {
  id: string;
  type: 'flooring' | 'wall';
  nameAr: string;
  nameEn: string;
  originAr: string;
  originEn: string;
  pricePerM2: number; // SAR per m2
  acousticNRC: number; // Noise Reduction Coefficient (0 to 1)
  thermalMass: 'High' | 'Medium' | 'Low';
  textureColor: string;
  secondaryColor: string;
  renderPattern: string; // CSS or canvas drawing helper
  descriptionAr: string;
  descriptionEn: string;
}

export interface LightingMode {
  id: string;
  tempK: number;
  nameAr: string;
  nameEn: string;
  subtitleAr: string;
  subtitleEn: string;
  ambientColor: string; // CSS color overlay
  spotlightIntensity: number;
  shadowBlur: number;
  coveColor: string;
  descriptionAr: string;
  descriptionEn: string;
}

export const FLOORING_MATERIALS: MaterialSwatch[] = [
  {
    id: 'statuario-marble',
    type: 'flooring',
    nameAr: 'رخام ستتواريو إيطالي ملكي',
    nameEn: 'Italian Royal Statuario Marble',
    originAr: 'كارارا، إيطاليا',
    originEn: 'Carrara, Italy',
    pricePerM2: 780,
    acousticNRC: 0.05,
    thermalMass: 'High',
    textureColor: '#f8fafc',
    secondaryColor: '#94a3b8',
    renderPattern: 'marble-vein',
    descriptionAr: 'ألواح رخام طبيعي من أندر محاجر إيطاليا، ناصعة البياض بعروق رمادية وذهبية متناغمة تعكس الفخامة الملكية المطلقة.',
    descriptionEn: 'Pure crystalline white marble with expressive grey and subtle gold veining, polished to mirror brilliance.'
  },
  {
    id: 'saudi-travertine',
    type: 'flooring',
    nameAr: 'ترافرتين رملي طبيعي قص أوتار',
    nameEn: 'Saudi Vein-Cut Dune Travertine',
    originAr: 'المنطقة الوسطى، السعودية',
    originEn: 'Central Region, Saudi Arabia',
    pricePerM2: 380,
    acousticNRC: 0.12,
    thermalMass: 'High',
    textureColor: '#e7e5e4',
    secondaryColor: '#d6d3d1',
    renderPattern: 'travertine-lines',
    descriptionAr: 'حجر ترافرتين طبيعي دافئ بمسام محكمة معالجة حرارياً، يمنح إحساساً بالهدوء والاتصال بالأرض والتاريخ.',
    descriptionEn: 'Earthy travertine with subtle linear banding and honed velvety texture, evoking timeless desert tranquility.'
  },
  {
    id: 'american-walnut',
    type: 'flooring',
    nameAr: 'باركيه خشب جوز أمريكي شيفرون',
    nameEn: 'American Walnut Chevron Parquet',
    originAr: 'فيرمونت، الولايات المتحدة',
    originEn: 'Vermont, USA',
    pricePerM2: 450,
    acousticNRC: 0.25,
    thermalMass: 'Medium',
    textureColor: '#451a03',
    secondaryColor: '#78350f',
    renderPattern: 'chevron-wood',
    descriptionAr: 'خشب جوز طبيعي مجفف بنظام الأفران، مركب بنمط الزاوية الفرنسية Chevron لتوفير دفء استثنائي وراحة صوتية.',
    descriptionEn: 'Kiln-dried solid American walnut arranged in 45-degree French chevron, offering unparalleled acoustic comfort.'
  },
  {
    id: 'seamless-microcement',
    type: 'flooring',
    nameAr: 'مايكروسمنت عصري ممتد بدون فواصل',
    nameEn: 'Seamless Architectural Microcement',
    originAr: 'ميلانو، إيطاليا',
    originEn: 'Milan, Italy',
    pricePerM2: 320,
    acousticNRC: 0.10,
    thermalMass: 'Medium',
    textureColor: '#64748b',
    secondaryColor: '#475569',
    renderPattern: 'smooth-cement',
    descriptionAr: 'سطح إسمنتي بوليمري فائق المتانة ومقاوم للخدش، يعطي صبغة مينيمالية حديثة تمتد بسلاسة بين الصالات والتراسات.',
    descriptionEn: 'Polymer-modified ultra-thin seamless mineral overlay with cloud-like textures and industrial sophistication.'
  }
];

export const WALL_MATERIALS: MaterialSwatch[] = [
  {
    id: 'carved-riyadh-stone',
    type: 'wall',
    nameAr: 'حجر الرياض الطبيعي المنحوت بأخاديد',
    nameEn: 'Fluted Carved Riyadh Limestone',
    originAr: 'ضرما والرياض، السعودية',
    originEn: 'Dhurma & Riyadh, Saudi Arabia',
    pricePerM2: 520,
    acousticNRC: 0.40,
    thermalMass: 'High',
    textureColor: '#fef3c7',
    secondaryColor: '#d97706',
    renderPattern: 'fluted-groove',
    descriptionAr: 'تكسيات جدارية ثلاثية الأبعاد بأخاديد معمارية عمودية تعكس الضوء الساقط وتضفي عمقاً ونقاءً مستوحى من العمارة السلمانية.',
    descriptionEn: 'Vertical fluted architectural stone cladding capturing grazing raking light with majestic sculptural presence.'
  },
  {
    id: 'venetian-plaster',
    type: 'wall',
    nameAr: 'جص فينيسي إيطالي رخامي ناعم',
    nameEn: 'Warm Venetian Marmorino Plaster',
    originAr: 'البندقية، إيطاليا',
    originEn: 'Venice, Italy',
    pricePerM2: 240,
    acousticNRC: 0.15,
    thermalMass: 'Medium',
    textureColor: '#f1f5f9',
    secondaryColor: '#cbd5e1',
    renderPattern: 'marmorino-sheen',
    descriptionAr: 'معجون جيري نقي مشتق من مسحوق الرخام ومصقول يدوياً بالمالج لإعطاء بريق شمعي حريري رقيق مع انعكاس ضوئي ناعم.',
    descriptionEn: 'Slaked-lime and crushed marble troweled plaster, polished to a silky satin sheen with depth and gentle luminescence.'
  },
  {
    id: 'acoustic-oak-slats',
    type: 'wall',
    nameAr: 'بديل خشب بلوط مع عازل صوتي',
    nameEn: 'Acoustic Natural Oak Linear Slats',
    originAr: 'الدانمارك وغابات البلطيق',
    originEn: 'Denmark & Baltic Forests',
    pricePerM2: 390,
    acousticNRC: 0.85,
    thermalMass: 'Low',
    textureColor: '#b45309',
    secondaryColor: '#1e293b',
    renderPattern: 'acoustic-slats',
    descriptionAr: 'شرائح خشب بلوط طبيعي متراصة على طبقة لباد بوليسترين معالج صوتياً، تمتص الصدى بنسبة 85% وتمنح شعوراً بالدفء الأسكندنافي الفاخر.',
    descriptionEn: 'Architectural natural oak slats mounted on recycled acoustic felt, achieving NRC 0.85 for pristine acoustic tranquility.'
  },
  {
    id: 'brushed-brass-panels',
    type: 'wall',
    nameAr: 'ألواح نحاس مسحوب مع إنارة غائرة',
    nameEn: 'Brushed Architectural Brass Panels',
    originAr: 'ألمانيا',
    originEn: 'Germany',
    pricePerM2: 640,
    acousticNRC: 0.08,
    thermalMass: 'Medium',
    textureColor: '#d97706',
    secondaryColor: '#92400e',
    renderPattern: 'brushed-metal',
    descriptionAr: 'ألواح معدنية من النحاس الأصفر المعالج كيميائياً ضد الأكسدة، تعكس إنارة الـ LED الدافئة بلمعان ملكي جذاب.',
    descriptionEn: 'Precision anodized brushed architectural brass sheets that catch cove light with regal champagne luminescence.'
  }
];

export const LIGHTING_MODES: LightingMode[] = [
  {
    id: 'mode-2700k',
    tempK: 2700,
    nameAr: 'إضاءة مسائية دافئة (2700K)',
    nameEn: '2700K Warm Lounge Ambient',
    subtitleAr: 'استرخاء فاخر وراحة بصرية مسائية',
    subtitleEn: 'Intimate evening luxury and serene unwinding',
    ambientColor: 'rgba(245, 158, 11, 0.28)',
    spotlightIntensity: 0.85,
    shadowBlur: 24,
    coveColor: '#f59e0b',
    descriptionAr: 'درجة حرارة لون دافئة تبرز ألوان الأخشاب والرخام وتمنح الصالون طابعاً حميمياً ملكياً مثالياً للأمسيات العائلية واستقبال الضيوف.',
    descriptionEn: 'Rich amber luminescence accentuating wood grains and marble veins, ideal for intimate gatherings and visual serenity.'
  },
  {
    id: 'mode-3500k',
    tempK: 3500,
    nameAr: 'شمس الأصيل الذهبية (3500K)',
    nameEn: '3500K Golden Hour Radiance',
    subtitleAr: 'وهج شمس المغيب الطبيعي المتوازن',
    subtitleEn: 'Balanced golden afternoon daylight and warmth',
    ambientColor: 'rgba(251, 191, 36, 0.20)',
    spotlightIntensity: 0.95,
    shadowBlur: 18,
    coveColor: '#fbbf24',
    descriptionAr: 'إضاءة ذهبية متوازنة بين الدفء والنقاء، تحاكي ضوء الشمس في ساعات ما قبل الغروب وتظهر أدق تفاصيل الحجر الطبيعي.',
    descriptionEn: 'Golden equilibrium between warm glow and neutral crispness, simulating sunset rays streaming through tall windows.'
  },
  {
    id: 'mode-5000k',
    tempK: 5000,
    nameAr: 'إضاءة معارض نهارية (5000K)',
    nameEn: '5000K Gallery Neutral Daylight',
    subtitleAr: 'وضوح ونقاء معماري عالي الدقة (CRI > 95)',
    subtitleEn: 'Architectural clarity with true color rendering',
    ambientColor: 'rgba(56, 189, 248, 0.15)',
    spotlightIntensity: 1.0,
    shadowBlur: 12,
    coveColor: '#38bdf8',
    descriptionAr: 'ضوء ناصع محايد بأعلى معامل إظهار لوني، مخصص لإبراز اللوحات الفنية والتصميم الهندسي دون أي تشويه للألوان الطبيعية.',
    descriptionEn: 'High CRI daylight simulation revealing genuine material tones, art installations, and structural contours.'
  },
  {
    id: 'mode-night-cove',
    tempK: 2200,
    nameAr: 'إضاءة مخفية ليلية فاخرة (Cove LED)',
    nameEn: 'Architectural Night Cove LED',
    subtitleAr: 'دراما سينمائية وظلال هندسية عميقة',
    subtitleEn: 'Cinematic drama with floating ceiling linear wash',
    ambientColor: 'rgba(30, 27, 75, 0.45)',
    spotlightIntensity: 0.45,
    shadowBlur: 35,
    coveColor: '#d97706',
    descriptionAr: 'إضاءة خطية غير مباشرة غائرة في تجاويف الأسقف والستائر، تخلق تأثيراً عائماً يضفي فخامة فندقية استثنائية في هدوء الليل.',
    descriptionEn: 'Concealed perimeter LED grazing walls and floating ceiling trays with deep contrast and hotel-suite prestige.'
  }
];

export function calculateHarmonyScore(floor: MaterialSwatch, wall: MaterialSwatch, light: LightingMode): {
  score: number;
  acousticScore: number;
  thermalScore: number;
  totalAreaCost50m2: number;
  evaluationAr: string;
  evaluationEn: string;
} {
  let score = 90;

  // Synergy rules
  if (floor.id === 'statuario-marble' && wall.id === 'acoustic-oak-slats') {
    score = 98; // Marble + wood slats is an architectural masterclass
  } else if (floor.id === 'saudi-travertine' && wall.id === 'carved-riyadh-stone') {
    score = 97; // Monolithic desert luxury
  } else if (floor.id === 'american-walnut' && wall.id === 'brushed-brass-panels') {
    score = 96; // Mid-century royal decadence
  } else if (floor.id === 'seamless-microcement' && wall.id === 'acoustic-oak-slats') {
    score = 95; // Contemporary Japandi / Minimalist
  } else if (floor.id === 'statuario-marble' && wall.id === 'brushed-brass-panels') {
    score = 94; // Haute luxury
  }

  // Lighting synergy
  if (light.id === 'mode-2700k' && (floor.id === 'american-walnut' || wall.id === 'acoustic-oak-slats')) {
    score = Math.min(100, score + 2);
  }

  const combinedAcousticNRC = (floor.acousticNRC + wall.acousticNRC) / 2;
  const acousticScore = Math.round(combinedAcousticNRC * 100);

  const thermalScore = floor.thermalMass === 'High' && wall.thermalMass === 'High' ? 95 : 85;

  // Assuming a living lounge area of 50 m2 floor + 75 m2 wall cladding
  const totalAreaCost50m2 = floor.pricePerM2 * 50 + wall.pricePerM2 * 75;

  let evalAr = 'تناغم معماري فائق يوازن بين كفاءة العزل الصوتي وانعكاسات الضوء الطبيعي والراحة البصرية.';
  let evalEn = 'Superior architectural synergy harmonizing acoustic absorption, daylight reflections, and tactile prestige.';

  if (score >= 97) {
    evalAr = 'اقتران استثنائي معتمد في مشاريع القصور الملكية؛ يجمع بين صدى الفخامة والدفء الصوتي المثالي.';
    evalEn = 'Exceptional royal-grade pairing combining monumental elegance with acoustically tuned warmth.';
  }

  return {
    score,
    acousticScore,
    thermalScore,
    totalAreaCost50m2,
    evaluationAr: evalAr,
    evaluationEn: evalEn
  };
}