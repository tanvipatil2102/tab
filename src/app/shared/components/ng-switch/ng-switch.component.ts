import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';
import { tabArr } from '../../const/tab';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.scss']
})
export class NgSwitchComponent implements OnInit {

  selectedSkill : string = 'html';

  tabData : Array<Itab> = tabArr

  constructor() { }

  ngOnInit(): void {
  }

}
