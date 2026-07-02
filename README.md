# OTSKY GitHub Pages + Google Sheet CMS

Paket ini berisi website static OTSKY untuk GitHub Pages dengan admin no-code yang terhubung ke Google Sheet.

## Flow

```text
index.html membaca konten dari Apps Script / Google Sheet
admin.html mengedit konten lewat form
Apps Script menulis perubahan ke Google Sheet
content.json menjadi fallback/backup
```

## Upload ke GitHub

Upload semua file/folder ini ke root repository:

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
```

Lalu aktifkan GitHub Pages:

```text
Settings > Pages > Deploy from a branch > main > /root
```

## Setup CMS

Ikuti panduan lengkap di:

```text
GOOGLE_SHEET_CMS_GUIDE.md
```

## Edit konten

Buka:

```text
https://USERNAME.github.io/NAMA-REPO/admin.html
```

Isi Apps Script Web App URL dan CMS_WRITE_KEY, lalu klik `Load dari GSheet` atau `Simpan ke GSheet`.

## Penting

- Jangan commit token Google atau service account key.
- `CMS_WRITE_KEY` hanya dimasukkan saat save dari admin.
- `content.json` tetap berguna sebagai fallback kalau Apps Script/Google Sheet error.

## Foto produk dari Google Drive

Versi ini mendukung foto dari Google Drive. Di admin, field gambar bisa diisi dengan link share Google Drive, file ID Drive, URL gambar biasa, atau upload langsung ke Google Drive lewat tombol `Upload ke GDrive`. Detail setup ada di `GDRIVE_IMAGE_GUIDE.md`.
