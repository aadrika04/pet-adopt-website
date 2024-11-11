import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.page.html',
  styleUrls: ['./pet-list.page.scss'],
})
export class PetListPage  {
  pets = [
    {
      name: 'Rocky',
      description: 'Rocky is cool. He likes to make friends unlike others. He’s looking for a new home.',
      imageUrl: 'assets/images/rocky.jpeg',  // Ensure this path is correct
      tags: ['Friendly', 'Neutered', 'Vaccinated'],
      link: 'rocky'  // Prefer lowercase for routing
    },
    {
      name: 'Bella',
      description: 'Bella is playful and curious. Loves salmon and is looking for a cozy place to call home.',
      imageUrl: 'assets/images/mittens.png',  // Ensure this path is correct
      tags: ['Friendly', 'Vaccinated'],
      link: 'bella'  // Prefer lowercase for routing
    },
    {
      name: 'Fluffy',
      description: 'Fluffy is calm and affectionate. She loves to cuddle and is looking for a peaceful home.',
      imageUrl: 'assets/images/fluffy.png',  // Ensure this path is correct
      tags: ['Friendly', 'Not Neutered', 'Vaccinated'],
      link: 'fluffy'  // Prefer lowercase for routing
    }
  ];
}
  
  

