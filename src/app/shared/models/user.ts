
export class User {
  id: number;
  email = '';
  password = '';
  cPassword = '';
  first_name = '';
  last_name = '';
  phone: number;


  isValid() {
    return (this.first_name !== ''
      && this.last_name !== ''
      && this.email !== ''
      && this.password.length >= 6
      && this.cPassword === this.password
      && this.phone && this.validEmail());
  }

  validEmail() {
    const re = /\S+@\S+\.\S+/;
    return re.test(this.email);
  }
}
