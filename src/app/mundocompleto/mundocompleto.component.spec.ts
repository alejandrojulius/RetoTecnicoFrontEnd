import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundocompletoComponent } from './mundocompleto.component';

describe('MundocompletoComponent', () => {
  let component: MundocompletoComponent;
  let fixture: ComponentFixture<MundocompletoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MundocompletoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MundocompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
