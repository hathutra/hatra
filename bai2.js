
const let_even_list=(l)=>{
    let l2=[]
    for(i=0;i<l.length;i++){
    if(l[i] % 2 == 0){
        l2.push(l[i])

    }
    }
    return l2
}

///console.log(let_even_list([1, 2, 5, 9, -10, 6]))
even_list = let_even_list([1, 2, 5, 9, -10, 6])

if (JSON.stringify(even_list) ==JSON.stringify([2, -10, 6]))
{
    console.log("Your function is correct")}
else{
    console.log("Ooops, bugs detected")}

