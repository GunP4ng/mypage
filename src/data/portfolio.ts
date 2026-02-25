export const PERSONAL_INFO = {
  name: "이태용",
  nameEn: "Lee Taeyong",
  alias: "GunP4ng",
  titles: [
    "System Hacker",
    "Security Researcher",
    "Vulnerability Analyst",
    "CTF Player",
  ],
  bio: "System Hacking을 중심으로 보안 취약점과 공격 기법을 학습하고 있는 이태용(GunP4ng)입니다. Windows 환경을 공부하고 있으며, AI for Security 및 취약점 분석 자동화에 중점을 두고 연구를 진행하고 있습니다.",
  email: "goldpea5@naver.com",
  github: "https://github.com/GunP4ng",
  blog: "https://gunp4ng-study.tistory.com",
  location: "대한민국",
  availableForWork: true,
};

export const EDUCATION = [
  {
    school: "순천향대학교",
    major: "정보보호학과",
    period: "2022 ~ 재학 중",
  },
];

export const STRENGTHS = [
  {
    icon: "Shield",
    title: "System Hacking",
    description: "Windows/Linux 환경에서의 시스템 해킹 및 공격 기법 연구",
  },
  {
    icon: "Bug",
    title: "Vulnerability Analysis",
    description: "오픈소스 퍼징(AFL++) 기반 취약점 발굴 및 CVE 등록",
  },
  {
    icon: "Brain",
    title: "AI for Security",
    description: "보안 분야에 AI를 접목한 취약점 분석 자동화 연구",
  },
  {
    icon: "Flag",
    title: "CTF",
    description: "국제 CTF 대회 참가 및 문제 출제·운영 경험 보유",
  },
];

export type SkillItem = { name: string; level: number };
export type SkillCategory = { category: string; items: SkillItem[] };

export const SKILLS: SkillCategory[] = [
  {
    category: "Hacking & Analysis",
    items: [
      { name: "System Hacking (Pwn)", level: 85 },
      { name: "Reverse Engineering", level: 75 },
      { name: "Windows Internals", level: 78 },
      { name: "Vulnerability Analysis", level: 82 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "AFL++", level: 80 },
      { name: "IDA Pro / Ghidra", level: 75 },
      { name: "GDB / pwndbg", level: 85 },
      { name: "WinDbg", level: 70 },
    ],
  },
  {
    category: "Programming",
    items: [
      { name: "Python", level: 88 },
      { name: "C / C++", level: 80 },
      { name: "x86/x64 Assembly", level: 72 },
      { name: "Bash / PowerShell", level: 70 },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string[];
  highlight?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "KITRI 한국정보기술연구원",
    role: "WhiteHat School 3기",
    period: "2025.03 — 2025.09",
    description: [
      "선박 SW 정보 수집 및 취약점 분석 프로젝트 PM 역할 수행",
      "ECDIS 및 해양 사이버보안 분야 연구 수행",
    ],
    highlight: "우수 프로젝트 선정",
  },
  {
    company: "Security First",
    role: "System Team Lead",
    period: "2026.01 — 현재",
    description: [
      "시스템 보안 팀 리드로서 팀 연구 방향 설정 및 운영",
      "Security First 연말 해킹 대회 CTF 문제 출제 및 운영 (2025)",
    ],
  },
  {
    company: "Security First",
    role: "System Regular → Team Lead",
    period: "2022.07 — 현재",
    description: [
      "Newbie (2022.07~2022.12) → Regular (2025.08~2025.12) → Team Lead (2026.01~)",
      "시스템 해킹 분야 학습 및 내부 스터디 운영",
    ],
  },
];

export type Project = {
  id: number;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  gradient: string;
  github: string;
  demo?: string;
  role: string;
  highlights: string[];
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Assimp 취약점 분석",
    summary: "오픈소스 Assimp 라이브러리 퍼징 기반 취약점 분석",
    description:
      "AFL++을 사용하여 3D 모델 로딩 오픈소스 라이브러리 Assimp에 대한 퍼징 기반 취약점 분석을 수행했습니다. 다양한 파일 포맷에 대한 입력 검증 취약점을 탐색하고 크래시를 분석했습니다.",
    tags: ["Fuzzing", "AFL++", "C++", "Vulnerability Analysis"],
    gradient: "from-red-500 to-orange-600",
    github: "https://github.com/assimp/assimp",
    role: "Vulnerability Analyst",
    highlights: [
      "AFL++ 퍼징으로 크래시 5개 발견",
      "다양한 3D 파일 포맷 입력 벡터 분석",
      "2025.10 ~ 2025.11 수행",
    ],
  },
  {
    id: 2,
    title: "Wargame CTF 저장소",
    summary: "CTF 출제용 문제 관리 GitHub 저장소",
    description:
      "CTF 대회 출제용 문제들을 체계적으로 관리하기 위한 저장소입니다. Security First 연말 해킹 대회 등에서 출제한 문제들을 포함하며, 시스템 해킹(Pwn) 카테고리 중심으로 구성되어 있습니다.",
    tags: ["CTF", "Pwn", "System Hacking", "Challenge"],
    gradient: "from-violet-500 to-purple-600",
    github: "https://github.com/GunP4ng/Wargame",
    role: "Challenge Author",
    highlights: [
      "Security First 연말 CTF 문제 출제",
      "시스템 해킹(Pwn) 카테고리 중심",
      "2025.12 ~ 진행 중",
    ],
  },
];

export const ALL_TAGS = ["All", "Fuzzing", "AFL++", "CTF", "Pwn", "C++"];

export type Paper = {
  id: number;
  conference: string;
  year: number;
  title: string;
  titleKo?: string;
};

export const PAPERS: Paper[] = [
  {
    id: 1,
    conference: "한국정보보호학회 하계학술대회",
    year: 2025,
    title:
      "S-100 표준 적용에 따른 ECDIS GPS 신호 조작 위협 시나리오 분석: STRIDE 모델 기반 접근",
  },
  {
    id: 2,
    conference: "한국정보보호학회 하계학술대회",
    year: 2025,
    title:
      "S-100 표준 적용에 따른 ECDIS의 IP 인터페이스 사이버 위협 평가 방법론 연구",
  },
  {
    id: 3,
    conference: "한국정보보호학회 영남지부",
    year: 2025,
    title:
      "ECDIS 차트 삭제 업데이트의 오용 가능성과 절차적 대응 방안 연구",
  },
  {
    id: 4,
    conference: "WISA (World Conference on Information Security Applications)",
    year: 2025,
    title: "Visual Tampering in S-52: Threats and Protections",
  },
  {
    id: 5,
    conference: "WISA (World Conference on Information Security Applications)",
    year: 2025,
    title: "NMEA Under Siege: Dynamic Flooding Attacks and Defenses",
  },
];

export type Award = {
  category: "CTF" | "CVE" | "Certification";
  title: string;
  detail: string;
  link?: string;
  date?: string;
};

export const AWARDS: Award[] = [
  {
    category: "CTF",
    title: "hxp 39C3 CTF 2025",
    detail: "2nd place (as dizziness)",
    date: "2025",
  },
  {
    category: "CVE",
    title: "CVE-2025-64699",
    detail:
      "디바이스 오브젝트에 NULL DACL 설정으로 인한 raw disk 작업 수행 취약점",
    link: "https://nvd.nist.gov/vuln/detail/CVE-2025-64699",
    date: "2025",
  },
  {
    category: "Certification",
    title: "정보처리기능사",
    detail: "한국산업인력공단",
    date: "2024.07.09",
  },
  {
    category: "Certification",
    title: "리눅스 마스터 2급",
    detail: "한국정보통신진흥협회",
    date: "2023.10.06",
  },
  {
    category: "Certification",
    title: "네트워크 관리사 2급",
    detail: "한국정보통신자격협회",
    date: "2022.12.13",
  },
];
