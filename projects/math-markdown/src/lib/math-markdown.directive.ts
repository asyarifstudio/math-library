import { Directive, ElementRef, Input, OnChanges } from "@angular/core";
import { micromark } from 'micromark';
import { math,mathHtml } from 'micromark-extension-math';


@Directive({
    selector: "[math-markdown]",
    inputs: ["text"]
})
export class MathMarkdownDirective implements OnChanges {
    @Input() text!: string;

    constructor(private el: ElementRef<HTMLElement>) {

    }

    ngAfterContentInit(): void {
        //Called after ngOnInit when the component's or directive's content has been initialized.
        //Add 'implements AfterContentInit' to the class.
        if (!this.text) {
            this.el.nativeElement.innerHTML = micromark(this.el.nativeElement.innerHTML,{
                extensions:[math()],
                htmlExtensions:[mathHtml()]
            })
        }
    }

    ngOnChanges() {
        if (this.text) {
            this.el.nativeElement.innerHTML = micromark(this.el.nativeElement.innerHTML,
                {
                    extensions: [math()],
                    htmlExtensions: [mathHtml()]
                }
            )
        }
    }

}