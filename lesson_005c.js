// https://codility.com/demo/results/trainingKVVZHF-KR8/

function toNumber(dnaElement) {
    switch(dnaElement) {
        case "A": { return 1; }
        case "C": { return 2; }
        case "G": { return 3; }
        case "T": { return 4; }
    }
}

function toQueries(P, Q) {
    return P.map(function(el, index) {
        return [el, Q[index]];
    });
}

function calculateOccurences(numbers) {
    var result = [[0], [0], [0], [0]];

    numbers.forEach(function(el, index) {
        result[0][index+1] = result[0][index] + (el === 1 ? 1 : 0);
        result[1][index+1] = result[1][index] + (el === 2 ? 1 : 0);
        result[2][index+1] = result[2][index] + (el === 3 ? 1 : 0);
        result[3][index+1] = result[3][index] + (el === 4 ? 1 : 0);
    });

    return result;
}

function min(query, occurences) {
    var a = query[0];
    var b = query[1] + 1;

    for(var i = 0; i < 4; i++) {
        if(occurences[i][b] - occurences[i][a] > 0) {
            return i+1;
        }
    }
}

function solution(S, P, Q) {
    var numbers = S.split('').map(toNumber);
    var queries = toQueries(P, Q);

    var occurences = calculateOccurences(numbers);

    //console.log(occurences);

    return queries.map(function(query) {
        return min(query, occurences);
    });
}
