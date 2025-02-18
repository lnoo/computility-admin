import * as THREE from "three"

// 场景、相机和渲染器设置
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1.6, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(200, 200);
renderer.setClearColor('#000b29')

// const textureLoader = new THREE.TextureLoader();
// const backgroundTexture = textureLoader.load('./bg.png');
// // 设置场景背景图
// scene.background = backgroundTexture;

// 创建点阵 geometry 和 material
const geometry = new THREE.BufferGeometry();
const count = 500;
const positions = new Float32Array(count * 3);
const colors = new Float32Array(count * 3);

// 初始化点阵的位置和颜色
for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    colors[i * 3] = Math.random();
    colors[i * 3 + 1] = Math.random();
    colors[i * 3 + 2] = Math.random();
}

geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

const material = new THREE.PointsMaterial({
    size: 0.5,
    vertexColors: true,
    transparent: true,
  opacity: 0.6,
    blending: THREE.AdditiveBlending
});

const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 30;

// 动画循环：模拟算力的变化
let time = 0;
function animate() {
    requestAnimationFrame(animate);

    time += 0.05;

    // 通过时间变化改变点的大小和颜色
    const positions = geometry.attributes.position.array;
    const colors = geometry.attributes.color.array;

    for (let i = 0; i < count; i++) {
        // 改变点的位置和颜色来模拟算力波动
        positions[i * 3 + 2] = Math.sin(time + i * 0.1) * 5;
        const colorFactor = (Math.sin(time + i * 0.1) + 1) / 2; // 在0到1之间变化
        colors[i * 3] = .1+ colorFactor * .2;
        colors[i * 3 + 1] = .1+ colorFactor * .3;
        colors[i * 3 + 2] = .6+ colorFactor * .4;

        // 动态调整点的大小
        material.size = 0.5 + 0.5 * Math.sin(time + i * 0.05);
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;

    renderer.render(scene, camera);
}

animate();
export default renderer