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

  clickComponent() : void {
    this.click = !this.click;
    this.openLoginBox();
    this.onClick.emit({visible: this.click}
    )
  }

  openLoginBox() : void {
    this.open = !this.open;
    this.onClickOpen.emit({visible: this.open})
  }

  handleClick(){
    console.log("click for password successful")
  }

  render(){
    return(
      <div>
        <button-alischa class={this.click ? 'buttonOrig' : 'buttonOrig'} onClick={() => this.clickComponent()}>
        </button-alischa>
        <div class={this.click ? 'loginbox sb1' : 'buttonOrig'}>
          <h1 class={this.click ? 'h1' : 'buttonOrig'}> {this.boxueberschrift} </h1>
            <form class={this.click ? 'input' : 'buttonOrig'}>
              <input type="email" placeholder='Email-Adresse'/>
            </form>
            <form class={this.click ? 'input' : 'buttonOrig'}>
              <input type="password" placeholder='Passwort'/>
             </form>
            <button-alischa class={this.click ? 'button' : 'buttonOrig'}></button-alischa>
              <p class={this.click ? 'forgotPassword' : 'buttonOrig'} onClick={() => this.handleClick()}>Passwort vergessen > </p>
            <buttonkundenkonto-alischa class={this.click ? 'buttonkundenkonto' : 'buttonOrig'}></buttonkundenkonto-alischa>
      </div>
      </div>
    )
  }}


