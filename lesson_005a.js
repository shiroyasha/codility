// https://codility.com/demo/results/training9TSD2E-NYH/

function solution(A) {
    var numberOfZeroes = 0;
    var result = 0;

    A.forEach(function(el) {
        if(el === 0) {
            numberOfZeroes++;
        } else if (el === 1) {
            result += numberOfZeroes;
        }
    });

    if(result > 1000000000) {
        return -1;
    } else {
        return result;
    }
}
