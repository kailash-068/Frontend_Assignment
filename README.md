# 🛍️ Product Explorer Dashboard

A modern e-commerce product browsing application built with Next.js 14, TypeScript, and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)

## ✨ Features

### Core Features

- ✅ Product listing with responsive grid layout
- ✅ Real-time search by product title
- ✅ Category filtering
- ✅ Product detail pages with full information
- ✅ Favorites system with localStorage persistence
- ✅ Mobile-responsive design

### Bonus Features

- 🎨 Dark mode toggle with system preference detection
- 📄 Pagination with page numbers
- 🔄 Sort by price and name
- ⚡ Performance optimized with React hooks
- ♿ Full accessibility (WCAG AA compliant)
- 🧪 Testing setup with Jest

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/product-explorer.git
cd product-explorer

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm test             # Run tests
```

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.3
- **Icons:** Lucide React
- **API:** Fake Store API
- **State:** React Hooks + Context API
- **Testing:** Jest + React Testing Library

## 📁 Project Structure

<pre>
product-explorer/
├── __tests__/              <i># Test files (Jest)</i>
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.test.tsx
│   │   └── features/
│   │       └── ProductCard.test.tsx
│   └── lib/
│       └── utils/
│           └── storage.test.ts
│
├── app/
│   ├── layout.tsx          <i># Root layout</i>
│   ├── page.tsx            <i># Home page</i>
│   ├── globals.css         <i># Global styles</i>
│   └── products/[id]/
│       └── page.tsx        <i># Product detail page</i>
│
├── components/
│   ├── ui/                 <i># Reusable UI components</i>
│   │   ├── Button.tsx
│   │   ├── Badge.tsx
│   │   ├── Pagination.tsx
│   │   └── ThemeToggle.tsx
│   │
│   ├── features/           <i># Feature components</i>
│   │   ├── ProductCard.tsx
│   │   ├── SearchBar.tsx
│   │   └── SortDropdown.tsx
│   │
│   └── layout/             <i># Layout components</i>
│       ├── Header.tsx
│       ├── ProductGrid.tsx
│       └── ProductDetail.tsx
│
├── lib/
│   ├── api/                <i># API services</i>
│   ├── hooks/              <i># Custom React hooks</i>
│   ├── utils/              <i># Utility functions</i>
│   │   └── storage.ts
│   └── context/            <i># React Context</i>
│
├── types/                  <i># TypeScript definitions</i>
├── constants/              <i># App constants</i>
│
├── jest.config.js          <i># Jest configuration</i>
├── jest.setup.js           <i># Jest setup file</i>
├── tsconfig.json           <i># TypeScript configuration</i>
└── package.json            <i># Project dependencies</i>
</pre>

## 🎯 Key Implementation

### Custom Hooks

**useProducts** - Manages product data and filtering

```typescript
const { products, loading, filters, setSearchQuery } = useProducts();
```

**useFavorites** - Handles favorites with localStorage

```typescript
const { favorites, toggleFavorite, favoritesCount } = useFavorites();
```

**usePagination** - Manages pagination logic

```typescript
const { currentPage, totalPages, goToPage } = usePagination({
  totalItems,
  itemsPerPage,
});
```

### Architecture Highlights

- **Atomic Design** - Components organized by complexity
- **Type Safety** - Full TypeScript with strict mode
- **Custom Hooks** - Reusable logic extraction
- **Context API** - Global theme management
- **LocalStorage** - Client-side data persistence

## 📝 Assumptions

1. **API Availability** - Fake Store API remains stable and accessible
2. **Browser Support** - Modern browsers with ES6+ support
3. **Storage** - LocalStorage available (5MB limit acceptable)
4. **Network** - Stable internet connection for API calls
5. **Data Scale** - ~100 products (client-side filtering sufficient)

## ⚖️ Trade-offs

| Decision                  | Rationale                                 | Trade-off                            |
| ------------------------- | ----------------------------------------- | ------------------------------------ |
| **Client-side rendering** | Better interactivity, real-time filtering | Slower initial load, SEO limitations |
| **LocalStorage**          | Simple, fast, no backend needed           | Not synced across devices            |
| **Pagination**            | Better accessibility, clear navigation    | More clicks required                 |
| **Tailwind CSS**          | Rapid development, small bundle           | Longer class names in JSX            |
| **Context API**           | Built-in, simple for this scale           | Limited dev tools vs Redux           |
| **Mock API**              | Free, quick prototyping                   | Limited features, rate limits        |

## 🎨 Design Decisions

### Why Tailwind CSS?

- ✅ Fast development with utility classes
- ✅ Small production bundle (purges unused styles)
- ✅ Built-in dark mode support
- ✅ No runtime CSS-in-JS cost

### Why Pagination over Infinite Scroll?

- ✅ Better for accessibility (keyboard users)
- ✅ Shows total number of results
- ✅ Easier to navigate to specific pages
- ✅ Lower memory footprint

### Why LocalStorage?

- ✅ No backend infrastructure required
- ✅ Perfect for non-critical data (favorites, theme)
- ✅ Fast synchronous access
- ✅ Works offline

## ♿ Accessibility

- ✅ ARIA labels on all interactive elements
- ✅ Full keyboard navigation support
- ✅ Focus management and indicators
- ✅ Screen reader optimized
- ✅ Skip to main content link
- ✅ WCAG 2.1 Level AA compliant
- ✅ Reduced motion support

## 🧪 Testing

```bash
# Run all tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

Test coverage includes:

- Component rendering
- User interactions
- State management
- Utility functions
- Error handling

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Fake Store API](https://fakestoreapi.com/) - Mock API
- [Lucide Icons](https://lucide.dev/) - Icon library

---
