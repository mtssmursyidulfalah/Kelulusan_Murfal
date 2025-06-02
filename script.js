
let siswa = [
    {"NISN": "0107813711", "NAMA": "AIDA RIZKI ANANDA", "KELAS": "IX-A", "STATUS": "LULUS", "FOTO": "0107813711.jpg"}
];

function goToPage(pageNumber) {
    document.getElementById('page-1').classList.add('hidden');
    document.getElementById('page-2').classList.add('hidden');
    document.getElementById('page-' + pageNumber).classList.remove('hidden');
}

function cekKelulusan() {
    const nisn = document.getElementById('nisnInput').value.trim();
    const data = siswa.find(s => s.NISN === nisn);
    const hasilDiv = document.getElementById('hasil');

    if (data) {
        hasilDiv.className = "result lulus";
        hasilDiv.innerHTML = `<p>Selamat! Anda dinyatakan <strong>${data.STATUS}</strong></p>
        <img src="fotosiswa/${data.FOTO}" alt="Foto Siswa" style="width: 100px; border-radius: 50%; margin: 10px 0;">
        <p><strong>${data.NAMA}</strong><br>Kelas: ${data.KELAS}</p>`;
    } else {
        hasilDiv.className = "result";
        hasilDiv.innerHTML = "<p>NISN tidak ditemukan.</p>";
    }
}
