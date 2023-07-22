import { Component } from '@angular/core';

@Component({
  selector: 'app-middle-bar',
  templateUrl: './middle-bar.component.html',
  styleUrls: ['./middle-bar.component.scss']
})
export class MiddleBarComponent {
  boxElements = [
    { icon: 'group', firstPart: 'Put The', secondPart: 'Clients First' },
    { icon: 'group', firstPart: 'Put The', secondPart: 'Clients First' },
    { icon: 'group', firstPart: 'Put The', secondPart: 'Clients First' },
    
  ];

}
