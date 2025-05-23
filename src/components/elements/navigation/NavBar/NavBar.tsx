import { HStack } from '@chakra-ui/react';
import { NavItem } from '../NavItem';
import { PUBLIC_NAV_LINKS, USER_NAV_LINKS, ADMIN_NAV_LINKS } from './paths';

// Show User Dashboard menus
const isAuthenticated = true;
const isAdmin = false;

const NavBar = () => {
  // Choose which navigation links to show based on auth state
  const navLinks = isAuthenticated 
    ? (isAdmin ? ADMIN_NAV_LINKS : USER_NAV_LINKS)
    : PUBLIC_NAV_LINKS;

  return (
    <HStack gap={'15px'}>
      {navLinks.map((link) => (
        <NavItem key={`link-${link.label}`} {...link} />
      ))}
    </HStack>
  );
};

export default NavBar;
