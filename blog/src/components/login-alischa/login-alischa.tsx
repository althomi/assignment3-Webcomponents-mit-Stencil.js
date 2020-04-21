import {Component,Prop, State, EventEmitter, h} from "@stencil/core";

@Component({
  tag: 'login-alischa',
  styleUrl: 'login-alischa.css',
  shadow: true,
})


export class LoginAlischa {
  @State() click: boolean = true;
  @State() close : boolean = true;
  @State() open : boolean = true;
  @Prop() boxueberschrift: string;
  @Event() onClickOpen: EventEmitter;
  @Event() onClickClose: EventEmitter;


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


