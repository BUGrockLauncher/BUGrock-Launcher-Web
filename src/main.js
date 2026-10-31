// ==========================================================================
// BUGrock Launcher — Bedrock Launcher Inspired Interactive Logic
// ==========================================================================

export const VERSIONS_DATA = [
  {
    id: "v1-21-50",
    version: "1.21.50.07",
    name: "1.21.50 — Tricky Trials",
    category: "Release",
    type: "GDK (.msixvc)",
    date: "Nov 2024",
    status: "Latest Release",
    installed: true,
    desc: "Crafter blocks, Trial Chambers, Mace weapon, and RenderDragon modern pipeline."
  },
  {
    id: "v1-21-60-beta",
    version: "1.21.60.21",
    name: "1.21.60 Preview / Beta",
    category: "Beta",
    type: "GDK (.msixvc)",
    date: "Dec 2024",
    status: "Active Preview",
    installed: false,
    desc: "Upcoming features preview and experimental behavior scripts."
  },
  {
    id: "v1-20-80",
    version: "1.20.80.05",
    name: "1.20.80 — Armadillo & Wolf Armor",
    category: "Release",
    type: "GDK (.msixvc)",
    date: "Apr 2024",
    status: "Stable GDK",
    installed: true,
    desc: "Wolf armor variants, armadillos, and savanna biomes."
  },
  {
    id: "v1-19-50",
    version: "1.19.50.02",
    name: "1.19.50 — The Wild Update",
    category: "Release",
    type: "UWP (.appx)",
    date: "Nov 2022",
    status: "Legacy UWP",
    installed: true,
    desc: "Deep Dark, Ancient Cities, Warden, and Mangrove swamps."
  },
  {
    id: "v1-16-201",
    version: "1.16.201.01",
    name: "1.16.201 — The Nether Update",
    category: "Release",
    type: "UWP (.appx)",
    date: "Dec 2020",
    status: "PvP Golden Era",
    installed: true,
    desc: "Netherite armor, Piglins, Basalt Deltas, and classic Bedrock combat mechanics."
  },
  {
    id: "v1-14-60",
    version: "1.14.60.05",
    name: "1.14.60 — Buzzy Bees",
    category: "Release",
    type: "UWP (.appx)",
    date: "Apr 2020",
    status: "Pre-RenderDragon",
    installed: false,
    desc: "Pre-RenderDragon classic rendering engine with legacy shader support."
  },
  {
    id: "v1-2-0",
    version: "1.2.0.81",
    name: "1.2.0 — Better Together",
    category: "Release",
    type: "UWP (.appx)",
    date: "Sep 2017",
    status: "Historic",
    installed: false,
    desc: "The milestone update that unified Pocket Edition and Windows 10 into Bedrock."
  },
  {
    id: "v0-14-0",
    version: "0.14.0.1",
    name: "0.14.0.1 — Alpha Release",
    category: "Release",
    type: "UWP (.appx)",
    date: "Feb 2016",
    status: "Vintage",
    installed: false,
    desc: "The dawn of Windows 10 Edition. Redstone repeaters and classic pocket UI."
  }
];

export const FAQ_DATA = [
  {
    id: "faq-1",
    tag: "general",
    question: "Do I need to own Minecraft to use BUGrock Launcher?",
    answer: "Yes! BUGrock Launcher does not pirate Minecraft. You must either own a legal license of Minecraft: Bedrock Edition on the Microsoft Store or have an active Xbox Game Pass subscription. The launcher verifies official license tokens automatically."
  },
  {
    id: "faq-2",
    tag: "versions",
    question: "Can I play older versions like 0.14 or 1.16 alongside 1.21?",
    answer: "Yes! You can install and launch as many versions side-by-side as you want. Each version runs in its own isolated environment so newer updates will never overwrite or interfere with older builds."
  },
  {
    id: "faq-3",
    tag: "saves",
    question: "Will my existing worlds and resource packs be deleted or corrupted?",
    answer: "Never! BUGrock Launcher features a Zero-Loss World Protection system. Before linking any instance or switching versions, existing worlds are automatically backed up to 'Backups instances/' so your saves remain 100% safe."
  },
  {
    id: "faq-4",
    tag: "addons",
    question: "How does the In-World Pack & Addon Injector work?",
    answer: "Instead of digging through hidden UWP AppData folders (%localappdata%\\...\\com.mojang), you simply select your world inside the launcher and drag-and-drop or click to inject .mcpack, .mcaddon, and .mcworld archives directly into that specific world."
  },
  {
    id: "faq-5",
    tag: "installation",
    question: "Which edition should I download: Full Standalone or Lite?",
    answer: "We recommend the Full Standalone Edition for everyone. It bundles the required .NET 8.0 Desktop Runtime and Visual C++ 2015-2022 runtimes, working out-of-the-box on any Windows 10/11 x64 PC with zero extra installation steps."
  },
  {
    id: "faq-6",
    tag: "troubleshooting",
    question: "Why do I need to enable Developer Mode in Windows Settings?",
    answer: "Windows Developer Mode (Settings ➔ System ➔ For developers ➔ Developer Mode: ON) is required by Windows to register and sideload unpacked UWP (.appx) Minecraft packages without Microsoft Store restrictions."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Interactive Version Chooser Tabs & List
  const versionContainer = document.getElementById('mc-version-list');
  const versionFilterBtns = document.querySelectorAll('.mc-version-filter-btn');
  const activeVersionTitle = document.getElementById('mc-active-title');
  const activeVersionType = document.getElementById('mc-active-type');
  const activeVersionDesc = document.getElementById('mc-active-desc');
  const playButton = document.getElementById('mc-play-btn');

  let currentCategory = 'All';

  function renderVersions() {
    if (!versionContainer) return;
    versionContainer.innerHTML = '';

    const filtered = currentCategory === 'All' 
      ? VERSIONS_DATA 
      : VERSIONS_DATA.filter(v => v.category === currentCategory);

    filtered.forEach((ver) => {
      const card = document.createElement('div');
      card.className = `p-3.5 border-2 border-black mb-2 flex items-center justify-between cursor-pointer transition-all ${
        ver.id === selectedVersionId
          ? 'bg-[#388e3c]/20 border-[#2bbd28] shadow-[inset_1px_1px_0_#4caf50]'
          : 'bg-[#222222] hover:bg-[#2c2c2c] border-[#161616]'
      }`;

      card.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 border border-black bg-[#151515] flex items-center justify-center font-mono text-xs ${ver.type.includes('GDK') ? 'text-[#d946ef]' : 'text-[#2bbd28]'}">
            ${ver.type.includes('GDK') ? 'GDK' : 'UWP'}
          </div>
          <div>
            <div class="font-mc-ten text-sm text-white">${ver.name}</div>
            <div class="text-xs text-[#8c8c8c] font-mono">${ver.date} • ${ver.status}</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${ver.installed ? '<span class="text-[11px] font-mono px-2 py-0.5 bg-[#1b5e20] text-[#a5d6a7] border border-black">Installed</span>' : '<span class="text-[11px] font-mono px-2 py-0.5 bg-[#333333] text-[#aaaaaa] border border-black">Available</span>'}
        </div>
      `;

      card.addEventListener('click', () => {
        selectedVersionId = ver.id;
        renderVersions();
        updateActiveVersion(ver);
      });

      versionContainer.appendChild(card);
    });
  }

  let selectedVersionId = VERSIONS_DATA[0].id;

  function updateActiveVersion(ver) {
    if (activeVersionTitle) activeVersionTitle.textContent = ver.name;
    if (activeVersionType) activeVersionType.textContent = ver.type;
    if (activeVersionDesc) activeVersionDesc.textContent = ver.desc;
  }

  versionFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      versionFilterBtns.forEach(b => {
        b.classList.remove('mc-btn-green');
        b.classList.add('bg-[#484848]');
      });
      btn.classList.add('mc-btn-green');
      btn.classList.remove('bg-[#484848]');
      currentCategory = btn.getAttribute('data-category') || 'All';
      renderVersions();
    });
  });

  renderVersions();

  if (playButton) {
    playButton.addEventListener('click', () => {
      const ver = VERSIONS_DATA.find(v => v.id === selectedVersionId) || VERSIONS_DATA[0];
      const orig = playButton.innerHTML;
      playButton.innerHTML = `<span class="animate-spin inline-block mr-2">⚙</span> Launching ${ver.name.split('—')[0]}...`;
      playButton.classList.add('opacity-75', 'pointer-events-none');

      setTimeout(() => {
        playButton.innerHTML = `✓ Game Running (PID: 7294)`;
        setTimeout(() => {
          playButton.innerHTML = orig;
          playButton.classList.remove('opacity-75', 'pointer-events-none');
        }, 3000);
      }, 1000);
    });
  }

  // 2. Interactive FAQ Accordion & Filtering
  const faqListContainer = document.getElementById('faq-accordion-container');
  const faqTagBtns = document.querySelectorAll('.faq-tag-btn');
  let currentFaqTag = 'all';

  function renderFAQ() {
    if (!faqListContainer) return;
    faqListContainer.innerHTML = '';

    const filtered = currentFaqTag === 'all'
      ? FAQ_DATA
      : FAQ_DATA.filter(f => f.tag === currentFaqTag);

    filtered.forEach((item, idx) => {
      const el = document.createElement('div');
      el.className = 'faq-item mc-card mb-3 overflow-hidden';
      el.innerHTML = `
        <button type="button" class="faq-header w-full p-4 text-left flex items-center justify-between cursor-pointer bg-[#242424] hover:bg-[#2b2b2b] transition-colors">
          <span class="font-mc-ten text-base text-white flex items-center gap-2">
            <span class="text-[#2bbd28]">${idx + 1}.</span>
            ${item.question}
          </span>
          <span class="faq-arrow text-sm font-mono text-[#2bbd28] transition-transform duration-200">▼</span>
        </button>
        <div class="faq-content bg-[#1c1c1c] border-t border-black px-5 py-0 text-sm text-[#c0c0c0] leading-relaxed">
          <p class="py-4">${item.answer}</p>
        </div>
      `;

      const header = el.querySelector('.faq-header');
      header.addEventListener('click', () => {
        el.classList.toggle('active');
      });

      faqListContainer.appendChild(el);
    });
  }

  faqTagBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      faqTagBtns.forEach(b => {
        b.classList.remove('mc-btn-green');
      });
      btn.classList.add('mc-btn-green');
      currentFaqTag = btn.getAttribute('data-tag') || 'all';
      renderFAQ();
    });
  });

  renderFAQ();

  // 3. Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mc-mobile-menu-btn');
  const mobileMenu = document.getElementById('mc-mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
});
