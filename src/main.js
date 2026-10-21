// ==========================================================================
// BUGrock Launcher Website Configuration & Interactive Logic
// ==========================================================================

// Easily customize your social links here:
export const SOCIAL_LINKS = {
  discord: "https://discord.gg/minecraft", // Replace with your Discord server invite
  youtube: "https://youtube.com/@7AmoZ",  // Replace with your YouTube channel
  twitter: "https://x.com/7AmoZ",         // Replace with your X / Twitter handle
  github: "https://github.com/7AmoZ/BUGrock-Launcher",
  telegram: "https://t.me/BUGrockLauncher", // Replace with your Telegram channel/group
  tiktok: "https://tiktok.com/@bugrocklauncher" // Replace with your TikTok
};

// Video Configuration (Supports YouTube Video ID or direct MP4 URL)
export const VIDEO_CONFIG = {
  type: "youtube", // "youtube" or "local"
  youtubeId: "dQw4w9WgXcQ", // Change this to your YouTube video ID (e.g. 7cQG3_4x8)
  localVideoUrl: "./assets/trailer.mp4"
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Populate Social Links dynamically
  document.querySelectorAll('[data-social]').forEach((el) => {
    const network = el.getAttribute('data-social');
    if (SOCIAL_LINKS[network]) {
      el.setAttribute('href', SOCIAL_LINKS[network]);
    }
  });

  // 2. Intersection Observer for Scroll Reveals
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1,
  };

  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach((el) => revealObserver.observe(el));

  // 3. Video Modal Logic
  const videoModal = document.getElementById('video-modal');
  const videoFrame = document.getElementById('video-iframe');
  const videoCloseBtn = document.getElementById('video-modal-close');
  const playVideoButtons = document.querySelectorAll('.play-video-trigger');

  function openVideoModal() {
    if (!videoModal) return;
    if (VIDEO_CONFIG.type === 'youtube' && videoFrame) {
      videoFrame.src = `https://www.youtube-nocookie.com/embed/${VIDEO_CONFIG.youtubeId}?autoplay=1&rel=0`;
    }
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeVideoModal() {
    if (!videoModal) return;
    if (videoFrame) {
      videoFrame.src = '';
    }
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  playVideoButtons.forEach((btn) => btn.addEventListener('click', openVideoModal));
  if (videoCloseBtn) videoCloseBtn.addEventListener('click', closeVideoModal);
  if (videoModal) {
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
  }

  // 4. Screenshots Gallery & Lightbox
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const filterTabs = document.querySelectorAll('.gallery-filter-btn');

  // Filter functionality
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach((t) => {
        t.classList.remove('bg-[#38A169]', 'text-white', 'border-[#276749]');
        t.classList.add('bg-[#181921]', 'text-[#8E92A4]', 'border-[#232530]');
      });
      tab.classList.remove('bg-[#181921]', 'text-[#8E92A4]', 'border-[#232530]');
      tab.classList.add('bg-[#38A169]', 'text-white', 'border-[#276749]');

      const filter = tab.getAttribute('data-filter');
      galleryItems.forEach((item) => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Open Lightbox
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.getAttribute('data-title') || img.getAttribute('alt');
      if (lightboxModal && lightboxImg) {
        lightboxImg.src = img.src;
        if (lightboxCaption) lightboxCaption.textContent = caption;
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeLightbox() {
    if (!lightboxModal) return;
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Keyboard escape handler for both modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
      closeLightbox();
    }
  });

  // 5. Interactive FAQ Accordion
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;
      const chevron = btn.querySelector('.chevron-icon');

      faqButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherBtn.nextElementSibling) otherBtn.nextElementSibling.classList.add('hidden');
          const otherChevron = otherBtn.querySelector('.chevron-icon');
          if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
        }
      });

      btn.setAttribute('aria-expanded', !isExpanded);
      if (isExpanded) {
        answer.classList.add('hidden');
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      } else {
        answer.classList.remove('hidden');
        if (chevron) chevron.style.transform = 'rotate(180deg)';
      }
    });
  });

  // 6. Copy Code Buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalContent = btn.innerHTML;
        btn.innerHTML = `
          <svg class="w-4 h-4 text-[#48BB78] inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-xs text-[#48BB78] font-bold">Copied!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalContent;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });

  // 7. System Checklist Counter
  const checkItems = document.querySelectorAll('.req-checkbox');
  const checkCounter = document.getElementById('req-counter');
  function updateChecklist() {
    if (!checkCounter || checkItems.length === 0) return;
    const checkedCount = document.querySelectorAll('.req-checkbox:checked').length;
    checkCounter.textContent = `${checkedCount} / ${checkItems.length} Ready`;
    if (checkedCount === checkItems.length) {
      checkCounter.className = 'px-3 py-1 text-xs font-bold rounded-full bg-[#38A169]/20 text-[#48BB78] border border-[#38A169]/40';
    } else {
      checkCounter.className = 'px-3 py-1 text-xs font-bold rounded-full bg-[#D05CE3]/15 text-[#D05CE3] border border-[#D05CE3]/30';
    }
  }
  checkItems.forEach((item) => item.addEventListener('change', updateChecklist));
  updateChecklist();

  // 8. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('hidden');
      if (isHidden) {
        mobileMenu.classList.remove('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
      } else {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      }
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 9. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.add('opacity-100');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
        backToTopBtn.classList.remove('opacity-100');
      }
    });
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
