import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-contact10',
  templateUrl: 'contact10.component.html',
  styleUrls: ['contact10.component.css'],
})
export class Contact10 {
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  location2ImageSrc: string =
    'https://images.unsplash.com/photo-1558784019-0dade423278b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  location1ImageSrc: string =
    'https://images.unsplash.com/photo-1654856470316-d211472bd107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4Mnw&ixlib=rb-4.1.0&q=80&w=1080'
  @ContentChild('location1Description')
  location1Description: TemplateRef<any>
  @Input()
  location2ImageAlt: string = 'image2Alt'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('location2Description')
  location2Description: TemplateRef<any>
  @Input()
  location1ImageAlt: string = 'image1Alt'
  @ContentChild('location1')
  location1: TemplateRef<any>
  @ContentChild('location2')
  location2: TemplateRef<any>
  constructor() {}
}
