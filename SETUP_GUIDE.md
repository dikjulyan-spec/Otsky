# Setup GitHub Pages + Google Sheet CMS

## 1. Upload ke GitHub

Upload file/folder berikut ke root repository GitHub Pages:

```text
index.html
admin.html
content.json
config.js
.nojekyll
apps-script/Code.gs
README.md
SETUP_GUIDE.md
```

Aktifkan GitHub Pages:

```text
Repository > Settings > Pages > Deploy from a branch > main > /root
```

## 2. Buat Google Sheet

Buat spreadsheet baru, misalnya:

```text
OTSKY Website CMS
```

## 3. Pasang Apps Script

1. Di Google Sheet, klik `Extensions > Apps Script`.
2. Hapus kode bawaan.
3. Paste isi file:

```text
apps-script/Code.gs
```

4. Klik save.

## 4. Isi Script Properties

Buka:

```text
Project Settings > Script Properties
```

Tambahkan:

```text
OTSKY_ADMIN_KEY = isi_password_admin_kamu
```

Opsional kalau script tidak bound ke Sheet:

```text
OTSKY_SPREADSHEET_ID = id_google_sheet_kamu
```

## 5. Buat tab CMS otomatis

Di Apps Script, jalankan function:

```text
setupOtskyLiteCms
```

Saat pertama kali jalan, Google akan minta authorization. Ikuti prosesnya.

Function ini akan membuat tab:

```text
announcement
categories
products
promos
```

## 6. Deploy Apps Script sebagai Web App

Klik:

```text
Deploy > New deployment > Web app
```

Gunakan setting:

```text
Execute as: Me
Who has access: Anyone
```

Copy Web App URL yang berakhiran:

```text
/exec
```

## 7. Isi config.js

Edit `config.js` di GitHub:

```js
window.OTSKY_CMS_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/XXXXX/exec",
  fallbackContentUrl: "content.json",
  loadTimeoutMs: 12000
};
```

Commit perubahan.

## 8. Pakai admin

Buka:

```text
https://USERNAME.github.io/NAMA-REPO/admin.html
```

Isi:

```text
Apps Script Web App URL
Admin key
```

Lalu klik:

```text
Muat GSheet
```

Setelah edit, klik:

```text
Simpan ke GSheet
```

## 9. Troubleshooting

### Website tidak berubah setelah simpan

Cek:

- Apps Script URL sudah benar dan berakhiran `/exec`.
- Deployment sudah versi terbaru.
- Admin key sama dengan `OTSKY_ADMIN_KEY`.
- Sheet punya tab `announcement`, `categories`, `products`, `promos`.
- Tunggu beberapa detik lalu refresh website.

### Foto Drive tidak muncul

Cek:

- File foto sudah `Anyone with the link - Viewer`.
- Link yang dipaste adalah link file, bukan link folder.
- File bukan data private.

### Admin gagal verifikasi simpan

Karena GitHub Pages dan Apps Script beda domain, admin mengirim save dengan mode aman tanpa membaca response langsung. Admin akan memuat ulang data setelah beberapa detik. Kalau warning tetap muncul, cek Google Sheet apakah datanya berubah.
