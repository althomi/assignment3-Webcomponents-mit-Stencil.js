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

  render() {
    return (
        <div class="footer-larissa">
        <hr id="trennlinie"></hr>
        <ul id="footer-liste">
        <li class="footer-link"><a href={this.ersterlink}>{this.erster}</a></li>
        <li class="footer-link"><a href={this.zweiterlink}>{this.zweiter}</a></li>
        <li class="footer-link"><a href={this.dritterlink}>{this.dritter}</a></li>
        </ul>
        </div>
    );
  }
}