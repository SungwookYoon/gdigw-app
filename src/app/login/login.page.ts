import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,
  IonSpinner,
  IonIcon,
  AlertController,
  LoadingController,
  ToastController,
  Platform
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';
import { Keyboard } from '@capacitor/keyboard';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCheckbox,
    IonSpinner,
    IonIcon,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  isIOS = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private platform: Platform
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      rememberMe: [false]
    });

    this.isIOS = this.platform.is('ios');
  }

  ngOnInit() {
    // 저장된 로그인 정보가 있다면 불러오기
    const savedUsername = localStorage.getItem('savedUsername');
    if (savedUsername) {
      this.loginForm.patchValue({
        username: savedUsername,
        rememberMe: true
      });
    }

    // iOS에서 키보드 이벤트 처리
    if (this.isIOS) {
      this.setupKeyboardHandling();
    }
  }

  private async setupKeyboardHandling() {
    try {
      await Keyboard.addListener('keyboardWillShow', () => {
        // 키보드가 나타날 때 처리
        document.body.classList.add('keyboard-is-open');
      });

      await Keyboard.addListener('keyboardWillHide', () => {
        // 키보드가 숨겨질 때 처리
        document.body.classList.remove('keyboard-is-open');
      });
    } catch (error) {
      console.log('Keyboard plugin not available');
    }
  }

  async onLogin() {
    if (this.loginForm.valid) {
      // 햅틱 피드백 (iOS)
      if (this.isIOS) {
        try {
          await Haptics.impact({ style: ImpactStyle.Medium });
        } catch (error) {
          console.log('Haptics not available');
        }
      }

      this.isLoading = true;

      const { username, password, rememberMe } = this.loginForm.value;

      try {
        // 로딩 표시
        const loading = await this.loadingController.create({
          message: '로그인 중...',
          spinner: 'crescent'
        });
        await loading.present();

        // 실제 로그인 API 호출 (여기서는 시뮬레이션)
        await this.simulateLogin(username, password);

        // 로그인 상태 유지 설정
        if (rememberMe) {
          localStorage.setItem('savedUsername', username);
        } else {
          localStorage.removeItem('savedUsername');
        }

        // 사용자 정보 저장
        localStorage.setItem('currentUser', username);

        // 로그인 성공 햅틱 피드백
        if (this.isIOS) {
          try {
            await Haptics.notification({ type: NotificationType.Success });
          } catch (error) {
            console.log('Haptics not available');
          }
        }

        // 로그인 성공 토스트
        await this.showToast('로그인 성공!', 'success');

        // 홈 페이지로 이동
        this.router.navigate(['/home']);

      } catch (error) {
        console.error('Login error:', error);

        // 로그인 실패 햅틱 피드백
        if (this.isIOS) {
          try {
            await Haptics.notification({ type: NotificationType.Error });
          } catch (error) {
            console.log('Haptics not available');
          }
        }

        await this.showAlert('로그인 실패', '아이디 또는 비밀번호를 확인해주세요.');
      } finally {
        this.isLoading = false;
        await this.loadingController.dismiss();
      }
    } else {
      // 폼 유효성 검사 실패 햅틱 피드백
      if (this.isIOS) {
        try {
          await Haptics.impact({ style: ImpactStyle.Light });
        } catch (error) {
          console.log('Haptics not available');
        }
      }
    }
  }

  private async simulateLogin(username: string, password: string): Promise<void> {
    // 실제 환경에서는 여기서 API 호출
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 테스트용 로그인 (실제로는 API 응답 확인)
        if (username === 'admin' && password === 'password') {
          resolve();
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1500);
    });
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['확인']
    });
    await alert.present();
  }

  private async showToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'top'
    });
    await toast.present();
  }
}
