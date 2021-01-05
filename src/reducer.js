export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:"BQCSZtO_6hfiOT-rhOBZ4AsLDGuKorKK0ZszDIjU-c_96oLImqmBiGGo8SMO2m8DJ4en43QUCwNdwMBmrt2cq9QgmRcols64D-qEICTQQeE5IV4Z2rV0oKG9ZY5i70hs4ixIkuiBEJb5M14Aty1Xn0pCeKJ9s2OuDERcg9Kx1zJ9mCyT-MLS",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.payload.discover_weekly,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    default:
      return state;
  }
};
export default reducer;
