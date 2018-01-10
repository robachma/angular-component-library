/**
 * Angular decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/**
 * Global Nav Component
 */
@Component({
  selector: 'global-nav',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './global-nav.component.scss'
  ],
  templateUrl: 'global-nav.component.html'
})
export class GlobalNavComponent implements OnInit {
  // tslint:disable-next-line:no-empty
  constructor( ) {}

  public ngOnInit() {
    console.log('Initial App State');
  }

}
