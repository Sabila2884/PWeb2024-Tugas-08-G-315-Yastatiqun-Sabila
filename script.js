function validasiForm() {
    var namaDepan = document.getElementById("namaDepan").value;
    var namaBelakang = document.getElementById("namaBelakang").value;
    var email = document.getElementById("email").value;
    var telepon = document.getElementById("telepon").value;
    var deskripsi = document.getElementById("deskripsi").value;
    var jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked');
    var error = 0;

    document.getElementById("namaDepanError").innerHTML = "";
    document.getElementById("namaBelakangError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("teleponError").innerHTML = "";
    document.getElementById("jeniskelaminError").innerHTML = "";

    if (namaDepan === "") {
        document.getElementById("namaDepanError").innerHTML = "Nama depan harus diisi";
        error++;
    } else if (!isValidName(namaDepan)) {
        document.getElementById("namaDepanError").innerHTML = "Nama depan hanya boleh berisi huruf dan spasi";
        error++;
    }

    if (namaBelakang === "") {
        document.getElementById("namaBelakangError").innerHTML = "Nama belakang harus diisi";
        error++;
    } else if (!isValidName(namaBelakang)) {
        document.getElementById("namaBelakangError").innerHTML = "Nama belakang hanya boleh berisi huruf dan spasi";
        error++;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Alamat email harus diisi";
        error++;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerHTML = "Alamat email tidak valid";
        error++;
    }

    if (telepon === "") {
        document.getElementById("teleponError").innerHTML = "Nomor telepon harus diisi";
        error++;
    } else if (!isValidTelepon(telepon)) {
        document.getElementById("teleponError").innerHTML = "Nomor telepon tidak valid";
        error++;
    }

    if (deskripsi === "") {
        alert("Deskripsi harus diisi");
        error++;
    }

    if (!jeniskelamin) {
        document.getElementById("jeniskelaminError").innerHTML = "Jenis kelamin harus dipilih";
        error++;
    }

    if (error === 0) {
        alert("Formulir telah berhasil dikirim!");
        document.getElementById("formKontak").reset();
    }

    return false;
}

function isValidName(name) {
    var regexName = /^[A-Za-z\s]+$/;
    return regexName.test(name);
}

function isValidEmail(email) {
    var regexEmail = /^\S+@\S+\.\S+$/;
    return regexEmail.test(email);
}

function isValidTelepon(telepon) {
    var regexTelepon = /^(\+62|0)\d{8,15}$/;
    return regexTelepon.test(telepon);
}

document.getElementById("formKontak").addEventListener("submit", function(event) {
    event.preventDefault();
    validasiForm();
});