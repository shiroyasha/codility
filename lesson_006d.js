// https://codility.com/demo/results/trainingM88SJZ-7JY/

var EVENT_CIRCLE_STARTED = 0;
var EVENT_CIRCLE_ENDED = 1;

function toEvents(A) {
    var events = [];

    A.forEach(function(el, index) {
        var from = index - el;
        var to   = index + el;

        events.push({index: from, name: EVENT_CIRCLE_STARTED});
        events.push({index: to, name: EVENT_CIRCLE_ENDED});
    });

    return events;
}

function solution(A) {
    var events = toEvents(A).sort(function(a, b) {
        if(a.index === b.index) { return a.name - b.name; }

        return a.index - b.index;
    });

    var alive = 0;

    var intersections = 0;

    events.forEach(function(event) {
        if(event.name === EVENT_CIRCLE_STARTED) {
            intersections += alive;
            alive++;
        } else {
            alive--;
        }
    });

    if(intersections > 10000000) {
        return -1;
    } else {
        return intersections;
    }
}
