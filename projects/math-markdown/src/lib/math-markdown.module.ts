import { NgModule } from '@angular/core';
import { MathMarkdownComponent } from './math-markdown.component';
import { MathMarkdownDirective } from './math-markdown.directive';


@NgModule({
  declarations: [
    MathMarkdownDirective
  ],
  imports: [
  ],
  exports: [
    MathMarkdownDirective
  ]
})
export class MathMarkdownModule { }
