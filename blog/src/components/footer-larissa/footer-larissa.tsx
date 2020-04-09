import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'footer-larissa',
  styleUrl: 'footer-larissa.css',
  shadow: true
})
export class FooterLarissa {
@Prop() erster: string;
@Prop() zweiter: string;
@Prop() dritter: string;
  
private linksAnzeigen(): string {
    return format(this.erster, this.zweiter, this.dritter);
  }
  render() {
    return (
        <div class="footer-larissa">
        <hr id="trennlinie"></hr>
        <span class="link">{this.linksAnzeigen()}</span>
        </div>
    );
  }
}