function user(state = {}, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.payload.user;
    default:
      return state;
  }
}

export { user };
