export const postActions = {
  SUBMIT_POST: "SUBMIT_POST",
  HANDLE_ERROR: "HANDLE_ERROR",
  ADD_LIKE: "ADD_LIKE",
  ADD_COMMENT: "ADD_COMMENT",
};

export const postStates = {
  error: false,
  posts: [],
  likes: [],
  comments : [],
};

export const postsReducer = (state, action) => {
  switch (action.type) {
    // CASE 1
    case postActions.SUBMIT_POST:
      return {
        ...state,
        error: false,
        posts: action.posts,
      };
    // CASE 2
    case postActions.ADD_LIKE:
      return {
        ...state,
        error: false,
        likes: action.likes,
      };
    // case 3
    case postActions.HANDLE_ERROR:
      return {
        ...state,
        error: true,
        posts: [],
      };
    // case 4
    case postActions.ADD_COMMENT:
      return {
        ...state,
        error: false,
        comments: action.comments,
      };

    default:
      return state;
  }
};
