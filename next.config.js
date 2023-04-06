const withImages = require('next-images')

module.exports = {
  ...withImages(),
  images: {
    domains: ['wnka.co', 'i.imgur.com', 'media.graphassets.com', 'upload.wikimedia.org', 'observatoriodocinema.uol.com.br'],
  },
  build : { 
    transpile : [ 'gsap' ] 
  }  
}
