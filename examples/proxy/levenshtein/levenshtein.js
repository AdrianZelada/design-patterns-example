function levenshtein(a, b) {
    if (a.length == 0) {
        return b.length;
    }

    if (b.length == 0) {
        return a.length;
    }

    let cost = (a.charAt(a.length - 1) == b.charAt(b.length - 1)) ? 0 : 1;
    return Math.min(
        levenshtein(a.substring(0, a.length - 1), b) + 1,
        levenshtein(a, b.substring(0, b.length - 1)) + 1,
        levenshtein(a.substring(0, a.length - 1), b.substring(0, b.length - 1)) + cost,
    );
}

module.exports = levenshtein;