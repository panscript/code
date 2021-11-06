export interface ILanguageOption {
  name: string;
  countryCode: string;
}

export interface ILanguageOptionsList {
  [language: string]: ILanguageOption;
}

export const LanguageOptions: ILanguageOptionsList = {
  en_us: {
    name: "English (USA)",
    countryCode: "US",
  },
  pt_br: {
    name: "Português (Brasil)",
    countryCode: "BR",
  },
  fr_fr: {
    name: "Français (France)",
    countryCode: "FR",
  },
};
