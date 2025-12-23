# Food-Villa Copilot Instructions

## Project Overview
Food-Villa is a React-based food ordering application built with Parcel bundler. It's a learning project following the "Namaste React" tutorial series, focusing on building a restaurant discovery and ordering platform.

## Architecture
- **Single-page application** using React functional components
- **Component structure**: Header (navigation + logo), Body (restaurant grid), Footer
- **Data flow**: Currently hardcoded restaurant data; future integration with Swiggy API
- **Styling**: CSS modules with class-based styling in `index.css`

## Key Components
- **AppLayout**: Root component composing Header, Body, Footer
- **Header**: Contains Title (logo) and navigation list
- **RestaurantCard**: Displays individual restaurant info (image, name, cuisines, rating)
- **Body**: Renders grid of RestaurantCard components

Example component structure from [App.js](App.js#L25-L45):
```javascript
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-list">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
```

## Data Handling
- Restaurant data stored as objects with properties: name, image, cuisines, rating
- Current implementation uses hardcoded `chocolateCake` object in RestaurantCard
- API data structure visible in `restrautList` (Swiggy response format) but not yet integrated

## Styling Conventions
- CSS classes match component names (e.g., `.header`, `.card`)
- Flexbox for layout (header navigation, restaurant grid)
- Responsive design considerations in `index.css`

## Development Workflow
- **Start dev server**: `npm start` (runs Parcel on index.html)
- **Build for production**: `npm run build` (Parcel build)
- **Testing**: `npm test` (Jest, though no test files exist yet)
- Entry point: `index.html` with root div, App.js renders into it

## Code Patterns
- Functional components with arrow function syntax
- Component composition (e.g., Title inside Header)
- JSX for templating, no CSS-in-JS
- Hardcoded data objects for initial development

## File Structure
- `App.js`: Main application logic and components
- `index.html`: HTML template with root element
- `index.css`: Global styles
- `package.json`: Dependencies and scripts

When adding features, maintain the component-based architecture and follow the existing naming conventions. For API integration, reference the Swiggy data structure in `restrautList`.