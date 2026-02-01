export enum ProjectTag {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  FULLSTACK = 'full-stack',
  CONTRACTS = 'contracts',
  MOBILE = 'mobile',
  DEVOPS = 'devops',
  UI_UX = 'ui/ux',
}

export enum ProjectType {
  DEFI = 'defi',
  FINTECH = 'fintech',
  DAO = 'dao',
  PAYMENTS = 'payments',
  AI = 'ai',
  GAMES = 'games',
  OPENSOURCE = 'open-source',
  INFRASTRUCTURE = 'infrastructure',
  NFT = 'nft',
  GAMEFI = 'gamefi',
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: ProjectTag[];
  types: ProjectType[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    name: 'DeFi Lending Protocol',
    description: 'A decentralized lending platform with flash loans and automated market making capabilities.',
    url: 'https://example.com/defi-lending',
    tags: [ProjectTag.CONTRACTS, ProjectTag.FRONTEND, ProjectTag.FULLSTACK],
    types: [ProjectType.DEFI, ProjectType.FINTECH],
    featured: true,
  },
  {
    id: '2',
    name: 'Cross-Chain Payment Gateway',
    description: 'Seamless payment processing across multiple blockchain networks with instant settlement.',
    url: 'https://example.com/payment-gateway',
    tags: [ProjectTag.BACKEND, ProjectTag.CONTRACTS, ProjectTag.FULLSTACK],
    types: [ProjectType.PAYMENTS, ProjectType.FINTECH, ProjectType.DEFI],
    featured: true,
  },
  {
    id: '3',
    name: 'DAO Governance Platform',
    description: 'Full-featured governance solution with voting, proposals, and treasury management.',
    url: 'https://example.com/dao-platform',
    tags: [ProjectTag.FRONTEND, ProjectTag.CONTRACTS, ProjectTag.FULLSTACK],
    types: [ProjectType.DAO, ProjectType.DEFI],
    featured: false,
  },
  {
    id: '4',
    name: 'AI Trading Bot',
    description: 'Machine learning-powered trading algorithm with risk management and portfolio optimization.',
    url: 'https://example.com/ai-trading',
    tags: [ProjectTag.BACKEND, ProjectTag.DEVOPS],
    types: [ProjectType.AI, ProjectType.FINTECH, ProjectType.DEFI],
    featured: false,
  },
  {
    id: '5',
    name: 'Mobile Wallet App',
    description: 'Secure cryptocurrency wallet with biometric authentication and multi-signature support.',
    url: 'https://example.com/mobile-wallet',
    tags: [ProjectTag.MOBILE, ProjectTag.FRONTEND, ProjectTag.FULLSTACK],
    types: [ProjectType.FINTECH, ProjectType.DEFI],
    featured: true,
  },
  {
    id: '6',
    name: 'Open Source SDK',
    description: 'Developer toolkit for building decentralized applications with comprehensive documentation.',
    url: 'https://example.com/dev-sdk',
    tags: [ProjectTag.BACKEND, ProjectTag.FRONTEND, ProjectTag.DEVOPS],
    types: [ProjectType.OPENSOURCE, ProjectType.INFRASTRUCTURE],
    featured: false,
  },
  {
    id: '7',
    name: 'NFT Marketplace',
    description: 'Decentralized marketplace for digital collectibles with royalty distribution and auctions.',
    url: 'https://example.com/nft-market',
    tags: [ProjectTag.FRONTEND, ProjectTag.CONTRACTS, ProjectTag.FULLSTACK],
    types: [ProjectType.NFT, ProjectType.DEFI],
    featured: false,
  },
  {
    id: '8',
    name: 'Blockchain Game',
    description: 'Play-to-earn strategy game with on-chain assets and player-owned economies.',
    url: 'https://example.com/blockchain-game',
    tags: [ProjectTag.FRONTEND, ProjectTag.CONTRACTS, ProjectTag.FULLSTACK],
    types: [ProjectType.GAMES, ProjectType.GAMEFI, ProjectType.NFT],
    featured: false,
  },
];

export const allTags = Object.values(ProjectTag);
export const allTypes = Object.values(ProjectType);