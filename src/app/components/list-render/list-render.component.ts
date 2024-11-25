import { Component } from '@angular/core';
import { HttpserviceService } from '../../services/httpservice.service';
import { Livro } from '../../../Interface/Livro';

@Component({
  selector: 'app-list-render',
  imports: [],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {

  constructor(private service: HttpserviceService){
    this.getLivros()
  }

  livros: Livro[] = [];


    getLivros(): void{
    this.service.getAllLivros().subscribe((data) => {
      console.log('Dados recebidos:', data);
      this.livros = data;
    });
  }
}
