import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomComponent } from './my-custom.component';

describe('MyCustomComponent', () => {
  let component: MyCustomComponent;
  let fixture: ComponentFixture<MyCustomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomComponent]
    });
    fixture = TestBed.createComponent(MyCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
