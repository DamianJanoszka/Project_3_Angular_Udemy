import { Component,
OnInit,
Input,
ViewEncapsulation,
SimpleChanges,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy,
ViewChild,
ElementRef,
ContentChild}
 from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy{
  @Input('srvElement') element: {type: string, name:string, content: string};
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  constructor() {
    console.log('constructor called!');
  }

  ngOnChanges(changes: SimpleChanges) {
  console.log("ngOnChanges called!")
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log(this.header.nativeElement.textContent)
  }

  ngDoCheck() {
  console.log('ngDoCheckCalled!')}

  ngAfterContentInit(){
    console.log('ngAfterContentInit Called')
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentCecked Called')
  }

    ngAfterViewInit(){
      console.log('ngAfterViewInit Called')
      console.log(this.header.nativeElement.textContent)
    }

    ngAfterViewChecked(){
      console.log('ngAfterViewChecked Called')
    }

    ngOnDestroy(){
    console.log('ngOnDestroy called!')}
}
