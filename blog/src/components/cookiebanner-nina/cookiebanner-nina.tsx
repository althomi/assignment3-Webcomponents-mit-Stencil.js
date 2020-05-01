import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'cookiebanner-nina',
  styleUrl: 'cookiebanner-nina.css',
  shadow: true
})
export class CookiebannerNina {
  @Prop() text: string;
  @Prop() linktext: string;
  @Prop() link: string;
  @Prop() button: string;

  @State() schliessen : boolean = true;

  @Event() buttonSchliessen : EventEmitter;




  public cookiebanner: Array<any> = [
    {
    name: 'cookiebanner-text',
    }, 
    {
    name: 'cookiebanner-link-text',
    }, 
    {
    name: 'cookiebanner-link',
    url: 'https://www.dhbw.de/startseite.html',
    }, 
    {
    name: 'cookiebanner-button',
    },
  ]

  eventSchliessen() : void {
    this.schliessen = !this.schliessen;
    this.buttonSchliessen.emit({visible: this.schliessen})
}


  render() {
    return (
        <div id="footer-cookie" class={this.schliessen ? 'footer-cookie' : 'inactive'}>

            <span id="description">
                {this.text} 
                {this.link}
                <a href="https://www.dhbw.de/startseite.html"><u>{this.linktext}</u></a>                
            </span>
            <span id="accept">
                <button onClick={() => this.eventSchliessen()}>OK</button>
            </span>
        </div>


    )}
}