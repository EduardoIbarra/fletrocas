import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, Tabs} from 'ionic-angular';
import {StoreService} from "../../services/store.service";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = 'HomePage';
  aboutRoot = 'AboutPage';
  contactRoot = 'ContactPage';
  @ViewChild(Tabs) tabRef: Tabs;

  constructor(public navCtrl: NavController, public storeService: StoreService) {
  }

  selectPageSideMenu() {
    this.storeService.sideMenuActivePage = this.tabRef.getSelected().root
  }
}
