var left =document.getElementsByClassName("leftarrow")
var right =document.getElementsByClassName("rightarrow")
var image=document.getElementsByClassName("thumnail")
var description=document.getElementsByClassName("description")
var projects= document.getElementsByClassName("projects")


function slides(checker, index1,index2,opacity1,margin1,margin2,opacity2){
    var projects= document.getElementsByClassName("projects")
    
    projects[index1].style.opacity=opacity1
    projects[index1].style.marginLeft=margin1
    projects[index2].style.marginLeft=margin2
    projects[index2].style.opacity=opacity2
}





// left[2].style.display="none"
left[2].addEventListener("click",()=>{
var projects= document.getElementsByClassName("projects")
    i=2
    projects[i].style.opacity=0
    projects[i].style.marginLeft="-250vw"
    projects[i-2].style.opacity=1
    projects[i-2].style.marginLeft="0vw"
})

left[0].addEventListener("click",()=>{
    var projects= document.getElementsByClassName("projects")
        i=0
        projects[i].style.opacity=0
        projects[i].style.marginLeft="-250vw"
        projects[i+1].style.opacity=1
        projects[i+1].style.marginLeft="0vw"
    })
    


    left[1].addEventListener("click",()=>{
        var projects= document.getElementsByClassName("projects")
            i=1
            projects[i].style.opacity=0
            projects[i].style.marginLeft="-250vw"
            projects[i-1].style.opacity=1
            projects[i-1].style.marginLeft="0vw"
        })
        
    






right[2].addEventListener("click",()=>{slides(1,2,1,0,"-120vw","0vw",1)})
right[1].addEventListener("click",()=>{slides(1,1,0,0,"-120vw","0vw",1)})
right[0].addEventListener("click",()=>{slides(1,0,2,0,"-120vw","0vw",1)})

