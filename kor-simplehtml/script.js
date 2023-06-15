window.addEventListener('DOMContentLoaded', function() {
    var popupOverlay = document.getElementById('popup-overlay');
    var audio = document.getElementById('audio-player');
  
    document.getElementById('open-popup-container').addEventListener('click', function() {
      popupOverlay.style.display = 'flex';
      audio.play().catch(function(error) {
        console.log('Autoplay was prevented:', error);
      });
    });
  
    document.getElementById('popup-overlay').addEventListener('click', function(event) {
      if (event.target.id === 'popup-overlay') {
        popupOverlay.style.display = 'none';
        audio.pause();
      }
    });
  });
  