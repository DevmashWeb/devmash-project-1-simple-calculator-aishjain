var str="";
function v(val) {
  document.getElementById("d").value+=val;
  str+=val;
  //console.log("val "+val);
  //console.log("str "+str);

}
function n(val) {
  document.getElementById("d").value=val;
  //console.log("acce "+val);
  str="";
}
function a() {

  document.getElementById("d").value=eval(str);
}
