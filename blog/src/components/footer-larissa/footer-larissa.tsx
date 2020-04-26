import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'footer-larissa',
  styleUrl: 'footer-larissa.css',
  shadow: true
})
export class FooterLarissa {
  @Prop() erster!: string;
  @Prop() zweiter: string;
  @Prop() dritter: string;
  @Prop() ersterlink!: string;
  @Prop() zweiterlink: string;
  @Prop() dritterlink: string;

  public icons: Array<any> = [
    {      name: 'twitter',
    url: 'https://twitter.com/explore',
    imageUrl: '/assets/twitter.png'
    },
    {
      name: 'insta',
      url: 'https://www.instagram.com/?hl=de',
      imageUrl: '/assets/insta.png'
    },
    {
      name: 'facebook',
      url: 'https://www.facebook.com',
      imageUrl: '/assets/facebook.png'
    },
  ]

  render() {
    return (
        <div class="wrapper-außen">
        <div class="footer-larissa">
        <div id="trennlinie"></div>
        
        <div class="wrapper">
        <div class="icons">{this.icons.map(entry =>
          <a href={entry.url}> <img class="img" src={entry.imageUrl} /></a>)}
        </div>

        <div class="links">
        <ul id="footer-liste">
        <li class="footer-link"><a class="text-link" href={this.ersterlink}>{this.erster}</a></li>
        <li class="footer-link"><a class="text-link" href={this.zweiterlink}>{this.zweiter}</a></li>
        <li class="footer-link"><a class="text-link" href={this.dritterlink}>{this.dritter}</a></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
    );
  }
}