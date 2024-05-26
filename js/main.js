var siteNameInput = document.getElementById("bookmakeName");
var siteURLInput = document.getElementById("bookmakeURL");
var inp1 = document.getElementById("input1");
var inp2 = document.getElementById("input2");
var closeBtn = document.getElementById("closeBtn")
var modal = document.getElementById("exampleModal")
var allSites;

if (localStorage.getItem("allSites") != null) {

  allSites = JSON.parse(localStorage.getItem("allSites"))
  display()
} else {
  allSites = []
}



function getvalues() {

  if (validationName() == true && validationURL() == true) {

    var sites = {
      name: siteNameInput.value,
      url: siteURLInput.value
    }

    allSites.push(sites)
    localStorage.setItem("allSites", JSON.stringify(allSites))
    console.log(allSites);
    display()
    clear();
  }



}

function clear() {

  siteNameInput.value = ""
  siteURLInput.value = ""
}
// `https://${userURL}`;

function display() {
  var cartoona = ""

  for (var i = 0; i < allSites.length; i++) {


    cartoona += `<tr>
        
    <td>${i + 1}</td>
        <td>${allSites[i].name}</td>
        <td>
            <a class="btn vbtn" href="${allSites[i].url}" target="_blank">
             <i class="fa-solid fa-eye pe-2"></i> visit </a>
        </td>
        
        <td>
          <button onclick="deleteSite(${i})" class="btn btn-danger">  <i class="fa-solid fa-trash-can pe-2"></i> Delete </button>
        </td>
      </tr>`


  }

  document.getElementById("tableContent").innerHTML = cartoona
}

function deleteSite(index) {

  allSites.splice(index, 1)
  localStorage.setItem("allSites", JSON.stringify(allSites))
  display()
}


function validationName() {

  var regexname = /^[A-Z][a-z]{3,20}$/gi

  if ( regexname.test(siteNameInput.value) == true) {
    return true

  }

  document.getElementById("exampleModal").classList.replace("d-none","d-block")
  return false
}

function validationURL() {

  var regexurl = /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
  if (regexurl.test(siteURLInput.value) == true) {

    return true

  }
  document.getElementById("exampleModal").classList.replace("d-none","d-block")
  return false
}

function closeModal(){

  modal.classList.add("d-none");
}
closeBtn.addEventListener("click", closeModal);