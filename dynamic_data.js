
var landgreet = document.getElementById("greet")
var langingImg = document.getElementById("langingImg")
var aboutLongp = document.getElementById("aboutLongp")
var codingexp = document.getElementById("codingexp")
var phoneNumber = document.getElementById("phoneNumber")
var emailAddress = document.getElementById("emailAddress")
var completeProjects = document.getElementById("completeProjects")
var aboutimage = document.getElementById("aboutimage")


var project1_name = document.getElementById("project1_name")
var project1_description = document.getElementById("project1_description")
var project1_imagepath= document.getElementById("project1_image")
var project1_demo = document.getElementById("project1_demo")
var project1_github = document.getElementById("project1_github")


var project3_name = document.getElementById("project3_name")
var project3_description = document.getElementById("project3_description")
var project3_imagepath= document.getElementById("project3_image")
var project3_demo = document.getElementById("project3_demo")
var project3_github = document.getElementById("project3_github")

var project2_name = document.getElementById("project2_name")
var project2_description = document.getElementById("project2_description")
var project2_imagepath= document.getElementById("project2_image")
var project2_demo = document.getElementById("project2_demo")
var project2_github = document.getElementById("project2_github")


var landinPage_keys=["job","imgurl","intro"]
var aboutme_keys=["projects","experience","aboutme","imgurl"]
var contact_keys=["email","phone"]
var project1_keys=["name","description","imagepath","demourl","githuburl"]
// var project2_keys=["name","description","imagepath","demourl","githuburl"]
// var project3_keys=["name","description","imagepath","demourl","githuburl"]

var landinPage_values={}
var aboutme_values={}
var contact_values={}
var project1_values={}
var project2_values={}
var project3_values={}



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
        var projects_keys_array =[project1_values,project2_values,project3_values]


        for(j=0;j<3;j++){
          var json_array_key = projects_keys_array[j]
          for(i=0;i<data.project1.length;i++){
            var project_dta_values = [data.project1[i][project1_keys[i]],data.project2[i][project1_keys[i]], data.project3[i][project1_keys[i]],]
            var dta4=project_dta_values[j]
            json_array_key[project1_keys[i]] =[dta4]
          }
        }




        dynamicdata()
    }
  )
  .catch(error => console.log(error));

function dynamicdata(){

  console.log(project3_values)
    landgreet.innerHTML=landinPage_values["intro"]
    langingImg.setAttribute('src',landinPage_values['imgurl'])
   


    codingexp.innerHTML=aboutme_values['experience']
    completeProjects.innerHTML=aboutme_values['projects']
    phoneNumber.innerHTML=contact_values['phone']
    phoneNumber.setAttribute("href","tel:"+contact_values['phone'])
    emailAddress.innerHTML=contact_values['email']


    // project1 
var project1_array = [project1_name,project1_description,project1_imagepath,project1_demo,project1_github]


for(j =0; j< 4; j++){

}

for(i=0;i<project1_array.length;i++){
    switch(i){
      case 0:
        project1_array[i].innerHTML = project1_values['name']
        break
      case 1:
        project1_array[i].innerHTML = project1_values['description']
        break
      case 2:
        project1_array[i].setAttribute("src", project1_values['imagepath'])
        break
      case 3:
        project1_array[i].setAttribute("href", project1_values['demourl'])
        break
      case 4:
        project1_array[i].setAttribute("href", project1_values['githuburl'])
        break




    }

}

// console.log(projects_values['githuburl'])







}
