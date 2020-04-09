import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'footer-larissa',
  styleUrl: 'footer-larissa.css',
  shadow: true
})
export class FooterLarissa {
  /**
   * The first name
   */
  @Prop() eins: string;

  /**
   * The middle name
   */
  @Prop() zwei: string;

  /**
   * The last name
   */
  @Prop() drei: string;

  private getText(): string {
    return format(this.eins, this.zwei, this.drei);
  }

  render() {
    return <div>Hallo, ich bin's {this.getText()}</div>;
  }
}