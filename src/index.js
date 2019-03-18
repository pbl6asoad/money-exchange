// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var err0r = {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var exchange = {};
    var emptyObj = {};
    if(currency>10000){
        return err0r;
    }
    else if(currency<0){
        return emptyObj;
    }
    else{
        exchange.H = Math.floor(currency/50);
        currency = currency - exchange.H*50;
        exchange.Q = Math.floor(currency/25);
        currency = currency - exchange.Q*25;
        exchange.D = Math.floor(currency/10);
        currency = currency - exchange.D*10;
        exchange.N = Math.floor(currency/5);
        currency = currency - exchange.N*5;
        exchange.P = Math.floor(currency/1);
        currency = currency - exchange.P*1;
        if(exchange.H == 0){
            delete exchange.H;
        }
        else{
        
        }
        if(exchange.Q == 0){
            delete exchange.Q;
        }
        else{
        
        }
        if(exchange.D == 0){
            delete exchange.D;
        }
        else{
        
        }
        if(exchange.N == 0){
            delete exchange.N;
        }
        else{
        
        }
        if(exchange.P == 0){
            delete exchange.P;
        }
        else{
        
        }
    }
    return exchange;
}
