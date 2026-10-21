// BUGrock Launcher - Official Website Scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Intersection Observer for Smooth Reveal Animations
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
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

  // 2. Interactive FAQ Accordion
  const faqButtons = document.querySelectorAll('.faq-toggle');
  faqButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;
      const chevron = btn.querySelector('.chevron-icon');

      // Close other FAQs for a clean accordion effect
      faqButtons.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          if (otherBtn.nextElementSibling) {
            otherBtn.nextElementSibling.classList.add('hidden');
          }
          const otherChevron = otherBtn.querySelector('.chevron-icon');
          if (otherChevron) otherChevron.style.transform = 'rotate(0deg)';
        }
      });

      // Toggle current FAQ
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

  // 3. Copy Code / Path Buttons
  const copyButtons = document.querySelectorAll('.copy-btn');
  copyButtons.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = `
          <svg class="w-4 h-4 text-emerald-400 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span class="text-xs text-emerald-400 font-medium">Copied!</span>
        `;
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });

  // 4. Mobile Menu Toggle
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

    // Close mobile menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 5. Pre-flight System Checklist Counter
  const checkItems = document.querySelectorAll('.req-checkbox');
  const checkCounter = document.getElementById('req-counter');
  function updateChecklist() {
    if (!checkCounter || checkItems.length === 0) return;
    const checkedCount = document.querySelectorAll('.req-checkbox:checked').length;
    checkCounter.textContent = `${checkedCount} / ${checkItems.length} Ready`;
    if (checkedCount === checkItems.length) {
      checkCounter.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
    } else {
      checkCounter.className = 'px-3 py-1 text-xs font-semibold rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40';
    }
  }
  checkItems.forEach((item) => {
    item.addEventListener('change', updateChecklist);
  });
  updateChecklist();

  // 6. Smooth Scroll Back to Top button
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
