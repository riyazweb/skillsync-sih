"use client";
import { useState } from "react";
import { User, Lock, Building2, GraduationCap, Eye, EyeOff, LogIn, ChevronRight, Zap, BarChart3, FileText, Shield, TrendingUp, Globe } from "lucide-react";

const roles = [
  { id: "policymaker", label: "Policymaker / DVET Officer", labelMr: "धोरणकर्ता / DVET अधिकारी", icon: Building2, desc: "State-level curriculum & policy oversight", gradient: "from-blue-600 to-blue-800" },
  { id: "provider", label: "Training Provider / ITI", labelMr: "प्रशिक्षण प्रदाता / ITI", icon: GraduationCap, desc: "Institutional curriculum alignment", gradient: "from-violet-600 to-violet-800" },
  { id: "candidate", label: "ITI Trainee / Candidate", labelMr: "ITI प्रशिक्षणार्थी", icon: User, desc: "Personal skill gap & career pathway", gradient: "from-emerald-600 to-emerald-800" },
];

const demoUsers = [
  { role: "policymaker", username: "dvet_officer", name: "Dr. Priya Kulkarni", designation: "Joint Director, DVET Maharashtra" },
  { role: "provider", username: "iti_pune_admin", name: "Prof. R.S. Patil", designation: "Principal, Govt ITI Aundh, Pune" },
  { role: "candidate", username: "rohan_sawant", name: "Rohan Sawant", designation: "Electrician Trade, ITI Aundh" },
];

export default function LoginPage({ onLogin }) {
  const [selectedRole, setSelectedRole] = useState("policymaker");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [lang, setLang] = useState("en");

  const handleSubmit = (e) => { e.preventDefault(); if (username.trim()) onLogin({ role: selectedRole, username: username.trim(), name: username.trim(), designation: "" }); };
  const handleDemo = (u) => onLogin({ role: u.role, username: u.username, name: u.name, designation: u.designation });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* ═══ THIN TRICOLOR + GOV BAR ═══ */}
      <div className="h-1 flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white" />
        <div className="flex-1 bg-green-600" />
      </div>
      <div className="bg-slate-900 text-white/70 text-[11px] py-1.5 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-semibold" style={{ fontFamily: "serif" }}>भारत सरकार</span>
          <span className="text-white/30">|</span>
          <span>{lang === "en" ? "Government of Maharashtra • Dept. of Skills & Innovation" : "महाराष्ट्र शासन • कौशल्य आणि नवोन्मेष विभाग"}</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setLang(l => l === "en" ? "mr" : "en")} className="flex items-center gap-1.5 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-widest">
            <Globe className="w-3 h-3" /> [ {lang === "en" ? "मराठी" : "English"} ]
          </button>
        </div>
      </div>

      {/* ═══ MAIN CONTENT ═══ */}
      <div className="flex-grow flex">
        {/* ─── LEFT HERO ─── */}
        <div className="hidden lg:flex lg:w-[480px] xl:w-[540px] bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 flex-col justify-between p-10 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10" />
          <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-blue-600/10" />
          <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-violet-500/10" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 bg-blue-500/20 border border-blue-400/30 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">SkillSync</h1>
                <p className="text-blue-300/80 text-xs font-medium">MahaSkill Intelligence Platform</p>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white leading-tight mb-4">
              {lang === "en" ? "AI-Powered Curriculum Intelligence for Maharashtra" : "महाराष्ट्रासाठी AI-संचालित अभ्यासक्रम बुद्धिमत्ता"}
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-8">
              {lang === "en"
                ? "Aligning ITI & Polytechnic syllabi with real-time industry demand across Pune, Nashik, Sambhajinagar, and Nagpur industrial corridors using NLP-driven gap analysis."
                : "NLP-चालित गॅप विश्लेषण वापरून पुणे, नाशिक, संभाजीनगर आणि नागपूर औद्योगिक पट्ट्यांमधील वास्तविक उद्योग मागणीसह ITI आणि पॉलिटेक्निक अभ्यासक्रम संरेखित करणे."}
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "68,410", label: "Job Signals Scanned", icon: BarChart3 },
                { val: "58.2%", label: "Curriculum Alignment", icon: TrendingUp },
                { val: "14", label: "Obsolete Trades Flagged", icon: Shield },
                { val: "+148%", label: "EV Demand Growth YoY", icon: Zap },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <s.icon className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-white font-bold text-lg">{s.val}</span>
                  </div>
                  <span className="text-blue-300/60 text-[11px]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 border-t border-white/10 pt-5 mt-8">
            <p className="text-white/40 text-[11px]">
              Smart India Hackathon 2026 • PS: SIH26134 • Built by Team SkillSync, Vaagdevi Colleges
            </p>
          </div>
        </div>

        {/* ─── RIGHT LOGIN FORM ─── */}
        <div className="flex-1 flex items-center justify-center p-6 bg-slate-50/50">
          <div className="w-full max-w-[480px]">
            {/* Mobile logo */}
            <div className="lg:hidden flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SkillSync</h1>
                <p className="text-slate-500 text-xs">MahaSkill Intelligence Platform</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 mb-1">
              {lang === "en" ? "Welcome back" : "स्वागत आहे"}
            </h2>
            <p className="text-slate-500 text-sm mb-6">
              {lang === "en" ? "Sign in to access the SkillSync dashboard" : "स्किलसिंक डॅशबोर्डवर प्रवेश करा"}
            </p>

            {/* Role Selection */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                {lang === "en" ? "Select Your Role" : "तुमची भूमिका निवडा"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {roles.map((r) => {
                  const Icon = r.icon;
                  const active = selectedRole === r.id;
                  return (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRole(r.id)}
                      className={`relative p-3 rounded-xl text-center transition-all border-2 ${
                        active
                          ? "border-blue-600 bg-blue-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg mx-auto mb-2 flex items-center justify-center ${active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className={`text-[11px] font-semibold leading-tight block ${active ? "text-blue-700" : "text-slate-600"}`}>
                        {lang === "en" ? r.label.split("/")[0].trim() : r.labelMr.split("/")[0].trim()}
                      </span>
                      {active && <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center"><svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg></div>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Credentials */}
            <form onSubmit={handleSubmit} className="space-y-3 mb-5">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">{lang === "en" ? "Username / Employee ID" : "वापरकर्तानाव"}</label>
                <div className="flex items-center border-2 border-slate-200 rounded-lg bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <User className="w-4 h-4 text-slate-400 ml-3" />
                  <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder={lang === "en" ? "Enter your username" : "वापरकर्तानाव प्रविष्ट करा"} className="flex-1 px-3 py-2.5 text-sm outline-none bg-transparent" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1.5">{lang === "en" ? "Password" : "पासवर्ड"}</label>
                <div className="flex items-center border-2 border-slate-200 rounded-lg bg-white focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                  <Lock className="w-4 h-4 text-slate-400 ml-3" />
                  <input type={showPw ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="flex-1 px-3 py-2.5 text-sm outline-none bg-transparent" />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="px-3 text-slate-400 hover:text-slate-600">
                    {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-600/25">
                <LogIn className="w-4 h-4" /> {lang === "en" ? "Sign In" : "साइन इन करा"}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
              <div className="relative flex justify-center"><span className="bg-slate-50 px-3 text-xs text-slate-400 font-medium">Quick Demo Access</span></div>
            </div>

            {/* Demo Users */}
            <div className="space-y-2">
              {demoUsers.map((u, i) => {
                const roleInfo = roles.find(r => r.id === u.role);
                const Icon = roleInfo?.icon || User;
                return (
                  <button key={i} onClick={() => handleDemo(u)} className="w-full flex items-center gap-3 p-3 rounded-lg border border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50 transition-all group text-left">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${roleInfo?.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-slate-800">{u.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{u.designation}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0" />
                  </button>
                );
              })}
            </div>

            <p className="text-center text-[11px] text-slate-400 mt-6">
              SIH 2026 • Problem Statement SIH26134 • Government of Maharashtra
            </p>
          </div>
        </div>
      </div>

      {/* Bottom tricolor */}
      <div className="h-1 flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white border-t border-slate-200" />
        <div className="flex-1 bg-green-600" />
      </div>
    </div>
  );
}
