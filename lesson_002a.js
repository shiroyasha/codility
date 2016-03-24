// https://codility.com/programmers/task/cyclic_rotation/

function solution(A, K) {
    var slicePoint = A.length - (K % A.length);

    return A.slice(slicePoint).concat(A.slice(0, slicePoint));
}
