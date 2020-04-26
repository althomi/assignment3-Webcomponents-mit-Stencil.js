import { Component, Prop, h } from '@stencil/core';

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
    url: 'https://www.dhbw.de/startseite.html',
    },
  ]

  render() {
    return (
        <div id="footer-cookie">
            <span id="description">
                {this.text} 
                {this.link}
                <a href="https://www.dhbw.de/startseite.html"><u>{this.linktext}</u></a>                
            </span>
            <span id="accept">
                <a href="https://www.dhbw.de/startseite.html" title="Akzeptieren">{this.button}</a>
            </span>
        </div>


    )}
}