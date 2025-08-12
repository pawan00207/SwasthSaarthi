import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-cta26',
  templateUrl: 'cta26.component.html',
  styleUrls: ['cta26.component.css'],
})
export class CTA26 {
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('action1')
  action1: TemplateRef<any>
  constructor() {}
}
