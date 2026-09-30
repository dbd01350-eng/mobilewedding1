# 제품 요구사항 정의서(PRD) — Figma to Code

## 0. 디자인 원본 정보
- Figma URL: [https://www.figma.com/design/YH6L68jr8ytbaKZFjzvv86/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=3-611&t=KKmGV5xJ7mkwaTbI-4](https://www.figma.com/design/YH6L68jr8ytbaKZFjzvv86/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C?node-id=3-611&t=KKmGV5xJ7mkwaTbI-4)
- 출처 기준: Figma 연동 데이터 (Source of Truth)
- 에셋 저장 위치: `assets/`
- 구현 목표: Figma 원본 노드 수치 및 시각 디자인 100% 1:1 피팅

## 1. 서비스 개요 (디자인 기반 파싱)
- 서비스명: [디자인에서 확인] 로운 & 지호 모바일 청첩장 (Mobile Wedding Invitation)
- 목적 [디자인 기반 추정]: 다이어리/스티커 감성의 모바일 청첩장으로 결혼식 초대, 포토 다이어리 공유, 지도 및 교통편 안내 제공
- 대상 사용자 [디자인 기반 추정]: 결혼식에 초대받은 하객 및 지인

## 2. 구현 방식 및 기술 환경
- 구현 방식: [사용자 선택] MPA
- 프론트엔드: [공식 문서로 확인(2026-09-30)] HTML5 + CSS3 + Vanilla JS (빌드 도구 없는 순수 정적 웹)
- 스타일링: [디자인에서 확인] CSS Custom Properties (:root 토큰화)
- 라이브러리: [공식 문서로 확인(2026-09-30)] 없음 (정적 인터랙션 및 순수 JS)
- 데이터 저장: [사용자 선택] 없음 (정적 UI만 제공)
- 배포 환경: [사용자 선택] GitHub Pages

## 3. 디자인 시스템 및 토큰 명세
- Color Tokens: [디자인에서 확인]
  - `--bg-primary: #FFFDF8` (메인 배경 / 체크 모눈 배경지)
  - `--color-slate: #3F4448` (메인 텍스트 및 프레임 보더)
  - `--color-muted: #70767B` (보조 텍스트 및 서브 안내)
  - `--color-pink-primary: #D98E98`
  - `--color-pink-border: #F2BFC4`
  - `--color-pink-bg: #48b465be / #FCE8E9 / #FBE9EB`
  - `--color-blue-primary: #789CB4`
  - `--color-blue-accent: #AFCBDD`
  - `--color-blue-border: #C9DBE5`
  - `--color-blue-bg: #E8F2F7`
- Typography Tokens: [디자인에서 확인]
  - Font Family: `'Gaegu', 'Inter', cursive, sans-serif` (Google Fonts Gaegu, Inter)
  - Font Sizes: 11px, 12px, 13px, 15px, 16px, 20px, 24px, 26px, 28px
  - Font Weights: 400 (Regular), 700 (Bold)
- Spacing & Radius Tokens: [디자인에서 확인]
  - Container Max-Width: `390px`
  - Container Padding: `30px 17px 0px`
  - Border Radius: `4px`, `8px`, `10px`, `12px`, `14px`, `999px`
  - Border Thickness: `1px`, `1.2px`, `1.4px`, `1.5px`, `1.6px`

## 4. 인공지능 작업 지시 순서 및 완료 기준
- 1단계: 프로젝트 기본 폴더 구조 및 필수 설정 파일 생성 (완료 기준: 기본 구조 세팅)
- 2단계: 공통 UI 컴포넌트 마크업/개발 (완료 기준: 컴포넌트 디자인 100% 일치)
- 3단계: 화면별 레이아웃 및 디자인 피팅 구현 (완료 기준: 시각적 대조 검수 통과)
- 4단계: 인터랙션(지도 연동, 버튼 클릭 액션) 및 예외 상태 처리 (완료 기준: 프로토타입 인터랙션 동작)
- 5단계: Viewport별 시각적 검수 및 픽셀 튜닝 (완료 기준: 100% 디자인 동일 프론트엔드 완성)

## 5. 절대 규칙 및 완료 기준
- [x] [디자인에서 확인] Figma 원본 노드 수치 및 시각적 일치 100% 달성
- [x] [디자인에서 확인] 임의의 테두리(border), 불릿, 재생 버튼 추가 0건
- [x] [공식 문서로 확인] W3C HTML5/CSS3 표준 준수
- [x] [공식 문서로 확인] 에셋 단일 위치(`assets/`) 저장 준수
