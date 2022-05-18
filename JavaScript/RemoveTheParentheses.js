function removeParentheses(s){
    let result = "";
    let count = 0;
    for (let letter of s){
        if (letter == "(") {
            count += 1;
        };
        if (count == 0) {
            result += letter;
        };
        if (letter == ")") {
            count -= 1;
        }
    }
    return result
}
removeParentheses("example(unwanted thing)example");
removeParentheses("example (unwanted thing) example");
removeParentheses("a (bc d)e");
removeParentheses("a(b(c))");
removeParentheses("hello example (words(more words) here) something");
removeParentheses("(first group) (second group) (third group)"); // Falla este