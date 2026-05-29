import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "Rozszerzenie KVM dla uConsole",
  slogan: "Moc KVM dla Twojego uConsole",
  subtitle: "Zmień przenośny uConsole w pełnoprawny terminal KVM.",
  status: 'oshwa',
  description:
    "Rozszerzenie sprzętowe dodające funkcjonalność KVM-over-USB do Clockwork uConsole. Idealne do mobilnej pracy IT z wbudowaną klawiaturą i wyświetlaczem.",
  seoDescription:
    "Rozszerzenie KVM dla uConsole dodaje KVM-over-USB do przenośnego komputera Clockwork uConsole.",
  keywords:
    "uConsole, rozszerzenie KVM, przenośny KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/cover/uconsole.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/uconsole.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Dowiedz się więcej",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Przenośne konsole nie mają zintegrowanego KVM dla urządzeń bezmonitorowych",
    "Technicy terenowi chcą jednego urządzenia do wszystkiego",
  ],
  solutions: [
    "Płytka rozszerzeniowa w natywnym formacie uConsole",
    "Pełny stos KVM Openterface na urządzeniu mieszczącym się w kieszeni",
  ],
  hwFeatures: [
    { title: "Natywny dla uConsole", description: "Zaprojektowany specjalnie dla Clockwork uConsole." },
    { title: "Kompaktowa płytka PCB", description: "Montaż wewnątrz obudowy uConsole." },
  ],
  swFeatures: [
    { title: "Aplikacje Openterface", description: "To samo sprawdzone oprogramowanie co w Mini-KVM i KVM-GO." },
    { title: "Przewodniki konfiguracji", description: "Dokumentacja instalacji sprzętowej i programowej krok po kroku." },
  ],
  specs: [
    { label: "Kompatybilność", value: "Clockwork uConsole" },
    { label: "Certyfikacja", value: "Certyfikat OSHWA" },
  ],
  useCases: [
    "Narzędzie do przenośnego centrum danych",
    "Maker i homelab w podróży",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Instalacja sprzętowa", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Konfiguracja oprogramowania", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Jak się połączyć", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "FAQ", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
