# 💌 Mobile Wedding Invitation Ver.1 (Diary & Sticker Theme)

> **디자인 시스템 하네스(Design Harness) 기반 Figma-to-Code 1:1 픽셀 퍼펙트 모바일 웹 애플리케이션**

[![Demo Page](https://img.shields.io/badge/Live_Demo-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://dbd01350-eng.github.io/mobilewedding1/demo.html)
[![Figma](https://img.shields.io/badge/Figma-Design_System-F24E1E?style=for-the-badge&logo=figma)](https://www.figma.com/design/YH6L68jr8ytbaKZFjzvv86/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=3-611&t=KKmGV5xJ7mkwaTbI-4)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-blue?style=for-the-badge)](#기술-스택-및-환경)

---

## 📌 프로젝트 개요 (Overview)
- **프로젝트명**: 다이어리 & 스티커 감성 모바일 청첩장 웹 애플리케이션
- **개발 형태**: Zero-Dependency 순수 정적 웹 (Vanilla Web Standards)
- **기획 및 디자인 의도**: 손글씨/스티커/체크 모눈종이 기반의 아날로그 감성을 웹 인터랙션으로 재해석한 반응형 모바일 초대장
- **핵심 목표**: Figma 디자인 원본 노드 수치와 1:1 픽셀 일치율 100% 달성 및 디자인 토큰 린터 기반의 엄격한 품질 관리

---

## 🛠 기술 스택 및 환경 (Tech Stack)
- **Frontend**: HTML5, CSS3 Custom Properties (Design Tokenization), Vanilla JavaScript (ES6+)
- **Design & Prototyping**: Figma (Node-level Layout Inspection)
- **Maps API**: Naver Maps Open API v3 (GitHub Secrets 기반 주입)
- **CI/CD & Deploy**: GitHub Actions, GitHub Pages
- **Linting & Quality**: Custom AST Token Linter (`check-hardcode.mjs`)

---

## ✨ 핵심 기능 및 엔지니어링 포인트 (Key Engineering Highlights)

### 1. 피그마 디자인 시스템 토큰화 (Design System Tokenization)
- 피그마의 레이아웃, 컬러, 폰트, 여백, 각도 값을 CSS 변수(`:root`)로 전수 토큰화.
- 모눈종이 배경 패턴 반복(`background_checkered_paper.svg`), 마스킹 테이프 라벨, 스티커 배지 등 정밀한 스타일링 구현.

### 2. 디자인 하네스 린터 자동화 (`check-hardcode.mjs`)
- CSS 및 HTML 파일 내에 하드코딩된 스타일(임의 폰트, 미정의 픽셀값, 하드코딩 컬러)을 AST 기반으로 검사하는 자동화 검증 스크립트 구축.
- 토큰 준수율 100% 유지(0 Error)로 코드베이스의 유지보수성 및 확장성 확보.

### 3. 모바일 최적화 인터랙션 & 네비게이션 딥링크
- **초대 질문 윈도우 UI**: 아기자기한 OS 창 형태의 바디와 Yes/Sure 선택지 인터랙션.
- **포토 다이어리 & 신문 레이아웃**: 날씨 스티커, 감성 사진 그리드, 손글씨 밑줄 애니메이션.
- **네이버 지도 SDK & 1-터치 길찾기**: 네이버 지도, 카카오맵, 티맵 앱 딥링크 원클릭 연동.
- **안심 데모 모드(`data-demo="true"`)**: 개인정보를 분리하여 포트폴리오 공개 시에도 안전한 데이터 환경 제공.

---

## 📂 디렉터리 구조 (Directory Structure)
```text
ver1/
├── assets/                  # SVG 아이콘, 배경 그래픽 및 미디어 에셋
├── css/
│   └── style.css            # 토큰 기반 디자인 시스템 스타일시트
├── hooks/
│   ├── check-hardcode.mjs   # 디자인 하네스 토큰 준수 검증 린터
│   └── extract-common.js    # 공통 스타일 추출 유틸리티
├── js/
│   └── main.js              # 네이버 지도 연동 및 인터랙션 로직
├── demo.html                # 포트폴리오/공개용 비식별화 안심 데모 페이지
├── index.html               # 프로덕션 배포 원본 파일
├── PRD.md                   # 제품 요구사항 정의서 (Figma to Code 명세)
└── README.md
```
