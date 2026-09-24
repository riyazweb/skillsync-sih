"use client";
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { sectorData, districtInsights } from '@/data/mockData';
import { Activity, TrendingUp, AlertTriangle, Zap, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// Simple CountUp Hook
function useCountUp(endValue, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let startTime = null;
    const numericValue = parseInt(endValue.toString().replace(/,/g, ''), 10) || 0;
    
    if (numericValue === 0) {
      setCount(endValue);
      return;
    }

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * numericValue));
      if (percentage < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [endValue, duration]);

  return endValue.toString().includes('%') ? `${count}%` : endValue.toString().includes(',') ? count.toLocaleString() : count.toString();
}

export default function StateIntelligenceHub({ district }) {
  const { lang, t } = useLanguage();

  const chartData = sectorData.map(d => ({
    ...d,
    name: lang === 'mr' ? d.sectorMr : d.sector,
    demand: d.demand,
    output: d.output,
    status: lang === 'mr' ? d.statusMr : d.status,
  }));

  const val1 = useCountUp("68,410");
  const val2 = useCountUp("58.2%");
  const val3 = useCountUp("14");
  const val4 = useCountUp("+148%");

  return (
    <div className="stagger-children">
      {/* 1. Top KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden ai-glow-border group">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Activity size={64}/></div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('kpiJobSignals')}</h3>
            <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center"><Activity className="h-4 w-4 text-gov-blue" /></div>
          </div>
          <div className="flex flex-col gap-2 relative z-10">
            <span className="text-4xl font-black text-navy">{val1}</span>
            <span className="inline-flex items-center border border-emerald-200 px-2.5 py-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded shadow-sm self-start uppercase">
              <ArrowUpRight className="h-3 w-3 mr-1" /> {t('kpiJobSignalsBadge')}
            </span>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><TrendingUp size={64}/></div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('kpiAlignment')}</h3>
            <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center"><TrendingUp className="h-4 w-4 text-amber-600" /></div>
          </div>
          <div className="flex flex-col gap-2 relative z-10">
            <span className="text-4xl font-black text-amber-600">{val2}</span>
            <span className="inline-flex items-center border border-red-200 px-2.5 py-1 text-[10px] font-bold text-red-700 bg-red-50 rounded shadow-sm self-start uppercase">
              <AlertTriangle className="h-3 w-3 mr-1" /> {t('kpiAlignmentBadge')}
            </span>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-600"></div>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><AlertTriangle size={64}/></div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('kpiObsolete')}</h3>
            <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center"><AlertTriangle className="h-4 w-4 text-red-600" /></div>
          </div>
          <div className="flex flex-col gap-2 relative z-10">
            <span className="text-4xl font-black text-red-600">{val3}</span>
            <span className="inline-flex items-center border border-red-200 px-2.5 py-1 text-[10px] font-bold text-red-700 bg-red-50 rounded shadow-sm self-start uppercase">
              <ArrowDownRight className="h-3 w-3 mr-1" /> {t('kpiObsoleteBadge')}
            </span>
          </div>
        </div>

        <div className="glass-panel rounded-2xl p-6 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-violet-600"></div>
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Zap size={64}/></div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{t('kpiEmerging')}</h3>
            <div className="w-8 h-8 rounded-full bg-violet-50 flex items-center justify-center"><Zap className="h-4 w-4 text-violet-600" /></div>
          </div>
          <div className="flex flex-col gap-2 relative z-10">
            <span className="text-4xl font-black text-violet-600">{val4}</span>
            <span className="inline-flex items-center border border-violet-200 px-2.5 py-1 text-[10px] font-bold text-violet-700 bg-violet-50 rounded shadow-sm self-start uppercase">
              {t('kpiEmergingBadge')}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Main Demand vs Output Chart */}
      <div className="mb-8 glass-panel rounded-2xl shadow-md overflow-hidden">
        <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
            <Activity className="text-blue-400" size={18}/> {lang === 'mr' ? "औद्योगिक मागणी वि. ITI प्रशिक्षणार्थी उत्पादन" : "INDUSTRIAL DEMAND VS. ITI TRAINEE OUTPUT"}
          </h3>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3b82f6]"></span><span className="text-[10px] text-slate-300 font-bold uppercase">{lang === 'mr' ? "मागणी" : "Demand"}</span>
            <span className="w-3 h-3 rounded-full bg-[#94a3b8] ml-2"></span><span className="text-[10px] text-slate-300 font-bold uppercase">{lang === 'mr' ? "उत्पादन" : "Output"}</span>
          </div>
        </div>
        <div className="p-6 bg-white/50 backdrop-blur-sm">
          <ResponsiveContainer width="100%" height={360}>
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 11, fontWeight: 600 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748B', fontSize: 11, fontWeight: 600 }} />
              <Tooltip cursor={{ fill: 'rgba(241, 245, 249, 0.5)' }} contentStyle={{ borderRadius: '12px', border: '1px solid #cbd5e1', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
              <Bar dataKey="demand" fill="url(#colorDemand)" radius={[6, 6, 0, 0]} label={{ position: 'top', fill: '#0A192F', fontSize: 10, fontWeight: 'bold' }} />
              <Bar dataKey="output" radius={[6, 6, 0, 0]} label={{ position: 'top', fill: '#0A192F', fontSize: 10, fontWeight: 'bold' }}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.sector === 'Conventional Machining & Wireman' ? 'url(#colorWarning)' : 'url(#colorOutput)'} />
                ))}
              </Bar>
              <defs>
                <linearGradient id="colorDemand" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9}/><stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.9}/></linearGradient>
                <linearGradient id="colorOutput" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#cbd5e1" stopOpacity={0.9}/><stop offset="95%" stopColor="#94a3b8" stopOpacity={0.9}/></linearGradient>
                <linearGradient id="colorWarning" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#fbbf24" stopOpacity={0.9}/><stop offset="95%" stopColor="#d97706" stopOpacity={0.9}/></linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
          
          <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200/60 pt-5">
            {chartData.map((entry, idx) => {
              const gap = entry.demand - entry.output;
              const gapPercent = entry.demand > 0 ? Math.round((gap / entry.demand) * 100) : 0;
              const isOversupplied = entry.sector === 'Conventional Machining & Wireman';
              let badgeClasses = isOversupplied ? 'gov-badge-amber' : (gapPercent > 50 ? 'gov-badge-red' : 'gov-badge-violet');
                
              return (
                <div key={idx} className="flex items-center gap-2 text-sm border border-slate-200/60 px-3 py-2 bg-white rounded-lg shadow-sm">
                  <span className="font-bold text-navy text-[11px] uppercase tracking-wide">{entry.name}</span>
                  <span className={`inline-flex items-center px-2.5 py-0.5 text-[10px] font-black tracking-wider uppercase rounded-md shadow-sm ${badgeClasses}`}>
                    {isOversupplied ? '[Oversupplied / Reallocation Required]' : entry.status || `${gapPercent}% ${t('statusGap') || 'Gap'}`}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. District Insights Table */}
      <div className="mb-8 glass-panel rounded-2xl shadow-md overflow-hidden">
        <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between border-b border-slate-700/50">
          <h3 className="text-white font-bold text-sm uppercase tracking-wider">{t('districtInsightsTitle')}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200">
                <th className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{lang === 'mr' ? "जिल्हा" : "District"}</th>
                <th className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{lang === 'mr' ? "औद्योगिक कॉरिडॉर" : "Industrial Corridor"}</th>
                <th className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{lang === 'mr' ? "गंभीर कौशल्य गरज" : "Critical Skill Need"}</th>
                <th className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{lang === 'mr' ? "तफावत %" : "Gap %"}</th>
                <th className="p-4 text-[10px] font-black text-slate-500 uppercase tracking-widest">{lang === 'mr' ? "खुल्या जागा" : "Open Positions"}</th>
              </tr>
            </thead>
            <tbody className="bg-white/40">
              {districtInsights.map((item, idx) => {
                const districtName = lang === 'mr' ? item.districtMr : item.district;
                const corridor = lang === 'mr' ? item.corridorMr : item.corridor;
                const criticalNeed = lang === 'mr' ? item.criticalNeedMr : item.criticalNeed;
                const gapValue = item.gapPercent;
                let progressBarColor = 'bg-violet-500';
                if (gapValue >= 60) progressBarColor = 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]';
                else if (gapValue >= 45) progressBarColor = 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]';
                
                return (
                  <tr key={idx} className="border-b border-slate-100 hover:bg-white/80 transition-colors">
                    <td className="p-4 text-xs font-bold text-navy">{districtName}</td>
                    <td className="p-4 text-xs font-medium text-slate-600">{corridor}</td>
                    <td className="p-4 text-xs font-bold text-slate-700 bg-blue-50/30">{criticalNeed}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="font-black text-navy w-8 text-xs">{gapValue}%</span>
                        <div className="w-24 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className={`h-full rounded-full ${progressBarColor}`} style={{ width: `${gapValue}%` }}></div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-xs font-black text-emerald-600">{item.openPositions.toLocaleString()}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
