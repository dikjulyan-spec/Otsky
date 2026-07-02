# OTSKY Lite Admin CMS

Versi ini sengaja dibuat minimal. Admin hanya mengelola:

1. Popup penting
2. Text berjalan / announcement ticker
3. Kategori
4. Produk
5. Promo

Website tetap bisa dipakai di GitHub Pages. Data utama disimpan di Google Sheet lewat Apps Script.

## File penting

- `index.html` - halaman website publik
- `admin.html` - admin minimal
- `content.json` - fallback data kalau GSheet belum aktif
- `config.js` - tempat isi Apps Script Web App URL
- `apps-script/Code.gs` - backend Google Apps Script
- `.nojekyll` - agar GitHub Pages serve file static apa adanya

## Cara edit konten

1. Buka `admin.html`.
2. Isi Apps Script Web App URL.
3. Isi Admin key.
4. Klik `Muat GSheet`.
5. Edit salah satu bagian:
   - Pengumuman
   - Kategori
   - Produk
   - Promo
6. Klik `Simpan ke GSheet`.

## Foto produk/kategori/promo dari Google Drive

Admin ini tidak memakai upload langsung supaya tetap ringan.

Cara pakai foto Drive:

1. Upload foto ke Google Drive.
2. Klik kanan file > Share.
3. Set akses menjadi `Anyone with the link` dan role `Viewer`.
4. Copy share link.
5. Paste ke kolom gambar di admin.
6. Simpan ke GSheet.

Website akan mengubah link Google Drive menjadi thumbnail publik otomatis.

## Catatan keamanan

- Jangan taruh Admin key di GitHub.
- Admin key hanya diisi di browser admin dan tersimpan di localStorage perangkat kamu.
- Apps Script URL boleh ada di `config.js`, tapi admin key jangan.
- File foto Drive yang dipakai di website harus dianggap public asset.
