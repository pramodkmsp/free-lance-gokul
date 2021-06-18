import {
  ChangeDetectorRef,
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currentUser: string;
  role: string;
  router: string;
  constructor(
    private route: ActivatedRoute,
    public _router: Router,
    private ref: ChangeDetectorRef
  ) {
    this.ref.markForCheck();
    this.role = localStorage.getItem('manager_title');
    this.currentUser = localStorage.getItem('manager_name');
    if (this.currentUser || this.role) {
      this.currentUser =
        this.currentUser.charAt(0).toUpperCase() + this.currentUser.slice(1);
      this.role = this.role.charAt(0).toUpperCase() + this.role.slice(1);
    }
  }

  ngOnInit() {}
  onLogOutClick() {
    this.currentUser = null;
    this.role = null;
    localStorage.clear();
    this._router.navigateByUrl('/');
  }
}
