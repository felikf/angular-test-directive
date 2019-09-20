import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appSome]'
})
export class SomeDirective implements OnDestroy {
  show: boolean;

  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly templateRef: TemplateRef<any>) {}

  @Input()
  set appSome(show: boolean) {
    this.updateView();
  }

  ngOnDestroy(): void {}

  private updateView(): void {
    if (!this.show) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.clear();
      this.viewContainer.createEmbeddedView(this.templateRef, {});
    }
  }
}

