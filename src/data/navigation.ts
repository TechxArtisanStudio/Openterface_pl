import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Produkty",
    href: '/products/',
    children: [
      { label: "Wszystkie produkty", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Akcesoria", href: '/accessories/' },
    ],
  },
  {
    label: "Aplikacje",
    href: '/app/',
    children: [
      { label: "Wszystkie aplikacje", href: '/app/' },
      { label: "Sterowanie KVM", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Media", href: '/videos/' },
  { label: "O nas", href: '/about/' },
  { label: "Dokumentacja", href: docsPath(), external: true },
  { label: "Aktualności", href: newsPath(), external: true },
  { label: "Sklep", href: siteConfig.links.shop, external: true },
];
