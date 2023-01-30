// i18n.js
import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        interface: {
          info: "More info",
          close: "Close",
          loadPokemons: "Load More",
          changeLanguage: "Change Configuration",
          chooseLanguage: "Choose language",
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
        interface: {
          info: "Más información",
          close: "Cerrar",
          loadPokemons: "Cargar más",
          changeLanguage: "Cambiar idioma",
          chooseLanguage: "Elige el idioma",
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
