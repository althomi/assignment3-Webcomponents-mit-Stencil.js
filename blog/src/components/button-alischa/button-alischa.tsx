import {Component, Event, h, EventEmitter} from "@stencil/core";
@Component({
  tag: 'button-alischa',
  styleUrl: 'button-alischa.css',
  shadow: true
})

export class ButtonAlischa {
  @Event() onClick: EventEmitter;

  handleClick() {
    console.log("login click successful")}

  render() {
    return(
      <button onClick={() => this.handleClick()}>Login</button>
  )
  }
}

