import {Component, Prop, h, Event, EventEmitter} from "@stencil/core";

@Component({
  tag: 'login-alischa',
  styleUrl: 'login-alischa.css',
  shadow: true,
})


export class LoginAlischa {
@Prop() boxueberschrift: string;
@Event() onClick: EventEmitter;

  handleClick() {
    console.log("password click successfull")}

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
          <p class="forgotPassword" onClick={() => this.handleClick()}>Passwort vergessen > </p>
        <buttonkundenkonto-alischa class="buttonkundenkonto"></buttonkundenkonto-alischa>
      </div>
    )
  }}


