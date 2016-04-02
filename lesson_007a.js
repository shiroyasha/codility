// https://codility.com/demo/results/trainingRZ7PT7-4BP/

function isOpeningBracket(bracket) {
    return bracket === "(" || bracket === "[" || bracket === "{";
}

function opositeBracket(bracket) {
    if(bracket === ")") return "(";
    if(bracket === "]") return "[";
    if(bracket === "}") return "{";
    if(bracket === "(") return ")";
    if(bracket === "[") return "]";
    if(bracket === "{") return "}";
}

function solution(S) {
    var stack = [];

    for(var i = 0; i < S.length; i++) {
        var bracket = S[i];

        if(isOpeningBracket(bracket)) {
            stack.push(bracket);
        } else {
            var topBracket = stack.pop();

            if(topBracket !== opositeBracket(bracket)) { return 0; }
        }
    }

    return stack.length === 0 ? 1 : 0;
}
