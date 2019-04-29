export class User {
  id: number;
  email = '';
  password = '';
  cPassword = '';
  first_name = '';
  last_name = '';
  phone: number;
  cin: number;
  num_ins: number;
  status: number;


  isValid() {
    return (this.first_name !== ''
      && this.last_name !== ''
      && this.email !== ''
      && this.cin
      && this.phone
      && this.password.length >= 6
      && this.cPassword === this.password
      && this.cPassword.length >= 6
      && this.phone && this.validEmail());
  }

  validEmail() {
    const re = /\S+@\S+\.\S+/;
    return re.test(this.email);
  }
}
