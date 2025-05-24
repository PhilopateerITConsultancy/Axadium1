import { ISubNav } from '../SubNav/SubNav';

// Public navigation items (before login)
const PUBLIC_NAV_LINKS = [
  {
    label: 'Home',
    href: '/',
    children: [
      { label: 'Overview', href: '/overview', subLabel: 'Platform overview' },
      { label: 'How It Works', href: '/how-it-works', subLabel: 'Learn about our platform' },
      { label: 'About', href: '/about', subLabel: 'About us' },
      { label: 'Contact', href: '/contact', subLabel: 'Get in touch' },
    ],
  },
  {
    label: 'Features',
    href: '/features',
    children: [
      { label: 'Loans Overview', href: '/features/loans', subLabel: 'Learn about our loan services' },
      { label: 'Staking Overview', href: '/features/staking', subLabel: 'Discover staking opportunities' },
      { label: 'Rewards', href: '/features/rewards', subLabel: 'Our reward programs' },
    ],
  },
  {
    label: 'Legal',
    href: '/legal',
    children: [
      { label: 'Terms', href: '/legal/terms', subLabel: 'Terms of service' },
      { label: 'Privacy Policy', href: '/legal/privacy', subLabel: 'Privacy policy' },
    ],
  },
  { label: 'Sign In', href: '/signin' },
  { label: 'Sign Up', href: '/signup' },
];

// User Dashboard navigation items (after login)
const USER_NAV_LINKS = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    children: [
      { label: 'My Overview', href: '/dashboard/overview', subLabel: 'Your account overview' },
      { label: 'Wallet Balance', href: '/dashboard/wallet', subLabel: 'Check your wallet balance' },
      { label: 'Active Loans', href: '/dashboard/loans', subLabel: 'View your active loans' },
      { label: 'Staking APY', href: '/dashboard/apy', subLabel: 'Current staking rates' },
      { label: 'Rewards Earned', href: '/dashboard/rewards', subLabel: 'Your earned rewards' },
    ],
  },
  {
    label: 'Loans',
    href: '/loans',
    children: [
      { label: 'Apply for Loan', href: '/loans/apply', subLabel: 'Apply for a new loan' },
      { label: 'My Loans', href: '/loans/my-loans', subLabel: 'View your loans' },
      { label: 'Loan History', href: '/loans/history', subLabel: 'Past loan activity' },
    ],
  },
  {
    label: 'Staking',
    href: '/staking',
    children: [
      { label: 'Stake Now', href: '/staking/new', subLabel: 'Start staking' },
      { label: 'Staking History', href: '/staking/history', subLabel: 'Your staking history' },
      { label: 'Rewards & Earnings', href: '/staking/rewards', subLabel: 'View your earnings' },
    ],
  },
  {
    label: 'Transactions',
    href: '/transactions',
    children: [
      { label: 'All Transactions', href: '/transactions/all', subLabel: 'View all transactions' },
      { label: 'Filters & Search', href: '/transactions/search', subLabel: 'Search transactions' },
    ],
  },
  {
    label: 'Transfers',
    href: '/transfers',
    children: [
      { label: 'ERC20 Transfers', href: '/transfers/erc20', subLabel: 'ERC20 token transfers' },
      { label: 'EFT Transfers', href: '/transfers/eft', subLabel: 'Electronic fund transfers' },
      { label: 'NFT Transfers', href: '/transfers/nft', subLabel: 'NFT (ERC721/ERC1155) transfers' },
    ],
  },
  {
    label: 'Balances',
    href: '/balances',
    children: [
      { label: 'ERC20 Balances', href: '/balances/erc20', subLabel: 'ERC20 token balances' },
      { label: 'EFT Balances', href: '/balances/eft', subLabel: 'Electronic fund balances' },
      { label: 'NFT Balances', href: '/balances/nft', subLabel: 'NFT (ERC721/ERC1155) balances' },
    ],
  },
  {
    label: 'KYC & Credit',
    href: '/kyc',
    children: [
      { label: 'Identity Verification', href: '/kyc/verify', subLabel: 'Verify your identity' },
      { label: 'Credit Scoring Consent', href: '/kyc/credit', subLabel: 'Credit score consent' },
      { label: 'Status Tracker', href: '/kyc/status', subLabel: 'Track verification status' },
    ],
  },
  {
    label: 'Support',
    href: '/support',
    children: [
      { label: 'Help Center', href: '/support/help', subLabel: 'Get help' },
      { label: 'Contact Support', href: '/support/contact', subLabel: 'Contact our team' },
      { label: 'Notifications', href: '/support/notifications', subLabel: 'Your notifications' },
    ],
  },
];

// Admin Panel navigation items
const ADMIN_NAV_LINKS = [
  {
    label: 'Admin Dashboard',
    href: '/admin',
    children: [
      { label: 'Overview', href: '/admin/overview', subLabel: 'Admin overview' },
      { label: 'System Logs', href: '/admin/logs', subLabel: 'View system logs' },
    ],
  },
  {
    label: 'Users',
    href: '/admin/users',
    children: [
      { label: 'Manage Users', href: '/admin/users/manage', subLabel: 'Manage platform users' },
      { label: 'Role Permissions', href: '/admin/users/roles', subLabel: 'Manage user roles' },
    ],
  },
  {
    label: 'Settings',
    href: '/admin/settings',
    children: [
      { label: 'Smart Contract Settings', href: '/admin/settings/contracts', subLabel: 'Configure smart contracts' },
      { label: 'Staking/APY Config', href: '/admin/settings/staking', subLabel: 'Configure staking settings' },
      { label: 'Loan Terms & LTV', href: '/admin/settings/loans', subLabel: 'Configure loan settings' },
    ],
  },
  {
    label: 'Reports',
    href: '/admin/reports',
    children: [
      { label: 'Staking Activity', href: '/admin/reports/staking', subLabel: 'Staking reports' },
      { label: 'Loan Issuance', href: '/admin/reports/loans', subLabel: 'Loan reports' },
      { label: 'KYC Stats', href: '/admin/reports/kyc', subLabel: 'KYC statistics' },
    ],
  },
  {
    label: 'KYC Admin',
    href: '/admin/kyc',
    children: [
      { label: 'Identity Verifications', href: '/admin/kyc/verifications', subLabel: 'Manage identity verifications' },
      { label: 'Credit Score Submissions', href: '/admin/kyc/credit', subLabel: 'Review credit submissions' },
      { label: 'Oracle Simulations', href: '/admin/kyc/oracle', subLabel: 'Manage oracle simulations' },
    ],
  },
];

export {
  PUBLIC_NAV_LINKS,
  USER_NAV_LINKS,
  ADMIN_NAV_LINKS,
};
