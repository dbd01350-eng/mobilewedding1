# Design System & Code Quality Harness (`design-system-harness.md`)

> **[Harness Protocol Version: 1.0.0]**  
> 본 문서는 프로젝트의 시각적 일관성, 디자인 토큰 준수, 코드 품질을 강제하기 위한 범용 디자인 시스템 하네스 규칙입니다.

---

## 1. 목적 (Purpose)
1. **디자인 토큰 강제**: 모든 시각적 스타일(색상, 폰트 패밀리, 기본 규격 등)은 선언된 디자인 토큰(CSS Custom Properties)을 반드시 참조해야 합니다.
2. **하드코딩 및 임의 변형 차단**: 토큰 선언부 외부에서 임의의 HEX/RGB 색상이나 규격 미달 스타일을 임의로 추가하는 것을 엄격히 금지합니다.
3. **4단계 작업 사이클 준수**: 모든 변경 작업은 `Clarify(명확화) → Reuse(재사용) → Implement(구현) → Evaluate(검증)` 프로세스를 따릅니다.

---

## 2. 4대 핵심 원칙 (Core Principles)

### ① Think Before Coding (선 질문 & 명확화)
- 요구사항, 화면 배치, 인터랙션 방식이 모호하거나 여러 옵션이 존재할 경우, 코딩을 멈추고 **원인과 해결 옵션을 사용자에게 먼저 설명하고 승인을 구합니다.**
- 사용자가 직접 수정한 코드, 문구, 설정값은 절대 임의로 덮어쓰거나 되돌리지 않습니다.

### ② Simplicity First (기존 토큰 및 패턴 재사용)
- 새 스타일이나 클래스를 임의로 남발하지 않고, `:root`에 정의된 CSS 변수와 기존의 공통 패턴(`.directions-card`, `.section-tape-label` 등)을 재사용합니다.

### ③ Surgical Changes (최소 침습 수정)
- 요청받은 컴포넌트와 관련 스타일/스크립트 라인만 정교하게 수정합니다.
- 변경 범위와 무관한 기존 코드, 주석, 자산을 건드리지 않습니다.

### ④ Goal-Driven Execution (목표 검증 및 완료)
- 작업 후 W3C 유효성, 토큰 참조 일관성, 모바일 뷰포트 정렬을 자체 검증한 후 완료를 보고합니다.

---

## 3. 디자인 토큰 사양 및 코드 규칙

### 📍 토큰 정의 파일 위치
- **경로**: [`css/style.css`](file:///Z:/결혼준비/청첩장/ver1/css/style.css) `:root` 섹션

### 🎨 핵심 토큰 목록
| 구분 | 토큰명 | 값 / 설명 |
| :--- | :--- | :--- |
| **Background** | `--bg-canvas` | `#eae7df` (외곽 캔버스 배경) |
| | `--bg-paper` | `#fffdf8` (청첩장 한지 페이퍼 배경) |
| **Text** | `--color-slate` | `#3f4448` (메인 슬레이트 텍스트/테두리) |
| | `--color-muted` | `#70767b` (보조 뮤트 텍스트) |
| **Pink Palette**| `--color-pink-primary` | `#d98e98` (핑크 메인 강조색) |
| | `--color-pink-tape` | `#f2bfc4` (마스킹 테이프 핑크) |
| | `--color-pink-badge` | `#fbe9eb` (스마트 뱃지 배경) |
| | `--color-pink-btn` | `#fce8e9` (핑크 버튼/인터랙션 배경) |
| **Blue Palette**| `--color-blue-primary` | `#789cb4` (블루 메인 강조색) |
| | `--color-blue-accent` | `#afcbdd` (헤더/테이프 액센트 블루) |
| | `--color-blue-border` | `#c9dbe5` (디바이더 보더 블루) |
| | `--color-blue-soft` | `#e8f2f7` (소프트 블루 버튼/아이콘 배경) |
| **Typography** | `--font-gaegu` | `'Gaegu', cursive, sans-serif` (손글씨 메인 폰트) |
| | `--font-inter` | `'Inter', sans-serif` (영문/숫자 서브 폰트) |
| **Layout** | `--container-width` | `390px` (모바일 뷰포트 기준 폭) |

### 🚫 금지 사항 & 예외 규정
- **금지**: CSS 파일 내에서 토큰 선언부(`:root`)를 제외한 일반 셀렉터에 raw HEX(`#ffffff`, `#000000` 등 기본 흑백/알파 예외 제외)를 임의로 인라인 하드코딩하는 것.
- **예외 주석 처리**: 라이브러리 연동이나 특수한 오버레이 효과로 불가피하게 하드코딩이 필요한 경우 코드 끝에 사유 주석을 추가합니다.
  ```css
  background: rgba(0, 0, 0, 0.96); /* token-exempt: 풀스크린 갤러리 딤드 배경 */
  ```

---

## 4. 승인된 서드파티 / CDN 화이트리스트
본 프로젝트는 순수 정적 웹(Vanilla HTML/CSS/JS) 기반이며, 아래 허용된 리소스 외의 무단 외부 라이브러리 추가를 금지합니다.

1. **Google Fonts CDN**: `https://fonts.googleapis.com` (`Gaegu`, `Inter`)
2. **Naver Maps Open API v3**: `https://oapi.map.naver.com/openapi/v3/maps.js`
3. **내비게이션 딥링크**:
   - 네이버 지도 (`map.naver.com`)
   - 카카오맵 (`map.kakao.com`)
   - 티맵 (`tmap.co.kr`)
