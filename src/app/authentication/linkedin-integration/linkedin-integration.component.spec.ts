import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinIntegrationComponent } from './linkedin-integration.component';

describe('LinkedinIntegrationComponent', () => {
  let component: LinkedinIntegrationComponent;
  let fixture: ComponentFixture<LinkedinIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
