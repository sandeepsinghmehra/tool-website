// Function to convert text to bold Unicode characters
const toBoldUnicode = (text) => {
    const boldMap = {
        // Latin
        'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛', 'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣', 'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫', 'Y': '𝗬', 'Z': '𝗭',
        'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵', 'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽', 'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅', 'y': '𝘆', 'z': '𝘇',
        '0': '𝟬', '1': '𝟭', '2': '𝟮', '3': '𝟯', '4': '𝟰', '5': '𝟱', '6': '𝟲', '7': '𝟳', '8': '𝟴', '9': '𝟵',

        '!': '!', '@': '@', '#': '#', '$': '$', '%': '%', '^': '^', '&': '&', '*': '*', '(': '(', ')': ')',
        '-': '-', '_': '_', '=': '=', '+': '+', '[': '[', ']': ']', '{': '{', '}': '}', '\\': '\\', '|': '|',
        ';': ';', ':': ':', '\'': '\'', '"': '"', ',': ',', '.': '.', '<': '<', '>': '>', '/': '/', '?': '?',
        ' ': ' ', 
        'α': '𝛂', 'β': '𝛃', 'γ': '𝛄', 'δ': '𝛅', 'ε': '𝛆', 'ζ': '𝛇', 'η': '𝛈', 'θ': '𝛉', 'ι': '𝛊', 'κ': '𝛋', 'λ': '𝛌', 'μ': '𝛍', 'ν': '𝛎', 'ξ': '𝛏', 'ο': '𝛐', 'π': '𝛑', 'ρ': '𝛒', 'σ': '𝛔', 'τ': '𝛕', 'υ': '𝛖', 'φ': '𝛗', 'χ': '𝛘', 'ψ': '𝛙', 'ω': '𝛚', 'Ω': '𝗨+1D6C0',
    };
  
    return text.split('').map(char => boldMap[char] || char).join('');
};

export default toBoldUnicode;

  