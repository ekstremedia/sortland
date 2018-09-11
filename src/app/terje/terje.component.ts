import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import 'gsap';

declare var ease, TimelineMax,TweenMax,Power4,Power1,Power2,Power3,Bounce, Elastic:any;


@Component({
  selector: 'app-terje',
  templateUrl: './terje.component.html',
  styleUrls: ['./terje.component.css']
})

export class TerjeComponent implements OnInit {

  constructor(private modalService: NgbModal) {}
  closeResult: string;
  timeline: any;
  timeline2: any;
  ngOnInit() {
    this.runAnim();
  }
  open(content, size) {
    this.modalService.open(content, { size: size, ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  runAnim() {
    const tl = this.timeline = new TimelineMax({delay:1});
    const t2 = this.timeline2 = new TimelineMax({delay:3});
    // this.data.log('Running animation');
    // TweenMax.to('.animg', .5, { y: 225, css: { autoAlpha: 1 }, ease: Power1.easeOut });
    tl.from('#terje', .8, { css: { x:-400,autoAlpha: 0 }, ease: Bounce.easeOut, y: -500 });
    tl.from('#om', .8, { css: { y:-400,autoAlpha: 0 }, ease: Bounce.easeOut, y: -500 },'=-0.6',1);
    tl.fromTo('#hr1', .7, 
    { css: { x:-500,autoAlpha: 0 }, ease: Power1.easeInOut },
    { css: { x:0,autoAlpha: .6 }, ease: Power1.easeInOut },
    '=-0.6');
    tl.fromTo('#hr2', .7, 
    { css: { x:500,autoAlpha: 0 }, ease: Power1.easeInOut },
    { css: { x:0,autoAlpha: .6 }, ease: Power1.easeInOut },
    '=-0.6');
    tl.staggerFrom('div .ommeg', 1, {y:-400, autoAlpha: 0, ease: Power4.easeInOut}, .4,1);
    tl.staggerFrom('#bilder img', 1, {x:400, autoAlpha: 0, ease: Power4.easeInOut}, 1, '=-1.8');
    t2.from('#controller', 3, { css: { y:-400, autoAlpha:0 }, ease: Bounce.easeOut, y: -500 },1,1);
    t2.play();
    tl.play();
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  reverse() {
    let tl = this.timeline;
    tl.reverse();
  }
  spillav() {
    let tl = this.timeline;
    tl.play();
  }
  hurtighet(tall) {
    let tl = this.timeline;
    tl.timeScale(tall);
  }
}
