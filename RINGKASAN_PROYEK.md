# 📚 Ringkasan Proyek — Website Sekolah SMA Nusantara Bangsa

Dokumen ini adalah **panduan cepat** untuk memahami dan menggunakan proyek website sekolah ini.

---

## 🎯 Apa Itu Proyek Ini?

Website sekolah modern yang dibangun dengan **Next.js 14**, **Tailwind CSS**, dan **Framer Motion**. Menampilkan:

✨ **Hero Section** dengan teks dinamis & marquee pengumuman  
🎨 **Mading Digital** — galeri karya siswa dengan layout masonry  
🏃 **Ekstrakurikuler** — filter berdasarkan kategori (Seni, Olahraga, Teknologi, Bahasa)  
📝 **Portal PPDB** — formulir pendaftaran siswa baru  
🌓 **Dark/Light Mode** — toggle tema dengan preferensi tersimpan  
📱 **Responsif Penuh** — optimal di semua perangkat  

---

## 🚀 Quick Start (3 Langkah)

### 1️⃣ Install Node.js
Jika belum punya Node.js, download dari [nodejs.org](https://nodejs.org) (pilih versi **LTS**)

Cek instalasi:
```bash
node -v
npm -v
```

📖 **Panduan lengkap:** Baca `INSTALASI_NODEJS.md`

### 2️⃣ Install Dependencies
```bash
cd sekolah-app
npm install
```

### 3️⃣ Jalankan Development Server
```bash
npm run dev
```

Buka browser: **http://localhost:3000** 🎉

---

## 📁 Struktur Proyek (Simplified)

```
sekolah-app/
├── app/                    # Halaman & API Routes
│   ├── page.tsx           # 🏠 Beranda
│   ├── mading/            # 🎨 Mading Digital
│   ├── ekskul/            # 🏃 Ekstrakurikuler
│   ├── ppdb/              # 📝 Form PPDB
│   └── api/               # 🔌 Backend API
│
├── components/            # Komponen reusable
│   ├── Navbar.tsx        # Navigasi
│   ├── Hero.tsx          # Hero section
│   ├── MadingCard.tsx    # Kartu mading
│   └── ...
│
├── lib/                   # Utilities
│   ├── types.ts          # TypeScript types
│   ├── mock-data.ts      # Data dummy
│   └── actions.ts        # Server Actions
│
└── tailwind.config.ts    # Konfigurasi Tailwind
```

📖 **Detail lengkap:** Baca `STRUKTUR_PROYEK.md`

---

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| **Next.js** | 14.2+ | Framework React |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 3.4+ | Styling |
| **Framer Motion** | 11.x | Animasi |
| **Lucide React** | 0.378+ | Icons |

---

## 🎨 Fitur Utama

### 1. Hero Section Interaktif
- Teks dinamis dengan efek typewriter
- Tombol CTA "Daftar PPDB" & "Tur Virtual"
- Marquee pengumuman berjalan di bawah
- Statistik sekolah (siswa, prestasi, program)

**File:** `components/Hero.tsx`

### 2. Mading Digital (Wall of Fame)
- Layout masonry (kolom variabel)
- Filter kategori: Seni, Sains, Prestasi, Teknologi
- Kartu dengan gambar, judul, deskripsi, penulis
- Animasi smooth saat filter berubah

**File:** `app/mading/page.tsx`, `components/MadingCard.tsx`

### 3. Ekstrakurikuler
- Grid responsif dengan filter kategori
- Informasi: nama, deskripsi, jadwal, jumlah anggota
- Gambar dengan gradient overlay sesuai kategori

**File:** `app/ekskul/page.tsx`

### 4. Portal PPDB
- Form dengan validasi (nama, asal sekolah, nilai, email, telp)
- Submit menggunakan **Server Action**
- Alert sukses/error setelah submit
- Loading state saat proses submit

**File:** `app/ppdb/page.tsx`, `lib/actions.ts`

### 5. Dark/Light Mode
- Toggle di Navbar
- Preferensi tersimpan di localStorage
- Smooth transition antar tema
- CSS variables untuk warna dinamis

**File:** `components/ThemeProvider.tsx`, `app/globals.css`

---

## 🔌 API Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/api/pengumuman` | Daftar pengumuman sekolah |
| `GET` | `/api/karya-siswa` | Data mading digital |
| `GET` | `/api/ekskul` | Daftar ekstrakurikuler |

**Contoh:**
```bash
curl http://localhost:3000/api/pengumuman
curl http://localhost:3000/api/karya-siswa?kategori=Seni
```

📖 **Dokumentasi lengkap:** Baca `API_DOCUMENTATION.md`

---

## 🎨 Skema Warna

| Warna | Hex | Kegunaan |
|-------|-----|----------|
| **Navy** | `#1a237e` | Warna utama (header, button) |
| **Gold** | `#f5c518` | Aksen (CTA, highlight) |
| **Slate** | `#64748b` | Teks sekunder |
| **White/Black** | - | Background (light/dark mode) |

Edit di: `tailwind.config.ts`

---

## 📝 Cara Modifikasi

### Mengubah Data Mock
Edit file `lib/mock-data.ts`:
```typescript
export const mockPengumuman = [
  {
    id: 1,
    judul: "Pengumuman Baru",
    isi: "Isi pengumuman...",
    // ...
  }
];
```

### Menambah Halaman Baru
1. Buat folder: `app/tentang/`
2. Buat file: `app/tentang/page.tsx`
3. Tambahkan link di `components/Navbar.tsx`

### Mengubah Warna Tema
Edit `tailwind.config.ts`:
```typescript
colors: {
  navy: {
    600: "#1a237e", // Ganti dengan warna pilihan
  },
  gold: {
    500: "#f5c518", // Ganti dengan warna pilihan
  },
}
```

---

## 🚀 Deployment

### Rekomendasi: Vercel (Gratis & Mudah)

1. Push kode ke GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Import repository
4. Deploy (otomatis!)

**URL:** `https://sekolah-app-xxx.vercel.app`

📖 **Panduan lengkap:** Baca `DEPLOYMENT.md`

---

## 📚 Dokumentasi Lengkap

| File | Isi |
|------|-----|
| `README.md` | Dokumentasi utama proyek |
| `STRUKTUR_PROYEK.md` | Penjelasan struktur folder & file |
| `INSTALASI_NODEJS.md` | Cara install Node.js di Windows |
| `API_DOCUMENTATION.md` | Dokumentasi API endpoints |
| `DEPLOYMENT.md` | Panduan deploy ke production |
| `RINGKASAN_PROYEK.md` | File ini (quick reference) |

---

## 🔧 Perintah NPM

| Perintah | Fungsi |
|----------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm start` | Jalankan production server |
| `npm run lint` | Cek kode dengan ESLint |

---

## ⚠️ Catatan Penting

### Mock Data vs Database
Saat ini aplikasi menggunakan **data statis** di `lib/mock-data.ts`.

Untuk produksi, ganti dengan database:
- PostgreSQL (Supabase, Vercel Postgres)
- MySQL (PlanetScale)
- MongoDB (MongoDB Atlas)

### Server Actions
Form PPDB menggunakan Server Action yang saat ini hanya `console.log`.

Di produksi, tambahkan:
```typescript
// lib/actions.ts
await prisma.pendaftaran.create({ data: rawData });
await sendEmail({ to: rawData.email, ... });
```

### Gambar
Mock data menggunakan placeholder dari `picsum.photos`.

Untuk produksi, upload ke CDN:
- Cloudinary
- Vercel Blob
- AWS S3

---

## 🐛 Troubleshooting

### Port 3000 sudah digunakan
```bash
npm run dev -- -p 3001
```

### Error saat `npm install`
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dark mode tidak berfungsi
- Cek localStorage di browser (F12 → Application → Local Storage)
- Clear cache dan reload

---

## 🤝 Kontribusi

Silakan fork repository dan buat pull request untuk:
- Perbaikan bug
- Fitur baru
- Perbaikan dokumentasi
- Optimasi performa

---

## 📄 Lisensi

MIT License — Bebas digunakan untuk proyek pribadi maupun komersial.

---

## 📞 Kontak & Support

Jika ada pertanyaan atau butuh bantuan:
- 📧 Email: developer@example.com
- 💬 GitHub Issues: [github.com/username/sekolah-app/issues](https://github.com)
- 📖 Dokumentasi: Baca file `.md` di root folder

---

## ✅ Checklist untuk Pemula

- [ ] Node.js terinstall (`node -v` berfungsi)
- [ ] Dependencies terinstall (`npm install` selesai)
- [ ] Development server berjalan (`npm run dev`)
- [ ] Website bisa diakses di browser (http://localhost:3000)
- [ ] Sudah baca `README.md`
- [ ] Sudah explore semua halaman (Beranda, Mading, Ekskul, PPDB)
- [ ] Sudah coba toggle dark mode
- [ ] Sudah coba submit form PPDB
- [ ] Sudah coba filter di Mading & Ekskul

---

## 🎓 Belajar Lebih Lanjut

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind Docs](https://tailwindcss.com/docs)
- [Tailwind UI Components](https://tailwindui.com)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript for React](https://react-typescript-cheatsheet.netlify.app)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

---

**Selamat coding! 🚀**

Jika ada yang kurang jelas, jangan ragu untuk membaca dokumentasi lengkap di file-file `.md` lainnya.
