// config.js (dans sekhamet-enveloppe/)

window.APP_ID = "enveloppe"; // à changer pour tester un programme

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
    INSTALL_LABEL: "📱 Installer ORIGINE sur l'écran d'accueil"
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
    INSTALL_LABEL: "📱 Installer ENVELOPPE sur l'écran d'accueil"
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
    INSTALL_LABEL: "📱 Installer EMERGENCE sur l'écran d'accueil"
  }
};

window.APP_CONFIG = window.APP_CONFIGS[window.APP_ID];