# Satar Shamsi — Portfolio

A personal portfolio website built with **Astro**.

The project is designed to keep the website structure and content separate. Most portfolio content — including personal information, experience, education, skills, projects, awards, contact information, and CV settings — is managed through a single YAML configuration file.

This makes the portfolio easy to customize without needing to modify the Astro page components.

## Tech Stack

* [Astro](https://astro.build/)
* HTML / CSS
* YAML-based configuration
* Google Fonts

## Quick Start

### 1. Clone the repository

```bash
git clone <repository-url>
cd satar-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The site will be available at:

```text
http://localhost:4321
```

### 4. Build for production

```bash
npm run build
```

The production build is generated in:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

---

## Project Structure

```text
satar-portfolio/
├── public/
│   ├── documents/
│   │   └── cv/
│   └── ...
│
├── src/
│   ├── components/
│   ├── config/
│   │   └── portfolio.yaml
│   ├── layouts/
│   ├── pages/
│   └── styles/
│       └── global.css
│
├── package.json
└── README.md
```

### Main parts

* `src/pages/` — website pages and routes
* `src/components/` — reusable UI components
* `src/layouts/` — shared page layouts
* `src/config/portfolio.yaml` — portfolio content and configuration
* `src/styles/global.css` — global design system and styling
* `public/` — static files such as the CV and images

---

## YAML Configuration

The main content of the portfolio is controlled through:

```text
src/config/portfolio.yaml
```

The YAML file contains sections for the different parts of the portfolio, such as:

```text
home
about
work
experience
research
education
skills
awards
cv
contact
```

This allows the portfolio to be customized without changing the underlying Astro components.

For example, the CV configuration contains the document used by the CV page:

```yaml
cv:
  document:
    file: "Portfolio CV.pdf"
    title: "Curriculum Vitae"
```

The corresponding file is placed under:

```text
public/documents/cv/
```

### Customizing the portfolio

To reuse this project for another person:

1. Open `src/config/portfolio.yaml`.
2. Replace the existing personal and portfolio content.
3. Add the required images or documents to `public/`.
4. Update the corresponding file paths in the YAML configuration.
5. Run the development server to check the result.

The page structure does not need to be rewritten for normal content changes.

---

## Styling

Global visual settings are centralized in:

```text
src/styles/global.css
```

The CSS uses variables for the main design system, including:

* Colors
* Typography
* Navigation
* Headings
* Borders and separators
* Spacing
* Layout widths
* Responsive behavior

For example, the main accent color can be changed from the variables in `:root`:

```css
--color-accent: #8A5A3B;
```

This makes it possible to change the visual style of the portfolio from one central location.

---

## Available Commands

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `npm install`       | Install project dependencies         |
| `npm run dev`       | Start the local development server   |
| `npm run build`     | Build the production website         |
| `npm run preview`   | Preview the production build locally |
| `npm run astro ...` | Run Astro CLI commands               |

---

## Development Workflow

A typical workflow is:

```text
Edit portfolio.yaml / CSS
        ↓
npm run dev
        ↓
Check the website locally
        ↓
npm run build
        ↓
Commit changes
        ↓
Deploy
```

The project is intentionally kept simple so that content changes and visual adjustments can be made without introducing unnecessary complexity.
