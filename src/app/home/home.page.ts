import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonButton,
  IonButtons,
  IonMenuButton,
  IonList,
  IonItem,
  IonLabel,
  IonBadge,
  AlertController,
  ToastController,
  Platform
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

interface MenuItem {
  title: string;
  description: string;
  icon: string;
  route?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonButton,
    IonButtons,
    IonMenuButton,
    IonList,
    IonItem,
    IonLabel,
    IonBadge,
    CommonModule
  ],
})
export class HomePage implements OnInit {
  currentUser = '관리자';
  currentDate = new Date();
  isIOS = false;

  menuItems: MenuItem[] = [
    {
      title: '전자결재',
      description: '결재 문서 관리',
      icon: 'document-text-outline',
      route: '/approval'
    },
    {
      title: '일정관리',
      description: '개인/부서 일정',
      icon: 'calendar-outline',
      route: '/schedule'
    },
    {
      title: '게시판',
      description: '공지사항 및 게시판',
      icon: 'newspaper-outline',
      route: '/board'
    },
    {
      title: '조직도',
      description: '연구원 조직도',
      icon: 'people-outline',
      route: '/organization'
    },
    {
      title: '메일',
      description: '이메일 관리',
      icon: 'mail-outline',
      route: '/mail'
    },
    {
      title: '전화번호',
      description: '내선번호 안내',
      icon: 'call-outline',
      route: '/phone'
    }
  ];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private toastController: ToastController,
    private platform: Platform
  ) {
    this.isIOS = this.platform.is('ios');
  }

  ngOnInit() {
    // 저장된 사용자 정보 불러오기
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = savedUser;
    }
  }

  async navigateToMenu(menu: MenuItem) {
    // 햅틱 피드백 (iOS)
    if (this.isIOS) {
      try {
        await Haptics.impact({ style: ImpactStyle.Light });
      } catch (error) {
        console.log('Haptics not available');
      }
    }

    if (menu.route) {
      // 실제 구현에서는 해당 페이지로 이동
      this.showToast(`${menu.title} 메뉴는 준비 중입니다.`);
    }
  }

  async logout() {
    // 햅틱 피드백 (iOS)
    if (this.isIOS) {
      try {
        await Haptics.impact({ style: ImpactStyle.Medium });
      } catch (error) {
        console.log('Haptics not available');
      }
    }

    const alert = await this.alertController.create({
      header: '로그아웃',
      message: '정말 로그아웃 하시겠습니까?',
      buttons: [
        {
          text: '취소',
          role: 'cancel'
        },
        {
          text: '로그아웃',
          handler: () => {
            localStorage.removeItem('currentUser');
            this.router.navigate(['/login']);
          }
        }
      ]
    });
    await alert.present();
  }

  async openExternalUrl() {
    // 햅틱 피드백 (iOS)
    if (this.isIOS) {
      try {
        await Haptics.impact({ style: ImpactStyle.Light });
      } catch (error) {
        console.log('Haptics not available');
      }
    }

    // 외부 브라우저로 그룹웨어 웹사이트 열기
    const url = 'http://211.224.129.168:8085/ndgi/#/pages/login';
    window.open(url, '_blank');
  }

  async showNotification() {
    // 햅틱 피드백 (iOS)
    if (this.isIOS) {
      try {
        await Haptics.impact({ style: ImpactStyle.Light });
      } catch (error) {
        console.log('Haptics not available');
      }
    }

    const alert = await this.alertController.create({
      header: '알림',
      message: '새로운 공지사항이 3건 있습니다.',
      buttons: ['확인']
    });
    await alert.present();
  }

  async showSettings() {
    // 햅틱 피드백 (iOS)
    if (this.isIOS) {
      try {
        await Haptics.impact({ style: ImpactStyle.Light });
      } catch (error) {
        console.log('Haptics not available');
      }
    }

    const alert = await this.alertController.create({
      header: '설정',
      message: '설정 메뉴는 준비 중입니다.',
      buttons: ['확인']
    });
    await alert.present();
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    await toast.present();
  }
}
