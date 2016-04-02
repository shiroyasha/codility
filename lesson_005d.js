// https://codility.com/demo/results/trainingSAKQ4U-8PG/

function min(array) {
    var index = 0;
    var min = array[0];

    array.forEach(function(el, i) {
        if(el < min) {
            index = i;
            min = el;
        }
    });

    return {index: index, value: min};
}

function solution(A) {
    var len2Averages = [];
    var len3Averages = [];

    for(var i=0; i + 1 < A.length; i++) {
        var len2 = A[i] + A[i+1];

        len2Averages.push(len2/2);

        if(i + 2 < A.length) {
            len3Averages.push((len2 + A[i+2])/3);
        }
    }

    //console.log(len2Averages);
    //console.log(len3Averages);

    var min2 = min(len2Averages);
    var min3 = min(len3Averages);

    //console.log(min2);
    //console.log(min3);

    if(min2.value === min3.value) {
        return Math.min(min2.index, min3.index);
    }

    return min2.value < min3.value ? min2.index : min3.index;
}
