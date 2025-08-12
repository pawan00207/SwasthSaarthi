import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-steps2',
  templateUrl: 'steps2.component.html',
  styleUrls: ['steps2.component.css'],
})
export class Steps2 {
  @ContentChild('step1Description')
  step1Description: TemplateRef<any>
  @ContentChild('step3Description')
  step3Description: TemplateRef<any>
  @ContentChild('step2Title')
  step2Title: TemplateRef<any>
  @ContentChild('step2Description')
  step2Description: TemplateRef<any>
  @ContentChild('step1Title')
  step1Title: TemplateRef<any>
  @ContentChild('step3Title')
  step3Title: TemplateRef<any>
  @ContentChild('step4Description')
  step4Description: TemplateRef<any>
  @ContentChild('step4Title')
  step4Title: TemplateRef<any>
  constructor() {}
}
