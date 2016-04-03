// https://codility.com/demo/results/trainingPSCXM5-4HW/

function solution(H) {
    var stack = [];

    var blockCount = 0;
    var currentHeight = 0;

    H.forEach(function(el) {
        while(el < currentHeight) {
            var top = stack.pop();
            blockCount++;

            currentHeight -= top;
        }

        if(el > currentHeight) {
            stack.push(el - currentHeight);

            currentHeight = el;
        }
    });

    blockCount += stack.length;

    return blockCount;
}
