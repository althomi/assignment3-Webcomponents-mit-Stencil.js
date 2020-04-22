import { Component, Prop, h, State, getAssetPath} from '@stencil/core';

@Component({
    tag: 'slider-katharina',
    styleUrl: 'slider-katharina.css',
    assetsDirs: ['assets'],
    shadow: true
})

export class SliderKatharina {
    @Prop() bildone : string;
    @Prop() bildtwo : string;
    @Prop() bildthree : string;

    @Prop() prevBtn = document.querySelector('#prev');
    @Prop() nextBtn = document.querySelector('#next');

    // @Prop() slides: Array<any> = [
    //     {
    //         imageUrl: `../assets/${this.image1}`
    //     },
    //     {
    //         imageUrl: `../assets/${this.image2}`
    //     },
    //     {
    //         imageUrl: `../assets/${this.image3}`
    //     }
    // ]

    // @Prop() max = this.slides.length-1;

    @State() count = 0;
    @State() nextSlides = false;
    nextSlidesHandler(){
        if(!this.nextSlides){
            this.nextSlides = true;
        }

    }
    @State() prevSlides = false;
    prevSlidesHandler(){
        if(!this.prevSlides){
            this.prevSlides = true;
        }
    }

    // @Listen('load', {target: 'window'})
    // autoSlider(){
    //     setTimeout(function() {
    //         console.log('hallo')
    //         var counter = 0;
    //         var interval = setInterval(function(){
    //             if(!this.nextSlides){
    //                 this.nextSlides = false;
    //             }
    //             console.log(this.nextSlides)
    //             counter++; 
    //             if(counter == 10) clearInterval(interval); 
    //         },3000); 
    //     }, 5000)
    // }

    render(){
        console.log(this.bildone);
        console.log(this.bildtwo);
        console.log(this.nextSlides);
        var imageArray = new Array<any>();
        imageArray.push(`/assets/${this.bildone}`);
        imageArray.push(`../assets/${this.bildtwo}`);
        imageArray.push(`../assets/${this.bildthree}`);

        console.log(imageArray)
       var max =  imageArray.length-1;

        let sliderShow =  <img src = {imageArray[0]}></img> ;
        // next Slide
        if(this.nextSlides){
                if(this.count < max){
                    console.log('if');
                    this.count++;
                    console.log(this.count);
                }else{
                    console.log('else');
                    this.count = 0;
                }
            sliderShow = (
                <img src = {imageArray[this.count]}></img>  
            );    
            this.nextSlides = false;
        }

        // previous Slide
        if(this.prevSlides){
                if(this.count > 0){
                    console.log('if');
                    this.count--;
                    console.log(this.count);
                }else{
                    console.log('else');
                    this.count = max;
                }
            sliderShow = (
                <img src = {imageArray[this.count]}></img>  
            );
            this.prevSlides = false;
        }

        // automatic Slideshow

        return (
            <div class='wrapper'>

                <button id="prev" onClick={this.prevSlidesHandler.bind(this)}>
                    <img class='imgBtn' src = '../assets/ArrowLeft.png'></img>
                </button> 
                <button id="next" onClick={this.nextSlidesHandler.bind(this)}>
                    <img class='imgBtn' src = '../assets/ArrowRight.png'></img>
                </button>

                <div class="slider">
                     {sliderShow}
                </div>
            </div>
            
        )
        
    }
}  