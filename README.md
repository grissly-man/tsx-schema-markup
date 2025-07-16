# 🧩 tsx-schema-markup

**A package for adding schema markup to your TSX pages — typed, composable, and SEO-friendly.**

## Overview

`tsx-schema-markup` is a library of TypeScript + React components that help you add [schema.org](https://schema.org) structured data to your web pages in a clean, strongly typed way. It's built on top of [`schema-dts`](https://github.com/google/schema-dts) and is compatible with [Google's Search Gallery recommendations](https://developers.google.com/search/docs/appearance/structured-data/search-gallery).

This package makes it easy to:

- Embed valid JSON-LD inside `<script type="application/ld+json">`
- Compose markup with ergonomic, typed React components
- Use a general-purpose fallback component for custom types

---

## ✨ Features

- ✅ **Componentized Markup** — Just use `<ProfilePage ... />`, `<Article />`, `<Breadcrumb />`, etc.
- 🔒 **Fully Typed with `schema-dts`** — Autocomplete + validation in your editor.
- 🌍 **SEO-Friendly** — Produces valid markup for rich search results.
- ⚙️ **Custom Support** — Use `<StructuredMarkup thing={...} />` for ad-hoc data.

---

## 📦 Installation

```bash
npm install tsx-schema-markup
# or
yarn add tsx-schema-markup
```

---

## 🚀 Usage

### Prebuilt Components

Use prebuilt components like `<ProfilePage />`, `<Article />`, `<Breadcrumb />`, etc., for common structured data types supported by Google.

```tsx
import { ProfilePage } from "tsx-schema-markup/dist/profile-page";
import type { Person } from "schema-dts";

const person: Person = {
  "@type": "Person",
  name: "Jane Doe",
  sameAs: ["https://twitter.com/janedoe"],
};

<ProfilePage
  dateCreated={new Date().toISOString()}
  dateModified={new Date().toISOString()}
  mainEntity={person}
/>;
```

This renders:

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "dateCreated": "...",
    "dateModified": "...",
    "mainEntity": {
      "@type": "Person",
      "name": "Jane Doe",
      "sameAs": ["https://twitter.com/janedoe"]
    }
  }
</script>
```

### Generic Component

For any valid schema.org object, use:

```tsx
import { StructuredMarkup } from "tsx-schema-markup/dist/structured-markup";
import type { Person } from "schema-dts";

const person: Person = {
  "@type": "Person",
  name: "John Doe",
  url: "https://example.com",
};

<StructuredMarkup thing={person} />;
```

---

## 📚 Included Components

All [recommended structured data types from Google Search Gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery) are supported, including:

- `Article`
- `BreadcrumbList`
- `Event`
- `FAQPage`
- `HowTo`
- `JobPosting`
- `LocalBusiness`
- `Product`
- `ProfilePage`
- `Recipe`
- `Review`
- `VideoObject`
- ...and more.

---

## 🧪 Type Safety

All components are strongly typed using [`schema-dts`](https://github.com/google/schema-dts), a comprehensive TypeScript definition of [schema.org](https://schema.org). This gives you:

- Full autocomplete and validation in your editor
- Precise typing for all structured data fields
- Confidence that your markup adheres to spec

**Heads-up:** `schema-dts` is _huge_ — it includes every schema.org type and property. This can occasionally make editors (especially VS Code) wheeze, particularly in larger projects or on slower machines.

> 🧘‍♂️ Fortunately, this affects only the developer experience — the typing is completely erased at compile time and **has no impact on your runtime bundle**.

If you're familiar with splitting TypeScript type definitions or managing large `.d.ts` files more efficiently, **contributions are very welcome**!

---

## 📄 License

ISC
