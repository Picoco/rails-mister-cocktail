import Typed from 'typed.js';

function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["Find the best cocktails added by our communnity", "Add your favorite cocktails"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
