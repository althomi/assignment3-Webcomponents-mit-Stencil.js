import {Component,Prop, State, Event, EventEmitter, h} from "@stencil/core";

@Component({
  tag: 'login-alischa',
  styleUrl: 'login-alischa.css',
  shadow: true,
})


export class LoginAlischa {
  @State() click: boolean = true;
  @State() close : boolean = true;
  @State() open : boolean = false;
  @Prop() boxueberschrift: string;
  @Event() onClick : EventEmitter;
  @Event() onClickOpen: EventEmitter;
  @Event() onClickClose: EventEmitter;

  toggleComponent() : void {
    this.click = !this.click;
    this.openLoginBox();
    this.onClick.emit({visible: this.click}
    )
  }

  openLoginBox() : void {
    this.open = !this.open;
    this.onClickOpen.emit({visible: this.open})
  }

  closeLoginBox() : void {
    this.close = !this.close;
    this.onClickClose.emit({visible: this.close})
  }

  render(){
    return(
      <div>
        <button-alischa class="button"></button-alischa>
        <div class="loginbox sb1">
        <button></button>
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
      </div>
    )
  }}


