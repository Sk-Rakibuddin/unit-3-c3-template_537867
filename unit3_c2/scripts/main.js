function Detail(n,e,a,am){
this.name=n
this.email=e
this.address=a
this.wallet=am

}


function submits(){
    event.preventDefault()

   let form= document.getElementById("inputs")
    let name=form.name.value
    
    let email=form.email.value
    let address=form.address.value
    let amount=form.amount.value
let S=new Detail(name,email,address,amount)
console.log(S)
let data=JSON.parse(localStorage.getItem("user"))||[]
data.push(S)
localStorage.setItem("user",JSON.stringify(data))
   
}