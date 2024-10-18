import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Usuario {
  email: string;
  nome: string;
  apelido: string;
  senha: string;
  perfil: string;
}

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent implements OnInit {

  usuarioList: Usuario[] = [] ;
  url = 'http://localhost:8000/api/caderno/usuario/';   // A mesma chamada do INSOMNIA

  constructor(private http: HttpClient){   
    // ***************************************************
    // Essa é a injeção de dependência
    // Instancia a classe automaticamente
    // ***************************************************
    // let usuario = new Usuario();
    // usuario.email = "paulo.vieira@gmail.com";
    // usuario.nome = "Paulo Vieira";
    // usuario.apelido = "Paulo";
    // usuario.senha = "123456";
    // usuario.perfil = "I" // (I) Instrutor (P) Participante
    }  

    // Implementação do <onInit()>
    ngOnInit(): void {
        this.getAll();
    }

    getAll(){
       
      // Uando uma Função Anônima "response => {}"
      this.http.get<Usuario[]>(this.url).subscribe(response => {  //subcribe equivalente ao then.
        this.usuarioList = response;                              
      });
    }
}


