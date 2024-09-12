const actions = {
  SET_ACCESS_TOKEN: "auth/SET_ACCESS_TOKEN",

  setAccessToken: (token) => (dispatch) =>
    dispatch({
      type: actions.SET_ACCESS_TOKEN,
      token,
    }),
};

export default actions;
