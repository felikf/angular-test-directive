# Demonstrate issue with testing component with mocked structural directive

Following test is failing with a message:

> Property binding appSome not used by any directive on an embedded template. Make sure that the property name is spelled correctly and all directives are listed in the "@NgModule.declarations". ("[ERROR ->]<h1 *appSome="true">TEST</h1>

I am mocking structural directive `SomeDirective` with `SomeMockDirective` defined within app.component.spec.ts. Test is failing.

If I switch declarations so that it does contain `SomeDirective` instead the test passes. I im wondering why I can not make it working with mocked version.

declarations: [AppComponent, SomeMockDirective],

```
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Directive, NO_ERRORS_SCHEMA } from '@angular/core';

@Directive({
  selector: '[appSome]'
})
export class SomeMockDirective {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SomeMockDirective], // test is failing, switch the directive to SomeDirective and it passes
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
```
