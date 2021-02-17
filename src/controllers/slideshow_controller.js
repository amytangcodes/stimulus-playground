import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['slide'];
  static values = { index: Number };

  // initialize() {
  //   // this.index = 0;
  //   // this.index = this.indexValue;
  //   this.showCurrentSlide();
  // }

  next() {
    this.indexValue++;
    if (this.indexValue > this.slideTargets.length - 1) {
      this.indexValue = 0;
    }
  }

  previous() {
    this.indexValue--;
    if (this.indexValue < 0) {
      this.indexValue = this.slideTargets.length - 1;
    }
  }

  indexValueChanged() {
    this.showCurrentSlide();
  }

  showCurrentSlide() {
    this.slideTargets.map((element, index) => {
      element.hidden = index != this.indexValue;
    });
  }
}
