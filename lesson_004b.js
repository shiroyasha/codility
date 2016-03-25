// https://codility.com/demo/results/trainingSTNTFK-TKH/

function solution(A) {
    var positions = Array(A.length).fill(false);

    for(var i=0; i < A.length; i++) {
        var position = A[i] - 1;

        // out of bounds
        if(position >= A.length) return toNumber(false);

        // duplicate values
        if(positions[position]) return toNumber(false);

        positions[position] = true;
    }

    return toNumber(isFilled(positions));
}

function toNumber(bool) {
    return bool ? 1 : 0;
}

function isFilled(array) {
    return array.every(function(el) { return el });
}
