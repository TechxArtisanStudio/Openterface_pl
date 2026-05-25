export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Przewodniki produktów, FAQ, samouczki i pobieranie aplikacji — na docs.openterface.com.",
    "homeMessage": "Samouczki, FAQ, pobieranie aplikacji i przewodniki produktów — na docs.openterface.com.",
    "linkLabel": "Otwórz dokumentację ↗",
    "productMessage": "Szczegółowe specyfikacje, przewodniki konfiguracji i FAQ — na docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Bądź na bieżąco",
    "heading": "Otrzymuj aktualizacje KVM-GO, KeyMod i Mini-KVM jako pierwszy",
    "description": "Premiery produktów, firmware i praktyczne wskazówki IT — maksymalnie raz w miesiącu. Bez spamu, tylko przydatne wiadomości od zespołu Openterface.",
    "benefitCrowdfunding": "Wczesny dostęp do crowdfundingu i przedsprzedaży",
    "benefitGuides": "Przewodniki konfiguracji i informacje o wydaniach aplikacji",
    "benefitUnsubscribe": "Wypisz się jednym kliknięciem w dowolnym momencie",
    "submitLabel": "Subskrybuj aktualizacje",
    "namePlaceholder": "Imię (opcjonalnie)",
    "emailPlaceholder": "Adres e-mail *",
    "footnote": "Maksymalnie jeden e-mail miesięcznie. Wypisz się w dowolnym momencie. Kontakt: info@openterface.com"
  }
};
