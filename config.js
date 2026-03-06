// config.js (dans sekhamet-enveloppe/)

/* =========================================================
   CONFIGURATION DE L'APPLICATION
   ========================================================= */

const urlParams = new URLSearchParams(window.location.search);
const appFromUrl = urlParams.get("app");

const ALLOWED_APP_IDS = ["origine", "enveloppe", "emergence"];

window.APP_ID = ALLOWED_APP_IDS.includes(appFromUrl) ? appFromUrl : "enveloppe";


/* =========================================================
   CONFIGURATION DES PROGRAMMES
   ========================================================= */

window.APP_CONFIGS = {
  origine: {
    ID: "origine",
    NAME: "ORIGINE",
    STORAGE_PREFIX: "origine_",
    CACHE_NAME: "origine-pwa-v1",
    ICON_192: "./core/assets/icons/ORIGINE-192.png",
    ICON_512: "./core/assets/icons/ORIGINE-512.png",
    NOTIF_TITLE: "ORIGINE — Défi du jour",
    INSTALL_TITLE: "Installer ORIGINE ?",
    INSTALL_LABEL: "📱 Installer ORIGINE sur l'écran d'accueil",
    MAIN_TITLE: "Vers une alimentation consciente en 21 jours",
    BROWSER_TITLE: "ORIGINE - Défi Quotidien",
    TOTAL_DAYS: 21
  },

  enveloppe: {
    ID: "enveloppe",
    NAME: "ENVELOPPE",
    STORAGE_PREFIX: "enveloppe_",
    CACHE_NAME: "enveloppe-pwa-v1",
    ICON_192: "./core/assets/icons/ENVELOPPE-192.png",
    ICON_512: "./core/assets/icons/ENVELOPPE-512.png",
    NOTIF_TITLE: "ENVELOPPE — Défi du jour",
    INSTALL_TITLE: "Installer ENVELOPPE ?",
    INSTALL_LABEL: "📱 Installer ENVELOPPE sur l'écran d'accueil",
    MAIN_TITLE: "Faire de mon corps mon Sanctuaire en 30 jours",
    BROWSER_TITLE: "ENVELOPPE - Défi Quotidien",
    TOTAL_DAYS: 31
  },

  emergence: {
    ID: "emergence",
    NAME: "EMERGENCE",
    STORAGE_PREFIX: "emergence_",
    CACHE_NAME: "emergence-pwa-v1",
    ICON_192: "./core/assets/icons/EMERGENCE-192.png",
    ICON_512: "./core/assets/icons/EMERGENCE-512.png",
    NOTIF_TITLE: "EMERGENCE — Défi du jour",
    INSTALL_TITLE: "Installer EMERGENCE ?",
    INSTALL_LABEL: "📱 Installer EMERGENCE sur l'écran d'accueil",
    MAIN_TITLE: "Faire de mon Inconscient mon Allié évolutif en 66 jours",
    BROWSER_TITLE: "EMERGENCE - Défi Quotidien",
    TOTAL_DAYS: 62
  }
};


/* =========================================================
   CONFIG ACTIVE
   ========================================================= */

window.APP_CONFIG = window.APP_CONFIGS[window.APP_ID] || window.APP_CONFIGS.enveloppe;