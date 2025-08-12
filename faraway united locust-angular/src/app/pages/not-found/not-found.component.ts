import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'not-found',
  templateUrl: 'not-found.component.html',
  styleUrls: ['not-found.component.css'],
})
export class NotFound {
  constructor(private title: Title) {
    this.title.setTitle('404 - Not Found')
  }
}
