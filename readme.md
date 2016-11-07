# three-default

Sets up a threejs scene with a camera and a renderer. Handles resizing.
Skip the normal three boilerplate.

## Usage:

```javascript
const THREE = require('three')
const init = require('three-default')

const {
  scene,
  camera,
  renderer,
  autoSize,  // function: fill parent, resize whenever necessary
  autoRender // function: render forever
} = init(THREE)

autoSize()
autoRender()

// Now add whatever you want to the scene
scene.add(
  new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({
      color: 0xff7733,
      wireframe: true
})))
camera.position.z = 2
```

```javascript
// parent defaults to document.body but it can be set explicitly
init(THREE, document.body)
```

### Try this if you want full screen:

```css
/* css */
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden
}
```
