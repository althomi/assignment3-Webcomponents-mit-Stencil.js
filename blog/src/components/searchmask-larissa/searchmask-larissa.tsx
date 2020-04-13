import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'searchmask-larissa',
  styleUrl: 'searchmask-larissa.css',
  shadow: true
})
export class SearchmaskLarissa {
    @Prop() acctivated : boolean;

private src : string;
private searchBar: HTMLElement;

private sourceChange(){
    this.acctivated = false;
    console.log(this.acctivated);
    if(this.acctivated === false){
        return(this.acctivated);
    } 
    else{
        console.log("something went wrong");
    }
}


  render() {
    return(  <button class="lupe-button" onClick={this.sourceChange}  innerHTML={this.Test()}></button> );
  }  
}