// Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Hoodie Hacker Model (Head)
const hoodieGeometry = new THREE.ConeGeometry(2, 3, 32);
const hoodieMaterial = new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x00ff00, emissiveIntensity: 0.5 });
const hoodie = new THREE.Mesh(hoodieGeometry, hoodieMaterial);
hoodie.position.y = 2;
scene.add(hoodie);

// Face (Hidden in Shadow)
const faceGeometry = new THREE.SphereGeometry(1, 16, 16);
const faceMaterial = new THREE.MeshBasicMaterial({ color: 0x111111 });
const face = new THREE.Mesh(faceGeometry, faceMaterial);
face.position.y = 1;
scene.add(face);

// Floating Cyber Particles (Matrix Effect)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 500;
const positions = new Float32Array(particlesCount * 3);

for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 15;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
const particlesMaterial = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.05 });
const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Lighting (Green Cyber Glow)
const cyberLight = new THREE.PointLight(0x00ff00, 1, 15);
cyberLight.position.set(0, 3, 5);
scene.add(cyberLight);

// Camera Position
camera.position.z = 10;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    hoodie.rotation.y += 0.005;
    face.rotation.y += 0.005;
    particles.rotation.y -= 0.002;
    renderer.render(scene, camera);
}
animate();

// Resize Fix
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener("DOMContentLoaded", function() {
    const matrixEffect = document.getElementById("matrixEffect");
    const loadingText = document.getElementById("loadingText");

    const messages = [
        "<i class='fas fa-power-off'></i> <b>System Online</b>",
        "Welcome to DragonShell AI v2.1.0",
        "🔗 Join our community on Telegram: <a href='https://t.me/+fP7yovPDEz84ZWI1' target='_blank'>DragonShell AI Group</a>"
        
        ];
        
    
    function generateRandomMatrix() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
        let text = "";
        for (let i = 0; i < 12; i++) {
            let line = "";
            for (let j = 0; j < 40; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            text += line + "\n";
        }
        return text;
    }

    function startMatrixEffect() {
        let interval = setInterval(() => {
            matrixEffect.innerText = generateRandomMatrix();
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            matrixEffect.style.display = "none";
            showFinalText();
        }, 3000); // Adjust timing as needed
    }

    function showFinalText() {
        loadingText.style.display = "block";
        loadingText.innerHTML = messages.map(msg => `<span class="cmatrix-text">${msg}</span>`).join("<br>");
    }

    startMatrixEffect();
});

    
    loadingText.innerHTML = messages.join("<br>");
    
    function generateRandomMatrix() {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";
        let text = "";
        for (let i = 0; i < 12; i++) {
            let line = "";
            for (let j = 0; j < 40; j++) {
                line += chars[Math.floor(Math.random() * chars.length)];
            }
            text += line + "\n";
        }
        return text;
    }

    function startMatrixEffect() {
        let interval = setInterval(() => {
            matrixEffect.innerText = generateRandomMatrix();
        }, 100);

        setTimeout(() => {
            clearInterval(interval);
            matrixEffect.style.display = "none";
            showFinalText();
        }, 4000);
    }

    function showFinalText() {
        loadingText.style.display = "block";
        loadingText.innerHTML = `<span class="cmatrix-text">${messages[0]}</span><br>
                                 <span class="cmatrix-text">${messages[1]}</span>`;
    }

    startMatrixEffect();

document.addEventListener("DOMContentLoaded", function() {
    let matrixEffect = document.getElementById("matrixEffect");
    let loadingText = document.getElementById("loadingText");

    let matrixText = "";
    for (let i = 0; i < 30; i++) {
        matrixText += Math.random().toString(2).substring(2, 20) + "\n";
    }
    matrixEffect.innerText = matrixText;

    setTimeout(() => {
        matrixEffect.style.display = "none"; 
        loadingText.innerHTML = `
        <span class="status-icon"><i class="fas fa-dragon"></i></span> WELCOME TO DRAGON SHELL AI <br>
        <span class="status-icon"></span> Powered by Passion & Cybersecurity <br>
        <span class="status-icon"></span> Version 2.1.0 <br>
        `;

        loadingText.style.display = "block";
    }, 3000);
});
