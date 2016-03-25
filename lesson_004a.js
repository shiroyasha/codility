// https://codility.com/demo/results/trainingQ9JA7U-ZJP/

function solution(X, A) {
    var positions = secondsToFillPosition(A, X);

    if(hasUnfilledPosition(positions)) return -1;

    return Math.max.apply(null, positions);
}

function hasUnfilledPosition(positions) {
    return positions.find(function(el) { return el === -1 });
}

function secondsToFillPosition(A, numberOfPositions) {
    var result = Array(numberOfPositions + 1).fill(-1);

    A.forEach(function(position, seconds) {
        if(position > numberOfPositions) return;
        if(result[position] === -1) result[position] = seconds;
        if(result[position] > seconds) result[position] = seconds;
    });

    return result.slice(1);
}
