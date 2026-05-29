import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Zmień swojego laptopa w konsolę KVM",
  subtitle: "Uprość swoje życie technologiczne.",
  status: 'shipping',
  description:
    "Rozwiązanie KVM-over-USB typu plug-and-play. Steruj pobliskim komputerem bezmonitorowym z laptopa przez USB i HDMI — bez potrzeby dodatkowych peryferiów ani sieci.",
  seoDescription:
    "Openterface Mini-KVM: plug-and-play KVM-over-USB z HDMI. Steruj komputerami bezmonitorowymi z laptopa bez sieci.",
  keywords:
    "Mini-KVM, KVM over USB, sterowanie bezmonitorowe, HDMI KVM, plug and play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Zamów TERAZ",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Sfinansowano 13 czerwca 2024", backers: "3,775" },
  painPoints: [
    "Noszenie monitora i klawiatury do każdej naprawy serwera jest niepraktyczne",
    "Sieciowe KVM wymaga konfiguracji i łączności",
    "Profesjonaliści IT potrzebują niezawodnego kieszonkowego KVM na co dzień",
  ],
  solutions: [
    "Wykorzystaj posiadany laptop jako konsolę KVM",
    "Przechwytywanie HDMI + USB HID w jednym kompaktowym urządzeniu",
    "Sprawdzone przez ponad 5000 członków społeczności od 2024 roku",
  ],
  hwFeatures: [
    { title: "Przechwytywanie HDMI", description: "Pełny obraz z urządzenia docelowego na Twój laptop hosta." },
    { title: "Przełącznik USB", description: "Przełączanie urządzeń USB między hostem a urządzeniem docelowym." },
    { title: "Piny rozszerzeń", description: "Opcje hardware hackingu i niestandardowej integracji." },
  ],
  swFeatures: [
    { title: "Aplikacje Qt / macOS / Android", description: "Natywne aplikacje dla każdej głównej platformy hosta." },
    { title: "Open source", description: "W pełni otwarty ekosystem sprzętowy i programowy." },
    { title: "Aktywna społeczność", description: "Discord, GitHub i regularne aktualizacje firmware." },
  ],
  specs: [
    { label: "Wejście wideo", value: "HDMI" },
    { label: "USB", value: "USB-C z przełączalnym portem" },
    { label: "Status", value: "Wysyłka — Crowd Supply" },
  ],
  useCases: [
    "Zarządzanie homelabem",
    "Równoległe sterowanie stacją roboczą developera",
    "Diagnostyka na stanowisku IT",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Funkcje", href: docsPath("/product/minikvm/features/") },
    { label: "Przełącznik USB", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Wsparcie techniczne", href: docsPath("/product/minikvm/support/") },
    { label: "FAQ", href: docsPath("/product/minikvm/faq/") },
    { label: "Pobierz aplikację", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
