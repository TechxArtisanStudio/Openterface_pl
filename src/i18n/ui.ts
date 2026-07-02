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
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
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
  },
  "siteFooter": {
    "tagline": "Ultrakompaktowe rozwiązania KVM-over-USB dla profesjonalistów IT.",
    "productsHeading": "Produkty",
    "keymodSeries": "Seria KeyMod",
    "kvmGoSeries": "Seria KVM-GO",
    "miniKvm": "Mini-KVM",
    "accessories": "Akcesoria",
    "resourcesHeading": "Zasoby",
    "videos": "Filmy",
    "faqs": "FAQ",
    "apps": "Aplikacje",
    "support": "Wsparcie",
    "newsletterTitle": "Newsletter",
    "newsletterDescription": "Comiesięczne aktualizacje o produktach, firmware i wskazówkach KVM.",
    "newsletterSubmit": "Subskrybuj",
    "newsletterNamePlaceholder": "Imię",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Wypisz się w dowolnym momencie.",
    "copyright": "Openterface. KVM-over-USB open source.",
    "privacy": "Prywatność",
    "terms": "Regulamin",
    "newsletterLink": "Newsletter"
  },
  "productLanding": {
    "downloadApp": "Pobierz aplikację",
    "backers": "Wspierający",
    "theProblem": "Problem",
    "theSolution": "Rozwiązanie",
    "hwSoftwareTitle": "Sprzęt + oprogramowanie",
    "hwSoftwareSubtitle": "Produkty Openterface działają najlepiej z naszymi aplikacjami host open source.",
    "hardware": "Sprzęt",
    "software": "Oprogramowanie",
    "swFallback": "Szczegóły kompatybilności akcesoriów — w TxA Shop.",
    "keySpecs": "Kluczowe specyfikacje",
    "useCases": "Przypadki użycia",
    "documentation": "Dokumentacja",
    "ctaTitle": "Gotowy, by zacząć?",
    "ctaSubtitle": "Zamów sprzęt i pobierz aplikację Openterface dla swojej platformy."
  },
  "productSubscribe": {
    "kicker": "Stay in the loop",
    "heading": "Get {product} launch & firmware updates",
    "description": "Be first to know about pre-orders, firmware releases, and setup tips for this product — at most one email per month.",
    "benefitCrowdfunding": "Early access to crowdfunding and pre-order windows",
    "benefitGuides": "Setup guides and app release notes",
    "benefitUnsubscribe": "Unsubscribe anytime with one click",
    "submitLabel": "Subscribe for updates",
    "namePlaceholder": "Name (optional)",
    "emailPlaceholder": "Email address *",
    "footnote": "At most one email per month. Unsubscribe anytime."
  }
};
