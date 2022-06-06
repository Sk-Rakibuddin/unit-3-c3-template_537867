async function getdata(){
    let url='https://masai-vouchers-api.herokuapp.com/api/vouchers'
    let res=await fetch(url)
    let data=await res.json()
    console.log(data[0].vouchers)
    appends(data[0].vouchers)
}
getdata()

function appends(data){
    let second=document.getElementById("voucher_list")
data.forEach(function(el){
    let div1=document.createElement("div")
    div1.class="voucher"
   let img= document.createElement("img")
   img.src=el.image
   let p1 = document.createElement("p")
   p1.innerText=el.name
   
   let p2= document.createElement("p")
   p2.innerText=el.price

   let btn= document.createElement("button")
   btn.innerText="Buy"
   btn.id="buy_voucher"
div1.append(img,p1,p2,btn)

second.append(div1)

})
}