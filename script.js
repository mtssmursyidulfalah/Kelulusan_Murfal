document.getElementById('form-cek').addEventListener('submit', function(e) {
  e.preventDefault();
  const nisn = document.getElementById('nisn').value.trim();
  fetch('data/siswa.csv')
    .then(response => response.text())
    .then(text => {
      const rows = text.trim().split('\n').slice(1); // skip header
      const hasil = document.getElementById('hasil');
      let ditemukan = false;
      for (const row of rows) {
        const [nisnData, nama, kelas, status, foto] = row.split(',');
        if (nisn === nisnData) {
          hasil.textContent = status === 'Lulus'
            ? Selamat ${nama} dari kelas ${kelas}, Anda dinyatakan LULUS.
            : Maaf ${nama} dari kelas ${kelas}, Anda dinyatakan TIDAK LULUS.;
          hasil.className = 'hasil ' + (status === 'Lulus' ? 'lulus' : 'tidak-lulus');
          ditemukan = true;
          break;
        }
      }
      if (!ditemukan) {
        hasil.textContent = 'NISN tidak ditemukan.';
        hasil.className = 'hasil tidak-lulus';
      }
    });
});
