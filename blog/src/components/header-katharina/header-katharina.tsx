import { Component, h, Prop, State, getAssetPath} from '@stencil/core';

@Component({
    tag: 'header-katharina',
    styleUrl: 'header-katharina.css'
})

export class HeaderKatharina {
    @Prop() image1 = "default_logo.png";
    @Prop() image2 = "Hamburger_icon.png";
    @Prop() textone: string;
    @Prop() texttwo: string;
    @Prop() textthree: string;
    @Prop() textfour: string;
    @Prop() textfive: string;
    @Prop() search: HTMLBodyElement;
    @Prop() logo: 'default_logo.png';
    @Prop() burger: 'Hamburger_icon.png';

    @State() showMenu = false;

    showMenuHandler(){
        if(!this.showMenu){
            this.showMenu = true;
        }else{
            this.showMenu = false;
        }
    }


    render (){
        let options = null;
        if(this.showMenu){
            options = 
                <div class='menu'>
                <div class="burger-links">
                        <a href="#">{this.textone}</a><br></br>
                        <a href="#">{this.texttwo}</a><br></br>
                        <a href="#">{this.textthree}</a><br></br>
                        <a href="#">{this.textfour}</a><br></br>
                        <a href="#">{this.textfive}</a><br></br>
                </div>
                </div>
        }else{
            options = null;
        }

        return (
            <div class="wrapper">
                <div class="header">
                    <ul class="header-bar">
                        <li class="left">
                                    <a href="#" class="logo">
                                        <img class='logo-image' src={getAssetPath(`../assets/${this.image1}`)} alt="Logo" />
                                    </a>
                        </li>
                        <li class="right">
                        {/* <ul class="right burgermenu"> 
                                <li> <button class='burgerBtn' onClick={this.showMenuHandler.bind(this)}>
                                    <img class='burger-icon' src={getAssetPath(`../assets/${this.image2}`)} alt="Menu" />
                                    </button>
                                </li>
                            </ul> */}
                            <ul class="hrefs">
                                <li><a href="#">{this.textone}</a></li>
                                <li><a href="#">{this.texttwo}</a></li>
                                <li><a href="#">{this.textthree}</a></li>
                                <li><a href="#">{this.textfour}</a></li>
                                <li><a href="#">{this.textfive}</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                {options}
            </div>
        )

    }    
}