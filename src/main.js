// ==========================================================================
// BUGrock Launcher — 100x Flagship Interactive Engine
// Voxel Particles, Web Audio Synthesizer, 3D Skin Wardrobe, Live Diagnostics & Mod Inspector
// ==========================================================================

export const HISTORIC_VERSIONS = [
  {
    id: "v1-21-50",
    version: "1.21.50.07",
    name: "1.21.50 (Tricky Trials)",
    era: "Modern GDK",
    year: "2024",
    type: "GDK (.msixvc)",
    size: "820 MB",
    shaders: "RenderDragon Modern",
    tag: "Latest Release",
    active: true,
    desc: "Crafter blocks, Trial Chambers, Mace weapon, and automated Microsoft Store decryption key acquisition."
  },
  {
    id: "v1-20-80",
    version: "1.20.80.05",
    name: "1.20.80 (Armadillo Update)",
    era: "Tails & Trails",
    year: "2024",
    type: "GDK (.msixvc)",
    size: "790 MB",
    shaders: "RenderDragon PBR",
    tag: "Stable Release",
    active: false,
    desc: "Wolf armor variants, armadillos, savanna updates, and native GDKLaunchShim."
  },
  {
    id: "v1-19-50",
    version: "1.19.50.02",
    name: "1.19.50 (The Wild)",
    era: "Deep Dark",
    year: "2022",
    type: "UWP (.appx)",
    size: "640 MB",
    shaders: "RenderDragon Early",
    tag: "Legacy UWP",
    active: false,
    desc: "Ancient Cities, Warden, Mangrove swamps, and native Windows UWP package registration."
  },
  {
    id: "v1-18-30",
    version: "1.18.30.04",
    name: "1.18.30 (Caves & Cliffs II)",
    era: "New Generation",
    year: "2022",
    type: "UWP (.appx)",
    size: "580 MB",
    shaders: "RenderDragon Core",
    tag: "Milestone",
    active: false,
    desc: "Massive 384-block world height, lush caves, jagged peaks, and new terrain blending."
  },
  {
    id: "v1-16-201",
    version: "1.16.201.01",
    name: "1.16.201 (The Nether)",
    era: "PvP Golden Era",
    year: "2020",
    type: "UWP (.appx)",
    size: "420 MB",
    shaders: "Pre-RenderDragon HLSL",
    tag: "Classic Competitive",
    active: false,
    desc: "The definitive competitive Bedrock release. Netherite armor, Piglins, and vintage combat."
  },
  {
    id: "v1-14-60",
    version: "1.14.60.05",
    name: "1.14.60 (Buzzy Bees)",
    era: "Vintage Shaders",
    year: "2020",
    type: "UWP (.appx)",
    size: "310 MB",
    shaders: "Legacy Shaders (ESBE / SSPE)",
    tag: "Shader Friendly",
    active: false,
    desc: "Pre-RenderDragon classic rendering engine supporting vintage community shaders."
  },
  {
    id: "v1-2-0",
    version: "1.2.0.81",
    name: "1.2.0 (Better Together)",
    era: "Unification Era",
    year: "2017",
    type: "UWP (.appx)",
    size: "180 MB",
    shaders: "Vintage Alpha",
    tag: "Historic",
    active: false,
    desc: "The milestone update that unified Pocket Edition and Windows 10 into Bedrock crossplay."
  },
  {
    id: "v0-14-0",
    version: "0.14.0.1",
    name: "0.14.0.1 (Alpha Launch)",
    era: "Alpha Heritage",
    year: "2016",
    type: "UWP (.appx)",
    size: "45 MB",
    shaders: "Legacy Fixed Pipeline",
    tag: "First PC Bedrock",
    active: false,
    desc: "The dawn of Windows 10 Edition. Redstone repeaters, dispensers, and classic pocket HUD."
  }
];

export const MOD_HUB_CATALOG = [
  {
    id: "action-stuff-3d",
    title: "Actions & Stuff 3D Combat Overhaul",
    author: "Toxico",
    category: "behavior",
    source: "MCPEDL",
    version: "v1.4.2",
    rating: "4.9",
    downloads: "420K+",
    size: "42.8 MB",
    badge: "Trending #1",
    desc: "Complete fluid third-person and first-person player animation overhaul with dynamic attacks and sword trails.",
    details: "Features completely rebuilt player skeleton rigs, realistic sprinting momentum, dual-wield block animations, and high-framerate weapon impact particles."
  },
  {
    id: "faithful-64x",
    title: "Faithful 64x HD Bedrock Edition",
    author: "Faithful Team",
    category: "resource",
    source: "CurseForge",
    version: "v1.21.50",
    rating: "5.0",
    downloads: "1.8M+",
    size: "68.2 MB",
    badge: "Essential",
    desc: "The iconic vanilla-faithful texture pack scaled to crisp 64x detail for 1440p and 4K high refresh rate gaming.",
    details: "Faithful respects the original Minecraft aesthetic while quadrupling texture resolution. Fully optimized for RenderDragon on Windows 10/11."
  },
  {
    id: "realism-pbr",
    title: "CubeCraft Realism Shaders & Sky",
    author: "CubeCraftsman",
    category: "shader",
    source: "MCPEDL",
    version: "v2.1",
    rating: "4.8",
    downloads: "280K+",
    size: "24.5 MB",
    badge: "RenderDragon Ready",
    desc: "Volumetric atmospheric fog, realistic sun glares, crisp water reflections, and waving leaves.",
    details: "Includes custom deferred technical PBR materials, custom normal maps for cobblestone and metals, and realistic day-night celestial cycles."
  },
  {
    id: "travelers-backpacks",
    title: "Traveler's Backpacks Plus Addon",
    author: "TrueRealism",
    category: "behavior",
    source: "CurseForge",
    version: "v3.0.1",
    rating: "4.9",
    downloads: "510K+",
    size: "8.4 MB",
    badge: "Survival",
    desc: "Wearable, upgradeable backpacks with crafting table integration, tank fluids, and sleeping roll.",
    details: "Provides 16 unique color tiers, fluid storage for lava/water buckets, integrated quick crafting, and automated item sorting."
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
    details: "Over 2,000x2,000 blocks of custom terrain, complete voice-acted dialogue sequences, custom loot tables, and safe multi-instance staging."
  }
];

// ==========================================================================
// Web Audio API Synthesizer (Zero-Latency Luxury Sound Clicks)
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

    gain.gain.setValueAtTime(0.08, now);
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
      const t = now + idx * 0.08;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.08, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.16);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.16);
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
    osc.frequency.exponentialRampToValueAtTime(840, now + 0.08);
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.08);
  }
}

const sfx = new SoundFX();

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Voxel Dust & Particle Background Canvas
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
    const colors = ['rgba(217, 70, 239, ', 'rgba(43, 189, 40, ', 'rgba(56, 189, 248, '];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4 - 0.2,
        alpha: Math.random() * 0.5 + 0.15,
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
      soundToggleBtn.classList.toggle('text-[#2bbd28]', !sfx.muted);
      if (!sfx.muted) sfx.playClick(900);
    });
  }

  // 3. 3D Parallax Tilt on the Hero Window
  const tiltStage = document.getElementById('hero-tilt-stage');
  const tiltCard = document.getElementById('hero-tilt-card');

  if (tiltStage && tiltCard) {
    tiltStage.addEventListener('mousemove', (e) => {
      const rect = tiltStage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = (y / (rect.height / 2)) * -9;
      const rotateY = (x / (rect.width / 2)) * 9;

      tiltCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    tiltStage.addEventListener('mouseleave', () => {
      tiltCard.style.transform = `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  }

  // 4. Searchable Historical Version Scrubber & Live Console
  const versionScrubber = document.getElementById('version-scrubber-list');
  const versionSearchInput = document.getElementById('version-search-input');
  const currentVersionTitle = document.getElementById('current-version-title');
  const currentVersionTag = document.getElementById('current-version-tag');
  const currentVersionType = document.getElementById('current-version-type');
  const currentVersionSize = document.getElementById('current-version-size');
  const currentVersionShaders = document.getElementById('current-version-shaders');
  const currentVersionDesc = document.getElementById('current-version-desc');
  const terminalConsole = document.getElementById('terminal-log-output');
  const simulateLaunchBtn = document.getElementById('btn-simulate-launch');

  let versionSearchTerm = '';

  function renderVersionScrubber() {
    if (!versionScrubber) return;
    versionScrubber.innerHTML = '';

    const filtered = HISTORIC_VERSIONS.filter(v => 
      v.name.toLowerCase().includes(versionSearchTerm.toLowerCase()) ||
      v.era.toLowerCase().includes(versionSearchTerm.toLowerCase()) ||
      v.type.toLowerCase().includes(versionSearchTerm.toLowerCase()) ||
      v.year.includes(versionSearchTerm)
    );

    if (filtered.length === 0) {
      versionScrubber.innerHTML = `
        <div class="py-8 text-center text-[#64748b] font-mono text-xs">
          No Bedrock release found matching "${versionSearchTerm}".
        </div>
      `;
      return;
    }

    filtered.forEach((ver) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between group ${
        ver.active 
          ? 'bg-[rgba(217,70,239,0.14)] border-[rgba(217,70,239,0.5)] text-white shadow-[0_0_16px_rgba(217,70,239,0.2)]' 
          : 'bg-[#0f121a] border-white/5 text-[#94a3b8] hover:border-white/20 hover:text-white'
      }`;

      btn.innerHTML = `
        <div class="flex items-center gap-3">
          <span class="w-2.5 h-2.5 rounded-full ${ver.active ? 'bg-[#d946ef] shadow-[0_0_8px_#d946ef]' : 'bg-[#334155]'}"></span>
          <div>
            <div class="text-[13px] font-bold font-mono tracking-tight text-white">${ver.name}</div>
            <div class="text-[11px] text-[#64748b] font-mono">${ver.era} • Released ${ver.year}</div>
          </div>
        </div>
        <span class="text-[11px] font-mono px-2 py-0.5 rounded ${ver.type.includes('GDK') ? 'bg-[#c026d3]/20 text-[#f0abfc] border border-[#c026d3]/40' : 'bg-[#2bbd28]/20 text-[#86efac] border border-[#2bbd28]/40'}">
          ${ver.type.split(' ')[0]}
        </span>
      `;

      btn.addEventListener('click', () => {
        sfx.playClick(780);
        HISTORIC_VERSIONS.forEach(v => v.active = false);
        ver.active = true;
        renderVersionScrubber();
        updateVersionDisplay(ver);
      });

      versionScrubber.appendChild(btn);
    });
  }

  function updateVersionDisplay(ver) {
    if (currentVersionTitle) currentVersionTitle.textContent = ver.name;
    if (currentVersionTag) currentVersionTag.textContent = ver.tag;
    if (currentVersionType) currentVersionType.textContent = ver.type;
    if (currentVersionSize) currentVersionSize.textContent = ver.size;
    if (currentVersionShaders) currentVersionShaders.textContent = ver.shaders;
    if (currentVersionDesc) currentVersionDesc.textContent = ver.desc;

    if (terminalConsole) {
      terminalConsole.innerHTML = `
        <span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#38bdf8]">MANIFEST:</span> Resolved ${ver.version} (${ver.type})
        <br/><span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#a855f7]">JUNCTION:</span> Linked to /SavedGames/Instance_${ver.id}
        <br/><span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#2bbd28]">READY:</span> Package verified for instant launch
      `;
    }
  }

  if (versionSearchInput) {
    versionSearchInput.addEventListener('input', (e) => {
      versionSearchTerm = e.target.value;
      renderVersionScrubber();
    });
  }

  renderVersionScrubber();

  if (simulateLaunchBtn) {
    simulateLaunchBtn.addEventListener('click', () => {
      sfx.playPop();
      const activeVer = HISTORIC_VERSIONS.find(v => v.active) || HISTORIC_VERSIONS[0];
      const origText = simulateLaunchBtn.innerHTML;

      simulateLaunchBtn.innerHTML = `
        <span class="animate-spin mr-2">⚙</span>
        <span>Staging ${activeVer.name.split(' ')[0]}...</span>
      `;
      simulateLaunchBtn.classList.add('opacity-75', 'pointer-events-none');

      if (terminalConsole) {
        terminalConsole.innerHTML += `
          <br/><span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#f59e0b]">EXEC:</span> Spawning GDKLaunchShim.exe (PID: 8192)
          <br/><span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#2bbd28]">SUCCESS:</span> Minecraft Bedrock active!
        `;
        terminalConsole.scrollTop = terminalConsole.scrollHeight;
      }

      setTimeout(() => {
        sfx.playLevelUp();
        simulateLaunchBtn.innerHTML = `✓ Game Running (PID: 8192)`;
        setTimeout(() => {
          simulateLaunchBtn.innerHTML = origText;
          simulateLaunchBtn.classList.remove('opacity-75', 'pointer-events-none');
        }, 3000);
      }, 1100);
    });
  }

  // 5. Interactive System Diagnostic Scanner
  const runDiagnosticBtn = document.getElementById('btn-run-diagnostic');
  const diagCards = document.querySelectorAll('.diag-card');
  const diagOverallStatus = document.getElementById('diag-overall-status');

  if (runDiagnosticBtn) {
    runDiagnosticBtn.addEventListener('click', () => {
      sfx.playClick(600);
      runDiagnosticBtn.innerHTML = `<span class="animate-spin mr-2">⚙</span> Scanning Subsystem Services...`;
      runDiagnosticBtn.classList.add('opacity-75', 'pointer-events-none');

      diagCards.forEach((card, idx) => {
        const badge = card.querySelector('.diag-status-badge');
        if (badge) {
          badge.textContent = 'Checking...';
          badge.className = 'diag-status-badge text-[10px] font-mono text-[#f59e0b]';
        }

        setTimeout(() => {
          sfx.playPop();
          if (badge) {
            badge.textContent = '✓ Verified Active';
            badge.className = 'diag-status-badge text-[10px] font-mono text-[#2bbd28] font-bold';
          }
        }, 350 * (idx + 1));
      });

      setTimeout(() => {
        sfx.playLevelUp();
        runDiagnosticBtn.innerHTML = `✓ All 5 Subsystems Operational`;
        runDiagnosticBtn.classList.remove('opacity-75', 'pointer-events-none');
        if (diagOverallStatus) {
          diagOverallStatus.innerHTML = `<span class="text-[#2bbd28]">● System 100% Ready for BUGrock</span>`;
        }
        showToast('All Windows services verified successfully! Full compatibility guaranteed.');
      }, 2100);
    });
  }

  // 6. Mod Hub Engine & Detail Modal
  const modCatalogGrid = document.getElementById('mod-catalog-grid');
  const modFilterChips = document.querySelectorAll('.mod-filter-chip');
  const modSearchInput = document.getElementById('mod-search-input');
  const modalOverlay = document.getElementById('mod-modal-overlay');
  const modalTitle = document.getElementById('modal-mod-title');
  const modalCategory = document.getElementById('modal-mod-category');
  const modalDesc = document.getElementById('modal-mod-desc');
  const modalDetails = document.getElementById('modal-mod-details');
  const modalSize = document.getElementById('modal-mod-size');
  const modalAuthor = document.getElementById('modal-mod-author');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalActionBtn = document.getElementById('modal-action-inject');

  let activeCategory = 'all';
  let searchQuery = '';

  function renderModCatalog() {
    if (!modCatalogGrid) return;
    modCatalogGrid.innerHTML = '';

    const filtered = MOD_HUB_CATALOG.filter(mod => {
      const matchCat = activeCategory === 'all' || mod.category === activeCategory;
      const matchQuery = mod.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         mod.author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      modCatalogGrid.innerHTML = `
        <div class="col-span-full py-12 text-center text-[#64748b] font-mono text-sm">
          No add-ons found matching "${searchQuery}".
        </div>
      `;
      return;
    }

    filtered.forEach(mod => {
      const card = document.createElement('div');
      card.className = 'glass-panel p-5 flex flex-col justify-between gap-4 border border-white/5 hover:border-white/20 transition-all cursor-pointer group';
      card.innerHTML = `
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-mono font-bold px-2 py-0.5 rounded ${mod.source === 'MCPEDL' ? 'bg-[#2bbd28]/20 text-[#86efac] border border-[#2bbd28]/40' : 'bg-[#d946ef]/20 text-[#f0abfc] border border-[#d946ef]/40'}">
              ${mod.source}
            </span>
            <span class="text-[11px] font-mono text-[#f59e0b] flex items-center gap-1">
              ★ ${mod.rating} <span class="text-[#64748b]">(${mod.downloads})</span>
            </span>
          </div>

          <h4 class="text-base font-bold text-white font-display leading-snug group-hover:text-[#f0abfc] transition-colors mb-1">${mod.title}</h4>
          <div class="text-[11px] font-mono text-[#64748b] mb-2">By ${mod.author} • ${mod.size}</div>
          <p class="text-xs text-[#94a3b8] leading-relaxed line-clamp-2">${mod.desc}</p>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between">
          <span class="text-[10px] font-mono text-[#38bdf8] px-2 py-0.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/20">
            ${mod.badge}
          </span>
          <button type="button" class="btn-flagship btn-flagship-green text-xs !py-1.5 !px-3 btn-inspect-pack" data-id="${mod.id}">
            Inspect & Inject ➔
          </button>
        </div>
      `;

      card.addEventListener('click', (e) => {
        sfx.playClick(800);
        openModModal(mod);
      });

      modCatalogGrid.appendChild(card);
    });
  }

  function openModModal(mod) {
    if (!modalOverlay) return;
    if (modalTitle) modalTitle.textContent = mod.title;
    if (modalCategory) modalCategory.textContent = `${mod.source} • ${mod.category.toUpperCase()}`;
    if (modalDesc) modalDesc.textContent = mod.desc;
    if (modalDetails) modalDetails.textContent = mod.details;
    if (modalSize) modalSize.textContent = mod.size;
    if (modalAuthor) modalAuthor.textContent = mod.author;

    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (modalActionBtn) {
      modalActionBtn.onclick = () => {
        sfx.playPop();
        modalActionBtn.innerHTML = `<span class="animate-spin mr-2">⚙</span> Injecting into World...`;
        modalActionBtn.classList.add('opacity-75', 'pointer-events-none');

        setTimeout(() => {
          sfx.playLevelUp();
          modalActionBtn.innerHTML = `✓ Injected into Active World!`;
          showToast(`"${mod.title}" has been safely injected into your world!`);
          setTimeout(() => {
            closeModModal();
            modalActionBtn.innerHTML = `+ Inject Pack into World`;
            modalActionBtn.classList.remove('opacity-75', 'pointer-events-none');
          }, 1500);
        }, 900);
      };
    }
  }

  function closeModModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModModal();
    });
  }

  modFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sfx.playClick(700);
      modFilterChips.forEach(c => {
        c.classList.remove('btn-flagship-magenta', 'text-white');
        c.classList.add('bg-[#12141c]', 'text-[#94a3b8]');
      });
      chip.classList.add('btn-flagship-magenta', 'text-white');
      chip.classList.remove('bg-[#12141c]', 'text-[#94a3b8]');
      activeCategory = chip.getAttribute('data-category') || 'all';
      renderModCatalog();
    });
  });

  if (modSearchInput) {
    modSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderModCatalog();
    });
  }

  renderModCatalog();

  // 7. Toast Notification System
  function showToast(message) {
    let toast = document.getElementById('luxury-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'luxury-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl border border-white/20 bg-[#0f121a]/95 backdrop-blur-xl text-sm text-white font-mono shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300 opacity-0 translate-y-4 pointer-events-none flex items-center gap-2.5';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="text-[#2bbd28] font-bold">✓</span> <span>${message}</span>`;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3800);
  }

  // 8. 3D Steve / Alex / BUG Guy Wardrobe Canvas Turntable
  const skinCanvas = document.getElementById('skin-preview-canvas');
  const skinSelectBtns = document.querySelectorAll('.skin-model-select-btn');
  let activeSkinModel = 'steve';

  if (skinCanvas) {
    const ctx = skinCanvas.getContext('2d');
    let angle = 0;

    skinSelectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick(850);
        skinSelectBtns.forEach(b => {
          b.classList.remove('btn-flagship-magenta', 'text-white');
          b.classList.add('bg-[#12141c]', 'text-[#94a3b8]');
        });
        btn.classList.add('btn-flagship-magenta', 'text-white');
        btn.classList.remove('bg-[#12141c]', 'text-[#94a3b8]');
        activeSkinModel = btn.getAttribute('data-skin');
      });
    });

    function drawPixelModel() {
      ctx.clearRect(0, 0, skinCanvas.width, skinCanvas.height);
      const cx = skinCanvas.width / 2;
      const cy = skinCanvas.height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      const cosA = Math.cos(angle);

      // Colors based on skin model
      let skinColor = '#b77953';
      let hairColor = '#4a2e18';
      let shirtColor = '#008b8b';
      let pantsColor = '#22388e';

      if (activeSkinModel === 'alex') {
        skinColor = '#d99d79';
        hairColor = '#c85623'; // Orange hair
        shirtColor = '#5b8731'; // Green tunic
        pantsColor = '#6c593a'; // Brown pants
      } else if (activeSkinModel === 'bugrock') {
        skinColor = '#3b124a';
        hairColor = '#d946ef'; // Magenta glowing hair
        shirtColor = '#18181b'; // Dark Bedrock suit
        pantsColor = '#a21caf'; // Neon magenta
      }

      // Head (Cube)
      ctx.fillStyle = skinColor;
      ctx.fillRect(-28 * cosA - 14, -70, 48 * Math.abs(cosA) + 8, 48);

      // Hair
      ctx.fillStyle = hairColor;
      ctx.fillRect(-28 * cosA - 14, -70, 48 * Math.abs(cosA) + 8, 14);

      // Eyes
      if (cosA > 0.1) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-18 * cosA, -50, 10 * cosA, 8);
        ctx.fillRect(8 * cosA, -50, 10 * cosA, 8);
        ctx.fillStyle = activeSkinModel === 'alex' ? '#2e8b57' : (activeSkinModel === 'bugrock' ? '#d946ef' : '#2b58bf');
        ctx.fillRect(-14 * cosA, -50, 6 * cosA, 8);
        ctx.fillRect(12 * cosA, -50, 6 * cosA, 8);
      }

      // Shirt (Torso)
      ctx.fillStyle = shirtColor;
      ctx.fillRect(-36 * cosA - 10, -20, 68 * Math.abs(cosA) + 12, 60);

      // Pants (Legs)
      ctx.fillStyle = pantsColor;
      ctx.fillRect(-26 * cosA - 6, 42, 28 * Math.abs(cosA) + 6, 52);
      ctx.fillRect(4 * cosA - 4, 42, 28 * Math.abs(cosA) + 6, 52);

      // Shoes
      ctx.fillStyle = '#262626';
      ctx.fillRect(-26 * cosA - 6, 90, 28 * Math.abs(cosA) + 6, 12);
      ctx.fillRect(4 * cosA - 4, 90, 28 * Math.abs(cosA) + 6, 12);

      ctx.restore();

      angle += 0.024;
      requestAnimationFrame(drawPixelModel);
    }

    drawPixelModel();
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

  // 10. Copy Trigger Buttons
  document.querySelectorAll('[data-copy-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick(900);
      const text = btn.getAttribute('data-copy-trigger');
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      });
    });
  });

  // 11. Easter Egg: 5 Clicks on Voxel Cube Logo
  const easterCube = document.getElementById('easter-voxel-cube');
  let clickCount = 0;
  if (easterCube) {
    easterCube.addEventListener('click', () => {
      clickCount++;
      sfx.playPop();
      if (clickCount >= 5) {
        sfx.playLevelUp();
        showToast('🎉 EASTER EGG UNLOCKED: You found the Secret BUGrock Developer Mode!');
        clickCount = 0;
      }
    });
  }
});
