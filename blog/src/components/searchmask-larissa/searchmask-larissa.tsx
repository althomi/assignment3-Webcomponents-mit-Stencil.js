import { Component, State, Event, EventEmitter,h } from '@stencil/core';

@Component({
  tag: 'searchmask-larissa',
  styleUrl: 'searchmask-larissa.css',
  shadow: true
})
export class SearchmaskLarissa {

@State() toggle : boolean = true;
@State() searchbar : boolean = false;
@Event() eventToggle : EventEmitter;
@Event() eventSearchbar : EventEmitter;

toggleComponent() : void {
    this.toggle = !this.toggle;
    this.displaySearchbar();
    this.eventToggle.emit({visible: this.toggle}
)
}

displaySearchbar() : void {
    this.searchbar = !this.searchbar;
    this.eventSearchbar.emit({visible: this.searchbar})
}

  render() {
    return(  <div class={this.searchbar ?  'allgemein' : 'suchleiste-allgemein'}>
                <button class={this.toggle ? 'activated-lupe' : 'inactive'} onClick={() => this.toggleComponent()}> <img src="/assets/lupe.png" class="lupe-standart"/></button>
                <div class={this.searchbar ? 'activated-searchbar' : 'inactive'} >
                <form class="eingabefeld">
                    <input type="search" list="Vögel" placeholder='Geben Sie hier Ihren Suchbegriff ein ...' maxlength="18"/>
                    <datalist id="Vögel">
                        <option value="Amsel"/>
                        <option value="Buntspecht"/>
                        <option value="Drossel"/>
                        <option value="Eisvogel"/>
                        <option value="Fink"/>
                        <option value="Graugans"/>
                        <option value="Meise"/>
                        <option value="Spatz"/>
                        <option value="Specht"/>
                    </datalist>
                    <button class='activated-schliessen' onClick={() => this.toggleComponent()}><img src="/assets/schliessen.png" class="schliessen-standart"/></button>
                </form>
                </div>
             </div> );
  }
}
