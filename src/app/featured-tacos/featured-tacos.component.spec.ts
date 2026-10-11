import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedTacosComponent } from './featured-tacos.component';
import { By } from '@angular/platform-browser';

describe('FeaturedTacosComponent', () => {
  let component: FeaturedTacosComponent;
  let fixture: ComponentFixture<FeaturedTacosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedTacosComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturedTacosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render exactly 4 featured tacos', () => {
    const tacoCards = fixture.debugElement.queryAll(By.css('.taco-card'));
    expect(tacoCards.length).toBe(4);
    expect(component.featuredTacos.length).toBe(4);
  });

  it('should conditionally highlight the Chefs Pick', () => {
    const chefsPickCard = fixture.debugElement.query(By.css('.chefs-pick'));
    const badgeText = chefsPickCard.query(By.css('.pick-label')).nativeElement.textContent;

    expect(chefsPickCard).toBeTruthy();
    expect(badgeText).toContain("Chef's Pick");

    // Verify only one item got the highlight
    const allChefsPicks = fixture.debugElement.queryAll(By.css('.chefs-pick'));
    expect(allChefsPicks.length).toBe(1);
  });
});
