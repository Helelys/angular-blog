import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTitleComponent } from './components/menu-title/menu-title.component'
import { MenuBarComponent } from './components/menu-bar/menu-bar.component'
import { HomeComponent } from './pages/home/home.component'
import { BigCardComponent } from './components/big-card/big-card.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuTitleComponent,
    MenuBarComponent,
    HomeComponent,
    BigCardComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blog';
}
