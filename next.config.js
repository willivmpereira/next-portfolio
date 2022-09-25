const withImages = require('next-images');

module.exports = withImages({
  esModule: true
});

module.exports = {
  images: {
    domains: ['wnka.co', 'i.imgur.com'],
  },
  build : { 
    transpile : [ 'gsap' ] 
  }  
}
