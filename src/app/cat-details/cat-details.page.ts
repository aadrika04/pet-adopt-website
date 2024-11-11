import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.page.html',
  styleUrls: ['./cat-details.page.scss'],
})
export class CatDetailsPage  {

  cats = [
    {
      name: 'Whiskers',
      description: 'Whiskers is a playful and curious cat. She loves to explore and is looking for a new home.',
      imageUrl: 'assets/whiskers.jpg',  // Change image paths accordingly
      isFriendly: true,
      isVaccinated: true,
      isNeutered: false,
      link: 'whiskers'
    },
    {
      name: 'Mittens',
      description: 'Mittens is a calm and affectionate cat. She loves to cuddle and is looking for a peaceful home.',
      imageUrl: 'assets/mittens.jpeg',
      isFriendly: true,
      isVaccinated: true,
      isNeutered: true,
      link: 'mittens'
    },
    {
      name: 'Snowy',
      description: 'Snowy is adventurous and loves to climb. She is looking for a cozy place to call home.',
      imageUrl: 'assets/snowball.jpg',
      isFriendly: false,
      isVaccinated: true,
      isNeutered: false,
      link: 'snowball'
    }
  ];

 
  
    // Initialization logic can go here, if needed
  }

