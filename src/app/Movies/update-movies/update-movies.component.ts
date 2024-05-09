import { Component, Input, OnInit, inject } from '@angular/core';
import { environment } from '../../../environment/environment';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-movies',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, NgbRatingModule],
  templateUrl: './update-movies.component.html',
  styleUrl: './update-movies.component.css'
})
export class UpdateMoviesComponent implements OnInit{
  a = 9;
  constructor() {
    this.rangeValue = 0; // Set initial value
    this.hour = "hour"

  }


  @Input() id: string ='';
  @Input() created_at : string ='';

  rangeValue: number;
  hour: string ;
  rating: number = 0;



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
    this.httpClient.get(`${environment.baseApiUrl}/movies/${this.id}`).subscribe({
      next: (data: any) => {
        delete data.id;
        delete data.created_at;
        this.form.setValue(data);
      },
      error: () => {
        alert('There was an error!');
      }
    });
 
 
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
  
  
     time(){
      if (this.rangeValue > 1) {
        this.hour = "hours"
      }else{
        this.hour = "hour"
      }
     }

  onUpdate(){
    this.httpClient.put(`${environment.baseApiUrl}/movies/${this.id}`, this.form.value).subscribe({
      next: (data) =>{
        this.router.navigate(['display']);
      },
      error:() =>{
        alert('It doesnt work fuck');
        throw new Error('Update No Work')
      }
    })
  }
 
}


