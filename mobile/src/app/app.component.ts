import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'TabsPage';

  activePage: any;
  pages: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    this.pages = [
      {title: 'Home', icon: 'home', component: 'HomePage', index: 0},
      {title: 'About', icon: 'person', component: 'AboutPage', index: 1},
      {title: 'Contact', icon: 'information-circle', component: 'ContactPage', index: 2},
    ];

    this.activePage = this.pages[0];


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


  openPage(page) {
    let params = {};

    this.activePage = page;

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    if (page.index) {
      params = {tabIndex: page.index};
    }

    if (page.component == 'LoginPage') {
      this.nav.push('LoginPage');
      this.activePage = this.pages[0];
      this.checkActive(this.pages[0])
    }

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
      // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot(page.title, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  //Higlight tab on sidemenu
  checkActive(page) {
      return page == this.activePage;
  }


}
