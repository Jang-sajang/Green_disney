var checkAll = document.getElementById("checkAll");
var TermsOfUse = document.getElementById("TermsOfUse");
var personalInfo = document.getElementById("personalInfo");
var infoGive = document.getElementById("infoGive");

checkAll.addEventListener('change', function () {
  if (this.checked) {
    TermsOfUse.checked = this.checked;
    personalInfo.checked = this.checked;
    infoGive.checked = this.checked;
  }else if(TermsOfUse.checked && personalInfo.checked && infoGive.checked){
    TermsOfUse.checked = false;
    personalInfo.checked = false;
    infoGive.checked = false;
  }
});

TermsOfUse.addEventListener('change', function () {
  if (this.checked) {
    if(
      personalInfo.checked == true &&
      infoGive.checked == true &&
      checkAll.checked ==false
    ){
      checkAll.checked = true;
    }
  }else{
    checkAll.checked = false;
  }
});

personalInfo.addEventListener('change', function () {
  if (this.checked) {
    if(
      TermsOfUse.checked == true &&
      infoGive.checked == true &&
      checkAll.checked ==false
    ){
      checkAll.checked = true;
    }
  }else{
    checkAll.checked = false;
  }
});

infoGive.addEventListener('change', function () {
  if (this.checked) {
    if(
      TermsOfUse.checked == true &&
      personalInfo.checked == true &&
      checkAll.checked ==false
    ){
      checkAll.checked = true;
    }
  }else{
    checkAll.checked = false;
  }
});