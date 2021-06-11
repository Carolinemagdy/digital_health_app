import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  constructor(private platform    : Platform,
              private splashScreen: SplashScreen,
              private statusBar   : StatusBar) 
  {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Home",
        url   : "/tabs/tab1",
        icon  : "home"
      },
      {
        title : "profile",
        url   : "/profile",
        icon  : "person-circle-outline"
      },
      {
        title : "Consultation",
        url   : "/consultation",
        icon  : "desktop-outline"
      },
      {
        title : "My Diet",
        url   : "/my",
        icon  : "logo-apple"
      },
     

    ]
  }
}