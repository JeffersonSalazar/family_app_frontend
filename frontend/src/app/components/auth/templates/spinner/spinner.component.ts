import { Component } from '@angular/core';

// import spinnerService
import { SpinnerService } from 'src/app/services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})

export class SpinnerComponent {

  showSpinner = this.spinnerServ.spinner; // variable that save the value true or false

  // injections
  constructor(private spinnerServ: SpinnerService) { }

}
