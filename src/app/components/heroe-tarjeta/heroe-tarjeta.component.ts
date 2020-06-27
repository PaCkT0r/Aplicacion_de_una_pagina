import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  //evnto que va a escuchar

  @Output() heroeSeleccionado = new EventEmitter<number>();

  constructor(private router: Router) { 
    //this.heroeSeleccionado = new EventEmitter();
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  verHeroe(){
   // console.log(  this.index );
   this.router.navigate( ['/heroe', this.index] );
   // this.heroeSeleccionado.emit( this.index );

   //Uso de output
   //this.heroeSeleccionado.emit(this.index);
  }

}
