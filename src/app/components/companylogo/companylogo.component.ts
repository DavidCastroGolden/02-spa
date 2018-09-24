import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-companylogo',
  templateUrl: './companylogo.component.html'
})
export class CompanylogoComponent {

  @Input()
  companyId:string;

  constructor() {
    
   }

}
