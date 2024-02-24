import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

  @Input()
  photoContent:string = "https://cordierinvestimentos.com.br/wp-content/uploads/2020/09/placeholder.png"

  @Input()
  titleContent:string = "Title"

  @Input()
  textContet:string = "Text here"
}
