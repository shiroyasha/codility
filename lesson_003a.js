// https://codility.com/demo/results/training8XJBF3-YGB/

function solution(X, Y, D) {
  var distance = Y - X;

  return Math.ceil(distance / D);
}
