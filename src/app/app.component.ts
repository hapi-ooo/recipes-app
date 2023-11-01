import { Component } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-root',
  template: `
    <amplify-authenticator
      [services]="services"
      initialState="signIn"
    >
      <ng-template
        amplifySlot="authenticated"
        let-user="user"
        let-signOut="signOut"
      >
        <recipes></recipes>
        <button (click)="signOut()">Sign Out</button>
      </ng-template>
    </amplify-authenticator>
  `,
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
