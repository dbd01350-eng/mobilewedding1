# 작업 지침 (Work Instructions)

## 1. 최우선 원칙 (Top Priority Rules)
- **사용자 수정 내용 엄격 보존 (Strict Preservation of User Modifications)**:
  - 사용자가 직접 작성하거나 수정한 코드, 텍스트, 설정값, 디자인, API 키, 스타일 등은 에이전트가 절대로 임의로 덮어쓰거나 변경하거나 되돌리지 않습니다.
  - 사용자의 수정 의도를 항상 최우선으로 존중하며, 수정이 필요한 경우 반드시 사용자의 사전 승인을 받거나 명시적인 지시가 있을 때만 변경합니다.
- **선 설명 및 사전 확인 후 실행 (Explain & Confirm Before Executing)**:
  - 문제나 에러가 발생하거나 코드/디자인 수정이 필요한 상황에서 코드를 곧바로 임의로 수정하거나 실행하지 않습니다.
  - 반드시 **1) 왜 그런 현상이 발생하는지(원인 분석)**와 **2) 어떻게 해결할 것인지(해결 방안 및 옵션)**를 먼저 사용자에게 명확히 설명하고 질문/확인을 구한 뒤, 사용자의 승인이나 선택을 받은 후에 수정을 진행합니다.
- **워크스페이스 작업 지침 준수**:
  - 작업을 시작할 때 항상 이 `work.md` 파일의 지침을 먼저 확인하고 철저히 준수합니다.

---

## 2. 프로젝트 현황 및 설정 (Project Status & Configs)
- **프로젝트**: 웨딩 모바일 청첩장 (Mobile Wedding Invitation)
- **지도 연동**:
  - 네이버 지도 Open API v3 (`oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=...` - GitHub Secrets `NAVER_MAP_KEY`로 자동 주입)
  - 웨딩홀: 더 파티움 여의도 (위도 `37.5284`, 경도 `126.9205`)
- **디자인/레이아웃**:
  - 체크 배경지 반복(`assets/background_checkered_paper.svg`)
  - 피그마 기반 회전 각도 및 폰트(`Gaegu`, `Inter`) 적용
