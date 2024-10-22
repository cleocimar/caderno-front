import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../app/services/usuario.service';
import { Usuario } from '../app/models/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  providers: [UsuarioService],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  usuarioList: Usuario[] = [] ;
  
  constructor(private usuarioService: UsuarioService){   

  }  

  // Implementação do <onInit()>
  ngOnInit(): void {
      this.getAll();
  }

  getAll(){
      
    // Uando uma Função Anônima "response => {}"
    this.usuarioService.getAll().subscribe(response => {  //subcribe equivalente ao then.
      this.usuarioList = response;                              
    });
  }
}


