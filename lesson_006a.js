// https://codility.com/demo/results/trainingWCQCRV-35E/

function solution(A) {
    var distinct = 0;
    var current = null;

    A.sort().forEach(function(el) {
        if(el !== current) {
            distinct++;
            current = el;
        }
    });

    return distinct;
}
