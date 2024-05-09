import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, forwardRef, inject, Injectable, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { Form, FormBuilder, FormGroup, ReactiveFormsModule, Validators, FormControlName, NgControl, FormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from '../../../environment/environment';
import { CommonModule } from '@angular/common';
import { NgxStarsComponent, NgxStarsModule } from 'ngx-stars';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn:'root'
})
@Component({
  selector: 'app-create-movies',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgxStarsModule, FormsModule, NgbRatingModule ],
  templateUrl: './create-movies.component.html',
  styleUrl: './create-movies.component.css',
  schemas:[NO_ERRORS_SCHEMA],

})
export class CreateMoviesComponent {
  rangeValue: number;
hour: string ;
rating: number = 0;

  constructor() {
    this.rangeValue = 0; // Set initial value
    this.hour = "hour"
  }


   genres: string[] = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film-Noir",
    "History",
    "Horror",
    "Music",
    "Musical",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "War",
    "Western",
    "Superhero",
    "Mockumentary",
    "Slasher",
    "Zombie",
    "Spy",
    "Supernatural",
    "Psychological",
    "Experimental",
    "Cyberpunk",
    "Apocalyptic",
    "Post-apocalyptic",
    "Neo-noir",
    "Satire",
    "Parody",
    "Space opera",
    "Swashbuckler",
    "Gangster",
    "Road movie",
    "Surreal",
    "Existential",
    "Political",
    "Fairy tale",
    "Erotic",
    "Historical fantasy",
    "Steampunk",
    "Vampire",
    "Werewolf",
    "Kaiju",
    "Monster",
    "Time travel",
    "Alien",
    "Robot",
    "Dystopian",
    "Utopian",
    "Coming-of-age",
    "Courtroom drama",
    "Heist",
    "Neo-Western",
    "Survival",
    "Adventure comedy",
    "Romantic comedy",
    "Teen",
    "Cult",
    "Buddy",
    "Chick flick",
    "Black comedy",
    "Gothic",
    "Environmental",
    "Biblical",
    "Revisionist western",
    "Tragedy",
    "Silent",
    "Martial arts",
    "Exploitation",
    "Stop motion",
    "Found footage",
    "Body horror",
    "Puppetry",
    "Computer animation",
    "Time loop",
    "Space western",
    "Musical comedy",
    "Opera",
    "Kung fu",
    "Science fantasy",
    "Social drama",
    "Ethnographic",
    "Prison",
    "Political thriller",
    "Road comedy",
    "Mumblecore",
    "Military",
    "Mockbuster",
    "Bromantic comedy",
    "Serial killer",
    "Horror comedy",
    "Disaster",
    "Romantic drama",
    "Animal",
    "Terrorism",
    "Erotic thriller",
    "Body swap",
    "Fantasy comedy",
    "Tragicomedy",
    "Splatter",
    "Giallo",
    "Noir",
    "Adventure drama",
    "War comedy",
    "Social thriller",
    "Coming-of-age drama",
    "Sword and sorcery",
    "Anthology",
    "Historical drama",
    "Sports drama",
    "Screwball comedy",
    "Bollywood",
    "Jidaigeki",
    "Shakespearean",
    "Clay animation",
    "Reboot",
    "Space horror",
    "Biographical",
    "Space adventure",
    "Road thriller",
    "Political satire",
    "Supermarionation",
    "Rape and revenge",
    "Retro",
    "Cyber thriller",
    "Action comedy",
    "Action thriller",
    "Family drama",
    "Experimental film",
    "Adventure horror",
    "Feminist",
    "Sexploitation",
    "Sci-Fi horror",
    "Space opera",
    "Natural horror",
    "Space adventure",
    "Splatterpunk",
    "Creature feature",
    "Disaster film",
    "Historical horror",
    "Ninja",
    "Opera",
    "Operetta",
    "Period drama",
    "Revisionist fairy tale",
    "Space comedy",
    "Swashbuckler",
    "Techno-thriller",
    "Vampire comedy",
    "Cyberpunk",
    "Slasher comedy",
    "Musical fantasy",
    "Epic",
    "Dark comedy",
    "Disaster comedy",
    "Family adventure",
    "Musical drama",
    "Sword and planet",
    "Whodunit",
    "Arthouse",
    "Historical romance",
    "Sword and sorcery",
    "Swashbuckler",
    "Historical adventure",
    "Tragicomedy",
    "Political drama",
    "Comedy horror",
    "Mystery thriller",
    "Sci-Fi thriller",
    "Dystopian thriller",
    "Eco-horror",
    "Epic fantasy",
    "Fantasy adventure",
    "Fantasy drama",
    "Fantasy horror",
    "Fantasy thriller",
    "Future noir",
    "Ghost story",
    "Gothic horror",
    "Gross out",
    "Haunted house",
    "Lovecraftian",
    "Mystery comedy",
    "Occult detective",
    "Philosophical",
    "Psychological thriller",
    "Retro-futurism",
    "Satirical",
    "Space western",
    "Steampunk",
    "Supernatural horror",
    "Survival horror",
    "Time travel comedy",
    "Time travel thriller",
    "Vampire thriller",
    "Werewolf thriller",
    "Western comedy",
    "Wuxia",
    "Zombie comedy",
    "Zombie drama",
    "Zombie thriller"
];




  onInputChange(event: any) {
    this.rangeValue = event.target.value;
    this.time();
  } 

  form!: FormGroup;
  formBuilder = inject(FormBuilder);
  httpClient = inject(HttpClient);
  router = inject(Router);
  ratingControl = new FormControl(0);
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      year: ['', [Validators.required]],
      rating: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      genre: ['', [Validators.required]],
    });
  }
   time(){
    if (this.rangeValue > 1) {
      this.hour = "hours"
    }else{
      this.hour = "hour"
    }
   }
  
  onSave() {
    this.httpClient.post(`${environment.baseApiUrl}/movies`, this.form.value).subscribe({
      next: (data) => {
        this.router.navigate(['display']);
      },
      error: () => {
        alert('Fill All The Categories')
        throw new Error('Method not implemented.');
      }
    });
}



}