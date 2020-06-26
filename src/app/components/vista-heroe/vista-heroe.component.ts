import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroe.services';



@Component({
  selector: 'app-vista-heroe',
  templateUrl: './vista-heroe.component.html',
  styleUrls: ['./vista-heroe.component.css']
})
export class VistaHeroeComponent implements OnInit {

  heroe:any[] =[];
  termino:string;

  constructor( private _activatedRouter:ActivatedRoute,
               private _heroesService:HeroesService) { 
   }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroe = this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroe);
    });
  }

}
