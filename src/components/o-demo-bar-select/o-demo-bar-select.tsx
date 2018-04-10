import {Component, Prop, Element, Event, EventEmitter} from '@stencil/core';
import {MDCSelect} from '@material/select';
@Component({
    tag: 'o-demo-bar-select',
    styleUrl: 'o-demo-bar-select.scss',
    shadow: true
  })

export class DemoSelectComponent {
  private select : any;
  @Element()el : HTMLElement;
  @Event()selectedCaseChanged : EventEmitter;
  @Prop()options : any;



  componentDidLoad() {
    const rootEl = this.el.shadowRoot.querySelector('.mdc-select');
    this.select = new MDCSelect(rootEl);
    this.select.selectedIndex = 0;
    this.emitChange();
    this.select.listen('MDCSelect:change', () => {
        this.emitChange();
    });
  }

  emitChange(){
    this.selectedCaseChanged.emit(this.select.selectedIndex);
  }

  componentDidUnload() {
    this.select.destroy();
  }

  render() {
    return (
      <div class="mdc-select" role="listbox">
        <div class="mdc-select__surface" tabindex="0">
          <div class="mdc-select__label">Select demo :
          </div>
          <div class="mdc-select__selected-text"></div>
          <div class="mdc-select__bottom-line"></div>
        </div>
        <div class="mdc-menu mdc-select__menu">
          <ul class="mdc-list mdc-menu__items">
            {this.options.map((option, index) => (
                <li class="mdc-list-item" id={index} role="option" tabindex="0">
                  {option}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
