
function generateQRCode() {
    var inputValue = document.getElementById("qr-input").value;
    var qrcodeContainer = document.getElementById("qrcode");

    if (inputValue.trim() !== "") {
        qrcodeContainer.innerHTML = ""; // Limpar o conteúdo anterior, se houver

        var qrcode = new QRCode(qrcodeContainer, {
            text: inputValue,
            width: 200,
            height: 200
        });
    } else {
        alert("Por favor, insira um texto para gerar o QR Code.");
    }
}
