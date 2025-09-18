// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // Fungsi ini akan dijalankan setelah seluruh konten HTML selesai dimuat

    console.log("Website Desa Ujungbatu Timur siap!");

    // Contoh sederhana: Menambahkan kelas 'loaded' ke body setelah DOMContentLoaded
    // Ini bisa digunakan untuk transisi atau animasi saat halaman dimuat
    document.body.classList.add('loaded');

    // --- Fungsionalitas Umum ---

    // Contoh: Smooth Scroll untuk Anchor Link (jika diperlukan)
    // Misalnya, ketika mengklik link `#bagian`, halaman akan scroll mulus ke sana
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Kecuali jika link tersebut adalah link untuk tab admin yang sudah di-handle di dashboard.html
            if (this.closest('.sidebar')) {
                return; // Jangan lakukan smooth scroll jika itu link sidebar admin
            }

            e.preventDefault(); // Mencegah perilaku default (loncat langsung)

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth' // Membuat scroll menjadi mulus
            });
        });
    });


    // --- Fungsionalitas Khusus Halaman Tertentu ---

    // Contoh: Untuk halaman admin/dashboard.html
    // Perhatikan bahwa sebagian besar fungsionalitas admin akan membutuhkan backend.
    // Kode ini hanya placeholder untuk interaksi frontend dasar.
    if (document.body.classList.contains('admin-dashboard')) {
        console.log("Halaman Dashboard Admin dimuat.");

        // Contoh: Logika untuk menambahkan jenis surat (hanya frontend simulasi)
        const addServiceForm = document.querySelector('#kelola-surat form');
        if (addServiceForm) {
            addServiceForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Mencegah submit form ke server

                const jenisSurat = document.getElementById('jenis_surat').value;
                const deskripsi = document.getElementById('deskripsi_layanan').value;
                const persyaratan = document.getElementById('persyaratan').value;

                if (jenisSurat && deskripsi && persyaratan) {
                    alert(`Jenis surat "${jenisSurat}" berhasil ditambahkan (simulasi).`);
                    // Di aplikasi nyata, data ini akan dikirim ke backend/database.
                    addServiceForm.reset(); // Reset form setelah submit
                } else {
                    alert("Mohon lengkapi semua kolom untuk menambah jenis surat.");
                }
            });
        }

        // Contoh: Logika untuk menambah berita (hanya frontend simulasi)
        const addNewsForm = document.querySelector('#kelola-berita form');
        if (addNewsForm) {
            addNewsForm.addEventListener('submit', function(e) {
                e.preventDefault(); // Mencegah submit form ke server

                const judul = document.getElementById('judul_berita').value;
                const tanggal = document.getElementById('tanggal_publikasi').value;
                const isi = document.getElementById('isi_berita').value;

                if (judul && tanggal && isi) {
                    alert(`Berita "${judul}" berhasil dipublikasikan (simulasi).`);
                    // Di aplikasi nyata, data ini akan dikirim ke backend/database.
                    addNewsForm.reset(); // Reset form
                } else {
                    alert("Mohon lengkapi semua kolom untuk mempublikasikan berita.");
                }
            });
        }

        // Contoh: Konfirmasi sebelum menghapus (untuk tombol delete di tabel)
        document.querySelectorAll('.data-table button.delete').forEach(button => {
            button.addEventListener('click', function(e) {
                if (!confirm("Apakah Anda yakin ingin menghapus item ini?")) {
                    e.preventDefault(); // Batalkan aksi jika tidak yakin
                }
                // Jika yakin, di aplikasi nyata, ini akan mengirim request DELETE ke backend
            });
        });

    } // Akhir fungsionalitas admin dashboard

}); // Akhir DOMContentLoaded

// Anda bisa menambahkan fungsi-fungsi JavaScript lainnya di sini
// Contoh: Validasi formulir kontak, efek carousel, dll.