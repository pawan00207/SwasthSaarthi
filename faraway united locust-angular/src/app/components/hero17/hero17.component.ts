import { Component, Input, ContentChild, TemplateRef } from '@angular/core'

@Component({
  selector: 'app-hero17',
  templateUrl: 'hero17.component.html',
  styleUrls: ['hero17.component.css'],
})
export class Hero17 {
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4MXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image8Alt: string = 'Hero Image'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1556231673-79c47d27cde0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4M3w&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image6Alt: string = 'Low-bandwidth optimization'
  @Input()
  image11Src: string =
    'https://images.unsplash.com/photo-1709634539435-f9fccaf0fda1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4NXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image5Alt: string = 'Multi-language support'
  @Input()
  image1Alt: string = 'AI-powered telehealth platform'
  @Input()
  image7Src: string =
    'https://images.unsplash.com/photo-1602343457704-131bcf6e21b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4Nnw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image7Alt: string = 'Integration with government and corporate programs'
  @Input()
  image12Alt: string = 'Hero Image'
  @Input()
  image2Alt: string = 'Telemedicine consultations'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1680009084520-42528e128a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4N3w&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image12Src: string =
    'https://images.unsplash.com/photo-1576132138123-e3dd4b4b233b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4N3w&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image3Alt: string = 'Medicine delivery'
  @Input()
  image9Src: string =
    'https://images.unsplash.com/photo-1538389400446-14fdb67e9000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4OHw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image11Alt: string = 'Hero Image'
  @ContentChild('action2')
  action2: TemplateRef<any>
  @ContentChild('action1')
  action1: TemplateRef<any>
  @Input()
  image8Src: string =
    'https://images.unsplash.com/photo-1656229818787-7d5a3b3cab6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4OHw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1569153336922-4d72d778735c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4OXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1493655161922-ef98929de9d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE4OXw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image10Alt: string = 'Hero Image'
  @Input()
  image4Alt: string = 'Mood-detecting mental wellness chatbot'
  @ContentChild('heading1')
  heading1: TemplateRef<any>
  @ContentChild('content1')
  content1: TemplateRef<any>
  @Input()
  image10Src: string =
    'https://images.unsplash.com/photo-1662284972119-b83a58515a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE5MHw&ixlib=rb-4.1.0&q=80&w=1080'
  @Input()
  image9Alt: string = 'Hero Image'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1594746214383-521df4590053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc1NTAxNDE5MXw&ixlib=rb-4.1.0&q=80&w=1080'
  constructor() {}
}
