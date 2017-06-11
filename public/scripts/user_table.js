var addUser = function () {
  window.location.href = '/user/add';
};

var editUser = function (id) {
  window.location.href = '/user/edit/' + id;
};

var deleteUser = function (id) {
  window.location.href = '/user/delete/' + id;
};
