import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FronteggAppOptions } from '@frontegg/types';
import { FronteggAppOptionsClass, FronteggAppService } from './frontegg-app.service';
import { FronteggComponent } from './frontegg.component';
import { FronteggLoadGuard } from './guards/frontegg-load.guard';
import { FronteggAuthGuard } from './guards/frontegg-auth.guard';
import { FronteggAuthService } from './frontegg-auth.service';
import { AuthorizedContentDirective } from './directives/authorized-content.directive';
import { FronteggSubscriptionService } from './frontegg-subscription.services';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [FronteggComponent, AuthorizedContentDirective],
  exports: [FronteggComponent, AuthorizedContentDirective],
})
export class FronteggAppModule {
  static forRoot(config: FronteggAppOptions): ModuleWithProviders<FronteggAppModule> {
    return {
      ngModule: FronteggAppModule,
      providers: [
        FronteggAppService,
        FronteggAuthGuard,
        FronteggLoadGuard,
        FronteggAuthService,
        FronteggSubscriptionService,
        {
          provide: FronteggAppOptionsClass,
          useValue: config,
        },
      ],
    };
  }
}
