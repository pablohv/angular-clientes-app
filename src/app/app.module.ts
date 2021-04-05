import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { FooterComponent } from './footer/footer.component';
//se importa en modulo creado anterior  que esta dentro del folder
import { HeaderComponent } from './header/header.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
//importar las rutas
import { RouterModule, Routes } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './clientes/form.component';
// este es para formularios
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'directivas', component: DirectivaComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'clientes/form', component: FormComponent },
  { path: 'clientes/form/:id', component: FormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    //despues se registra
    HeaderComponent,
    // se despliega el selector o componente en donde queremos q aparezca el contenido de la clase
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //forms angular
    FormsModule,
    //se pone la constante de las rutas
    RouterModule.forRoot(routes)
  ],
  //aqui van las clases de servicio
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
