var number = [12,14,11,15,17]

function check(arg){
    for(var e = 0; e < number.length;e++){
        if(number [e]===arg){
            console.log('есть')
        }else{
            console.log ('нет')
        }
    
    }
}
check(14)