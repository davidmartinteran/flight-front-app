import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private readonly translateService: TranslateService){
    const locale = localStorage.getItem('language');
    this.translateService.use(locale!);
  }
}
