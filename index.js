var navbar = document.getElementById('navbar')
var left = document.getElementById('left')
var moon = document.getElementById('moon')
var sun = document.getElementById('sun')



front_end_keys =['html','css','react','js']
front_end_values =[]
backrnd_end_keys =['php','django','node']
backrnd_end_values =[]

fetch('data.json')
  .then(response => response.json())
  .then(
    (data )=>{
        // console.log(data)
        for(i=0;i<data.frontend.length;i++){
            frontend_data=data.frontend[i][front_end_keys[i]]
            front_end_values.push(frontend_data)
        }
        for(i=0;i<data.backend.length;i++){
            backend_data=data.backend[i][backrnd_end_keys[i]]
          backrnd_end_values.push(backend_data)
        }
        verybigFunction(front_end_values,backrnd_end_values)
    }
  )
  .catch(error => console.log(error));



const verybigFunction=(front_end_values,backrnd_end_values)=>{
    sun.style.display='none'
    const navbarBackground=()=>{
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset > 150){
                navbar.classList.add('navbar-fixed-top')
            }else{
                navbar.classList.remove('navbar-fixed-top')
            }
        })
    }
    navbarBackground()
    const lightDarkmode =(backgroundColor,navbarColor,leftColor,moonColor,sunColor)=>{
        var source1 = document.getElementById('icon1')
        var source2 = document.getElementById('icon2')
        var source3 = document.getElementById('icon3')
        var source4  = document.getElementById('icon4')
        var source5 = document.getElementById('icon5')
        var source6  = document.getElementById('icon6')
        var source7 = document.getElementById('icon7')
        var source8  = document.getElementById('icon8')
        var source9 = document.getElementById('icon9')
        var source10  = document.getElementById('icon10')
        var source11 = document.getElementById('icon11')
        var left = document.getElementById('left')
        var moon = document.getElementById('moon')
        var sun = document.getElementById('sun')
        var skills = document.getElementById('skills')
        var aboutme = document.getElementById('aboutme')
        var contact_form = document.getElementById('contact_form')
        var projects_slides = document.getElementById('projects_slides')
        document.body.style.backgroundColor=backgroundColor
        navbar.style.color=navbarColor
        navbar.style.backgroundColor=backgroundColor
        skills.style.color=navbarColor
        aboutme.style.color=navbarColor
        contact_form.style.color=navbarColor
        left.style.color=leftColor
        moon.style.display=moonColor
        sun.style.display=sunColor
        projects_slides.style.color=navbarColor
        var ComputedStyle =window.getComputedStyle(moon)
        var style = ComputedStyle.getPropertyValue('display')
        const icon_list =['','github','linkedin','twitter','telephone','envelope','chevron-left','chevron-right', 'chevron-left','chevron-right',     'chevron-left','chevron-right',               ]
        const source_list=[source1,source1,source2,source3,source4,source5,source6,source7, source8,source9,source10,source11]
    
        if(style !='block'){  
            for(i=1;i<source_list.length;i++){
                console.log(i)
                source_list[i].setAttribute('src',"assets/"+icon_list[i]+"_light.svg")
            }
        }
        sun.addEventListener('click',()=>{
            for(i=1;i<source_list.length;i++){
                source_list[i].setAttribute('src',"assets/"+icon_list[i]+".svg")
            }
        })
    }
    moon.addEventListener("click",()=>{lightDarkmode("#2C3333","#fff","#fff","none","block")})
    sun.addEventListener("click",()=>{lightDarkmode("#FEFCF3","#2e3333","#2e3333","block",'none')})
    function frontendstuff(){
        fronty = document.getElementsByClassName('val2')
        class2 = document.getElementsByClassName("range2_")
        for(i=0; i<fronty.length; i++){
            fronty[i].innerHTML=front_end_values[i]
            class2[i].style.width =front_end_values[i]
        }    
    }
    function backendLevels(){
        backsy= document.getElementsByClassName("val")
        class2 = document.getElementsByClassName("range")
        
        for(i=0;i<backsy.length;i++){
            backsy[i].innerHTML =backrnd_end_values[i]
            class2[i].style.width =backrnd_end_values[i]
        }
    }
    frontendstuff()
    backendLevels()
    const skilAnimation=(flipper,frbackground,frcolor,backendcolor,fr_btn,backend_btn)=>{
        if(flipper==0){
            fr_btn.style.background=frbackground
            fr_btn.style.color=frcolor
            backend_btn.style.background=frcolor
            backend_btn.style.color=backendcolor
        }else{
            fr_btn.style.background=frbackground
            fr_btn.style.color=frcolor
            backend_btn.style.background=backendcolor
            backend_btn.style.color=frbackground
        }
    }
    const skills=()=>{
        var flipper=0
        const backend_btn = document.getElementById("back")
        const fr_btn = document.getElementById("front")
        fr_btn.style.background='#fff'
        fr_btn.style.color='#000'
        backend_btn.addEventListener('click',()=>{
            if(flipper!=0){
                skilAnimation(1,"#fff","#000","crimson",fr_btn,backend_btn)    
                var range1 = document.getElementById('range1')
                var range2 = document.getElementById('range2')
                range1.style.marginLeft='0vw'
                range1.style.opacity=1
                range2.style.opacity=0
                range2.style.marginLeft="50vw"
                flipper =0
            }
        })
        fr_btn.addEventListener('click',()=>{
            if(flipper==0){
                skilAnimation(0,"crimson","#fff","#000",fr_btn,backend_btn)
                var range2 = document.getElementById('range2')
                range1.style.opacity=0
                range1.style.marginLeft='-55vw'
                range2.style.marginLeft='1vw'
                range2.style.opacity=1
                flipper =1
            }
        })
    }
    skills()
}