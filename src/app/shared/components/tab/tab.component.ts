import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  selectedSkill : string = 'html';

  constructor() { }

  ngOnInit(): void {
  }
  onSkillClick(skill : string){
    this.selectedSkill = skill
  }

}
