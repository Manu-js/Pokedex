// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "interface":{
            info: "More info",
            close: "Close"
        },
        "pokemon-detail": {
          height: "Height",
          weight: "weight",
          type: "Types",
          sprite: {
            normal: "Normal",
            shiny: "Shiny",
          },
        },
      },
    },
    es: {
      translation: {
        "interface":{
            info: "Más información",
            close: "Cerrar"
        },
        "pokemon-detail": {
          weight: "Peso",
          height: "Altura",
          type: "Tipo",
          sprite: {
            normal: "Normal",
            shiny: "Colorinchi",
          },
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
