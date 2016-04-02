// https://codility.com/demo/results/trainingV9XJ7M-MKK/

function solution(S) {
    var state = 0;

    for(var i=0; i < S.length; i++) {
        if(S[i] === "(") {
            state++;
        } else {
            if(state === 0) return 0;

            state--;
        }
    }

    return state === 0 ? 1 : 0;
}
