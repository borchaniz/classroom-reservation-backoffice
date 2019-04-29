import {Component, OnInit} from '@angular/core';
import {Consts} from '../shared/Consts';
import {UserService} from '../shared/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem(Consts.TOKEN_STORAGE) || !localStorage.getItem(Consts.USER_STORAGE)) {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    }
    this.userService.getAuthUser().subscribe(data => {
    }, error1 => {
      localStorage.clear();
      this.router.navigateByUrl('/login');
    });
  }

  disconnect() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
