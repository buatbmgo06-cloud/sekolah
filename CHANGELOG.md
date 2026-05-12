# 📝 Changelog

Semua perubahan penting pada proyek ini akan didokumentasikan di file ini.

Format berdasarkan [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
dan proyek ini mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2024-06-01

### ✨ Added (Fitur Baru)

#### Frontend
- **Hero Section Interaktif**
  - Teks dinamis dengan efek typewriter
  - Tombol CTA "Daftar PPDB" dan "Tur Virtual"
  - Marquee pengumuman berjalan di bawah hero
  - Statistik sekolah (siswa, prestasi, program)

- **Mading Digital (Wall of Fame)**
  - Layout masonry dengan variasi tinggi kartu
  - Filter kategori: Seni, Sains, Prestasi, Teknologi
  - Animasi smooth dengan Framer Motion
  - Badge kategori dengan warna dinamis

- **Halaman Ekstrakurikuler**
  - Grid responsif dengan filter kategori
  - Informasi lengkap: nama, deskripsi, jadwal, anggota
  - Gradient overlay sesuai kategori
  - Animasi layout saat filter berubah

- **Portal PPDB**
  - Form pendaftaran dengan validasi lengkap
  - Submit menggunakan Server Action
  - Alert sukses/error dengan animasi
  - Loading state saat proses submit

- **Dark/Light Mode**
  - Toggle tema di Navbar
  - Preferensi tersimpan di localStorage
  - Smooth transition antar tema
  - CSS variables untuk warna dinamis

- **Komponen Reusable**
  - Navbar dengan mobile menu & scroll effect
  - Footer dengan kontak & sosial media
  - Section pengumuman dengan fetch API
  - CTA section untuk PPDB

#### Backend
- **API Routes**
  - `GET /api/pengumuman` — Daftar pengumuman dengan filter
  - `GET /api/karya-siswa` — Data mading digital dengan filter
  - `GET /api/ekskul` — Daftar ekstrakurikuler dengan filter

- **Server Actions**
  - `submitPendaftaran` — Validasi dan proses form PPDB

#### Styling & Design
- **Tailwind CSS** dengan custom configuration
  - Custom colors: Navy & Gold
  - Custom animations: marquee, fade-in-up
  - Utility classes: btn-primary, input-field, dll
  - Dark mode support

- **Framer Motion** untuk animasi
  - Page transitions
  - Layout animations
  - Stagger animations untuk list items

#### Developer Experience
- **TypeScript** untuk type safety
- **ESLint** untuk code quality
- **Mock data** untuk development tanpa database
- **Modular component structure**

### 📚 Documentation
- `README.md` — Dokumentasi utama proyek
- `STRUKTUR_PROYEK.md` — Penjelasan struktur folder
- `INSTALASI_NODEJS.md` — Panduan install Node.js
- `API_DOCUMENTATION.md` — Dokumentasi API endpoints
- `DEPLOYMENT.md` — Panduan deployment
- `RINGKASAN_PROYEK.md` — Quick reference guide
- `CHANGELOG.md` — File ini

### 🔧 Configuration
- Next.js 14 dengan App Router
- Tailwind CSS 3.4+
- TypeScript 5.x
- Framer Motion 11.x
- Lucide React untuk icons

---

## [Unreleased] - Rencana Fitur Masa Depan

### 🎯 Planned Features

#### High Priority
- [ ] Integrasi database (PostgreSQL/MySQL)
- [ ] Authentication & authorization (NextAuth.js)
- [ ] Admin dashboard untuk kelola konten
- [ ] Upload gambar ke CDN (Cloudinary/Vercel Blob)
- [ ] Email notification untuk PPDB
- [ ] Search functionality untuk mading & ekskul

#### Medium Priority
- [ ] Halaman detail untuk setiap karya siswa
- [ ] Halaman detail untuk setiap ekstrakurikuler
- [ ] Galeri foto kegiatan sekolah
- [ ] Kalender akademik interaktif
- [ ] Blog/artikel sekolah
- [ ] Testimonial alumni

#### Low Priority
- [ ] Virtual tour 360° sekolah
- [ ] Live chat support
- [ ] Multi-language support (ID/EN)
- [ ] PWA (Progressive Web App)
- [ ] Offline mode
- [ ] Push notifications

### 🐛 Known Issues
- Tidak ada (initial release)

### 🔄 Improvements
- [ ] Optimasi performa (lazy loading, code splitting)
- [ ] SEO optimization (meta tags, sitemap, robots.txt)
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)
- [ ] Unit & integration tests
- [ ] E2E tests dengan Playwright/Cypress

---

## Versioning Guide

Format: `MAJOR.MINOR.PATCH`

- **MAJOR:** Breaking changes (tidak backward compatible)
- **MINOR:** Fitur baru (backward compatible)
- **PATCH:** Bug fixes & improvements

### Contoh:
- `1.0.0` → `1.0.1` — Bug fix
- `1.0.1` → `1.1.0` — Fitur baru (halaman guru)
- `1.1.0` → `2.0.0` — Breaking change (migrasi ke database)

---

## Changelog Categories

- **Added** — Fitur baru
- **Changed** — Perubahan pada fitur existing
- **Deprecated** — Fitur yang akan dihapus di versi mendatang
- **Removed** — Fitur yang dihapus
- **Fixed** — Bug fixes
- **Security** — Perbaikan keamanan

---

## Contributing

Untuk berkontribusi pada proyek ini:

1. Fork repository
2. Buat branch baru: `git checkout -b feature/nama-fitur`
3. Commit changes: `git commit -m 'Add: fitur baru'`
4. Push ke branch: `git push origin feature/nama-fitur`
5. Buat Pull Request
6. Update CHANGELOG.md di section `[Unreleased]`

---

**Last Updated:** 2024-06-01
