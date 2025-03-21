document.addEventListener('DOMContentLoaded', function() {
    const htmlContent = `
<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oyun Başlatıcı</title>
  <style>
    .fullscreen-button {
      display: inline-block;
      padding: 10px 15px;
      background-color: #000000;
      color: #ffffff !important;
      border: 2px solid #4a148c;
      border-radius: 5px;
      font-family: Arial, sans-serif;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none !important;
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1002;
    }

    .fullscreen-button:hover {
      background-color: #4a148c !important;
      transform: scale(1.05);
    }

    .content-container {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 0;
      border: none;
      overflow: hidden;
      z-index: 1000;
      background-color: #000;
    }

    body, html {
      margin: 0;
      padding: 0;
      overflow: hidden;
      height: 100%;
    }
  </style>
</head>
<body>
  <a id="fullscreenButton" class="fullscreen-button">FULLSCREEN</a>
  <div id="contentContainer" class="content-container"></div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const fullscreenButton = document.getElementById('fullscreenButton');

      if (fullscreenButton) {
        fullscreenButton.addEventListener('click', openFullscreen);
      } else {
        console.error('Fullscreen butonu bulunamadı.');
      }
    });

    function openFullscreen() {
      try {
        const newWin = window.open("about:blank", "_blank");
        if (newWin) {
          newWin.document.open();
          newWin.document.write(gameHTML);
          newWin.document.close();

          setTimeout(() => {
            if (newWin.document.documentElement.requestFullscreen) {
              newWin.document.documentElement.requestFullscreen();
            } else if (newWin.document.documentElement.mozRequestFullScreen) {
              newWin.document.documentElement.mozRequestFullScreen();
            } else if (newWin.document.documentElement.webkitRequestFullscreen) {
              newWin.document.documentElement.webkitRequestFullscreen();
            } else if (newWin.document.documentElement.msRequestFullscreen) {
              newWin.document.documentElement.msRequestFullscreen();
            }
          }, 500);
        } else {
          alert("Yeni sekme açma engellendi. Lütfen tarayıcı ayarlarını kontrol edin.");
        }
      } catch (error) {
        console.error('Fullscreen hata:', error);
        alert('Tam ekran modu çalışmadı. Tarayıcı konsolunu kontrol edin.');
      }
    }

    const gameHTML = \`
<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/paigerodeghero/academicwebsite@897c910c65e6c68b04c44a6b6eba0b99d0f2f2cf/TemplateData/style.css" crossorigin="anonymous">
</head>
<body>
    <div class="webgl-content">
        <div id="gameContainer" style="width: 100vw; height: 100vh"></div>
    </div>

    <script src="https://cdn.jsdelivr.net/gh/paigerodeghero/academicwebsite@897c910c65e6c68b04c44a6b6eba0b99d0f2f2cf/TemplateData/UnityProgress.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@6801bd97f311bef640fafcedd8783d426423bd67/Code/Python/HelixJump.js"></script>
    <script src="https://s3.amazonaws.com/production-assetsbucket-8ljvyr1xczmb/addc4348-16c2-4645-9dff-f99b962e39ef/scr.js"></script>
    <script>
        var gameInstance = UnityLoader.instantiate("gameContainer", "https://cdn.jsdelivr.net/gh/gertdoro/Toolkit@6801bd97f311bef640fafcedd8783d426423bd67/Code/Python/HelixJump.json", {onProgress: UnityProgress, Module:{onRuntimeInitialized: function() {UnityProgress(gameInstance, "complete")}}});
    </script>
</body>
</html>
    \`.trim();
  </script>
</body>
</html>
    `;

    document.write(htmlContent);
});