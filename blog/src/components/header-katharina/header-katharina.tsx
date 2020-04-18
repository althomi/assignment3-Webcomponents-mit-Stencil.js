import { Component, h, Prop, getAssetPath } from '@stencil/core';

@Component({
    tag: 'header-katharina',
    styleUrl: 'header-katharina.css'
})

export class HeaderKatharina {
    @Prop() textone: string;
    @Prop() texttwo: string;
    @Prop() textthree: string;
    @Prop() textfour: string;
    @Prop() textfive: string;
    @Prop() search: HTMLBodyElement;
    @Prop() logo: 'default_logo.png';
    @Prop() burger: 'Hamburger_icon.png';


    render (){
        return (
            <div class="wrapper">
                <div class="header">
                    <ul class="logo">
                        <li><a href="#" class="logo"><img src={getAssetPath(`./assets/${this.logo}`)} alt="Logo" /></a></li>
                    </ul>
                    <ul class="links">
                        <li><a href="#">{this.textone}</a></li>
                        <li><a href="#">{this.texttwo}</a></li>
                        <li><a href="#">{this.textthree}</a></li>
                        <li><a href="#">{this.textfour}</a></li>
                        <li><a href="#">{this.textfive}</a></li>
                    </ul>


                    <div id="burger-links">
                        <a href="#">{this.textone}</a>
                        <a href="#">{this.texttwo}</a>
                        <a href="#">{this.textthree}</a>
                        <a href="#">{this.textfour}</a>
                        <a href="#">{this.textfive}</a>
                    </div>

                    <div class='burger-wrapper'>
                        <img src={getAssetPath(`./assets/${this.burger}`)} alt="Menu" />
                    </div>

                    <div class="border"></div>
                </div>
            </div>
        )

    }    
}