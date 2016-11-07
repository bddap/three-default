module.exports = function(THREE, parent) {

  parent = parent || document.body

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, parent.clientWidth / parent.clientHeight, 1, 100000)
  const renderer = new THREE.WebGLRenderer()
  parent.appendChild(renderer.domElement)

  function autoSize() {
    window.addEventListener("resize", () => {
      renderer.setSize(parent.clientWidth, parent.clientHeight)
      camera.aspect = parent.clientWidth / parent.clientHeight
      camera.updateProjectionMatrix()
      renderer.render(scene, camera)
    })
  }

  function autoRender() {
    window.requestAnimationFrame(autoRender)
    renderer.render(scene, camera)
  }

  return {
    scene,
    camera,
    renderer,
    autoSize,
    autoRender
  }

}
