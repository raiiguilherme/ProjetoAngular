import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponenteComponent } from "./components/primeiro-componente/primeiro-componente.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { TwoWayComponent } from "./components/two-way/two-way.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-primeiro-app';
}
