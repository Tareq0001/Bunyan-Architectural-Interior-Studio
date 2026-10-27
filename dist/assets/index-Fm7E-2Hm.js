var V=Object.defineProperty;var O=(h,e,i)=>e in h?V(h,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):h[e]=i;var s=(h,e,i)=>O(h,typeof e!="symbol"?e+"":e,i);import{g as z}from"./gsap-CzGW6FVa.js";import{c as q}from"./confetti-oQXWb4Lk.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function i(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(a){if(a.ep)return;a.ep=!0;const n=i(a);fetch(a.href,n)}})();class U{constructor(e){s(this,"canvas");s(this,"ctx");s(this,"width",0);s(this,"height",0);s(this,"dpr",1);s(this,"mouseX",0);s(this,"mouseY",0);s(this,"targetMouseX",0);s(this,"targetMouseY",0);s(this,"particles",[]);s(this,"animId",0);const i=document.getElementById(e);if(!i||!(i instanceof HTMLCanvasElement))throw new Error(`Canvas element #${e} not found`);this.canvas=i;const t=this.canvas.getContext("2d");if(!t)throw new Error("Could not get 2D context");this.ctx=t,this.init()}init(){this.handleResize(),window.addEventListener("resize",()=>this.handleResize()),window.addEventListener("mousemove",i=>{this.targetMouseX=i.clientX,this.targetMouseY=i.clientY});const e=Math.min(Math.floor(this.width*this.height/25e3),55);this.particles=[];for(let i=0;i<e;i++)this.particles.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4,size:Math.random()*2+1,baseAlpha:Math.random()*.4+.15});this.startLoop()}handleResize(){this.dpr=Math.min(window.devicePixelRatio||1,2),this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*this.dpr,this.canvas.height=this.height*this.dpr,this.canvas.style.width=`${this.width}px`,this.canvas.style.height=`${this.height}px`,this.ctx.scale(this.dpr,this.dpr)}startLoop(){const e=()=>{this.render(),this.animId=requestAnimationFrame(e)};this.animId=requestAnimationFrame(e)}render(){this.mouseX+=(this.targetMouseX-this.mouseX)*.05,this.mouseY+=(this.targetMouseY-this.mouseY)*.05,this.ctx.clearRect(0,0,this.width,this.height);const e=document.documentElement.getAttribute("data-theme")==="light",i=e?"rgba(15, 23, 42, 0.04)":"rgba(245, 158, 11, 0.04)",t=e?"rgba(2, 132, 199, 0.03)":"rgba(56, 189, 248, 0.035)",a=e?"rgba(217, 119, 6,":"rgba(245, 158, 11,",n=80,o=(this.mouseX-this.width/2)*.03,c=(this.mouseY-this.height/2)*.03;this.ctx.beginPath(),this.ctx.strokeStyle=i,this.ctx.lineWidth=1;for(let d=-n;d<this.width+n;d+=n)this.ctx.moveTo(d+o,0),this.ctx.lineTo(d+o*1.5,this.height);for(let d=-n;d<this.height+n;d+=n)this.ctx.moveTo(0,d+c),this.ctx.lineTo(this.width,d+c*1.5);this.ctx.stroke(),this.ctx.beginPath(),this.ctx.strokeStyle=t,this.ctx.lineWidth=.8;const m=n*2;for(let d=-this.height;d<this.width+this.height;d+=m)this.ctx.moveTo(d+o*.5,0),this.ctx.lineTo(d+this.height+o*.5,this.height);this.ctx.stroke();for(let d=0;d<this.particles.length;d++){const l=this.particles[d];l.x+=l.vx,l.y+=l.vy,l.x<0&&(l.x=this.width),l.x>this.width&&(l.x=0),l.y<0&&(l.y=this.height),l.y>this.height&&(l.y=0);const p=this.mouseX-l.x,u=this.mouseY-l.y,f=Math.sqrt(p*p+u*u);if(f<180){const y=(180-f)/180;l.x-=p/f*y*1.5,l.y-=u/f*y*1.5}this.ctx.beginPath(),this.ctx.arc(l.x,l.y,l.size,0,Math.PI*2),this.ctx.fillStyle=`${a} ${l.baseAlpha})`,this.ctx.fill();for(let y=d+1;y<this.particles.length;y++){const w=this.particles[y],A=l.x-w.x,C=l.y-w.y,k=Math.sqrt(A*A+C*C);if(k<120){const L=(1-k/120)*.18;this.ctx.beginPath(),this.ctx.moveTo(l.x,l.y),this.ctx.lineTo(w.x,w.y),this.ctx.strokeStyle=`${a} ${L})`,this.ctx.lineWidth=.75,this.ctx.stroke()}}}}destroy(){cancelAnimationFrame(this.animId)}}class x{static initTiltCards(e=".tilt-card"){document.querySelectorAll(e).forEach(t=>{t.onmousemove=a=>{const n=t.getBoundingClientRect(),o=a.clientX-n.left,c=a.clientY-n.top,m=n.width/2,d=n.height/2,l=(c-d)/d*-7,p=(o-m)/m*7;t.style.setProperty("--spot-x",`${o}px`),t.style.setProperty("--spot-y",`${c}px`),t.style.transform=`perspective(1000px) rotateX(${l.toFixed(2)}deg) rotateY(${p.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`},t.onmouseleave=()=>{t.style.transform="perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"}})}static initScrollReveals(){const e=new IntersectionObserver(i=>{i.forEach(t=>{if(t.isIntersecting){const a=t.target;z.fromTo(a,{opacity:0,y:35},{opacity:1,y:0,duration:.85,ease:"power3.out",stagger:.08,clearProps:"transform"}),e.unobserve(a)}})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".reveal-on-scroll").forEach(i=>{e.observe(i)})}static animateCounter(e,i,t=1.2,a="",n=""){const o={val:0};z.to(o,{val:i,duration:t,ease:"power2.out",onUpdate:()=>{e.textContent=`${a}${Math.round(o.val).toLocaleString("en-US")}${n}`}})}static fireCelebration(){try{const i={origin:{y:.7},zIndex:1e4},t=(a,n)=>{q({...i,...n,particleCount:Math.floor(180*a)})};t(.25,{spread:26,startVelocity:55,colors:["#f59e0b","#fbbf24","#d97706"]}),t(.2,{spread:60,colors:["#38bdf8","#0284c7","#ffffff"]}),t(.35,{spread:100,decay:.91,scalar:.8,colors:["#10b981","#f59e0b","#38bdf8"]}),t(.1,{spread:120,startVelocity:25,decay:.92,scalar:1.2,colors:["#fef3c7","#dbeafe"]}),t(.1,{spread:120,startVelocity:45,colors:["#f59e0b","#38bdf8"]})}catch{}}}class G{constructor(){s(this,"currentLang","ar");s(this,"listeners",[]);s(this,"dictionary",{brandName:{ar:"بُـنْـيان",en:"BUNYAN"},brandTagline:{ar:"استوديو التصميم المعماري والداخلي الفاخر وحاسبة البناء الذكية",en:"Architectural & Interior Studio | Smart Construction Estimator"},leadArchitectLabel:{ar:"إشراف وتصميم المعماري:",en:"Lead Architect & Designer:"},leadArchitectName:{ar:"أ. طارق ابوعشي",en:"Tareq Aboushi"},navEstimator:{ar:"حاسبة التكاليف الفاخرة",en:"Cost Estimator"},navStudio:{ar:"استوديو الإضاءة والخامات",en:"Lighting & Materials"},navAtlas:{ar:"أطلس الطرز المعمارية",en:"Architectural Atlas"},navStandards:{ar:"معايير كود البناء SBC",en:"SBC Standards"},navSaved:{ar:"المشروعات المحفوظة",en:"Saved Projects"},ctaEstimateNow:{ar:"ابدأ التقدير الفوري",en:"Estimate Now"},themeDark:{ar:"الوضع الليلي الفاخر",en:"Obsidian Studio"},themeLight:{ar:"وضع النهار العاجي",en:"Ivory Blueprint"},soundToggle:{ar:"المؤثرات الصوتية",en:"Architectural Audio"},heroBadge:{ar:"هندسة معمارية ترتقي بمستقبل السكن الفاخر وفق رؤية 2030",en:"Haute Architecture Elevated for Saudi Vision 2030"},heroTitlePart1:{ar:"صياغة التحف المعمارية",en:"Sculpting Architectural Masterpieces"},heroTitlePart2:{ar:"وحساب أدق تكاليف البناء في المملكة",en:"& Precision Saudi Construction Costing"},heroDesc:{ar:"منصة هندسية استشارية متكاملة تدمج فنون العمارة السلمانية والنجدية المعاصرة مع حاسبة تكاليف تنفيذية دقيقة متوافقة مع كود البناء السعودي (SBC)، واستوديو تفاعلي حي لمحاكاة الإضاءة والرخام والخامات الطبيعية.",en:"A premier engineering platform synthesizing contemporary Salmani and Najdi aesthetics with precision SBC construction economics, paired with a real-time lighting and tactile material visualizer."},heroBtnStart:{ar:"حساب تكلفة فيلتك الآن",en:"Calculate Your Villa Cost"},heroBtnExplore:{ar:"استكشاف استوديو الخامات",en:"Explore Material Studio"},heroStat1Val:{ar:"100%",en:"100%"},heroStat1Label:{ar:"توافق كود البناء السعودي SBC",en:"SBC Code Compliance"},heroStat2Val:{ar:"7",en:"7"},heroStat2Label:{ar:"مراحل هندسية تفصيلية",en:"Itemized Engineering Phases"},heroStat3Val:{ar:"98%",en:"98%"},heroStat3Label:{ar:"دقة التقدير المالي للسوق",en:"Market Costing Accuracy"},estimatorTitle:{ar:"حاسبة تكاليف البناء والتشطيب الذكية",en:"Smart Construction & Finishing Cost Estimator"},estimatorSubtitle:{ar:"تقدير مالي وهندسي فوري مبني على أسعار التوريد والتنفيذ الحالية في السوق السعودي",en:"Instant engineering cost estimation reflecting current Saudi construction market benchmarks"},landAreaLabel:{ar:"مساحة الأرض الإجمالية:",en:"Total Land Area:"},footprintLabel:{ar:"نسبة مسطح البناء بالأرض:",en:"Building Footprint Ratio:"},citySelectLabel:{ar:"المدينة / المنطقة الجغرافية:",en:"City / Geographic Region:"},floorsConfigLabel:{ar:"تكوين الأدوار والمستويات:",en:"Floor Levels Configuration:"},floorBasement:{ar:"طابق القبو (بدروم)",en:"Basement Level"},floorGround:{ar:"الدور الأرضي (أساسي)",en:"Ground Floor (Core)"},floorFirst:{ar:"الدور الأول (أجنحة النوم)",en:"First Floor (Suites)"},floorAnnex:{ar:"الملحق العلوي (بنتهاوس)",en:"Rooftop Annex"},buaComputedLabel:{ar:"إجمالي مسطحات البناء (BUA):",en:"Total Built-Up Area (BUA):"},tierSelectTitle:{ar:"مستوى وفئة التشطيب المعماري:",en:"Architectural Finishing Tier:"},addOnsTitle:{ar:"الأنظمة والترقيات الهندسية الذكية (Smart Add-ons):",en:"Smart Engineering Upgrades & Systems:"},resultsTitle:{ar:"الموجز المالي والهندسي المعتمد",en:"Certified Financial & Engineering Summary"},baseCostLabel:{ar:"تكلفة البناء والتشطيب الأساسية:",en:"Base Construction & Finishing:"},addOnsCostLabel:{ar:"تكلفة الأنظمة والترقيات المضافة:",en:"Smart Add-ons & Systems Cost:"},supervisionFeeLabel:{ar:"الإشراف الهندسي وإدارة الجودة (5%):",en:"Engineering Supervision & QA (5%):"},contingencyLabel:{ar:"مخصص الطوارئ والمخاطر الهندسية (3%):",en:"Contingency & Risk Reserve (3%):"},subtotalBeforeTaxLabel:{ar:"المجموع قبل ضريبة القيمة المضافة:",en:"Subtotal Before VAT:"},vatLabel:{ar:"ضريبة القيمة المضافة (15%):",en:"Saudi VAT (15%):"},grandTotalLabel:{ar:"التكلفة الإجمالية التقديرية للمشروع:",en:"Estimated Grand Total Project Cost:"},ratePerM2Label:{ar:"متوسط تكلفة المتر المربع مسطح بنائي:",en:"Average Cost per m² Built-Up Area:"},sarCurrency:{ar:"ريال سعودي",en:"SAR"},sarPerM2:{ar:"ريال / م²",en:"SAR / m²"},btnGenerateBOQ:{ar:"توليد جدول الكميات وعرض السعر المعتمد (BOQ)",en:"Generate Official BOQ & Engineering Proposal"},btnSaveEstimate:{ar:"حفظ هذا التقدير للمقارنة",en:"Save Estimate for Comparison"},phasesBreakdownTitle:{ar:"توزيع التكلفة على المراحل الهندسية السبع (وفق كود SBC)",en:"Cost Breakdown Across 7 Engineering Phases (SBC Aligned)"},studioTitle:{ar:"استوديو الإضاءة والخامات المعمارية التفاعلي",en:"Interactive Lighting & Material Studio"},studioSubtitle:{ar:"محاكاة حية لسقوط الضوء وتفاعل الرخام والأخشاب والأحجار الطبيعية في الصالون الملكي",en:"Real-time ray & shadow simulation of marble, timber, and stone under varying color temperatures"},lightModeTitle:{ar:"درجة حرارة ولون الإضاءة:",en:"Lighting Temperature & Mood:"},lightDimmerLabel:{ar:"شدة الإضاءة العامة (Dimmer):",en:"Luminance Intensity (Dimmer):"},floorSelectTitle:{ar:"خامة الأرضيات (Flooring):",en:"Flooring Surface Material:"},wallSelectTitle:{ar:"تكسية الجدران المعمارية (Wall Cladding):",en:"Wall Architectural Cladding:"},harmonyScoreLabel:{ar:"مؤشر التناغم المعماري:",en:"Architectural Harmony Score:"},acousticLabel:{ar:"مؤشر امتصاص الصوت (NRC):",en:"Acoustic Absorption (NRC):"},thermalLabel:{ar:"السعة الحرارية (Thermal Mass):",en:"Thermal Mass Index:"},livingRoomEstimateLabel:{ar:"تكلفة توريد وتركيب صالون 50م²:",en:"Estimated Materials for 50m² Salon:"},applyMaterialsToEstimator:{ar:"تطبيق هذه الخامات على حاسبة التكاليف",en:"Apply Materials to Cost Estimator"},atlasTitle:{ar:"أطلس الطرز المعمارية السعودية والعالمية",en:"Atlas of Saudi & Contemporary Architectural Styles"},atlasSubtitle:{ar:"ستة طرز معمارية مختارة بعناية تعكس الهوية السعودية الأصيلة برؤية عالمية خالدة",en:"Six curated architectural movements blending deep Saudi vernacular with Vision 2030 excellence"},filterAll:{ar:"كافة الطرز",en:"All Styles"},filterSalmani:{ar:"العمارة السلمانية",en:"Salmani"},filterHeritage:{ar:"التراث المتطور (نجدي / حجازي)",en:"Heritage Evolved"},filterMountain:{ar:"العمارة الجبلية (عسير)",en:"Mountain Highlands"},filterCoastal:{ar:"العمارة الساحلية (البحر الأحمر)",en:"Coastal Dune"},filterMinimalist:{ar:"المينيماليزم المعاصر",en:"Minimalist"},loadIntoEstimatorBtn:{ar:"تحميل هذا الطراز في الحاسبة",en:"Load Style into Estimator"},wwrLabel:{ar:"نسبة النوافذ للواجهات:",en:"Window-to-Wall (WWR):"},uValueLabel:{ar:"العزل الحراري U-Value:",en:"Thermal U-Value:"},timelineLabel:{ar:"المدة التقديرية للتنفيذ:",en:"Estimated Construction Time:"},monthsUnit:{ar:"شهراً",en:"months"},savedEstimatesTitle:{ar:"مقارنة المشروعات والتقديرات المحفوظة",en:"Saved Villa Estimates & Comparison Matrix"},savedEstimatesSubtitle:{ar:"قارن بين سيناريوهات البناء المختلفة لاختيار البديل الأمثل لميزانيتك",en:"Compare multiple villa scenarios side by side to pinpoint the optimal budget trajectory"},noSavedEstimates:{ar:'لا توجد تقديرات محفوظة حالياً. استخدم زر "حفظ هذا التقدير للمقارنة" في الحاسبة أعلاه.',en:'No saved estimates yet. Use "Save Estimate for Comparison" button in the estimator above.'},btnDeleteEstimate:{ar:"حذف",en:"Delete"},btnLoadEstimate:{ar:"استرجاع في الحاسبة",en:"Load in Estimator"},boqModalTitle:{ar:"عرض سعر هندسي وجدول كميات معتمد (Official Engineering BOQ)",en:"Official Engineering Proposal & Bill of Quantities"},boqDocHeader:{ar:"المملكة العربية السعودية | كود البناء السعودي SBC 1101",en:"Kingdom of Saudi Arabia | Saudi Building Code SBC 1101"},boqRefNo:{ar:"رقم المرجع الهندسي:",en:"Engineering Ref No:"},boqDate:{ar:"تاريخ الإصدار:",en:"Issue Date:"},boqClientLabel:{ar:"اسم العميل الموقر:",en:"Valued Client Name:"},boqDefaultClient:{ar:"سعادة المالك الكريم",en:"Distinguished Property Owner"},boqProjectLocation:{ar:"موقع المشروع المقترح:",en:"Project Location:"},boqSupervisingArchitect:{ar:"كبير المعماريين المسؤول:",en:"Lead System Architect:"},boqColItem:{ar:"البند الهندسي ومجال العمل",en:"Engineering Item & Scope"},boqColCode:{ar:"المرجع بالكود",en:"SBC Code"},boqColQty:{ar:"المسطح / الكمية",en:"Quantity"},boqColTotal:{ar:"الإجمالي (ريال)",en:"Total (SAR)"},boqColPercent:{ar:"النسبة",en:"Weight"},boqSealText:{ar:"وثيقة تسعير هندسية معتمدة رقمياً ومطابقة لمعايير كود البناء السعودي SBC",en:"Digitally verified engineering proposal strictly compliant with Saudi Building Code"},boqTermsTitle:{ar:"الشروط والضمانات الهندسية المعتمدة:",en:"Engineering Warranties & Contractual Terms:"},boqTerm1:{ar:"ضمان إنشائي شامل لمدة 10 سنوات على الهيكل الخرساني والأساسات المعتمدة.",en:"10-Year comprehensive structural warranty on reinforced concrete framing and foundations."},boqTerm2:{ar:"ضمان لمدة 5 سنوات على أعمال العزل المائي للأسطح والقواعد ودورات المياه.",en:"5-Year certified warranty on roof and substructure membrane waterproofing systems."},boqTerm3:{ar:"ضمان لمدة 2 سنوات على التمديدات الكهروميكانيكية (MEP) وشبكات التكييف.",en:"2-Year warranty covering concealed MEP installations, ducting, and electrical safety gear."},boqTerm4:{ar:"الأسعار شاملة ضريبة القيمة المضافة 15% والتصاريح الهندسية المعتمدة من بلدي.",en:"All itemized costs include 15% Saudi VAT and municipal engineering inspection approvals."},btnPrintBOQ:{ar:"طباعة وتصدير مستند رسمي (PDF)",en:"Print & Export Official PDF"},btnCloseBOQ:{ar:"إغلاق العرض",en:"Close Proposal"},footerAbout:{ar:"بُـنْـيان هو استوديو للتصميم المعماري والداخلي الفاخر وحساب تكاليف الإنشاءات في المملكة العربية السعودية، تأسس لتقديم حلول معمارية وهندسية تجمع بين أصالة العمارة السلمانية والنجدية وأحدث المعايير العالمية لكود البناء السعودي.",en:"Bunyan is a luxury architectural and interior design studio and smart construction estimation platform in Saudi Arabia, marrying the soul of Salmani vernacular with cutting-edge engineering standards."},footerRights:{ar:"جميع الحقوق محفوظة © 2026 | استوديو بُـنْـيان المعماري",en:"All Rights Reserved © 2026 | Bunyan Architectural Studio"},footerLeadCredit:{ar:"تصميم وإشراف وتنفيذ المعماري: أ. طارق ابوعشي",en:"Designed, Engineered & Supervised by Lead Architect: Tareq Aboushi"}});const e=localStorage.getItem("bunyan_lang");e==="ar"||e==="en"?this.currentLang=e:this.currentLang="ar"}init(){this.applyToDOM()}getLang(){return this.currentLang}setLanguage(e){this.currentLang!==e&&(this.currentLang=e,localStorage.setItem("bunyan_lang",e),this.applyToDOM(),this.notify())}toggleLanguage(){const e=this.currentLang==="ar"?"en":"ar";return this.setLanguage(e),e}subscribe(e){this.listeners.push(e)}t(e){const i=this.dictionary[e];return i&&(i[this.currentLang]||i.ar)||e}applyToDOM(){document.documentElement.lang=this.currentLang,document.documentElement.dir=this.currentLang==="ar"?"rtl":"ltr",document.querySelectorAll("[data-i18n]").forEach(e=>{const i=e.getAttribute("data-i18n");i&&this.dictionary[i]&&(e.textContent=this.t(i))}),document.querySelectorAll("[data-i18n-placeholder]").forEach(e=>{const i=e.getAttribute("data-i18n-placeholder");i&&this.dictionary[i]&&(e.placeholder=this.t(i))})}notify(){this.listeners.forEach(e=>e(this.currentLang))}}const r=new G;class D{constructor(){s(this,"ctx",null);s(this,"isMuted",!1);const e=localStorage.getItem("bunyan_sound_muted");this.isMuted=e==="true"}initCtx(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e}this.ctx.state==="suspended"&&this.ctx.resume()}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("bunyan_sound_muted",String(this.isMuted)),this.isMuted}getIsMuted(){return this.isMuted}playClick(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(820,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(320,this.ctx.currentTime+.04),i.gain.setValueAtTime(.08,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playSliderTick(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;const e=this.ctx.createOscillator(),i=this.ctx.createGain();e.type="triangle",e.frequency.setValueAtTime(1200,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(600,this.ctx.currentTime+.015),i.gain.setValueAtTime(.03,this.ctx.currentTime),i.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.015),e.connect(i),i.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.015)}catch{}}playTierChime(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;[523.25,659.25,783.99].forEach((i,t)=>{if(!this.ctx)return;const a=this.ctx.createOscillator(),n=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(i,this.ctx.currentTime+t*.04),n.gain.setValueAtTime(.06,this.ctx.currentTime+t*.04),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+t*.04+.25),a.connect(n),n.connect(this.ctx.destination),a.start(this.ctx.currentTime+t*.04),a.stop(this.ctx.currentTime+t*.04+.25)})}catch{}}playSuccessFanfare(){if(!this.isMuted)try{if(this.initCtx(),!this.ctx)return;[{freq:440,delay:0},{freq:554.37,delay:.08},{freq:659.25,delay:.16},{freq:880,delay:.24},{freq:1108.73,delay:.32}].forEach(({freq:i,delay:t})=>{if(!this.ctx)return;const a=this.ctx.createOscillator(),n=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(i,this.ctx.currentTime+t),n.gain.setValueAtTime(.08,this.ctx.currentTime+t),n.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+t+.6),a.connect(n),n.connect(this.ctx.destination),a.start(this.ctx.currentTime+t),a.stop(this.ctx.currentTime+t+.6)})}catch{}}}const g=new D,v={nameAr:"أ. طارق ابوعشي",nameEn:"Tareq Aboushi",titleAr:"كبير المعماريين ومصمم المنصة الرقمية",titleEn:"Lead System Architect & Senior Design Director",officeAr:"استوديو بُـنْـيان للتصميم المعماري الفاخر",officeEn:"Bunyan Architectural & Interior Design Studio",verificationRef:"BNY-SBC-SA-2026-HQ"},_=[{code:"SBC 201",titleAr:"كود البناء المعماري العام",titleEn:"General Architectural Code",scopeAr:"تخطيط الفراغات المعمارية، الارتدادات النظامية، ارتفاع الأسقف، وسلامة المداخل والمخارج.",scopeEn:"Spatial zoning, municipal setbacks, clear floor-to-ceiling heights, and egress compliance.",complianceRuleAr:"ضمان ارتداد لا يقل عن 2 متر، وارتفاع صافي لا يقل عن 3.4م للمجالس والصالات الفاخرة.",complianceRuleEn:"Minimum 2.0m property setbacks and >= 3.4m ceiling height in luxury living areas.",icon:"📐"},{code:"SBC 301 / 304",titleAr:"كود الهياكل والخرسانة المسلحة",titleEn:"Structural Concrete & Foundations Code",scopeAr:"مواصفات الخرسانة المقاومة للكبريتات (Type V)، نسب حديد التسليح، وفحوصات الهبوط والضغط.",scopeEn:"Sulfate-resistant concrete (Type V), rebar yield limits, slump tests, and core compression tests.",complianceRuleAr:"خرسانة جاهزة معتمدة بإجهاد لا يقل عن 35 N/mm² مع حماية كاملة للقواعد تحت الأرض.",complianceRuleEn:"Certified ready-mix concrete >= 35 MPa with subterranean bitumen membrane protection.",icon:"🏗️"},{code:"SBC 601 / 602",titleAr:"كود كفاءة الطاقة والعزل الحراري",titleEn:"Energy Conservation & Insulation Code",scopeAr:"العزل الحراري للجدران الخارجية، الأسطح، والزجاج المزدوج منخفض الانبعاث (Low-E).",scopeEn:"Envelope thermal insulation, roof U-values, and double Low-E glazed curtain walls.",complianceRuleAr:"معامل انتقال حراري U-Value للجدران لا يتجاوز 0.34 W/m²·K وللأسقف 0.20 W/m²·K.",complianceRuleEn:"Wall U-Value <= 0.34 W/m²·K and roof U-Value <= 0.20 W/m²·K for high efficiency.",icon:"🌡️"},{code:"SBC 401",titleAr:"كود التمديدات الكهربائية والسلامة",titleEn:"Electrical Installations & Safety Code",scopeAr:"شبكات التأريض، القواطع الذكية، الأسلاك المقاومة للهالوجين، وحماية الصواعق.",scopeEn:"Earthing grids, arc-fault circuit breakers, zero-halogen flame-retardant wiring, and surge protection.",complianceRuleAr:"تأريض مستقل بنسبة مقاومة أقل من 5 أوم، وتوزيع أحمال متوازن لكل دور.",complianceRuleEn:"Dedicated grounding grid < 5 Ohms and balanced 3-phase load distribution per floor.",icon:"⚡"},{code:"SBC 801",titleAr:"كود الحماية والوقاية من الحريق",titleEn:"Fire Protection & Life Safety Code",scopeAr:"كواشف الدخان المتصلة، أنظمة الإطفاء التلقائي، والأبواب المقاومة للحريق لمدة 60 دقيقة.",scopeEn:"Interlinked optical smoke detectors, automatic suppression provisions, and 60-min fire-rated doors.",complianceRuleAr:"كواشف دخان متزامنة في كل غرفة ومطبخ وممرات الهروب متصلة باللوحة الرئيسية.",complianceRuleEn:"Synchronized wireless/wired smoke alarms on all floors connected to central alarm panel.",icon:"🛡️"},{code:"SBC 1001",titleAr:"كود التمديدات الصحية والسباكة",titleEn:"Sanitary & Plumbing Code",scopeAr:"أنظمة تغذية المياه بالضغط المستمر، أنابيب البولي بروبيلين الحراري، والعزل الصوتي للصرف.",scopeEn:"Constant pressure booster pumps, PPR hot/cold piping, and acoustic insulated DWV stacks.",complianceRuleAr:"مواسير صرف صامتة عازلة للصوت 3 طبقات، وخزانات مياه أرضية معزولة بايبوكسي صحي معتمد.",complianceRuleEn:"Triple-layer acoustic drainage piping and food-grade epoxy-coated subterranean potable reservoirs.",icon:"💧"}];class j{constructor(){s(this,"currentTheme","dark");this.initTheme(),this.render(),this.bindEvents(),r.subscribe(()=>{this.render(),this.bindEvents()})}initTheme(){const e=localStorage.getItem("bunyan_theme");e==="light"||e==="dark"?this.currentTheme=e:this.currentTheme="dark",document.documentElement.setAttribute("data-theme",this.currentTheme)}toggleTheme(){this.currentTheme=this.currentTheme==="dark"?"light":"dark",document.documentElement.setAttribute("data-theme",this.currentTheme),localStorage.setItem("bunyan_theme",this.currentTheme),g.playClick(),this.render(),this.bindEvents()}render(){const e=document.getElementById("main-header");if(!e)return;const i=r.getLang()==="ar",t=this.currentTheme==="light",a=g.getIsMuted();e.innerHTML=`
      <div class="container" style="display: flex; align-items: center; justify-content: space-between; height: var(--header-height);">
        
        <!-- Brand & Lead Architect Credit -->
        <a href="#" style="display: flex; align-items: center; gap: 14px;">
          <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, var(--accent-gold), var(--accent-gold-dark)); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; color: #030712; font-weight: 900; box-shadow: 0 0 20px var(--accent-gold-glow);">
            ب
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="font-display" style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.05em; line-height: 1;">
                ${r.t("brandName")}
              </span>
              <span style="font-size: 0.72rem; color: var(--text-muted); font-weight: 600; padding: 2px 6px; border-radius: 4px; background: var(--bg-card); border: 1px solid var(--border-subtle);">
                STUDIO
              </span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 2px;">
              <span>${r.t("leadArchitectLabel")}</span> 
              <strong style="color: var(--accent-gold); font-weight: 700;">${i?v.nameAr:v.nameEn}</strong>
            </div>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="nav-links" style="display: flex; align-items: center; gap: 24px; font-size: 0.9rem; font-weight: 600;">
          <a href="#estimator-section" class="nav-link" style="color: var(--text-primary); transition: var(--transition-smooth);">
            ${r.t("navEstimator")}
          </a>
          <a href="#studio-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${r.t("navStudio")}
          </a>
          <a href="#atlas-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${r.t("navAtlas")}
          </a>
          <a href="#standards-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${r.t("navStandards")}
          </a>
          <a href="#comparison-section" class="nav-link" style="color: var(--text-secondary); transition: var(--transition-smooth);">
            ${r.t("navSaved")}
          </a>
        </nav>

        <!-- Right Quick Actions (Theme, Sound, Lang, CTA) -->
        <div style="display: flex; align-items: center; gap: 10px;">
          
          <!-- Sound Toggle -->
          <button id="btn-toggle-sound" class="btn btn-glass" style="padding: 8px 12px; border-radius: 10px;" title="${r.t("soundToggle")}">
            <span>${a?"🔇":"🔊"}</span>
          </button>

          <!-- Theme Toggle -->
          <button id="btn-toggle-theme" class="btn btn-glass" style="padding: 8px 12px; border-radius: 10px;" title="${t?r.t("themeDark"):r.t("themeLight")}">
            <span>${t?"🌙":"☀️"}</span>
          </button>

          <!-- Language Toggle -->
          <button id="btn-toggle-lang" class="btn btn-glass" style="padding: 8px 14px; font-weight: 700; border-radius: 10px;">
            <span>${i?"EN":"العربية"}</span>
          </button>

          <!-- Primary CTA Button -->
          <a href="#estimator-section" class="btn btn-gold" style="padding: 10px 20px; font-size: 0.88rem;">
            <span>📐</span> ${r.t("ctaEstimateNow")}
          </a>

        </div>

      </div>
    `}bindEvents(){var e,i,t;(e=document.getElementById("btn-toggle-theme"))==null||e.addEventListener("click",()=>{this.toggleTheme()}),(i=document.getElementById("btn-toggle-sound"))==null||i.addEventListener("click",()=>{const a=g.toggleMute();g.playClick();const n=document.getElementById("btn-toggle-sound");n&&(n.innerHTML=`<span>${a?"🔇":"🔊"}</span>`)}),(t=document.getElementById("btn-toggle-lang"))==null||t.addEventListener("click",()=>{g.playClick(),r.toggleLanguage()}),document.querySelectorAll(".nav-link").forEach(a=>{a.addEventListener("click",()=>{g.playClick()})})}}const R={shell:{id:"shell",nameAr:"الهيكل الإنشائي (عظم بالمواد)",nameEn:"Structural Shell (Core & Shell)",badgeAr:"أساس متين",badgeEn:"Foundation Grade",baseRatePerM2:780,descriptionAr:"حفر، أساسات خرسانية مسلحة مقاومة للأملاح، حديد سابك، عزل مائي وحراري للجدران والقواعد وفق كود SBC 304.",descriptionEn:"Excavation, sulfate-resistant reinforced concrete, SABIC rebar, foundation waterproofing & perimeter thermal insulation.",phaseWeights:[.65,.15,.1,.02,.05,.01,.02]},turnkey:{id:"turnkey",nameAr:"تشطيب عصري متكامل (مودرن تسليم مفتاح)",nameEn:"Contemporary Turnkey (Ready to Live)",badgeAr:"الأكثر طلباً",badgeEn:"Most Popular",baseRatePerM2:1750,descriptionAr:"بورسلان إسباني نخب أول، دهانات جوتن الفاخرة، تكييف سبليت مخفي موفر، واجهات حجر طبيعي مطعم ببديل الخشب، أسقف جبسية مودرن.",descriptionEn:"First-choice Spanish porcelain, Jotun premium paints, concealed energy-efficient HVAC, natural stone with wood composites, modern gypsum ceilings.",phaseWeights:[.32,.08,.18,.14,.12,.1,.06]},royal:{id:"royal",nameAr:"فيلا فاخرة ملكية (رخام إيطالي وتكييف مركزي)",nameEn:"Royal Luxury Villa (Italian Marble & VRF)",badgeAr:"فخامة مطلقة",badgeEn:"Royal Luxury",baseRatePerM2:2650,descriptionAr:"رخام ستتواريو وكلكتا إيطالي، تكييف VRF مركزي ياباني، واجهات حجر الرياض الفاخر وزجاج دبل كورتن وول، أبواب خشب جوز أمريكي، إضاءة غائرة ذكية.",descriptionEn:"Italian Statuario & Calacatta marble, Japanese VRF HVAC, Riyadh stone & structural curtain walls, American walnut solid doors, architectural cove LED.",phaseWeights:[.28,.07,.19,.18,.13,.1,.05]},salmani:{id:"salmani",nameAr:"قصر بطراز سلماني خاص (فائق الفخامة Bespoke)",nameEn:"Salmani Palace Bespoke (Ultra-Luxury Haute Architecture)",badgeAr:"هوية معمارية خالدة",badgeEn:"Bespoke Architectural Masterpiece",baseRatePerM2:3850,descriptionAr:"عمارة سلمانية موثقة، كسوات حجر طبيعي منقوش يدوي، زجاج ذكي معالج حرارياً، أرضيات رخام بوكماتش ملكي، أكسسوارات ذهبية ونحاسية مسحوبة، مواصفات قصر رئاسي.",descriptionEn:"Bespoke Salmani architectural grammar, hand-chiseled natural stone, smart electrochromic low-E glass, bookmatched royal marble, architectural brass fittings.",phaseWeights:[.26,.07,.18,.2,.14,.09,.06]}},P=[{id:"knx_smart_home",nameAr:"أتمتة ذكية كاملة (نظام KNX الألماني)",nameEn:"Complete KNX Smart Home Automation",descriptionAr:"تحكم ذكي في الإضاءة، التكييف، الستائر، الحساسات الأمنية، وشاشات لمس جدارية مع تكامل صوتي وسيناريوهات ترحيبية.",descriptionEn:"German KNX protocol controlling lighting, HVAC, automated shading, biometric security, and architectural wall touchscreens.",fixedCost:75e3,areaMultiplierCost:35,icon:"⚡"},{id:"infinity_pool",nameAr:"مسبح إنفينيتي خارجي مع شلال رخامي",nameEn:"Heated Infinity Pool with Marble Water Feature",descriptionAr:"مسبح متماهٍ مع الأفق بنظام تدفئة ومضخات متغيرة السرعة، تكسيات فسيفساء زجاجية فاخرة، وتجهيز لسباحة عكسية.",descriptionEn:"Heated infinity edge pool with variable frequency drives, luxury glass mosaic tiles, and counter-current swimming jet setup.",fixedCost:14e4,areaMultiplierCost:0,icon:"🏊"},{id:"hydraulic_elevator",nameAr:"مصعد بانورامي هيدروليكي زجاجي (3 محطات)",nameEn:"Panoramic Glass Hydraulic Elevator (3 Stops)",descriptionAr:"مصعد إيطالي بدون غرفة محركات (MRL) بكابينة زجاجية مقوسة وإضاءة غائرة وأبواب أوتوماتيكية هادئة للغاية.",descriptionEn:"Italian machine-room-less (MRL) panoramic glass elevator with brushed stainless frame and ultra-quiet hydraulic drive.",fixedCost:95e3,areaMultiplierCost:0,icon:"🛗"},{id:"solar_energy",nameAr:"منظومة طاقة شمسية كهروضوئية هجينة (15kW)",nameEn:"Hybrid Rooftop Solar PV System (15 kW)",descriptionAr:"ألواح Tier-1 عالية الكفاءة مع محول طاقة هجين وبنك بطاريات ليثيوم لتغطية 45% من استهلاك الفيلا مع مراقبة ذكية.",descriptionEn:"Tier-1 bifacial monocrystalline panels, hybrid inverter, and lithium storage bank covering ~45% of villa energy consumption.",fixedCost:68e3,areaMultiplierCost:0,icon:"☀️"},{id:"landscaped_courtyard",nameAr:"فناء معماري داخلي مع نوافير ونظام ضباب",nameEn:"Courtyard Oasis with Fogging & Stone Fountains",descriptionAr:"فناء نجدي/سلماني داخلي مفتوح على السماء مع أشجار نخيل ونباتات ظل محلية، شلال حجر مائي، ونظام رذاذ لتلطيف الحرارة 8 درجات.",descriptionEn:"Traditional courtyard open to the sky with native olive/palm flora, sculpted stone water cascade, and high-pressure evaporative cooling.",fixedCost:55e3,areaMultiplierCost:25,icon:"🌿"},{id:"home_cinema_spa",nameAr:"قاعة سينما معزولة صوتياً ومنطقة سبا وسونا",nameEn:"Acoustic Home Cinema & Finnish Sauna Spa",descriptionAr:"معالجة صوتية معتمدة THX بألواح خشبية مثقبة، شاشة 4K ليزرية، بالإضافة لغرفة سونا خشب أرز كندي ومروش مطري.",descriptionEn:"THX acoustic isolation treatment, 4K laser projector layout, Finnish cedar sauna, and thermostatic sensory rain shower.",fixedCost:11e4,areaMultiplierCost:0,icon:"🎬"}],B={riyadh:{factor:1.05,nameAr:"مدينة الرياض (العاصمة)",nameEn:"Riyadh City (Capital)"},jeddah:{factor:1.03,nameAr:"جدة (عروس البحر الأحمر)",nameEn:"Jeddah Coastal"},abha:{factor:1,nameAr:"أبها ومنطقة عسير",nameEn:"Abha & Asir Region"},dammam:{factor:1.02,nameAr:"المنطقة الشرقية (الدمام والخبر)",nameEn:"Eastern Province (Dammam / Khobar)"},neom:{factor:1.15,nameAr:"نيوم والبحر الأحمر",nameEn:"NEOM & Red Sea Destination"}};class N{static calculate(e){const i=R[e.finishingTier]||R.royal,t=(B[e.city]||B.riyadh).factor,a=e.landArea*e.footprintRatio;let n=1,o=a;e.hasBasement&&(n+=1,o+=a*.95),e.hasFirstFloor&&(n+=1,o+=a*1.05),e.hasPenthouseAnnex&&(n+=.5,o+=a*.5);const c=i.baseRatePerM2*t,m=Math.round(o*c),l=[{id:"phase_structure",nameAr:"الحفر والأساسات والهيكل الإنشائي والحديد",nameEn:"Excavation & Concrete Structure",codeRef:"SBC 301 / 304",descAr:"أعمال التسوية والحفر، صبة النظافة، القواعد الشريطية والمنفصلة، أعمدة خرسانية مسبقة الخلط، حديد سابك عالي المقاومة.",descEn:"Excavation, sulfate-resistant footings, reinforced concrete framing, SABIC rebar, and curing testing."},{id:"phase_insulation",nameAr:"العزل المائي والحراري المعتمد",nameEn:"Thermal & Waterproofing Insulation",codeRef:"SBC 601 / 602",descAr:"عزل القواعد والميد والأسطح بنظام الممبرين المزدوج، وعزل الجدران بالبوليسترين المبثوق (XPS) لتحقيق كفاءة استهلاك طاقة عالية.",descEn:"Substructure SBS membrane waterproofing, roof double membrane, and XPS wall thermal insulation per SBC energy code."},{id:"phase_mep",nameAr:"الأعمال الكهروميكانيكية (الكهرباء، السباكة، التكييف)",nameEn:"MEP: Electrical, Plumbing & VRF HVAC",codeRef:"SBC 401 / 801",descAr:"تمديدات أسلاك الرياض المقاومة للحريق، مواسير السباكة الحرارية الخضراء، شبكات الصرف الصامت، والتأسيسات الكاملة لتكييف VRF.",descEn:"Fire-resistant cabling, thermofused PPR plumbing pipes, acoustic drainage stacks, and concealed VRF ductwork."},{id:"phase_flooring",nameAr:"الأرضيات وتكسيات الرخام والبورسلان",nameEn:"Flooring & Marble Cladding",codeRef:"SBC 1001",descAr:"تركيب ألواح الرخام الطبيعي بوكماتش للمجالس والصالات الرئيسية، وبورسلان إسباني 120×120 للغرف مع فواصل تمدد وغراء لاتكس خاص.",descEn:"Bookmatched natural marble slabs for salon, Spanish large-format porcelain, and flexible polymer-modified mortar."},{id:"phase_facades",nameAr:"الواجهات الحجرية السلمانية والزجاج المزدوج",nameEn:"Facades & Salmani Stone / Curtain Wall",codeRef:"SBC 201 Architectural",descAr:"تكسيات حجر الرياض الطبيعي بنظام التعليق الميكانيكي المجلفن المقاوم، وزجاج ستركشر دبل منخفض الانبعاث Low-E لعزل الحرارة والصوت.",descEn:"Mechanically anchored natural Riyadh stone panels with stainless clips, and double-glazed acoustic Low-E curtain walls."},{id:"phase_woodwork",nameAr:"الأبواب والأسقف الخشبية والديكورات الجبسية",nameEn:"Interior Woodwork, Doors & Gypsum",codeRef:"SBC 201 Interior",descAr:"أبواب خشب جوز وبلوط طبيعي مصمت بارتفاع 2.8م مع مسكات مغناطيسية مخفية، وأسقف جبسية بورد مضاد للرطوبة بتجاويف إضاءة مخفية.",descEn:"Solid American walnut/oak 2.8m architectural doors with magnetic concealed hinges, and moisture-resistant gypsum drop ceilings."},{id:"phase_smart_landscape",nameAr:"الأنظمة الذكية والمصاعد والمحيط الخارجي",nameEn:"Smart Systems, Elevator & Landscaping",codeRef:"SBC 901 / KNX",descAr:"تجهيزات المصعد، الإنارة الخارجية المحيطية، بوابات الدخول الذكية، تنسيق المسطحات الخضراء، وشبكة الري بالتنقيط المؤتمتة.",descEn:"Shaft elevator provisions, architectural exterior wash lighting, automated access gates, and smart drip irrigation landscaping."}].map((b,E)=>{const S=i.phaseWeights[E]||.14,F=Math.round(m*S);return{id:b.id,nameAr:b.nameAr,nameEn:b.nameEn,codeRef:b.codeRef,descriptionAr:b.descAr,descriptionEn:b.descEn,percentage:Math.round(S*100),cost:F}});let p=0;const u=[];e.selectedAddOns.forEach(b=>{const E=P.find(S=>S.id===b);if(E){u.push(E);const S=E.fixedCost+E.areaMultiplierCost*e.landArea;p+=S}});const f=m+p,y=Math.round(f*.05),w=Math.round(f*.03),A=f+y+w,C=Math.round(A*.15),k=A+C,L=Math.round(k/o);return{landArea:e.landArea,footprintArea:Math.round(a),totalFloorsCount:n,builtUpArea:Math.round(o),finishingTier:i,cityMultiplier:t,baseConstructionCost:m,phases:l,addOnsCost:p,activeAddOns:u,engineeringSupervisionFee:y,contingencyReserve:w,subtotalBeforeTax:A,vatAmount:C,grandTotal:k,costPerM2:L}}}class H{constructor(e,i,t){s(this,"container");s(this,"currentInput",{landArea:650,footprintRatio:.6,hasBasement:!1,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!0,finishingTier:"royal",selectedAddOns:["knx_smart_home","hydraulic_elevator"],city:"riyadh"});s(this,"onGenerateBOQCallback");s(this,"onSaveEstimateCallback");s(this,"lastResult",null);const a=document.getElementById(e);if(!a)throw new Error(`Container #${e} not found`);this.container=a,this.onGenerateBOQCallback=i,this.onSaveEstimateCallback=t,r.subscribe(()=>{this.render(),this.bindEvents()})}init(){this.render(),this.bindEvents(),this.recalculate()}setInput(e){this.currentInput={...this.currentInput,...e},this.render(),this.bindEvents(),this.recalculate()}getLastResult(){return this.lastResult}render(){const e=r.getLang()==="ar";this.container.innerHTML=`
      <div class="calculator-grid" style="display: grid; grid-template-columns: 1fr; gap: 32px;">
        
        <!-- Top Controls Panel (Bento Inputs) -->
        <div class="glass-panel" style="padding: 32px; border-radius: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
            <div>
              <span class="badge badge-gold" style="margin-bottom: 8px;">
                <span>📐</span> ${e?"حاسبة كود البناء السعودي SBC":"SBC Saudi Building Code Estimator"}
              </span>
              <h2 style="font-size: 1.6rem; font-weight: 800;">${r.t("estimatorTitle")}</h2>
              <p style="color: var(--text-secondary); font-size: 0.95rem;">${r.t("estimatorSubtitle")}</p>
            </div>
            
            <!-- City Selection -->
            <div style="display: flex; align-items: center; gap: 10px;">
              <label for="city-select" style="font-weight: 600; font-size: 0.9rem; color: var(--text-secondary);">${r.t("citySelectLabel")}</label>
              <select id="city-select" style="padding: 10px 16px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border-medium); color: var(--text-primary); font-family: inherit; font-size: 0.9rem; outline: none; cursor: pointer;">
                ${Object.entries(B).map(([i,t])=>`
                  <option value="${i}" ${this.currentInput.city===i?"selected":""}>
                    ${e?t.nameAr:t.nameEn}
                  </option>
                `).join("")}
              </select>
            </div>
          </div>

          <!-- Slider Inputs Row -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 28px;">
            
            <!-- Land Area Slider -->
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 18px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px; align-items: center;">
                <span style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${r.t("landAreaLabel")}</span>
                <span id="land-area-val" class="font-mono" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-gold);">
                  ${this.currentInput.landArea} م²
                </span>
              </div>
              <input type="range" id="land-area-range" class="custom-range" min="300" max="2500" step="25" value="${this.currentInput.landArea}">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px;">
                <span>300 م²</span>
                <span>1,200 م²</span>
                <span>2,500 م²</span>
              </div>
            </div>

            <!-- Footprint Ratio Slider -->
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 18px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 12px; align-items: center;">
                <span style="font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${r.t("footprintLabel")}</span>
                <span id="footprint-val" class="font-mono" style="font-size: 1.25rem; font-weight: 700; color: var(--accent-cyan);">
                  ${Math.round(this.currentInput.footprintRatio*100)}%
                </span>
              </div>
              <input type="range" id="footprint-range" class="custom-range" min="45" max="75" step="1" value="${Math.round(this.currentInput.footprintRatio*100)}">
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; color: var(--text-muted); margin-top: 8px;">
                <span>45% (حدائق واسعة)</span>
                <span>60% (متوسط الكود)</span>
                <span>75% (استغلال أقصى)</span>
              </div>
            </div>

            <!-- Floors Configuration Checkboxes -->
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 18px; border: 1px solid var(--border-subtle);">
              <div style="margin-bottom: 12px; font-weight: 600; color: var(--text-primary); font-size: 0.95rem;">${r.t("floorsConfigLabel")}</div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                
                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" id="chk-basement" ${this.currentInput.hasBasement?"checked":""} style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${r.t("floorBasement")}</span>
                </label>

                <label style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; opacity: 0.75; cursor: not-allowed;">
                  <input type="checkbox" checked disabled style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${r.t("floorGround")}</span>
                </label>

                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" id="chk-first" ${this.currentInput.hasFirstFloor?"checked":""} style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${r.t("floorFirst")}</span>
                </label>

                <label style="display: flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem;">
                  <input type="checkbox" id="chk-annex" ${this.currentInput.hasPenthouseAnnex?"checked":""} style="accent-color: var(--accent-gold); width: 17px; height: 17px;">
                  <span>${r.t("floorAnnex")}</span>
                </label>

              </div>
            </div>

          </div>

          <!-- Finishing Tiers Selector (4 Bento Cards) -->
          <div style="margin-bottom: 32px;">
            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
              <span>🏛️</span> ${r.t("tierSelectTitle")}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 16px;">
              ${Object.values(R).map(i=>{const t=this.currentInput.finishingTier===i.id;return`
                  <div class="tilt-card tier-card ${t?"selected":""}" data-tier-id="${i.id}" style="padding: 20px; cursor: pointer; border-radius: 18px; border: 2px solid ${t?"var(--accent-gold)":"var(--border-subtle)"}; background: ${t?"var(--bg-card-hover)":"var(--bg-secondary)"}; position: relative;">
                    ${t?`
                      <div style="position: absolute; top: 12px; left: 12px; [dir=ltr]& { left: auto; right: 12px; }; width: 22px; height: 22px; border-radius: 50%; background: var(--accent-gold); color: #030712; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 900;">✓</div>
                    `:""}
                    <span class="badge ${t?"badge-gold":"badge-cyan"}" style="margin-bottom: 8px; font-size: 0.72rem;">
                      ${e?i.badgeAr:i.badgeEn}
                    </span>
                    <h3 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 6px;">
                      ${e?i.nameAr:i.nameEn}
                    </h3>
                    <div class="font-mono" style="font-size: 1.3rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 10px;">
                      ${i.baseRatePerM2.toLocaleString("en-US")} <span style="font-size: 0.8rem; font-weight: 500; color: var(--text-muted);">${r.t("sarPerM2")}</span>
                    </div>
                    <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                      ${e?i.descriptionAr:i.descriptionEn}
                    </p>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- Smart Add-ons Multi-Select (6 Modern Upgrade Cards) -->
          <div>
            <div style="font-weight: 700; font-size: 1.1rem; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
              <span>✨</span> ${r.t("addOnsTitle")}
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 16px;">
              ${P.map(i=>{const t=this.currentInput.selectedAddOns.includes(i.id);return`
                  <div class="tilt-card addon-card ${t?"selected":""}" data-addon-id="${i.id}" style="padding: 16px 20px; cursor: pointer; border-radius: 16px; border: 1.5px solid ${t?"var(--accent-cyan)":"var(--border-subtle)"}; background: ${t?"rgba(56, 189, 248, 0.08)":"var(--bg-secondary)"}; display: flex; align-items: flex-start; gap: 16px;">
                    <div style="font-size: 1.8rem; line-height: 1; padding: 6px; background: var(--bg-card); border-radius: 12px; border: 1px solid var(--border-subtle);">
                      ${i.icon}
                    </div>
                    <div style="flex: 1;">
                      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
                        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-primary);">${e?i.nameAr:i.nameEn}</h4>
                        <input type="checkbox" ${t?"checked":""} style="accent-color: var(--accent-cyan); width: 17px; height: 17px; pointer-events: none;">
                      </div>
                      <div class="font-mono" style="font-size: 0.9rem; font-weight: 700; color: var(--accent-cyan); margin-bottom: 4px;">
                        +${i.fixedCost.toLocaleString("en-US")} ${r.t("sarCurrency")}
                      </div>
                      <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4;">${e?i.descriptionAr:i.descriptionEn}</p>
                    </div>
                  </div>
                `}).join("")}
            </div>
          </div>

        </div>

        <!-- Real-Time Financial & Engineering Output Panel -->
        <div id="estimator-output" class="border-beam-container">
          <div class="border-beam-inner" style="padding: 36px;">
            
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px; margin-bottom: 28px;">
              <div>
                <span class="badge badge-emerald" style="margin-bottom: 8px;">
                  <span>🔒</span> ${e?"حساب معتمد مع الضمانات":"Certified Estimation with Warranties"}
                </span>
                <h3 style="font-size: 1.4rem; font-weight: 800;">${r.t("resultsTitle")}</h3>
                <div style="display: flex; gap: 16px; margin-top: 8px; font-size: 0.88rem; color: var(--text-secondary);">
                  <span>${r.t("buaComputedLabel")} <strong id="res-bua" class="font-mono" style="color: var(--text-primary); font-size: 1.05rem;">0 م²</strong></span>
                  <span>•</span>
                  <span>${r.t("ratePerM2Label")} <strong id="res-rate-m2" class="font-mono" style="color: var(--accent-gold); font-size: 1.05rem;">0 ريال/م²</strong></span>
                </div>
              </div>

              <!-- Grand Total Display -->
              <div style="text-align: right; [dir=ltr]& { text-align: left; };">
                <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">${r.t("grandTotalLabel")}</div>
                <div id="res-grand-total" class="font-mono gold-text shimmer-text" style="font-size: 2.6rem; font-weight: 900; line-height: 1.1;">
                  0 ${r.t("sarCurrency")}
                </div>
                <div style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 500; margin-top: 4px;">
                  ✓ شامل ضريبة القيمة المضافة 15% وتأمينات كود البناء
                </div>
              </div>
            </div>

            <!-- Financial Summary Metrics Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px; margin-bottom: 32px;">
              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${r.t("baseCostLabel")}</div>
                <div id="res-base-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 4px;">0 ر.س</div>
              </div>

              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${r.t("addOnsCostLabel")}</div>
                <div id="res-addons-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--accent-cyan); margin-top: 4px;">0 ر.س</div>
              </div>

              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${r.t("supervisionFeeLabel")}</div>
                <div id="res-supervision-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--text-primary); margin-top: 4px;">0 ر.س</div>
              </div>

              <div style="background: var(--bg-secondary); padding: 16px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.78rem; color: var(--text-muted);">${r.t("vatLabel")}</div>
                <div id="res-vat-cost" class="font-mono" style="font-size: 1.15rem; font-weight: 700; color: var(--text-gold); margin-top: 4px;">0 ر.س</div>
              </div>
            </div>

            <!-- 7-Phase Itemized Engineering Breakdown -->
            <div style="margin-bottom: 32px;">
              <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
                <span>📊</span> ${r.t("phasesBreakdownTitle")}
              </h4>
              <div id="phases-container" style="display: flex; flex-direction: column; gap: 12px;">
                <!-- Dynamically injected phases -->
              </div>
            </div>

            <!-- Action CTA Buttons -->
            <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center; justify-content: flex-end;">
              <button id="btn-save-estimate" class="btn btn-glass" style="padding: 14px 24px;">
                <span>💾</span> ${r.t("btnSaveEstimate")}
              </button>
              <button id="btn-generate-boq" class="btn btn-gold" style="padding: 16px 32px; font-size: 1.05rem;">
                <span>📜</span> ${r.t("btnGenerateBOQ")}
              </button>
            </div>

          </div>
        </div>

      </div>
    `,x.initTiltCards()}bindEvents(){const e=document.getElementById("city-select");e==null||e.addEventListener("change",()=>{g.playClick(),this.currentInput.city=e.value,this.recalculate()});const i=document.getElementById("land-area-range"),t=document.getElementById("land-area-val");i==null||i.addEventListener("input",()=>{g.playSliderTick();const p=parseInt(i.value,10);this.currentInput.landArea=p,t&&(t.textContent=`${p.toLocaleString("en-US")} م²`),this.recalculate()});const a=document.getElementById("footprint-range"),n=document.getElementById("footprint-val");a==null||a.addEventListener("input",()=>{g.playSliderTick();const p=parseInt(a.value,10);this.currentInput.footprintRatio=p/100,n&&(n.textContent=`${p}%`),this.recalculate()});const o=document.getElementById("chk-basement");o==null||o.addEventListener("change",()=>{g.playClick(),this.currentInput.hasBasement=o.checked,this.recalculate()});const c=document.getElementById("chk-first");c==null||c.addEventListener("change",()=>{g.playClick(),this.currentInput.hasFirstFloor=c.checked,this.recalculate()});const m=document.getElementById("chk-annex");m==null||m.addEventListener("change",()=>{g.playClick(),this.currentInput.hasPenthouseAnnex=m.checked,this.recalculate()}),document.querySelectorAll(".tier-card").forEach(p=>{p.addEventListener("click",()=>{const u=p.getAttribute("data-tier-id");u&&u!==this.currentInput.finishingTier&&(g.playTierChime(),this.currentInput.finishingTier=u,this.render(),this.bindEvents(),this.recalculate())})}),document.querySelectorAll(".addon-card").forEach(p=>{p.addEventListener("click",()=>{const u=p.getAttribute("data-addon-id");if(u){g.playClick();const f=this.currentInput.selectedAddOns.indexOf(u);f>=0?this.currentInput.selectedAddOns.splice(f,1):this.currentInput.selectedAddOns.push(u),this.render(),this.bindEvents(),this.recalculate()}})});const d=document.getElementById("btn-generate-boq");d==null||d.addEventListener("click",()=>{this.lastResult&&(g.playSuccessFanfare(),x.fireCelebration(),this.onGenerateBOQCallback(this.lastResult))});const l=document.getElementById("btn-save-estimate");l==null||l.addEventListener("click",()=>{this.lastResult&&(g.playClick(),this.onSaveEstimateCallback(this.lastResult))})}recalculate(){const e=N.calculate(this.currentInput);this.lastResult=e;const i=r.getLang()==="ar",t=document.getElementById("res-bua");t&&(t.textContent=`${e.builtUpArea.toLocaleString("en-US")} م²`);const a=document.getElementById("res-rate-m2");a&&(a.textContent=`${e.costPerM2.toLocaleString("en-US")} ريال/م²`);const n=document.getElementById("res-grand-total");n&&(n.textContent=`${e.grandTotal.toLocaleString("en-US")} ${r.t("sarCurrency")}`);const o=document.getElementById("res-base-cost");o&&(o.textContent=`${e.baseConstructionCost.toLocaleString("en-US")} ر.س`);const c=document.getElementById("res-addons-cost");c&&(c.textContent=`${e.addOnsCost.toLocaleString("en-US")} ر.س`);const m=document.getElementById("res-supervision-cost");m&&(m.textContent=`${e.engineeringSupervisionFee.toLocaleString("en-US")} ر.س`);const d=document.getElementById("res-vat-cost");d&&(d.textContent=`${e.vatAmount.toLocaleString("en-US")} ر.س`);const l=document.getElementById("phases-container");l&&(l.innerHTML=e.phases.map(p=>`
        <div style="background: var(--bg-secondary); padding: 14px 18px; border-radius: 14px; border: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-cyan" style="font-size: 0.72rem; padding: 4px 10px;">${p.codeRef}</span>
              <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-primary);">
                ${i?p.nameAr:p.nameEn}
              </span>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <span class="font-mono" style="font-size: 0.85rem; color: var(--text-muted);">${p.percentage}%</span>
              <span class="font-mono" style="font-size: 1.05rem; font-weight: 700; color: var(--accent-gold);">
                ${p.cost.toLocaleString("en-US")} ر.س
              </span>
            </div>
          </div>
          <!-- Progress Bar -->
          <div style="width: 100%; height: 6px; background: rgba(255, 255, 255, 0.06); border-radius: 999px; overflow: hidden;">
            <div style="width: ${p.percentage*1.5}%; height: 100%; background: linear-gradient(90deg, var(--accent-gold), var(--accent-cyan)); border-radius: 999px;"></div>
          </div>
          <p style="font-size: 0.76rem; color: var(--text-secondary); line-height: 1.4; margin: 0;">
            ${i?p.descriptionAr:p.descriptionEn}
          </p>
        </div>
      `).join(""))}}const $=[{id:"statuario-marble",type:"flooring",nameAr:"رخام ستتواريو إيطالي ملكي",nameEn:"Italian Royal Statuario Marble",originAr:"كارارا، إيطاليا",originEn:"Carrara, Italy",pricePerM2:780,acousticNRC:.05,thermalMass:"High",textureColor:"#f8fafc",secondaryColor:"#94a3b8",renderPattern:"marble-vein",descriptionAr:"ألواح رخام طبيعي من أندر محاجر إيطاليا، ناصعة البياض بعروق رمادية وذهبية متناغمة تعكس الفخامة الملكية المطلقة.",descriptionEn:"Pure crystalline white marble with expressive grey and subtle gold veining, polished to mirror brilliance."},{id:"saudi-travertine",type:"flooring",nameAr:"ترافرتين رملي طبيعي قص أوتار",nameEn:"Saudi Vein-Cut Dune Travertine",originAr:"المنطقة الوسطى، السعودية",originEn:"Central Region, Saudi Arabia",pricePerM2:380,acousticNRC:.12,thermalMass:"High",textureColor:"#e7e5e4",secondaryColor:"#d6d3d1",renderPattern:"travertine-lines",descriptionAr:"حجر ترافرتين طبيعي دافئ بمسام محكمة معالجة حرارياً، يمنح إحساساً بالهدوء والاتصال بالأرض والتاريخ.",descriptionEn:"Earthy travertine with subtle linear banding and honed velvety texture, evoking timeless desert tranquility."},{id:"american-walnut",type:"flooring",nameAr:"باركيه خشب جوز أمريكي شيفرون",nameEn:"American Walnut Chevron Parquet",originAr:"فيرمونت، الولايات المتحدة",originEn:"Vermont, USA",pricePerM2:450,acousticNRC:.25,thermalMass:"Medium",textureColor:"#451a03",secondaryColor:"#78350f",renderPattern:"chevron-wood",descriptionAr:"خشب جوز طبيعي مجفف بنظام الأفران، مركب بنمط الزاوية الفرنسية Chevron لتوفير دفء استثنائي وراحة صوتية.",descriptionEn:"Kiln-dried solid American walnut arranged in 45-degree French chevron, offering unparalleled acoustic comfort."},{id:"seamless-microcement",type:"flooring",nameAr:"مايكروسمنت عصري ممتد بدون فواصل",nameEn:"Seamless Architectural Microcement",originAr:"ميلانو، إيطاليا",originEn:"Milan, Italy",pricePerM2:320,acousticNRC:.1,thermalMass:"Medium",textureColor:"#64748b",secondaryColor:"#475569",renderPattern:"smooth-cement",descriptionAr:"سطح إسمنتي بوليمري فائق المتانة ومقاوم للخدش، يعطي صبغة مينيمالية حديثة تمتد بسلاسة بين الصالات والتراسات.",descriptionEn:"Polymer-modified ultra-thin seamless mineral overlay with cloud-like textures and industrial sophistication."}],T=[{id:"carved-riyadh-stone",type:"wall",nameAr:"حجر الرياض الطبيعي المنحوت بأخاديد",nameEn:"Fluted Carved Riyadh Limestone",originAr:"ضرما والرياض، السعودية",originEn:"Dhurma & Riyadh, Saudi Arabia",pricePerM2:520,acousticNRC:.4,thermalMass:"High",textureColor:"#fef3c7",secondaryColor:"#d97706",renderPattern:"fluted-groove",descriptionAr:"تكسيات جدارية ثلاثية الأبعاد بأخاديد معمارية عمودية تعكس الضوء الساقط وتضفي عمقاً ونقاءً مستوحى من العمارة السلمانية.",descriptionEn:"Vertical fluted architectural stone cladding capturing grazing raking light with majestic sculptural presence."},{id:"venetian-plaster",type:"wall",nameAr:"جص فينيسي إيطالي رخامي ناعم",nameEn:"Warm Venetian Marmorino Plaster",originAr:"البندقية، إيطاليا",originEn:"Venice, Italy",pricePerM2:240,acousticNRC:.15,thermalMass:"Medium",textureColor:"#f1f5f9",secondaryColor:"#cbd5e1",renderPattern:"marmorino-sheen",descriptionAr:"معجون جيري نقي مشتق من مسحوق الرخام ومصقول يدوياً بالمالج لإعطاء بريق شمعي حريري رقيق مع انعكاس ضوئي ناعم.",descriptionEn:"Slaked-lime and crushed marble troweled plaster, polished to a silky satin sheen with depth and gentle luminescence."},{id:"acoustic-oak-slats",type:"wall",nameAr:"بديل خشب بلوط مع عازل صوتي",nameEn:"Acoustic Natural Oak Linear Slats",originAr:"الدانمارك وغابات البلطيق",originEn:"Denmark & Baltic Forests",pricePerM2:390,acousticNRC:.85,thermalMass:"Low",textureColor:"#b45309",secondaryColor:"#1e293b",renderPattern:"acoustic-slats",descriptionAr:"شرائح خشب بلوط طبيعي متراصة على طبقة لباد بوليسترين معالج صوتياً، تمتص الصدى بنسبة 85% وتمنح شعوراً بالدفء الأسكندنافي الفاخر.",descriptionEn:"Architectural natural oak slats mounted on recycled acoustic felt, achieving NRC 0.85 for pristine acoustic tranquility."},{id:"brushed-brass-panels",type:"wall",nameAr:"ألواح نحاس مسحوب مع إنارة غائرة",nameEn:"Brushed Architectural Brass Panels",originAr:"ألمانيا",originEn:"Germany",pricePerM2:640,acousticNRC:.08,thermalMass:"Medium",textureColor:"#d97706",secondaryColor:"#92400e",renderPattern:"brushed-metal",descriptionAr:"ألواح معدنية من النحاس الأصفر المعالج كيميائياً ضد الأكسدة، تعكس إنارة الـ LED الدافئة بلمعان ملكي جذاب.",descriptionEn:"Precision anodized brushed architectural brass sheets that catch cove light with regal champagne luminescence."}],M=[{id:"mode-2700k",tempK:2700,nameAr:"إضاءة مسائية دافئة (2700K)",nameEn:"2700K Warm Lounge Ambient",subtitleAr:"استرخاء فاخر وراحة بصرية مسائية",subtitleEn:"Intimate evening luxury and serene unwinding",ambientColor:"rgba(245, 158, 11, 0.28)",spotlightIntensity:.85,shadowBlur:24,coveColor:"#f59e0b",descriptionAr:"درجة حرارة لون دافئة تبرز ألوان الأخشاب والرخام وتمنح الصالون طابعاً حميمياً ملكياً مثالياً للأمسيات العائلية واستقبال الضيوف.",descriptionEn:"Rich amber luminescence accentuating wood grains and marble veins, ideal for intimate gatherings and visual serenity."},{id:"mode-3500k",tempK:3500,nameAr:"شمس الأصيل الذهبية (3500K)",nameEn:"3500K Golden Hour Radiance",subtitleAr:"وهج شمس المغيب الطبيعي المتوازن",subtitleEn:"Balanced golden afternoon daylight and warmth",ambientColor:"rgba(251, 191, 36, 0.20)",spotlightIntensity:.95,shadowBlur:18,coveColor:"#fbbf24",descriptionAr:"إضاءة ذهبية متوازنة بين الدفء والنقاء، تحاكي ضوء الشمس في ساعات ما قبل الغروب وتظهر أدق تفاصيل الحجر الطبيعي.",descriptionEn:"Golden equilibrium between warm glow and neutral crispness, simulating sunset rays streaming through tall windows."},{id:"mode-5000k",tempK:5e3,nameAr:"إضاءة معارض نهارية (5000K)",nameEn:"5000K Gallery Neutral Daylight",subtitleAr:"وضوح ونقاء معماري عالي الدقة (CRI > 95)",subtitleEn:"Architectural clarity with true color rendering",ambientColor:"rgba(56, 189, 248, 0.15)",spotlightIntensity:1,shadowBlur:12,coveColor:"#38bdf8",descriptionAr:"ضوء ناصع محايد بأعلى معامل إظهار لوني، مخصص لإبراز اللوحات الفنية والتصميم الهندسي دون أي تشويه للألوان الطبيعية.",descriptionEn:"High CRI daylight simulation revealing genuine material tones, art installations, and structural contours."},{id:"mode-night-cove",tempK:2200,nameAr:"إضاءة مخفية ليلية فاخرة (Cove LED)",nameEn:"Architectural Night Cove LED",subtitleAr:"دراما سينمائية وظلال هندسية عميقة",subtitleEn:"Cinematic drama with floating ceiling linear wash",ambientColor:"rgba(30, 27, 75, 0.45)",spotlightIntensity:.45,shadowBlur:35,coveColor:"#d97706",descriptionAr:"إضاءة خطية غير مباشرة غائرة في تجاويف الأسقف والستائر، تخلق تأثيراً عائماً يضفي فخامة فندقية استثنائية في هدوء الليل.",descriptionEn:"Concealed perimeter LED grazing walls and floating ceiling trays with deep contrast and hotel-suite prestige."}];function W(h,e,i){let t=90;h.id==="statuario-marble"&&e.id==="acoustic-oak-slats"?t=98:h.id==="saudi-travertine"&&e.id==="carved-riyadh-stone"?t=97:h.id==="american-walnut"&&e.id==="brushed-brass-panels"?t=96:h.id==="seamless-microcement"&&e.id==="acoustic-oak-slats"?t=95:h.id==="statuario-marble"&&e.id==="brushed-brass-panels"&&(t=94),i.id==="mode-2700k"&&(h.id==="american-walnut"||e.id==="acoustic-oak-slats")&&(t=Math.min(100,t+2));const a=(h.acousticNRC+e.acousticNRC)/2,n=Math.round(a*100),o=h.thermalMass==="High"&&e.thermalMass==="High"?95:85,c=h.pricePerM2*50+e.pricePerM2*75;let m="تناغم معماري فائق يوازن بين كفاءة العزل الصوتي وانعكاسات الضوء الطبيعي والراحة البصرية.",d="Superior architectural synergy harmonizing acoustic absorption, daylight reflections, and tactile prestige.";return t>=97&&(m="اقتران استثنائي معتمد في مشاريع القصور الملكية؛ يجمع بين صدى الفخامة والدفء الصوتي المثالي.",d="Exceptional royal-grade pairing combining monumental elegance with acoustically tuned warmth."),{score:t,acousticScore:n,thermalScore:o,totalAreaCost50m2:c,evaluationAr:m,evaluationEn:d}}class Q{constructor(e,i){s(this,"container");s(this,"selectedFloor",$[0]);s(this,"selectedWall",T[2]);s(this,"selectedLight",M[0]);s(this,"dimmerLevel",85);s(this,"onApplyToEstimatorCallback");const t=document.getElementById(e);if(!t)throw new Error(`Container #${e} not found`);this.container=t,this.onApplyToEstimatorCallback=i,r.subscribe(()=>{this.render(),this.bindEvents()})}init(){this.render(),this.bindEvents()}render(){const e=r.getLang()==="ar",i=W(this.selectedFloor,this.selectedWall,this.selectedLight);this.container.innerHTML=`
      <div class="glass-panel" style="padding: 32px; border-radius: 24px;">
        
        <!-- Header -->
        <div style="margin-bottom: 24px;">
          <span class="badge badge-cyan" style="margin-bottom: 8px;">
            <span>💡</span> ${e?"محاكاة فيزيائية حية للإضاءة والخامات":"Real-Time Photometric Lighting & Material Studio"}
          </span>
          <h2 style="font-size: 1.6rem; font-weight: 800;">${r.t("studioTitle")}</h2>
          <p style="color: var(--text-secondary); font-size: 0.95rem;">${r.t("studioSubtitle")}</p>
        </div>

        <!-- Studio Main Layout (Left: Visualizer Stage, Right: Material & Lighting Controls) -->
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 28px; align-items: start;">
          
          <!-- LEFT: Architectural Visualizer Canvas/SVG Stage -->
          <div style="position: sticky; top: 100px;">
            <div id="visualizer-stage" style="position: relative; width: 100%; height: 420px; border-radius: 20px; overflow: hidden; background: #030712; border: 1px solid var(--border-gold); box-shadow: var(--glass-shadow);">
              
              <!-- Ambient & Dimmer Lighting Overlay -->
              <div id="ambient-overlay" style="position: absolute; inset: 0; background: ${this.selectedLight.ambientColor}; opacity: ${this.dimmerLevel/100}; mix-blend-mode: color; pointer-events: none; transition: all 0.5s ease; z-index: 5;"></div>
              
              <!-- Architectural Ceiling Cove Light Beam -->
              <div id="cove-beam" style="position: absolute; top: 0; left: 0; right: 0; height: 18px; background: ${this.selectedLight.coveColor}; box-shadow: 0 10px 45px 15px ${this.selectedLight.coveColor}; opacity: ${this.dimmerLevel/100*.9}; pointer-events: none; z-index: 6; transition: all 0.5s ease;"></div>

              <!-- Living Salon Architectural 3D Rendering (SVG with Perspective) -->
              <svg viewBox="0 0 600 420" width="100%" height="100%" style="display: block;" preserveAspectRatio="none">
                <defs>
                  <!-- Floor Perspective Shader -->
                  <linearGradient id="floor_depth" x1="0" y1="260" x2="0" y2="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#000000" stop-opacity="0.45"/>
                    <stop offset="1" stop-color="#000000" stop-opacity="0"/>
                  </linearGradient>

                  <!-- Marble Vein Pattern -->
                  <pattern id="pat-marble" width="120" height="80" patternUnits="userSpaceOnUse">
                    <rect width="120" height="80" fill="#f8fafc"/>
                    <path d="M0,20 Q40,60 80,10 T120,40" stroke="#cbd5e1" stroke-width="2.5" fill="none"/>
                    <path d="M20,80 Q70,30 110,70" stroke="#f59e0b" stroke-opacity="0.4" stroke-width="1.5" fill="none"/>
                  </pattern>

                  <!-- Travertine Lines Pattern -->
                  <pattern id="pat-travertine" width="100" height="40" patternUnits="userSpaceOnUse">
                    <rect width="100" height="40" fill="#e7e5e4"/>
                    <line x1="0" y1="10" x2="100" y2="10" stroke="#d6d3d1" stroke-width="1.8"/>
                    <line x1="0" y1="22" x2="100" y2="22" stroke="#a8a29e" stroke-width="1.2"/>
                    <line x1="0" y1="34" x2="100" y2="34" stroke="#d6d3d1" stroke-width="1.5"/>
                  </pattern>

                  <!-- Chevron Parquet Pattern -->
                  <pattern id="pat-chevron" width="60" height="60" patternUnits="userSpaceOnUse">
                    <rect width="60" height="60" fill="#451a03"/>
                    <path d="M0,30 L30,0 L60,30 L30,60 Z" stroke="#78350f" stroke-width="2" fill="#58240c"/>
                  </pattern>

                  <!-- Microcement Pattern -->
                  <pattern id="pat-cement" width="80" height="80" patternUnits="userSpaceOnUse">
                    <rect width="80" height="80" fill="#475569"/>
                    <circle cx="20" cy="30" r="15" fill="#334155" fill-opacity="0.4"/>
                    <circle cx="60" cy="65" r="20" fill="#64748b" fill-opacity="0.3"/>
                  </pattern>

                  <!-- Wall Fluted Grooves -->
                  <pattern id="pat-fluted" width="20" height="260" patternUnits="userSpaceOnUse">
                    <rect width="20" height="260" fill="#fef3c7"/>
                    <rect x="10" y="0" width="10" height="260" fill="#d97706" fill-opacity="0.35"/>
                  </pattern>

                  <!-- Wall Venetian Marmorino -->
                  <pattern id="pat-venetian" width="100" height="100" patternUnits="userSpaceOnUse">
                    <rect width="100" height="100" fill="#f1f5f9"/>
                    <path d="M0,0 Q50,80 100,20 T100,100 L0,100 Z" fill="#e2e8f0" fill-opacity="0.4"/>
                  </pattern>

                  <!-- Wall Acoustic Slats -->
                  <pattern id="pat-slats" width="18" height="260" patternUnits="userSpaceOnUse">
                    <rect width="18" height="260" fill="#0f172a"/>
                    <rect x="0" y="0" width="11" height="260" fill="#b45309"/>
                  </pattern>

                  <!-- Wall Brass Panels -->
                  <pattern id="pat-brass" width="80" height="260" patternUnits="userSpaceOnUse">
                    <rect width="80" height="260" fill="#d97706"/>
                    <line x1="78" y1="0" x2="78" y2="260" stroke="#78350f" stroke-width="2"/>
                    <rect x="0" y="0" width="76" height="260" fill="#f59e0b" fill-opacity="0.25"/>
                  </pattern>
                </defs>

                <!-- Back Wall Surface (Cladding Material) -->
                <polygon points="60,20 540,20 540,260 60,260" fill="${this.getWallPatternRef()}"/>

                <!-- Perspective Left Wall with Panoramic Glass Window to Sunset -->
                <polygon points="0,0 60,20 60,260 0,330" fill="#0f172a"/>
                <polygon points="5,15 55,28 55,250 5,315" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="1.5"/>
                <!-- Skyline Horizon seen through window -->
                <line x1="5" y1="180" x2="55" y2="170" stroke="#f59e0b" stroke-width="2"/>
                <polygon points="12,175 18,130 25,174" fill="#030712"/>
                <polygon points="30,172 38,110 44,171" fill="#030712"/>

                <!-- Perspective Right Wall -->
                <polygon points="540,20 600,0 600,330 540,260" fill="#1e293b"/>

                <!-- Architectural Flooring (Perspective Trapezoid) -->
                <polygon points="60,260 540,260 600,420 0,420" fill="${this.getFloorPatternRef()}"/>
                <polygon points="60,260 540,260 600,420 0,420" fill="url(#floor_depth)"/>

                <!-- Architectural Downlight Cone -->
                <polygon points="300,20 200,420 400,420" fill="${this.selectedLight.coveColor}" fill-opacity="${this.dimmerLevel/100*.12}"/>

                <!-- Minimalist Italian Designer Sofa (Perspective Silhouette) -->
                <!-- Sofa Shadow -->
                <ellipse cx="310" cy="345" rx="140" ry="22" fill="#000000" fill-opacity="0.6"/>
                <!-- Sofa Base & Cushions -->
                <rect x="180" y="280" width="240" height="50" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
                <rect x="200" y="260" width="100" height="30" rx="8" fill="#334155"/>
                <rect x="310" y="260" width="100" height="30" rx="8" fill="#334155"/>
                <!-- Velvet Accent Pillows in Emerald & Gold -->
                <rect x="190" y="265" width="28" height="28" rx="4" fill="#10b981"/>
                <rect x="390" y="265" width="28" height="28" rx="4" fill="#f59e0b"/>

                <!-- Sculptural Low Travertine Coffee Table -->
                <ellipse cx="305" cy="370" rx="60" ry="16" fill="#000000" fill-opacity="0.4"/>
                <ellipse cx="305" cy="362" rx="55" ry="14" fill="#e7e5e4" stroke="#a8a29e" stroke-width="1.5"/>
                <rect x="298" y="362" width="14" height="12" fill="#78716c"/>

                <!-- Architectural Arc Floor Lamp -->
                <path d="M480,380 Q495,140 400,120" stroke="#d97706" stroke-width="3" fill="none"/>
                <circle cx="480" cy="380" r="10" fill="#0f172a" stroke="#d97706" stroke-width="2"/>
                <ellipse cx="395" cy="125" rx="18" ry="8" fill="#f59e0b" fill-opacity="0.9"/>
                <polygon points="380,128 350,220 440,220" fill="#fbbf24" fill-opacity="${this.dimmerLevel/100*.2}"/>
              </svg>

              <!-- Floating Live Stats Badge Overlay -->
              <div style="position: absolute; bottom: 16px; left: 16px; [dir=ltr]& { left: auto; right: 16px; }; background: var(--bg-glass-heavy); backdrop-filter: blur(14px); padding: 10px 16px; border-radius: 12px; border: 1px solid var(--border-gold); z-index: 10; display: flex; align-items: center; gap: 14px;">
                <div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${r.t("harmonyScoreLabel")}</div>
                  <div class="font-mono" style="font-size: 1.15rem; font-weight: 800; color: var(--accent-gold);">
                    ${i.score} / 100
                  </div>
                </div>
                <div style="height: 24px; width: 1px; background: var(--border-subtle);"></div>
                <div>
                  <div style="font-size: 0.72rem; color: var(--text-muted);">${r.t("acousticLabel")}</div>
                  <div class="font-mono" style="font-size: 1.15rem; font-weight: 800; color: var(--accent-cyan);">
                    ${(i.acousticScore/100).toFixed(2)}
                  </div>
                </div>
              </div>

            </div>

            <!-- Material Synergy Feedback Box -->
            <div style="margin-top: 14px; background: var(--bg-secondary); padding: 16px 20px; border-radius: 16px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--accent-gold);">
                  ✨ ${e?"تقييم التوافق المعماري والراحة الحسية":"Architectural Sensory Evaluation"}
                </span>
                <span class="font-mono" style="font-size: 0.85rem; font-weight: 700; color: var(--text-primary);">
                  ${r.t("livingRoomEstimateLabel")} ${i.totalAreaCost50m2.toLocaleString("en-US")} ر.س
                </span>
              </div>
              <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
                ${e?i.evaluationAr:i.evaluationEn}
              </p>
              
              <button id="btn-apply-materials" class="btn btn-gold" style="width: 100%; margin-top: 14px; padding: 12px; font-size: 0.9rem;">
                <span>🚀</span> ${r.t("applyMaterialsToEstimator")}
              </button>
            </div>
          </div>

          <!-- RIGHT: Controls for Lighting & Materials -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            
            <!-- 1. Lighting Mode Selector -->
            <div>
              <div style="font-weight: 700; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>☀️</span> ${r.t("lightModeTitle")}
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
                ${M.map(t=>{const a=this.selectedLight.id===t.id;return`
                    <div class="light-mode-card" data-mode-id="${t.id}" style="padding: 12px 14px; border-radius: 14px; cursor: pointer; border: 1.5px solid ${a?"var(--accent-gold)":"var(--border-subtle)"}; background: ${a?"rgba(245, 158, 11, 0.12)":"var(--bg-secondary)"}; transition: var(--transition-smooth);">
                      <div style="font-weight: 700; font-size: 0.86rem; color: ${a?"var(--accent-gold)":"var(--text-primary)"}; margin-bottom: 2px;">
                        ${e?t.nameAr:t.nameEn}
                      </div>
                      <div style="font-size: 0.75rem; color: var(--text-muted);">${e?t.subtitleAr:t.subtitleEn}</div>
                    </div>
                  `}).join("")}
              </div>

              <!-- Dimmer Slider -->
              <div style="background: var(--bg-secondary); padding: 14px 18px; border-radius: 14px; border: 1px solid var(--border-subtle);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.85rem;">
                  <span style="color: var(--text-secondary); font-weight: 600;">${r.t("lightDimmerLabel")}</span>
                  <span id="dimmer-val" class="font-mono" style="font-weight: 700; color: var(--accent-gold);">${this.dimmerLevel}%</span>
                </div>
                <input type="range" id="dimmer-range" class="custom-range" min="15" max="100" step="5" value="${this.dimmerLevel}">
              </div>
            </div>

            <!-- 2. Flooring Material Selector -->
            <div>
              <div style="font-weight: 700; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>🏛️</span> ${r.t("floorSelectTitle")}
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                ${$.map(t=>{const a=this.selectedFloor.id===t.id;return`
                    <div class="swatch-card floor-card" data-floor-id="${t.id}" style="padding: 14px; border-radius: 14px; cursor: pointer; border: 1.5px solid ${a?"var(--accent-gold)":"var(--border-subtle)"}; background: ${a?"var(--bg-card-hover)":"var(--bg-secondary)"}; position: relative; transition: var(--transition-smooth);">
                      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: ${t.textureColor}; border: 1px solid var(--border-medium);"></div>
                        <h4 style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary); margin: 0;">${e?t.nameAr:t.nameEn}</h4>
                      </div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted);">
                        <span>${e?t.originAr:t.originEn}</span>
                        <strong class="font-mono" style="color: var(--accent-gold);">${t.pricePerM2} ر.س/م²</strong>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <!-- 3. Wall Cladding Selector -->
            <div>
              <div style="font-weight: 700; font-size: 1rem; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                <span>🧱</span> ${r.t("wallSelectTitle")}
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                ${T.map(t=>{const a=this.selectedWall.id===t.id;return`
                    <div class="swatch-card wall-card" data-wall-id="${t.id}" style="padding: 14px; border-radius: 14px; cursor: pointer; border: 1.5px solid ${a?"var(--accent-cyan)":"var(--border-subtle)"}; background: ${a?"var(--bg-card-hover)":"var(--bg-secondary)"}; position: relative; transition: var(--transition-smooth);">
                      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                        <div style="width: 24px; height: 24px; border-radius: 6px; background: ${t.textureColor}; border: 1px solid var(--border-medium);"></div>
                        <h4 style="font-size: 0.86rem; font-weight: 700; color: var(--text-primary); margin: 0;">${e?t.nameAr:t.nameEn}</h4>
                      </div>
                      <div style="display: flex; justify-content: space-between; font-size: 0.78rem; color: var(--text-muted);">
                        <span>${e?t.originAr:t.originEn}</span>
                        <strong class="font-mono" style="color: var(--accent-cyan);">${t.pricePerM2} ر.س/م²</strong>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            </div>

          </div>

        </div>

      </div>
    `,x.initTiltCards()}getFloorPatternRef(){switch(this.selectedFloor.id){case"statuario-marble":return"url(#pat-marble)";case"saudi-travertine":return"url(#pat-travertine)";case"american-walnut":return"url(#pat-chevron)";case"seamless-microcement":return"url(#pat-cement)";default:return"url(#pat-marble)"}}getWallPatternRef(){switch(this.selectedWall.id){case"carved-riyadh-stone":return"url(#pat-fluted)";case"venetian-plaster":return"url(#pat-venetian)";case"acoustic-oak-slats":return"url(#pat-slats)";case"brushed-brass-panels":return"url(#pat-brass)";default:return"url(#pat-slats)"}}bindEvents(){document.querySelectorAll(".light-mode-card").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-mode-id"),o=M.find(c=>c.id===n);o&&(g.playTierChime(),this.selectedLight=o,this.render(),this.bindEvents())})});const e=document.getElementById("dimmer-range"),i=document.getElementById("dimmer-val");e==null||e.addEventListener("input",()=>{g.playSliderTick(),this.dimmerLevel=parseInt(e.value,10),i&&(i.textContent=`${this.dimmerLevel}%`);const a=document.getElementById("ambient-overlay");a&&(a.style.opacity=String(this.dimmerLevel/100));const n=document.getElementById("cove-beam");n&&(n.style.opacity=String(this.dimmerLevel/100*.9))}),document.querySelectorAll(".floor-card").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-floor-id"),o=$.find(c=>c.id===n);o&&(g.playClick(),this.selectedFloor=o,this.render(),this.bindEvents())})}),document.querySelectorAll(".wall-card").forEach(a=>{a.addEventListener("click",()=>{const n=a.getAttribute("data-wall-id"),o=T.find(c=>c.id===n);o&&(g.playClick(),this.selectedWall=o,this.render(),this.bindEvents())})});const t=document.getElementById("btn-apply-materials");t==null||t.addEventListener("click",()=>{g.playClick();let a="royal";this.selectedFloor.id==="statuario-marble"&&this.selectedWall.id==="carved-riyadh-stone"?a="salmani":this.selectedFloor.id==="seamless-microcement"&&(a="turnkey"),this.onApplyToEstimatorCallback(a)})}}const I=[{id:"contemporary-salmani",titleAr:"العمارة السلمانية المعاصرة",titleEn:"Contemporary Salmani Architecture",regionAr:"الرياض ووسط المملكة",regionEn:"Riyadh & Central Province",category:"salmani",tagAr:"الأصالة والرؤية",tagEn:"Heritage & Vision",conceptAr:"طراز معماري أصيل أطلقه خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز، يجسد الهوية النجدية بمرونة وجماليات الحداثة العالمية عبر الكتل الحجرية الرصينة والفتحات الرأسية المتناسقة.",conceptEn:"An authentic architectural movement established by King Salman, embodying Najdi identity with modern geometric proportions, vertical slit windows, and hand-chiseled Riyadh stone.",philosophicalQuoteAr:"«العمارة ليست مجرد جدران، بل هي مرآة الروح الوطنية وثبات الهوية في وجه العولمة»",philosophicalQuoteEn:'"Architecture is not merely walls; it is the physical mirror of national soul and enduring identity."',wwr:32,uValue:.28,timelineMonths:18,budgetRangeSAR:"3,200 - 4,500 / م²",featuresAr:["تكسيات حجر الرياض الكريمي المنحوت ميكانيكياً","نسب ذهبية في الفتحات الرأسية مع كاسرات شمسية ذكية","فناء وسطي واسع يضمن الخصوصية العائلية المطلقة","أبواب رئيسية عملاقة من خشب السدر والحديد المطروق"],featuresEn:["Mechanically anchored cream Riyadh limestone panels","Golden-ratio vertical slits with integrated solar shading","Generous central courtyard providing absolute privacy","Monumental solid cedarwood pivot entry portal"],presetEstimator:{landArea:750,footprintRatio:.6,hasBasement:!0,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!0,finishingTier:"salmani",selectedAddOns:["knx_smart_home","landscaped_courtyard","hydraulic_elevator"]},svgGraphic:`<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"modern-najdi-courtyard",titleAr:"فيلا الفناء النجدي الحديث",titleEn:"Modern Najdi Courtyard Villa",regionAr:"الدرعية وحطين",regionEn:"Diriyah & Hittin",category:"heritage",tagAr:"الخصوصية المناخية",tagEn:"Climatic Sanctuary",conceptAr:"إعادة إحياء العمارة الطينية النجدية العريقة بلغة المواد المعاصرة، حيث تتنفس الفيلا نحو الداخل من خلال فناء مشجر يوفر نسيم هواء طبيعي وخصوصية متناهية للعائلة.",conceptEn:"A high-tech reinvention of mud-brick vernacular, inward-focused around a sunken oasis courtyard engineered for passive evaporative cooling and supreme family sanctuary.",philosophicalQuoteAr:"«البيت النجدي قلبٌ ينبض بالداخل، وجدارٌ صامد يحمي السكينة من ضجيج العالم»",philosophicalQuoteEn:'"The Najdi home is an inward-pulsing heart, wrapped in protective silence."',wwr:28,uValue:.24,timelineMonths:16,budgetRangeSAR:"2,800 - 3,800 / م²",featuresAr:["فناء داخلي غاطس مزود بأشجار سدر ونوافير مائية حجرية","تدرج الكتل المعمارية لمحاكاة أزقة بلدة الدرعية التاريخية","تجاويف مثلثة (شرفات وفرجات) للتهوية الطبيعية والإضاءة الهادئة","عزل حراري فائق يخفض استهلاك التكييف بنسبة تصل إلى 42%"],featuresEn:["Sunken courtyard with native Sidr trees and carved fountains","Stepped geometric massing echoing historic Diriyah alleyways","Traditional triangular apertures (Furajat) for airflow & soft light","High-performance insulation cutting cooling energy by up to 42%"],presetEstimator:{landArea:600,footprintRatio:.65,hasBasement:!1,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!0,finishingTier:"royal",selectedAddOns:["landscaped_courtyard","knx_smart_home","solar_energy"]},svgGraphic:`<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"asir-highland-pavilion",titleAr:"أجنحة الحجر العسيري والضباب",titleEn:"Asir Highland Stone Pavilion",regionAr:"أبها وجبال عسير",regionEn:"Abha & Asir Highlands",category:"mountain",tagAr:"قمم الطبيعة والضباب",tagEn:"Mist & Mountain Majesty",conceptAr:"عمارة جبلية شامخة مستوحاة من قلاع وحصون منطقة عسير (رجال ألمع)، ترتكز على مداميك حجر المرو الأبيض والشست الداكن، مع إطلالات بانورامية تسبح في سحر الضباب والغيوم.",conceptEn:"Rugged mountain architecture inspired by Asir fortress palaces, featuring stepped slate stone masonry layered with white quartz bands and sweeping glass terraces above the clouds.",philosophicalQuoteAr:"«في جبال عسير، تنبثق العمارة كصخرة من صلب الأرض، وتعانق السحاب بعزة وشموخ»",philosophicalQuoteEn:'"In Asir peaks, architecture rises from the living bedrock, touching the mist in timeless dignity."',wwr:45,uValue:.22,timelineMonths:20,budgetRangeSAR:"3,000 - 4,200 / م²",featuresAr:["جدران حجرية جبلية مدعمة بمداميك المرو الأبيض العاكسة للضوء","تراسات بانورامية واسعة معلقة تطل على منحدرات السودة والوديان","مدافئ حطب مركزية مفتوحة مع مداخن حجرية بارتفاعات مزدوجة","أسقف خشبية جمالية من جذوع العرعر العطري المقاوم للرطوبة"],featuresEn:["Indigenous slate stone layered with luminous white quartz belts","Cantilevered panoramic terraces hovering over the mist valleys","Double-height open stone hearth fireplaces with sculptural flues","Aromatic native juniper timber exposed roof beams"],presetEstimator:{landArea:900,footprintRatio:.5,hasBasement:!0,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!0,finishingTier:"royal",selectedAddOns:["infinity_pool","knx_smart_home","home_cinema_spa"]},svgGraphic:`<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"redsea-dune-residence",titleAr:"قصر الكثبان الساحلي",titleEn:"Red Sea Coastal Dune Residence",regionAr:"أمالا والبحر الأحمر",regionEn:"Amaala & Red Sea Coast",category:"coastal",tagAr:"الرفاهية التجددية",tagEn:"Regenerative Marine Luxury",conceptAr:"خطوط انسيابية منحنية تحاكي حركة الكثبان الرملية الذهبية وأمواج البحر الأحمر، مصنوعة من مواد طبيعية مستدامة وتندمج بالكامل مع البيئة البحرية الحساسة بنظام طاقة متجددة 100%.",conceptEn:"Organic undulating curves emulating windswept dunes and Red Sea swells, engineered from bio-adaptive materials with zero carbon footprint and pristine private marina access.",philosophicalQuoteAr:"«العمارة التجددية لا تقف على الأرض متطفلة، بل تنمو منها كنبتة ساحلية تعيد إليها الحياة»",philosophicalQuoteEn:'"Regenerative design never intrudes upon the earth; it rises naturally as coastal flora giving back life."',wwr:58,uValue:.2,timelineMonths:22,budgetRangeSAR:"4,000 - 5,800 / م²",featuresAr:["هيكل إنشائي منحني ثلاثي الأبعاد من الخشب الرقائقي الهندسي (Glulam)","تكسيات حجرية مسامية ملحية تقاوم رطوبة البحر بنظام عزل ذكي","مسبح إنفينيتي مياه بحرية مدمج مع الشاطئ الخاص والمرسى اليخوتي","منظومة طاقة شمسية وتخزين بطاريات تعمل بنسبة 100% خارج الشبكة"],featuresEn:["Parametric 3D glulam curved timber superstructures","Porous saline-resistant coral stone rain-screen panels","Integrated saltwater infinity basin merging with private lagoon","100% off-grid bifacial solar and microgrid lithium battery storage"],presetEstimator:{landArea:1200,footprintRatio:.5,hasBasement:!1,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!1,finishingTier:"salmani",selectedAddOns:["infinity_pool","solar_energy","knx_smart_home"]},svgGraphic:`<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"minimalist-cantilever-villa",titleAr:"الحداثة الزجاجية المينيمال",titleEn:"Minimalist Cantilever Glass Villa",regionAr:"شمال الرياض والواجهة البحرية بالخبر",regionEn:"North Riyadh & Khobar Waterfront",category:"minimalist",tagAr:"النقاء المعماري",tagEn:"Sculptural Minimalism",conceptAr:"عمارة كتلية طائرة وجريئة تعتمد على بروزات خرسانية عملاقة تصل إلى 7 أمتار بدون أعمدة وسيطة، محاطة بواجهات زجاجية منزلقة من الأرضية للسقف تمحو الحدود بين الداخل والطبيعة.",conceptEn:"Audacious cantilevered monolithic architecture with 7-meter column-free structural overhangs, surrounded by frameless motorized glass that completely dissolves interior-exterior thresholds.",philosophicalQuoteAr:"«الجمال هو كل ما لا يمكن حذفه دون الإخلال بجوهر المكان»",philosophicalQuoteEn:'"Perfection is reached not when there is nothing more to add, but when there is nothing left to take away."',wwr:65,uValue:.19,timelineMonths:17,budgetRangeSAR:"2,900 - 4,100 / م²",featuresAr:["بروزات كابولية خرسانية مسبقة الإجهاد (Post-Tensioned) 7 أمتار","واجهات زجاجية معمارية بدون فواصل ألمنيوم ظاهرة (Frameless)","أرضيات مايكروسمنت إيطالي ممتدة بدون أي فواصل تمدد أرضية","إضاءة خطية معمارية مخفية غائرة ومضبوطة سينمائياً"],featuresEn:["7-meter post-tensioned reinforced concrete cantilevers","Structural frameless double Low-E motorized glass sliders","Seamless continuous Italian microcement flooring surfaces","Recessed architectural knife-edge cove LED channels"],presetEstimator:{landArea:650,footprintRatio:.55,hasBasement:!0,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!0,finishingTier:"royal",selectedAddOns:["knx_smart_home","hydraulic_elevator","infinity_pool"]},svgGraphic:`<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`},{id:"neo-hejazi-rawasheen",titleAr:"الرواشين الحجازية المطورة",titleEn:"Neo-Hejazi Rawasheen Residence",regionAr:"جدة التاريخية والساحل الغربي",regionEn:"Historic Jeddah & Western Coast",category:"heritage",tagAr:"الخشب المنحوت والنسيم",tagEn:"Artisanal Woodcraft & Breeze",conceptAr:"تحفة هندسية تعيد صياغة رواشين ومشربيات جدة القديمة بقطع ليزري عالي الدقة وتقنيات حركة أوتوماتيكية تتفاعل مع حركة الشمس لضبط الظلال والتهوية الساحلية وتوفير راحة حرارية قصوى.",conceptEn:"A masterful modernization of Jeddah rawashin mashrabiya lattice screens, utilizing precision CNC laser craftsmanship and kinetic facades that track sun orientation for optimal passive cooling.",philosophicalQuoteAr:"«الروشان ليس مجرد شباك، بل هو فن ترشيح النور واستراق النسيم بحياء وجمال»",philosophicalQuoteEn:'"The Rawasheen is an artistic instrument that filters daylight and invites coastal breezes in poise."',wwr:38,uValue:.25,timelineMonths:19,budgetRangeSAR:"3,100 - 4,300 / م²",featuresAr:["مشربيات خشبية ورواشين هندسية ذات تحكم حركي ذكي بموضع الشمس","حجر المنقبي البحري الطبيعي المستخدم في ترميم جدة التاريخية","أفنية علوية رأسية مع مداخن سحب وتبريد هواء طبيعي (Wind-catchers)","زخارف هندسية إسلامية معاصرة مدمجة مع زجاج عاكس ملون"],featuresEn:["Smart kinetic CNC carved teakwood Rawasheen lattices","Authentic local coastal Mangabi stone wall claddings","Vertical thermal wind-catcher towers inducing natural breeze","Contemporary Islamic geometric motifs paired with dichroic glass"],presetEstimator:{landArea:800,footprintRatio:.6,hasBasement:!1,hasGroundFloor:!0,hasFirstFloor:!0,hasPenthouseAnnex:!0,finishingTier:"royal",selectedAddOns:["knx_smart_home","landscaped_courtyard","hydraulic_elevator"]},svgGraphic:`<svg viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`}];class K{constructor(e,i){s(this,"container");s(this,"currentFilter","all");s(this,"searchQuery","");s(this,"onLoadStyleCallback");const t=document.getElementById(e);if(!t)throw new Error(`Container #${e} not found`);this.container=t,this.onLoadStyleCallback=i,r.subscribe(()=>{this.render(),this.bindEvents()})}init(){this.render(),this.bindEvents()}render(){const e=r.getLang()==="ar",i=I.filter(t=>{const a=this.currentFilter==="all"||t.category===this.currentFilter,n=this.searchQuery.toLowerCase().trim();if(!n)return a;const o=(e?t.titleAr:t.titleEn).toLowerCase(),c=(e?t.regionAr:t.regionEn).toLowerCase(),m=(e?t.conceptAr:t.conceptEn).toLowerCase();return a&&(o.includes(n)||c.includes(n)||m.includes(n))});this.container.innerHTML=`
      <div class="glass-panel" style="padding: 36px; border-radius: 24px;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 20px; margin-bottom: 28px;">
          <div>
            <span class="badge badge-gold" style="margin-bottom: 8px;">
              <span>🗺️</span> ${e?"روائع العمارة السعودية والعالمية":"Architectural Atlas of Saudi Masterpieces"}
            </span>
            <h2 style="font-size: 1.6rem; font-weight: 800;">${r.t("atlasTitle")}</h2>
            <p style="color: var(--text-secondary); font-size: 0.95rem;">${r.t("atlasSubtitle")}</p>
          </div>

          <!-- Search Input -->
          <div style="min-width: 260px;">
            <input type="text" id="atlas-search-input" value="${this.searchQuery}" placeholder="${e?"بحث في الطرز المعمارية والمناطق...":"Search styles, regions..."}" style="width: 100%; padding: 12px 18px; border-radius: 12px; background: var(--bg-secondary); border: 1px solid var(--border-medium); color: var(--text-primary); font-family: inherit; font-size: 0.9rem; outline: none;">
          </div>
        </div>

        <!-- Filter Tags Bar -->
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 32px;">
          ${[{id:"all",label:r.t("filterAll")},{id:"salmani",label:r.t("filterSalmani")},{id:"heritage",label:r.t("filterHeritage")},{id:"mountain",label:r.t("filterMountain")},{id:"coastal",label:r.t("filterCoastal")},{id:"minimalist",label:r.t("filterMinimalist")}].map(t=>`
            <button class="filter-btn btn ${this.currentFilter===t.id?"btn-gold":"btn-glass"}" data-category="${t.id}" style="padding: 8px 18px; font-size: 0.85rem; border-radius: 999px;">
              ${t.label}
            </button>
          `).join("")}
        </div>

        <!-- Architectural Cards Grid (3 Columns) -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
          ${i.map(t=>`
            <div class="tilt-card" style="border-radius: 20px; overflow: hidden; display: flex; flex-direction: column;">
              
              <!-- SVG Architectural Graphic Banner -->
              <div style="width: 100%; height: 200px; background: #030712; position: relative; overflow: hidden; border-bottom: 1px solid var(--border-subtle);">
                ${t.svgGraphic}
                <div style="position: absolute; top: 14px; left: 14px; [dir=ltr]& { left: auto; right: 14px; };">
                  <span class="badge badge-gold" style="backdrop-filter: blur(8px);">
                    ${e?t.tagAr:t.tagEn}
                  </span>
                </div>
                <div style="position: absolute; bottom: 12px; right: 14px; [dir=ltr]& { right: auto; left: 14px; }; font-size: 0.82rem; font-weight: 600; color: var(--text-primary); text-shadow: 0 2px 8px rgba(0,0,0,0.8);">
                  📍 ${e?t.regionAr:t.regionEn}
                </div>
              </div>

              <!-- Card Body -->
              <div style="padding: 24px; display: flex; flex-direction: column; flex: 1;">
                <h3 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">
                  ${e?t.titleAr:t.titleEn}
                </h3>
                
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
                  ${e?t.conceptAr:t.conceptEn}
                </p>

                <!-- Philosophical Quote -->
                <div style="padding: 10px 14px; background: rgba(245, 158, 11, 0.06); border-right: 3px solid var(--accent-gold); [dir=ltr]& { border-right: none; border-left: 3px solid var(--accent-gold); }; border-radius: 8px; margin-bottom: 18px; font-style: italic; font-size: 0.78rem; color: var(--accent-gold-light);">
                  ${e?t.philosophicalQuoteAr:t.philosophicalQuoteEn}
                </div>

                <!-- Engineering Metrics Badges -->
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 20px; background: var(--bg-secondary); padding: 12px; border-radius: 12px; border: 1px solid var(--border-subtle); text-align: center;">
                  <div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${r.t("wwrLabel")}</div>
                    <div class="font-mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan);">${t.wwr}%</div>
                  </div>
                  <div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${r.t("uValueLabel")}</div>
                    <div class="font-mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-gold);">${t.uValue}</div>
                  </div>
                  <div>
                    <div style="font-size: 0.7rem; color: var(--text-muted);">${r.t("timelineLabel")}</div>
                    <div class="font-mono" style="font-size: 0.95rem; font-weight: 700; color: var(--accent-emerald);">${t.timelineMonths} ${r.t("monthsUnit")}</div>
                  </div>
                </div>

                <!-- Features Bullets -->
                <ul style="list-style: none; padding: 0; margin: 0 0 20px 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.8rem; color: var(--text-secondary);">
                  ${(e?t.featuresAr:t.featuresEn).map(a=>`
                    <li style="display: flex; align-items: flex-start; gap: 8px;">
                      <span style="color: var(--accent-gold);">✓</span>
                      <span>${a}</span>
                    </li>
                  `).join("")}
                </ul>

                <!-- Load into Estimator Action Button -->
                <div style="margin-top: auto;">
                  <button class="btn btn-gold btn-load-style" data-style-id="${t.id}" style="width: 100%; padding: 12px; font-size: 0.9rem;">
                    <span>📐</span> ${r.t("loadIntoEstimatorBtn")}
                  </button>
                </div>

              </div>

            </div>
          `).join("")}
        </div>

      </div>
    `,x.initTiltCards()}bindEvents(){document.querySelectorAll(".filter-btn").forEach(i=>{i.addEventListener("click",()=>{g.playClick();const t=i.getAttribute("data-category");t&&(this.currentFilter=t,this.render(),this.bindEvents())})});const e=document.getElementById("atlas-search-input");e==null||e.addEventListener("input",()=>{this.searchQuery=e.value,this.render(),this.bindEvents()}),document.querySelectorAll(".btn-load-style").forEach(i=>{i.addEventListener("click",()=>{g.playClick();const t=i.getAttribute("data-style-id"),a=I.find(n=>n.id===t);a&&this.onLoadStyleCallback(a)})})}}class X{constructor(){s(this,"overlay",null);s(this,"currentResult",null);s(this,"clientName","");this.createModalDOM()}createModalDOM(){const e=document.getElementById("boq-modal-overlay");e&&e.remove(),this.overlay=document.createElement("div"),this.overlay.id="boq-modal-overlay",this.overlay.className="modal-overlay",document.body.appendChild(this.overlay)}open(e){this.currentResult=e,this.render(),this.overlay&&(this.overlay.classList.add("active"),document.body.style.overflow="hidden")}close(){this.overlay&&(this.overlay.classList.remove("active"),document.body.style.overflow="")}render(){if(!this.overlay||!this.currentResult)return;const e=r.getLang()==="ar",i=this.currentResult,t=`BNY-2026-SA-${Math.floor(1e3+Math.random()*9e3)}`,a=new Date().toLocaleDateString(e?"ar-SA":"en-US",{year:"numeric",month:"long",day:"numeric"}),n=this.clientName||r.t("boqDefaultClient");this.overlay.innerHTML=`
      <div class="modal-dialog">
        <button class="modal-close-btn" id="boq-close-btn" title="${r.t("btnCloseBOQ")}">✕</button>
        
        <div class="boq-print-wrapper" style="padding: 40px; color: var(--text-primary);">
          
          <!-- Document Header -->
          <div style="border-bottom: 2px solid var(--border-gold); padding-bottom: 24px; margin-bottom: 28px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 20px;">
              <div>
                <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
                  <span style="font-size: 2rem;">🏛️</span>
                  <div>
                    <h1 class="font-display" style="font-size: 1.8rem; font-weight: 800; color: var(--accent-gold); letter-spacing: 0.05em; line-height: 1;">
                      ${r.t("brandName")}
                    </h1>
                    <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 500;">
                      ${e?v.officeAr:v.officeEn}
                    </div>
                  </div>
                </div>
                <div style="font-size: 0.85rem; color: var(--accent-cyan); font-weight: 600;">
                  ${r.t("boqDocHeader")}
                </div>
              </div>

              <!-- Ref & Date Box -->
              <div style="text-align: right; [dir=ltr]& { text-align: left; }; font-size: 0.82rem; background: var(--bg-card); padding: 12px 18px; border-radius: 12px; border: 1px solid var(--border-subtle);">
                <div>${r.t("boqRefNo")} <strong class="font-mono" style="color: var(--accent-gold);">${t}</strong></div>
                <div style="margin-top: 4px;">${r.t("boqDate")} <strong>${a}</strong></div>
                <div style="margin-top: 4px; color: var(--accent-emerald); font-weight: 600;">✓ معتمد رقمياً (SBC-Verified)</div>
              </div>
            </div>

            <!-- Client & Lead Architect Information Banner -->
            <div style="margin-top: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; background: var(--bg-secondary); padding: 16px 20px; border-radius: 14px; border: 1px solid var(--border-subtle);">
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${r.t("boqClientLabel")}</div>
                <div style="font-size: 1rem; font-weight: 700; color: var(--text-primary); margin-top: 2px;">
                  ${n}
                </div>
              </div>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${r.t("boqSupervisingArchitect")}</div>
                <div style="font-size: 1rem; font-weight: 700; color: var(--accent-gold); margin-top: 2px;">
                  ${e?v.nameAr:v.nameEn}
                </div>
                <div style="font-size: 0.72rem; color: var(--text-secondary);">${e?v.titleAr:v.titleEn}</div>
              </div>
              <div>
                <div style="font-size: 0.75rem; color: var(--text-muted);">${r.t("tierSelectTitle")}</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: var(--accent-cyan); margin-top: 2px;">
                  ${e?i.finishingTier.nameAr:i.finishingTier.nameEn}
                </div>
                <div style="font-size: 0.75rem; color: var(--text-secondary);">${i.builtUpArea.toLocaleString("en-US")} م² مسطح بنائي</div>
              </div>
            </div>

          </div>

          <!-- Itemized Engineering BOQ Table -->
          <div style="overflow-x: auto; margin-bottom: 28px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.88rem; text-align: ${e?"right":"left"};">
              <thead>
                <tr style="background: var(--bg-card); border-bottom: 2px solid var(--border-medium);">
                  <th style="padding: 12px 16px; font-weight: 700;">#</th>
                  <th style="padding: 12px 16px; font-weight: 700;">${r.t("boqColItem")}</th>
                  <th style="padding: 12px 16px; font-weight: 700;">${r.t("boqColCode")}</th>
                  <th style="padding: 12px 16px; font-weight: 700;">${r.t("boqColPercent")}</th>
                  <th style="padding: 12px 16px; font-weight: 700; text-align: ${e?"left":"right"};">${r.t("boqColTotal")}</th>
                </tr>
              </thead>
              <tbody>
                ${i.phases.map((o,c)=>`
                  <tr style="border-bottom: 1px solid var(--border-subtle);">
                    <td style="padding: 12px 16px; color: var(--text-muted);">${c+1}</td>
                    <td style="padding: 12px 16px;">
                      <strong style="color: var(--text-primary); font-size: 0.92rem;">${e?o.nameAr:o.nameEn}</strong>
                      <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 3px;">${e?o.descriptionAr:o.descriptionEn}</div>
                    </td>
                    <td style="padding: 12px 16px;">
                      <span class="badge badge-cyan" style="font-size: 0.72rem;">${o.codeRef}</span>
                    </td>
                    <td style="padding: 12px 16px; font-family: var(--font-mono); color: var(--text-muted);">${o.percentage}%</td>
                    <td style="padding: 12px 16px; font-family: var(--font-mono); font-weight: 700; text-align: ${e?"left":"right"}; color: var(--text-primary);">
                      ${o.cost.toLocaleString("en-US")}
                    </td>
                  </tr>
                `).join("")}

                <!-- Active Add-ons Rows if any -->
                ${i.activeAddOns.map((o,c)=>{const m=o.fixedCost+o.areaMultiplierCost*i.landArea;return`
                    <tr style="border-bottom: 1px solid var(--border-subtle); background: rgba(56, 189, 248, 0.04);">
                      <td style="padding: 12px 16px; color: var(--accent-cyan); font-weight: 700;">+</td>
                      <td style="padding: 12px 16px;">
                        <strong style="color: var(--accent-cyan); font-size: 0.92rem;">${e?o.nameAr:o.nameEn}</strong>
                        <div style="font-size: 0.76rem; color: var(--text-secondary); margin-top: 3px;">${e?o.descriptionAr:o.descriptionEn}</div>
                      </td>
                      <td style="padding: 12px 16px;">
                        <span class="badge badge-gold" style="font-size: 0.72rem;">ترقية ذكية</span>
                      </td>
                      <td style="padding: 12px 16px; font-family: var(--font-mono); color: var(--text-muted);">-</td>
                      <td style="padding: 12px 16px; font-family: var(--font-mono); font-weight: 700; text-align: ${e?"left":"right"}; color: var(--accent-cyan);">
                        ${m.toLocaleString("en-US")}
                      </td>
                    </tr>
                  `}).join("")}

                <!-- Subtotals -->
                <tr style="border-top: 2px solid var(--border-medium); font-weight: 700;">
                  <td colspan="4" style="padding: 12px 16px; text-align: ${e?"right":"left"};">${r.t("baseCostLabel")}</td>
                  <td style="padding: 12px 16px; font-family: var(--font-mono); text-align: ${e?"left":"right"};">
                    ${i.baseConstructionCost.toLocaleString("en-US")} ر.س
                  </td>
                </tr>

                ${i.addOnsCost>0?`
                  <tr style="font-weight: 700; color: var(--accent-cyan);">
                    <td colspan="4" style="padding: 10px 16px; text-align: ${e?"right":"left"};">${r.t("addOnsCostLabel")}</td>
                    <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${e?"left":"right"};">
                      ${i.addOnsCost.toLocaleString("en-US")} ر.س
                    </td>
                  </tr>
                `:""}

                <tr style="color: var(--text-secondary);">
                  <td colspan="4" style="padding: 10px 16px; text-align: ${e?"right":"left"};">${r.t("supervisionFeeLabel")}</td>
                  <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${e?"left":"right"};">
                    ${i.engineeringSupervisionFee.toLocaleString("en-US")} ر.س
                  </td>
                </tr>

                <tr style="color: var(--text-secondary);">
                  <td colspan="4" style="padding: 10px 16px; text-align: ${e?"right":"left"};">${r.t("contingencyLabel")}</td>
                  <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${e?"left":"right"};">
                    ${i.contingencyReserve.toLocaleString("en-US")} ر.س
                  </td>
                </tr>

                <tr style="color: var(--accent-gold); font-weight: 700;">
                  <td colspan="4" style="padding: 10px 16px; text-align: ${e?"right":"left"};">${r.t("vatLabel")}</td>
                  <td style="padding: 10px 16px; font-family: var(--font-mono); text-align: ${e?"left":"right"};">
                    ${i.vatAmount.toLocaleString("en-US")} ر.س
                  </td>
                </tr>

                <!-- Grand Total Final Row -->
                <tr style="background: var(--bg-card); font-size: 1.15rem; font-weight: 900; border-top: 2px solid var(--accent-gold);">
                  <td colspan="4" style="padding: 16px; color: var(--accent-gold); text-align: ${e?"right":"left"};">
                    ${r.t("grandTotalLabel")}
                  </td>
                  <td style="padding: 16px; font-family: var(--font-mono); color: var(--accent-gold); text-align: ${e?"left":"right"};">
                    ${i.grandTotal.toLocaleString("en-US")} ${r.t("sarCurrency")}
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <!-- Warranties & Official Digital Stamp Seal -->
          <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 24px; align-items: center; border-top: 1px solid var(--border-subtle); padding-top: 24px; margin-bottom: 24px;">
            <div>
              <div style="font-weight: 700; font-size: 0.9rem; color: var(--accent-gold); margin-bottom: 10px;">
                ${r.t("boqTermsTitle")}
              </div>
              <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 0.78rem; color: var(--text-secondary);">
                <li>✓ ${r.t("boqTerm1")}</li>
                <li>✓ ${r.t("boqTerm2")}</li>
                <li>✓ ${r.t("boqTerm3")}</li>
                <li>✓ ${r.t("boqTerm4")}</li>
              </ul>
            </div>

            <!-- Digital Seal & QR Code -->
            <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; background: var(--bg-secondary); padding: 16px; border-radius: 16px; border: 1px solid var(--border-gold);">
              <svg viewBox="0 0 80 80" width="80" height="80">
                <rect width="80" height="80" fill="#030712" rx="8"/>
                <!-- Geometric QR Pattern -->
                <rect x="10" y="10" width="22" height="22" fill="#f59e0b" rx="2"/>
                <rect x="14" y="14" width="14" height="14" fill="#030712" rx="1"/>
                <rect x="17" y="17" width="8" height="8" fill="#f59e0b"/>
                
                <rect x="48" y="10" width="22" height="22" fill="#f59e0b" rx="2"/>
                <rect x="52" y="14" width="14" height="14" fill="#030712" rx="1"/>
                <rect x="55" y="17" width="8" height="8" fill="#f59e0b"/>
                
                <rect x="10" y="48" width="22" height="22" fill="#f59e0b" rx="2"/>
                <rect x="14" y="52" width="14" height="14" fill="#030712" rx="1"/>
                <rect x="17" y="55" width="8" height="8" fill="#f59e0b"/>

                <rect x="38" y="38" width="8" height="8" fill="#38bdf8"/>
                <rect x="48" y="48" width="10" height="10" fill="#f59e0b"/>
                <rect x="62" y="58" width="8" height="8" fill="#38bdf8"/>
              </svg>
              <div style="font-size: 0.72rem; font-weight: 700; color: var(--accent-gold); margin-top: 8px;">
                ${e?"ختم الاعتماد الرقمي":"Official Verification Seal"}
              </div>
              <div class="font-mono" style="font-size: 0.65rem; color: var(--text-muted);">
                ${v.verificationRef}
              </div>
            </div>
          </div>

          <!-- Bottom Action Buttons (Hidden during Print) -->
          <div class="no-print" style="display: flex; justify-content: flex-end; gap: 14px; margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--border-subtle);">
            <button id="boq-copy-btn" class="btn btn-glass">
              <span>📋</span> ${e?"نسخ الملخص المالي":"Copy Summary"}
            </button>
            <button id="boq-print-btn" class="btn btn-gold">
              <span>🖨️</span> ${r.t("btnPrintBOQ")}
            </button>
          </div>

        </div>
      </div>
    `,this.bindEvents()}bindEvents(){var a;const e=document.getElementById("boq-close-btn");e==null||e.addEventListener("click",()=>{g.playClick(),this.close()}),(a=this.overlay)==null||a.addEventListener("click",n=>{n.target===this.overlay&&this.close()});const i=document.getElementById("boq-print-btn");i==null||i.addEventListener("click",()=>{g.playClick(),window.print()});const t=document.getElementById("boq-copy-btn");t==null||t.addEventListener("click",()=>{if(!this.currentResult)return;g.playClick();const n=this.currentResult,o=`استوديو بُـنْـيان للتصميم المعماري الفاخر | إشراف: أ. طارق ابوعشي
عرض سعر هندسي معتمد (كود SBC)
• مساحة الأرض: ${n.landArea} م²
• مسطح البناء (BUA): ${n.builtUpArea} م²
• باقة التشطيب: ${n.finishingTier.nameAr}
• التكلفة الإجمالية التقديرية: ${n.grandTotal.toLocaleString("en-US")} ريال سعودي (شامل الضريبة 15%)
• متوسط المتر المربع: ${n.costPerM2.toLocaleString("en-US")} ريال/م²`;navigator.clipboard.writeText(o).then(()=>{if(t){const c=t.innerHTML;t.innerHTML="<span>✓</span> تم النسخ بنجاح!",setTimeout(()=>{t.innerHTML=c},2500)}})})}}class Y{constructor(e,i){s(this,"container");s(this,"savedEstimates",[]);s(this,"onLoadEstimateCallback");const t=document.getElementById(e);if(!t)throw new Error(`Container #${e} not found`);this.container=t,this.onLoadEstimateCallback=i,this.loadFromStorage(),r.subscribe(()=>{this.render(),this.bindEvents()})}init(){this.render(),this.bindEvents()}saveEstimate(e){const i=r.getLang()==="ar",t={id:`EST-${Date.now()}`,name:`${i?"فيلا":"Villa"} ${e.builtUpArea}م² - ${i?e.finishingTier.nameAr:e.finishingTier.nameEn}`,timestamp:new Date().toLocaleTimeString(i?"ar-SA":"en-US",{hour:"2-digit",minute:"2-digit"}),result:e};this.savedEstimates.unshift(t),this.savedEstimates.length>4&&this.savedEstimates.pop(),this.syncStorage(),this.render(),this.bindEvents()}loadFromStorage(){try{const e=localStorage.getItem("bunyan_saved_estimates");e&&(this.savedEstimates=JSON.parse(e))}catch{this.savedEstimates=[]}}syncStorage(){try{localStorage.setItem("bunyan_saved_estimates",JSON.stringify(this.savedEstimates))}catch{}}render(){const e=r.getLang()==="ar";if(this.savedEstimates.length===0){this.container.innerHTML=`
        <div class="glass-panel" style="padding: 36px; border-radius: 24px; text-align: center;">
          <div style="font-size: 2.4rem; margin-bottom: 12px;">📁</div>
          <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 8px;">${r.t("savedEstimatesTitle")}</h3>
          <p style="color: var(--text-secondary); font-size: 0.9rem; max-width: 500px; margin: 0 auto;">
            ${r.t("noSavedEstimates")}
          </p>
        </div>
      `;return}this.container.innerHTML=`
      <div class="glass-panel" style="padding: 36px; border-radius: 24px;">
        
        <div style="margin-bottom: 24px;">
          <span class="badge badge-gold" style="margin-bottom: 8px;">
            <span>⚖️</span> ${e?"مقارنة السيناريوهات الاستثمارية":"Scenario Investment Comparison"}
          </span>
          <h3 style="font-size: 1.5rem; font-weight: 800;">${r.t("savedEstimatesTitle")}</h3>
          <p style="color: var(--text-secondary); font-size: 0.92rem;">${r.t("savedEstimatesSubtitle")}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          ${this.savedEstimates.map(i=>`
            <div class="tilt-card" style="padding: 24px; border-radius: 18px; border: 1.5px solid var(--border-gold); background: var(--bg-secondary); display: flex; flex-direction: column;">
              
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
                <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-primary); line-height: 1.3;">
                  ${i.name}
                </h4>
                <button class="btn-delete-saved" data-id="${i.id}" style="color: var(--text-muted); font-size: 0.8rem; cursor: pointer; padding: 4px;">
                  ✕
                </button>
              </div>

              <div class="font-mono" style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold); margin-bottom: 16px;">
                ${i.result.grandTotal.toLocaleString("en-US")} <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted);">${r.t("sarCurrency")}</span>
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px; font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 20px; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
                <div style="display: flex; justify-content: space-between;">
                  <span>${r.t("landAreaLabel")}</span>
                  <strong class="font-mono" style="color: var(--text-primary);">${i.result.landArea} م²</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>${r.t("buaComputedLabel")}</span>
                  <strong class="font-mono" style="color: var(--text-primary);">${i.result.builtUpArea} م²</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>${r.t("ratePerM2Label")}</span>
                  <strong class="font-mono" style="color: var(--accent-cyan);">${i.result.costPerM2.toLocaleString("en-US")} ر.س</strong>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <span>${r.t("tierSelectTitle")}</span>
                  <strong style="color: var(--accent-gold);">${e?i.result.finishingTier.badgeAr:i.result.finishingTier.badgeEn}</strong>
                </div>
              </div>

              <div style="margin-top: auto;">
                <button class="btn btn-gold btn-load-saved" data-id="${i.id}" style="width: 100%; padding: 10px; font-size: 0.88rem;">
                  <span>🔄</span> ${r.t("btnLoadEstimate")}
                </button>
              </div>

            </div>
          `).join("")}
        </div>

      </div>
    `}bindEvents(){document.querySelectorAll(".btn-delete-saved").forEach(e=>{e.addEventListener("click",i=>{i.stopPropagation(),g.playClick();const t=e.getAttribute("data-id");this.savedEstimates=this.savedEstimates.filter(a=>a.id!==t),this.syncStorage(),this.render(),this.bindEvents()})}),document.querySelectorAll(".btn-load-saved").forEach(e=>{e.addEventListener("click",()=>{g.playClick();const i=e.getAttribute("data-id"),t=this.savedEstimates.find(a=>a.id===i);t&&this.onLoadEstimateCallback(t.result)})})}}class J{constructor(){s(this,"blueprintCanvas",null);s(this,"navigation",null);s(this,"calculatorView",null);s(this,"studioView",null);s(this,"atlasView",null);s(this,"comparisonView",null);s(this,"boqModal",null)}init(){r.init();try{this.blueprintCanvas=new U("blueprint-canvas")}catch(e){console.warn("Canvas initialization notice:",e)}this.navigation=new j,this.boqModal=new X,this.comparisonView=new Y("comparison-mount",e=>{if(this.calculatorView){this.calculatorView.setInput({landArea:e.landArea,finishingTier:e.finishingTier.id});const i=document.getElementById("estimator-section");i==null||i.scrollIntoView({behavior:"smooth"})}}),this.comparisonView.init(),this.calculatorView=new H("calculator-mount",e=>{var i;(i=this.boqModal)==null||i.open(e)},e=>{var t;(t=this.comparisonView)==null||t.saveEstimate(e);const i=document.getElementById("comparison-section");i==null||i.scrollIntoView({behavior:"smooth"})}),this.calculatorView.init(),this.studioView=new Q("lighting-studio-mount",e=>{var t;(t=this.calculatorView)==null||t.setInput({finishingTier:e});const i=document.getElementById("estimator-section");i==null||i.scrollIntoView({behavior:"smooth"})}),this.studioView.init(),this.atlasView=new K("atlas-mount",e=>{var t;(t=this.calculatorView)==null||t.setInput({landArea:e.presetEstimator.landArea,footprintRatio:e.presetEstimator.footprintRatio,hasBasement:e.presetEstimator.hasBasement,hasFirstFloor:e.presetEstimator.hasFirstFloor,hasPenthouseAnnex:e.presetEstimator.hasPenthouseAnnex,finishingTier:e.presetEstimator.finishingTier,selectedAddOns:e.presetEstimator.selectedAddOns});const i=document.getElementById("estimator-section");i==null||i.scrollIntoView({behavior:"smooth"})}),this.atlasView.init(),this.renderSBCCards(),r.subscribe(()=>{this.renderSBCCards()}),x.initScrollReveals(),x.initTiltCards(),document.querySelectorAll("[data-counter]").forEach(e=>{var t;const i=parseInt(e.getAttribute("data-counter")||"0",10);if(i>0){const a=(t=e.textContent)==null?void 0:t.includes("%");x.animateCounter(e,i,1.6,"",a?"%":"")}}),console.log("🏛️ Bunyan Architectural Studio initialized successfully | Lead Architect: أ. طارق ابوعشي")}renderSBCCards(){const e=document.getElementById("sbc-cards-grid");if(!e)return;const i=r.getLang()==="ar";e.innerHTML=_.map(t=>`
      <div class="tilt-card" style="padding: 22px; border-radius: 18px; border: 1px solid var(--border-subtle); background: var(--bg-secondary); display: flex; flex-direction: column;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 1.8rem;">${t.icon}</span>
          <span class="badge badge-gold font-mono" style="font-size: 0.78rem;">${t.code}</span>
        </div>
        <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 6px;">
          ${i?t.titleAr:t.titleEn}
        </h4>
        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.45; margin-bottom: 14px;">
          ${i?t.scopeAr:t.scopeEn}
        </p>
        <div style="margin-top: auto; padding: 10px 14px; background: rgba(56, 189, 248, 0.08); border-radius: 10px; border: 1px solid var(--border-cyan); font-size: 0.76rem; color: var(--accent-cyan);">
          <strong>${i?"الاشتراط الفني:":"Requirement:"}</strong> ${i?t.complianceRuleAr:t.complianceRuleEn}
        </div>
      </div>
    `).join(""),x.initTiltCards()}}window.addEventListener("DOMContentLoaded",()=>{new J().init()});
