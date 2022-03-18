import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapLibraryComponent } from './vap-library.component';

describe('VapLibraryComponent', () => {
  let component: VapLibraryComponent;
  let fixture: ComponentFixture<VapLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VapLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VapLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
