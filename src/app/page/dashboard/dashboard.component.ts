import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @Input() contentHearder: any;
  public listSubMenu: boolean = false;
  public subMenu: any;

  constructor() { }

  ngOnInit(): void {

  }

  changeContentMenu(str) {
      this.contentHearder = str;
      this.subMenu = '';
      if (str === 'contents' && !this.listSubMenu) {
          this.listSubMenu = true;
      } else if (str === 'contents' && this.listSubMenu) {
          this.listSubMenu = false;
      } else {
          this.listSubMenu = false;
      }
  }

  changeSubMenu(str) {
      this.subMenu = str;
      this.contentHearder = 'contents';
  }
}
