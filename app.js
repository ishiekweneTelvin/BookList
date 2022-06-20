var countOdds = function(low, high) {
    if(low %2 ==0 && high%2==0){
        return(high/low)/2
    }else{
        return (high/low )/2+1 }
};



console.log(Math.round(countOdds(3,7)))