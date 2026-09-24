// ─────────────────────────────────────────────────────────────────────
// SkillSync — Comprehensive English / Marathi Bilingual Translation Map
// ─────────────────────────────────────────────────────────────────────

const translations = {
  // ── NAVBAR & GLOBAL ──────────────────────────────────────────────
  brandName: {
    en: "SkillSync",
    mr: "स्किलसिंक",
  },
  brandSubtitle: {
    en: "Govt of Maharashtra • DVET Skill Intelligence Portal",
    mr: "महाराष्ट्र शासन • DVET कौशल्य बुद्धिमत्ता पोर्टल",
  },
  districtAll: {
    en: "All Maharashtra",
    mr: "संपूर्ण महाराष्ट्र",
  },
  districtPune: {
    en: "Pune (Automotive & IT)",
    mr: "पुणे (ऑटोमोटिव्ह आणि IT)",
  },
  districtSambhajinagar: {
    en: "Chhatrapati Sambhajinagar (Auto & Machining)",
    mr: "छत्रपती संभाजीनगर (ऑटो आणि मशीनिंग)",
  },
  districtNashik: {
    en: "Nashik (Precision Engg)",
    mr: "नाशिक (प्रिसिजन अभियांत्रिकी)",
  },
  districtNagpur: {
    en: "Nagpur (Logistics & Power)",
    mr: "नागपूर (लॉजिस्टिक्स आणि ऊर्जा)",
  },
  liveIngestion: {
    en: "Live Ingestion Active • NCS + 4 Job Portals",
    mr: "थेट डेटा ग्रहण सक्रिय • NCS + ४ जॉब पोर्टल",
  },
  aboutTeam: {
    en: "About Team",
    mr: "टीम माहिती",
  },

  // ── TAB NAMES ─────────────────────────────────────────────────────
  tabIntelligence: {
    en: "State Intelligence Hub",
    mr: "राज्य कौशल्य बुद्धिमत्ता",
  },
  tabCurriculum: {
    en: "NSQF Curriculum Engine",
    mr: "NSQF अभ्यासक्रम इंजिन",
  },
  tabCandidate: {
    en: "Candidate Pathway",
    mr: "उमेदवार मार्गदर्शन",
  },

  // ── SCREEN 1: STATE INTELLIGENCE HUB ──────────────────────────────
  kpiJobSignals: {
    en: "Live Labour Signals Scanned",
    mr: "थेट रोजगार मागणी संकेत",
  },
  kpiJobSignalsValue: {
    en: "68,410",
    mr: "६८,४१०",
  },
  kpiJobSignalsBadge: {
    en: "+12% this month from NCS & Industry",
    mr: "+१२% या महिन्यात NCS आणि उद्योग",
  },
  kpiAlignment: {
    en: "Statewide Curriculum Alignment",
    mr: "राज्यव्यापी अभ्यासक्रम संरेखन",
  },
  kpiAlignmentValue: {
    en: "58.2%",
    mr: "५८.२%",
  },
  kpiAlignmentBadge: {
    en: "41.8% skill lag across trades",
    mr: "४१.८% कौशल्य तफावत",
  },
  kpiObsolete: {
    en: "Trades Requiring Urgent Review",
    mr: "तात्काळ पुनरावलोकन आवश्यक",
  },
  kpiObsoleteValue: {
    en: "14",
    mr: "१४",
  },
  kpiObsoleteBadge: {
    en: "Legacy Trades Flagged",
    mr: "जुने व्यवसाय ध्वजांकित",
  },
  kpiEmerging: {
    en: "Top Emerging Skill Vector",
    mr: "सर्वाधिक उदयोन्मुख कौशल्य",
  },
  kpiEmergingValue: {
    en: "EV Powertrain & Battery Tech",
    mr: "EV पॉवरट्रेन आणि बॅटरी तंत्रज्ञान",
  },
  kpiEmergingBadge: {
    en: "+148% YoY in Pune/Chakan",
    mr: "+१४८% वार्षिक वाढ पुणे/चाकण",
  },
  chartTitle: {
    en: "Industrial Demand vs. ITI Trainee Output (Key Maharashtra Sectors)",
    mr: "औद्योगिक मागणी वि. ITI प्रशिक्षणार्थी उत्पादन (महाराष्ट्र प्रमुख क्षेत्रे)",
  },
  chartDemand: {
    en: "Industry Demand",
    mr: "उद्योग मागणी",
  },
  chartOutput: {
    en: "ITI Trainee Output",
    mr: "ITI प्रशिक्षणार्थी",
  },
  districtInsightsTitle: {
    en: "District-Level Skill Gap Hotspots",
    mr: "जिल्हास्तरीय कौशल्य तफावत",
  },
  dataRefresh: {
    en: "Data refreshed today • Source: NCS, Naukri, Indeed, TeamLease, Monster India",
    mr: "आज डेटा अद्ययावत • स्रोत: NCS, Naukri, Indeed, TeamLease, Monster India",
  },

  // ── SCREEN 2: CURRICULUM ENGINE ────────────────────────────────────
  uploadTitle: {
    en: "Upload Maharashtra ITI / Polytechnic Course Syllabus",
    mr: "महाराष्ट्र ITI / पॉलिटेक्निक अभ्यासक्रम अपलोड करा",
  },
  uploadSubtitle: {
    en: "Drag & drop PDF / DOCX or use a pre-loaded sample",
    mr: "PDF / DOCX ड्रॅग आणि ड्रॉप करा किंवा नमुना वापरा",
  },
  loadSample: {
    en: "⚡ Load Sample: Electrician Trade (CTS - NSQF Level 4)",
    mr: "⚡ नमुना लोड: इलेक्ट्रिशियन व्यवसाय (CTS - NSQF स्तर ४)",
  },
  nlpStep1: {
    en: "Tokenizing syllabus text via spaCy NER pipeline...",
    mr: "spaCy NER पाइपलाइनद्वारे अभ्यासक्रम टोकनायझेशन...",
  },
  nlpStep2: {
    en: "Querying vector embeddings across 14,280 active MH industrial postings...",
    mr: "१४,२८० सक्रिय MH औद्योगिक पदांवर व्हेक्टर एम्बेडिंग...",
  },
  nlpStep3: {
    en: "Computing cosine similarity against National Occupational Standards...",
    mr: "राष्ट्रीय व्यावसायिक मानकांविरुद्ध कोसाइन समानता गणना...",
  },
  tradeHeader: {
    en: "Electrician Trade (CTS - Code: 023) | NSQF Level 4 | DGT",
    mr: "इलेक्ट्रिशियन व्यवसाय (CTS - कोड: ०२३) | NSQF स्तर ४ | DGT",
  },
  alignmentScore: {
    en: "Curriculum Fit",
    mr: "अभ्यासक्रम सुसंगतता",
  },
  mismatchLabel: {
    en: "Industry Mismatch",
    mr: "उद्योग विसंगती",
  },
  retainedTitle: {
    en: "Currently Retained in Syllabus",
    mr: "अभ्यासक्रमात कायम",
  },
  missingTitle: {
    en: "Industry-Demanded Gaps (Missing)",
    mr: "उद्योग-मागणी तफावत (गहाळ)",
  },
  obsoleteTitle: {
    en: "Flagged for Deprecation",
    mr: "अप्रचलित म्हणून ध्वजांकित",
  },
  advisoryTitle: {
    en: "Department of Skills Advisory Patch",
    mr: "कौशल्य विभाग सल्लागार पॅच",
  },
  advisoryRef: {
    en: "Ref: MH-DTE-2026-E4",
    mr: "संदर्भ: MH-DTE-2026-E4",
  },
  advisoryText: {
    en: "Reallocate 45 practical hours from obsolete DC Dynamo Overhaul to a modular 4-week unit on 'EV Traction Motor Testing and BMS Diagnostics' in alignment with 3,100 open industrial requisitions across the Pune-Pimpri corridor.",
    mr: "अप्रचलित DC डायनॅमो ओव्हरहॉलमधील ४५ प्रात्यक्षिक तास 'EV ट्रॅक्शन मोटर चाचणी आणि BMS डायग्नोस्टिक्स' या ४-आठवड्यांच्या मॉड्यूलर युनिटसाठी पुनर्वाटप करा. पुणे-पिंपरी औद्योगिक पट्ट्यातील ३,१०० खुल्या औद्योगिक मागण्यांशी संरेखित.",
  },
  placementUplift: {
    en: "Projected ITI Placement Uplift",
    mr: "अपेक्षित ITI प्लेसमेंट वाढ",
  },
  exportPdf: {
    en: "📥 Export NSQF Amendment Draft (PDF)",
    mr: "📥 NSQF दुरुस्ती मसुदा निर्यात (PDF)",
  },
  transmitSSC: {
    en: "🔄 Transmit to Sector Skill Council",
    mr: "🔄 सेक्टर स्किल कौन्सिलला प्रसारित करा",
  },

  // ── SCREEN 3: CANDIDATE PATHWAY ────────────────────────────────────
  candidateTitle: {
    en: "Trainee Career Intelligence & Up-skilling Pathway",
    mr: "प्रशिक्षणार्थी करिअर बुद्धिमत्ता आणि कौशल्य वृद्धी मार्ग",
  },
  candidateName: {
    en: "Rohan Sawant",
    mr: "रोहन सावंत",
  },
  candidateInstitute: {
    en: "ITI Aundh, Pune",
    mr: "ITI औंध, पुणे",
  },
  candidateTrade: {
    en: "Trade: Electrician (CTS) | NSQF Level 4",
    mr: "व्यवसाय: इलेक्ट्रिशियन (CTS) | NSQF स्तर ४",
  },
  acquiredSkills: {
    en: "Skills Acquired (Current Syllabus)",
    mr: "अर्जित कौशल्ये (सध्याचा अभ्यासक्रम)",
  },
  bridgeModules: {
    en: "Recommended Bridge Modules",
    mr: "शिफारस केलेले ब्रिज मॉड्यूल",
  },
  jobAlignment: {
    en: "Direct Job Alignment",
    mr: "थेट नोकरी संरेखन",
  },
  matchScore: {
    en: "Match",
    mr: "जुळणी",
  },

  // ── TEAM MODAL ─────────────────────────────────────────────────────
  teamModalTitle: {
    en: "Team SkillSync — SIH 2026",
    mr: "टीम स्किलसिंक — SIH 2026",
  },
  problemStatement: {
    en: "Problem Statement",
    mr: "समस्या विधान",
  },
  institute: {
    en: "Institute",
    mr: "संस्था",
  },
};

export default translations;
