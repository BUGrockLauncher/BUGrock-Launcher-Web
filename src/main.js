// ==========================================================================
// BUGrock Launcher — Handcrafted Engine
// Real 3D Minecraft Volumetric Renderer, Tactile SFX & Interactive Mod Hub
// ==========================================================================

export const HISTORIC_VERSIONS = [
  {
    id: "v1-21-50",
    version: "1.21.50.07",
    name: "1.21.50 (Tricky Trials)",
    era: "Modern GDK",
    year: "2024",
    type: "GDK (.msixvc)",
    tag: "Latest Stable",
    status: "Verified",
    size: "642 MB",
    features: "Trial Chambers, The Mace, Wind Charges, Crafter automation, Vault rewards.",
    notes: "Requires Windows 10/11 64-bit and Microsoft Store ownership handshake."
  },
  {
    id: "v1-20-80",
    version: "1.20.80.05",
    name: "1.20.80 (Armored Paws)",
    era: "Modern GDK",
    year: "2024",
    type: "GDK (.msixvc)",
    tag: "Stable",
    status: "Verified",
    size: "618 MB",
    features: "Wolf variants, Armadillo mob, Wolf Armor, upgraded UI touch controls.",
    notes: "Includes isolated local worlds database to prevent cloud corruption."
  },
  {
    id: "v1-20-0",
    version: "1.20.0.01",
    name: "1.20.0 (Trails & Tales)",
    era: "Modern GDK",
    year: "2023",
    type: "GDK (.msixvc)",
    tag: "Major Milestone",
    status: "Verified",
    size: "580 MB",
    features: "Sniffer, Cherry Blossom Groves, Bamboo Wood, Archaeology & Armor Trims.",
    notes: "Full side-by-side isolated installation with legacy server support."
  },
  {
    id: "v1-19-50",
    version: "1.19.50.02",
    name: "1.19.50 (The Wild Update)",
    era: "Modern GDK",
    year: "2022",
    type: "GDK (.msixvc)",
    tag: "Deep Dark",
    status: "Verified",
    size: "512 MB",
    features: "The Warden, Ancient Cities, Deep Dark biome, Allay mob, Boat with Chest.",
    notes: "Supports RenderDragon shader pipelines and RTX raytracing toggle."
  },
  {
    id: "v1-18-30",
    version: "1.18.30.04",
    name: "1.18.30 (Caves & Cliffs II)",
    era: "RenderDragon Transition",
    year: "2022",
    type: "UWP (.appx)",
    tag: "World Gen Overhaul",
    status: "Verified",
    size: "468 MB",
    features: "World height expansion (Y -64 to 320), Lush Caves, Dripstone, Mountain peaks.",
    notes: "The last generation before full GDK conversion. Sideloads instantly."
  },
  {
    id: "v1-16-201",
    version: "1.16.201.01",
    name: "1.16.201 (Nether Update)",
    era: "Golden Era Bedrock",
    year: "2020",
    type: "UWP (.appx)",
    tag: "PvP Favorite",
    status: "Verified",
    size: "298 MB",
    features: "Netherite armor, Piglins, Crimson & Warped Forests, Soul Sand Valley.",
    notes: "Most stable version for competitive multiplayer servers and low latency."
  },
  {
    id: "v1-14-60",
    version: "1.14.60.05",
    name: "1.14.60 (Buzzy Bees)",
    era: "Classic Bedrock",
    year: "2019",
    type: "UWP (.appx)",
    tag: "Lightweight",
    status: "Verified",
    size: "210 MB",
    features: "Bees, Beehives, Honey blocks, Honey bottles, Redstone sticky mechanics.",
    notes: "Zero lag on low-end hardware. Runs at hundreds of FPS on integrated graphics."
  },
  {
    id: "v1-12-0",
    version: "1.12.0.28",
    name: "1.12.0 (Village & Pillage)",
    era: "Classic Bedrock",
    year: "2019",
    type: "UWP (.appx)",
    tag: "UWP Classic",
    status: "Verified",
    size: "185 MB",
    features: "Revamped Villagers, Raids, Crossbows, Pillager Outposts, Bell mechanics.",
    notes: "Direct AppX registration without Microsoft Store package re-verification."
  },
  {
    id: "v1-2-0",
    version: "1.2.0.81",
    name: "1.2.0 (Better Together)",
    era: "Birth of Bedrock",
    year: "2017",
    type: "UWP (.appx)",
    tag: "Historic Release",
    status: "Archived",
    size: "128 MB",
    features: "Unification of Pocket Edition and Windows 10 Edition under Bedrock Engine.",
    notes: "First release to introduce cross-platform server browser and armor stands."
  },
  {
    id: "v1-0-0",
    version: "1.0.0.16",
    name: "1.0.0 (The Ender Update)",
    era: "Windows 10 Beta Era",
    year: "2016",
    type: "UWP (.appx)",
    tag: "Legacy Peak",
    status: "Archived",
    size: "82 MB",
    features: "The End dimension, Ender Dragon boss, Elytra wings, Shulkers, End Cities.",
    notes: "Fully intact vintage Win10 UWP manifest preserved in BUGrock repositories."
  },
  {
    id: "v0-16-0",
    version: "0.16.0.5",
    name: "0.16.0 (The Boss Update)",
    era: "Alpha / Beta",
    year: "2016",
    type: "UWP (.appx)",
    tag: "Early Alpha",
    status: "Archived",
    size: "46 MB",
    features: "The Wither, Ocean Monuments, Guardians, Elder Guardians, Slash Commands.",
    notes: "Super lightweight, instant boot in under 0.2 seconds."
  },
  {
    id: "v0-14-0-1",
    version: "0.14.0.1",
    name: "0.14.0.1 (Overworld Update)",
    era: "Origins (PE Windows 10)",
    year: "2016",
    type: "UWP (.appx)",
    tag: "Oldest Indexed Build",
    status: "Genesis",
    size: "34 MB",
    features: "Redstone Repeaters, Comparators, Dispensers, Droppers, Hoppers, Cauldrons.",
    notes: "The earliest surviving public release for Windows 10 Edition."
  }
];

export const CURATED_MODS = [
  {
    id: "shader-lumina",
    title: "Lumina Deferred PBR Shaders",
    author: "HyperReal Studio",
    category: "shader",
    source: "MCPEDL",
    version: "v3.2",
    rating: "4.9",
    downloads: "820K+",
    size: "8.4 MB",
    badge: "Staff Pick",
    desc: "Next-gen deferred lighting with screen-space reflections, volumetric fog, and authentic block roughness textures.",
    details: "Supports RenderDragon 1.21+ deferred technical preview. Completely transforms nighttime illumination, water caustics, and glowstone bounce."
  },
  {
    id: "origins-addon",
    title: "Origins Bedrock Edition Add-on",
    author: "ApshaDev",
    category: "addon",
    source: "CurseForge",
    version: "v2.6",
    rating: "4.8",
    downloads: "1.4M+",
    size: "18.6 MB",
    badge: "Trending",
    desc: "Choose from 12 mythological origins with custom abilities, flight, underwater breathing, or phasing through walls.",
    details: "Faithful recreation of the famous Java mod using modern Molang entity scripts. Works on singleplayer and dedicated Bedrock servers."
  },
  {
    id: "worldedit-be",
    title: "WorldEdit Bedrock Scripting",
    author: "Scommander",
    category: "addon",
    source: "CurseForge",
    version: "v1.18",
    rating: "5.0",
    downloads: "2.1M+",
    size: "4.2 MB",
    badge: "Essential",
    desc: "The ultimate in-game terraforming and building tool. //set, //sphere, //brush, and schematic loading in Bedrock.",
    details: "Utilizes GameTest and Script API to execute lightning-fast block operations directly within your active world instance."
  },
  {
    id: "tyrannus-ui",
    title: "Tyrannus Minimalist Dark UI",
    author: "BedrockCraft",
    category: "ui",
    source: "MCPEDL",
    version: "v4.0",
    rating: "4.8",
    downloads: "610K+",
    size: "3.1 MB",
    badge: "PvP UI",
    desc: "Clean dark mode interface with low-profile HUD, transparent inventory menus, armor durability counter, and quick-craft.",
    details: "Removes distracting screen clutter and increases visibility in battle. Optimized for 1080p and 4K displays."
  },
  {
    id: "bare-bones",
    title: "Bare Bones Trailer Style Pack",
    author: "RobotPantaloons",
    category: "resource",
    source: "CurseForge",
    version: "v1.21",
    rating: "4.9",
    downloads: "940K+",
    size: "14.2 MB",
    badge: "Clean Style",
    desc: "Recreates the clean, vibrant, simplified aesthetic seen in official animated Minecraft trailers.",
    details: "Simplifies all block textures to vibrant, punchy colors and minimalist details. Great for competitive PvP and boosting performance."
  },
  {
    id: "kingdom-world",
    title: "Aethelgard Medieval RPG Adventure",
    author: "MythicCrafters",
    category: "world",
    source: "MCPEDL",
    version: "v1.1",
    rating: "4.7",
    downloads: "150K+",
    size: "112.0 MB",
    badge: "Custom World",
    desc: "Handcrafted medieval RPG map with custom quest NPCs, 5 dungeons, and unique boss fights.",
    details: "Over 2,000x2,000 blocks of custom terrain, complete voice-acted dialogue sequences, and safe multi-instance staging."
  }
];

// ==========================================================================
// Web Audio API Synthesizer (Zero-Latency Tactile Sound Clicks)
// ==========================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  playClick(pitch = 750, dur = 0.035) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, now);
    osc.frequency.exponentialRampToValueAtTime(pitch * 0.4, now + dur);

    gain.gain.setValueAtTime(0.06, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + dur);
  }

  playLevelUp() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    [440, 554, 659, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + idx * 0.07;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.15);
    });
  }

  playPop() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(780, now + 0.07);
    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.07);
  }
}

const sfx = new SoundFX();

// ==========================================================================
// TRUE 3D MINECRAFT VOLUMETRIC MODEL RENDERER
// Real perspective projection, 3D cuboids, depth sorting & face interpolation
// ==========================================================================
class MinecraftModel3D {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.modelType = 'steve'; // 'steve' | 'alex' | 'bugrock'
    
    // Rotation angles
    this.angleY = -0.45;
    this.angleX = -0.16; // slight downward pitch to view top of head/pedestal
    this.autoRotate = true;
    this.isDragging = false;
    this.lastX = 0;
    this.lastY = 0;
    this.inactivityTimer = null;
    this.time = 0;

    this.initEvents();
    this.render();
  }

  setModel(type) {
    this.modelType = type;
  }

  initEvents() {
    const handleStart = (x, y) => {
      this.isDragging = true;
      this.autoRotate = false;
      this.lastX = x;
      this.lastY = y;
      if (this.inactivityTimer) clearTimeout(this.inactivityTimer);
    };

    const handleMove = (x, y) => {
      if (!this.isDragging) return;
      const dx = x - this.lastX;
      const dy = y - this.lastY;
      this.angleY += dx * 0.012;
      this.angleX += dy * 0.008;
      // Clamp pitch to realistic range
      this.angleX = Math.max(-0.45, Math.min(0.25, this.angleX));
      this.lastX = x;
      this.lastY = y;
    };

    const handleEnd = () => {
      if (!this.isDragging) return;
      this.isDragging = false;
      this.inactivityTimer = setTimeout(() => {
        this.autoRotate = true;
      }, 2500);
    };

    this.canvas.addEventListener('mousedown', (e) => handleStart(e.clientX, e.clientY));
    window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    window.addEventListener('mouseup', handleEnd);

    this.canvas.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    window.addEventListener('touchend', handleEnd);
  }

  // Project a 3D vertex to 2D screen coordinates
  project(v, camDist = 480) {
    // 1. Rotate around Y (Azimuth)
    const cosY = Math.cos(this.angleY), sinY = Math.sin(this.angleY);
    const x1 = v[0] * cosY + v[2] * sinY;
    const z1 = -v[0] * sinY + v[2] * cosY;
    const y1 = v[1];

    // 2. Rotate around X (Pitch)
    const cosX = Math.cos(this.angleX), sinX = Math.sin(this.angleX);
    const y2 = y1 * cosX - z1 * sinX;
    const z2 = y1 * sinX + z1 * cosX;
    const x2 = x1;

    // 3. Perspective Projection
    const scale = camDist / (camDist + z2);
    const cx = this.canvas.width / 2;
    const cy = this.canvas.height / 2 + 8; // slight offset for pedestal balance

    return {
      x: cx + x2 * scale,
      y: cy + y2 * scale,
      z: z2,
      scale: scale
    };
  }

  // Rotate a point around a local pivot on X axis (for swinging limbs)
  rotateLimb(v, pivot, pitch) {
    const dy = v[1] - pivot[1];
    const dz = v[2] - pivot[2];
    const cosP = Math.cos(pitch), sinP = Math.sin(pitch);
    return [
      v[0],
      pivot[1] + dy * cosP - dz * sinP,
      pivot[2] + dy * sinP + dz * cosP
    ];
  }

  // Generate 6 faces of a 3D cuboid
  createCuboid(cx, cy, cz, w, h, d, colors, partName, pivot = null, limbPitch = 0) {
    const hw = w / 2, hh = h / 2, hd = d / 2;
    let rawVerts = [
      [-hw, -hh,  hd], // 0: top-front-left
      [ hw, -hh,  hd], // 1: top-front-right
      [ hw,  hh,  hd], // 2: bottom-front-right
      [-hw,  hh,  hd], // 3: bottom-front-left
      [-hw, -hh, -hd], // 4: top-back-left
      [ hw, -hh, -hd], // 5: top-back-right
      [ hw,  hh, -hd], // 6: bottom-back-right
      [-hw,  hh, -hd]  // 7: bottom-back-left
    ];

    // Shift to center
    rawVerts = rawVerts.map(v => [v[0] + cx, v[1] + cy, v[2] + cz]);

    // Apply limb swing if specified
    if (pivot && limbPitch !== 0) {
      rawVerts = rawVerts.map(v => this.rotateLimb(v, pivot, limbPitch));
    }

    const quads = [
      { name: 'front', indices: [0, 1, 2, 3], normal: [0, 0, 1] },
      { name: 'back',  indices: [5, 4, 7, 6], normal: [0, 0, -1] },
      { name: 'top',   indices: [4, 5, 1, 0], normal: [0, -1, 0] },
      { name: 'bottom',indices: [3, 2, 6, 7], normal: [0, 1, 0] },
      { name: 'left',  indices: [4, 0, 3, 7], normal: [-1, 0, 0] },
      { name: 'right', indices: [1, 5, 6, 2], normal: [1, 0, 0] }
    ];

    const projectedVerts = rawVerts.map(v => this.project(v));

    const faces = [];
    quads.forEach(q => {
      const p0 = projectedVerts[q.indices[0]];
      const p1 = projectedVerts[q.indices[1]];
      const p2 = projectedVerts[q.indices[2]];
      const p3 = projectedVerts[q.indices[3]];

      // Backface Culling via 2D screen cross product
      const cp = (p1.x - p0.x) * (p2.y - p1.y) - (p1.y - p0.y) * (p2.x - p1.x);
      if (cp <= 0) return; // Cull back-facing polygons

      // Depth for painter's algorithm
      const avgZ = (p0.z + p1.z + p2.z + p3.z) / 4;

      // Volumetric directional lighting
      // Transform normal by angleY & angleX
      const cosY = Math.cos(this.angleY), sinY = Math.sin(this.angleY);
      const nx1 = q.normal[0] * cosY + q.normal[2] * sinY;
      const nz1 = -q.normal[0] * sinY + q.normal[2] * cosY;
      const ny1 = q.normal[1];

      const cosX = Math.cos(this.angleX), sinX = Math.sin(this.angleX);
      const ny2 = ny1 * cosX - nz1 * sinX;
      const nz2 = ny1 * sinX + nz1 * cosX;
      const nx2 = nx1;

      // Light direction from top-front-right
      const lx = 0.38, ly = -0.75, lz = -0.55;
      const dot = Math.max(0, -(nx2 * lx + ny2 * ly + nz2 * lz));
      const lightFactor = 0.52 + 0.48 * dot;

      const baseColor = colors[q.name] || colors.all || '#888888';

      faces.push({
        partName,
        faceName: q.name,
        avgZ,
        pts: [p0, p1, p2, p3],
        baseColor,
        lightFactor
      });
    });

    return faces;
  }

  // Adjust brightness of a hex color
  shadeColor(hex, factor) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const num = parseInt(hex, 16);
    let r = Math.min(255, Math.floor(((num >> 16) & 255) * factor));
    let g = Math.min(255, Math.floor(((num >> 8) & 255) * factor));
    let b = Math.min(255, Math.floor((num & 255) * factor));
    return `rgb(${r}, ${g}, ${b})`;
  }

  // Bilinear interpolation on a quad for face features (eyes, hair fringe)
  interpolateQuad(p0, p1, p2, p3, u, v) {
    const xTop = p0.x + (p1.x - p0.x) * u;
    const yTop = p0.y + (p1.y - p0.y) * u;
    const xBot = p3.x + (p2.x - p3.x) * u;
    const yBot = p3.y + (p2.y - p3.y) * u;
    return {
      x: xTop + (xBot - xTop) * v,
      y: yTop + (yBot - yTop) * v
    };
  }

  drawSubQuad(pts, u0, v0, u1, v1, color) {
    const sp0 = this.interpolateQuad(pts[0], pts[1], pts[2], pts[3], u0, v0);
    const sp1 = this.interpolateQuad(pts[0], pts[1], pts[2], pts[3], u1, v0);
    const sp2 = this.interpolateQuad(pts[0], pts[1], pts[2], pts[3], u1, v1);
    const sp3 = this.interpolateQuad(pts[0], pts[1], pts[2], pts[3], u0, v1);

    this.ctx.beginPath();
    this.ctx.moveTo(sp0.x, sp0.y);
    this.ctx.lineTo(sp1.x, sp1.y);
    this.ctx.lineTo(sp2.x, sp2.y);
    this.ctx.lineTo(sp3.x, sp3.y);
    this.ctx.closePath();
    this.ctx.fillStyle = color;
    this.ctx.fill();
  }

  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.autoRotate) {
      this.angleY += 0.016;
    }
    this.time += 0.035;

    // Limb animations
    const armPitch = Math.sin(this.time) * 0.22;
    const legPitch = -Math.sin(this.time) * 0.22;
    const headBob = Math.sin(this.time * 2) * 1.0;

    // Skin Color Themes
    let palette;
    if (this.modelType === 'alex') {
      palette = {
        skin: '#d8a180',
        hair: '#c85623',
        eyeSclera: '#ffffff',
        eyePupil: '#2e8b57',
        shirt: '#5b8731',
        pants: '#6b5839',
        shoes: '#34302c',
        armWidth: 10
      };
    } else if (this.modelType === 'bugrock') {
      palette = {
        skin: '#c4a287',
        hair: '#10b981',
        eyeSclera: '#ffffff',
        eyePupil: '#10b981',
        shirt: '#161922',
        pants: '#1e2433',
        shoes: '#0b0d13',
        armWidth: 13
      };
    } else {
      // Default Steve
      palette = {
        skin: '#b87e5b',
        hair: '#4a3018',
        eyeSclera: '#ffffff',
        eyePupil: '#2b58bf',
        shirt: '#008b8b',
        pants: '#22388e',
        shoes: '#262626',
        armWidth: 13
      };
    }

    const allFaces = [];

    // 1. Pedestal Base (Stone slab at feet with emerald trim)
    const baseColors = {
      top: '#161924',
      front: '#0e111a',
      back: '#0e111a',
      left: '#0a0d14',
      right: '#121520',
      bottom: '#06070a'
    };
    allFaces.push(...this.createCuboid(0, 68, 0, 96, 7, 96, baseColors, 'pedestal'));

    // 2. Head (32x32x32)
    const headColors = {
      front: palette.skin,
      back: palette.hair,
      top: palette.hair,
      bottom: palette.skin,
      left: palette.hair,
      right: palette.hair
    };
    allFaces.push(...this.createCuboid(0, -56 + headBob, 0, 32, 32, 32, headColors, 'head'));

    // 3. Torso (Body 32x44x16)
    const torsoColors = {
      front: palette.shirt,
      back: palette.shirt,
      top: palette.shirt,
      bottom: palette.pants,
      left: palette.shirt,
      right: palette.shirt
    };
    allFaces.push(...this.createCuboid(0, -18, 0, 32, 44, 16, torsoColors, 'torso'));

    // 4. Arms
    const armW = palette.armWidth;
    const armColors = {
      top: palette.shirt,
      bottom: palette.skin,
      front: palette.shirt,
      back: palette.shirt,
      left: palette.shirt,
      right: palette.shirt
    };
    // Right Arm
    const rArmX = -(16 + armW / 2);
    allFaces.push(...this.createCuboid(rArmX, -18, 0, armW, 44, 14, armColors, 'rightArm', [rArmX, -38, 0], armPitch));
    // Left Arm
    const lArmX = 16 + armW / 2;
    allFaces.push(...this.createCuboid(lArmX, -18, 0, armW, 44, 14, armColors, 'leftArm', [lArmX, -38, 0], -armPitch));

    // 5. Legs
    const legColors = {
      top: palette.pants,
      bottom: palette.shoes,
      front: palette.pants,
      back: palette.pants,
      left: palette.pants,
      right: palette.pants
    };
    // Right Leg
    allFaces.push(...this.createCuboid(-8, 26, 0, 15, 44, 15, legColors, 'rightLeg', [-8, 4, 0], -legPitch));
    // Left Leg
    allFaces.push(...this.createCuboid(8, 26, 0, 15, 44, 15, legColors, 'leftLeg', [8, 4, 0], legPitch));

    // Sort faces by depth: Highest Z drawn first (Painter's Algorithm)
    allFaces.sort((a, b) => b.avgZ - a.avgZ);

    // Render every visible quad
    allFaces.forEach(face => {
      const finalColor = this.shadeColor(face.baseColor, face.lightFactor);

      this.ctx.beginPath();
      this.ctx.moveTo(face.pts[0].x, face.pts[0].y);
      this.ctx.lineTo(face.pts[1].x, face.pts[1].y);
      this.ctx.lineTo(face.pts[2].x, face.pts[2].y);
      this.ctx.lineTo(face.pts[3].x, face.pts[3].y);
      this.ctx.closePath();

      this.ctx.fillStyle = finalColor;
      this.ctx.fill();

      this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
      this.ctx.lineWidth = 0.5;
      this.ctx.stroke();

      // Draw Perspective Face Texture on Front of Head
      if (face.partName === 'head' && face.faceName === 'front') {
        const hairShaded = this.shadeColor(palette.hair, face.lightFactor);
        const whiteShaded = this.shadeColor(palette.eyeSclera, face.lightFactor);
        const pupilShaded = this.shadeColor(palette.eyePupil, face.lightFactor);

        // Hair fringe across top 25%
        this.drawSubQuad(face.pts, 0, 0, 1, 0.28, hairShaded);
        this.drawSubQuad(face.pts, 0, 0.28, 0.18, 0.42, hairShaded);
        this.drawSubQuad(face.pts, 0.82, 0.28, 1, 0.42, hairShaded);

        // Eyes (Left & Right with white sclera and pupil)
        // Right eye (on character's right, viewer's left)
        this.drawSubQuad(face.pts, 0.14, 0.52, 0.42, 0.68, whiteShaded);
        this.drawSubQuad(face.pts, 0.28, 0.52, 0.42, 0.68, pupilShaded);

        // Left eye (on character's left, viewer's right)
        this.drawSubQuad(face.pts, 0.58, 0.52, 0.86, 0.68, whiteShaded);
        this.drawSubQuad(face.pts, 0.58, 0.52, 0.72, 0.68, pupilShaded);

        // Nose/Mouth shadow
        const shadowShaded = this.shadeColor('#875236', face.lightFactor);
        this.drawSubQuad(face.pts, 0.38, 0.78, 0.62, 0.88, shadowShaded);
      }

      // Draw Hands on Arm Bottoms
      if ((face.partName === 'leftArm' || face.partName === 'rightArm') && face.faceName === 'front') {
        const skinHand = this.shadeColor(palette.skin, face.lightFactor);
        this.drawSubQuad(face.pts, 0, 0.74, 1, 1, skinHand);
      }

      // Draw Shoes on Leg Bottoms
      if ((face.partName === 'leftLeg' || face.partName === 'rightLeg') && face.faceName === 'front') {
        const shoeColor = this.shadeColor(palette.shoes, face.lightFactor);
        this.drawSubQuad(face.pts, 0, 0.82, 1, 1, shoeColor);
      }

      // Pedestal Emerald Bevel Line
      if (face.partName === 'pedestal' && face.faceName === 'top') {
        this.ctx.strokeStyle = 'rgba(16, 185, 129, 0.45)';
        this.ctx.lineWidth = 1.2;
        this.ctx.stroke();
      }
    });

    requestAnimationFrame(() => this.render());
  }
}

// ==========================================================================
// DOM Initialization & Interactive Orchestrations
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // 1. Organic Voxel Dust Canvas (Anti-Neon Palette)
  const pCanvas = document.getElementById('particles-canvas');
  if (pCanvas) {
    const ctx = pCanvas.getContext('2d');
    let width = pCanvas.width = window.innerWidth;
    let height = pCanvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      width = pCanvas.width = window.innerWidth;
      height = pCanvas.height = window.innerHeight;
    });

    const particles = [];
    const colors = [
      'rgba(16, 185, 129, ',   // Refined Emerald
      'rgba(255, 255, 255, ',   // Starlight Off-White
      'rgba(148, 163, 184, ',   // Muted Slate
      'rgba(217, 119, 6, '      // Warm Amber Accent
    ];

    for (let i = 0; i < 35; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 1.5,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: (Math.random() - 0.5) * 0.35 - 0.15,
        alpha: Math.random() * 0.45 + 0.1,
        colorBase: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI,
        rotSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    function animateParticles() {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.colorBase + p.alpha + ')';
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });

      requestAnimationFrame(animateParticles);
    }

    animateParticles();
  }

  // 2. Audio Toggle Button
  const soundToggleBtn = document.getElementById('sound-toggle-btn');
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', () => {
      sfx.muted = !sfx.muted;
      soundToggleBtn.innerHTML = sfx.muted 
        ? '<span>🔇 Audio Muted</span>' 
        : '<span>🔊 SFX: Active</span>';
      soundToggleBtn.classList.toggle('text-[#64748b]', sfx.muted);
      soundToggleBtn.classList.toggle('text-[#10b981]', !sfx.muted);
      if (!sfx.muted) sfx.playPop();
    });
  }

  // 3. 3D Tilt Parallax on Hero Card
  const heroStage = document.getElementById('hero-tilt-stage');
  const heroCard = document.getElementById('hero-tilt-card');
  if (heroStage && heroCard) {
    heroStage.addEventListener('mousemove', (e) => {
      const rect = heroStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotY = (x / (rect.width / 2)) * 8;
      const rotX = -(y / (rect.height / 2)) * 8;
      heroCard.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015, 1.015, 1.015)`;
    });

    heroStage.addEventListener('mouseleave', () => {
      heroCard.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }

  // 4. Historical Version Scrubber & Live Boot Log Console
  const versionsListContainer = document.getElementById('versions-list');
  const versionSearchInput = document.getElementById('version-search-input');
  const activeVerTitle = document.getElementById('active-version-title');
  const activeVerTag = document.getElementById('active-version-tag');
  const activeVerDesc = document.getElementById('active-version-desc');
  const activeVerSize = document.getElementById('active-version-size');
  const activeVerType = document.getElementById('active-version-type');
  const activeVerNotes = document.getElementById('active-version-notes');
  const terminalConsole = document.getElementById('terminal-log-output');

  let currentSelectedVer = HISTORIC_VERSIONS[0];

  function renderVersionsList(filter = '') {
    if (!versionsListContainer) return;
    versionsListContainer.innerHTML = '';

    const term = filter.toLowerCase().trim();
    const filtered = HISTORIC_VERSIONS.filter(v => 
      v.name.toLowerCase().includes(term) ||
      v.version.toLowerCase().includes(term) ||
      v.era.toLowerCase().includes(term) ||
      v.type.toLowerCase().includes(term)
    );

    if (filtered.length === 0) {
      versionsListContainer.innerHTML = `
        <div class="p-6 text-center text-xs font-mono text-[#64748b]">
          No matching builds found. Try searching "1.20", "0.14", "Nether", or "AppX".
        </div>
      `;
      return;
    }

    filtered.forEach(v => {
      const isSelected = v.id === currentSelectedVer.id;
      const item = document.createElement('div');
      item.className = `p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between font-mono text-xs ${
        isSelected 
          ? 'bg-[#10b981]/15 border-[#10b981]/50 text-white shadow-md' 
          : 'bg-[#090b10] border-white/5 text-[#94a3b8] hover:border-white/20 hover:text-white'
      }`;

      item.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="w-2 h-2 rounded-full ${isSelected ? 'bg-[#10b981] live-pulse' : 'bg-white/20'}"></span>
          <div>
            <div class="font-bold text-sm ${isSelected ? 'text-white' : 'text-[#e2e8f0]'}">${v.name}</div>
            <div class="text-[11px] text-[#64748b]">${v.era} • ${v.year}</div>
          </div>
        </div>
        <div class="text-right">
          <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${
            v.type.includes('GDK') 
              ? 'bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30' 
              : 'bg-white/10 text-slate-300 border border-white/15'
          }">${v.type}</span>
          <div class="text-[10px] text-[#64748b] mt-1">${v.size}</div>
        </div>
      `;

      item.addEventListener('click', () => {
        sfx.playClick(680);
        currentSelectedVer = v;
        renderVersionsList(filter);
        updateActiveVersionDisplay(v);
        simulateBootLog(v);
      });

      versionsListContainer.appendChild(item);
    });
  }

  function updateActiveVersionDisplay(v) {
    if (activeVerTitle) activeVerTitle.textContent = v.name;
    if (activeVerTag) activeVerTag.textContent = v.tag;
    if (activeVerDesc) activeVerDesc.textContent = v.features;
    if (activeVerSize) activeVerSize.textContent = v.size;
    if (activeVerType) activeVerType.textContent = v.type;
    if (activeVerNotes) activeVerNotes.textContent = v.notes;
  }

  function simulateBootLog(v) {
    if (!terminalConsole) return;
    terminalConsole.innerHTML = `
      <div class="text-[#64748b]">[12:00:01] <span class="text-white">BUGrock Core Engine v1.0.0 (x64)</span></div>
      <div class="text-[#64748b]">[12:00:02] Querying local index for: <span class="text-[#10b981]">${v.version}</span></div>
      <div class="text-[#64748b]">[12:00:02] Package format: <span class="text-[#34d399]">${v.type}</span> (${v.size})</div>
      <div class="text-[#64748b]">[12:00:03] Staging isolated sandbox at: <span class="text-white">Instances/${v.id}/</span></div>
      <div class="text-[#64748b]">[12:00:03] com.mojang safety checkpoint: <span class="text-[#10b981]">OK (100% Isolated)</span></div>
      <div class="text-[#10b981] font-bold">[12:00:04] Ready for instant launch without Store conflicts.</div>
    `;
  }

  if (versionSearchInput) {
    versionSearchInput.addEventListener('input', (e) => {
      renderVersionsList(e.target.value);
    });
  }

  renderVersionsList();
  if (currentSelectedVer) simulateBootLog(currentSelectedVer);

  // 5. In-World Add-on Injector Step-by-Step Interactive Demo
  const btnInjectDemo = document.getElementById('btn-run-injector-demo');
  const injectStepDisplay = document.getElementById('injector-step-log');
  if (btnInjectDemo && injectStepDisplay) {
    btnInjectDemo.addEventListener('click', () => {
      sfx.playLevelUp();
      const steps = [
        "Scanning target world: 'Survival Kingdom' (level.dat verified)",
        "Extracting .mcaddon manifests (BP & RP UUID validation)",
        "Injecting behavioral definitions directly to world_behavior_packs.json",
        "Binding custom textures to world_resource_packs.json",
        "Injection Complete! World is ready to play immediately."
      ];

      injectStepDisplay.innerHTML = '';
      btnInjectDemo.disabled = true;
      btnInjectDemo.classList.add('opacity-50');

      steps.forEach((st, idx) => {
        setTimeout(() => {
          sfx.playClick(600 + idx * 70);
          const p = document.createElement('div');
          p.className = idx === steps.length - 1 ? 'text-[#10b981] font-bold' : 'text-[#cbd5e1]';
          p.textContent = `➔ ${st}`;
          injectStepDisplay.appendChild(p);

          if (idx === steps.length - 1) {
            btnInjectDemo.disabled = false;
            btnInjectDemo.classList.remove('opacity-50');
          }
        }, idx * 450);
      });
    });
  }

  // 6. Interactive Mod Hub with Category Filters & Search
  const modCardsContainer = document.getElementById('mod-cards-container');
  const modFilterBtns = document.querySelectorAll('.mod-category-btn');
  const modSearchInput = document.getElementById('mod-search-input');
  let currentCategory = 'all';

  function renderModCards(cat = 'all', query = '') {
    if (!modCardsContainer) return;
    modCardsContainer.innerHTML = '';

    const q = query.toLowerCase().trim();
    const filtered = CURATED_MODS.filter(m => {
      const matchCat = cat === 'all' || m.category === cat;
      const matchQ = m.title.toLowerCase().includes(q) || 
                     m.author.toLowerCase().includes(q) || 
                     m.desc.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    if (filtered.length === 0) {
      modCardsContainer.innerHTML = `
        <div class="col-span-full p-8 text-center text-xs font-mono text-[#64748b] glass-panel">
          No add-ons match your criteria. Try switching categories or clearing search.
        </div>
      `;
      return;
    }

    filtered.forEach(m => {
      const card = document.createElement('div');
      card.className = 'glass-panel p-5 flex flex-col justify-between hover:-translate-y-1 transition-transform cursor-pointer group';
      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-slate-300 border border-white/10">
              ${m.badge}
            </span>
            <div class="flex items-center gap-1 text-xs font-mono text-[#d97706]">
              <span>★</span>
              <span>${m.rating}</span>
            </div>
          </div>
          <h3 class="font-bold text-white text-base group-hover:text-[#10b981] transition-colors leading-snug mb-1">
            ${m.title}
          </h3>
          <div class="text-[11px] font-mono text-[#64748b] mb-3">
            By <span class="text-[#cbd5e1]">${m.author}</span> • Source: ${m.source}
          </div>
          <p class="text-xs text-[#94a3b8] font-sans leading-relaxed mb-4">
            ${m.desc}
          </p>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#64748b]">
          <div>
            <span>${m.size}</span> • <span class="text-[#34d399]">${m.downloads}</span>
          </div>
          <button type="button" class="btn-inspect-mod px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 text-white hover:bg-[#10b981] hover:text-black font-semibold transition-colors">
            Inspect
          </button>
        </div>
      `;

      card.querySelector('.btn-inspect-mod').addEventListener('click', (e) => {
        e.stopPropagation();
        sfx.playClick(900);
        openModInspector(m);
      });

      card.addEventListener('click', () => {
        sfx.playClick(750);
        openModInspector(m);
      });

      modCardsContainer.appendChild(card);
    });
  }

  modFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick(800);
      modFilterBtns.forEach(b => {
        b.classList.remove('bg-[#10b981]', 'text-black', 'border-[#10b981]');
        b.classList.add('bg-white/5', 'text-[#94a3b8]', 'border-white/10');
      });
      btn.classList.add('bg-[#10b981]', 'text-black', 'border-[#10b981]');
      btn.classList.remove('bg-white/5', 'text-[#94a3b8]', 'border-white/10');
      currentCategory = btn.getAttribute('data-cat');
      renderModCards(currentCategory, modSearchInput ? modSearchInput.value : '');
    });
  });

  if (modSearchInput) {
    modSearchInput.addEventListener('input', (e) => {
      renderModCards(currentCategory, e.target.value);
    });
  }

  renderModCards();

  // Mod Inspector Modal Dialog
  const modModal = document.getElementById('mod-inspector-modal');
  const modModalClose = document.getElementById('mod-modal-close');
  const modalTitle = document.getElementById('modal-mod-title');
  const modalAuthor = document.getElementById('modal-mod-author');
  const modalDesc = document.getElementById('modal-mod-desc');
  const modalDetails = document.getElementById('modal-mod-details');
  const modalSize = document.getElementById('modal-mod-size');
  const modalDownloads = document.getElementById('modal-mod-downloads');
  const modalRating = document.getElementById('modal-mod-rating');
  const btnMockInject = document.getElementById('btn-modal-mock-inject');

  function openModInspector(mod) {
    if (!modModal) return;
    if (modalTitle) modalTitle.textContent = mod.title;
    if (modalAuthor) modalAuthor.textContent = `Author: ${mod.author} • Source: ${mod.source}`;
    if (modalDesc) modalDesc.textContent = mod.desc;
    if (modalDetails) modalDetails.textContent = mod.details;
    if (modalSize) modalSize.textContent = mod.size;
    if (modalDownloads) modalDownloads.textContent = mod.downloads;
    if (modalRating) modalRating.textContent = `★ ${mod.rating}`;

    modModal.classList.add('open');
  }

  if (modModalClose) {
    modModalClose.addEventListener('click', () => {
      sfx.playClick(600);
      modModal.classList.remove('open');
    });
  }

  if (modModal) {
    modModal.addEventListener('click', (e) => {
      if (e.target === modModal) {
        modModal.classList.remove('open');
      }
    });
  }

  if (btnMockInject) {
    btnMockInject.addEventListener('click', () => {
      sfx.playLevelUp();
      const originalText = btnMockInject.innerHTML;
      btnMockInject.innerHTML = '<span>✓ Injected into Active World!</span>';
      btnMockInject.classList.remove('btn-flagship-green');
      btnMockInject.classList.add('bg-white', 'text-black');
      setTimeout(() => {
        btnMockInject.innerHTML = originalText;
        btnMockInject.classList.add('btn-flagship-green');
        btnMockInject.classList.remove('bg-white', 'text-black');
      }, 2500);
    });
  }

  // 7. Windows Subsystem Diagnostic Scanner (5-Point Check)
  const btnRunDiag = document.getElementById('btn-run-diagnostics');
  const diagLogList = document.getElementById('diagnostic-log-list');
  const diagProgressBar = document.getElementById('diag-progress-bar');
  const diagOverallStatus = document.getElementById('diag-overall-status');

  const DIAGNOSTIC_CHECKS = [
    { id: "gamingsvc", name: "Windows Gaming Services (GamingServices.exe)", ok: true, latency: "0.4ms" },
    { id: "appx", name: "Windows Developer Mode / AppX Sideloading", ok: true, latency: "1.1ms" },
    { id: "uwp_perm", name: "UWP File System Isolation & Junction Bridges", ok: true, latency: "0.2ms" },
    { id: "webview2", name: "Microsoft Edge WebView2 Embedded Runtime", ok: true, latency: "0.8ms" },
    { id: "discord", name: "Discord RPC IPC Pipe Detection", ok: true, latency: "1.4ms" }
  ];

  if (btnRunDiag && diagLogList) {
    btnRunDiag.addEventListener('click', () => {
      sfx.playClick(900);
      btnRunDiag.disabled = true;
      btnRunDiag.classList.add('opacity-50');
      diagLogList.innerHTML = '';
      if (diagProgressBar) diagProgressBar.style.width = '0%';
      if (diagOverallStatus) diagOverallStatus.textContent = 'SCANNING SUBSYSTEMS...';

      DIAGNOSTIC_CHECKS.forEach((chk, idx) => {
        setTimeout(() => {
          sfx.playClick(700 + idx * 60);
          const percent = ((idx + 1) / DIAGNOSTIC_CHECKS.length) * 100;
          if (diagProgressBar) diagProgressBar.style.width = `${percent}%`;

          const row = document.createElement('div');
          row.className = 'p-3 rounded-lg border border-white/5 bg-[#090b10] flex items-center justify-between text-xs font-mono';
          row.innerHTML = `
            <div class="flex items-center gap-2">
              <span class="text-[#10b981]">✓</span>
              <span class="text-white">${chk.name}</span>
            </div>
            <div class="flex items-center gap-2 text-[11px] text-[#64748b]">
              <span>${chk.latency}</span>
              <span class="px-2 py-0.5 rounded bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30">ACTIVE</span>
            </div>
          `;
          diagLogList.appendChild(row);

          if (idx === DIAGNOSTIC_CHECKS.length - 1) {
            sfx.playLevelUp();
            btnRunDiag.disabled = false;
            btnRunDiag.classList.remove('opacity-50');
            if (diagOverallStatus) {
              diagOverallStatus.innerHTML = '<span class="text-[#10b981]">ALL SUBSYSTEMS 100% OPERATIONAL</span>';
            }
          }
        }, (idx + 1) * 380);
      });
    });
  }

  // 8. Real 3D Steve / Alex / BUG Guy Wardrobe Canvas Turntable
  const skinCanvas = document.getElementById('skin-preview-canvas');
  const skinSelectBtns = document.querySelectorAll('.skin-model-select-btn');

  if (skinCanvas) {
    const skinEngine = new MinecraftModel3D(skinCanvas);

    skinSelectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick(850);
        skinSelectBtns.forEach(b => {
          b.classList.remove('btn-flagship-green', 'text-white');
          b.classList.add('btn-flagship-ghost', 'text-[#94a3b8]');
        });
        btn.classList.add('btn-flagship-green', 'text-white');
        btn.classList.remove('btn-flagship-ghost', 'text-[#94a3b8]');
        const model = btn.getAttribute('data-skin');
        skinEngine.setModel(model);
      });
    });
  }

  // 9. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.flagship-faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        sfx.playClick(680);
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) item.classList.add('active');
      });
    }
  });

  // 10. Easter Egg: 5 Clicks on Voxel Cube Logo
  const easterCube = document.getElementById('easter-voxel-cube');
  let clickCount = 0;
  if (easterCube) {
    easterCube.addEventListener('click', (e) => {
      e.preventDefault();
      clickCount++;
      sfx.playClick(500 + clickCount * 120);
      if (clickCount >= 5) {
        sfx.playLevelUp();
        alert("🎉 BUGrock Launcher Secret Unlocked! You're running the premier high-performance Bedrock platform for Windows.");
        clickCount = 0;
      }
    });
  }

  // 11. Hero Launch Button Feedback
  const heroLaunchBtn = document.getElementById('btn-hero-launch');
  if (heroLaunchBtn) {
    heroLaunchBtn.addEventListener('click', () => {
      sfx.playLevelUp();
      const orig = heroLaunchBtn.innerHTML;
      heroLaunchBtn.innerHTML = '<span>⚡ INITIALIZING INSTANCE 1.21.50...</span>';
      setTimeout(() => {
        heroLaunchBtn.innerHTML = orig;
      }, 2000);
    });
  }
});
