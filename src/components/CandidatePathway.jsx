import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { User, CheckCircle2, ChevronRight, Briefcase, MapPin, Banknote, Building2, Activity } from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function CandidatePathway() {
  const { lang } = useLanguage();
  const [modules, setModules] = useState({ phase1: false, phase2: false });
  const readiness = 58 + (modules.phase1 ? 18 : 0) + (modules.phase2 ? 12 : 0);

  // Helper for quick bilingual mapping
  const m = (en, mr) => lang === 'mr' ? mr : en;

  const toggleModule = (phase) => {
    setModules(prev => ({ ...prev, [phase]: !prev[phase] }));
  };

  const radarData = [
    { skill: m('EV Diagnostics', 'EV डायग्नोस्टिक्स'), candidate: modules.phase1 ? 88 : 30, industry: 90 },
    { skill: m('PLC / SCADA', 'PLC / SCADA'), candidate: modules.phase2 ? 82 : 20, industry: 85 },
    { skill: m('IoT Sensors', 'IoT सेन्सर्स'), candidate: modules.phase2 ? 75 : 15, industry: 70 },
    { skill: m('Safety/Earthing', 'सुरक्षा/अर्थिंग'), candidate: 95, industry: 90 },
    { skill: m('AC Motor Setup', 'AC मोटर सेटअप'), candidate: 85, industry: 80 },
    { skill: m('Solar Inverter', 'सौर इन्व्हर्टर'), candidate: modules.phase1 ? 75 : 10, industry: 75 },
  ];

  return (
    <div className="w-full mx-auto space-y-6 stagger-children">
      <div className="glass-panel rounded-2xl shadow-md overflow-hidden flex flex-col md:flex-row ai-glow-border">
        
        <div className="bg-[#0A192F] p-8 md:w-1/3 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5"><User size={120}/></div>
          <div className="flex items-center gap-4 mb-5 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-white font-black text-xl leading-tight tracking-wide">{m('Rohan Sawant', 'रोहन सावंत')}</h2>
              <div className="inline-block bg-white/10 text-blue-300 text-[10px] font-mono mt-2 px-2 py-0.5 rounded border border-blue-400/30">
                {m('Roll: MH-PUN-2024-0824', 'रोल: MH-PUN-2024-0824')}
              </div>
            </div>
          </div>
          <div className="space-y-2 text-xs text-slate-300 font-medium relative z-10">
            <div className="flex items-center gap-2"><Building2 className="w-4 h-4 text-emerald-400 shrink-0" /> {m('Govt ITI Aundh, Pune', 'शासकीय ITI औंध, पुणे')}</div>
            <div className="flex items-center gap-2"><Briefcase className="w-4 h-4 text-emerald-400 shrink-0" /> {m('Electrician (CTS - NSQF L4)', 'इलेक्ट्रिशियन (CTS - NSQF स्तर ४)')}</div>
          </div>
        </div>

        <div className="p-6 md:w-1/3 bg-white/50 border-r border-slate-200/60 flex flex-col items-center justify-center">
          <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
            <Activity size={12} className="text-blue-500"/> {m('AI Skill Alignment Mapping', 'AI कौशल्य संरेखन मॅपिंग')}
          </h3>
          <div className="w-full h-[180px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: '#64748b', fontSize: 9, fontWeight: 700 }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', fontSize: '11px' }} />
                <Radar name={m("Industry", "उद्योग")} dataKey="industry" stroke="#cbd5e1" fill="#cbd5e1" fillOpacity={0.2} />
                <Radar name={m("Candidate", "उमेदवार")} dataKey="candidate" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-8 md:w-1/3 flex flex-col justify-center bg-slate-50/80">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{m('Hiring Readiness', 'भरती तत्परता')}</span>
            <span className={`text-3xl font-black drop-shadow-sm transition-colors duration-500 ${readiness >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>
              {readiness}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 mb-4 overflow-hidden shadow-inner">
            <div className={`h-full rounded-full transition-all duration-1000 ease-out ${readiness >= 80 ? 'bg-gradient-to-r from-emerald-400 to-emerald-600' : 'bg-gradient-to-r from-amber-400 to-amber-600'}`} style={{ width: `${readiness}%` }}></div>
          </div>
          <p className="text-xs text-slate-600 font-medium bg-white p-3 rounded-lg border border-slate-200 shadow-sm leading-relaxed">
            {readiness === 58 ? m("Action Required: Complete recommended bridge modules below to achieve 88% industry alignment threshold.", "कृती आवश्यक: ८८% उद्योग संरेखन साध्य करण्यासाठी शिफारस केलेले ब्रिज मॉड्यूल पूर्ण करा.") : m("Outstanding. Candidate has achieved optimal industry readiness and is cleared for direct nomination.", "उत्कृष्ट. उमेदवाराने इष्टतम उद्योग तत्परता साध्य केली आहे आणि थेट नामांकनासाठी पात्र आहे.")}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel rounded-2xl shadow-md overflow-hidden">
            <div className="bg-[#0A192F] px-5 py-3 border-b border-slate-700/50">
              <h3 className="text-white font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400"/> {m('AI Recommended Bridge Courses', 'AI शिफारस केलेले ब्रिज कोर्सेस')}
              </h3>
            </div>
            <div className="p-5 space-y-4 bg-white/40">
              <label className={`block rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-sm ${modules.phase1 ? 'border-emerald-400 bg-emerald-50/50' : 'border-slate-200 bg-white hover:border-blue-300'} p-4`}>
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <input type="checkbox" className="w-4 h-4 accent-emerald-500 rounded cursor-pointer" checked={modules.phase1} onChange={() => toggleModule('phase1')}/>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#0A192F] text-white text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest rounded-sm">{m('Phase 1', 'टप्पा १')}</span>
                      <span className="text-emerald-600 font-black text-[10px] uppercase tracking-wider">{m('+18% Match Rate', '+१८% जुळणी दर')}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1.5">{m('EV Battery Pack Diagnostics & BMS Telematics', 'EV बॅटरी पॅक डायग्नोस्टिक्स आणि BMS टेलीमॅटिक्स')}</h4>
                    <p className="text-xs text-slate-500 font-medium">{m('4-Week intensive hands-on module at ASDC Automotive Skill Hub, Chakan.', 'ASDC ऑटोमोटिव्ह स्किल हब, चाकण येथे ४-आठवड्यांचे प्रगत प्रशिक्षण.')}</p>
                  </div>
                </div>
              </label>

              <label className={`block rounded-xl border-2 transition-all duration-300 cursor-pointer shadow-sm ${modules.phase2 ? 'border-emerald-400 bg-emerald-50/50' : 'border-slate-200 bg-white hover:border-blue-300'} p-4`}>
                <div className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <input type="checkbox" className="w-4 h-4 accent-emerald-500 rounded cursor-pointer" checked={modules.phase2} onChange={() => toggleModule('phase2')}/>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="bg-[#0A192F] text-white text-[9px] px-2 py-0.5 font-bold uppercase tracking-widest rounded-sm">{m('Phase 2', 'टप्पा २')}</span>
                      <span className="text-emerald-600 font-black text-[10px] uppercase tracking-wider">{m('+12% Match Rate', '+१२% जुळणी दर')}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1.5">{m('Industrial PLC Ladder Logic & Relay Interfacing', 'इंडस्ट्रियल PLC लॅडर लॉजिक आणि रिले इंटरफेसिंग')}</h4>
                    <p className="text-xs text-slate-500 font-medium">{m('3-Week module at Siemens Centre of Excellence, Pune.', 'सिमेन्स सेंटर ऑफ एक्सलन्स, पुणे येथे ३-आठवड्यांचे मॉड्यूल.')}</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="glass-panel rounded-2xl shadow-md h-full flex flex-col overflow-hidden">
            <div className="bg-[#0A192F] px-5 py-3 border-b border-slate-700/50 flex justify-between items-center">
              <h3 className="text-white font-bold text-xs tracking-widest uppercase flex items-center gap-2">
                <Briefcase size={16} className="text-blue-400"/> {m('Direct Industrial Apprenticeships', 'थेट औद्योगिक उमेदवारी')}
              </h3>
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping absolute"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 relative"></span> {m('LIVE', 'लाईव्ह')}
              </span>
            </div>
            
            <div className="p-5 space-y-4 bg-white/40 flex-1">
              <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600 group-hover:bg-blue-500 transition-colors"></div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-base font-black text-navy mb-1 leading-tight tracking-wide">{m('Tata Motors Passenger Vehicles Ltd', 'टाटा मोटर्स पॅसेंजर व्हेइकल्स लिमिटेड')}</h4>
                    <div className="text-sm font-bold text-blue-600 mb-3 uppercase tracking-wider">{m('EV Powertrain Assembly & Testing', 'EV पॉवरट्रेन असेंबली आणि टेस्टिंग')}</div>
                    <div className="flex flex-col gap-2 text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded w-max border border-slate-100"><MapPin size={14} className="text-slate-400" /> {m('Chakan Industrial Area, Pune', 'चाकण औद्योगिक क्षेत्र, पुणे')} • <span className="font-bold text-emerald-600 ml-1">{m('140 Openings', '१४० पदे')}</span></div>
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded w-max border border-slate-100"><Banknote size={14} className="text-slate-400" /> {m('₹18,500/month + Subsidized Canteen', '₹१८,५००/महिना + कॅन्टीन')}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end shrink-0 justify-center">
                    <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1 bg-slate-50 px-2 py-0.5 rounded">{m('Match Score', 'जुळणी गुण')}</div>
                    <div className={`text-3xl font-black drop-shadow-sm ${modules.phase1 && modules.phase2 ? 'text-emerald-500' : 'text-navy'}`}>{modules.phase1 && modules.phase2 ? '88%' : '58%'}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100/80">
                  <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    {m('Direct Institutional Nomination', 'थेट संस्थात्मक नामांकन')} <ChevronRight size={14} />
                  </button>
                </div>
              </div>

              <div className="bg-white border-2 border-slate-200 rounded-xl p-5 shadow-sm hover:border-blue-400 hover:shadow-md transition-all relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-400 group-hover:bg-blue-400 transition-colors"></div>
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
                  <div>
                    <h4 className="text-base font-black text-navy mb-1 leading-tight tracking-wide">{m('Bajaj Auto Chetak EV Division', 'बजाज ऑटो चेतक EV विभाग')}</h4>
                    <div className="text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">{m('Traction Motor & Harness Technician', 'ट्रॅक्शन मोटर आणि हार्नेस टेक्निशियन')}</div>
                    <div className="flex flex-col gap-2 text-xs text-slate-600 font-medium">
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded w-max border border-slate-100"><MapPin size={14} className="text-slate-400" /> {m('Akurdi Tech Park / Waluj', 'आकुर्डी टेक पार्क / वाळूज')} • <span className="font-bold text-emerald-600 ml-1">{m('85 Openings', '८५ पदे')}</span></div>
                      <div className="flex items-center gap-2 bg-slate-50 px-2 py-1 rounded w-max border border-slate-100"><Banknote size={14} className="text-slate-400" /> {m('₹17,800/month + Bonus', '₹१७,८००/महिना + बोनस')}</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-end shrink-0 justify-center">
                    <div className="text-[9px] text-slate-400 font-black uppercase tracking-widest mb-1 bg-slate-50 px-2 py-0.5 rounded">{m('Match Score', 'जुळणी गुण')}</div>
                    <div className="text-3xl font-black text-navy drop-shadow-sm">{m('54%', '५४%')}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-slate-100/80">
                  <button className="flex items-center gap-2 text-xs font-black text-blue-600 hover:text-blue-800 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                    {m('Direct Institutional Nomination', 'थेट संस्थात्मक नामांकन')} <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
