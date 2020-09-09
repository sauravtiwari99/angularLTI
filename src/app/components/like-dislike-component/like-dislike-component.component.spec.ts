import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeDislikeComponentComponent } from './like-dislike-component.component';

describe('LikeDislikeComponentComponent', () => {
  let component: LikeDislikeComponentComponent;
  let fixture: ComponentFixture<LikeDislikeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeDislikeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeDislikeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
