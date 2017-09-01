import { Component, Element, Method, Prop, PropDidChange } from '@stencil/core';

@Component({
  tag: 'om-map-navigation-control',
})
export class OMMapNavigationControl {
  @Prop() position: string = 'top-right';

  @Prop() map: any;

  @Element() element: HTMLElement;

  @PropDidChange('map')
  mapDidChange() {
    this.map.addControl(this, this.position);
  }

  @Method()
  onAdd() {
    return this.element;
  }

  @Method()
  onRemove() {
    this.element.parentElement.removeChild(this.element);
  }

  zoomIn() {
    this.map.zoomIn();
  }

  zoomOut() {
    this.map.zoomOut();
  }

  render() {
    if (this.map) {
      return (
        <div class="mapboxgl-ctrl mapboxgl-ctrl-group">
          <button class="mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-in" type="button" aria-label="Zoom In" onClick={() => this.zoomIn()}></button>
          <button class="mapboxgl-ctrl-icon mapboxgl-ctrl-zoom-out" type="button" aria-label="Zoom Out" onClick={() => this.zoomOut()}></button>
        </div>
      );
    }
  }
}
