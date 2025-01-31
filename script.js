function generateQRCode() {
    var inputValue = document.getElementById("qr-input").value;
    var qrcodeContainer = document.getElementById("qrcode");
    var downloadButton = document.getElementById("download-btn");

    if (inputValue.trim() !== "") {
        qrcodeContainer.innerHTML = ""; 
        var qrcode = new QRCode(qrcodeContainer, {
            text: inputValue,
            width: 200,
            height: 200
        });

        setTimeout(() => {
            downloadButton.style.display = "inline-block";
        }, 300); 

    } else {
        alert("Por favor, insira um texto para gerar o QR Code.");
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
