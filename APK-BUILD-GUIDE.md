# APK 빌드 가이드

## 📱 안드로이드 APK 빌드 방법

### 1. 안드로이드 스튜디오에서 APK 빌드

#### 1.1 안드로이드 스튜디오 열기
```bash
ionic capacitor open android
```

#### 1.2 APK 빌드 단계
1. **안드로이드 스튜디오**가 열리면 프로젝트가 로드됩니다
2. 상단 메뉴에서 **Build** 클릭
3. **Build Bundle(s) / APK(s)** 선택
4. **Build APK(s)** 클릭

#### 1.3 빌드 완료 후
- APK 파일은 `android/app/build/outputs/apk/debug/` 폴더에 생성됩니다
- 파일명: `app-debug.apk`

### 2. 릴리즈 APK 빌드 (배포용)

#### 2.1 서명 키 생성
1. **Build** > **Generate Signed Bundle / APK**
2. **APK** 선택
3. **Create new** 클릭하여 새 키스토어 생성
4. 키스토어 정보 입력:
   - **Key store path**: 키스토어 파일 경로
   - **Password**: 키스토어 비밀번호
   - **Alias**: 키 별칭
   - **Password**: 키 비밀번호
   - **Validity**: 유효기간 (25년 권장)
   - **Certificate**: 인증서 정보

#### 2.2 릴리즈 빌드
1. **release** 빌드 타입 선택
2. **Finish** 클릭
3. 빌드 완료 후 `app-release.apk` 파일 생성

### 3. 빌드 설정 최적화

#### 3.1 build.gradle 설정
```gradle
android {
    compileSdk 34
    
    defaultConfig {
        applicationId "com.gwri.gdigw"
        minSdk 24
        targetSdk 34
        versionCode 1
        versionName "1.0"
    }
    
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

#### 3.2 앱 아이콘 설정
1. `android/app/src/main/res/` 폴더의 `mipmap-*` 폴더들
2. 각 해상도별로 아이콘 이미지 교체:
   - `mipmap-mdpi`: 48x48
   - `mipmap-hdpi`: 72x72
   - `mipmap-xhdpi`: 96x96
   - `mipmap-xxhdpi`: 144x144
   - `mipmap-xxxhdpi`: 192x192

### 4. 테스트 및 배포

#### 4.1 디버그 APK 테스트
1. 안드로이드 기기에 APK 파일 복사
2. 파일 관리자에서 APK 파일 클릭
3. 설치 진행

#### 4.2 Google Play Store 배포
1. **Google Play Console**에 개발자 계정 등록
2. 새 앱 생성
3. **Production** 트랙에 APK 업로드
4. 앱 정보 및 스크린샷 등록
5. 검토 후 배포

### 5. 문제 해결

#### 5.1 빌드 오류
- **Gradle 동기화**: File > Sync Project with Gradle Files
- **Clean Project**: Build > Clean Project
- **Rebuild Project**: Build > Rebuild Project

#### 5.2 메모리 부족 오류
```gradle
android {
    dexOptions {
        javaMaxHeapSize "4g"
    }
}
```

#### 5.3 서명 오류
- 키스토어 파일 경로 확인
- 비밀번호 정확성 확인
- 키 별칭 확인

### 6. 성능 최적화

#### 6.1 APK 크기 최적화
```gradle
android {
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
        }
    }
}
```

#### 6.2 코드 난독화
```gradle
android {
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
        }
    }
}
```

### 7. 보안 설정

#### 7.1 네트워크 보안
```xml
<!-- android/app/src/main/res/xml/network_security_config.xml -->
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="false">
        <domain includeSubdomains="true">gwri.re.kr</domain>
    </domain-config>
</network-security-config>
```

#### 7.2 권한 설정
```xml
<!-- android/app/src/main/AndroidManifest.xml -->
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

---

## 📋 체크리스트

### 빌드 전 확인사항
- [ ] 모든 코드가 커밋되었는지 확인
- [ ] `ionic capacitor sync android` 실행
- [ ] 안드로이드 스튜디오에서 프로젝트 동기화
- [ ] 앱 아이콘 및 스플래시 스크린 설정
- [ ] 앱 이름 및 패키지명 확인

### 빌드 후 확인사항
- [ ] APK 파일이 정상 생성되었는지 확인
- [ ] 실제 기기에서 테스트
- [ ] 모든 기능이 정상 작동하는지 확인
- [ ] 앱 크기 및 성능 확인

---

**참고**: 이 가이드는 경북연구원 그룹웨어 앱을 위한 것입니다. 
