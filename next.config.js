const withImages = require('next-images');

module.exports = withImages({
  esModule: true
});

module.exports = {
  images: {
    domains: ['wnka.co', 'i.imgur.com', 'media.graphassets.com', 'upload.wikimedia.org', 'observatoriodocinema.uol.com.br'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    formats: ['image/png','image/jpeg', 'image/webp'],
  },
  build : { 
    transpile : [ 'gsap' ] 
  } 
}
