import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { UserService } from '../../../shared/data-access-user';
@Component({
  selector: 'ng-mf-root',
  template: `
    <div class="dashboard-nav">Admin Dashboard</div>
    <div *ngIf="isLoggedIn$ | async; else signIn">
      You are authenticated so you can see this content.
    </div>
    <ng-template #signIn><router-outlet></router-outlet></ng-template>
  `,
})
export class AppComponent implements OnInit {
  isLoggedIn$ = this.userService.isUserLoggedIn$;
  constructor(private userService: UserService, private router: Router) {}
  ngOnInit() {
    console.log("--init")
    this.isLoggedIn$
      .pipe(distinctUntilChanged())
      .subscribe(async (loggedIn: boolean) => {
        if (!loggedIn) {
          this.router.navigateByUrl('login');
        } else {
          this.router.navigateByUrl('');
        }
      });
  }
}
