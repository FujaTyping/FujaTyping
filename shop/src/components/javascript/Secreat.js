function dsft(encodedMessage) {
    var decodedMessage = '';
    for (var i = 0; i < encodedMessage.length; i++) {
        var charCode = encodedMessage.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            decodedMessage += String.fromCharCode(((charCode - 65 - 4 + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            decodedMessage += String.fromCharCode(((charCode - 97 - 4 + 26) % 26) + 97);
        } else {
            decodedMessage += encodedMessage.charAt(i);
        }
    }
    return decodedMessage
}

export default dsft;