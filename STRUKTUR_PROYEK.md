# 📂 Struktur Proyek Website Sekolah

Dokumentasi lengkap struktur folder dan file dalam proyek ini.

---

## 🌳 Tree Struktur

```
sekolah-app/
│
├── 📁 app/                          # Next.js App Router
│   ├── 📁 api/                      # API Routes (Backend)
│   │   ├── 📁 pengumuman/
│   │   │   └── route.ts             # GET /api/pengumuman
│   │   ├── 📁 karya-siswa/
│   │   │   └── route.ts             # GET /api/karya-siswa
│   │   └── 📁 ekskul/
│   │       └── route.ts             # GET /api/ekskul
│   │
│   ├── 📁 mading/                   # Halaman Mading Digital
│   │   └── page.tsx
│   │
│   ├── 📁 ekskul/                   # Halaman Ekstrakurikuler
│   │   └── page.tsx
│   │
│   ├── 📁 ppdb/                     # Halaman PPDB
│   │   └── page.tsx
│   │
│   ├── layout.tsx                   # Root Layout (font, metadata, theme)
│   ├── page.tsx                     # Halaman Beranda
│   └── globals.css                  # Global CSS & variables
│
├── 📁 components/                   # Komponen React reusable
│   ├── Navbar.tsx                   # Navigasi utama + mobile menu
│   ├── Hero.tsx                     # Hero section dengan typewriter
│   ├── MadingCard.tsx               # Kartu individual mading
│   ├── PengumumanSection.tsx        # Section pengumuman
│   ├── EkskulSection.tsx            # Section ekskul dengan filter
│   ├── CTASection.tsx               # Call-to-action PPDB
│   ├── Footer.tsx                   # Footer dengan kontak & sosmed
│   └── ThemeProvider.tsx            # Context provider dark mode
│
├── 📁 lib/                          # Utilities & helpers
│   ├── types.ts                     # TypeScript type definitions
│   ├── mock-data.ts                 # Mock data (ganti dengan DB)
│   └── actions.ts                   # Server Actions (form PPDB)
│
├── 📁 public/                       # Static assets (opsional)
│   └── (gambar, favicon, dll)
│
├── 📄 tailwind.config.ts            # Konfigurasi Tailwind CSS
├── 📄 postcss.config.js             # Konfigurasi PostCSS
├── 📄 tsconfig.json                 # Konfigurasi TypeScript
├── 📄 next.config.mjs               # Konfigurasi Next.js
├── 📄 package.json                  # Dependencies & scripts
├── 📄 .eslintrc.json                # ESLint config
├── 📄 .gitignore                    # Git ignore rules
├── 📄 README.md                     # Dokumentasi utama
└── 📄 STRUKTUR_PROYEK.md            # File ini
```

---

## 📋 Penjelasan File Penting

### 🔹 `app/layout.tsx`
**Root Layout** — Titik masuk utama aplikasi.
- Setup font (Inter & Plus Jakarta Sans)
- Metadata SEO
- ThemeProvider untuk dark mode
- Navbar & Footer global

### 🔹 `app/page.tsx`
**Halaman Beranda** — Landing page utama.
- Hero section
- Pengumuman terbaru
- Preview ekstrakurikuler
- CTA PPDB

### 🔹 `app/api/*/route.ts`
**API Routes** — Backend endpoints.
- Mengembalikan data dalam format JSON
- Mendukung query params untuk filtering
- Saat ini menggunakan mock data

### 🔹 `components/ThemeProvider.tsx`
**Theme Context** — Mengelola dark/light mode.
- Menyimpan preferensi di localStorage
- Menerapkan class `dark` ke `<html>`
- Mencegah flash of unstyled content (FOUC)

### 🔹 `lib/types.ts`
**Type Definitions** — Definisi tipe TypeScript.
```ts
export interface Pengumuman { ... }
export interface KaryaSiswa { ... }
export interface Ekskul { ... }
export interface DataPendaftaran { ... }
```

### 🔹 `lib/mock-data.ts`
**Mock Data** — Data statis untuk development.
- `mockPengumuman` — Daftar pengumuman
- `mockKaryaSiswa` — Karya untuk mading
- `mockEkskul` — Daftar ekstrakurikuler
- `marqueeItems` — Teks marquee di hero

**⚠️ Ganti dengan database di produksi!**

### 🔹 `lib/actions.ts`
**Server Actions** — Fungsi yang berjalan di server.
- `submitPendaftaran` — Menangani form PPDB
- Validasi input
- Saat ini hanya `console.log`, ganti dengan database insert

### 🔹 `tailwind.config.ts`
**Tailwind Config** — Kustomisasi Tailwind CSS.
- Dark mode berbasis class
- Custom colors (navy, gold)
- Custom animations (marquee, fade-in-up)
- Font variables

### 🔹 `app/globals.css`
**Global Styles** — CSS global & utility classes.
- CSS variables untuk tema
- Custom scrollbar
- Utility classes (`.btn-primary`, `.input-field`, dll)

---

## 🎯 Alur Data

### 1️⃣ Pengumuman (Beranda)
```
PengumumanSection.tsx
  ↓ fetch
/api/pengumuman
  ↓ return
mockPengumuman (lib/mock-data.ts)
```

### 2️⃣ Mading Digital
```
app/mading/page.tsx
  ↓ fetch
/api/karya-siswa?kategori=Seni
  ↓ return
mockKaryaSiswa (filtered)
  ↓ render
MadingCard.tsx (masonry grid)
```

### 3️⃣ Ekstrakurikuler
```
app/ekskul/page.tsx
  ↓ fetch
/api/ekskul?kategori=Olahraga
  ↓ return
mockEkskul (filtered)
```

### 4️⃣ Form PPDB
```
app/ppdb/page.tsx (form)
  ↓ submit (Server Action)
lib/actions.ts → submitPendaftaran
  ↓ validasi
  ↓ console.log (ganti dengan DB insert)
  ↓ return
{ success: true, message: "..." }
```

---

## 🔄 Routing (Next.js App Router)

| URL | File | Deskripsi |
|-----|------|-----------|
| `/` | `app/page.tsx` | Halaman Beranda |
| `/mading` | `app/mading/page.tsx` | Mading Digital |
| `/ekskul` | `app/ekskul/page.tsx` | Ekstrakurikuler |
| `/ppdb` | `app/ppdb/page.tsx` | Form PPDB |
| `/api/pengumuman` | `app/api/pengumuman/route.ts` | API Pengumuman |
| `/api/karya-siswa` | `app/api/karya-siswa/route.ts` | API Mading |
| `/api/ekskul` | `app/api/ekskul/route.ts` | API Ekskul |

---

## 🎨 Komponen Reusable

### `<MadingCard />`
Kartu individual untuk mading digital.
- Props: `karya` (KaryaSiswa), `index` (number)
- Mendukung variasi tinggi (sm, md, lg) untuk masonry
- Badge kategori dengan warna dinamis

### `<Navbar />`
Navigasi utama dengan fitur:
- Efek scroll (background blur)
- Mobile menu (hamburger)
- Toggle dark mode
- Active link indicator

### `<Hero />`
Hero section dengan:
- Typewriter effect untuk teks dinamis
- CTA buttons
- Statistik sekolah
- Marquee pengumuman di bawah

### `<PengumumanSection />`
Section pengumuman dengan:
- Fetch data dari API
- Loading skeleton
- Badge kategori & prioritas

### `<EkskulSection />`
Section ekskul dengan:
- Filter kategori (state management)
- Animasi layout (Framer Motion)
- Grid responsif

### `<CTASection />`
Call-to-action untuk PPDB:
- Gradient background
- Dekorasi abstrak
- Link ke halaman PPDB

### `<Footer />`
Footer dengan:
- Brand & deskripsi
- Navigasi
- Kontak
- Sosial media

---

## 🚀 Cara Menambah Fitur Baru

### 1. Menambah Halaman Baru
```bash
# Buat folder baru di app/
mkdir app/tentang-kami
# Buat page.tsx
touch app/tentang-kami/page.tsx
```

Tambahkan link di `components/Navbar.tsx`:
```tsx
const navLinks = [
  // ...
  { href: "/tentang-kami", label: "Tentang Kami" },
];
```

### 2. Menambah API Endpoint
```bash
mkdir app/api/guru
touch app/api/guru/route.ts
```

Isi dengan:
```tsx
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ data: [...] });
}
```

### 3. Menambah Komponen
```bash
touch components/GuruCard.tsx
```

Import dan gunakan di halaman:
```tsx
import GuruCard from "@/components/GuruCard";
```

---

## 📦 Dependencies Lengkap

### Production
- `next` — Framework React
- `react` & `react-dom` — Library React
- `framer-motion` — Animasi
- `lucide-react` — Icon library

### Development
- `typescript` — Type safety
- `@types/*` — Type definitions
- `tailwindcss` — CSS framework
- `autoprefixer` & `postcss` — CSS processing
- `eslint` — Linting

---

## 🔐 Environment Variables (Opsional)

Jika menggunakan database atau API eksternal, buat file `.env.local`:

```env
# Database
DATABASE_URL="postgresql://..."

# Email (untuk notifikasi PPDB)
SMTP_HOST="smtp.gmail.com"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-password"

# API Keys
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

**⚠️ Jangan commit `.env.local` ke Git!**

---

## 📚 Referensi

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

**Happy Coding! 🚀**
