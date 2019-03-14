module.exports = function getZerosCount(number, base) {
    let base_c = base;
    let min_zeros = number;
    for (let i = 2; i < base+1; i++){
        if (base_c % i == 0){
            let power = 0;
            while (base_c % i == 0){
               base_c /=i;
               power++;
            }
            let num_c = number;
            let num_zeros = 0;
            while (num_c >= i){
                num_c /= i;
                num_zeros += Math.floor(num_c);
            }
            if (min_zeros > num_zeros/power){
                min_zeros = Math.floor(num_zeros/power);
            }
        }
                
    }
    return min_zeros;
}