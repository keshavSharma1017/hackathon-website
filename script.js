document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

function openRegistrationForm() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border-radius: 20px;
    padding: 2rem;
    max-width: 420px;
    width: 90%;
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
    position: relative;
    animation: modalSlideIn 0.3s ease-out;
    max-height: 85vh;
    overflow-y: auto;
  `;

  modal.innerHTML = `
    <style>
      @keyframes modalSlideIn {
        from {
          opacity: 0;
          transform: translateY(-50px) scale(0.9);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .form-input {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 0.9rem;
      }
      .form-input::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
      .form-select {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        background: rgba(30, 27, 75, 0.9);
        color: white;
        font-size: 0.9rem;
      }
      .form-select option {
        background: #1e1b4b;
        color: white;
        padding: 0.5rem;
      }
    </style>
    <button id="closeModal" style="
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      background: rgba(139, 92, 246, 0.2);
      border: 1px solid rgba(139, 92, 246, 0.5);
      color: #8b5cf6;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.3rem 0.6rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      z-index: 10001;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">×</button>
    <h2 style="color: #8b5cf6; margin-bottom: 1rem; text-align: center; font-size: 1.3rem;">Register for H2S Hackathon</h2>
    <form id="registrationForm">
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Full Name</label>
        <input type="text" required class="form-input" placeholder="Enter your full name">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Email</label>
        <input type="email" required class="form-input" placeholder="Enter your email">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Password</label>
        <input type="password" required class="form-input" placeholder="Create a password">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Confirm Password</label>
        <input type="password" required class="form-input" placeholder="Confirm your password">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Institution</label>
        <input type="text" required class="form-input" placeholder="Enter your institution">
      </div>
      <div style="margin-bottom: 1.2rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Student Level</label>
        <select required class="form-select">
          <option value="">Select Level</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate/Postgraduate</option>
          <option value="phd">PhD/Research Scholar</option>
        </select>
      </div>
      <button type="submit" style="
        width: 100%;
        padding: 0.8rem;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">Register Now</button>
    </form>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  };

  document.getElementById('closeModal').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.getElementById('registrationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const password = e.target.querySelector('input[type="password"]').value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }
    
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
    closeModal();
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

function openApplicationForm() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border-radius: 20px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
    position: relative;
    animation: modalSlideIn 0.3s ease-out;
    max-height: 85vh;
    overflow-y: auto;
  `;

  modal.innerHTML = `
    <style>
      .form-input {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 0.9rem;
      }
      .form-select {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        background: rgba(30, 27, 75, 0.9);
        color: white;
        font-size: 0.9rem;
      }
      .form-select option {
        background: #1e1b4b;
        color: white;
        padding: 0.5rem;
      }
    </style>
    <button id="closeModal" style="
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      background: rgba(139, 92, 246, 0.2);
      border: 1px solid rgba(139, 92, 246, 0.5);
      color: #8b5cf6;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.3rem 0.6rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      z-index: 10001;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">×</button>
    <h2 style="color: #8b5cf6; margin-bottom: 1rem; text-align: center; font-size: 1.3rem;">Apply for H2S Hackathon</h2>
    <form id="applicationForm">
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Team Name</label>
        <input type="text" required class="form-input">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Team Leader Name</label>
        <input type="text" required class="form-input">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Email</label>
        <input type="email" required class="form-input">
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Team Size</label>
        <select required class="form-select">
          <option value="">Select Team Size</option>
          <option value="3">3 Members</option>
          <option value="4">4 Members</option>
        </select>
      </div>
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Preferred Challenge</label>
        <select required class="form-select">
          <option value="">Select Challenge</option>
          <option value="challenge1">AI Traffic Control</option>
          <option value="challenge2">Health Insights App</option>
          <option value="challenge3">Legal Contract Scanner</option>
          <option value="challenge4">Flood Risk Prediction</option>
          <option value="challenge5">Digital Certificates</option>
          <option value="challenge6">Virtual Campus Tour</option>
          <option value="challenge7">Waste Classification</option>
          <option value="challenge8">Offline Communication</option>
          <option value="challenge9">ISL Translation</option>
          <option value="challenge10">Mental Health Assistant</option>
        </select>
      </div>
      <div style="margin-bottom: 1.2rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Brief Project Idea</label>
        <textarea required class="form-input" style="min-height: 80px; resize: vertical;" placeholder="Describe your project idea in 2-3 sentences..."></textarea>
      </div>
      <button type="submit" style="
        width: 100%;
        padding: 0.8rem;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">Submit Application</button>
    </form>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  };

  document.getElementById('closeModal').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.getElementById('applicationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Application submitted successfully! Our team will review your submission and get back to you soon.');
    closeModal();
  });
}

function openSignInForm() {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border-radius: 20px;
    padding: 2rem;
    max-width: 380px;
    width: 90%;
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
    position: relative;
    animation: modalSlideIn 0.3s ease-out;
  `;

  modal.innerHTML = `
    <style>
      .form-input {
        width: 100%;
        padding: 0.6rem;
        border: 1px solid rgba(139, 92, 246, 0.3);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        font-size: 0.9rem;
      }
    </style>
    <button id="closeModal" style="
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      background: rgba(139, 92, 246, 0.2);
      border: 1px solid rgba(139, 92, 246, 0.5);
      color: #8b5cf6;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.3rem 0.6rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      z-index: 10001;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">×</button>
    <h2 style="color: #8b5cf6; margin-bottom: 1rem; text-align: center; font-size: 1.3rem;">Sign In</h2>
    <form id="signInForm">
      <div style="margin-bottom: 0.8rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Email</label>
        <input type="email" required class="form-input">
      </div>
      <div style="margin-bottom: 1.2rem;">
        <label style="display: block; color: #e2e8f0; margin-bottom: 0.4rem; font-size: 0.85rem;">Password</label>
        <input type="password" required class="form-input">
      </div>
      <button type="submit" style="
        width: 100%;
        padding: 0.8rem;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        margin-bottom: 1rem;
      ">Sign In</button>
      <p style="text-align: center; color: #cbd5e1; font-size: 0.8rem;">
        Don't have an account? <a href="#" id="switchToRegister" style="color: #8b5cf6; text-decoration: none;">Register here</a>
      </p>
    </form>
  `;

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  };

  document.getElementById('closeModal').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.getElementById('switchToRegister').addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
    setTimeout(openRegistrationForm, 300);
  });

  document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Sign in successful! Welcome to H2S Hackathon.');
    closeModal();
  });
}

document.querySelectorAll('.register-btn, .register-btn-alt').forEach(btn => {
  btn.addEventListener('click', openRegistrationForm);
});

document.querySelectorAll('.apply-btn').forEach(btn => {
  btn.addEventListener('click', openApplicationForm);
});

document.querySelector('.sign-in-btn').addEventListener('click', openSignInForm);

document.querySelector('.learn-more-btn')?.addEventListener('click', () => {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  `;

  const modal = document.createElement('div');
  modal.style.cssText = `
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    border-radius: 20px;
    padding: 2rem;
    max-width: 500px;
    width: 90%;
    border: 1px solid rgba(139, 92, 246, 0.3);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.3);
    position: relative;
    animation: modalSlideIn 0.3s ease-out;
    max-height: 85vh;
    overflow-y: auto;
  `;

  modal.innerHTML = `
    <button id="closeModal" style="
      position: absolute;
      top: 0.8rem;
      right: 0.8rem;
      background: rgba(139, 92, 246, 0.2);
      border: 1px solid rgba(139, 92, 246, 0.5);
      color: #8b5cf6;
      font-size: 1.2rem;
      cursor: pointer;
      padding: 0.3rem 0.6rem;
      border-radius: 50%;
      transition: all 0.3s ease;
      z-index: 10001;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    ">×</button>
    <h2 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.3rem;">Challenge 07: Waste Classification System</h2>
    <div style="color: #e2e8f0; line-height: 1.6; font-size: 0.9rem;">
      <h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.1rem;">Problem Statement</h3>
      <p style="margin-bottom: 1rem;">
        Build a machine-learning system that classifies waste into biodegradable, recyclable, and hazardous categories using a live camera feed.
      </p>
      
      <h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.1rem;">Requirements</h3>
      <ul style="margin-bottom: 1rem; padding-left: 1.5rem;">
        <li>Real-time image processing and classification</li>
        <li>Support for multiple waste categories</li>
        <li>User-friendly interface</li>
        <li>High accuracy (>85%)</li>
        <li>Mobile or web-based application</li>
      </ul>
      
      <h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.1rem;">Expected Deliverables</h3>
      <ul style="margin-bottom: 1rem; padding-left: 1.5rem;">
        <li>Working prototype with live camera integration</li>
        <li>Trained machine learning model</li>
        <li>Documentation and presentation</li>
        <li>Source code and deployment instructions</li>
      </ul>
      
      <h3 style="color: #8b5cf6; margin-bottom: 1rem; font-size: 1.1rem;">Evaluation Criteria</h3>
      <ul style="margin-bottom: 1.5rem; padding-left: 1.5rem;">
        <li>Technical implementation (40%)</li>
        <li>Innovation and creativity (30%)</li>
        <li>User experience (20%)</li>
        <li>Presentation quality (10%)</li>
      </ul>
      
      <button onclick="this.closest('.modal-overlay').remove(); openApplicationForm();" style="
        width: 100%;
        padding: 0.8rem;
        background: linear-gradient(135deg, #8b5cf6, #6366f1);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
      ">Apply for This Challenge</button>
    </div>
  `;

  overlay.className = 'modal-overlay';
  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  const closeModal = () => {
    overlay.style.animation = 'fadeOut 0.3s ease-out';
    setTimeout(() => {
      document.body.removeChild(overlay);
    }, 300);
  };

  document.getElementById('closeModal').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.top = '10px';
  } else {
    navbar.style.top = '20px';
  }
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.participant-card, .benefit-card, .step-item, .challenge-item, .reward-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

function updateCountdown() {
  const countdownElement = document.querySelector('.countdown-timer');
  if (countdownElement) {
    countdownElement.textContent = '16d 12h 42m 31s';
  }
}

updateCountdown();

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
  touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
});

function handleSwipe() {
  const swipeThreshold = 50;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      window.scrollBy(0, 100);
    } else {
      window.scrollBy(0, -100);
    }
    }
}

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

const style = document.createElement('style');
style.textContent = `
  .keyboard-navigation *:focus {
    outline: 2px solid #8b5cf6 !important;
    outline-offset: 2px !important;
  }
  
  .lazy {
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .lazy.loaded {
    opacity: 1;
  }
`;
document.head.appendChild(style);