import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';
import { tabArr } from '../../const/tab';

@Component({
  selector: 'app-tab-ng-for',
  templateUrl: './tab-ng-for.component.html',
  styleUrls: ['./tab-ng-for.component.scss']
})
export class TabNgForComponent implements OnInit {

  selectedSkill : string = 'html';

  tabData : Array<Itab> = tabArr;

  constructor() { }

  ngOnInit(): void {
  }

}
