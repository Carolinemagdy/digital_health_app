import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
twelvepm = [
{ name : 'Xithron', isChecked: false },
{ name: 'C retard', isChecked: false},
{ name: 'Zinctron', isChecked: false},
{ name: 'Ossofortin', isChecked: false},
{ name: 'Paracetamol', isChecked: false}
]
  constructor() { }

  ngOnInit() {
  }

}