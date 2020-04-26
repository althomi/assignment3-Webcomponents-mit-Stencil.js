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
    url: '',
    imageUrl: `../assets/${this.image}`
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
    url:'',
    name: 'article-readmore',
    },   
    {
    url:'',
    imageUrl: `../assets/${this.arrow}`
    }, 
  ]

  render() {
    return (
        <div class="article">
            <a href="https://www.dhbw.de/startseite.html">
                <div class="article-card">
                    <div class="article-image">
                        <img src="/assets/article1.jpeg" id="title-img"/>{this.image}
                    </div>

                    <div class="upper-article">
                        <span class="first-row">
                            <span class="article-brand">
                                {this.brandname}
                            </span>
                            <span class="article-theme">
                                {this.theme}
                            </span>
                        </span>
                    </div>
                    <div class="article-headline">
                        {this.headline}
                    </div>
                    <div class="article-text">
                        {this.text}
                    </div>

                    <div class="under-article">
                        <span class="last-row">
                            <span class="article-date">
                                 {this.date}
                            </span>
                            <span class="article-readmore">
                                <a class="more" href="https://www.dhbw.de/startseite.html"></a> {this.readmore}
                            </span>
                            <span class="article-arrow">
                                <img src="/assets/articlearrow.png" id="arrow-img"/>
                                {this.arrow}
                            </span>
                        </span>
                    </div>
                </div>
            </a>

        </div>


    
    )}
}