import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    FormsModule, 
    UsuarioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nome = 'mundo';
  frutas = ['maça','uva','laranja'];
  fruta = '';

  alterarFruta() {
    this.frutas.push(this.fruta)
    this.fruta = 'Variavel Alterada';
  }
}
