const fs = require('fs');
const path = require('path');
const { PUBLIC_NAV_LINKS, USER_NAV_LINKS, ADMIN_NAV_LINKS } = require('../src/components/elements/navigation/NavBar/paths');

const template = (title: string, route: string) => `import { Default } from 'components/layouts/Default';
import PlaceholderPage from 'components/templates/PlaceholderPage';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page = () => {
  return <PlaceholderPage title="${title}" path="${route}" />;
};

${title.replace(/[^a-zA-Z0-9]/g, '')}Page.getLayout = (page: any) => <Default pageName="${title}">{page}</Default>;

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;
`;

function normalizeRoute(route: string): string {
  // Remove leading slash
  let normalized = route.replace(/^\//, '');
  
  // For index routes, place in their own directory
  if (!normalized.includes('/')) {
    normalized = `${normalized}/index`;
  }
  
  return normalized;
}

function extractRoutes(links: any[]): { title: string; route: string }[] {
  const routes: { title: string; route: string }[] = [];
  
  links.forEach(link => {
    if (link.href && link.href !== '/') {
      routes.push({ title: link.label, route: link.href });
    }
    
    if (link.children) {
      link.children.forEach((child: any) => {
        if (child.href) {
          routes.push({ title: child.label, route: child.href });
        }
      });
    }
  });
  
  return routes;
}

function createPage(title: string, route: string) {
  try {
    const normalizedRoute = normalizeRoute(route);
    const pagePath = path.join(process.cwd(), 'pages', `${normalizedRoute}.tsx`);
    const dir = path.dirname(pagePath);
    
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(pagePath, template(title, route));
    console.log(`Created page: ${pagePath}`);
  } catch (error) {
    console.error(`Error creating page for route ${route}:`, error);
  }
}

// Extract all routes
const allRoutes = [
  ...extractRoutes(PUBLIC_NAV_LINKS),
  ...extractRoutes(USER_NAV_LINKS),
  ...extractRoutes(ADMIN_NAV_LINKS),
];

console.log('Generating pages for routes:', allRoutes.map(r => r.route).join(', '));

// Create pages for all routes
allRoutes.forEach(({ title, route }) => {
  createPage(title, route);
});

// Make this a module
export {}; 