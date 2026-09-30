# Project Rules & Session Protocol (`PROJECT_RULES.md`)

> **[프로젝트 세션 규칙]**  
> 모든 AI 에이전트는 본 프로젝트의 코드를 검토하거나 수정하기 전, 아래 규칙과 [`design-system-harness.md`](file:///Z:/결혼준비/청첩장/ver1/design-system-harness.md) 및 [`work.md`](file:///Z:/결혼준비/청첩장/ver1/work.md)의 지침을 반드시 먼저 독해하고 준수해야 합니다.

---

## 1. 프로젝트 개요
- **프로젝트명**: 모바일 웨딩 청첩장 (Mobile Wedding Invitation)
- **기술 스택**: 순수 정적 웹 (HTML5, CSS3 Custom Properties, Vanilla JavaScript)
- **배포 타깃**: GitHub Pages 및 모바일 브라우저
- **주요 구성**:
  - `index.html`: 청첩장 단일 페이지 (Page 01 초대 / Page 02 스토리 & 갤러리 / Page 03 약도 & 교통안내 / 풀스크린 갤러리 모달)
  - `css/style.css`: 디자인 토큰 기반 스타일시트
  - `js/main.js`: 토스트 알림, 네이버 지도 v3 연동, 모달 제어
  - `assets/`: 벡터 SVG 아이콘 및 웨딩 사진 리소스

---

## 2. 필수 준수 3대 규칙

### 🚨 규칙 1: 사용자 수정 내용 엄격 보존 (Preserve User Customizations)
- 사용자가 직접 작성하거나 수정한 코드, 텍스트(예: "90분 무료주차", 신랑/신부 문구 등), 설정값, 디자인 요소, API 키(`ncpKeyId=sfb9d8eiq2` 등)를 에이전트가 임의로 덮어쓰거나 수정/되돌리지 않습니다.

### 🚨 규칙 2: 선 설명 및 사전 확인 후 실행 (Explain & Confirm Before Executing)
- 문제나 에러가 발생하거나 코드/디자인 수정이 필요한 상황에서 코드를 곧바로 임의로 수정하거나 실행하지 않습니다.
- 반드시 **1) 왜 그런 현상이 발생하는지(원인 분석)**와 **2) 어떻게 해결할 것인지(해결 방안 및 옵션)**를 먼저 사용자에게 설명하고 확인/동의를 구한 뒤, 사용자의 명시적인 승인을 받아 수정을 진행합니다.

### 🚨 규칙 3: 디자인 토큰 하네스 준수 (Enforce Design Tokens)
- 시각 스타일 수정 시 [`css/style.css`](file:///Z:/결혼준비/청첩장/ver1/css/style.css)의 `:root` 디자인 토큰 변수를 사용합니다.
- 상세 규칙은 [`design-system-harness.md`](file:///Z:/결혼준비/청첩장/ver1/design-system-harness.md)를 따릅니다.

---

## 3. 주요 파일 및 토큰 참조
- **디자인 토큰 선언부**: [`css/style.css`](file:///Z:/결혼준비/청첩장/ver1/css/style.css) (`:root` 섹션)
- **작업 지침 파일**: [`work.md`](file:///Z:/결혼준비/청첩장/ver1/work.md)
- **하네스 규칙 본체**: [`design-system-harness.md`](file:///Z:/결혼준비/청첩장/ver1/design-system-harness.md)
