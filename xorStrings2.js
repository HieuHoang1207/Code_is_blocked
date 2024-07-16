function strings_xor (s, t) {
    // Write your code here
    let result = '';
    for (let i = 0; i < s.length; i++) {
        console.log("s="+s[i]+" t="+t[i]);
        if ((s[i] == 1 && t[i] == 0) || (s[i] == 0 && t[i] == 1)) {
            result += "1";
        } else result += "0"
    }
    return result;
}
function main() {
    const s = "10101";
    const t = "00101";
    const result = strings_xor (s, t);
    console.log(result);
}
main();