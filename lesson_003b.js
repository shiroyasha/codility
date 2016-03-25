// https://codility.com/demo/results/training8QRFJC-3HU/

function solution(A) {
    return Math.min.apply(null, diffs(A));
}

function diffs(A) {
    var left = 0;
    var right = sum(A);

    return A.slice(0, -1).map(function(el) {
        left += el;
        right -= el;

        return Math.abs(left - right);
    });
}

function sum(A) {
    return A.reduce(function(sum, el) { return sum + el }, 0);
}
