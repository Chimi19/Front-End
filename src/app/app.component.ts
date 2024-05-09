import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./Movies/nav/nav.component";
import { HomeComponent } from './Movies/home/home.component';
import { AppModule } from './app.module';
import { FooterComponent } from "./Movies/footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, HomeComponent, FooterComponent]
})

export class AppComponent {
  title = 'Front-End';
  pic: string = "src/assets/background.avif"
}
