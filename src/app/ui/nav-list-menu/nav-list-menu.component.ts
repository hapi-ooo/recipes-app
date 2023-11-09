import { Component, OnInit } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-nav-list-menu',
  templateUrl: './nav-list-menu.component.html',
  styleUrls: ['./nav-list-menu.component.scss']
})
export class NavListMenuComponent implements OnInit {
  recipes: string[] = [];

  onRouterLinkActive(event: any) {
    console.log(event);
    document.querySelector('.activelink-parent')?.classList.remove('activelink-parent');
    document.querySelector('.activelink')?.parentElement?.classList.add('activelink-parent');
  }


  /*
    constructor(public router: Router) {}
    this.router.events
  .pipe(
    filter((e: Event | RouterEvent): e is RouterEvent => e instanceof RouterEvent))
    .subscribe((e: RouterEvent) => {
    });
    */
  ngOnInit(): void {
    for(let i = 0; i < 50; i++) {
      this.recipes.push('recipe'+(i+1));
    }
  }
}
