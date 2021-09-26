import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinningBlobComponent } from './spinning-blob.component';

describe('SpinningBlobComponent', () => {
  let component: SpinningBlobComponent;
  let fixture: ComponentFixture<SpinningBlobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinningBlobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinningBlobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
