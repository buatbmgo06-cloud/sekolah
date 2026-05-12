# 🚀 MULAI DI SINI — Panduan Lengkap untuk Pemula

Selamat datang di proyek **Website Sekolah SMA Nusantara Bangsa**! 

File ini adalah **titik awal** untuk memahami dan menjalankan proyek ini. Ikuti langkah-langkah di bawah secara berurutan.

---

## 📌 Langkah 1: Cek Kebutuhan Sistem

### Yang Anda Butuhkan:
- ✅ **Node.js** versi 18 atau lebih baru
- ✅ **npm** (otomatis terinstall dengan Node.js)
- ✅ **Text Editor** (VS Code, Sublime, Notepad++, dll)
- ✅ **Browser Modern** (Chrome, Firefox, Edge, Safari)
- ✅ **Koneksi Internet** (untuk install dependencies)

### Cek Apakah Node.js Sudah Terinstall:

Buka **Command Prompt** atau **PowerShell**, lalu ketik:

```bash
node -v
npm -v
```

**Jika muncul versi** (contoh: `v20.11.0` dan `10.2.4`):
✅ Node.js sudah terinstall, lanjut ke **Langkah 2**

**Jika muncul error** `'node' is not recognized...`:
❌ Node.js belum terinstall, baca **Langkah 1A** di bawah

---

### Langkah 1A: Install Node.js (Jika Belum Ada)

1. **Buka website resmi Node.js:**
   👉 [https://nodejs.org](https://nodejs.org)

2. **Download versi LTS** (tombol hijau)
   - File: `node-v20.x.x-x64.msi`

3. **Jalankan installer:**
   - Double-click file `.msi`
   - Klik Next → Next → Install
   - Tunggu hingga selesai

4. **Restart terminal** (tutup dan buka kembali)

5. **Verifikasi:**
   ```bash
   node -v
   npm -v
   ```

📖 **Panduan lengkap:** Baca file `INSTALASI_NODEJS.md`

---

## 📌 Langkah 2: Install Dependencies

Setelah Node.js terinstall, saatnya install semua library yang dibutuhkan.

### 2.1. Buka Terminal di Folder Proyek

**Windows:**
- Buka folder `sekolah-app` di File Explorer
- Klik kanan di area kosong
- Pilih "Open in Terminal" atau "Git Bash Here"

**Atau via Command Prompt:**
```bash
cd C:\Users\ferdi\suka\sekolah-app
```

### 2.2. Install Dependencies

Jalankan perintah:

```bash
npm install
```

**Proses ini akan:**
- Download semua library (Next.js, React, Tailwind, dll)
- Membuat folder `node_modules/`
- Membuat file `package-lock.json`

**Waktu:** 1-3 menit (tergantung koneksi internet)

**Jika berhasil**, akan muncul output seperti:
```
added 350 packages in 45s
```

---

## 📌 Langkah 3: Jalankan Development Server

Setelah dependencies terinstall, jalankan aplikasi:

```bash
npm run dev
```

**Output yang diharapkan:**
```
  ▲ Next.js 14.2.3
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

---

## 📌 Langkah 4: Buka di Browser

1. **Buka browser** (Chrome, Firefox, Edge, Safari)
2. **Akses:** http://localhost:3000
3. **Anda akan melihat:**
   - Hero section dengan teks dinamis
   - Marquee pengumuman di bawah
   - Section pengumuman
   - Preview ekstrakurikuler

🎉 **Selamat! Website sudah berjalan!**

---

## 📌 Langkah 5: Explore Fitur

### Halaman yang Tersedia:

| URL | Halaman | Fitur |
|-----|---------|-------|
| `/` | Beranda | Hero, Pengumuman, Ekskul |
| `/mading` | Mading Digital | Galeri karya siswa dengan filter |
| `/ekskul` | Ekstrakurikuler | Daftar ekskul dengan filter |
| `/ppdb` | Form PPDB | Formulir pendaftaran |

### Fitur yang Bisa Dicoba:

1. **Toggle Dark Mode**
   - Klik icon bulan/matahari di Navbar
   - Tema akan berubah dan tersimpan

2. **Filter Mading Digital**
   - Buka `/mading`
   - Klik filter: Seni, Sains, Prestasi, Teknologi
   - Kartu akan berubah sesuai kategori

3. **Filter Ekstrakurikuler**
   - Buka `/ekskul`
   - Klik filter: Seni, Olahraga, Teknologi, Bahasa

4. **Submit Form PPDB**
   - Buka `/ppdb`
   - Isi semua field
   - Klik "Kirim Pendaftaran"
   - Lihat alert sukses/error

5. **Test Responsiveness**
   - Resize browser window
   - Atau buka DevTools (F12) → Toggle device toolbar
   - Test di ukuran mobile, tablet, desktop

---

## 📌 Langkah 6: Pahami Struktur Proyek

### Folder Penting:

```
sekolah-app/
├── app/                    # Halaman & API Routes
│   ├── page.tsx           # Beranda
│   ├── mading/            # Halaman Mading
│   ├── ekskul/            # Halaman Ekskul
│   ├── ppdb/              # Halaman PPDB
│   └── api/               # Backend API
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

📖 **Detail lengkap:** Baca file `STRUKTUR_PROYEK.md`

---

## 📌 Langkah 7: Modifikasi Data

### Mengubah Pengumuman:

Edit file `lib/mock-data.ts`:

```typescript
export const mockPengumuman: Pengumuman[] = [
  {
    id: 1,
    judul: "Pengumuman Baru Anda",  // ← Edit di sini
    isi: "Isi pengumuman...",        // ← Edit di sini
    tanggal: "2024-06-01",
    kategori: "PPDB",
    penting: true,
  },
  // Tambah pengumuman baru di sini
];
```

**Simpan file**, lalu refresh browser. Perubahan akan langsung terlihat!

### Mengubah Warna Tema:

Edit file `tailwind.config.ts`:

```typescript
colors: {
  navy: {
    600: "#1a237e",  // ← Ganti dengan warna pilihan Anda
  },
  gold: {
    500: "#f5c518",  // ← Ganti dengan warna pilihan Anda
  },
}
```

---

## 📌 Langkah 8: Baca Dokumentasi

Proyek ini memiliki dokumentasi lengkap:

| File | Isi |
|------|-----|
| `README.md` | 📖 Dokumentasi utama |
| `RINGKASAN_PROYEK.md` | ⚡ Quick reference |
| `STRUKTUR_PROYEK.md` | 📁 Penjelasan struktur |
| `API_DOCUMENTATION.md` | 🔌 Dokumentasi API |
| `DEPLOYMENT.md` | 🚀 Panduan deploy |
| `CONTRIBUTING.md` | 🤝 Panduan kontribusi |
| `CHANGELOG.md` | 📝 Riwayat perubahan |

**Rekomendasi urutan baca:**
1. `MULAI_DISINI.md` (file ini) ✅
2. `RINGKASAN_PROYEK.md` — Overview cepat
3. `STRUKTUR_PROYEK.md` — Pahami struktur
4. `README.md` — Dokumentasi lengkap

---

## 📌 Langkah 9: Troubleshooting

### ❌ Error: `'node' is not recognized`
**Solusi:** Node.js belum terinstall atau belum ada di PATH. Install Node.js dari [nodejs.org](https://nodejs.org)

### ❌ Error: `Port 3000 is already in use`
**Solusi:** Ada aplikasi lain yang menggunakan port 3000.
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

### ❌ Error saat `npm install`
**Solusi:**
```bash
# Hapus dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### ❌ Dark mode tidak berfungsi
**Solusi:**
- Clear cache browser (Ctrl+Shift+Delete)
- Cek localStorage di DevTools (F12 → Application → Local Storage)

### ❌ Gambar tidak muncul
**Solusi:**
- Cek koneksi internet (gambar dari picsum.photos)
- Cek console browser untuk error (F12 → Console)

---

## 📌 Langkah 10: Next Steps

Setelah berhasil menjalankan aplikasi, Anda bisa:

### Untuk Belajar:
- ✅ Explore semua halaman
- ✅ Baca kode di `components/` dan `app/`
- ✅ Coba modifikasi data di `lib/mock-data.ts`
- ✅ Coba ubah warna di `tailwind.config.ts`
- ✅ Baca dokumentasi Next.js: [nextjs.org/docs](https://nextjs.org/docs)

### Untuk Development:
- ✅ Tambah halaman baru (misal: `/tentang`, `/guru`)
- ✅ Tambah API endpoint baru
- ✅ Integrasikan dengan database (PostgreSQL, MySQL)
- ✅ Tambah authentication (NextAuth.js)
- ✅ Deploy ke production (Vercel, Netlify)

### Untuk Production:
- ✅ Ganti mock data dengan database
- ✅ Setup email notification untuk PPDB
- ✅ Upload gambar ke CDN (Cloudinary, Vercel Blob)
- ✅ Tambah admin dashboard
- ✅ Setup monitoring & analytics

📖 **Panduan deploy:** Baca file `DEPLOYMENT.md`

---

## 🎯 Checklist Pemula

Centang setiap langkah yang sudah Anda selesaikan:

- [ ] Node.js terinstall (`node -v` berfungsi)
- [ ] Dependencies terinstall (`npm install` selesai)
- [ ] Development server berjalan (`npm run dev`)
- [ ] Website bisa diakses di browser (http://localhost:3000)
- [ ] Sudah explore semua halaman (Beranda, Mading, Ekskul, PPDB)
- [ ] Sudah coba toggle dark mode
- [ ] Sudah coba filter di Mading & Ekskul
- [ ] Sudah coba submit form PPDB
- [ ] Sudah baca `RINGKASAN_PROYEK.md`
- [ ] Sudah baca `STRUKTUR_PROYEK.md`

---

## 💡 Tips untuk Pemula

### 1. Gunakan VS Code
Download dari [code.visualstudio.com](https://code.visualstudio.com)

**Extensions yang direkomendasikan:**
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint

### 2. Buka DevTools Browser
Tekan **F12** untuk membuka DevTools:
- **Console:** Lihat error & log
- **Network:** Lihat API requests
- **Application:** Lihat localStorage
- **Elements:** Inspect HTML/CSS

### 3. Hot Reload
Setiap kali Anda save file, browser akan auto-refresh. Tidak perlu restart server!

### 4. Jangan Takut Eksperimen
- Coba ubah kode dan lihat hasilnya
- Jika rusak, bisa di-undo (Ctrl+Z)
- Atau reset dengan `git checkout .`

---

## 📞 Butuh Bantuan?

Jika masih ada yang kurang jelas:

1. **Baca dokumentasi** di folder proyek
2. **Search di Google** dengan keyword spesifik
3. **Buka GitHub Issues** untuk tanya
4. **Join komunitas** Next.js/React Indonesia

---

## 🎉 Selamat!

Anda sudah berhasil menjalankan proyek ini! 

**Next:** Baca `RINGKASAN_PROYEK.md` untuk overview lengkap fitur dan cara modifikasi.

**Happy Coding! 🚀**
