import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-features25',
  templateUrl: 'features25.component.html',
  styleUrls: ['features25.component.css'],
})
export class Features25 {
  @ContentChild('feature3Description')
  feature3Description: TemplateRef<any>
  @Input()
  feature1ImgAlt: string = 'AI Symptom Checker Image'
  @ContentChild('feature1Description')
  feature1Description: TemplateRef<any>
  @Input()
  feature3ImgAlt: string = 'Medicine Delivery Image'
  @ContentChild('feature2Title')
  feature2Title: TemplateRef<any>
  @ContentChild('feature1Title')
  feature1Title: TemplateRef<any>
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1556219845-95c1847629e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4Mnw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1564346340269-7af57915a865?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4M3w&ixlib=rb-4.1.0&q=80&w=1080'
  @ContentChild('feature2Description')
  feature2Description: TemplateRef<any>
  @ContentChild('feature3Title')
  feature3Title: TemplateRef<any>
  @Input()
  feature2ImgAlt: string = 'Telemedicine Consultations Image'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1626200115283-4c0c73f0f4f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4Nnw&ixlib=rb-4.1.0&q=80&w=1080'
  activeTab: number = 0
  constructor() {}
}
