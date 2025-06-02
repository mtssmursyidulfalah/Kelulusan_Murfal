let dataKelulusan = {};

fetch('data/siswa.csv')
  .then(res => res.text())
  .then(csv => {
    Papa.parse(csv, {
      header: true,
      complete: results => {
        results.data.forEach(siswa => {
          if (siswa.nisn && siswa.nama && siswa.status) {
            dataKelulusan[siswa.nisn.trim()] = {
              nama: siswa.nama.trim(),
              status: siswa.status.trim().toLowerCase(),
              foto: `fotosiswa/${siswa.nisn.trim()}.jpg`
            };
          }
        });
      }
    });
  });

function cekKelulusan() {
  const nisn = document.getElementById("nisn").value.trim();
  const hasil = document.getElementById("hasil");
  const siswa = dataKelulusan[nisn];

  if (!siswa) {
    hasil.innerHTML = `<p style="color:red;">NISN tidak ditemukan!</p>`;
    return;
  }

  const statusColor = siswa.status === "lulus" ? "#00c851" : "#ff4444";
  const bgGradient = siswa.status === "lulus" ?
    "linear-gradient(to right, #00c851, #007E33)" :
    "linear-gradient(to right, #ff4444, #ffbb33)";

  hasil.innerHTML = `
    <div style="background: ${bgGradient}; padding: 15px; border-radius: 8px; color: white;">
      <img src="${siswa.foto}" alt="Foto Siswa" style="width: 100px; border-radius: 10px;"><br><br>
      <strong>${siswa.nama}</strong><br>
      Status Kelulusan: <strong>${siswa.status.toUpperCase()}</strong>
    </div>
  `;
}
