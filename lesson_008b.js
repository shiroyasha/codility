// https://codility.com/demo/results/training93DY8Q-S7P/

function count(A, number) {
    return A.reduce(function(result, el) {
        if(el === number) {
            return result + 1;
        } else {
            return result;
        }
    }, 0);
}

function findLeader(A) {
    var stack = [];

    A.forEach(function(el) {
        //console.log(stack);

        if(stack.length === 0) {
            stack.push(el);
        } else {
            var top = stack[stack.length - 1];

            if(top !== el) {
                stack.pop();
            } else {
                stack.push(el);
            }
        }
    });

    //console.log(stack);

    if(stack.length === 0) {
        return {value: null, count: null};
    }

    var candidate = stack[stack.length - 1];
    var candidateCount = count(A, candidate);

    if(candidateCount > A.length/2) {
        return {value: candidate, count: candidateCount};
    } else {
        return {value: null, count: null};
    }
}

function solution(A) {
    var leader = findLeader(A);

    //console.log(leader);

    if(leader.value === null) {
        return -1;
    } else {
        return A.findIndex(function(el) { return el === leader.value });
    }
}
