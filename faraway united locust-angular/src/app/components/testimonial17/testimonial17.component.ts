import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-testimonial17',
  templateUrl: 'testimonial17.component.html',
  styleUrls: ['testimonial17.component.css'],
})
export class Testimonial17 {
  @ContentChild('author2Position')
  author2Position: TemplateRef<any>
  @ContentChild('author1Position')
  author1Position: TemplateRef<any>
  @Input()
  author3Alt: string = 'Image of Amit Kumar'
  @ContentChild('author1Name')
  author1Name: TemplateRef<any>
  @Input()
  author1Src: string =
    'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @ContentChild('author3Name')
  author3Name: TemplateRef<any>
  @ContentChild('review2')
  review2: TemplateRef<any>
  @ContentChild('author2Name')
  author2Name: TemplateRef<any>
  @ContentChild('author4Position')
  author4Position: TemplateRef<any>
  @ContentChild('author4Name')
  author4Name: TemplateRef<any>
  @Input()
  author4Src: string =
    'https://images.unsplash.com/photo-1558898479-33c0057a5d12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  author1Alt: string = 'Image of Rajesh Patel'
  @Input()
  author2Src: string =
    'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  author3Src: string =
    'https://images.unsplash.com/photo-1518305860742-0d7119d4567f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4Mnw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  author2Alt: string = 'Image of Sunita Devi'
  @Input()
  author4Alt: string = 'Image of Priya Singh'
  @ContentChild('content1')
  content1: TemplateRef<any>
  @ContentChild('author3Position')
  author3Position: TemplateRef<any>
  @ContentChild('review1')
  review1: TemplateRef<any>
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('review3')
  review3: TemplateRef<any>
  @ContentChild('review4')
  review4: TemplateRef<any>
  constructor() {}
}
