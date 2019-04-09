import {TypeOrganisme} from './type-organisme';

export class Organisme {
  id: number;
  label: string;
  type: TypeOrganisme = new TypeOrganisme();
  type_organisme_id: number;
  backup: Organisme;

  static clone(toClone: Organisme) :Organisme {
    let organism = new Organisme();
    organism.id = toClone.id;
    organism.label = toClone.label;
    organism.type = toClone.type;
    organism.type_organisme_id = toClone.type_organisme_id;
    return organism;
  }
}
