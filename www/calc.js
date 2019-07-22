function addnumbers() {
  var firstnum = document.getElementById('firstnumber').value;
  var secondnum = document.getElementById('secondnumber').value;
  var totalnum = Number(firstnum) + Number(secondnum);
  ons.notification.toast('Sum Of Two Numbers is ' + totalnum, {
    timeout: 2000
  });
}
function clearnumbers() {
  document.getElementById('firstnumber').value = '';
  document.getElementById('secondnumber').value = '';
}
