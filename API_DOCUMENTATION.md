# 📡 API Documentation — Website Sekolah

Dokumentasi lengkap untuk semua API endpoints dan Server Actions yang tersedia dalam aplikasi.

---

## 🌐 Base URL

**Development:** `http://localhost:3000`  
**Production:** `https://your-domain.com`

---

## 📋 Daftar Endpoints

| Method | Endpoint | Deskripsi |
|--------|----------|-----------|
| `GET` | `/api/pengumuman` | Mendapatkan daftar pengumuman sekolah |
| `GET` | `/api/karya-siswa` | Mendapatkan data karya siswa (mading) |
| `GET` | `/api/ekskul` | Mendapatkan daftar ekstrakurikuler |
| `POST` | Server Action: `submitPendaftaran` | Submit form PPDB |

---

## 1️⃣ GET /api/pengumuman

Mendapatkan daftar pengumuman sekolah terbaru.

### Request

```http
GET /api/pengumuman
```

### Query Parameters (Opsional)

| Parameter | Type | Deskripsi | Contoh |
|-----------|------|-----------|--------|
| `kategori` | string | Filter berdasarkan kategori | `?kategori=PPDB` |
| `penting` | boolean | Hanya tampilkan yang penting | `?penting=true` |

**Kategori yang valid:**
- `PPDB`
- `Akademik`
- `Kegiatan`
- `Umum`

### Response Success (200)

```json
{
  "success": true,
  "total": 5,
  "data": [
    {
      "id": 1,
      "judul": "Pendaftaran PPDB 2024/2025 Dibuka",
      "isi": "Pendaftaran Penerimaan Peserta Didik Baru...",
      "tanggal": "2024-06-01",
      "kategori": "PPDB",
      "penting": true
    },
    {
      "id": 2,
      "judul": "Libur Hari Raya Idul Adha",
      "isi": "Sekolah diliburkan pada tanggal...",
      "tanggal": "2024-06-10",
      "kategori": "Umum",
      "penting": false
    }
  ]
}
```

### Response Error (500)

```json
{
  "success": false,
  "message": "Terjadi kesalahan server."
}
```

### Contoh Penggunaan

**JavaScript/TypeScript:**
```typescript
// Tanpa filter
const response = await fetch('/api/pengumuman');
const data = await response.json();

// Dengan filter kategori
const response = await fetch('/api/pengumuman?kategori=PPDB');

// Hanya yang penting
const response = await fetch('/api/pengumuman?penting=true');
```

**cURL:**
```bash
curl http://localhost:3000/api/pengumuman
curl http://localhost:3000/api/pengumuman?kategori=Akademik
```

---

## 2️⃣ GET /api/karya-siswa

Mendapatkan data karya siswa untuk Mading Digital.

### Request

```http
GET /api/karya-siswa
```

### Query Parameters (Opsional)

| Parameter | Type | Deskripsi | Contoh |
|-----------|------|-----------|--------|
| `kategori` | string | Filter berdasarkan kategori | `?kategori=Seni` |

**Kategori yang valid:**
- `Seni`
- `Sains`
- `Prestasi`
- `Teknologi`
- `Semua` (default, tidak perlu dikirim)

### Response Success (200)

```json
{
  "success": true,
  "total": 8,
  "data": [
    {
      "id": 1,
      "judul": "Lukisan Abstrak — Harmoni Alam",
      "deskripsi": "Karya lukis cat air yang menggambarkan...",
      "penulis": "Anisa Rahmawati",
      "kelas": "XI IPA 2",
      "kategori": "Seni",
      "gambar": "https://picsum.photos/seed/art1/600/800",
      "tanggal": "2024-05-20",
      "tinggi": "lg"
    }
  ]
}
```

### Response Error (500)

```json
{
  "success": false,
  "message": "Terjadi kesalahan server."
}
```

### Contoh Penggunaan

```typescript
// Semua karya
const response = await fetch('/api/karya-siswa');

// Filter kategori Seni
const response = await fetch('/api/karya-siswa?kategori=Seni');

// Filter kategori Teknologi
const response = await fetch('/api/karya-siswa?kategori=Teknologi');
```

---

## 3️⃣ GET /api/ekskul

Mendapatkan daftar ekstrakurikuler.

### Request

```http
GET /api/ekskul
```

### Query Parameters (Opsional)

| Parameter | Type | Deskripsi | Contoh |
|-----------|------|-----------|--------|
| `kategori` | string | Filter berdasarkan kategori | `?kategori=Olahraga` |

**Kategori yang valid:**
- `Seni`
- `Olahraga`
- `Teknologi`
- `Bahasa`
- `Semua` (default)

### Response Success (200)

```json
{
  "success": true,
  "total": 8,
  "data": [
    {
      "id": 1,
      "nama": "Paduan Suara",
      "deskripsi": "Mengembangkan bakat vokal dan harmoni...",
      "kategori": "Seni",
      "gambar": "https://picsum.photos/seed/choir/400/300",
      "anggota": 45,
      "jadwal": "Selasa & Kamis, 15.00–17.00",
      "ikon": "Music"
    }
  ]
}
```

### Response Error (500)

```json
{
  "success": false,
  "message": "Terjadi kesalahan server."
}
```

### Contoh Penggunaan

```typescript
// Semua ekskul
const response = await fetch('/api/ekskul');

// Filter Olahraga
const response = await fetch('/api/ekskul?kategori=Olahraga');
```

---

## 4️⃣ Server Action: submitPendaftaran

Submit formulir pendaftaran PPDB (Penerimaan Peserta Didik Baru).

### Cara Penggunaan

**Di komponen React dengan `useFormState`:**

```tsx
"use client";

import { useFormState } from "react-dom";
import { submitPendaftaran } from "@/lib/actions";

export default function FormPPDB() {
  const [state, formAction] = useFormState(submitPendaftaran, null);

  return (
    <form action={formAction}>
      <input name="namaLengkap" required />
      <input name="asalSekolah" required />
      <input name="nilaiRataRata" type="number" required />
      <input name="email" type="email" required />
      <input name="noTelp" required />
      <select name="pilihan" required>
        <option value="IPA">IPA</option>
        <option value="IPS">IPS</option>
        <option value="Bahasa">Bahasa</option>
      </select>
      <button type="submit">Kirim</button>
      
      {state && <p>{state.message}</p>}
    </form>
  );
}
```

### Input Data (FormData)

| Field | Type | Required | Validasi | Contoh |
|-------|------|----------|----------|--------|
| `namaLengkap` | string | ✅ | Min 3 karakter | "Ahmad Fauzi" |
| `asalSekolah` | string | ✅ | Min 3 karakter | "SMP Negeri 1 Jakarta" |
| `nilaiRataRata` | number | ✅ | 0-100 | 85.5 |
| `email` | string | ✅ | Format email valid | "ahmad@email.com" |
| `noTelp` | string | ✅ | - | "081234567890" |
| `pilihan` | string | ✅ | IPA/IPS/Bahasa | "IPA" |

### Response Success

```typescript
{
  success: true,
  message: "Pendaftaran atas nama Ahmad Fauzi berhasil dikirim! Nomor pendaftaran Anda akan dikirim ke ahmad@email.com.",
  data: {
    namaLengkap: "Ahmad Fauzi",
    asalSekolah: "SMP Negeri 1 Jakarta",
    nilaiRataRata: 85.5,
    email: "ahmad@email.com",
    noTelp: "081234567890",
    pilihan: "IPA"
  }
}
```

### Response Error (Validasi Gagal)

```typescript
{
  success: false,
  message: "Nama lengkap minimal 3 karakter. Format email tidak valid."
}
```

### Validasi yang Dilakukan

1. **Nama Lengkap:** Minimal 3 karakter
2. **Asal Sekolah:** Minimal 3 karakter
3. **Nilai Rata-rata:** Harus angka antara 0-100
4. **Email:** Format email valid (regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
5. **Pilihan Jurusan:** Tidak boleh kosong

### Catatan Penting

⚠️ **Saat ini Server Action hanya melakukan `console.log` data.**

Untuk produksi, ganti dengan operasi database:

```typescript
// Contoh dengan Prisma
await prisma.pendaftaran.create({
  data: rawData
});

// Kirim email notifikasi
await sendEmail({
  to: rawData.email,
  subject: "Pendaftaran PPDB Berhasil",
  body: `Terima kasih ${rawData.namaLengkap}...`
});
```

---

## 🔐 Authentication & Authorization

**Status saat ini:** Tidak ada autentikasi.

Untuk produksi, tambahkan:
- **NextAuth.js** atau **Clerk** untuk autentikasi
- **Middleware** untuk proteksi route
- **API Key** untuk endpoint tertentu

Contoh middleware:

```typescript
// middleware.ts
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const apiKey = request.headers.get('x-api-key');
  
  if (apiKey !== process.env.API_KEY) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
```

---

## 📊 Rate Limiting

**Status saat ini:** Tidak ada rate limiting.

Untuk produksi, gunakan:
- **Vercel Edge Config** (jika deploy di Vercel)
- **Upstash Redis** untuk rate limiting
- **Middleware** untuk throttling

---

## 🧪 Testing API

### Menggunakan Browser
Buka URL langsung di browser:
```
http://localhost:3000/api/pengumuman
http://localhost:3000/api/karya-siswa?kategori=Seni
```

### Menggunakan cURL
```bash
# GET pengumuman
curl http://localhost:3000/api/pengumuman

# GET dengan filter
curl "http://localhost:3000/api/karya-siswa?kategori=Teknologi"
```

### Menggunakan Postman / Insomnia
1. Buat request baru
2. Method: `GET`
3. URL: `http://localhost:3000/api/pengumuman`
4. Send

### Menggunakan JavaScript Fetch
```javascript
fetch('http://localhost:3000/api/pengumuman')
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🚀 Deployment Considerations

### Environment Variables
Buat file `.env.local` untuk konfigurasi:

```env
# Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# API Keys
API_SECRET_KEY="your-secret-key"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

### CORS (jika API diakses dari domain lain)
Tambahkan di `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
        ],
      },
    ];
  },
};
```

---

## 📚 Referensi

- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [Next.js Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
- [HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

---

**Happy Coding! 🚀**
