import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganismsComponent } from './list-organisms.component';

describe('ListOrganismsComponent', () => {
  let component: ListOrganismsComponent;
  let fixture: ComponentFixture<ListOrganismsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOrganismsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOrganismsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
