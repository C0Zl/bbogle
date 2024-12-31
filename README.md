# ⚡뽀글 (Bbogle)
### 매일의 기록으로 프로젝트와 경험 정리를 도와주는 AI 서비스

---

## 프로젝트 개요

- **프로젝트 명**: 뽀글 (Bbogle)  
- **프로젝트 기간**: 2024.10.14 ~ 2024.11.19 (6주)

---

## 멤버 소개

| 이름     | GitHub ID | 역할                     |
|----------|-----------|--------------------------|
| 김선하   | [@kimzonah](https://github.com/kimzonah) | Back-end |
| 김태한   | [@Taehankk](https://github.com/Taehankk)   | Front-end |
| 문범수   | [@ANSmoon](https://github.com/ANSmoon)   | AI |
| 박예본   | [@shanaid](https://github.com/shanaid)   | Back-end , INFRA |
| 이지혜   | [@C0Zl](https://github.com/C0Zl)   | Front-end |
| 홍선주   | [@hhsssu](https://github.com/hhsssu)   | Front-end |

---

## 개발 환경

- **Front-end**: React, TypeScript
- **Back-end**: Spring Boot
- **상태 관리**: Zustand
- **버전 및 이슈 관리**: GitHub
- **협업 툴**: Discord, Notion, Zira
- **테스트 도구**: Swagger
- **목업 디자인**: Figma

---

## 역할 분담

> 이지혜, **Front-end**
- 회원 상태 관리
- 메인 페이지
- 마이 페이지
- 개인 정보 (닉네임, 프로필 이미지) 수정
- FCM 알림 구현
- 사이드바, 로딩 등 공통 컴포넌트 구현

---

## 서비스 소개

뽀글은 개발자들의 프로젝트 활동을 체계적으로 정리하고 취업을 돕는 서비스입니다. 
매일 뽀글과 대화하듯 회고를 작성하고 경험을 기록하며 이를 추후에 쉽게 찾아볼 수 있도록 지원합니다.

### 주요 기능
|기능|상세 설명|디자인|
|:---:|:---:|:---:|
|회고 작성|매일의 작업 내용을 뽀글에서 회고할 수 있어요|<img src="https://github.com/user-attachments/assets/b78a0b29-128c-4d7e-af4b-c43c477cbd13" alt="image" border="0" style="width: 450px;">|
|회고록|프로젝트가 모두 끝났다면, </br>프로젝트 전체 회고록을 뽑을 수 있어요|<img src="https://github.com/user-attachments/assets/3396993e-d8c6-4c57-9878-80748c72fbfc" alt="image" border="0" style="width: 450px;">|
|경험추출|내가 적은 회고를 바탕으로, </br>프로젝트에서 얻은 경험들을 추출할 수 있어요 </br>|<img src="https://github.com/user-attachments/assets/a61c0769-fab0-4875-a4f8-7fcfbed711fe" alt="image" border="0" style="width: 450px;">|
|알림 기능|잊어버리지 않도록 매일 회고 알림을 보내드려요.|<img src="https://github.com/user-attachments/assets/1671f3cd-fd25-42ff-9ba9-a74a4a8d60b3" alt="image" border="0" style="width: 450px;">|
|프로젝트|프로젝트 별로 전체 개발일지를 조회할 수 있어요.|<img src="https://github.com/user-attachments/assets/5005bd24-ce41-424a-bc48-f36bbbde66fa" alt="image" border="0" style="width: 450px;">|
|경험조회|경험 검색부터, 프로젝트별 조회까지 !|<img src="https://github.com/user-attachments/assets/9faef9a8-e0ef-46ab-98ed-d659f6cf9a1e" alt="image" border="0" style="width: 450px;"><img src="https://github.com/user-attachments/assets/339a958d-e7f3-40b7-b4c1-e810e6ac0872" alt="image" border="0" style="width: 450px;">|
|내정보|마이 페이지에서 내 정보를 조회해보세요. </br> 프로필 이미지는 다운받으실 수 있어요.|<img src="https://github.com/user-attachments/assets/826ddd1a-a743-4fbd-af88-37565b1c141d" alt="image" border="0" style="width: 450px;"><img src="https://github.com/user-attachments/assets/d0e75e8e-265a-48af-b86c-02b6bec02841" alt="image" border="0" style="width: 450px;">|

</br>


---

## 고민한 부분

<details>
<summary>이지혜</summary>
</br>
  
1. **인증 상태에 따른 페이지 접근 관리**  
  - 인증 상태를 관리하기 위해 커스텀 훅(useAuth)을 사용하여 현재 사용자가 인증 상태인지 확인하고, 인증되지 않은 사용자는 로그인 페이지(/login)로 리디렉션하도록 구현하였습니다.
  - 인증 과정에서 로딩 상태 처리도 중요한 부분이었습니다. 아직 인증 확인이 끝나지 않은 상태에서 페이지를 보여주는 문제가 있었습니다. 이를 해결하기 위해 loading 상태를 추가하여, 인증 확인 중에는 흰 배경에서 대기하도록 구현했습니다.

2. **알림 스케줄링 구현**  
 - FCM을 사용해 각 유저의 알림 설정에 따라 맞춤형 알림을 제공하도록 구현했습니다.
 - 백그라운드 상태에서는 알림을 자동으로 표시하도록 설계했습니다. 이 경우, FCM 서버에서 Notification 메시지를 전송하면 클라이언트가 앱이 실행 중이지 않아도 시스템 트레이에 알림이 표시됩니다. 이를 위해 FCM 서비스 워커를 활용해 알림을 처리하였습니다.
 - 포그라운드 상태에서는 Notification 메시지가 자동으로 표시되지 않으므로, Data 메시지를 활용해 클라이언트 앱에서 알림을 생성하도록 처리했습니다. FCM 서버에서 데이터 페이로드만 포함된 메시지를 전송하면, 클라이언트가 이를 수신하고 브라우저의 Notification API를 사용해 알림을 표시합니다.
  
3. **Zustand Persist를 활용한 상태 관리**
  - Zustand를 활용하여 유저의 인증 상태와 프로필 정보를 관리하며, persist 미들웨어를 사용하여 상태를 로컬 스토리지에 저장하도록 구현했습니다. 이를 통해 페이지 새로고침이나 브라우저를 종료한 후에도 인증 상태를 유지할 수 있도록 했습니다.
  - 인증 상태 확인 과정에서는, Zustand에서 isAuthenticated 값을 먼저 확인하여 불필요한 서버 요청을 줄였습니다.
</details>

---

## 프로젝트 후기

### 이지혜
- TypeScript를 처음 사용하게 되면서 JavaScript와의 차이점으로 시행착오가 있었습니다. JavaScript는 동적 타입 언어로 타입 선언이 필요 없지만, **TypeScript는 정적 타입 언어로 변수나 함수의 타입을 명시**해야 했습니다. 초반에는 이러한 명시적인 타입 선언이 개발 속도를 늦추는 것처럼 느껴졌지만, 점차 **코드의 오류를 사전에 방지하고 IDE의 자동완성 기능을 통해 효율성을 높일 수 있다는 점**을 깨달았습니다.
- API 응답 데이터 구조를 정의할 때 TypeScript의 인터페이스와 타입을 활용하여 더욱 명확한 데이터 관리를 할 수 있었습니다. 이 과정에서 TypeScript가 대규모 프로젝트에서 데이터 구조를 추적하고 유지보수성을 높이는 데 얼마나 강력한 도구인지 배우는 계기가 되었습니다.
- 상태 관리에 대해 많은 고민을 할 수 있었던 프로젝트였습니다. 특히 인증 상태를 관리하면서 localStorage에 회원 상태를 저장하는 것이 보안적으로 안전한지에 대한 고민이 컸습니다. localStorage는 브라우저에 쉽게 접근할 수 있기 때문에 민감한 데이터를 저장하기에는 적합하지 않다는 점을 인지했습니다. 그러나 인증 상태를 유지해야 하는 사용자 경험과 성능을 고려하면, 이러한 방식에도 나름의 트레이드오프가 있다는 것을 알게 되었습니다.

