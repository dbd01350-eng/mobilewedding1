---
name: figma-to-section
description: Figma 시안을 하네스 규칙에 따라 코드로 구현한다.
disable-model-invocation: true
---

# /figma-to-section Skill

이 스킬은 Figma 디자인 시안(URL 또는 노드 ID)을 분석하여 하네스 엔지니어링 규칙에 맞게 웹 컴포넌트/섹션으로 1:1 정밀 변환합니다.

## 🚀 실행 워크플로우

1. **입력 확인 (Input Verification)**:
   - 사용자에게 대상 Figma URL(또는 node-id)과 구현할 대상 파일 위치(`index.html` 내 특정 섹션 등)를 확인합니다.
2. **에이전트 위임 (`figma-implementer`)**:
   - `figma-implementer` 서브 에이전트를 호출하여 4단계 프로세스를 실행합니다:
     - **Clarify**: 시안 레이아웃 및 텍스트/스타일 계층 분석
     - **Reuse**: `css/style.css` 내의 기존 디자인 토큰 매핑
     - **Implement**: 대상 영역만 최소 침습으로 구현
     - **Evaluate**: 하드코딩 및 규격 준수 검사
3. **완료 및 사후 검증 안내**:
   - 구현 완료 후 사용자에게 결과를 보고하고, 품질 검사를 위해 `/review-design` 실행을 안내합니다.
