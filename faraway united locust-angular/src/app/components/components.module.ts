import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { CTA26 } from './cta26/cta26.component'
import { Footer4 } from './footer4/footer4.component'
import { Pricing14 } from './pricing14/pricing14.component'
import { Steps2 } from './steps2/steps2.component'
import { Testimonial17 } from './testimonial17/testimonial17.component'
import { Features24 } from './features24/features24.component'
import { Navbar8 } from './navbar8/navbar8.component'
import { Contact10 } from './contact10/contact10.component'
import { Hero17 } from './hero17/hero17.component'
import { Features25 } from './features25/features25.component'

@NgModule({
  declarations: [
    CTA26,
    Footer4,
    Pricing14,
    Steps2,
    Testimonial17,
    Features24,
    Navbar8,
    Contact10,
    Hero17,
    Features25,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CTA26,
    Footer4,
    Pricing14,
    Steps2,
    Testimonial17,
    Features24,
    Navbar8,
    Contact10,
    Hero17,
    Features25,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
