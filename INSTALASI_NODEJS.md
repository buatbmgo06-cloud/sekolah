# 📥 Panduan Instalasi Node.js untuk Windows

Sebelum menjalankan aplikasi website sekolah ini, Anda perlu menginstall **Node.js** terlebih dahulu.

---

## ✅ Cek Apakah Node.js Sudah Terinstall

Buka **Command Prompt** atau **PowerShell**, lalu ketik:

```bash
node -v
npm -v
```

Jika muncul versi (contoh: `v20.11.0` dan `10.2.4`), berarti Node.js sudah terinstall. **Anda bisa langsung skip ke bagian "Menjalankan Aplikasi".**

Jika muncul error `'node' is not recognized...`, lanjutkan ke langkah instalasi di bawah.

---

## 🚀 Cara Install Node.js

### **Opsi 1: Download Langsung (Paling Mudah)** ⭐ Direkomendasikan

1. **Buka website resmi Node.js:**
   👉 [https://nodejs.org](https://nodejs.org)

2. **Download versi LTS (Long Term Support):**
   - Klik tombol hijau bertuliskan **"LTS"** (contoh: v20.x.x)
   - File yang didownload: `node-v20.x.x-x64.msi`

3. **Jalankan installer:**
   - Double-click file `.msi` yang sudah didownload
   - Klik **Next** → **Next** → **Install**
   - Centang opsi **"Automatically install the necessary tools"** (opsional)
   - Tunggu hingga selesai, lalu klik **Finish**

4. **Restart terminal:**
   - Tutup semua jendela Command Prompt / PowerShell / Kiro
   - Buka kembali terminal baru

5. **Verifikasi instalasi:**
   ```bash
   node -v
   npm -v
   ```
   Jika muncul versi, instalasi berhasil! ✅

---

### **Opsi 2: Menggunakan `winget` (Windows Package Manager)**

Jika Windows Anda sudah memiliki `winget` (Windows 10/11 versi terbaru):

1. Buka **PowerShell** atau **Command Prompt**
2. Jalankan perintah:
   ```bash
   winget install OpenJS.NodeJS.LTS
   ```
3. Tunggu hingga selesai
4. Restart terminal
5. Verifikasi:
   ```bash
   node -v
   npm -v
   ```

---

### **Opsi 3: Menggunakan `nvm-windows` (Node Version Manager)** 🔧 Untuk Developer

Jika Anda ingin mengelola **banyak versi Node.js** (berguna untuk proyek berbeda):

1. **Download nvm-windows:**
   👉 [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)

2. **Download file `nvm-setup.exe`** (bukan `nvm-noinstall.zip`)

3. **Jalankan installer:**
   - Double-click `nvm-setup.exe`
   - Ikuti wizard instalasi (Next → Next → Install)

4. **Install Node.js LTS:**
   Buka terminal baru, lalu jalankan:
   ```bash
   nvm install lts
   nvm use lts
   ```

5. **Verifikasi:**
   ```bash
   node -v
   npm -v
   ```

**Keuntungan nvm-windows:**
- Bisa install banyak versi Node.js
- Ganti versi dengan mudah: `nvm use 18` atau `nvm use 20`
- Cocok untuk developer yang kerja di banyak proyek

---

## 🎯 Setelah Node.js Terinstall

### 1. Masuk ke folder proyek:
```bash
cd C:\Users\ferdi\suka\sekolah-app
```

### 2. Install dependencies:
```bash
npm install
```
Proses ini akan mendownload semua library yang dibutuhkan (Next.js, React, Tailwind, dll). **Tunggu hingga selesai** (bisa 1-3 menit tergantung koneksi internet).

### 3. Jalankan development server:
```bash
npm run dev
```

### 4. Buka browser:
Akses **http://localhost:3000**

Anda akan melihat website sekolah berjalan! 🎉

---

## 🛠️ Troubleshooting

### ❌ Error: `'node' is not recognized...`
**Solusi:**
- Pastikan Node.js sudah terinstall dengan benar
- Restart terminal / komputer
- Cek PATH environment variable (Node.js harus ada di PATH)

### ❌ Error: `npm ERR! code ENOENT`
**Solusi:**
- Pastikan Anda berada di folder proyek yang benar
- Jalankan `npm install` terlebih dahulu

### ❌ Error: `Port 3000 is already in use`
**Solusi:**
- Ada aplikasi lain yang menggunakan port 3000
- Matikan aplikasi tersebut, atau
- Jalankan dengan port lain: `npm run dev -- -p 3001`

### ❌ Error saat `npm install`
**Solusi:**
- Cek koneksi internet
- Hapus folder `node_modules` dan file `package-lock.json`
- Jalankan ulang `npm install`

---

## 📚 Perintah NPM yang Berguna

| Perintah | Fungsi |
|----------|--------|
| `npm install` | Install semua dependencies |
| `npm run dev` | Jalankan development server |
| `npm run build` | Build untuk production |
| `npm start` | Jalankan production server |
| `npm run lint` | Cek kode dengan ESLint |

---

## 🔗 Referensi

- **Node.js Official:** [https://nodejs.org](https://nodejs.org)
- **npm Documentation:** [https://docs.npmjs.com](https://docs.npmjs.com)
- **nvm-windows:** [https://github.com/coreybutler/nvm-windows](https://github.com/coreybutler/nvm-windows)

---

## ✅ Checklist Instalasi

- [ ] Node.js terinstall (`node -v` menampilkan versi)
- [ ] npm terinstall (`npm -v` menampilkan versi)
- [ ] Sudah masuk ke folder proyek (`cd sekolah-app`)
- [ ] Dependencies terinstall (`npm install` berhasil)
- [ ] Development server berjalan (`npm run dev`)
- [ ] Website bisa diakses di browser (http://localhost:3000)

---

**Jika masih ada masalah, silakan hubungi developer atau buka issue di GitHub repository! 🙋‍♂️**
