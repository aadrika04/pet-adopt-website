import { Component } from '@angular/core';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.page.html',
  styleUrls: ['./dog-details.page.scss'],
})
export class DogDetailsPage {
  // Array of pet objects
  pets = [
    {
      name: 'Rocky',
      description: 'Rocky is cool. He likes to make friends unlike others. He’s looking for a new home.',
      imageUrl: 'assets/images/rocky.jpeg',
      tags: ['Friendly', 'Neutered', 'Vaccinated'],
      link: 'rocky' // Link used for navigation
    },
    {
      name: 'Bella',
      description: 'Bella is playful and curious. Loves salmon and is looking for a cozy place to call home.',
      imageUrl: 'assets/images/bella.jpg', 
      tags: ['Friendly', 'Vaccinated'],
      link: 'bella'
    },
    {
      name: 'Fluffy',
      description: 'Fluffy is calm and affectionate. She loves to cuddle and is looking for a peaceful home.',
      imageUrl: 'assets/images/fluffi.jpg',
      tags: ['Friendly', 'Not Neutered', 'Vaccinated'],
      link: 'fluffy'
    }
  ];

  // Method to handle navigation to the adopt page for each pet
  adoptPet(link: string) {
    // Navigate to the adopt page based on pet link
    // Example: ['/adopt', link]
    console.log(`Navigating to adopt ${link}`);
  }
}
