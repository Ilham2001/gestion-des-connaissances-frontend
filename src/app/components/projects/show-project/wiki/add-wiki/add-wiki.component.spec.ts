import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWikiComponent } from './add-wiki.component';

describe('AddWikiComponent', () => {
  let component: AddWikiComponent;
  let fixture: ComponentFixture<AddWikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
