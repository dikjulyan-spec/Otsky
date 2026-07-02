# Panduan setup Google Sheet CMS

## 1. Upload website ke GitHub

Upload file ini ke root repository:

```text
index.html
admin.html
config.js
content.json
.nojekyll
assets/
apps-script/
README.md
GOOGLE_SHEETS_CMS_GUIDE.md
```

Aktifkan GitHub Pages dari `Settings > Pages > Deploy from branch > main > /(root)`.

## 2. Buat Google Sheet

Buat Google Sheet baru, misalnya:

```text
OTSKY Website CMS
```

## 3. Pasang Apps Script

1. Di Google Sheet, buka `Extensions > Apps Script`.
2. Hapus kode default.
3. Copy isi file `apps-script/Code.gs`.
4. Paste ke `Code.gs`.
5. Save project.

## 4. Set admin key

Di Apps Script:

1. Buka `Project Settings`.
2. Scroll ke `Script Properties`.
3. Tambahkan property:

```text
Property: OTSKY_ADMIN_KEY
Value: isi_password_admin_yang_panjang
```

Contoh value yang lebih aman:

```text
otsky-2026-website-cms-CHANGE-ME-82xK
```

Jangan gunakan contoh itu apa adanya untuk production.

## 5. Jalankan setup

1. Pilih function `setupOtskyCms`.
2. Klik `Run`.
3. Beri izin akses Google Sheet saat diminta.
4. Setelah sukses, Google Sheet akan punya tab seperti:
   - `settings`
   - `navigation`
   - `products`
   - `promos`
   - `channels`
   - `faq`
   - dan tab lain.

## 6. Deploy Apps Script sebagai Web App

1. Klik `Deploy > New deployment`.
2. Pilih type `Web app`.
3. Isi:

```text
Execute as: Me
Who has access: Anyone
```

4. Klik `Deploy`.
5. Copy `Web App URL` yang berakhiran `/exec`.

## 7. Hubungkan ke GitHub Pages

Buka `config.js`, isi:

```js
window.OTSKY_CMS_CONFIG = {
  apiUrl: "https://script.google.com/macros/s/AKfycbx.../exec",
  fallbackContentUrl: "content.json",
  gsheetLoadTimeoutMs: 12000
};
```

Commit perubahan ke GitHub.

## 8. Edit konten dari admin

Buka:

```text
https://USERNAME.github.io/NAMA-REPO/admin.html
```

Lalu:

1. Klik `Muat GSheet` untuk mengambil konten terbaru.
2. Edit field/kolom admin.
3. Klik `Preview`.
4. Klik `Simpan ke GSheet`.
5. Isi admin key.
6. Klik `Simpan perubahan`.

## 9. Edit langsung dari Google Sheet

Bisa juga. Ubah isi tab seperti `products`, `faq`, `channels`, lalu reload website.

Kolom `active` bisa diisi:

```text
TRUE = tampil
FALSE = sembunyikan
```

## Troubleshooting

### Website masih tampil konten lama

- Pastikan `config.js` sudah berisi URL `/exec`, bukan URL `/dev`.
- Hard refresh browser.
- Cek apakah deployment Apps Script sudah versi terbaru.

### Admin gagal simpan

- Cek admin key sama dengan `OTSKY_ADMIN_KEY` di Script Properties.
- Pastikan Web App access = `Anyone`.
- Pastikan deploy dijalankan sebagai `Me`.
- Jalankan ulang `setupOtskyCms` jika tab belum terbentuk.

### Data Google Sheet berubah tapi website belum berubah

- Reload website.
- Pastikan tidak ada typo di header kolom Sheet.
- Jangan hapus baris header.

## Foto produk dari Google Drive

Versi ini mendukung foto dari Google Drive. Di admin, field gambar bisa diisi dengan link share Google Drive, file ID Drive, URL gambar biasa, atau upload langsung ke Google Drive lewat tombol `Upload ke GDrive`. Detail setup ada di `GDRIVE_IMAGE_GUIDE.md`.
