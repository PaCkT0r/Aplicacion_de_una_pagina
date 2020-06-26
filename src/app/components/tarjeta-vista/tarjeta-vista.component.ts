import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta-vista',
  templateUrl: './tarjeta-vista.component.html',
  styleUrls: ['./tarjeta-vista.component.css']
})
export class TarjetaVistaComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number;

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
    // console.log(  this.index );
   this._router.navigate( ['/heroe', this.index] );
   // this.heroeSeleccionado.emit( this.index );
  }

}
