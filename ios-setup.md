# iOS 앱 설정 가이드

## 📱 iOS 앱 빌드 및 배포

### 필수 요구사항
- **macOS** 운영체제
- **Xcode** 14.0 이상
- **CocoaPods** 설치
- **Apple Developer Account** (배포용)

### 1. 개발 환경 설정

#### CocoaPods 설치
```bash
sudo gem install cocoapods
```

#### iOS 프로젝트 열기
```bash
ionic capacitor open ios
```

### 2. Xcode에서 설정

#### 프로젝트 설정
1. **Bundle Identifier** 변경: `com.gwri.gdigw`
2. **Display Name** 설정: `경북연구원 그룹웨어`
3. **Version** 및 **Build** 번호 설정

#### 팀 설정
1. **Signing & Capabilities** 탭에서 팀 선택
2. **Provisioning Profile** 설정

#### 권한 설정
다음 권한을 `Info.plist`에 추가:

```xml
<!-- 카메라 권한 -->
<key>NSCameraUsageDescription</key>
<string>사진 촬영을 위해 카메라 접근이 필요합니다.</string>

<!-- 사진 라이브러리 권한 -->
<key>NSPhotoLibraryUsageDescription</key>
<string>사진 선택을 위해 사진 라이브러리 접근이 필요합니다.</string>

<!-- 위치 권한 -->
<key>NSLocationWhenInUseUsageDescription</key>
<string>위치 기반 서비스를 위해 위치 접근이 필요합니다.</string>

<!-- 마이크 권한 -->
<key>NSMicrophoneUsageDescription</key>
<string>음성 녹음을 위해 마이크 접근이 필요합니다.</string>
```

### 3. 앱 아이콘 설정

#### 아이콘 크기별 이미지 준비
- 20x20, 29x29, 40x40, 60x60, 76x76, 83.5x83.5, 1024x1024

#### Assets.xcassets에서 설정
1. `AppIcon` 선택
2. 각 크기별로 이미지 드래그 앤 드롭

### 4. 스플래시 스크린 설정

#### LaunchScreen.storyboard 수정
- 배경색: `#667eea`
- 로고 이미지 추가
- 앱 이름 텍스트 추가

### 5. 빌드 및 테스트

#### 시뮬레이터에서 테스트
1. Xcode에서 시뮬레이터 선택
2. **Run** 버튼 클릭 (⌘+R)

#### 실제 기기에서 테스트
1. iOS 기기를 Mac에 연결
2. 기기 선택 후 **Run** 버튼 클릭

### 6. 배포 준비

#### Archive 생성
1. **Product** > **Archive** 선택
2. **Distribute App** 선택
3. 배포 방법 선택:
   - **App Store Connect**: App Store 배포
   - **Ad Hoc**: 특정 기기 배포
   - **Enterprise**: 기업 내부 배포

#### App Store 배포
1. **App Store Connect**에서 앱 등록
2. **Archive** 업로드
3. **TestFlight** 또는 **App Store** 배포

### 7. iOS 특화 기능

#### 햅틱 피드백
- 로그인 버튼 터치 시 중간 강도 피드백
- 메뉴 선택 시 가벼운 피드백
- 성공/실패 알림 시 적절한 피드백

#### 키보드 처리
- 키보드가 나타날 때 UI 자동 조정
- 입력 필드 포커스 시 자동 스크롤

#### 다크 모드 지원
- 시스템 테마에 따른 자동 전환
- iOS 네이티브 다크 모드 스타일 적용

### 8. 성능 최적화

#### 메모리 관리
- 이미지 캐싱 최적화
- 불필요한 리소스 해제

#### 네트워크 최적화
- HTTPS 통신 강제
- 네트워크 상태 모니터링

### 9. 보안 설정

#### App Transport Security
```xml
<key>NSAppTransportSecurity</key>
<dict>
    <key>NSAllowsArbitraryLoads</key>
    <false/>
    <key>NSExceptionDomains</key>
    <dict>
        <key>gwri.re.kr</key>
        <dict>
            <key>NSExceptionAllowsInsecureHTTPLoads</key>
            <true/>
        </dict>
    </dict>
</dict>
```

#### 키체인 설정
- 민감한 정보 암호화 저장
- 생체 인증 지원 (Face ID/Touch ID)

### 10. 문제 해결

#### 일반적인 문제
1. **빌드 오류**: `pod install` 재실행
2. **시뮬레이터 문제**: Xcode 재시작
3. **권한 오류**: Info.plist 설정 확인

#### 디버깅
- Xcode 콘솔에서 로그 확인
- Safari Web Inspector 사용
- Ionic DevTools 활용

---

**참고**: iOS 앱 개발은 macOS 환경에서만 가능합니다. 
