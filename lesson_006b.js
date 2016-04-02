// https://codility.com/demo/results/trainingPXPP6V-PYE/

function solution(A) {
    var sorted = A.sort(function(a, b) { return a - b; });

    for(var i=0; i < A.length - 2; i++) {
        if(sorted[i] + sorted[i+1] > sorted[i+2]) {
            return 1;
        }
    }

    return 0;
}
