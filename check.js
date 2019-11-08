const is_inside=(a,b)=>{
    if(a[0] > b[0] && a[1] > b[1]){
        return true
      }
      else{
          return false
      }
        }
        //check =is_inside([100, 120], [140, 60, 	])
        check=is_inside([200, 120], [140, 60, 100, 200])
        console.log(check)
        let m
if(check==true){
    m = "inside"
}else{
    m = "outside"
}
console.log(m)
if(m === "outside" || m === "inside"){
    console.log("your function is correct")
} else{
    console.log("Ooops, bugs detected")
}
