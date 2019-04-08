import {TypeSalle} from './type-salle';

export class Salle{
  id: number = 0;
  number: number = 0;
  capacity: number = 0;
  has_projector: number;
  type_salle: TypeSalle = new TypeSalle();
  type_salle_id:number = 0;

  static PROJECTOR_AVAILIBLE={has_projector:1,label:"Disponible"};
  static PROJECTOR_UNAVAILIBLE={has_projector:0,label:"Non Disponible"};
}
