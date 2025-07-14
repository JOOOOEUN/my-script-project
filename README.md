# 📊 my-script-project

Google Apps Script 기반의 자동화 스크립트 프로젝트입니다.  
이 스크립트는 구글 스프레드시트에서 특정 데이터를 불러와 **현장ID 자동 생성** 기능을 수행하며,  
회사 내부 운영 효율화를 위해 만들어졌습니다.

---

## 🔧 주요 기능

- ✅ 주소 및 단지 유형에 따라 **고유한 현장ID 생성**
- ✅ 시트 내 특정 범위(`B8:P`) 데이터를 분석
- ✅ 지역코드 및 단지유형 코드 자동 매핑
- ✅ 중복 방지를 위한 ID 트래킹 처리

---

```
## 🗂 파일 구조
.
├── Code.js # 메인 스크립트 (현장ID 생성 함수 포함)
├── appsscript.json # Apps Script 설정 파일
├── .gitignore # Git에 포함하지 않을 파일 목록
└── README.md # 프로젝트 설명 문서
```


---

## 🛠 실행 방법

1. [clasp](https://github.com/google/clasp) 설치
    ```bash
    npm install -g @google/clasp
    ```

2. 구글 계정 로그인
    ```bash
    clasp login
    ```

3. 이 프로젝트 폴더에서 `.clasp.json` 생성 후 `scriptId` 등록

4. 코드 푸시
    ```bash
    clasp push
    ```

---

## 📬 문의 또는 제안

이 프로젝트는 사내 업무 자동화를 위해 작성되었습니다.  
아이디어나 기능 제안이 있다면 GitHub Issues에 남겨주세요!
