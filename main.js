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

// Leaflet map initialization
function initMap() {
  // Store coordinates
  const storeLatLng = [38.433157829438755, 27.142857499404936];
  // Create map
  const map = L.map('map').setView(storeLatLng, 15);
  // Add OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
  }).addTo(map);
  // Add marker
  L.marker(storeLatLng).addTo(map);
}
