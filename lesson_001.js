// https://codility.com/programmers/lessons/18/

function solution(N) {
    var binary = toBinary(N);

    var gap = 0;

    while(binary.length > 0) {
        var number = binary[0];

        var count = countConsecutive(binary, number);

        if(number === "0" && count > gap && count < binary.length) gap = count;

        binary = binary.substring(count);
    }

    return gap;
}

function countConsecutive(binary, number) {
    var size = 0;

    while(size <= binary.length && binary[size] === number) size++;

    return size;
}

function toBinary(N) {
    return N.toString(2);
}
