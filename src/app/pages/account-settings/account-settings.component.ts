import { Component, OnInit, Inject } from "@angular/core";
import { SettingsService } from "../../services/service.index"

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  constructor(public _settings: SettingsService) {}

  ngOnInit() {
    this.initCheck();
  }

  changeTheme(theme: string, link: any) {
    this.applyCheck(link);
    this._settings.applyTheme(theme);
  }

  initCheck() {
    let selectors: any = document.getElementsByClassName("selector");
    let theme  =this._settings.settings.theme;
    for (let selector of selectors) {
      if(theme === selector.getAttribute('data-theme')){
        selector.classList.add('working');
        break;
      }
    }
  }

  applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName("selector");
    for (let selector of selectors) {
      selector.classList.remove("working");
    }
    link.classList.add("working");
  }
}
