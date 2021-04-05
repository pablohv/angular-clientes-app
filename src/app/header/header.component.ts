import { Component } from "@angular/core";

//esto se registra en module.ts
@Component({
  selector: 'app-header',
  //se usa para poner codigo max 3 a 5 lineas
  //template: `

  //`
  //si se utilizan mas de lineas de codigo se pone lo siguiente, se tiene q crear un archivo html
  //con el nombre del componente
  templateUrl: './header.component.html'
})
export class HeaderComponent{

}
