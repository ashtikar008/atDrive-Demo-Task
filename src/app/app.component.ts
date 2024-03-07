import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-template';
  hideBar: boolean = true;
  openFilter: boolean = false;
  selectIndex: any = 0;
  
  tabSelected(i: any) {
    this.selectIndex = i;
    sessionStorage.setItem('selectedTab', i);
  }
}
