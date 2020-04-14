$(document).ready(function () {
  $(".modal").modal();
});

function toggleModal() {
  var instance = M.Modal.getInstance($("#modalThree"));
  instance.open();
}
