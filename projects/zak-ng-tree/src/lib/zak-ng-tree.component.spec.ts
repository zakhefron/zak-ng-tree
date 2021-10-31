import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZakNgTreeComponent } from './zak-ng-tree.component';

describe('ZakNgTreeComponent', () => {
  let component: ZakNgTreeComponent;
  let fixture: ComponentFixture<ZakNgTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZakNgTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZakNgTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
