import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare function loginModal(): any;

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }
  public ngOnInit(): void {
    loginModal();
  }
  useLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.translate.use(language);
  }
}
