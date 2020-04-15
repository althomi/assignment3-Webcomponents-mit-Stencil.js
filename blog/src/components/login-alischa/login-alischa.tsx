import {Component,Prop, h} from "@stencil/core";

@Component({
  tag: 'login-alischa',
  styleUrl: 'login-alischa.css',
  shadow: true,
})


export class LoginAlischa {
@Prop() boxueberschrift: string;


  render(){
    return(
      <div class="loginbox">
        <h1> {this.boxueberschrift} </h1>
        <form class="input">
          <input type="email" placeholder='Email-Adresse'/>
        </form>
        <form class="input">
          <input type="password" placeholder='Passwort'/>
        </form>

          <button-alischa class="button"></button-alischa>
        <buttonkundenkonto-alischa class="buttonkundenkonto"></buttonkundenkonto-alischa>

        <link class="linkForgotPassword"></link>
        <button></button>
      </div>
    )
  }}


