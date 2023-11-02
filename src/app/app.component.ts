import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  services = {
    async handleSignIn(formData: Record<string, any>) {
      let { username, password } = formData;
      return Promise.resolve( Auth.signIn({
        username,
        password,
      }).then( val => {
        console.log(val);
        let keyPrefix = val.keyPrefix;
        let username = val.username;
        let cognitoStoragePrefix = keyPrefix + '.' + username;
        localStorage.setItem('cognitoStoragePrefix', cognitoStoragePrefix);
        localStorage.setItem('cognitoUserSub', val.attributes.sub);
        return val;
      })
                            );
    },
  };

}
