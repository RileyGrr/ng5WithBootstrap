import { Component } from '@angular/core';
import uiBootstrap from 'angular-ui-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'topMenu',
  templateUrl: './topMenu.component.html',
  styleUrls: ['./topMenu.component.scss'],
  providers: [NgbModal]
})

export class TopMenuComponent {
  topMenuTabData = {
    id:4201,
    'results':[
     {
        'id': 1,
        'rows': '多年离别后',
        'time': 1511334511000,
        'num': 12,
        'read': true,
     },
     {
        'id': 2,
        'rows': '抑或再相逢',
        'time': 1511334511000,
        'num': 3,
        'read': true,
     },
     {
        'id': 3,
        'rows': '相逢何所语',
        'time': 1511334511000,
        'num': 67,
        'read': true,
     },
     {
        'id': 4,
        'rows': '泪流默无声',
        'time': 1511334511000,
        'num': 5,
        'read': true,
     },
    ]
  };
  tabIndex = 0;
  Tab_topMenu(index) {
    this.tabIndex = index;
    console.log(index);
  };

}
