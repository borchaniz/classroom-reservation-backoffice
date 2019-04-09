export class TypeSalle {
  id: number = 0;
  label: String = '';
  backup: TypeSalle;

  static clone(toClone: TypeSalle): TypeSalle {
    let typeSalle = new TypeSalle();
    typeSalle.id = toClone.id;
    typeSalle.label = toClone.label;
    return typeSalle;
  }
}
