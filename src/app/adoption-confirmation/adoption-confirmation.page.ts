import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adoption-confirmation',
  templateUrl: './adoption-confirmation.page.html', // Removed the space here
  styleUrls: ['./adoption-confirmation.page.scss'],
})
export class AdoptionConfirmationPage {
  petName: string | undefined; // Property to hold the pet name

  constructor(private route: ActivatedRoute) {
    // Get the pet name from route parameters
    this.route.queryParams.subscribe(params => {
      this.petName = params['name']; // Set the pet name
    });
  }
}
