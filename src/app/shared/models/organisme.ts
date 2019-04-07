import {TypeOrganisme} from './type-organisme';

export class Organisme {
  id: number;
  label: string;
  type: TypeOrganisme = new TypeOrganisme();
  type_id: number;
}
