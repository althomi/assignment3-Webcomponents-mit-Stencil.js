import { Component, State, Event, EventEmitter,h } from '@stencil/core';

@Component({
  tag: 'searchmask-larissa',
  styleUrl: 'searchmask-larissa.css',
  shadow: true
})
export class SearchmaskLarissa {

@State() toggle : boolean = true;
@State() searchbar : boolean = false; loginBox
@State() schliessen : boolean = true; open
@Event() onToggle : EventEmitter;
@Event() onSearchbar : EventEmitter;
@Event() onSchliessen : EventEmitter;

toggleComponent() : void {
    this.toggle = !this.toggle;
    this.displaySearchbar();
    this.onToggle.emit({visible: this.toggle}
)
}

displaySearchbar() : void {
    this.searchbar = !this.searchbar;
    this.onSearchbar.emit({visible: this.searchbar})
}

displaySchliessen() : void {
    this.schliessen = !this.schliessen;
    this.onSchliessen.emit({visible: this.schliessen})
}

  render() {
    return(  <div class="suchleiste-allgemein">
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
                    <button class={this.schliessen ? 'activated-schliessen' : 'inactive'} onClick={() => this.displaySchliessen()}><img src="/assets/schliessen.png" class="schliessen-standart"/></button>
                </form>
                </div>
             </div> );
  }
}
