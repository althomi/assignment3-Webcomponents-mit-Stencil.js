import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'cookiebanner-nina',
  styleUrl: 'cookiebanner-nina.css',
  shadow: true
})
export class CookiebannerNina {
  @Prop() text: string;
  @Prop() link: string;
  @Prop() button: string;



  public cookiebanner: Array<any> = [
    {
    name: 'cookiebanner-text',
    }, 

    {
    name: 'cookiebanner-link',
    url: '',
    imageUrl: ''
    }, 

    {
    name: 'cookiebanner-button',
    url: '',
    imageUrl: ''
    },
  ]

  render() {
    return (
        <div id="footer-cookie">
            <span id="description">
            {this.text} Wir haben Cookies auf deinem Computer platziert. Unsere Cookies werden verwendet, um Inhalte und Werbung zu personalisieren. <a href=""><u class="more">Mehr erfahren</u></a>
            </span>
            {this.link}
            <span id="accept"><a href="#" title="Akzeptieren">OK</a></span>
            {this.button}
        </div>


    )}
}