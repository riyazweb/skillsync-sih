# 🏛️ SkillSync — AI Labour Intelligence & NSQF Alignment

> **Smart India Hackathon 2026** · Problem Statement: **SIH26134**  
> **Government of Maharashtra** · Department of Skills, Employment, Entrepreneurship & Innovation  
> **Team SkillSync** · Vaagdevi Colleges, Warangal

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Vercel-000?style=for-the-badge&logo=vercel)](https://skillsync-omega-one.vercel.app/)
[![SIH Problem](https://img.shields.io/badge/SIH_2026-SIH26134-2563EB?style=for-the-badge)](https://sih.gov.in)
[![Bilingual](https://img.shields.io/badge/Bilingual-English_%7C_%E0%A4%AE%E0%A4%B0%E0%A4%BE%E0%A4%A0%E0%A5%80-orange?style=for-the-badge)](#)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)


## ⚡ Quick Evaluation

- 🌐 **Live Prototype:** [skillsync-omega-one.vercel.app](https://skillsync-omega-one.vercel.app/)
- 💻 **Source Code:** [TeamSkillSync/SkillSync-Engine](https://github.com/TeamSkillSync/SkillSync-Engine)
- 🎥 **Demo Video:** [Watch the 2-minute walkthrough](https://youtu.be/YOUR_VIDEO_ID) *(replace with the final link)*
<img width="1902" height="863" alt="Screenshot 2026-09-24 144243" src="https://github.com/user-attachments/assets/4bc5ca39-c6e4-45c1-a5b3-6dec0b219763" />
<img width="1917" height="861" alt="Screenshot 2026-09-24 143608" src="https://github.com/user-attachments/assets/8b1d4e64-d43d-488b-8ef2-3fcd15f47bd6" />
<img width="1917" height="870" alt="Screenshot 2026-09-24 143538" src="https://github.com/user-attachments/assets/130069c3-98cc-4803-abaf-ff3ec8d6f2ba" />
<img width="1911" height="863" alt="Screenshot 2026-09-24 143520" src="https://github.com/user-attachments/assets/1d8dfaa2-8ee2-4d52-8638-2ed42559b817" />

## 🎯 The Challenge

More than **1.5 lakh students** graduate from Maharashtra’s ITIs and polytechnics every year, while **42% require retraining**. Conventional syllabi can lag **3–5 years** behind changing industry needs, creating a **40%+ skill mismatch**.

## 💡 The Solution

**SkillSync** is an AI-powered labour-market intelligence platform that converts live hiring demand into actionable curriculum and career decisions.

- Scans **68,410+ job signals** across Maharashtra
- Matches ITI/polytechnic curricula with industry skills using **NLP and semantic similarity**
- Generates curriculum gap analysis and amendment recommendations
- Recommends personalized bridge modules and apprenticeship pathways
- Supports a fully bilingual **English / मराठी** experience

## ✨ 5 High-Impact Innovations

1. **State Intelligence Hub** — Demand-supply insights across Pune, Nashik, Sambhajinagar, Nagpur and AURIC.
2. **NSQF AI Alignment Engine** — Upload a syllabus and receive a rapid retained-vs-missing skill analysis.
3. **AI Curriculum Patches** — Flags obsolete units and recommends updates with projected placement impact.
4. **Trainee Career Pathways** — Personalized modules for EV diagnostics, PLC/SCADA, solar and IoT skills.
5. **Apprenticeship Matching** — Connects skill-ready candidates with relevant employer opportunities.

## 🏗️ Architecture

```text
[68K+ Job Signals] → [spaCy NER + Sentence-BERT] → [PostgreSQL + pgvector]
        → [FastAPI Services] → [Bilingual Next.js / React Interface]
```

> ⚡ Built with an open-source stack — no proprietary LLM subscription required.

## 📊 Measurable Impact

| Metric | SkillSync Impact |
|---|---:|
| Syllabus revision lag | **80% reduction** |
| Projected placement uplift | **+28.4%** |
| Legacy trades flagged | **14** |
| Retraining savings | **₹18,500 per apprentice** |
| Job signals analysed | **68,410+** |

## 🛠️ Tech Stack

**Frontend:** Next.js 14 · React 18 · Tailwind CSS · Recharts  
**Backend:** Python · FastAPI  
**ML/NLP:** spaCy · Sentence-BERT (`all-MiniLM-L6-v2`)  
**Data:** PostgreSQL · pgvector · JSON cache  
**Deployment:** Vercel · Railway

## 👥 Team SkillSync

| Member | Role |
|---|---|
| **Mirza Amaanullah Baig** | Team Lead & Systems Architect |
| **Mohammed Saheb Hussain** | Frontend Developer |
| **Mohammad Riyaz** | Backend & API Engineer |
| **Naveed Mohammed** | ML / NLP Specialist |
| **Mohammed Adam** | DevOps & Cloud Deployment |
| **Seeyana Samreen** | UI/UX & Product Lead |

## 🚀 Run Locally

```bash
git clone https://github.com/riyazweb/skillsync-sih.git
cd skillsync-sih
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## 📄 License

Released under the [MIT License](LICENSE).

<p align="center">Built with ❤️ for <strong>Smart India Hackathon 2026</strong> 🇮🇳</p>
