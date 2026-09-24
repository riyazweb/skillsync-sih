"use client";
import { Shield, BarChart3, FileText, GraduationCap, Globe, Users, LogOut, User, ChevronDown, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar({ activeTab, setActiveTab, district, setDistrict, onOpenTeamModal, userInfo, onLogout }) {
  const { lang, toggleLang } = useLanguage();

  const tabs = [
    { id: "intelligence", icon: BarChart3, en: "State Intelligence", mr: "राज्य बुद्धिमत्ता" },
    { id: "curriculum", icon: FileText, en: "Curriculum Engine", mr: "अभ्यासक्रम इंजिन" },
    { id: "candidate", icon: GraduationCap, en: "Candidate Pathway", mr: "उमेदवार मार्ग" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      {/* Tricolor accent */}
      <div className="h-[3px] flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-600" />
      </div>

      {/* Main header */}
      <div className="px-4 lg:px-6 py-2.5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-sm shadow-blue-600/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-none tracking-tight">SkillSync</h1>
              <p className="text-[10px] text-slate-400 font-medium leading-tight mt-0.5">
                {lang === "en" ? "Govt of Maharashtra • DVET Portal" : "महाराष्ट्र शासन • DVET पोर्टल"}
              </p>
            </div>
          </div>

          {/* Center nav */}
          <nav className="hidden md:flex items-center bg-slate-100 rounded-lg p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-md text-sm font-medium transition-all ${
                    active
                      ? "bg-white text-blue-700 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{lang === "mr" ? tab.mr : tab.en}</span>
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Live dot */}
            <div className="hidden xl:flex items-center gap-1.5 text-[11px] text-emerald-600 font-medium bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Live Data
            </div>

            {/* District */}
            <select
              value={district}
              onChange={e => setDistrict(e.target.value)}
              className="hidden lg:block text-xs bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 cursor-pointer"
            >
              <option value="all">{lang === "en" ? "All Maharashtra" : "संपूर्ण महाराष्ट्र"}</option>
              <option value="pune">{lang === "en" ? "Pune (Auto/IT)" : "पुणे"}</option>
              <option value="sambhajinagar">{lang === "en" ? "Sambhajinagar" : "संभाजीनगर"}</option>
              <option value="nashik">{lang === "en" ? "Nashik" : "नाशिक"}</option>
              <option value="nagpur">{lang === "en" ? "Nagpur" : "नागपूर"}</option>
            </select>

            {/* Lang */}
            <button onClick={toggleLang} className="flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-blue-600 bg-white border border-slate-300 rounded-sm px-2.5 py-1 transition-colors uppercase tracking-widest shadow-sm">
              <Globe className="w-3 h-3" />
              [ {lang === "en" ? "मराठी" : "English"} ]
            </button>

            {/* User */}
            {userInfo && (
              <div className="hidden md:flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-white" />
                </div>
                <span className="text-xs font-medium text-slate-700 max-w-[100px] truncate">{userInfo.name}</span>
              </div>
            )}

            {/* Team */}
            <button onClick={onOpenTeamModal} className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Team">
              <Users className="w-4 h-4" />
            </button>

            {/* Logout */}
            {onLogout && (
              <button onClick={onLogout} className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Logout">
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
