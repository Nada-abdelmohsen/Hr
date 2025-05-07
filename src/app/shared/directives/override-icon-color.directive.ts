import { Directive, effect, ElementRef, inject, input, OnDestroy, untracked } from '@angular/core';

@Directive({
  selector: 'hr-icon[overrideColor]',
  standalone: true
})
export class OverrideIconColorDirective implements OnDestroy {
  overrideColor = input(false);
  readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer: MutationObserver | undefined;
  constructor() {
    effect(() => {
      if (!this.overrideColor()) return;
      untracked(() => {
        if (this.setColor()) return;
        this.observeDomChanges();
      });
    });
  }

  private observeDomChanges() {
    this.observer = new MutationObserver(() => {
      this.setColor();
    });

    this.observer.observe(this.el.nativeElement, {
      childList: true,
      subtree: true
    });
  }
  setColor() {
    const svgElement = this.el.nativeElement.querySelector('svg');
    if (svgElement) {
      svgElement.querySelectorAll('[fill]').forEach((element: any) => {
        if (element.getAttribute('fill') === 'none') return;
        element.setAttribute('fill', 'currentColor');
      });
      svgElement.querySelectorAll('[stroke]').forEach((element: any) => {
        if (element.getAttribute('stroke') === 'none') return;
        element.setAttribute('stroke', 'currentColor');
      });
      this.observer?.disconnect();
      return true;
    }
    return false;
  }
  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
