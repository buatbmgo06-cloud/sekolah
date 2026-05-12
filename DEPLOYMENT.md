# 🚀 Panduan Deployment — Website Sekolah

Panduan lengkap untuk deploy aplikasi website sekolah ke berbagai platform hosting.

---

## 📋 Persiapan Sebelum Deploy

### 1. Build Test lokal
Pastikan aplikasi bisa di-build tanpa error:

```bash
npm run build
```

Jika berhasil, akan muncul output seperti:
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
✓ Finalizing page optimization
```

### 2. Test production build
```bash
npm start
```

Buka `http://localhost:3000` dan pastikan semua fitur berjalan normal.

### 3. Checklist sebelum deploy
- [ ] Semua fitur berfungsi dengan baik
- [ ] Tidak ada error di console browser
- [ ] Responsif di mobile, tablet, dan desktop
- [ ] Dark mode berfungsi
- [ ] Form PPDB bisa submit
- [ ] API endpoints mengembalikan data yang benar
- [ ] Gambar loading dengan baik
- [ ] SEO metadata sudah diatur (cek `app/layout.tsx`)

---

## 🌐 Opsi Platform Hosting

| Platform | Gratis? | Cocok untuk | Kesulitan |
|----------|---------|-------------|-----------|
| **Vercel** | ✅ | Next.js (native) | ⭐ Mudah |
| **Netlify** | ✅ | Static sites | ⭐⭐ Sedang |
| **Railway** | ⚠️ Trial | Full-stack + DB | ⭐⭐ Sedang |
| **Render** | ✅ | Full-stack | ⭐⭐ Sedang |
| **AWS / GCP** | ⚠️ Bayar | Enterprise | ⭐⭐⭐ Sulit |

**Rekomendasi:** **Vercel** (dibuat oleh tim Next.js, paling mudah dan optimal)

---

## 1️⃣ Deploy ke Vercel (Recommended) ⭐

### Mengapa Vercel?
- ✅ Dibuat khusus untuk Next.js
- ✅ Deploy otomatis dari Git
- ✅ Free tier sangat generous
- ✅ Edge functions & CDN global
- ✅ Preview deployment untuk setiap PR

### Langkah-langkah:

#### A. Persiapan
1. **Buat akun Vercel:**
   👉 [https://vercel.com/signup](https://vercel.com/signup)
   - Bisa login dengan GitHub, GitLab, atau Bitbucket

2. **Push kode ke Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/sekolah-app.git
   git push -u origin main
   ```

#### B. Deploy dari Vercel Dashboard

1. **Login ke Vercel Dashboard:**
   👉 [https://vercel.com/dashboard](https://vercel.com/dashboard)

2. **Klik "Add New Project"**

3. **Import Git Repository:**
   - Pilih repository `sekolah-app`
   - Klik "Import"

4. **Configure Project:**
   - **Framework Preset:** Next.js (auto-detected)
   - **Root Directory:** `./` (default)
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)

5. **Environment Variables (jika ada):**
   - Klik "Environment Variables"
   - Tambahkan variabel dari `.env.example`
   - Contoh:
     ```
     DATABASE_URL = postgresql://...
     SMTP_HOST = smtp.gmail.com
     ```

6. **Klik "Deploy"**

7. **Tunggu proses build (1-3 menit)**

8. **Selesai!** 🎉
   - URL: `https://sekolah-app-xxx.vercel.app`
   - Bisa custom domain nanti

#### C. Deploy dari CLI (Alternatif)

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

---

## 2️⃣ Deploy ke Netlify

### Langkah-langkah:

1. **Buat akun Netlify:**
   👉 [https://app.netlify.com/signup](https://app.netlify.com/signup)

2. **Push kode ke Git repository** (sama seperti Vercel)

3. **Di Netlify Dashboard:**
   - Klik "Add new site" → "Import an existing project"
   - Pilih Git provider (GitHub/GitLab/Bitbucket)
   - Pilih repository `sekolah-app`

4. **Build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Base directory:** (kosongkan)

5. **Environment variables:**
   - Tambahkan dari `.env.example`

6. **Klik "Deploy site"**

7. **Selesai!**
   - URL: `https://sekolah-app-xxx.netlify.app`

---

## 3️⃣ Deploy ke Railway (dengan Database)

Railway cocok jika Anda butuh database PostgreSQL/MySQL gratis.

### Langkah-langkah:

1. **Buat akun Railway:**
   👉 [https://railway.app](https://railway.app)

2. **Klik "New Project"**

3. **Pilih "Deploy from GitHub repo"**
   - Connect GitHub account
   - Pilih repository `sekolah-app`

4. **Railway akan auto-detect Next.js**

5. **Tambahkan Database (opsional):**
   - Klik "New" → "Database" → "PostgreSQL"
   - Railway akan generate `DATABASE_URL` otomatis

6. **Set Environment Variables:**
   - Klik tab "Variables"
   - Tambahkan variabel yang diperlukan

7. **Deploy otomatis berjalan**

8. **Generate domain:**
   - Klik "Settings" → "Generate Domain"
   - URL: `https://sekolah-app-production-xxx.up.railway.app`

---

## 4️⃣ Deploy ke VPS (Manual)

Untuk kontrol penuh, deploy ke VPS seperti DigitalOcean, Linode, atau AWS EC2.

### Persiapan VPS:

```bash
# 1. Update sistem
sudo apt update && sudo apt upgrade -y

# 2. Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# 3. Install PM2 (process manager)
sudo npm install -g pm2

# 4. Install Nginx (reverse proxy)
sudo apt install -y nginx

# 5. Clone repository
git clone https://github.com/username/sekolah-app.git
cd sekolah-app

# 6. Install dependencies
npm install

# 7. Build aplikasi
npm run build

# 8. Jalankan dengan PM2
pm2 start npm --name "sekolah-app" -- start
pm2 save
pm2 startup
```

### Konfigurasi Nginx:

```nginx
# /etc/nginx/sites-available/sekolah-app
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/sekolah-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### SSL dengan Let's Encrypt:

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## 🔐 Environment Variables untuk Production

Jangan hardcode secrets di kode! Set environment variables di platform hosting:

### Vercel:
```bash
vercel env add DATABASE_URL
vercel env add SMTP_HOST
```

Atau via dashboard: Project Settings → Environment Variables

### Netlify:
Site settings → Environment variables → Add variable

### Railway:
Project → Variables → New Variable

---

## 🗄️ Database Setup (Production)

### Opsi 1: Vercel Postgres
```bash
# Install Vercel Postgres
npm install @vercel/postgres

# Di Vercel Dashboard:
# Storage → Create Database → Postgres
```

### Opsi 2: Supabase (PostgreSQL gratis)
1. Buat akun di [https://supabase.com](https://supabase.com)
2. Create new project
3. Copy connection string
4. Set `DATABASE_URL` di environment variables

### Opsi 3: PlanetScale (MySQL gratis)
1. Buat akun di [https://planetscale.com](https://planetscale.com)
2. Create database
3. Copy connection string
4. Set `DATABASE_URL`

---

## 📊 Monitoring & Analytics

### 1. Vercel Analytics (built-in)
```bash
npm install @vercel/analytics
```

```tsx
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. Google Analytics
```tsx
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
  strategy="afterInteractive"
/>
```

---

## 🔄 CI/CD (Continuous Deployment)

### Vercel (otomatis):
- Setiap push ke `main` → auto deploy ke production
- Setiap PR → auto deploy preview

### GitHub Actions (manual):
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - run: npm run deploy # custom deploy script
```

---

## 🐛 Troubleshooting Deployment

### Error: "Module not found"
**Solusi:**
```bash
# Hapus node_modules dan reinstall
rm -rf node_modules package-lock.json
npm install
```

### Error: "Build failed"
**Solusi:**
- Cek error message di build log
- Pastikan `npm run build` berhasil di lokal
- Cek TypeScript errors: `npm run lint`

### Error: "Environment variable not found"
**Solusi:**
- Set environment variables di platform hosting
- Jangan lupa prefix `NEXT_PUBLIC_` untuk variabel yang diakses di client

### Error: "API route not working"
**Solusi:**
- Pastikan route file ada di `app/api/*/route.ts`
- Cek method HTTP (GET/POST) sudah benar
- Cek CORS jika API diakses dari domain lain

---

## 📚 Referensi

- **Vercel Docs:** [https://vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [https://docs.netlify.com](https://docs.netlify.com)
- **Railway Docs:** [https://docs.railway.app](https://docs.railway.app)
- **Next.js Deployment:** [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)

---

## ✅ Post-Deployment Checklist

- [ ] Website bisa diakses via URL production
- [ ] Semua halaman loading dengan benar
- [ ] API endpoints berfungsi
- [ ] Form PPDB bisa submit
- [ ] Dark mode berfungsi
- [ ] Gambar loading (cek CDN/image optimization)
- [ ] Mobile responsive
- [ ] SSL/HTTPS aktif (🔒)
- [ ] Custom domain terhubung (opsional)
- [ ] Analytics terpasang (opsional)
- [ ] Monitoring error (Sentry, LogRocket, dll)

---

**Selamat! Website sekolah Anda sudah live! 🎉**
