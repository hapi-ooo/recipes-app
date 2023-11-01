import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private apiUrl = 'https://bn7btepwp5.execute-api.us-west-1.amazonaws.com/dev/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(headers: HttpHeaders): Observable<any[]> {
    let sub = localStorage.getItem('cognitoUserSub') || '';
    let prefix = localStorage.getItem('cognitoStoragePrefix');
    let idToken = localStorage.getItem(
      prefix + '.idToken'
    ) || '';
    headers = headers.set('Authorization', idToken);
    // console.log(headers.getAll('Authorization'));
    let options = {
      headers: headers,
      params: {'sub': sub},
    };
    return this.http.get<any[]>(this.apiUrl, options);
  }
}
