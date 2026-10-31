// ==========================================================================
// BUGrock Launcher — $500 Flagship Interactive Engine
// High-Tech Web Audio, 3D Parallax Tilt, Live Version Scrubber & Canvas Turntable
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
    desc: "Crafter blocks, Trial Chambers, Mace, and automated Microsoft Store decryption key acquisition."
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
    desc: "Complete fluid third-person and first-person player animation overhaul with dynamic attacks and sword trails."
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
    desc: "The iconic vanilla-faithful texture pack scaled to crisp 64x detail for 1440p and 4K high refresh rate gaming."
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
    desc: "Volumetric atmospheric fog, realistic sun glares, crisp water reflections, and waving leaves."
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
    desc: "Wearable, upgradeable backpacks with crafting table integration, tank fluids, and sleeping roll."
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
    desc: "Recreates the clean, vibrant, simplified aesthetic seen in official animated Minecraft trailers."
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
    desc: "Handcrafted medieval RPG map with custom quest NPCs, 5 dungeons, and unique boss fights."
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

  playClick(pitch = 800, dur = 0.035) {
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

  playSuccess() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const now = this.ctx.currentTime;
    [520, 650, 780].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const t = now + idx * 0.07;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, t);
      gain.gain.setValueAtTime(0.06, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.12);
    });
  }
}

const sfx = new SoundFX();

document.addEventListener('DOMContentLoaded', () => {
  // 1. Audio Sound Toggle
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

  // 2. Interactive 3D Parallax Tilt on the Hero Launcher Stage
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

  // 3. Historical Version Scrubber & Live Console Terminal
  const versionScrubber = document.getElementById('version-scrubber-list');
  const currentVersionTitle = document.getElementById('current-version-title');
  const currentVersionTag = document.getElementById('current-version-tag');
  const currentVersionType = document.getElementById('current-version-type');
  const currentVersionSize = document.getElementById('current-version-size');
  const currentVersionShaders = document.getElementById('current-version-shaders');
  const currentVersionDesc = document.getElementById('current-version-desc');
  const terminalConsole = document.getElementById('terminal-log-output');
  const simulateLaunchBtn = document.getElementById('btn-simulate-launch');

  function renderVersionScrubber() {
    if (!versionScrubber) return;
    versionScrubber.innerHTML = '';

    HISTORIC_VERSIONS.forEach((ver) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-full text-left px-4 py-3 rounded-xl border transition-all flex items-center justify-between group ${
        ver.active 
          ? 'bg-[rgba(217,70,239,0.12)] border-[rgba(217,70,239,0.5)] text-white shadow-[0_0_16px_rgba(217,70,239,0.2)]' 
          : 'bg-[#12141c] border-white/5 text-[#94a3b8] hover:border-white/20 hover:text-white'
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
        sfx.playClick(750);
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
        <br/><span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#2bbd28]">READY:</span> Package ready for instant launch
      `;
    }
  }

  renderVersionScrubber();

  if (simulateLaunchBtn) {
    simulateLaunchBtn.addEventListener('click', () => {
      sfx.playClick(600);
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
          <br/><span class="text-[#64748b]">[${new Date().toLocaleTimeString()}]</span> <span class="text-[#2bbd28]">SUCCESS:</span> Minecraft Bedrock active
        `;
        terminalConsole.scrollTop = terminalConsole.scrollHeight;
      }

      setTimeout(() => {
        sfx.playSuccess();
        simulateLaunchBtn.innerHTML = `✓ Game Running (PID: 8192)`;
        setTimeout(() => {
          simulateLaunchBtn.innerHTML = origText;
          simulateLaunchBtn.classList.remove('opacity-75', 'pointer-events-none');
        }, 3000);
      }, 1200);
    });
  }

  // 4. Mod Hub Catalog Engine (Search & Categories)
  const modCatalogGrid = document.getElementById('mod-catalog-grid');
  const modFilterChips = document.querySelectorAll('.mod-filter-chip');
  const modSearchInput = document.getElementById('mod-search-input');

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
      card.className = 'glass-panel p-5 flex flex-col justify-between gap-4 border border-white/5 hover:border-white/15 transition-all';
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

          <h4 class="text-base font-bold text-white font-display leading-snug mb-1">${mod.title}</h4>
          <div class="text-[11px] font-mono text-[#64748b] mb-2">By ${mod.author} • ${mod.size}</div>
          <p class="text-xs text-[#94a3b8] leading-relaxed line-clamp-2">${mod.desc}</p>
        </div>

        <div class="pt-3 border-t border-white/5 flex items-center justify-between">
          <span class="text-[10px] font-mono text-[#38bdf8] px-2 py-0.5 rounded bg-[#38bdf8]/10 border border-[#38bdf8]/20">
            ${mod.badge}
          </span>
          <button type="button" class="btn-flagship btn-flagship-green text-xs !py-1.5 !px-3 btn-inject-pack" data-id="${mod.id}">
            + Inject into World
          </button>
        </div>
      `;

      modCatalogGrid.appendChild(card);
    });

    // Wire up pack inject buttons
    modCatalogGrid.querySelectorAll('.btn-inject-pack').forEach(btn => {
      btn.addEventListener('click', () => {
        sfx.playClick(850);
        const originalText = btn.innerHTML;
        btn.innerHTML = `<span class="animate-spin mr-1">⚙</span> Injecting...`;
        btn.classList.add('pointer-events-none', 'opacity-75');

        setTimeout(() => {
          sfx.playSuccess();
          btn.innerHTML = `✓ Injected!`;
          btn.classList.remove('opacity-75');
          showToast(`Injected "${btn.closest('.glass-panel').querySelector('h4').textContent}" into active world!`);
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('pointer-events-none');
          }, 3000);
        }, 900);
      });
    });
  }

  modFilterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      sfx.playClick(700);
      modFilterChips.forEach(c => {
        c.classList.remove('btn-flagship-magenta', 'text-white');
        c.classList.add('bg-[#141722]', 'text-[#94a3b8]');
      });
      chip.classList.add('btn-flagship-magenta', 'text-white');
      chip.classList.remove('bg-[#141722]', 'text-[#94a3b8]');
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

  // 5. Toast Notification System
  function showToast(message) {
    let toast = document.getElementById('luxury-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'luxury-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl border border-white/20 bg-[#12141c]/95 backdrop-blur-xl text-sm text-white font-mono shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 opacity-0 translate-y-4 pointer-events-none flex items-center gap-2.5';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span class="text-[#2bbd28] font-bold">✓</span> <span>${message}</span>`;
    toast.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');

    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    }, 3800);
  }

  // 6. Interactive 3D Steve Skin Canvas Turntable
  const skinCanvas = document.getElementById('skin-preview-canvas');
  if (skinCanvas) {
    const ctx = skinCanvas.getContext('2d');
    let angle = 0;

    function drawPixelVoxelSteve() {
      ctx.clearRect(0, 0, skinCanvas.width, skinCanvas.height);
      const cx = skinCanvas.width / 2;
      const cy = skinCanvas.height / 2;

      ctx.save();
      ctx.translate(cx, cy);

      // Rotating Head & Torso simulated in isometric 3D
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);

      // Head (Cube)
      ctx.fillStyle = '#b77953'; // Steve Skin tone
      ctx.fillRect(-28 * cosA - 14, -70, 48 * Math.abs(cosA) + 8, 48);

      // Hair
      ctx.fillStyle = '#4a2e18';
      ctx.fillRect(-28 * cosA - 14, -70, 48 * Math.abs(cosA) + 8, 14);

      // Eyes
      if (cosA > 0.1) {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(-18 * cosA, -50, 10 * cosA, 8);
        ctx.fillRect(8 * cosA, -50, 10 * cosA, 8);
        ctx.fillStyle = '#2b58bf'; // Cyan eyes
        ctx.fillRect(-14 * cosA, -50, 6 * cosA, 8);
        ctx.fillRect(12 * cosA, -50, 6 * cosA, 8);
      }

      // Shirt (Torso)
      ctx.fillStyle = '#008b8b'; // Cyan Steve shirt
      ctx.fillRect(-36 * cosA - 10, -20, 68 * Math.abs(cosA) + 12, 60);

      // Pants (Legs)
      ctx.fillStyle = '#22388e'; // Blue jeans
      ctx.fillRect(-26 * cosA - 6, 42, 28 * Math.abs(cosA) + 6, 52);
      ctx.fillRect(4 * cosA - 4, 42, 28 * Math.abs(cosA) + 6, 52);

      // Shoes
      ctx.fillStyle = '#404040';
      ctx.fillRect(-26 * cosA - 6, 90, 28 * Math.abs(cosA) + 6, 12);
      ctx.fillRect(4 * cosA - 4, 90, 28 * Math.abs(cosA) + 6, 12);

      ctx.restore();

      angle += 0.022;
      requestAnimationFrame(drawPixelVoxelSteve);
    }

    drawPixelVoxelSteve();
  }

  // 7. Interactive FAQ Accordion
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

  // 8. Copy Buttons
  document.querySelectorAll('[data-copy-trigger]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.playClick(900);
      const text = btn.getAttribute('data-copy-trigger');
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied to clipboard: ${text}`);
      });
    });
  });
});
