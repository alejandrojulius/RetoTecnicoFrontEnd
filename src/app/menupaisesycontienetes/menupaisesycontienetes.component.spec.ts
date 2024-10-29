import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenupaisesycontienetesComponent } from './menupaisesycontienetes.component';

describe('MenupaisesycontienetesComponent', () => {
  let component: MenupaisesycontienetesComponent;
  let fixture: ComponentFixture<MenupaisesycontienetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenupaisesycontienetesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenupaisesycontienetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
