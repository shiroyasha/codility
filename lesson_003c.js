// https://codility.com/demo/results/trainingSE34AE-KAK/

function solution(A) {
    return eulerSum(A.length + 1) - sum(A);
}

function sum(A) {
    return A.reduce(function(sum , el) { return sum + el }, 0);
}

function eulerSum(N) {
    return N * ( N + 1 ) / 2;
}
