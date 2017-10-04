module.exports = function (){
  return {
    add: function(num1, num2) {
         console.log("sum is:", num1 + num2);
    },
    multiply: function(num1, num2) {
         console.log("product is:", num1 * num2);
    },
    square: function(num) {
         console.log("square is:", num * num);
    },
    random: function(num1, num2) {
         console.log("random number:", Math.random(1, 35));
    }
  }
};
