var addUser = function () {
  window.location.href = '/user/add';
};

var editUser = function (id) {
  window.location.href = '/user/edit/' + id;
};

var deleteUser = function (id) {
  var deleteConfirmation = confirm('User with id: ' + id + ', will be deleted!');
  if (deleteConfirmation) {
    window.location.href = '/user/delete/' + id;
  }

};
