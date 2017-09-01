import { Component, Element, Method, Prop, PropDidChange, State } from '@stencil/core';

declare var mapboxgl: any;

@Component({
  tag: 'mapboxgl-navigation-control',
})
export class MapboxGLNavigationControl {
  @Prop() position: string = 'top-right';

  @Prop() map: any;

  @State() navControl: any;

  @Element() element: HTMLElement;

  @PropDidChange('map')
  mapDidChange() {
    this.navControl = new mapboxgl.NavigationControl();
    this.map.addControl(this, this.position);
  }

  @Method()
  onAdd(map) {
    return this.navControl.onAdd(map);
  }

  @Method()
  onRemove() {
    this.navControl.onRemove();
    this.navControl = undefined;
  }
}
