import { NgModule } from '@angular/core';

// import Global Nav Component
import { GlobalNavComponent } from './global-nav.component';

/**
 * Global Nav Module
 */
@NgModule({
  declarations: [
    GlobalNavComponent
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
  ],
  /**
   * Export Components declared in this module
   */
  exports: [GlobalNavComponent]
})
export class GlobalNavModule {}
