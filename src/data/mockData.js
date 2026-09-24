// ─────────────────────────────────────────────────────────────────────
// SkillSync — Deterministic Mock Data Engine (Zero API Dependencies)
// All data is curated to reflect real NSQF/DVET/NOS vocational context
// ─────────────────────────────────────────────────────────────────────

// ── SECTOR DEMAND VS ITI OUTPUT (Screen 1 Chart) ──────────────────────
export const sectorData = [
  {
    sector: "EV & Smart Mobility",
    sectorMr: "EV आणि स्मार्ट मोबिलिटी",
    demand: 14200,
    output: 1800,
    status: "severe-shortage",
    gap: "87%",
  },
  {
    sector: "Industrial Automation (PLC/SCADA)",
    sectorMr: "औद्योगिक ऑटोमेशन (PLC/SCADA)",
    demand: 9800,
    output: 2200,
    status: "severe-shortage",
    gap: "78%",
  },
  {
    sector: "Cloud & Electronics Tech",
    sectorMr: "क्लाउड आणि इलेक्ट्रॉनिक्स तंत्रज्ञान",
    demand: 18500,
    output: 6400,
    status: "moderate-shortage",
    gap: "65%",
  },
  {
    sector: "Conventional Machining & Wireman",
    sectorMr: "पारंपारिक मशीनिंग आणि वायरमन",
    demand: 4100,
    output: 16800,
    status: "oversupplied",
    gap: "-310%",
  },
];

// ── DISTRICT-LEVEL INSIGHTS (Screen 1 Table) ─────────────────────────
export const districtInsights = [
  {
    district: "Pune",
    districtMr: "पुणे",
    corridor: "Pimpri-Chinchwad / Chakan Auto Cluster",
    corridorMr: "पिंपरी-चिंचवड / चाकण ऑटो क्लस्टर",
    criticalNeed: "EV Battery Testers & Robotics Technicians",
    criticalNeedMr: "EV बॅटरी टेस्टर्स आणि रोबोटिक्स तंत्रज्ञ",
    gapPercent: 72,
    openPositions: 4120,
    color: "red",
  },
  {
    district: "Chhatrapati Sambhajinagar",
    districtMr: "छत्रपती संभाजीनगर",
    corridor: "AURIC Industrial City / Auto Component Belt",
    corridorMr: "AURIC औद्योगिक शहर / ऑटो कॉम्पोनन्ट पट्टा",
    criticalNeed: "CNC 5-Axis Operators & CAD/CAM Programmers",
    criticalNeedMr: "CNC 5-अक्ष ऑपरेटर्स आणि CAD/CAM प्रोग्रामर्स",
    gapPercent: 64,
    openPositions: 2840,
    color: "red",
  },
  {
    district: "Nashik",
    districtMr: "नाशिक",
    corridor: "Ambad & Satpur MIDC / Defence Mfg",
    corridorMr: "अंबड आणि सातपूर MIDC / संरक्षण उत्पादन",
    criticalNeed: "Solar Microgrid Technicians & Precision Metrology",
    criticalNeedMr: "सोलर मायक्रोग्रिड तंत्रज्ञ आणि प्रिसिजन मेट्रोलॉजी",
    gapPercent: 51,
    openPositions: 1950,
    color: "amber",
  },
  {
    district: "Nagpur",
    districtMr: "नागपूर",
    corridor: "MIHAN SEZ / Butibori Industrial Area",
    corridorMr: "MIHAN SEZ / बुटीबोरी औद्योगिक क्षेत्र",
    criticalNeed: "Logistics Automation & Warehouse Robotics",
    criticalNeedMr: "लॉजिस्टिक्स ऑटोमेशन आणि वेअरहाउस रोबोटिक्स",
    gapPercent: 46,
    openPositions: 1410,
    color: "amber",
  },
];

// ── ELECTRICIAN TRADE ANALYSIS (Screen 2 Core Data) ──────────────────
export const electricianTradeData = {
  tradeId: "CTS-ELE-2024-L4",
  tradeTitle: "Electrician Trade (CTS) — Directorate General of Training (DGT)",
  tradeTitleMr: "इलेक्ट्रिशियन व्यवसाय (CTS) — प्रशिक्षण महासंचालनालय (DGT)",
  nsqfLevel: 4,
  state: "Maharashtra",
  monitoredHubs: ["Pune-Chakan", "Chhatrapati Sambhajinagar", "Nashik"],
  overallAlignmentScore: 58,
  liveJobSignalsAnalyzed: 14280,

  retainedCompetencies: [
    {
      code: "NOS-ELE-01",
      name: "Three-phase AC Motor Installation & Maintenance",
      nameMr: "त्रि-फेज AC मोटर स्थापना आणि देखभाल",
      relevance: 92,
      status: "Retain",
    },
    {
      code: "NOS-ELE-02",
      name: "Electrical Safety & Earthing Standards (IS 732)",
      nameMr: "विद्युत सुरक्षा आणि अर्थिंग मानके (IS 732)",
      relevance: 100,
      status: "Retain",
    },
    {
      code: "NOS-ELE-03",
      name: "Domestic & Commercial Panel Wiring",
      nameMr: "घरगुती आणि व्यावसायिक पॅनल वायरिंग",
      relevance: 74,
      status: "Retain",
    },
    {
      code: "NOS-ELE-04",
      name: "Transformer Maintenance & Polarity Testing",
      nameMr: "ट्रान्सफॉर्मर देखभाल आणि ध्रुवता चाचणी",
      relevance: 86,
      status: "Retain",
    },
  ],

  missingCompetencies: [
    {
      name: "EV Battery Pack Diagnostics & BMS",
      nameMr: "EV बॅटरी पॅक डायग्नोस्टिक्स आणि BMS",
      urgency: "Critical",
      marketDemand: "4,120",
      growthYoY: "+148%",
    },
    {
      name: "PLC Ladder Logic & Industrial Relay Programming",
      nameMr: "PLC लॅडर लॉजिक आणि औद्योगिक रिले प्रोग्रामिंग",
      urgency: "High",
      marketDemand: "2,840",
      growthYoY: "+86%",
    },
    {
      name: "Solar Rooftop Inverter & Microgrid Synchronization",
      nameMr: "सोलर रूफटॉप इन्व्हर्टर आणि मायक्रोग्रिड सिंक्रोनायझेशन",
      urgency: "High",
      marketDemand: "1,950",
      growthYoY: "+64%",
    },
    {
      name: "Smart Energy Meters & IoT Telemetry Protocols",
      nameMr: "स्मार्ट एनर्जी मीटर आणि IoT टेलीमेट्री प्रोटोकॉल",
      urgency: "Medium",
      marketDemand: "1,410",
      growthYoY: "+52%",
    },
  ],

  obsoleteCompetencies: [
    {
      name: "Rewinding of DC Generators (Dynamo Overhaul)",
      nameMr: "DC जनरेटर रीवाइंडिंग (डायनॅमो ओव्हरहॉल)",
      reason: "Obsolete in 94% of Maharashtra manufacturing units",
      reasonMr: "महाराष्ट्रातील ९४% उत्पादन युनिट्समध्ये अप्रचलित",
    },
    {
      name: "Calibration of Analog Ammeter / Voltmeter",
      nameMr: "अॅनालॉग अॅमीटर / व्होल्टमीटर कॅलिब्रेशन",
      reason: "Superseded by Digital Multi-Function Meters in all new installations",
      reasonMr: "सर्व नवीन स्थापनांमध्ये डिजिटल मल्टी-फंक्शन मीटर्सने बदलले",
    },
  ],

  executiveRecommendation: {
    ref: "MH-DTE-2026-E4",
    title: "Curriculum Amendment Notice",
    titleMr: "अभ्यासक्रम दुरुस्ती सूचना",
    patchSummary:
      "Reallocate 45 practical hours from obsolete DC Dynamo Overhaul to a modular 4-week unit on 'EV Traction Motor Testing and BMS Diagnostics' in alignment with 3,100 open industrial requisitions across the Pune-Pimpri corridor.",
    patchSummaryMr:
      "अप्रचलित DC डायनॅमो ओव्हरहॉलमधील ४५ प्रात्यक्षिक तास 'EV ट्रॅक्शन मोटर चाचणी आणि BMS डायग्नोस्टिक्स' या ४-आठवड्यांच्या मॉड्यूलर युनिटसाठी पुनर्वाटप करा.",
    targetDistricts: ["Pune", "Nashik", "Chhatrapati Sambhajinagar"],
    projectedPlacementUplift: "+28.4%",
    estimatedSavings: "₹18,500 per apprentice",
    estimatedSavingsMr: "₹१८,५०० प्रति शिकाऊ उमेदवार",
  },
};

// ── CANDIDATE PATHWAY DATA (Screen 3) ────────────────────────────────
export const candidateData = {
  name: "Rohan Sawant",
  nameMr: "रोहन सावंत",
  institute: "ITI Aundh, Pune",
  instituteMr: "ITI औंध, पुणे",
  trade: "Electrician (CTS)",
  tradeMr: "इलेक्ट्रिशियन (CTS)",
  nsqfLevel: 4,
  overallReadiness: 62,

  acquiredSkills: [
    { name: "Domestic Wiring & Conduit Installation", nameMr: "घरगुती वायरिंग आणि कंड्युट स्थापना", level: "Proficient" },
    { name: "AC Motor Installation (3-Phase)", nameMr: "AC मोटर स्थापना (3-फेज)", level: "Proficient" },
    { name: "Safety & Earthing (IS 732)", nameMr: "सुरक्षा आणि अर्थिंग (IS 732)", level: "Proficient" },
    { name: "Transformer Polarity Testing", nameMr: "ट्रान्सफॉर्मर ध्रुवता चाचणी", level: "Intermediate" },
  ],

  bridgeModules: [
    {
      phase: "Phase 1",
      phaseMr: "टप्पा १",
      duration: "Weeks 1–2",
      durationMr: "आठवडे १–२",
      title: "Basic Solar Inverter Installation & Grid Sync",
      titleMr: "मूलभूत सोलर इन्व्हर्टर स्थापना आणि ग्रिड सिंक",
      description: "Hands-on rooftop solar PV mounting, inverter configuration, and net metering basics.",
      descriptionMr: "रूफटॉप सोलर PV माउंटिंग, इन्व्हर्टर कॉन्फिगरेशन आणि नेट मीटरिंग मूलभूत प्रात्यक्षिक.",
      provider: "MSSDS Solar Training Center, Pune",
    },
    {
      phase: "Phase 2",
      phaseMr: "टप्पा २",
      duration: "Weeks 3–5",
      durationMr: "आठवडे ३–५",
      title: "EV Battery Pack Testing & BMS Diagnostics",
      titleMr: "EV बॅटरी पॅक चाचणी आणि BMS डायग्नोस्टिक्स",
      description: "Li-ion cell balancing, thermal management systems, CAN bus protocol for EV powertrain.",
      descriptionMr: "Li-ion सेल बॅलन्सिंग, थर्मल मॅनेजमेंट सिस्टम, EV पॉवरट्रेनसाठी CAN बस प्रोटोकॉल.",
      provider: "ASDC Automotive Skill Hub, Chakan",
    },
    {
      phase: "Phase 3",
      phaseMr: "टप्पा ३",
      duration: "Weeks 6–7",
      durationMr: "आठवडे ६–७",
      title: "PLC Basics & Industrial IoT Protocols",
      titleMr: "PLC मूलभूत आणि औद्योगिक IoT प्रोटोकॉल",
      description: "Ladder logic fundamentals, SCADA overview, Modbus/MQTT for smart factory sensors.",
      descriptionMr: "लॅडर लॉजिक मूलभूत, SCADA आढावा, स्मार्ट फॅक्टरी सेन्सर्ससाठी Modbus/MQTT.",
      provider: "Siemens Centre of Excellence, Pune",
    },
  ],

  jobAlignments: [
    {
      company: "Tata Motors, Chakan",
      companyMr: "टाटा मोटर्स, चाकण",
      role: "EV Apprentice Technician",
      roleMr: "EV शिकाऊ तंत्रज्ञ",
      matchBefore: 41,
      matchAfter: 88,
      salary: "₹18,000–₹22,000/mo",
      salaryMr: "₹१८,०००–₹२२,०००/महिना",
    },
    {
      company: "Bajaj Auto, Chakan",
      companyMr: "बजाज ऑटो, चाकण",
      role: "Battery Assembly Line Operator",
      roleMr: "बॅटरी असेंबली लाइन ऑपरेटर",
      matchBefore: 35,
      matchAfter: 82,
      salary: "₹16,000–₹20,000/mo",
      salaryMr: "₹१६,०००–₹२०,०००/महिना",
    },
    {
      company: "Adani Solar, Mundra (MH Cluster)",
      companyMr: "अदानी सोलर, मुंद्रा (MH क्लस्टर)",
      role: "Solar Microgrid Installer",
      roleMr: "सोलर मायक्रोग्रिड इन्स्टॉलर",
      matchBefore: 28,
      matchAfter: 76,
      salary: "₹15,000–₹19,000/mo",
      salaryMr: "₹१५,०००–₹१९,०००/महिना",
    },
  ],
};

// ── TEAM DATA (About Modal) ──────────────────────────────────────────
export const teamMembers = [
  { name: "Mirza Amaanullah Baig", role: "Team Lead & Systems Architect", roleIcon: "Shield" },
  { name: "Mohammed Saheb Hussain", role: "Frontend Developer", roleIcon: "Monitor" },
  { name: "Mohammad Riyaz", role: "Backend & API Engineer", roleIcon: "Server" },
  { name: "Naveed Mohammed", role: "ML / NLP Engineer", roleIcon: "Brain" },
  { name: "Mohammed Adam", role: "DevOps & Cloud Deployment", roleIcon: "Cloud" },
  { name: "Seeyana Samreen", role: "UI/UX & Product Lead", roleIcon: "Palette" },
];
