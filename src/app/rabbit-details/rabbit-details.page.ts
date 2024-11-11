import { Component } from '@angular/core';

@Component({
  selector: 'app-rabbit-details',
  templateUrl: './rabbit-details.page.html',
  styleUrls: ['./rabbit-details.page.scss'],
})
export class RabbitDetailsPage {

  rabbits = [
    {
      name: 'Bunny',
      description: 'Bunny is an active and playful rabbit, always hopping around looking for new adventures.',
      imageUrl: 'assets/bunny.jpg', // Change image paths accordingly
      isFriendly: true,
      isVaccinated: true,
      isNeutered: false,
      link: 'bunny'
    },
    {
      name: 'Pepper',
      description: 'Pepper is a quiet and shy rabbit who enjoys being in a calm and quiet environment.',
      imageUrl: 'assets/pepper.jpg',
      isFriendly: true,
      isVaccinated: false,
      isNeutered: true,
      link: 'pepper'
    },
    {
      name: 'Nibbles',
      description: 'Nibbles loves to chew on carrots and hay. She is a curious rabbit who enjoys exploring.',
      imageUrl: 'assets/nibbles.jpg',
      isFriendly: false,
      isVaccinated: true,
      isNeutered: false,
      link: 'nibbles'
    }
  ];

  // Initialization logic can go here, if needed
}
