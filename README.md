# GunP4ng | Security Researcher Portfolio

> System Hacking을 중심으로 보안 취약점과 공격 기법을 연구하는 이태용(GunP4ng)의 포트폴리오 웹사이트입니다.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwind-css)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?logo=vercel)](https://vercel.com)

---

## 📋 소개

- **이름:** 이태용 (Lee Taeyong)
- **별칭:** GunP4ng
- **소속:** 순천향대학교 정보보호학과 (2022 ~ 재학 중)
- **관심 분야:** System Hacking, Windows Internals, AI for Security, 취약점 분석 자동화
- **GitHub:** [github.com/GunP4ng](https://github.com/GunP4ng)
- **블로그:** [gunp4ng-study.tistory.com](https://gunp4ng-study.tistory.com)

---

## 🏗️ 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Deployment | Vercel |

---

## 📂 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx       # 전역 레이아웃, 메타데이터
│   ├── page.tsx         # 메인 페이지 (섹션 조립)
│   └── globals.css      # 전역 스타일
├── components/
│   ├── Navbar.tsx       # 고정 네비게이션 바
│   ├── Footer.tsx       # 푸터
│   └── sections/
│       ├── Hero.tsx         # 메인 히어로 섹션
│       ├── About.tsx        # 소개 섹션
│       ├── Skills.tsx       # 기술 스택 섹션
│       ├── Experience.tsx   # 경력 타임라인
│       ├── Projects.tsx     # 프로젝트 카드 그리드
│       ├── Papers.tsx       # 논문 섹션
│       ├── Awards.tsx       # 수상 / CVE / 자격증
│       └── Contact.tsx      # 연락처 폼
├── data/
│   └── portfolio.ts     # 포트폴리오 데이터 (중앙 관리)
└── hooks/
    ├── useTheme.ts          # 다크/라이트 모드 토글
    └── useActiveSection.ts  # 스크롤 기반 활성 섹션 감지
```

---

## ✨ 주요 기능

- **1페이지 스크롤** 방식의 포트폴리오
- **다크 / 라이트 모드** 토글 (시스템 설정 자동 감지, `localStorage` 유지)
- **타이핑 애니메이션** Hero 섹션
- **스크롤 진입 애니메이션** (Framer Motion + IntersectionObserver)
- **프로젝트 모달** 상세 보기
- **논문 섹션** — 학술대회별 그룹핑
- **수상 / CVE / 자격증** 섹션
- **반응형 레이아웃** (모바일 / 태블릿 / 데스크탑)
- **커스텀 스크롤바** 및 글로벌 셀렉션 스타일

---

## 🚀 로컬 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 📄 라이선스

MIT © [GunP4ng](https://github.com/GunP4ng)
