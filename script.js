// Esconde o botão ao carregar a página
window.onload = function () {
    document.getElementById("download-btn").style.display = "none";
};

function generateQRCode() {
    var inputValue = document.getElementById("qr-input").value;
    var qrcodeContainer = document.getElementById("qrcode");
    var downloadButton = document.getElementById("download-btn");

    if (inputValue.trim() !== "") {
        qrcodeContainer.innerHTML = "";

        new QRCode(qrcodeContainer, {
            text: inputValue,
            width: 200,
            height: 200
        });

        // ✅ Mostra div do QR e botão
        setTimeout(() => {
            qrcodeContainer.style.display = "flex";
            downloadButton.style.display = "inline-flex";
        }, 300);
    } else {
        alert("Por favor, insira um texto para gerar o QR Code.");
        qrcodeContainer.style.display = "none";     // 👈 Esconde se vazio
        downloadButton.style.display = "none";
    }
}


function downloadQRCode() {
    var qrCodeImg = document.querySelector("#qrcode img");

    if (qrCodeImg) {
        var imgURL = qrCodeImg.src;
        var link = document.createElement("a");
        link.href = imgURL;
        link.download = "qrcode.png";
        link.click();
    } else {
        alert("Primeiro, gere o QR Code antes de baixar.");
    }
}

