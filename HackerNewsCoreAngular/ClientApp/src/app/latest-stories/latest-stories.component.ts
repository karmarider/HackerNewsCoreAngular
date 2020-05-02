import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-latest-stories',
  templateUrl: './latest-stories.component.html'
})
export class LatestStoriesComponent {
  public lateststories: LatestStories[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<LatestStories[]>(baseUrl + 'api/LatestStories/GetLatestStories').subscribe(result => {
      this.lateststories = result;
    }, error => console.error(error));
  }
}

interface LatestStories {
  title: string;
  by: string;
  url: string;
}
