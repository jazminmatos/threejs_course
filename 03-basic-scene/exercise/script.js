console.log(THREE)

// scene is like a container
// at some point we ask three.js to render that scene
const scene = new THREE.Scene()

// Mesh: combo of geometry (the shape) and a material (how it looks)
// start w/ BoxGeometry and a MeshBasicMaterial
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
// NEED to add the mesh to the scene
scene.add(mesh)

const sizes = {
    width: 800,
    height: 600
}

// Need to add camera to have the POV
// There are different types of camera
// parameters: Field of View, Aspect Ratio (width of render/height of render)
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
// position, rotation, scale
// position: an object w/ x/y/z properties. Three.js considers the forward/backward axis to be z
camera.position.x = 2
camera.position.y = 1
camera.position.z = 6
scene.add(camera)

// Renderer: Renders the scene from the camera POV (Many types of renderers)
// Result drawn into canvas (HTML element)
// Three.js will use WebGL to draw the render inside canvas OR three.js can do it
const canvas = document.querySelector('.webgl')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height) // updates the size of the renderer

renderer.render(scene, camera) // if this does not work, consider whether camera is in correct position or inside object