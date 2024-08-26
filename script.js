// Función simple de encriptado y desencriptado (puedes usar una biblioteca como CryptoJS para algo más robusto)
function encryptText() {
    const text = document.getElementById('inputText').value;
    const encrypted = btoa(text); // Encriptar usando base64
    document.getElementById('outputText').value = encrypted;
}

function decryptText() {
    const text = document.getElementById('inputText').value;
    try {
        const decrypted = atob(text); // Desencriptar usando base64
        document.getElementById('outputText').value = decrypted;
    } catch (e) {
        document.getElementById('outputText').value = 'Texto inválido para desencriptar';
    }
}