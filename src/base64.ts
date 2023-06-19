const BASE64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';

export class base64_encoder {
  encode(str: string): string {
    let result = '';
    let i = 0;
    while (i < str.length) {
      const char1 = str.charCodeAt(i++);
      const char2 = str.charCodeAt(i++);
      const char3 = str.charCodeAt(i++);

      const triplet = (char1 << 16) | (char2 << 8) | char3;

      const b1 = (triplet >> 18) & 0x3f;
      const b2 = (triplet >> 12) & 0x3f;
      const b3 = (triplet >> 6) & 0x3f;
      const b4 = triplet & 0x3f;

      result += BASE64_ALPHABET[b1] + BASE64_ALPHABET[b2] + BASE64_ALPHABET[b3] + BASE64_ALPHABET[b4];
    }

    const padding = str.length % 3;
    if (padding > 0) {
      result = result.slice(0, padding - 3);
      result += '==='.slice(padding);
    }

    return result;
  }
}

export class base64_decoder {
  decode(str: string): string {
    let result = '';
    let i = 0;
    while (i < str.length) {
      const b1 = BASE64_ALPHABET.indexOf(str.charAt(i++));
      const b2 = BASE64_ALPHABET.indexOf(str.charAt(i++));
      const b3 = BASE64_ALPHABET.indexOf(str.charAt(i++));
      const b4 = BASE64_ALPHABET.indexOf(str.charAt(i++));

      const triplet = (b1 << 18) | (b2 << 12) | (b3 << 6) | b4;

      const char1 = (triplet >> 16) & 0xff;
      const char2 = (triplet >> 8) & 0xff;
      const char3 = triplet & 0xff;

      if (b3 === 64) {
        result += String.fromCharCode(char1);
      } else if (b4 === 64) {
        result += String.fromCharCode(char1, char2);
      } else {
        result += String.fromCharCode(char1, char2, char3);
      }
    }

    return result;
  }
}

export class error_handler {
  handleError(error: Error): string {
    return `Error: ${error.message}`;
  }
}
