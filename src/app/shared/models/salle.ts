import {TypeSalle} from './type-salle';

export class Salle {
  id: number = 0;
  number: number = 0;
  capacity: number = 0;
  has_projector: number;
  type: TypeSalle = new TypeSalle();
  type_salle_id: number = 0;
  backup: Salle;

  static PROJECTOR_AVAILIBLE = {has_projector: 1, label: 'Disponible'};
  static PROJECTOR_UNAVAILIBLE = {has_projector: 0, label: 'Non Disponible'};

  static clone(toClone:Salle): Salle{
    let salle = new Salle();
    salle.id = toClone.id;
    salle.number = toClone.number;
    salle.capacity = toClone.capacity;
    salle.has_projector = toClone.has_projector;
    salle.type = toClone.type;
    salle.type_salle_id = toClone.type_salle_id;
    return salle;
  }
}
