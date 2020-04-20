import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'article-nina',
  styleUrl: 'article-nina.css',
  shadow: true
})
export class ArticleNina {
  @Prop() image: "article1.jpeg";
  @Prop() brandname: string;
  @Prop() theme: string;
  @Prop() headline: string;
  @Prop() text: string;
  @Prop() date: string;
  @Prop() readmore: string;
  @Prop() arrow: "articlearrow.png";

  public teaser: Array<any> = [
    {
    name: 'article-image',
    url: '',
    imageUrl: '/assets/article1.jpeg'
    }, 

    {
    name: 'article-brand',
    }, 
    {
    name: 'article-theme',
    },
    {
    name: 'article-headline',
    },
    {
    name: 'article-text',
    },
    {
    name: 'article-date',
    },
    {
    name: 'article-readmore',
    },   
    {
    name: 'article-arrow',
    url: '',
    imageUrl: '/assets/articlearrow.png'
    }, 

  ]

  render() {
    return (
        <div class="article">
            <div class="article-card">
                <div class="article-image">
                    <img src="/assets/article1.jpeg" id="title-img" />{this.image}
                </div>

                <div class="upper-article">
                    <span class="first-row">
                        <span class="article-brand">
                            brandname{this.brandname}
                        </span>
                        <span class="article-theme">
                            lifestyle and beauty{this.theme}
                        </span>
                    </span>
                </div>

                <div class="article-headline">
                    Headline{this.headline}
                </div>
                <div class="article-text">
                      {this.text}<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                </div>

                <div class="under-article">
                    <span class="last-row">
                        <span class="article-date">
                            24.2.12 {this.date}
                        </span>
                        <span class="article-readmore">
                            More {this.readmore}
                        </span>
                        <span class="article-arrow">
                            <img src="/assets/articlearrow.png" id="arrow-img"/>
                             {this.arrow}
                        </span>
                    </span>
                </div>
            </div>

        </div>


    
    )}
}