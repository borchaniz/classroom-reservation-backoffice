import {TypeSalle} from './type-salle';

export class Salle{
  id: number = 0;
  number: number = 0;
  capacity: number = 0;
  has_projector: number = 0;
  type_salle: TypeSalle = new TypeSalle();
  type_salle_id:number = 0;
}
