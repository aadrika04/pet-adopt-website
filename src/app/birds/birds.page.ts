import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-birds',
  templateUrl: './birds.page.html',
  styleUrls: ['./birds.page.scss'],
})
export class BirdsPage  {
  birds = [
    {
      name: 'Tweety',
      description: 'Tweety is a cheerful and curious bird. She loves to sing and is looking for a lively home.',
      imageUrl: 'assets/images/tweety.jpg',  // Example image
      isFriendly: true,
      isVaccinated: true,
      isTrained: true,
      link: 'tweety'
    },
    {
      name: 'Sky',
      description: 'Sky is a calm and affectionate bird. He enjoys flying around and loves being outdoors.',
      imageUrl: 'assets/images/sky.jpg',  // Example image
      isFriendly: true,
      isVaccinated: false,
      isTrained: true,
      link: 'sky'
    },
    {
      name: 'Feather',
      description: 'Feather is adventurous and loves to explore. She’s looking for a cozy and playful home.',
      imageUrl: 'assets/images/feather.jpg',  // Example image
      isFriendly: false,
      isVaccinated: true,
      isTrained: false,
      link: 'feather'
    }
  ];


  

}
