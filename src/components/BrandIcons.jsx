/**
 * House icon set, drawn from the same construction as the ASHFI "A" mark:
 * straight angular strokes, square caps and joins, a node dot at a stroke
 * terminus, and short circuit traces.
 *
 * These replace generic and third-party artwork where an icon sits beside brand
 * content. Profile and social links keep their real third-party logos -
 * substituting our mark for someone else's logo would misrepresent that brand -
 * but the stat-card headers use house marks because the card title already
 * names the source in text.
 *
 * The navbar and hero "A" monogram are the original mark and are not drawn here.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'square',
  strokeLinejoin: 'miter',
  xmlns: 'http://www.w3.org/2000/svg',
};

const Solid = ({ cx, cy, r = 1.15 }) => (
  <circle cx={cx} cy={cy} r={r} fill="currentColor" stroke="none" />
);

export const BrandShield = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M12 2.6 L20.4 5.8 V11.6 L12 21.4 L3.6 11.6 V5.8 Z" />
    <path d="M12 11.4 V16.2" />
    <Solid cx="12" cy="9.9" r={1.25} />
    <path d="M14.8 7 H17.6" />
    <Solid cx="18.2" cy="7" r={0.85} />
  </svg>
);

export const BrandAward = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M7.6 3.4 H16.4 L15.2 11 L12 13.2 L8.8 11 Z" />
    <path d="M12 13.2 V17.6" />
    <path d="M8.2 20.6 H15.8" />
    <path d="M12 17.6 V20.6" />
    <Solid cx="12" cy="7.5" r={1.15} />
    <path d="M16.4 5.2 H19" />
    <Solid cx="19.6" cy="5.2" r={0.85} />
  </svg>
);

export const BrandBook = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M3.4 5.6 L12 8.2 L20.6 5.6 V17.6 L12 20.8 L3.4 17.6 Z" />
    <path d="M12 8.2 V20.8" />
    <path d="M5.9 9.9 H9.5" />
    <path d="M14.5 9.9 H18.1" />
    <path d="M5.9 12.9 H9.5" />
    <path d="M14.5 12.9 H18.1" />
    <Solid cx="12" cy="8.2" r={1.05} />
  </svg>
);

export const BrandBolt = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M13.4 2.6 L6.4 13.4 H11 L10.6 21.4 L17.6 10.6 H13 Z" />
    <Solid cx="12" cy="12" r={1.05} />
  </svg>
);

/** Nodes joined by angular links - the repository/network mark. */
export const BrandBranch = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <circle cx="6.2" cy="5.6" r="1.8" />
    <circle cx="6.2" cy="18.4" r="1.8" />
    <circle cx="18" cy="12" r="1.8" />
    <path d="M6.2 7.6 V16.4" />
    <path d="M8.2 5.6 H13.4 L16.2 10.6" />
    <path d="M8.2 18.4 H13.4 L16.2 13.4" />
  </svg>
);

export const BrandBrackets = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M8.6 6.4 L3.4 12 L8.6 17.6" />
    <path d="M15.4 6.4 L20.6 12 L15.4 17.6" />
    <Solid cx="12" cy="12" r={1.2} />
  </svg>
);

export const BrandStar = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M12 2.8 L14.3 9.3 L20.8 9.3 L15.5 13.2 L17.6 19.6 L12 15.7 L6.4 19.6 L8.5 13.2 L3.2 9.3 L9.7 9.3 Z" />
  </svg>
);

/** Angular take on the sync affordance: two chevrons turning around a node. */
export const BrandSync = ({ size = 24, ...rest }) => (
  <svg {...base} width={size} height={size} aria-hidden="true" {...rest}>
    <path d="M4.2 9.6 L7.6 6.2 H14.4" />
    <path d="M19.8 14.4 L16.4 17.8 H9.6" />
    <path d="M7.6 6.2 L4.6 12.2" />
    <path d="M16.4 17.8 L19.4 11.8" />
    <Solid cx="12" cy="12" r={1.2} />
  </svg>
);

export default {
  BrandShield,
  BrandAward,
  BrandBook,
  BrandBolt,
  BrandBranch,
  BrandBrackets,
  BrandStar,
  BrandSync,
};
