//
// Not working
// try creating a service
//

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LatestStoriesComponent } from './latest-stories.component';
import { InjectionToken } from '@angular/core';
export const BASE_URL = new InjectionToken<string>('BASE_URL');

describe('LatestStoriesComponent', () => {
  let component: LatestStoriesComponent;
  let fixture: ComponentFixture<LatestStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ LatestStoriesComponent ],
      providers: [  { provide: BASE_URL , useValue: 'https://localhost:44397/api/LatestStories/GetLatestStories' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display a title', async(() => {
    const titleText = fixture.nativeElement.querySelector('h1').textContent;
    expect(titleText).toEqual('Latest Hacker News Stories');
  }));

  //it('should start with count 0, then increments by 1 when clicked', async(() => {
  //  const countElement = fixture.nativeElement.querySelector('strong');
  //  expect(countElement.textContent).toEqual('0');

  //  const incrementButton = fixture.nativeElement.querySelector('button');
  //  incrementButton.click();
  //  fixture.detectChanges();
  //  expect(countElement.textContent).toEqual('1');
  //}));
});
