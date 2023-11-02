import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://bn7btepwp5.execute-api.us-west-1.amazonaws.com/dev/recipes';
  private headers: HttpHeaders = new HttpHeaders({
    'Accept': ['application/json', 'text/plain', '*/*'],
    'Authorization': '',
  });

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<any[]> {
    let sub = localStorage.getItem('cognitoUserSub') || '';
    let prefix = localStorage.getItem('cognitoStoragePrefix');
    let idToken = localStorage.getItem(
      prefix + '.idToken'
    ) || '';
    this.headers = this.headers.set('Authorization', idToken);
    // console.log(headers.getAll('Authorization'));
    let options = {
      headers: this.headers,
      params: {'sub': sub},
    };
    return this.http.get<any[]>(this.apiUrl, options);
  }

  /*
    */
  createRecipe(recipe: any): Observable<any> {

    // get sub and idToken for authorization
    let sub = localStorage.getItem('cognitoUserSub') || '';
    let prefix = localStorage.getItem('cognitoStoragePrefix');
    let idToken = localStorage.getItem(prefix + '.idToken') || '';

    // set request headers
    this.headers = this.headers.set('Authorization', idToken);
    let options = {
      headers: this.headers,
      params: {'sub': sub},
    };

    // return the observable response
    return this.http.post<any[]>(this.apiUrl, recipe, options);
  }
}
