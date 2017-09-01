exports.config = {
  bundles: [
    { components: ['om-map', 'om-map-navigation-control'] },
    { components: ['mapboxgl-navigation-control'] },
  ],
  collections: [
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
