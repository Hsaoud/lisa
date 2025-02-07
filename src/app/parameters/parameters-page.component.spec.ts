import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ParametersPage } from './parameters-page.component';

describe('Tab3Page', () => {
  let component: ParametersPage;
  let fixture: ComponentFixture<ParametersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParametersPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ParametersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
