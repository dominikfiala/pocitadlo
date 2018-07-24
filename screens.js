const { exec } = require('child_process')
const util = require('util')

const sizes = [
  { name: 'touch-icon-iphone', size: '58/58' },
  { name: 'touch-icon-ipad', size: '152/152' },
  { name: 'touch-icon-iphone-retina', size: '180/180' },
  { name: 'touch-icon-ipad-retina', size: '167/167' },
  { name: 'touch-icon-ipad-retina', size: '167/167' },
  { name: 'pwa-icon', size: '192/192' },
  { name: 'pwa-icon-large', size: '512/512' },
  { name: 'touch-startup-image-se', size: '640/1136' },
  { name: 'touch-startup-image-se-horizontal', size: '1136/640' },
  { name: 'touch-startup-image-6s', size: '750/1334' },
  { name: 'touch-startup-image-6s-horizontal', size: '1334/750' },
]

sizes.map(item => {
  exec(util.format(
    'npx webshot --window-size=%s graphics/logo.html ./public/img/icons/%s.png',
    item.size,
    item.name
  ))
})
