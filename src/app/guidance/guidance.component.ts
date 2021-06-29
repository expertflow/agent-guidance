import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guidance',
  templateUrl: './guidance.component.html',
  styleUrls: ['./guidance.component.scss']
})
export class GuidanceComponent implements OnInit {
  panelOpenState = false;
  displayOptions = false;
  message = '';
  constructor() { }

  ngOnInit(): void {
  }
  searchQuery(){
    if(this.message.length > 0){
      this.displayOptions = true;
    }
  }

}
