import i18n from "i18next";
import {initReactI18next} from 'react-i18next';

import translationEN from './locales/en/translationEN.json';
import translationNL from './locales/nl/translationNL.json';

//translations
const resources = {
    en: {
        translation: translationEN
    },
    nl: {
        translation: translationNL
    }
}

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    debug: true,

    keySeparator: '.',

    interpolation: {
        escapeValue: false
    },
    react: {
        useSuspense: true,
    },
    saveMissing: true
});

export default i18n;