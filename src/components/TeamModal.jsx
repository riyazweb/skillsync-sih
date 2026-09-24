"use client";
import { Shield, Monitor, Server, Brain, Cloud, Palette, X, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { teamMembers } from "@/data/mockData";

const iconMap = { Shield, Monitor, Server, Brain, Cloud, Palette };

export default function TeamModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in-up">
      <div className="absolute inset-0" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full z-10 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-950 px-6 py-4 flex items-center justify-between">
          <h2 className="text-white font-bold text-base">Team SkillSync</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6">
          {/* PS badge */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
            <div className="text-[10px] font-bold text-blue-500 uppercase tracking-wider mb-0.5">Problem Statement SIH26134</div>
            <p className="text-xs text-blue-800 leading-relaxed">Challenges in aligning skill development programs with industry requirements and emerging job market demands</p>
          </div>

          <div className="text-xs text-slate-500 mb-4 flex items-center gap-1.5">
            <ExternalLink className="w-3 h-3" />
            Vaagdevi Colleges, Bollikunta, Warangal • SIH 2026
          </div>

          {/* Members */}
          <div className="grid grid-cols-2 gap-2">
            {teamMembers?.map((m, i) => {
              const Icon = iconMap[m.roleIcon] || Shield;
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm text-slate-800 truncate">{m.name}</div>
                    <div className="text-[10px] text-slate-400 font-medium truncate">{m.role}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-100 text-center text-[11px] text-slate-400">
            Built for Smart India Hackathon 2026 🇮🇳
          </div>
        </div>
      </div>
    </div>
  );
}
