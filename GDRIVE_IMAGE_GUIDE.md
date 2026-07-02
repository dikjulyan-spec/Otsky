# Panduan Foto Produk dari Google Drive

Website ini mendukung dua cara memakai foto dari Google Drive.

## Opsi 1: Paste link Google Drive ke admin

1. Upload foto produk ke Google Drive.
2. Klik kanan file foto > Share.
3. Ubah akses menjadi `Anyone with the link` dan role `Viewer`.
4. Copy link.
5. Buka `admin.html`.
6. Masuk ke bagian `Produk`.
7. Paste link di field `Gambar produk`.
8. Klik `Preview` untuk cek tampilan.
9. Klik `Simpan ke GSheet`.

Field gambar juga menerima:

- Link Google Drive seperti `https://drive.google.com/file/d/FILE_ID/view?...`
- File ID Drive langsung
- URL gambar biasa
- Path lokal seperti `assets/foto-produk.jpg`

## Opsi 2: Upload foto dari admin ke Google Drive

1. Pastikan Apps Script sudah memakai `apps-script/Code.gs` versi terbaru dari paket ini.
2. Buka Apps Script > Project Settings > Script Properties.
3. Wajib ada:

```text
OTSKY_ADMIN_KEY = password_admin_kamu
```

4. Opsional, isi folder tujuan foto:

```text
OTSKY_IMAGE_FOLDER_ID = ID_FOLDER_GOOGLE_DRIVE
```

Kalau `OTSKY_IMAGE_FOLDER_ID` kosong, saat upload pertama Apps Script akan membuat folder otomatis bernama `OTSKY Website Images` dan menyimpan ID folder ke Script Properties.

5. Deploy ulang Apps Script sebagai Web App.
6. Buka `admin.html`.
7. Isi Apps Script Web App URL dan Admin key.
8. Di field `Gambar produk`, klik `Upload ke GDrive`.
9. Pilih file JPG, PNG, WEBP, atau GIF.
10. Setelah upload selesai, URL gambar akan masuk otomatis ke field.
11. Klik `Simpan ke GSheet`.

## Catatan teknis

- Foto akan dikompres di browser menjadi JPG maksimal sisi 1800 px agar upload lebih ringan.
- Maksimum upload setelah kompres sekitar 6 MB.
- Agar foto tampil di website publik GitHub Pages, file Drive harus bisa dilihat publik sebagai `Anyone with the link - Viewer`.
- Jangan upload data sensitif ke folder ini karena foto produk memang ditujukan untuk tampil publik.

## Troubleshooting

### Foto tidak tampil di website

Cek hal berikut:

1. Sharing file/folder Drive sudah `Anyone with the link - Viewer`.
2. Link yang disimpan bukan link folder, tapi link file gambar.
3. File masih ada di Drive dan tidak dipindah ke Trash.
4. Coba klik `Pakai URL gambar` di admin lalu `Preview`.

### Upload gagal

Cek hal berikut:

1. Admin key benar.
2. Apps Script sudah dideploy ulang setelah mengganti `Code.gs`.
3. Akun Google mengizinkan Apps Script membuat/mengubah file Drive.
4. Ukuran foto tidak terlalu besar.
5. `OTSKY_IMAGE_FOLDER_ID` valid, atau kosongkan agar Apps Script membuat folder baru.
