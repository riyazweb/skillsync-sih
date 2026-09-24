"use client";
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { electricianTradeData } from '@/data/mockData';
import { 
  Upload, Zap, FileText, CheckCircle2, XCircle, AlertTriangle, 
  Download, RefreshCw, Loader2, Cpu, Database, Brain, ArrowRight, TrendingUp, RefreshCcw, FileCode2
} from 'lucide-react';

export default function CurriculumEngine({ district }) {
  const { lang, t } = useLanguage();
  const [analysisState, setAnalysisState] = useState('idle');
  const [loadingStep, setLoadingStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [scanText, setScanText] = useState("");

  useEffect(() => {
    if (analysisState === 'loading') {
      const codeSnippets = [
        "Initializing spaCy NER core_web_lg...",
        "Scanning PDF blocks for vocational competencies...",
        "Extracted [AC Motor Setup] -> NSQF Match: 95%",
        "Extracted [DC Dynamo Overhaul] -> FAILED. Status: OBSOLETE",
        "Cross-referencing 14,280 Pune industrial job cards...",
        "Calculating semantic distance (Cosine Similarity)...",
        "Generating Department of Skills Advisory Patch..."
      ];
      
      let step = 0;
      const scanInterval = setInterval(() => {
        setScanText(codeSnippets[step % codeSnippets.length]);
        step++;
      }, 400);

      const timers = [];
      timers.push(setTimeout(() => setLoadingStep(1), 600));
      timers.push(setTimeout(() => setLoadingStep(2), 1800));
      timers.push(setTimeout(() => setLoadingStep(3), 2800));
      timers.push(setTimeout(() => {
        clearInterval(scanInterval);
        setAnalysisState('complete');
        setShowResults(true);
      }, 3400));
      
      return () => {
        timers.forEach(clearTimeout);
        clearInterval(scanInterval);
      };
    }
  }, [analysisState]);

  const handleExport = () => alert("Downloading PDF Circular...");
  const handleTransmit = () => alert("Transmitting to Automotive & Electronics Sector Skill Councils...");
  const handleReset = () => {
    setAnalysisState('idle');
    setLoadingStep(0);
    setShowResults(false);
  };

  return (
    <div className="w-full mx-auto space-y-6 stagger-children">
      {/* SECTION 1: Upload Zone */}
      {analysisState === 'idle' && (
        <div className="glass-panel rounded-2xl shadow-md overflow-hidden ai-glow-border">
          <div className="bg-[#0A192F] px-6 py-4 border-b border-blue-900/50">
            <h3 className="text-white font-bold text-xs tracking-widest uppercase flex items-center gap-2">
              <Upload size={16} className="text-blue-400" /> {lang === 'mr' ? "NSQF संरेखन ऑडिट स्कॅनर" : "NSQF Alignment Audit Scanner"}
            </h3>
          </div>
          <div className="p-10">
            <div className="border-2 border-dashed border-slate-300 rounded-xl bg-white/50 p-12 flex flex-col items-center justify-center min-h-[380px] hover:border-blue-400 hover:bg-blue-50/30 transition-all cursor-pointer group">
              <div className="mb-6 p-4 rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-500 shadow-inner">
                <FileCode2 size={48} strokeWidth={1.5} />
              </div>
              <p className="text-slate-700 mb-8 max-w-2xl text-center text-sm font-medium leading-relaxed">
                {lang === 'mr' ? 
                  <><span className="font-bold text-blue-600">AI-चलित सिमेंटिक अंतर विश्लेषण</span> कार्यान्वित करण्यासाठी अधिकृत CTS / CITS अभ्यासक्रम दस्तऐवज (PDF/DOCX) येथे ड्रॉप करा.</> 
                  : 
                  <>Drop official CTS / CITS syllabus document here (PDF/DOCX) to execute <span className="font-bold text-blue-600">AI-driven semantic distance analysis</span> against live Maharashtra industrial job signals.</>
                }
              </p>
              
              <div className="w-full max-w-md space-y-3 relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-px bg-slate-300 flex-1"></div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Or Use 1-Click Demo Presets</span>
                  <div className="h-px bg-slate-300 flex-1"></div>
                </div>
                
                <button onClick={() => setAnalysisState('loading')} className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-3 px-4 transition-all rounded-lg shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
                  <Zap size={16} className="text-yellow-400" fill="currentColor" />
                  <span className="uppercase tracking-wider text-xs">Run Audit: Electrician Trade (NSQF Level 4)</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SECTION 2: Loading Animation */}
      {analysisState === 'loading' && (
        <div className="glass-panel rounded-2xl shadow-2xl overflow-hidden min-h-[440px] ai-glow-border relative bg-[#050B14]">
          {/* Cyber grid background inside loader */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>
          
          <div className="bg-[#0A192F] px-6 py-4 border-b border-blue-900/50 flex items-center justify-between relative z-10">
            <h3 className="text-blue-400 font-black text-xs tracking-widest uppercase flex items-center gap-2">
              <Loader2 className="animate-spin" size={16} /> SYSTEM PROCESSING
            </h3>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 border border-emerald-400/30 rounded">PID: 9482_AI_WORKER</span>
          </div>
          
          <div className="p-10 relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
            {/* Left side text steps */}
            <div className="flex-1 space-y-6">
              <div className="mb-8 border-b border-slate-700/50 pb-4">
                <h3 className="text-2xl font-black text-white uppercase tracking-tight drop-shadow-md">Executing NLP Alignment Audit</h3>
              </div>
              
              <div className={`flex items-center justify-between transition-all duration-500 ${loadingStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-blue-900/50 border border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                    <Cpu size={20} />
                  </div>
                  <span className="text-slate-300 text-sm font-semibold tracking-wide">Tokenizing syllabus via spaCy entity extraction...</span>
                </div>
                {loadingStep > 1 ? <CheckCircle2 className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" size={24} /> : <Loader2 className="animate-spin text-slate-500" size={18} />}
              </div>
              
              <div className={`flex items-center justify-between transition-all duration-500 ${loadingStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-violet-900/50 border border-violet-500/30 text-violet-400 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                    <Database size={20} />
                  </div>
                  <span className="text-slate-300 text-sm font-semibold tracking-wide">Mapping outcomes to NCVET / NOS framework...</span>
                </div>
                {loadingStep > 2 ? <CheckCircle2 className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" size={24} /> : <Loader2 className="animate-spin text-slate-500" size={18} />}
              </div>

              <div className={`flex items-center justify-between transition-all duration-500 ${loadingStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-2.5 rounded-lg bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                    <Brain size={20} />
                  </div>
                  <span className="text-slate-300 text-sm font-semibold tracking-wide">Calculating cosine distance vs 14,280 active job postings...</span>
                </div>
                {analysisState === 'complete' ? <CheckCircle2 className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]" size={24} /> : <Loader2 className="animate-spin text-slate-500" size={18} />}
              </div>
            </div>

            {/* Right side AI terminal */}
            <div className="md:w-1/3 w-full bg-black/80 rounded-xl border border-slate-700 h-[240px] p-4 font-mono text-[10px] text-green-400 overflow-hidden relative shadow-inner">
              <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-20"></div>
              <div className="text-slate-500 mb-2 border-b border-slate-800 pb-2 flex justify-between">
                <span>TERMINAL_OUTPUT</span>
                <span className="animate-pulse bg-green-500 w-1.5 h-1.5 rounded-full mt-1"></span>
              </div>
              <div className="flex flex-col justify-end h-[calc(100%-30px)] space-y-1">
                <div className="text-green-700">&gt; STARTING SCAN PIPELINE...</div>
                <div className="text-green-600">&gt; LOADING WEIGHTS (3.2GB)... DONE</div>
                <div className="text-green-400 font-bold bg-green-900/30 p-1 rounded">&gt; {scanText}</div>
                <div className="animate-pulse">&gt; _</div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 h-1.5 bg-blue-600 w-0 animate-progress shadow-[0_0_10px_rgba(37,99,235,1)]"></div>
        </div>
      )}

      {/* SECTION 3: Results */}
      {showResults && (
        <div className="animate-fade-in-up space-y-6">
          <div className="glass-panel bg-white/90 rounded-2xl shadow-lg border border-slate-200 overflow-hidden ai-glow-border">
            
            {/* 3A: AI Advisory Patch Card (Moved to top as hero result) */}
            <div className="bg-[#0A192F] relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-900/20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 mix-blend-overlay"></div>
              <div className="absolute top-10 right-10 opacity-5 pointer-events-none"><Brain size={160} /></div>
              
              <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 border-b border-blue-800/50">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500/20 p-1.5 rounded-md border border-blue-400/30"><Brain className="text-blue-400" size={20} /></div>
                  <h3 className="text-white font-black text-sm tracking-widest uppercase">Department of Skills Advisory Patch</h3>
                </div>
                <span className="bg-white/10 border border-white/20 text-white text-[10px] font-mono px-2.5 py-1 rounded shadow-sm flex items-center gap-2">
                  Ref: MH-DTE-2026-E4 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                </span>
              </div>
              
              <div className="p-8 relative z-10">
                <div className="bg-blue-950/50 border-l-4 border-yellow-500 p-5 rounded-r-lg mb-6 shadow-inner backdrop-blur-sm">
                  <p className="text-blue-100 text-[13px] font-medium leading-relaxed uppercase tracking-wide">
                    "Reallocate 45 practical hours from obsolete <span className="text-red-400 font-bold">DC Dynamo Overhaul</span> to a modular 4-week unit on <span className="text-emerald-400 font-bold">'EV Traction Motor Testing and BMS Diagnostics'</span> in alignment with 3,100 open industrial requisitions across the Pune-Pimpri corridor."
                  </p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <div className="flex flex-col bg-emerald-900/40 border border-emerald-500/30 px-5 py-3 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                    <span className="text-[9px] uppercase text-emerald-300 font-bold tracking-widest mb-1">Projected Placement Uplift</span>
                    <span className="text-3xl font-black text-emerald-400 drop-shadow-sm">+28.4%</span>
                  </div>
                  <div className="flex flex-col bg-white/5 border border-white/10 px-5 py-3 rounded-lg">
                    <span className="text-[9px] uppercase text-blue-300 font-bold tracking-widest mb-1">Cost Efficiency</span>
                    <span className="text-xl font-bold text-white tracking-wide">₹18,500 <span className="text-xs text-slate-400 font-medium">SAVED PER APPRENTICE</span></span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button onClick={handleExport} className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border border-blue-400/50 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/25">
                    <Download size={16} /> Download Official Circular (PDF)
                  </button>
                  <button onClick={handleTransmit} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all backdrop-blur-md">
                    <RefreshCw size={16} /> Transmit to SSC
                  </button>
                </div>
              </div>
            </div>

            {/* Split Diff View */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Retained */}
              <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200">
                <div className="bg-emerald-50/50 px-6 py-3 font-bold text-[10px] tracking-widest uppercase flex items-center justify-between border-b border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-800"><CheckCircle2 size={16} /> {lang === 'mr' ? "कायम / अनुपालन घटक" : "Retained / Compliant Components"}</div>
                  <span className="bg-emerald-600 text-white px-2 py-0.5 rounded shadow-sm">{lang === 'mr' ? "५८% सुसंगत" : "58% Fit"}</span>
                </div>
                <div className="p-6 space-y-3 flex-1 bg-white/50">
                  {electricianTradeData?.retainedCompetencies?.map((item, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3.5 flex items-start justify-between shadow-sm hover:shadow-md transition-shadow">
                      <div>
                        {item.code && <span className="inline-block bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded font-mono text-[9px] uppercase mb-1.5 font-bold tracking-widest">{item.code}</span>}
                        <h4 className="font-bold text-slate-800 text-xs leading-snug">{item.name}</h4>
                      </div>
                      <span className="gov-badge-green px-2 py-1 rounded-md text-[10px] font-black tracking-widest shadow-sm ml-3">
                        {typeof item.relevance === 'number' ? `MATCH: ${item.relevance}%` : item.relevance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Missing Gaps */}
              <div className="flex flex-col">
                <div className="bg-red-50/50 px-6 py-3 font-bold text-[10px] tracking-widest uppercase flex items-center justify-between border-b border-red-100">
                  <div className="flex items-center gap-2 text-red-800"><XCircle size={16} /> {lang === 'mr' ? "तफावत / बाजारातील अंतर" : "Deficit / Market Gaps"}</div>
                  <span className="bg-red-600 text-white px-2 py-0.5 rounded shadow-sm">{lang === 'mr' ? "४२% गहाळ" : "42% Miss"}</span>
                </div>
                <div className="p-6 space-y-3 flex-1 bg-white/50">
                  {electricianTradeData?.missingCompetencies?.map((item, idx) => (
                    <div key={idx} className="bg-white border border-slate-200 rounded-lg p-3.5 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-slate-800 text-xs pr-2 leading-snug">{item.name}</h4>
                        <span className={`px-2 py-1 rounded-md text-[9px] font-black tracking-widest shadow-sm uppercase ${item.urgency === 'Critical' ? 'gov-badge-red' : 'gov-badge-amber'}`}>
                          {item.urgency}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-widest">
                        <div className="flex items-center text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200">
                          <TrendingUp size={12} className="text-blue-600 mr-1.5" />
                          {item.marketDemand || "4,120"} OPENINGS
                        </div>
                        <span className="text-violet-700 bg-violet-50 px-2 py-1 rounded border border-violet-200">
                          GROWTH: {item.growthYoY || "+148%"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border-t border-slate-200 p-4 flex justify-center">
              <button onClick={handleReset} className="flex items-center gap-2 text-slate-500 hover:text-blue-600 text-[10px] font-black uppercase tracking-widest transition-colors py-1 px-3 rounded-md hover:bg-blue-50">
                <RefreshCcw size={14} /> Re-analyze Another Syllabus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
