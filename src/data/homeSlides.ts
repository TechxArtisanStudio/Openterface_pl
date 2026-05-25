import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Zamień smartfon w mini klawiaturę',
    description:
      'Kompaktowy emulator USB + Bluetooth HID, który zamienia smartfon w przenośną klawiaturę i touchpad. Plug-and-play, w 100% open source. Idealny do kiosków, Smart TV i szybkich skrótów workflow.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Wesprzyj', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Zobacz produkt', href: '/products/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Smartfon jako mini klawiatura',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'Ultrakompaktowy KVM na breloku',
    description:
      'Zaprojektowany, by zawsze być pod ręką i uratować sytuację w krytycznym momencie. KVM-over-USB nowej generacji do szybkiej pracy IT w terenie.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Przedsprzedaż', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Zobacz produkt', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'KVM na breloku',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'Kompaktowe rozwiązanie KVM dla profesjonalistów',
    description:
      'Kompaktowe, funkcjonalne open-source rozwiązanie KVM-over-USB, które upraszcza codzienne zadania IT i diagnostykę.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Zamów', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Zobacz produkt', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'KVM dla profesjonalistów',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Uzupełnij zestaw premium akcesoriami',
    description:
      'Niezbędne akcesoria: adaptery wideo, szybkie kable i rozwiązania do przechowywania. Ulepsz doświadczenie Openterface profesjonalnym sprzętem.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: 'Kup teraz', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Akcesoria', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Premium akcesoria',
  },
];

export const homeSeo = {
  title: 'Openterface | Ultrakompaktowe rozwiązania KVM dla specjalistów IT',
  description:
    'Openterface — ultrakompaktowe rozwiązania KVM-over-USB: KVM-GO Series (rozmiar breloku), Mini-KVM Series i uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, KVM switch, portable KVM, USB KVM, headless server management, KVM-GO, Mini-KVM, KeyMod',
};
