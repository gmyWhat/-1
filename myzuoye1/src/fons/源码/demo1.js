var a = 2,b=3,c=4;
var x = true,y = false;
var base = 10;
var name = 'string';

var result =  a + name && y || !c - b + x || base;

console.log(result);

document.getElementById('result').innerHTML = result;

// result = a + name && y || false - b + x || base;

// result = 12 && y || false - b + x || base;

// result = 12 && y || -3 + x || base;

// result = 12 && y || -2 || base;

// result = false || -2 || base;

// result = -2 || base;

// result = -2

var str = 'abc1def2fhi3';
var i = 0;
var result = '';
while(i< str.length){
    if(isNaN(Number(str[i]))){
        result += str[i];
    }else{
        result += str[i]*7;
    }
    i++;
}

document.getElementById('str').innerHTML = result;
