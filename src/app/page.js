"use client";
import React, { useState } from "react";
import { LanguageProvider, useLanguage } from "@/context/LanguageContext";
import LoginPage from "@/components/LoginPage";
import Navbar from "@/components/Navbar";
import StateIntelligenceHub from "@/components/StateIntelligenceHub";
import CurriculumEngine from "@/components/CurriculumEngine";
import CandidatePathway from "@/components/CandidatePathway";
import TeamModal from "@/components/TeamModal";
import { Activity } from "lucide-react";

function DashboardContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [activeTab, setActiveTab] = useState("intelligence");
  const [district, setDistrict] = useState("all");
  const [teamModalOpen, setTeamModalOpen] = useState(false);
  
  const { lang, t } = useLanguage();

  const handleLogin = (info) => {
    setUserInfo(info);
    setIsLoggedIn(true);
    if (info.role === "candidate") setActiveTab("candidate");
    else if (info.role === "provider") setActiveTab("curriculum");
    else setActiveTab("intelligence");
  };

  const handleLogout = () => { setIsLoggedIn(false); setUserInfo(null); };

  if (!isLoggedIn) return <LoginPage onLogin={handleLogin} />;

  // Helper for quick bilingual mapping
  const m = (en, mr) => lang === 'mr' ? mr : en;

  const steps = [
    { id: "intelligence", label: m("1. State Macro Hub", "१. राज्य मॅक्रो हब") },
    { id: "curriculum", label: m("2. NSQF Curriculum Engine", "२. NSQF अभ्यासक्रम इंजिन") },
    { id: "candidate", label: m("3. Candidate Apprenticeship Pathway", "३. उमेदवार उमेदवारी मार्ग") }
  ];

  return (
    <div className="min-h-screen flex flex-col pb-16">
      <Navbar
        activeTab={activeTab} setActiveTab={setActiveTab}
        district={district} setDistrict={setDistrict}
        onOpenTeamModal={() => setTeamModalOpen(true)}
        userInfo={userInfo} onLogout={handleLogout}
      />

      {/* 🚀 GOVTECH 2.0: LIVE DATA TICKER */}
      <div className="bg-[#0A192F] border-b border-blue-900/50 text-white overflow-hidden relative h-8 flex items-center">
        <div className="absolute left-0 bg-gradient-to-r from-[#0A192F] to-transparent w-24 h-full z-10 flex items-center pl-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-blue-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {m('LIVE', 'लाईव्ह')}
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <div className="animate-marquee font-mono text-[10px] tracking-widest uppercase">
            <span className="text-emerald-400">● {m('[PUNE CHAKAN]', '[पुणे चाकण]')}</span> {m('+140 EV Powertrain Roles Detected in last 24h', 'गेल्या २४ तासात +१४० EV पॉवरट्रेन पदे आढळली')} &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-amber-400">● {m('[NASHIK MIDC]', '[नाशिक MIDC]')}</span> {m('Solar Microgrid technician gap widened by 12%', 'सोलर मायक्रोग्रिड टेक्निशियनची तफावत १२% ने वाढली')} &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-blue-400">● {m('[DVET AI HUB]', '[DVET AI हब]')}</span> {m('14 obsolete trades flagged for emergency revision', '१४ जुने अभ्यासक्रम आपत्कालीन पुनरावृत्तीसाठी ध्वजांकित')} &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-violet-400">● {m('[SYSTEM]', '[प्रणाली]')}</span> {m('3,420 job signals successfully mapped to NSQF Level 4', '३,४२० नोकरी संकेत NSQF स्तर ४ शी यशस्वीरित्या जोडले')} &nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 lg:px-6 py-3 text-[11px] text-slate-500 font-medium tracking-wide flex items-center gap-2">
        <span className="text-gov-blue cursor-pointer">{m('Home', 'मुख्य पृष्ठ')}</span>
        <span>/</span>
        <span className="text-gov-blue cursor-pointer">{m('Dashboard', 'डॅशबोर्ड')}</span>
        <span>/</span>
        <span className="text-slate-800 uppercase font-bold bg-white/50 px-2 py-0.5 rounded shadow-sm">
          {activeTab === "intelligence" && m("State Intelligence Hub", "राज्य कौशल्य बुद्धिमत्ता")}
          {activeTab === "curriculum" && m("NSQF Curriculum Engine", "NSQF अभ्यासक्रम इंजिन")}
          {activeTab === "candidate" && m("Candidate Pathway", "उमेदवार मार्गदर्शन")}
        </span>
      </div>

      <main className="flex-grow max-w-[1440px] mx-auto w-full px-4 lg:px-6 pb-8">
        {activeTab === "intelligence" && <StateIntelligenceHub district={district} />}
        {activeTab === "curriculum" && <CurriculumEngine district={district} />}
        {activeTab === "candidate" && <CandidatePathway />}
      </main>

      <footer className="bg-navy text-white/80 py-6 mt-auto border-t-[3px] border-orange-500 relative z-10">
        <div className="absolute top-0 right-0 w-1/3 h-[3px] bg-green-600 -mt-[3px]"></div>
        <div className="absolute top-0 left-1/3 w-1/3 h-[3px] bg-white -mt-[3px]"></div>
        
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <span className="font-bold text-white tracking-widest text-[10px] border border-white/20 px-2 py-1 uppercase shadow-[0_0_10px_rgba(255,255,255,0.1)]">SIH26134</span>
            <span className="font-medium text-white/90">{m('SkillSync — Govt of Maharashtra | DVET', 'स्किलसिंक — महाराष्ट्र शासन | DVET')}</span>
          </div>
          <button onClick={() => setTeamModalOpen(true)} className="text-white/60 hover:text-white transition-colors font-medium">
            {m('Developed by Team SkillSync, Vaagdevi Colleges, Warangal', 'टीम स्किलसिंक, वाग्देवी कॉलेजेस, वारंगल द्वारे विकसित')}
          </button>
        </div>
      </footer>

      {/* Evaluator Quick-Tour Footer */}
      <div className="fixed bottom-0 left-0 w-full glass-panel border-t border-white/40 z-50 p-2 flex justify-center">
        <div className="flex items-center gap-1 sm:gap-2 bg-white/50 p-1 rounded-lg border border-slate-200/50 shadow-sm backdrop-blur-md">
          <span className="text-[10px] font-bold uppercase text-blue-800 mr-2 ml-2 tracking-widest hidden sm:inline-block">{m('Evaluator Tour', 'मूल्यांकनकर्ता दौरा')}</span>
          {steps.map((step, idx) => (
            <React.Fragment key={step.id}>
              <button
                onClick={() => setActiveTab(step.id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-all rounded-md ${activeTab === step.id ? 'bg-gov-blue text-white shadow-[0_2px_10px_rgba(29,78,216,0.3)] scale-105' : 'text-slate-600 hover:bg-white hover:shadow-sm'}`}
              >
                {step.label}
              </button>
              {idx < steps.length - 1 && <span className="text-slate-300 font-black">──►</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      <TeamModal isOpen={teamModalOpen} onClose={() => setTeamModalOpen(false)} />
    </div>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <DashboardContent />
    </LanguageProvider>
  );
}
