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

  // 1. Response Buttons (Yes! & Sure)
  const btnYes = document.getElementById('btn-choice-yes');
  const btnSure = document.getElementById('btn-choice-sure');
  
  if (btnYes) {
    btnYes.addEventListener('click', () => {
      showToast('기쁜 날 와주셔서 정말 감사해요! 🌸');
    });
  }

  if (btnSure) {
    btnSure.addEventListener('click', () => {
      showToast('소중한 발걸음 설레며 기다릴게요 💖');
    });
  }

  // 2. Attend / Convey Buttons
  const btnAttend = document.getElementById('btn-attend');
  const btnConvey = document.getElementById('btn-convey');

  if (btnAttend) {
    btnAttend.addEventListener('click', () => {
      showToast('🌸 2027년 4월 4일에 뵙겠습니다. 감사합니다!');
    });
  }

  if (btnConvey) {
    btnConvey.addEventListener('click', () => {
      showToast('💌 따뜻한 축하의 마음에 깊이 감사드립니다.');
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
