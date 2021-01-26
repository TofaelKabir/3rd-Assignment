function kilometerToMeter(m){
  var distance = m*1000;
  return distance;
}
var result = kilometerToMeter(5);
console.log(result);



function budgetCalculator(w, p, l){
  var watch = w*50;
  var phone = p*100;
  var laptop = l*500;
  var total = watch+phone+laptop;
  return total;
}
var total = budgetCalculator(1, 1, 1);
console.log(total);



function hotelCost(d){
  if (d>0 && d<=10){
    return d*100; 
  }else if (d>=11 && d<=20){
    return (10*100) + (d-10)*80; 
  }else{
    return (10*100) + (10*80)+ (d-20)*50;
  }
}
var cost = hotelCost(21);
console.log(cost);



function megaFriend(str) {
  var max = str[0].length;
  str.map(v => max = Math.max(max, v.length));
  result = str.filter(v => v.length == max);
  return result;
}

var longestName = megaFriend(['Kabir', 'Kamal', 'Tofael', 'Mohammad','Sharkar']);
console.log(longestName);

