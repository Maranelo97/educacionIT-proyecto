import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloEdicionComponent } from './articulo-edicion.component';

describe('ArticuloEdicionComponent', () => {
  let component: ArticuloEdicionComponent;
  let fixture: ComponentFixture<ArticuloEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticuloEdicionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
