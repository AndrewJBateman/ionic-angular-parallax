import { Directive, ElementRef,  HostListener, Renderer2 } from "@angular/core";
import { DomController } from "@ionic/angular";

@Directive({
  selector: "[appParallaxHeader]",
})
export class ParallaxHeaderDirective {
  header: any;
  headerHeight: number = 0;
  moveImage: number = 0;
  scaleImage: number = 0;
  constructor(
    public element: ElementRef,
    public renderer: Renderer2,
    private domCtrl: DomController
  ) {}

  // get Home page element to be manipulated using 'getElementsByClassName' and take first item from list
  ngOnInit() {
    let content = this.element.nativeElement;
    console.log("content", content);
    this.header = content.getElementsByClassName("parallax-image")[0];

    this.domCtrl.read(() => {
      this.headerHeight = this.header.clientHeight;
      console.log("this.headerHeight", this.headerHeight); // 192
    });
  }

  // access individual event
  @HostListener("ionScroll", ["$event"]) onContentScroll($event: any) {
    console.log("event detail scrollTop: ", $event.detail.scrollTop);
    const scrollTop = $event.detail.scrollTop;

    this.domCtrl.write(() => {
      if (scrollTop > 0) {
        this.moveImage = scrollTop / 2;
        this.scaleImage = 1;
      } else {
        this.moveImage = scrollTop / 1.4;
        this.scaleImage = -scrollTop / this.headerHeight + 1;
      }
      this.renderer.setStyle(
        this.header,
        "webkitTransform",
        "translate3d(0," +
          this.moveImage +
          "px,0) scale(" +
          this.scaleImage +
          "," +
          this.scaleImage +
          ")"
      );
    });
  }
}
