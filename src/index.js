module.exports = function toReadable(number) {
    var one = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var two = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var three = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    
   
    
    function getTens(num) {
        if (num < 10) return one[num];
        else if (num >= 10 && num < 20) return three[num - 10];
        else if (num%10==0) return two[Math.floor(num / 10 - 2)];
        else return two[Math.floor(num / 10 - 2)] + " " + one[num % 10];
       
    }
    
      function getHundreds(num) {
        if (num > 99 && num%100==0) return one[Math.floor(num / 100)] + " hundred";
        if (num > 99) return one[Math.floor(num / 100)] + " hundred " + getTens(num % 100);
        else return getTens(num);
        
    }

  return getHundreds(number);
}
