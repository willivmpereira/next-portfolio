const withImages = require('next-images');

module.exports = withImages({
  esModule: true
});

module.exports = {
  images: {
    domains: ['wnka.co', 'i.imgur.com', 'media.graphassets.com', 'upload.wikimedia.org'],
  },
  build : { 
    transpile : [ 'gsap' ] 
  }  
}
