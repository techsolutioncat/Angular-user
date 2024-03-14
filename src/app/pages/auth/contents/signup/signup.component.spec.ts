import { TestBed } from '@angular/core/testing';
import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent],
    }).compileComponents();
  });

  it('should create the signup', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signup = fixture.componentInstance;
    expect(signup).toBeTruthy();
  });

  it(`should have the 'my-angular-project' title`, () => {
    const fixture = TestBed.createComponent(SignupComponent);
    const signup = fixture.componentInstance;
    expect(signup.title).toEqual('my-angular-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, my-angular-project');
  });
});
