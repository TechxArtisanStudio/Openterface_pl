import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Produkty',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Akcesoria', href: '/products/accessories/' },
    ],
  },
  { label: 'Wideo', href: '/videos/' },
  { label: 'Zastosowania', href: '/use-cases/' },
  { label: 'O nas', href: '/about/' },
  { label: 'Dokumentacja', href: docsPath(), external: true },
  { label: 'Aktualności', href: newsPath(), external: true },
  { label: 'Sklep', href: siteConfig.links.shop, external: true },
];
