// https://codility.com/demo/results/trainingMDPMRG-QMX/

function solution(A) {
    var sorted = A.sort(function(a, b) { return a - b; });

    var N = A.length;

    var solution1 = sorted[N-1] * sorted[N-2] * sorted[N-3];

    // negative numbers can turn into positive
    var solution2 = sorted[0] * sorted[1] * sorted[N-1];

    return Math.max(solution1, solution2);
}
