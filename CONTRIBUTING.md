# 🤝 Contributing Guide

Terima kasih atas minat Anda untuk berkontribusi pada proyek Website Sekolah ini! Dokumen ini berisi panduan untuk berkontribusi.

---

## 📋 Cara Berkontribusi

### 1. Fork Repository
Klik tombol "Fork" di GitHub untuk membuat copy repository ke akun Anda.

### 2. Clone Repository
```bash
git clone https://github.com/username/sekolah-app.git
cd sekolah-app
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Buat Branch Baru
```bash
git checkout -b feature/nama-fitur
# atau
git checkout -b fix/nama-bug
```

**Naming convention:**
- `feature/` — Fitur baru
- `fix/` — Bug fix
- `docs/` — Perubahan dokumentasi
- `refactor/` — Refactoring kode
- `style/` — Perubahan styling
- `test/` — Menambah/update tests

### 5. Lakukan Perubahan
Edit file yang diperlukan, lalu test perubahan Anda:

```bash
npm run dev
```

Buka http://localhost:3000 dan pastikan semua berfungsi dengan baik.

### 6. Commit Changes
```bash
git add .
git commit -m "Add: fitur baru untuk halaman guru"
```

**Commit message format:**
- `Add:` — Menambah fitur baru
- `Fix:` — Memperbaiki bug
- `Update:` — Update fitur existing
- `Remove:` — Menghapus fitur
- `Refactor:` — Refactoring kode
- `Docs:` — Update dokumentasi
- `Style:` — Perubahan styling

### 7. Push ke GitHub
```bash
git push origin feature/nama-fitur
```

### 8. Buat Pull Request
1. Buka repository Anda di GitHub
2. Klik "Compare & pull request"
3. Isi deskripsi PR dengan jelas
4. Submit PR

---

## ✅ Checklist Sebelum Submit PR

- [ ] Kode berjalan tanpa error (`npm run dev`)
- [ ] Build berhasil (`npm run build`)
- [ ] Tidak ada error ESLint (`npm run lint`)
- [ ] Kode sudah di-format dengan baik
- [ ] Sudah test di browser (Chrome, Firefox, Safari)
- [ ] Responsif di mobile, tablet, desktop
- [ ] Dark mode berfungsi (jika ada perubahan UI)
- [ ] Dokumentasi sudah diupdate (jika perlu)
- [ ] CHANGELOG.md sudah diupdate

---

## 🎯 Jenis Kontribusi

### 1. Bug Reports
Jika menemukan bug, buat issue dengan informasi:
- Deskripsi bug
- Langkah untuk reproduce
- Expected behavior vs actual behavior
- Screenshot (jika ada)
- Browser & OS yang digunakan

**Template:**
```markdown
**Deskripsi Bug:**
Form PPDB tidak bisa submit

**Langkah Reproduce:**
1. Buka halaman /ppdb
2. Isi semua field
3. Klik tombol "Kirim Pendaftaran"
4. Tidak ada response

**Expected:**
Muncul alert sukses

**Actual:**
Tidak ada response, form tidak ter-submit

**Screenshot:**
[attach screenshot]

**Environment:**
- Browser: Chrome 120
- OS: Windows 11
```

### 2. Feature Requests
Jika ingin request fitur baru, buat issue dengan:
- Deskripsi fitur
- Use case / alasan kenapa fitur ini penting
- Mockup/wireframe (jika ada)

### 3. Code Contributions
- Bug fixes
- Fitur baru
- Refactoring
- Performance improvements
- Accessibility improvements

### 4. Documentation
- Perbaiki typo
- Tambah contoh kode
- Perbaiki penjelasan yang kurang jelas
- Translate dokumentasi

### 5. Design
- UI/UX improvements
- Mockup untuk fitur baru
- Icon/illustration

---

## 📝 Coding Standards

### TypeScript
```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

function getUser(id: number): User {
  // ...
}

// ❌ Bad
function getUser(id) {
  // ...
}
```

### React Components
```tsx
// ✅ Good — Functional component dengan TypeScript
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button onClick={onClick} className={`btn-${variant}`}>
      {label}
    </button>
  );
}

// ❌ Bad — Tanpa types
export default function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
```

### Naming Conventions
- **Components:** PascalCase (`Navbar.tsx`, `MadingCard.tsx`)
- **Functions:** camelCase (`submitPendaftaran`, `fetchData`)
- **Constants:** UPPER_SNAKE_CASE (`API_BASE_URL`, `MAX_ITEMS`)
- **CSS Classes:** kebab-case (`btn-primary`, `card-hover`)

### File Structure
```
components/
  ├── Navbar.tsx          # Component
  ├── MadingCard.tsx      # Component
  └── ...

lib/
  ├── types.ts            # Type definitions
  ├── utils.ts            # Utility functions
  └── ...

app/
  ├── page.tsx            # Page component
  ├── layout.tsx          # Layout
  └── ...
```

### Comments
```typescript
// ✅ Good — Komentar yang berguna
// Validasi email menggunakan regex sederhana
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ❌ Bad — Komentar yang tidak perlu
// Set x to 5
const x = 5;
```

### Tailwind CSS
```tsx
// ✅ Good — Gunakan utility classes
<div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl">

// ❌ Bad — Inline styles
<div style={{ display: "flex", padding: "24px", background: "white" }}>
```

---

## 🧪 Testing

Sebelum submit PR, pastikan:

### Manual Testing
1. **Functionality:** Semua fitur berfungsi
2. **Responsiveness:** Test di berbagai ukuran layar
3. **Cross-browser:** Test di Chrome, Firefox, Safari
4. **Dark mode:** Toggle tema berfungsi
5. **Performance:** Tidak ada lag/freeze

### Automated Testing (Coming Soon)
```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e
```

---

## 🚀 Development Workflow

### 1. Setup Development Environment
```bash
# Clone & install
git clone https://github.com/username/sekolah-app.git
cd sekolah-app
npm install

# Jalankan dev server
npm run dev
```

### 2. Make Changes
- Edit file yang diperlukan
- Test perubahan di browser
- Commit secara incremental (jangan 1 commit besar)

### 3. Before Push
```bash
# Lint kode
npm run lint

# Build test
npm run build

# Jika ada error, fix dulu sebelum push
```

### 4. Submit PR
- Push ke branch Anda
- Buat PR dengan deskripsi jelas
- Tunggu review dari maintainer

---

## 📚 Resources

### Dokumentasi Proyek
- `README.md` — Overview proyek
- `STRUKTUR_PROYEK.md` — Struktur folder
- `API_DOCUMENTATION.md` — API docs

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Docs](https://react.dev)

---

## 💬 Communication

### GitHub Issues
Gunakan GitHub Issues untuk:
- Bug reports
- Feature requests
- Questions

### Pull Requests
- Jelaskan perubahan yang Anda buat
- Reference issue yang terkait (jika ada)
- Tambahkan screenshot untuk perubahan UI

---

## 🎖️ Recognition

Semua kontributor akan dicantumkan di:
- README.md (Contributors section)
- GitHub Contributors page

---

## ❓ Questions?

Jika ada pertanyaan, silakan:
1. Baca dokumentasi terlebih dahulu
2. Search di GitHub Issues
3. Buat issue baru dengan label "question"

---

**Terima kasih atas kontribusi Anda! 🙏**
