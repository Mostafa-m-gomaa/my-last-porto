// starrt at the landing 
// setting of the landing button 
let landButton=document.querySelector(".landing .button")
let landing =document.querySelector(".landing")
landButton.onclick=()=>{
landing.classList.add("landing-b")
console.log("sayed")
}

// setting lamp button
let lampButton=document.querySelector(".landing .turn")
let light= document.querySelector(".light")



lampButton.onclick=()=>{
    lampButton.classList.toggle("off")
    if(lampButton.classList.contains("off")){
        lampButton.innerHTML="OFF"
        light.style.display="none"
        document.querySelector(".turn-cont").style.backgroundColor="black"
        landing.style.filter="grayscale(80%)"
       
    }
    else{
        lampButton.innerHTML="ON"
        light.style.display="block"
        document.querySelector(".turn-cont").style.backgroundColor="white"
        landing.style.filter="grayscale(0%)"
    }
}
// starrt contact buton 
let cont=document.querySelector(".contact")
let conta=document.querySelector(".contact-me")

cont.onclick=()=>{
    if(conta.classList.contains("contact-me1") || conta.classList.contains("bounce-in-top")){
conta.classList.remove("contact-me1","bounce-in-top")
conta.classList.add("bounce-in-top")
    }
   else{
    conta.classList.add("bounce-in-top")
   }
}

// start back button at the contact area 
let backButton=document.querySelector(".c")
backButton.onclick=()=>{

    // document.querySelector(".contact-me").classList.remove("bounce-in-top")
    document.querySelector(".contact-me").classList.add("contact-me1")
}
// setting submit button 
let subButton =document.querySelector(".contact-me form .sub")
subButton.onclick=(e)=>{
    e.preventDefault();
    let msgContainer=document.createElement("div")
    msgContainer.className="msg-container"
    let msg=document.createTextNode("Thanks for connecting ..")
    msgContainer.appendChild(msg)
    let textArea=document.querySelector(".contact-me .info .text form")
    textArea.appendChild(msgContainer)
    subButton.remove()

}
// setting skill butoon
let skillButton=document.querySelector(".skillat")
let skillPage=document.querySelector(".my-skills")
skillButton.onclick=()=>{
    skillPage.classList.add("skill-trans")
}
//  setting back buton for skills part 
let skillBackButton =document.querySelector(".s")
skillBackButton.onclick=()=>{
    skillPage.classList.remove("skill-trans")


}

// setting burger icon
let burgerIcon=document.querySelector(".landing .list .icon-cont")
let lista=document.querySelector(".landing .list-cont")
burgerIcon.onclick=()=>{
    console.log("ff")
    lista.classList.toggle("come")
    document.querySelector(".landing .two").classList.toggle("two-click")
    document.querySelector(".landing .three").classList.toggle("three-click")
}
// setting portfolio buton
let potfolioButton=document.querySelector(".landing .list .portfolio")
let portfolioPage=document.querySelector(".my-projects")
potfolioButton.onclick=()=>{
    console.log("dd")
    portfolioPage.classList.add("scale-out-center")

}
// setting portfolio back button
document.querySelector(".q").onclick=()=>{
    portfolioPage.classList.remove("scale-out-center")
}