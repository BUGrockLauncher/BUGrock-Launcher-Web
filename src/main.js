// ==========================================================================
// BUGrock Launcher Website — Hallmark Dusk + Ribbon Interactive Engine
// ==========================================================================

export const LAUNCHER_VERSIONS = [
  {
    id: "v1-21-50",
    version: "1.21.50.07",
    label: "1.21.50 (Tricky Trials)",
    type: "GDK (.msixvc)",
    date: "November 2024",
    tag: "Latest Release",
    active: true,
    engine: "GDKLaunchShim x64 + ClipSvc",
    savePath: "Minecraft Bedrock/Users/Isolated_Instance_01/SavedGames",
    desc: "Modern GDK architecture with automated Microsoft Store licensing and Crafter blocks."
  },
  {
    id: "v1-20-80",
    version: "1.20.80.05",
    label: "1.20.80 (Armadillo Update)",
    type: "GDK (.msixvc)",
    date: "April 2024",
    tag: "Stable Release",
    active: false,
    engine: "GDKLaunchShim x64",
    savePath: "Minecraft Bedrock/Users/Isolated_Instance_02/SavedGames",
    desc: "Wolf armor, armadillos, and RenderDragon modern pipeline."
  },
  {
    id: "v1-19-50",
    version: "1.19.50.02",
    label: "1.19.50 (The Wild)",
    type: "UWP (.appx)",
    date: "November 2022",
    tag: "Legacy UWP",
    active: false,
    engine: "AppX Manifest Registered",
    savePath: "LocalState/games/com.mojang/minecraftWorlds/Instance_Wild",
    desc: "Ancient City, Warden, Mangrove swamps in native UWP sandbox."
  },
  {
    id: "v1-16-201",
    version: "1.16.201.01",
    label: "1.16.201 (Nether Update)",
    type: "UWP (.appx)",
    date: "December 2020",
    tag: "Legacy Golden Age",
    active: false,
    engine: "AppX Manifest Registered",
    savePath: "LocalState/games/com.mojang/minecraftWorlds/Instance_Nether",
    desc: "The definitive Bedrock Nether Update. Netherite, Piglins, Basalt Deltas."
  },
  {
    id: "v1-14-60",
    version: "1.14.60.05",
    label: "1.14.60 (Buzzy Bees)",
    type: "UWP (.appx)",
    date: "April 2020",
    tag: "Pre-RenderDragon",
    active: false,
    engine: "AppX Manifest Registered",
    savePath: "LocalState/games/com.mojang/minecraftWorlds/Instance_114",
    desc: "Classic pre-RenderDragon rendering engine with vintage shader support."
  },
  {
    id: "v1-2-0",
    version: "1.2.0.81",
    label: "1.2.0 (Better Together)",
    type: "UWP (.appx)",
    date: "September 2017",
    tag: "Historic Milestone",
    active: false,
    engine: "AppX Manifest Registered",
    savePath: "LocalState/games/com.mojang/minecraftWorlds/Instance_BetterTogether",
    desc: "The legendary update that unified Pocket Edition and Windows 10 into Bedrock."
  },
  {
    id: "v0-14-0",
    version: "0.14.0.1",
    label: "0.14.0.1 (Alpha Launch)",
    type: "UWP (.appx)",
    date: "February 2016",
    tag: "Vintage Archive",
    active: false,
    engine: "AppX Manifest Registered",
    savePath: "LocalState/games/com.mojang/minecraftWorlds/Instance_Alpha14",
    desc: "The dawn of Windows 10 Edition. Redstone repeater introduction."
  }
];

export const MOD_ITEMS = [
  {
    id: "action-stuff",
    title: "Actions & Stuff 3D Combat",
    author: "Toxico",
    source: "MCPEDL",
    category: "Resource & Animation",
    size: "42.8 MB",
    installs: "320K+",
    rating: "4.9",
    desc: "Complete overhaul of player animations, fluid weapon swings, and dynamic third-person cameras."
  },
  {
    id: "faithful-bedrock",
    title: "Faithful 64x Bedrock Edition",
    author: "Faithful Team",
    source: "CurseForge",
    category: "High-Res HD",
    size: "68.2 MB",
    installs: "1.2M+",
    rating: "5.0",
    desc: "The iconic vanilla-faithful texture pack scaled to crisp 64x detail for modern 1440p & 4K displays."
  },
  {
    id: "realism-craft",
    title: "Natural Realism Shaders & Skybox",
    author: "CubeCraftsman",
    source: "MCPEDL",
    category: "PBR Shader Pack",
    size: "18.5 MB",
    installs: "180K+",
    rating: "4.8",
    desc: "Vibrant volumetric lighting, realistic water reflections, and waving leaves for RenderDragon."
  },
  {
    id: "backpacks-plus",
    title: "Traveler's Backpacks Plus (Addon)",
    author: "TrueRealism",
    source: "CurseForge",
    category: "Behavior & Add-on",
    size: "8.4 MB",
    installs: "410K+",
    rating: "4.9",
    desc: "Wearable, upgradeable backpacks with crafting table integration and sleeping bags."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Version Switcher Interactive Demo
  const versionListEl = document.getElementById('version-items-container');
  const selectedVersionLabel = document.getElementById('preview-version-label');
  const selectedVersionTag = document.getElementById('preview-version-tag');
  const selectedVersionType = document.getElementById('preview-version-type');
  const selectedVersionEngine = document.getElementById('preview-version-engine');
  const selectedVersionPath = document.getElementById('preview-version-path');
  const selectedVersionDesc = document.getElementById('preview-version-desc');
  const launchInstanceBtn = document.getElementById('btn-launch-preview');

  function renderVersionSelector() {
    if (!versionListEl) return;
    versionListEl.innerHTML = '';

    LAUNCHER_VERSIONS.forEach((ver) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `w-full text-left px-3.5 py-2.5 rounded-lg border transition-all flex items-center justify-between group ${
        ver.active 
          ? 'bg-[oklch(22%_0.025_268)] border-[oklch(76%_0.11_274)] text-[oklch(97%_0.005_75)]' 
          : 'bg-[oklch(16%_0.016_268)] border-[oklch(22%_0.015_266)] text-[oklch(75%_0.012_262)] hover:border-[oklch(32%_0.02_266)] hover:text-white'
      }`;
      btn.innerHTML = `
        <div class="flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full ${ver.active ? 'bg-[oklch(76%_0.11_274)] shadow-[0_0_8px_oklch(76%_0.11_274)]' : 'bg-[oklch(35%_0.015_266)]'}"></span>
          <div>
            <div class="text-[13px] font-medium leading-tight font-display">${ver.label}</div>
            <div class="text-[11px] text-[oklch(60%_0.015_262)] font-mono">${ver.date}</div>
          </div>
        </div>
        <span class="text-[11px] font-mono px-2 py-0.5 rounded ${ver.type.includes('GDK') ? 'bg-[oklch(66%_0.23_330/0.18)] text-[oklch(75%_0.18_330)] border border-[oklch(66%_0.23_330/0.3)]' : 'bg-[oklch(76%_0.11_274/0.15)] text-[oklch(82%_0.09_274)] border border-[oklch(76%_0.11_274/0.25)]'}">
          ${ver.type.split(' ')[0]}
        </span>
      `;

      btn.addEventListener('click', () => {
        LAUNCHER_VERSIONS.forEach(v => v.active = false);
        ver.active = true;
        renderVersionSelector();
        updateVersionDisplay(ver);
      });

      versionListEl.appendChild(btn);
    });
  }

  function updateVersionDisplay(ver) {
    if (selectedVersionLabel) selectedVersionLabel.textContent = ver.label;
    if (selectedVersionTag) selectedVersionTag.textContent = ver.tag;
    if (selectedVersionType) selectedVersionType.textContent = ver.type;
    if (selectedVersionEngine) selectedVersionEngine.textContent = ver.engine;
    if (selectedVersionPath) selectedVersionPath.textContent = ver.savePath;
    if (selectedVersionDesc) selectedVersionDesc.textContent = ver.desc;
  }

  renderVersionSelector();

  if (launchInstanceBtn) {
    launchInstanceBtn.addEventListener('click', () => {
      const activeVer = LAUNCHER_VERSIONS.find(v => v.active) || LAUNCHER_VERSIONS[0];
      const origText = launchInstanceBtn.innerHTML;
      launchInstanceBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⚙️</span>
        <span>Staging ${activeVer.label.split(' ')[0]}...</span>
      `;
      launchInstanceBtn.classList.add('opacity-80', 'pointer-events-none');

      setTimeout(() => {
        launchInstanceBtn.innerHTML = `
          <span class="text-[oklch(74%_0.17_150)] mr-1">✓</span>
          <span>Instance Running (PID: 8492)</span>
        `;
        setTimeout(() => {
          launchInstanceBtn.innerHTML = origText;
          launchInstanceBtn.classList.remove('opacity-80', 'pointer-events-none');
        }, 2500);
      }, 1200);
    });
  }

  // 2. Mod Hub Simulated 1-Click Install Demo
  const modContainer = document.getElementById('mod-hub-container');
  if (modContainer) {
    modContainer.innerHTML = '';
    MOD_ITEMS.forEach((mod) => {
      const card = document.createElement('div');
      card.className = 'card-part p-4 flex flex-col justify-between gap-3';
      card.innerHTML = `
        <div>
          <div class="flex items-start justify-between gap-2 mb-1.5">
            <span class="text-[11px] font-mono px-1.5 py-0.5 rounded bg-[oklch(12%_0.015_268)] text-[oklch(76%_0.11_274)] border border-[oklch(25%_0.018_266)]">
              ${mod.source}
            </span>
            <span class="text-[12px] text-[oklch(65%_0.015_262)] font-mono">${mod.size}</span>
          </div>
          <h4 class="text-[15px] font-semibold text-[oklch(96%_0.006_75)] font-display leading-snug">${mod.title}</h4>
          <p class="text-[12px] text-[oklch(65%_0.015_262)] mt-1 line-clamp-2 leading-relaxed">${mod.desc}</p>
        </div>
        <div class="pt-2 border-t border-[oklch(22%_0.015_266)] flex items-center justify-between">
          <span class="text-[11px] text-[oklch(55%_0.015_262)] font-mono">By ${mod.author}</span>
          <button type="button" class="btn-install-mod px-3 py-1 rounded text-[12px] font-mono font-medium transition-all bg-[oklch(22%_0.022_268)] border border-[oklch(30%_0.02_266)] text-[oklch(90%_0.01_75)] hover:border-[oklch(76%_0.11_274)] hover:text-white" data-mod="${mod.id}">
            + Inject Pack
          </button>
        </div>
      `;
      modContainer.appendChild(card);
    });

    modContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.btn-install-mod');
      if (!btn) return;
      const modId = btn.getAttribute('data-mod');
      const item = MOD_ITEMS.find(m => m.id === modId);
      if (!item) return;

      btn.textContent = "Injecting...";
      btn.classList.add('pointer-events-none', 'opacity-70');

      setTimeout(() => {
        btn.innerHTML = `<span class="text-[oklch(74%_0.17_150)]">✓ Injected</span>`;
        btn.classList.remove('opacity-70');
        showToast(`Injected "${item.title}" into active instance with zero world friction.`);
        setTimeout(() => {
          btn.textContent = "+ Inject Pack";
          btn.classList.remove('pointer-events-none');
        }, 3000);
      }, 900);
    });
  }

  // Toast Notification
  function showToast(message) {
    let toast = document.getElementById('global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'global-toast';
      toast.className = 'fixed bottom-6 right-6 z-50 px-4 py-3 rounded-lg border border-[oklch(30%_0.02_266)] bg-[oklch(18%_0.025_268/0.95)] backdrop-blur text-[13px] text-white font-mono shadow-2xl transition-all opacity-0 translate-y-3 pointer-events-none';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
    setTimeout(() => {
      toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
    }, 3500);
  }

  // 3. Tab switching in World Injector comparison
  const injectorTabs = document.querySelectorAll('[data-injector-tab]');
  const injectorPanels = document.querySelectorAll('[data-injector-panel]');
  injectorTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-injector-tab');
      injectorTabs.forEach(t => {
        t.classList.remove('active', 'border-[oklch(76%_0.11_274)]', 'text-white', 'bg-[oklch(22%_0.025_268)]');
        t.classList.add('border-transparent', 'text-[oklch(65%_0.015_262)]');
      });
      tab.classList.add('active', 'border-[oklch(76%_0.11_274)]', 'text-white', 'bg-[oklch(22%_0.025_268)]');
      tab.classList.remove('border-transparent', 'text-[oklch(65%_0.015_262)]');

      injectorPanels.forEach(panel => {
        if (panel.getAttribute('data-injector-panel') === target) {
          panel.classList.remove('hidden');
        } else {
          panel.classList.add('hidden');
        }
      });
    });
  });

  // 4. Quick copy buttons for commands / paths
  document.querySelectorAll('[data-copy]').forEach(el => {
    el.addEventListener('click', () => {
      const textToCopy = el.getAttribute('data-copy');
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied to clipboard: ${textToCopy}`);
      });
    });
  });
});
