import { Component, Element, Prop, State } from '@stencil/core';

declare var mapboxgl: any;

@Component({
  tag: 'om-map',
  styleUrl: 'om-map.scss'
})
export class OMMap {
  @Prop() accesstoken: string;
  @Prop() styles: string;

  @Prop() center: number[] = [-122.40655, 37.78437];
  @Prop() pitch: number = 0;
  @Prop() zoom: number = 17;

  @State() container: Element;
  @State() map: any;

  @Element() element: HTMLElement;

  componentWillLoad() {
    mapboxgl.accessToken = this.accesstoken;
    this.container = this.element.querySelector('.om-map');
    this.map = new mapboxgl.Map({
      center: this.center,
      container: this.container,
      pitch: this.pitch,
      style: this.styles,
      zoom: this.zoom,
    });
    this.map.on('style.load', () => {
      // Update reference to `this.map` for every child custom element.
      const slotted: any = this.element.querySelectorAll('*');
      if (slotted.length) {
        slotted.forEach((element) => {
          if (element.nodeType === 1) {
            element.map = this.map;
          }
        });
      }
    });
  }

  componentDidLoad() {
  }

  render() {
    return (
      <div class="om-map">
        <slot />
      </div>
    );
  }
}
