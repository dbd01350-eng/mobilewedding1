// Mobile Wedding Invitation - Interactive Features

document.addEventListener('DOMContentLoaded', () => {
  // Toast Notification Utility
  const showToast = (message) => {
    let toast = document.querySelector('.custom-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'custom-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  };

  // 1. Google Sheets Webhook URL for RSVP (100% Free Integration)
  // 구글 스프레드시트 연동 시 발급받은 웹 앱 URL을 아래 따옴표 안에 넣으시면 됩니다.
  const GOOGLE_SHEET_RSVP_URL = 'https://script.google.com/macros/s/AKfycbyxrW0itpkBi4oT6WkMS0RISLbaOYPTnFpDHqgmAW6Ki3_uU9qV7Nb_YbpIVrdpWKss/exec';

  // 2. RSVP Modal Elements & Controls
  const rsvpModal = document.getElementById('rsvp-modal');
  const rsvpCloseBtn = document.getElementById('rsvp-close-btn');
  const rsvpForm = document.getElementById('rsvp-form');
  const rsvpSubmitBtn = document.getElementById('rsvp-submit-btn');
  const rsvpCountGroup = document.getElementById('rsvp-count-group');
  const rsvpMealGroup = document.getElementById('rsvp-meal-group');

  const openRsvpModal = () => {
    if (rsvpModal) {
      rsvpModal.classList.add('show');
      rsvpModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      const nameInput = document.getElementById('rsvp-name');
      if (nameInput) setTimeout(() => nameInput.focus(), 150);
    }
  };

  const closeRsvpModal = () => {
    if (rsvpModal) {
      rsvpModal.classList.remove('show');
      rsvpModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (rsvpCloseBtn) {
    rsvpCloseBtn.addEventListener('click', closeRsvpModal);
  }

  if (rsvpModal) {
    rsvpModal.addEventListener('click', (e) => {
      if (e.target === rsvpModal) {
        closeRsvpModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && rsvpModal && rsvpModal.classList.contains('show')) {
      closeRsvpModal();
    }
  });

  // Toggle Count & Meal visibility on attend change
  const attendRadios = document.querySelectorAll('input[name="rsvp_attend"]');
  attendRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
      const isAttending = e.target.value === '참석';
      if (rsvpCountGroup) rsvpCountGroup.style.display = isAttending ? 'flex' : 'none';
      if (rsvpMealGroup) rsvpMealGroup.style.display = isAttending ? 'flex' : 'none';
    });
  });

  // Connect Response & Attend Buttons to Open RSVP Modal
  const btnYes = document.getElementById('btn-choice-yes');
  const btnSure = document.getElementById('btn-choice-sure');
  const btnAttend = document.getElementById('btn-attend');
  const btnConveys = document.querySelectorAll('#btn-convey');

  if (btnYes) btnYes.addEventListener('click', openRsvpModal);
  if (btnSure) btnSure.addEventListener('click', openRsvpModal);
  if (btnAttend) btnAttend.addEventListener('click', openRsvpModal);

  btnConveys.forEach((btn) => {
    btn.addEventListener('click', () => {
      showToast('💌 따뜻한 축하의 마음에 깊이 감사드립니다.');
    });
  });

  // RSVP Form Submit Handler
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('rsvp-name');
      const name = nameInput ? nameInput.value.trim() : '';

      if (!name) {
        showToast('성함을 입력해 주세요.');
        return;
      }

      const sideInput = document.querySelector('input[name="rsvp_side"]:checked');
      const attendInput = document.querySelector('input[name="rsvp_attend"]:checked');
      const mealInput = document.querySelector('input[name="rsvp_meal"]:checked');
      const countInput = document.getElementById('rsvp-count');
      const messageInput = document.getElementById('rsvp-message');

      const side = sideInput ? sideInput.value : '신랑측';
      const attend = attendInput ? attendInput.value : '참석';
      const count = attend === '참석' && countInput ? countInput.value : '0명';
      const meal = attend === '참석' && mealInput ? mealInput.value : '식사 안함';
      const message = messageInput ? messageInput.value.trim() : '';
      const timestamp = new Date().toLocaleString('ko-KR');

      const payload = { timestamp, side, name, attend, count, meal, message };

      // Button Loading State
      if (rsvpSubmitBtn) {
        rsvpSubmitBtn.disabled = true;
        rsvpSubmitBtn.textContent = '전송 중...';
      }

      try {
        // Send to Google Sheets if URL is configured
        if (GOOGLE_SHEET_RSVP_URL) {
          await fetch(GOOGLE_SHEET_RSVP_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
        }

        // Always save locally in browser storage as backup
        const existingData = JSON.parse(localStorage.getItem('rsvp_list') || '[]');
        existingData.push(payload);
        localStorage.setItem('rsvp_list', JSON.stringify(existingData));

        closeRsvpModal();
        rsvpForm.reset();

        showToast(
          attend === '참석'
            ? `🌸 ${name}님, 참석 의사가 전달되었습니다. 감사합니다!`
            : `💌 ${name}님, 따뜻한 마음 전해주셔서 감사합니다!`
        );
      } catch (err) {
        console.error('RSVP submission error:', err);
        showToast('전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
      } finally {
        if (rsvpSubmitBtn) {
          rsvpSubmitBtn.disabled = false;
          rsvpSubmitBtn.textContent = '참석 의사 전달하기';
        }
      }
    });
  }

  // 3. Photo Gallery Action (Modal Open / Close)
  const btnGallery = document.getElementById('btn-gallery-open');
  const galleryModal = document.getElementById('gallery-modal');
  const btnGalleryClose = document.getElementById('btn-gallery-close');
  const gallerySlider = document.querySelector('.gallery-slider-container');

  const openGalleryModal = () => {
    if (galleryModal) {
      if (gallerySlider) {
        gallerySlider.scrollLeft = 0;
      }
      galleryModal.classList.add('show');
      galleryModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeGalleryModal = () => {
    if (galleryModal) {
      galleryModal.classList.remove('show');
      galleryModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (btnGallery) {
    btnGallery.addEventListener('click', openGalleryModal);
  }

  if (btnGalleryClose) {
    btnGalleryClose.addEventListener('click', closeGalleryModal);
  }

  // 4. Window Close Control
  const closeBtn = document.querySelector('.window-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      showToast('축하해 주셔서 진심으로 감사합니다 ✨');
    });
  }

  // 5. Naver Maps Initialization
  const initNaverMap = () => {
    const mapArea = document.getElementById('map-area');
    if (!mapArea) return;

    const renderMap = () => {
      if (typeof naver !== 'undefined' && naver.maps) {
        try {
          // 더 파티움 여의도 좌표: 위도 37.5284, 경도 126.9205
          const venueLatLng = new naver.maps.LatLng(37.5284, 126.9205);
          const map = new naver.maps.Map('map-area', {
            center: venueLatLng,
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
              position: naver.maps.Position.TOP_RIGHT,
              style: naver.maps.ZoomControlStyle.SMALL
            },
            mapTypeControl: false,
            scaleControl: false
          });

          const marker = new naver.maps.Marker({
            position: venueLatLng,
            map: map,
            title: '더 파티움 여의도'
          });

          naver.maps.Event.addListener(marker, 'click', () => {
            window.open('https://map.naver.com/p/search/%EB%8D%94%ED%8C%8C%ED%8B%B0%EC%9B%80%20%EC%97%AC%EC%9D%98%EB%8F%84', '_blank');
          });
        } catch (e) {
          console.warn('네이버 지도 초기화 중 오류:', e);
        }
      }
    };

    if (typeof naver !== 'undefined' && naver.maps) {
      renderMap();
    } else {
      window.addEventListener('load', renderMap);
    }
  };

  initNaverMap();
});

