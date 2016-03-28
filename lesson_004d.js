// https://codility.com/demo/results/trainingVVQXJ5-XJQ/

function Counters(numberOfCounters) {
    this.numberOfCounters = numberOfCounters;

    this.baseline = 0;
    this.maximum = 0;

    this.counters = Array(numberOfCounters).fill(0);
}

Counters.prototype.inc = function(index) {
    this.set(index, this.at(index) + 1);
}

Counters.prototype.at = function(index) {
    var currentValue = this.counters[index-1];

    if(currentValue < this.baseline) {
        return this.baseline;
    } else {
        return currentValue;
    }
}

Counters.prototype.set = function(index, value) {
    this.counters[index-1] = value;

    if(value > this.maximum) { this.maximum = value; }
}

Counters.prototype.maximize = function() {
    this.baseline = this.maximum;
}

Counters.prototype.currentState = function() {
    var self = this;

    return this.counters.map(function(_el, index) {
        return self.at(index + 1);
    });
}

function solution(N, A) {
    var counters = new Counters(N);

    A.forEach(function(index) {
        if(index === N + 1) {
            counters.maximize();
        } else {
            counters.inc(index);
        }
    });

    return counters.currentState();
}
