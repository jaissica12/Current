# Lightning Rod Management App Design Guidelines

## Design Approach
**Rokt Brand Compliance**: Following official Rokt brand guidelines for enterprise application design. The interface prioritizes Rokt's bold and confident brand aesthetic while maintaining efficiency and clear information hierarchy suitable for internal innovation management workflows.

## Core Design Elements

### Color Palette (Rokt Brand)
**Primary Colors (70% usage):**
- Black: #000000 (Primary text, strong elements)
- White: #FFFFFF (Background, contrast text)

**Accent Colors (30% usage):**
- Beetroot: #C20075 (Bold statements, CTAs, active states - 15%)
- Wine: #480029 (Supporting elements, backgrounds, depth - 15%)

**Light Mode:**
- Primary: 327 100% 38% (Beetroot #C20075)
- Background: 0 0% 100% (White)
- Foreground: 0 0% 0% (Black)
- Secondary: 327 100% 9% (Wine #480029)
- Success: 142 76% 36% (Green for approved states)
- Warning: 38 92% 50% (Amber for pending review)
- Error: 0 84% 60% (Red for rejected/cancelled)

**Dark Mode:**
- Primary: 327 100% 65% (Lighter Beetroot)
- Background: 0 0% 5% (Near black)
- Foreground: 0 0% 95% (Near white)
- Secondary: 327 100% 20% (Lighter Wine)
- Success: 142 76% 50% (Brighter green)
- Warning: 38 92% 65% (Brighter amber)
- Error: 0 84% 70% (Brighter red)

### Typography (Rokt Brand)
- **Primary Font**: Archivo (Regular, Medium, Semibold)
- **Secondary Font**: Roboto Mono (for labels, code snippets, technical content)
- **Headers**: Archivo Medium/Semibold, sizes 24px-32px
- **Body**: Archivo Regular, 14px-16px
- **Labels/Technical**: Roboto Mono Regular, 12px-14px
- **Buttons**: Archivo Medium

### Layout System
**Tailwind Spacing Units**: Consistent use of 2, 4, 6, 8, 12, and 16 units
- Tight spacing: `p-2`, `m-4`
- Standard spacing: `p-4`, `m-6`, `gap-6`
- Generous spacing: `p-8`, `m-12`
- Section spacing: `p-16`

### Component Library

**Header**
- Fixed top navigation with `h-16` height
- Rokt logo placeholder (32px height) on left
- "Current" app name in medium weight
- Dark mode toggle on right
- Clean divider border bottom

**Sidebar**
- Collapsible with 240px expanded width, 64px collapsed
- Navigation items with icons and labels
- Active state: Bold text + colored left border (4px)
- Hover states with subtle background color changes
- Smooth expand/collapse animation (300ms)

**Lightning Rod Cards**
- Clean card design with subtle shadows
- Status badges with rounded corners and appropriate colors
- Consistent internal padding (`p-6`)
- Clear typography hierarchy
- Hover elevation effect

**Forms**
- Consistent input styling with focus states
- Required field indicators
- Clear validation messaging
- Submit buttons with loading states
- Form sections with appropriate spacing

**Status Workflow**
- Horizontal stepper design
- Clear visual progression indicators
- Status icons with color coding
- Connection lines between steps
- Responsive stacking on mobile

**Data Tables**
- Clean row separators
- Action buttons consistently positioned
- Sortable headers with indicators
- Responsive overflow handling

### Search & Filters
- Prominent search bar with clear placeholder text
- Filter chips for date and status options
- Clear filter states and reset functionality

### Responsive Design
- Mobile-first approach
- Sidebar transforms to overlay on mobile
- Cards stack vertically on smaller screens
- Table horizontal scroll on mobile
- Touch-friendly button sizes (minimum 44px)

### Animations
- Subtle hover effects on interactive elements
- Smooth page transitions (200-300ms)
- Loading states for async operations
- No distracting or excessive animations

### Professional Polish
- Consistent 8px border radius for cards and buttons
- Subtle shadows for depth (focus on functionality over aesthetics)
- Clean, professional color scheme
- Clear visual hierarchy throughout
- Accessibility-compliant contrast ratios

This design emphasizes productivity and usability while maintaining a professional appearance suitable for enterprise innovation management workflows.