import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// Module imports
import { GlobalNavModule } from './shared/global-nav';

// Comonent imports
import { GlobalNavComponent } from './shared/global-nav/global-nav.component';

// Component exports
export { GlobalNavComponent } from './shared/global-nav/global-nav.component';

// Module exports
export { GlobalNavModule } from './shared/global-nav';
/**
 * `ComponentModule` is the main component module for the library
 */
@NgModule({
  declarations: [
  ],
  /**
   * Import Component Modules
   */
  imports: [
    GlobalNavModule
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
  ],
  exports: [
    GlobalNavComponent,
    GlobalNavModule
  ],
})
export class ComponentModule {}
