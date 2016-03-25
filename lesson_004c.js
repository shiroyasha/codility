// https://codility.com/demo/results/training77RKZZ-CEY/

function solution(A) {
    var positions = Array(A.length).fill(false);

    A.filter(function(el) { return el > 0 && el <= A.length }).forEach(function(el) { positions[el - 1] = true; })

    var index = positions.findIndex(function(el) { return !el });

    return index === -1 ? A.length + 1 : index + 1;
}
