export class TypeOrganisme {
  id: number;
  label: string;
  backup:TypeOrganisme;

  static clone(toClone: TypeOrganisme): TypeOrganisme {
    let typeOrganisme = new TypeOrganisme();
    typeOrganisme.id = toClone.id;
    typeOrganisme.label = toClone.label;
    return typeOrganisme;
  }
}
