import { Routes } from '@angular/router';
import { PrimeiroComponenteComponent } from './components/primeiro-componente/primeiro-componente.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { TwoWayComponent } from './components/two-way/two-way.component';

export const routes: Routes = [
    {path: "", component: PrimeiroComponenteComponent },
    {path: "livros", component: ListRenderComponent },
    {path: "livros-mais-emprestados", component: TwoWayComponent } //nao pode conter a barra
    
];
