<<<<<<< Updated upstream
import {Component,Prop, h} from "@stencil/core";
=======
import {Component, Prop, h, Event, EventEmitter, State} from "@stencil/core";
>>>>>>> Stashed changes

@Component({
  tag: 'login-alischa',
  styleUrl: 'login-alischa.css',
  shadow: true,
})


export class LoginAlischa {
  @State() click: boolean = true;
@Prop() boxueberschrift: string;

  render(){
    return(
      <div class="loginbox sb1">
        <h1> {this.boxueberschrift} </h1>
        <form class="input">
          <input type="email" placeholder='Email-Adresse'/>
        </form>
        <form class="input">
          <input type="password" placeholder='Passwort'/>
        </form>

        <button-alischa class="button"></button-alischa>
          <p class="forgotPassword"><a href="https://www.dhbw.de/startseite.html">Passwort vergessen ></a></p>
        <buttonkundenkonto-alischa class="buttonkundenkonto"></buttonkundenkonto-alischa>
      </div>
    )
  }}


