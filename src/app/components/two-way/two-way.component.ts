import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpserviceService } from '../../services/httpservice.service';
import { Livro } from '../../../Interface/Livro';


@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {

  constructor(private service: HttpserviceService){
    this.getLivrosEmprestados()
  }

  livros: Livro[] = [];


  getLivrosEmprestados(): void{
    this.service.getLivrosEmprestados().subscribe((data) => {
      this.livros = data;
    });
  }


}
