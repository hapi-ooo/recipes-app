import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recipes-app';
  options = {
//    headers: ['Acess-Control-Allow-Origin':
  };

  constructor(private http: HttpClient) {
    this.http.get('https://bn7btepwp5.execute-api.us-west-1.amazonaws.com/dev/recipes')
      .subscribe(data => {
      console.log(data);
    });
  }
}
