export const initialState = {
  user: null,
  // token:
  //   "BQAFNo57Yp8jlq3QPSSNYeSKrnXmYcNxns8zThkrp8qGwXGBhShO-hcPi4m4ogfXdejJhyQtdaV_n6s6mt4goqhFakOJml6730_jYBVUAgT9xyR4QQnnm3fDnyHAHpv4hU6lmeMaTz-_0s6f_xWxC4RfC0FVbHkdrE2-zExs4caF-6q9",
  token: null,
  playlists: [],
  playing: false,
  item: null,
  recommendations: [],
  recentlyPlayed: [],
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_RECOMMENDETIONS":
      return {
        ...state,
        recommendations: action.recommendations,
      };
    case "SET_RECENTLYPLAYEDTRACKS":
      return {
        ...state,
        recentlyPlayed: action.recentlyPlayed,
      };
    default:
      return state;
  }
};

export default reducer;
