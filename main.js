// Carousel
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('carousel-container');
  const images = container.querySelectorAll('img');

  const applyDepth = () => {
    const rect = container.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    images.forEach(img => {
      const imgRect = img.getBoundingClientRect();
      const imgCenterX = imgRect.left + imgRect.width / 2;
      const dist = Math.abs(centerX - imgCenterX);
      const maxDist = rect.width / 2 + imgRect.width;
      const scale = 1 + (1 - Math.min(dist / maxDist, 1)) * 0.5;
      const rotateY = (centerX - imgCenterX) / rect.width * 30;
      img.style.transform = `perspective(1000px) translateZ(0) scale(${scale}) rotateY(${rotateY}deg)`;
      img.style.zIndex = Math.round(scale * 100);
    });
  };

  container.addEventListener('scroll', () => requestAnimationFrame(applyDepth));
  applyDepth();
});

// Google Maps initialization
function initMap() {

  const storeLocation = { lat: 38.433157829438755, lng: 27.142857499404936 };
  const map = new google.maps.Map(document.getElementById('map'), {
    center: storeLocation,
    zoom: 15
  });
  new google.maps.Marker({
    position: storeLocation,
    map: map
  });
}
