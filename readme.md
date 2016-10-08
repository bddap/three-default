
# three-default

Sets up a threejs scene with a camera and a renderer. Handles resizing. Lets you start your threejs project in a speedy manor.

## Usage:

```javascript
const init = require('three-default')

const stuff = init({
  parent: dom_node
})
```

Parent defaults to `document.body`.

## Examples:

```javascript
const init = require('three-default')
const {
  three, // threejs module for convenience
  renderer, // active threejs object
  scene, // active threejs object
  camera, // active threejs object
  renderForever, // function: re render scene every frame
  renderOnce, // function: render one frame
  addTestCube // function: for debugging
} = init()

addTestCube()
```

Canvas will automatically resize to fill parent, so make sure to set parent size.

```css
/*Full screen example.*/
html, body {
  margin: 0;
  height: 100%;
  overflow: hidden
}
```

### Node Webkit example:

```javascript
// parent argument is required in nw
init({parent: document.body}).addTestCube()
```
