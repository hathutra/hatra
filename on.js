// const remove_dollar_sign=('$80% percent of $life is to show $up') =>{
//     let ret="$80% percent of $life is to show $up".replace("$","");
//     return ret
// }
// console.log(remove_dollar_sign('$80% percent of $life is to show $up'))


function remove_dollar_sign(x){
    let ret=x.replace("$","");
    return ret
}
//console.log(remove_dollar_sign('$80% percent of $life is to show $up'))
 string_with_no_dollars = remove_dollar_sign("80% percent of life is to show up")
if (string_with_no_dollars == "80% percent of life is to show up"){
    console.log("Your function is correct")}
else{
    console.log("Oops, there's a bug")}
