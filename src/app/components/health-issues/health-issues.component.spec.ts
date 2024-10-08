import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIssuesComponent } from './health-issues.component';

describe('HealthIssuesComponent', () => {
  let component: HealthIssuesComponent;
  let fixture: ComponentFixture<HealthIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthIssuesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
