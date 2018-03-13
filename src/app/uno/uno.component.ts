import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../providers/servicio.service';
import { Tarea } from '../models/tarea';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit {

  id: number;
  tarea: Tarea;

  constructor( private servicio : ServicioService) {
    console.log('UnoComponent constructor')
    this.id = 0;
    this.tarea = new Tarea();
   }

  ngOnInit() {
  }

  buscarTarea(){
    console.log('UnoComponent buscarTarea %n', this.id);
    this.servicio.getTarea(this.id)
    .subscribe(
      data => {
        console.log('%o', data);
        this.tarea = data;
      }, error => {
        this.tarea.title = 'no existe tarea';
      }
    );
  }

}
