---
name: new-section
description: 기존 디자인 토큰만으로 새로운 UI 컴포넌트/영역을 작성한다.
disable-model-invocation: true
---

# /new-section Skill

이 스킬은 프로젝트에 선언된 디자인 토큰(`css/style.css`의 `:root` 변수)과 공통 레이아웃 패턴만을 활용하여 새로운 화면 섹션 및 컴포넌트를 구축합니다.

## 🚀 실행 워크플로우

1. **공통 규격 및 토큰 파악**:
   - `css/style.css`의 디자인 토큰과 기존 카드 패턴(`.directions-card`, `.section-tape-label` 등)을 확인합니다.
2. **에이전트 위임 (`section-builder`)**:
   - `section-builder` 서브 에이전트를 호출하여 요청받은 대상 영역 1개를 격리하여 작성합니다.
   - 토큰에 없는 수치가 필요할 경우 임의 작성하지 않고 멈춘 뒤 보고합니다.
3. **완료 및 검증 안내**:
   - 컴포넌트 생성 후 사용자에게 마크업 위치를 보고하고, `/review-design`을 통해 하네스 준수 여부를 검사하도록 안내합니다.
