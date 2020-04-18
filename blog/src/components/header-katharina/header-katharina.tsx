import { Component, h, Prop, State} from '@stencil/core';

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
                    
                    {/* <a href="#" class="logo"><img class='logo-image' src='/assets/twitter.png' alt="Logo" /></a> */}
                    
                    {/* <button class='burgerBtn' onClick={this.showMenuHandler.bind(this)}><img class='burger-icon' src='/assets/facebook.png' alt="Menu" /></button> */}
                    
                    <ul class="header-bar">
                        <li class="left">
                                    <a href="#" class="logo">
                                        <img class='logo-image' src='/assets/twitter.png' alt="Logo" />
                                    </a>
                        </li>
                        <li class="right">
                        <ul class="right burgermenu"> 
                                <li> <button class='burgerBtn' onClick={this.showMenuHandler.bind(this)}>
                                    <img class='burger-icon' src='/assets/facebook.png' alt="Menu" />
                                    </button>
                                </li>
                            </ul>
                            <ul class="hrefs">
                                <li><a href="#">{this.textone}</a></li>
                                <li><a href="#">{this.texttwo}</a></li>
                                <li><a href="#">{this.textthree}</a></li>
                                <li><a href="#">{this.textfour}</a></li>
                                <li><a href="#">{this.textfive}</a></li>
                            </ul>
                            {/* <ul class="right burgermenu"> 
                                <li> <button class='burgerBtn' onClick={this.showMenuHandler.bind(this)}>
                                    <img class='burger-icon' src='/assets/facebook.png' alt="Menu" />
                                    </button>
                                </li>
                            </ul> */}
                        </li>
                    </ul>
                </div>
                {options}
            </div>
        )

    }    
}