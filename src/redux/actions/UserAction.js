import UserService from "../../services/UserService";

export const USER_ACTIONS = {
  LIST: "USER_LIST",
  FIND_BY_ID: "USER_FIND_BY_ID",
  SAVE: "USER_SAVE",
  UPDATE: "USER_UPDATE",
  DELETE: "USER_DELETE",
};

export function userList() {
  return function (callback) {
    UserService.list()
      .then((response) => {
        callback({
          type: USER_ACTIONS.LIST,
          content: response.data,
        });
      })
      .catch(handleError);
  };
}

export function userFindById(id) {
  return async function (callback) {
    await UserService.findById(id).then((response) => {
      callback({
        type: USER_ACTIONS.FIND_BY_ID,
        content: response.data,
      });
    }).catch(handleError);
  };
}

export function userDeleteById(id) {
  return function (callback) {
    UserService.deleteById(id).then((response) => {
      callback({
        type: USER_ACTIONS.DELETE,
        content: id,
      });
    }).catch(handleError);
  };
}

export function userSave(user) {
  return function (callback) {
    UserService.save(user).then((response) => {
      if (user.id !== undefined) {
        callback({
          type: USER_ACTIONS.UPDATE,
          content: response.data,
        });
      } else {
        callback({
          type: USER_ACTIONS.SAVE,
          content: response.data,
        });
      }
    });
  };
}


function handleError(error) {
  if (error.response.status === 404) {
    alert('Usuário não encontrado!');
  } else {
    alert(error);
  }
}