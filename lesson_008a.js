// https://codility.com/demo/results/training5XQP3K-33K/

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

function prefixCount(A, number) {
    var prefixCounts = [];
    var currentCount = 0;

    A.forEach(function(el) {
        if(el === number) {
            currentCount++;
        }

        prefixCounts.push(currentCount);
    });

    return prefixCounts;
}

function solution(A) {
    var leader = findLeader(A);

    if(leader.value === null) { return 0; }

    var prefixes = prefixCount(A, leader.value);

    var equis = 0;

    for(var s=0; s < A.length - 1; s++) {
        var left  = prefixes[s];
        var right = leader.count - left;

        var leaderOnLeft  = left > (s + 1)/2;
        var leaderOnRight = right > (A.length - (s + 1))/2;

        if(leaderOnLeft && leaderOnRight) {
            equis++;
        }
    }

    return equis;
}
