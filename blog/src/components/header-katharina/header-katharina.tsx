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


    render (){
        return (
    
        )

    }    
}