import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Seria Openterface KVM-GO",
  slogan: "Ultra-kompaktowy KVM, który zmieści się na breloku",
  subtitle: "Do krytycznych momentów technicznych — Podłącz. Steruj. Działaj.",
  status: 'pre-order',
  description:
    "Rozwiązanie KVM-over-USB nowej generacji z wbudowanymi złączami wideo (HDMI, DisplayPort lub VGA). Ultra-kompaktowe, wielkości breloka, zaprojektowane do szybkich operacji IT w centrach danych i serwerowniach.",
  seoDescription:
    "Steruj komputerami bezmonitorowymi za pomocą Openterface KVM-Go. Wbudowane HDMI/DP/VGA, wielkość breloka, 4K KVM-over-USB dla profesjonalistów IT.",
  keywords:
    "KVM-Go, KVM over USB, ultra-kompaktowy KVM, KVM na breloku, 4K KVM, sterowanie bezmonitorowe",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Zamów w przedsprzedaży TERAZ",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Sfinansowano 30 grudnia 2025", backers: "478" },
  painPoints: [
    "Tradycyjne sprzęty KVM są duże i wymagają osobnych kabli wideo",
    "Awaryjny dostęp do serwera w terenie wymaga narzędzia mieszczącego się w kieszeni",
    "Diagnostyka bezmonitorowa bez dostępu do sieci jest powolna",
  ],
  solutions: [
    "Wbudowane złącza wideo eliminują potrzebę dodatkowych kabli",
    "Forma breloka zawsze pod ręką",
    "KVM-over-USB — brak wymagań dotyczących sieci lub sterowników na urządzeniu docelowym",
  ],
  hwFeatures: [
    { title: "Wbudowane wideo", description: "Modele HDMI, DisplayPort lub VGA — żadnych luźnych kabli." },
    { title: "Rozmiar breloka", description: "Najmniejszy KVM-over-USB w ofercie Openterface." },
    { title: "Obsługa 4K", description: "Przechwytywanie w wysokiej rozdzielczości dla nowoczesnych wyświetlaczy." },
  ],
  swFeatures: [
    { title: "Aplikacja Openterface Qt", description: "Wieloplatformowe sterowanie hostem dla Windows, macOS i Linux." },
    { title: "Przełącznik MicroSD", description: "Przełączalna pamięć dla przenośnych obrazów OS i narzędzi." },
    { title: "Stos open source", description: "Oprogramowanie układowe i aplikacje hosta rozwijane przez społeczność." },
  ],
  specs: [
    { label: "Wideo", value: "HDMI / DP / VGA (zależnie od modelu)" },
    { label: "Rozdzielczość", value: "Do 4K" },
    { label: "Połączenie", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Przeglądy centrów danych",
    "Konfiguracja urządzeń bezmonitorowych",
    "IT w terenie i ratowanie homelabów",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Funkcje", href: docsPath("/product/kvm-go/features/") },
    { label: "Szybki start (Beta)", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Jak się połączyć", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "FAQ", href: docsPath("/product/kvm-go/faq/") },
    { label: "Pobierz aplikację", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
