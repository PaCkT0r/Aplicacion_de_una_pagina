import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroe.services';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private _heroesService:HeroesService, private _router:Router) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

    console.log(this.heroes);
  }
  /* Este metodo es una forma para poder cajar rutas con parametros mediante un metodo en el boton
  (forma programatica, otra se encuentra en el heroes.component.html utilizando la propiedad del 
    ngFor)*/
  verHeroe(idx:number){
    //console.log(idx);
    this._router.navigate(['/heroe',idx]);
  }

}
