let deferredPrompt;

    function isIos() {
      return /iphone|ipad|ipod/i.test(navigator.userAgent);
    }

    function isStandalone() {
      return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    }

    function showIosBanner() {
      document.getElementById('a2hs-banner').style.display = 'flex';
    }

    function dismissIosBanner() {
      document.getElementById('a2hs-banner').style.display = 'none';
    }

    function showInstallBanner() {
      document.getElementById('install-banner').style.display = 'flex';
    }

    function dismissInstallBanner() {
      document.getElementById('install-banner').style.display = 'none';
    }

    window.addEventListener('beforeinstallprompt', (e) => {
      deferredPrompt = e;
      if (!isIos() && !isStandalone()) {
        showInstallBanner();
      }
    });

    window.addEventListener('load', () => {
      if (isIos() && !isStandalone()) {
        showIosBanner();
      }
      if (isStandalone()) {
        dismissIosBanner();
        dismissInstallBanner();
      }
    });

    document.getElementById('install-btn').addEventListener('click', async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('用戶接受安裝');
      } else {
        console.log('用戶取消安裝');
      }
      deferredPrompt = null;
      dismissInstallBanner();
    });