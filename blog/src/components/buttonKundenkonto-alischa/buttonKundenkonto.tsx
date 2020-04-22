import {Component, Prop, h, EventEmitter, Event} from "@stencil/core";
@Component({
  tag: 'buttonkundenkonto-alischa',
  styleUrl: 'buttonKundenkonto-alischa.css',
  shadow: true
})

export class RegisterAlischa {
  @Prop() link: string;
  @Event() onClick: EventEmitter;

  handleClick() {
    console.log ("register click successfull");
  }


  render() {
    return (
      <button onClick={() => this.handleClick()}>Registrieren</button>
    )
  }
}
