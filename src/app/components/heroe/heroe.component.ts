import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroe.services';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private _activatedRoute:ActivatedRoute,
    private _heroesServices:HeroesService) { 
    this._activatedRoute.params.subscribe( params => {
      /*El id es por que en la ruta especificamos id si hubieramos especificado dirección
      tendriamos que ponerselo, esto tambien conlleva a solo traer el numero del id,
      por cuestiones de seguridad */
      console.log(params['id']);
      console.log(this.heroe);
      this.heroe = this._heroesServices.getHeroe(params['id']);
    });
   }

  ngOnInit(): void {
  }

}
