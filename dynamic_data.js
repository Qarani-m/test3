
var landgreet = document.getElementById("greet")
var langingImg = document.getElementById("langingImg")
var aboutLongp = document.getElementById("aboutLongp")
var codingexp = document.getElementById("codingexp")
var phoneNumber = document.getElementById("phoneNumber")
var emailAddress = document.getElementById("emailAddress")
var completeProjects = document.getElementById("completeProjects")
var aboutimage = document.getElementById("aboutimage")



var landinPage_keys=["job","imgurl","intro"]
var aboutme_keys=["projects","experience","aboutme","imgurl"]
var contact_keys=["email","phone"]
var landinPage_values={}
var aboutme_values={}
var contact_values={}



fetch('data.json')
  .then(response => response.json())
  .then(
    (data )=>{
        for(i=0;i<data.landinPage.length;i++){
               var dta=data.landinPage[i][landinPage_keys[i]]
                landinPage_values[landinPage_keys[i]] =[dta]

        }
        for(i=0;i<data.aboutme.length;i++){
            var dta2=data.aboutme[i][aboutme_keys[i]]
            aboutme_values[aboutme_keys[i]] =[dta2]

        }
        for(i=0;i<data.contactme.length;i++){
            var dta3=data.contactme[i][contact_keys[i]]
            contact_values[contact_keys[i]] =[dta3]
        }
        dynamicdata()
    }
  )
  .catch(error => console.log(error));

function dynamicdata(){
    console.log(aboutme_values)
    landgreet.innerHTML=landinPage_values["intro"]
    // langingImg.setAttribute('src',landinPage_values['imgurl'])
    // aboutLongp.innerHTML=aboutme_values['aboutme']


    // aboutimage.setAttribute('src',aboutme_values['imgurl'])


    codingexp.innerHTML=aboutme_values['experience']
    completeProjects.innerHTML=aboutme_values['projects']
    phoneNumber.innerHTML=contact_values['phone']
    phoneNumber.setAttribute("href","tel:"+contact_values['phone'])
    emailAddress.innerHTML="con"


}
