# 경북연구원 그룹웨어 하이브리드 앱

Ionic Capacitor를 사용하여 개발된 경북연구원 그룹웨어 하이브리드 웹앱입니다.

## 🚀 주요 기능

- **로그인 시스템**: 사용자 인증 및 로그인 상태 유지
- **메인 대시보드**: 그룹웨어 주요 메뉴 접근
- **외부 웹사이트 연동**: 웹 그룹웨어 시스템과 연동
- **반응형 디자인**: 모바일 및 태블릿 최적화
- **다크 모드 지원**: 시스템 테마에 따른 자동 전환

## 📱 지원 플랫폼

- Android
- iOS (준비 중)
- 웹 브라우저

## 🛠️ 개발 환경

- **Ionic Framework**: 8.x
- **Angular**: 18.x
- **Capacitor**: 7.x
- **Node.js**: 18.x 이상

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 개발 서버 실행
```bash
ionic serve
```

### 3. 안드로이드 빌드
```bash
# 웹앱 빌드
ionic build

# 안드로이드 프로젝트와 동기화
ionic capacitor sync android

# 안드로이드 스튜디오에서 열기
ionic capacitor open android
```

### 4. iOS 빌드 (macOS 필요)
```bash
# iOS 플랫폼 추가
ionic capacitor add ios

# iOS 프로젝트와 동기화
ionic capacitor sync ios

# Xcode에서 열기
ionic capacitor open ios
```

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── home/           # 메인 대시보드
│   ├── login/          # 로그인 페이지
│   ├── app.component.* # 앱 루트 컴포넌트
│   └── app.routes.ts   # 라우팅 설정
├── assets/             # 정적 자원
├── theme/              # 테마 설정
└── global.scss         # 전역 스타일
```

## 🔧 주요 설정

### 로그인 정보
- **테스트 계정**: admin / password
- **실제 환경**: 경북연구원 그룹웨어 서버 연동 필요

### 외부 URL
- **그룹웨어 웹사이트**: http://211.224.129.168:8085/ndgi/#/pages/login

## 📋 메뉴 구성

1. **전자결재** - 결재 문서 관리
2. **일정관리** - 개인/부서 일정
3. **게시판** - 공지사항 및 게시판
4. **조직도** - 연구원 조직도
5. **메일** - 이메일 관리
6. **전화번호** - 내선번호 안내

## 🎨 UI/UX 특징

- **모던 디자인**: 그라데이션과 그림자 효과
- **직관적 네비게이션**: 카드 기반 메뉴 시스템
- **접근성**: 키보드 및 스크린 리더 지원
- **성능 최적화**: 지연 로딩 및 코드 스플리팅

## 🔒 보안 고려사항

- 로그인 정보 암호화 저장
- HTTPS 통신 권장
- 세션 관리 및 자동 로그아웃
- 입력값 검증 및 XSS 방지

## 🚀 배포

### Android APK 빌드
```bash
# 안드로이드 스튜디오에서 Build > Build Bundle(s) / APK(s) > Build APK(s)
```

### iOS IPA 빌드
```bash
# Xcode에서 Product > Archive
```

## 📞 지원

- **개발팀**: 경북연구원 IT팀
- **문의**: it@gwri.re.kr

## 📄 라이선스

© 2024 경북연구원. All rights reserved.

---

**참고**: 이 앱은 경북연구원 내부 사용을 위해 개발되었습니다. 
