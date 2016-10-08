
const three = require('three')

module.exports = function({parent = document.body}) {
  const window = parent.ownerDocument.defaultView

  const renderer = new three.WebGLRenderer()
  const domme = renderer.domElement
  parent.appendChild(domme)
  const scene = new three.Scene()
  const camera = new three.PerspectiveCamera(45, parent.clientWidth/parent.clientHeight, 1, 100000)

  window.addEventListener("resize", fitToParent)
  fitToParent()

  function fitToParent () {
    renderer.setSize(parent.clientWidth, parent.clientHeight)
    camera.aspect = parent.clientWidth / parent.clientHeight
    camera.updateProjectionMatrix()
    renderOnce()
  }

  function addTestCube() {
    const cube = new three.Mesh(
      new three.BoxGeometry(1, 1, 1),
      new three.MeshBasicMaterial({color: 0xff7733, wireframe: true})
    )
    cube.position.z = -2
    scene.add(cube)
    renderOnce()
  }

  function renderForever() {
    window.requestAnimationFrame(renderForever)
    renderOnce()
  }

  function renderOnce() {
    renderer.render(scene, camera)
  }

  return {three, renderer, scene, camera, renderForever, renderOnce, addTestCube, fitToParent}
}
