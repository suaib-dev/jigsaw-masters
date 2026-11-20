/**
 * Jigsaw Masters - Interactive Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenuDropdown');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('active');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherBtn = otherItem.querySelector('.faq-question');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 3. Delete Account Form Handling
  const deleteForm = document.getElementById('accountDeletionForm');
  const confirmModal = document.getElementById('deleteConfirmModal');
  const closeModalBtn = document.getElementById('closeModalBtn');

  if (deleteForm) {
    deleteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const email = document.getElementById('userIdentifier').value.trim();
      const platform = document.getElementById('userPlatform').value;
      const consent = document.getElementById('confirmDeleteCheck').checked;

      if (!email) {
        alert('Please enter your Player ID or Email address.');
        return;
      }

      if (!consent) {
        alert('Please confirm that you understand account deletion is permanent.');
        return;
      }

      // Show confirmation dialog / modal
      if (confirmModal) {
        confirmModal.classList.add('active');
      }

      // Reset form
      deleteForm.reset();
    });
  }

  if (closeModalBtn && confirmModal) {
    closeModalBtn.addEventListener('click', () => {
      confirmModal.classList.remove('active');
    });

    // Close on backdrop click
    confirmModal.addEventListener('click', (e) => {
      if (e.target === confirmModal) {
        confirmModal.classList.remove('active');
      }
    });
  }

  // 4. Dynamic Year in Footer
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
