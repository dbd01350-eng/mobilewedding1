---
name: review-design
description: 현재 작성이 끝난 코드가 디자인 하네스 및 규칙을 준수했는지 검사한다.
disable-model-invocation: true
---

# /review-design Skill

이 스킬은 작성된 코드가 프로젝트 디자인 시스템 하네스(`design-system-harness.md`) 및 웹 접근성 표준을 준수했는지 읽기 전용 검사관을 통해 독립적으로 평가합니다.

## 🚀 실행 워크플로우

1. **에이전트 위임 (`design-reviewer`)**:
   - 읽기 전용 권한을 가진 `design-reviewer` 서브 에이전트를 호출합니다.
2. **5대 핵심 품질 항목 검사**:
   - ① 하드코딩 색상/수치 잔재 여부
   - ② CSS 변수 토큰 참조율
   - ③ 승인된 서드파티 / CDN 화이트리스트 준수
   - ④ 웹 접근성 (alt, aria, button type)
   - ⑤ 사용자 수정 내용 보존 여부
3. **평가 결과 리포트**:
   - `PASS` 또는 `FAIL [상세 라인 및 항목]`을 출력합니다.
   - 실패 항목에 대해서는 직접 수정하지 않고, 적합한 후속 스킬(`/sync-tokens`, `/new-section` 등)을 추천합니다.
