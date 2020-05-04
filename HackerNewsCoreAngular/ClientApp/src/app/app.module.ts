import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { StudentsComponent } from './students/students.component';
import { LatestStoriesComponent } from './latest-stories/latest-stories.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    StudentsComponent,
    LatestStoriesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'students', component: StudentsComponent },
      { path: 'latest-stories', component: LatestStoriesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

  //it('should have as title "Angular Unit Testing"', async(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  const app = fixture.debugElement.componentInstance;
  //  expect(app.title).toEqual('Angular Unit Testing');
  //}));

  //it('should render title in a h1 tag', async(() => {
  //  const fixture = TestBed.createComponent(AppComponent);
  //  fixture.detectChanges();
  //  const compiled = fixture.debugElement.nativeElement;
  //  expect(compiled.querySelector('h1').textcontext).toContain('Welcome to Angular Unti Testing!');
  //}));

//describe('AppComponent', () => {
//  const routes: Routes = [
//      { path: '', component: HomeComponent, pathMatch: 'full' },
//      { path: 'counter', component: CounterComponent },
//      { path: 'fetch-data', component: FetchDataComponent },
//      { path: 'students', component: StudentsComponent },
//      { path: 'latest-stories', component: LatestStoriesComponent }
//  ];
//  beforeEach(async(() => {
//    TestBed.configureTestingModule({
//      declarations: [
//        AppComponent,
//        NavMenuComponent,
//        HomeComponent,
//        CounterComponent,
//        FetchDataComponent,
//        StudentsComponent,
//        LatestStoriesComponent
//      ],
//      imports: [
//        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
//        HttpClientModule,
//        FormsModule,
//        RouterModule.forRoot([
//          { path: '', component: HomeComponent, pathMatch: 'full' },
//          { path: 'counter', component: CounterComponent },
//          { path: 'fetch-data', component: FetchDataComponent },
//          { path: 'students', component: StudentsComponent },
//          { path: 'latest-stories', component: LatestStoriesComponent },
//        ])
//      ],
//      providers: []
//    }).compileComponents();
//  }));

//  it('should have as title "Angular Unit Testing"', async(() => {
//    const fixture = TestBed.createComponent(AppComponent);
//    const app = fixture.debugElement.componentInstance;
//    expect(app.title).toEqual('Angular Unit Testing');
//  }));

//  it('should render title in a h1 tag', async(() => {
//    const fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    const compiled = fixture.debugElement.nativeElement;
//    expect(compiled.querySelector('h1').textcontext).toContain('Welcome to Angular Unti Testing!');
//  }));

//});

