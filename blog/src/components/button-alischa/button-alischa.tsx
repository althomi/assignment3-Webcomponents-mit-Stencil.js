import {Component, Prop, Event, EventEmitter, Listen h} from "@stencil/core";
@Component({
  tag: 'button-alischa',
  styleUrl: 'button-alischa.css',
  shadow: true
})



export class ButtonAlischa{
  @Prop() first: string; open:
@Listen() ('click', {capture: true})
handleClick() { this.open = !this.open;};

  render() {
    return (
      <div class="button-alischa">
        {this.open ? "On" : "Off"}
      </div>
    )}}
