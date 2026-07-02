# Deploy OTSKY Website ke GitHub Pages

## 1. Upload file ke repository

Upload semua file/folder ke root repository:

```text
index.html
admin.html
cms-config.js
content.json
.nojekyll
assets/
apps-script/Code.gs
GOOGLE_SHEET_CMS_GUIDE.md
README.md
GITHUB_PAGES_GUIDE.md
```

## 2. Aktifkan GitHub Pages

Masuk ke repository GitHub:

```text
Settings > Pages
```

Pilih:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

Klik `Save`.

Website akan aktif di format:

```text
https://USERNAME.github.io/NAMA-REPO/
```

Admin akan aktif di:

```text
https://USERNAME.github.io/NAMA-REPO/admin.html
```

## 3. Hubungkan ke Google Sheet CMS

Ikuti file:

```text
GOOGLE_SHEET_CMS_GUIDE.md
```

Ringkasnya:

1. Buat Google Sheet.
2. Buka `Extensions > Apps Script`.
3. Paste isi `apps-script/Code.gs`.
4. Jalankan `setupCMS()`.
5. Deploy sebagai Web App.
6. Salin URL `/exec`.
7. Masukkan URL tersebut ke `cms-config.js`.

## 4. Cara edit konten

Buka:

```text
/admin.html
```

Lalu:

1. Klik `Load dari GSheet`.
2. Edit konten lewat form admin.
3. Klik `Preview`.
4. Klik `Simpan ke GSheet`.
5. Masukkan `CMS_WRITE_KEY` dari Apps Script.

## Catatan

- Tidak perlu GitHub token untuk edit konten.
- `content.json` hanya fallback/backup.
- Jangan commit `CMS_WRITE_KEY`, token Google, client secret, atau service account key ke GitHub.
