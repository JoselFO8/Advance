import { Component } from '@angular/core';

@Component({ // Decorador
  selector: 'app-root', // Inyecta al html, en este caso directamente en el index
  templateUrl: './app.component.html', // Es el html del componente
  styleUrls: ['./app.component.scss'] // Hojas de estilo o diseño
})
export class AppComponent {
  title = 'Advance';
}
