# OTSKY Website CMS - GitHub Pages + Google Sheet

## Tujuan

Paket ini membuat flow:

```text
admin.html -> Apps Script Web App -> Google Sheet -> index.html
```

Admin tetap berbentuk form/kolom. Konten website disimpan di Google Sheet. Website public di GitHub Pages membaca data dari Sheet melalui Apps Script.

## File penting

- `index.html` - website public.
- `admin.html` - editor no-code.
- `cms-config.js` - tempat isi URL Apps Script Web App.
- `content.json` - fallback/backup kalau Google Sheet gagal dimuat.
- `apps-script/Code.gs` - backend Apps Script untuk baca/tulis Google Sheet.

## Setup Google Sheet CMS

### 1. Buat Google Sheet

Buat spreadsheet baru, misalnya:

```text
OTSKY Website CMS
```

### 2. Buka Apps Script

Dari Google Sheet:

```text
Extensions > Apps Script
```

Hapus isi default, lalu paste semua isi file:

```text
apps-script/Code.gs
```

### 3. Jalankan setupCMS

Di Apps Script:

1. Pilih function `setupCMS`.
2. Klik `Run`.
3. Authorize akses spreadsheet.
4. Buka `Executions` atau `Execution log`.
5. Salin nilai:

```text
CMS_WRITE_KEY: xxxxxxxxxx
```

Key ini dipakai di `admin.html` saat menyimpan perubahan.

### 4. Deploy sebagai Web App

Di Apps Script:

```text
Deploy > New deployment > Web app
```

Setting:

```text
Execute as: Me
Who has access: Anyone
```

Klik Deploy, lalu salin URL yang berakhiran:

```text
/exec
```

Contoh:

```text
https://script.google.com/macros/s/AKfycbxxxxxxxx/exec
```

### 5. Isi cms-config.js

Edit file `cms-config.js` di GitHub:

```js
window.OTSKY_CMS = {
  googleSheetEndpoint: "https://script.google.com/macros/s/AKfycbxxxxxxxx/exec",
  fallbackContentUrl: "content.json",
  requestTimeoutMs: 15000
};
```

Jangan isi token Google, password Google, client secret, atau service account key di file ini.

## Cara edit konten

Buka:

```text
https://USERNAME.github.io/NAMA-REPO/admin.html
```

Lalu:

1. Klik `Load dari GSheet` untuk ambil konten terbaru.
2. Edit form sesuai kebutuhan.
3. Klik `Preview` untuk cek tampilan.
4. Klik `Simpan ke GSheet`.
5. Isi Apps Script Web App URL dan `CMS_WRITE_KEY`.
6. Klik `Simpan ke GSheet`.
7. Refresh `index.html`.

## Struktur tab di Google Sheet

Apps Script akan membuat tab:

- `settings`
- `navigation`
- `hero_badges`
- `hero_stats`
- `trust`
- `categories`
- `products`
- `promos`
- `story_paragraphs`
- `story_highlights`
- `lookbook`
- `channels`
- `faq`
- `footer_links`

Kolom `active` bisa diubah menjadi `FALSE` untuk menyembunyikan row dari website.

## Catatan keamanan

- `CMS_WRITE_KEY` bukan token Google; ini password sederhana untuk mencegah orang random menulis ke Sheet.
- Jangan simpan `CMS_WRITE_KEY` di GitHub repo.
- Jangan simpan token Google, client secret, atau service account key di frontend.
- Kalau key bocor, buka Apps Script dan jalankan `resetWriteKey()`.

## Troubleshooting

### Website masih menampilkan konten lama

- Cek `cms-config.js`, pastikan `googleSheetEndpoint` sudah diisi URL `/exec`.
- Pastikan deployment Apps Script adalah Web App, bukan library/API executable.
- Setelah edit Apps Script, deploy ulang sebagai versi baru.

### Admin gagal save

- Pastikan `CMS_WRITE_KEY` benar.
- Pastikan Web App access: `Anyone`.
- Pastikan Web App execute as: `Me`.
- Coba klik `Test Koneksi` dari admin.

### Data Sheet hilang / rusak

- Gunakan Google Sheet version history.
- Gunakan tombol `Export Backup JSON` di admin secara berkala.
- Kalau perlu reset struktur tab, jalankan ulang `setupCMS()`.
