# 🚀 Rsbuild + Svelte + shadcn/ui Template

A modern, fast, and beautiful template for building Svelte applications with Rsbuild, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- ⚡ **Rsbuild** - Ultra-fast build tool powered by Rspack
- 🎨 **Svelte 5** - The latest version with runes and modern syntax
- 🎭 **shadcn/ui** - Beautiful, accessible UI components
- 🎨 **Tailwind CSS v4** - Latest version with modern CSS features
- 🔧 **TypeScript** - Full type safety out of the box
- 📦 **Bun** - Fast package manager and runtime
- 🧹 **Biome** - Lightning-fast linter and formatter
- 🎯 **Hot Reload** - Instant development feedback
- 📱 **Responsive** - Mobile-first design approach

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| [Rsbuild](https://rsbuild.dev/) | Latest | Build tool & bundler |
| [Svelte](https://svelte.dev/) | 5.x | Frontend framework |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS |
| [shadcn/ui](https://ui.shadcn.com/) | Latest | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Bun](https://bun.sh/) | Latest | Package manager & runtime |
| [Biome](https://biomejs.dev/) | Latest | Linter & formatter |

## 🚀 Quick Start

### Prerequisites

Make sure you have [Bun](https://bun.sh/) installed:

```bash
# Install Bun (if not already installed)
curl -fsSL https://bun.sh/install | bash
```

### Installation

1. **Clone the template**
   ```bash
   git clone <your-repo-url>
   cd rsbuild-svelte-template
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development server**
   ```bash
   bun run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start development server with hot reload |
| `bun run build` | Build for production |
| `bun run start` | Build and serve production build |
| `bun run preview` | Preview production build |
| `bun run check` | Run Biome linter and formatter |
| `bun run format` | Format code with Biome |
| `bun run svelte-check` | Run Svelte type checking |

## 🏗️ Project Structure

```
rsbuild-svelte-template/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   └── ui/           # shadcn/ui components
│   │   └── utils.ts          # Utility functions
│   ├── App.svelte            # Main app component
│   ├── app.css               # Global styles & Tailwind
│   ├── index.ts              # App entry point
│   └── env.d.ts              # TypeScript declarations
├── dist/                     # Production build output
├── rsbuild.config.ts         # Rsbuild configuration
├── biome.json                # Biome configuration
├── tailwind.config.js        # Tailwind configuration
└── package.json
```

## 🎨 Adding shadcn-svelte Components

This template comes with shadcn-svelte pre-configured. To add new components:

1. **Install a component using the CLI**
   ```bash
   # Install the shadcn-svelte CLI
   bun add -D @huntabyte/shadcn-svelte
   
   # Add components
   bunx shadcn-svelte add button
   bunx shadcn-svelte add card
   bunx shadcn-svelte add input
   bunx shadcn-svelte add dialog
   ```

2. **Install required dependencies (if needed)**
   ```bash
   # Some components require bits-ui
   bun add bits-ui
   ```

3. **Use in your Svelte components**
   ```svelte
   <script lang="ts">
     import { Button } from "$lib/components/ui/button";
     import { Card, CardContent, CardHeader, CardTitle } from "$lib/components/ui/card";
   </script>

   <Card>
     <CardHeader>
       <CardTitle>Welcome</CardTitle>
     </CardHeader>
     <CardContent>
       <Button>Click me</Button>
     </CardContent>
   </Card>
   ```

### Available Components

shadcn-svelte provides many components including:
- **Layout**: Card, Separator, Sheet, Sidebar
- **Forms**: Button, Input, Label, Select, Checkbox, Switch
- **Navigation**: Tabs, Menubar, Breadcrumb
- **Feedback**: Alert, Badge, Progress, Skeleton
- **Overlay**: Dialog, Popover, Tooltip, Drawer
- **Data Display**: Table, Avatar, Accordion

Visit the [shadcn-svelte documentation](https://www.shadcn-svelte.com/) for the complete list and examples.

## 🎯 Configuration

### Rsbuild Configuration

The build tool is configured in `rsbuild.config.ts`:

```typescript
import { defineConfig } from '@rsbuild/core';
import { pluginSvelte } from '@rsbuild/plugin-svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [pluginSvelte(), tailwindcss()],
});
```

### Tailwind CSS

Tailwind CSS v4 is configured with:
- Modern CSS features
- Custom design tokens
- Dark mode support
- CSS Modules support

### Biome Configuration

Biome is configured for:
- 2-space indentation
- Single quotes for JavaScript
- Automatic import organization
- Svelte-specific linting rules

## 🚀 Deployment

### Build for Production

```bash
bun run build
```

This creates an optimized build in the `dist/` folder.

### Serve Locally

```bash
bun run start
```

This builds and serves your app at `http://localhost:3333`.

### Deploy to Vercel

1. Connect your repository to Vercel
2. Set build command: `bun run build`
3. Set output directory: `dist`
4. Deploy!

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `dist`
4. Deploy!

## 🎨 Customization

### Adding New Pages

1. Create a new Svelte component in `src/`
2. Add routing logic in `App.svelte`
3. Style with Tailwind classes

### Customizing Theme

Edit the CSS variables in `src/app.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  /* ... more variables */
}
```

### Adding New Dependencies

```bash
# Add a new dependency
bun add <package-name>

# Add a dev dependency
bun add -d <package-name>
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Rsbuild](https://rsbuild.dev/) - For the amazing build tool
- [Svelte](https://svelte.dev/) - For the reactive framework
- [shadcn/ui](https://ui.shadcn.com/) - For the beautiful components
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS
- [Bun](https://bun.sh/) - For the fast runtime and package manager

---

**Happy coding! 🎉**

If you find this template helpful, please give it a ⭐ star!
