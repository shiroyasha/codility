// https://codility.com/demo/results/trainingUFY9T3-2PV/

var UPSTREAM = 0;
var DOWNSTREAM = 1;

function solution(A, B) {
    var downStream = [];
    var upStream = [];

    for(var i=0; i < A.length; i++) {
        var size = A[i];
        var direction = B[i];

        //console.log(downStream);
        //console.log(upStream);

        if(direction === DOWNSTREAM) {
            downStream.push(size);
        } else {
            while(downStream.length > 0 && downStream[downStream.length - 1] < size) {
                downStream.pop();
            }

            if(downStream.length === 0) {
                upStream.push(size);
            }
        }
    }

    return downStream.length + upStream.length;
}
