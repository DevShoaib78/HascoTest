import { type LucideIcon, Ticket, Hotel, HardHat, Boxes, Anchor, Truck } from 'lucide-react'

/**
 * Single source of truth for the six HASCO sectors.
 *
 * - `slug`  → the URL segment, e.g. /sectors/supply-chain
 * - `key`   → the translation key under the `sectorsPage` namespace
 *             (en.json / ar.json). Note: Supply Chain intentionally uses
 *             the `supplyChain` key and Tourism uses `tourismEvents`.
 * - `image` → the sector image, reused from the sectors overview / home
 *             carousel so visuals stay consistent across the site.
 * - `icon`  → Lucide icon used in the navbar dropdown and on the detail page.
 *
 * Order matters: it drives the navbar dropdown, the overview page, and the
 * home carousel.
 */
export interface SectorDef {
  slug: string
  key: string
  image: string
  icon: LucideIcon
}

export const sectors: SectorDef[] = [
  {
    slug: 'tourism-events',
    key: 'tourismEvents',
    icon: Ticket,
    image: 'https://images.unsplash.com/photo-1716571349499-0b83f5dbb7a2?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    slug: 'hospitality',
    key: 'hospitality',
    icon: Hotel,
    image: 'https://images.unsplash.com/photo-1561912774-79769a0a0a7a?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    slug: 'construction',
    key: 'construction',
    icon: HardHat,
    image: 'https://images.unsplash.com/photo-1726087282719-a8ab1c218611?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    slug: 'supply-chain',
    key: 'supplyChain',
    icon: Boxes,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    slug: 'marine',
    key: 'marine',
    icon: Anchor,
    image: 'https://images.unsplash.com/photo-1622299542410-0b48bb3d42ca?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    slug: 'logistics',
    key: 'logistics',
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1761307234387-d9291985eaf9?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
]

export const sectorSlugs = sectors.map((s) => s.slug)

export const getSectorBySlug = (slug: string): SectorDef | undefined =>
  sectors.find((s) => s.slug === slug)

export const getSectorByKey = (key: string): SectorDef | undefined =>
  sectors.find((s) => s.key === key)
