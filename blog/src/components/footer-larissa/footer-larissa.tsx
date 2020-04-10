import { Component, Prop, h } from '@stencil/core';
import {FooterLink} from '../footer-link/footer-link';

@Component({
  tag: 'footer-larissa',
  styleUrl: 'footer-larissa.css',
  shadow: true
})
export class FooterLarissa {
@Prop() erster: string;
@Prop() zweiter: string;
@Prop() dritter: string;
@Prop() link1: string;
@Prop() link2: string;
@Prop() link3: string;

  render() {
    return (
        <div class="footer-larissa">
        <hr id="trennlinie"></hr>
        <ul id="footer-liste">
        <li><FooterLink link={this.link1} text={this.erster}/></li>
        <li><FooterLink link= {this.link2} text={this.zweiter}/></li>
        <li><FooterLink link= {this.link3} text={this.dritter}/></li>
        </ul>
        </div>
    );
  }
}