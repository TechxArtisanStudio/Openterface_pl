import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Seria Openterface KeyMod",
  slogan: "Zmień swój telefon w inteligentną klawiaturę",
  subtitle: "Programowalne sterowanie klawiaturą i myszą dla entuzjastów technologii, profesjonalistów i graczy.",
  status: 'pre-launch',
  description:
    "Kompaktowy, programowalny emulator HID USB + Bluetooth, który zamienia Twój telefon w przenośną konsolę z klawiaturą i touchpadem. Oparty na sprawdzonym rdzeniu HID z Openterface Mini-KVM — plug & play, w 100% open source.",
  seoDescription:
    "Seria KeyMod zamienia Twój telefon w przenośną klawiaturę i touchpad. Emulator HID USB + Bluetooth, open source, idealny do kiosków i skrótów workflow.",
  keywords:
    "KeyMod, emulator HID, klawiatura do telefonu, klawiatura Bluetooth, klawiatura USB, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Wesprzyj TERAZ",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Przenoszenie pełnowymiarowej klawiatury do konfiguracji kiosku lub TV jest niepraktyczne",
    "Skróty workflow wymagają programowalnych makr w podróży",
    "Wiele narzędzi HID to oprogramowanie zamknięte z ograniczonymi możliwościami dostosowania",
  ],
  solutions: [
    "Użyj telefonu jako przenośnej klawiatury i touchpada",
    "HID USB i Bluetooth w jednym kompaktowym urządzeniu",
    "W 100% open source z obsługą aplikacji Openterface",
  ],
  hwFeatures: [
    { title: "Kompaktowa obudowa", description: "Mieści się w kieszeni, idealna do pracy w terenie i podróży." },
    { title: "USB + Bluetooth", description: "Podwójna łączność dla maksymalnej kompatybilności urządzeń." },
    { title: "Otwarty sprzęt", description: "Przejrzysta konstrukcja oparta na sprawdzonym rdzeniu HID Openterface." },
  ],
  swFeatures: [
    { title: "Aplikacja KeyMod", description: "Konfiguruj makra, układy klawiszy i profile gamepada bezpośrednio z telefonu." },
    { title: "Wieloplatformowość", description: "Działa z systemami Android, iPadOS oraz komputerami stacjonarnymi/laptopami przez aplikacje Openterface." },
    { title: "Open source", description: "Pełny stos technologiczny dostępny na GitHub dla społeczności." },
  ],
  specs: [
    { label: "Łączność", value: "USB-C + Bluetooth LE" },
    { label: "Tryby HID", value: "Klawiatura, mysz, gamepad" },
    { label: "Licencja", value: "Sprzęt i oprogramowanie open source" },
  ],
  useCases: [
    "Sterowanie Smart TV i kioskami",
    "Mobilne makra workflow",
    "Konfiguracje gamingowe i dostępności",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Funkcje", href: docsPath("/product/keymod/features/") },
    { label: "Zawartość opakowania", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Jak się połączyć", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/keymod/faq/") },
    { label: "Pobierz aplikację KeyMod", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
