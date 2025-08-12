import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features24',
  templateUrl: 'features24.component.html',
  styleUrls: ['features24.component.css'],
})
export class Features24 {
  @Input()
  feature1ImgAlt: string = 'AI symptom checker'
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1698516923132-b0236bc8f3ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1510391947036-00d38cc22ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature3ImgAlt: string = 'Medicine delivery'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1666330404750-061d4858593b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4Mnw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Telemedicine consultations'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  activeTab: number = 0
  constructor() {}
}
