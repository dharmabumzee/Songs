import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Anemone",
      duration: "5:35",
    },
    {
      title: "Pish",
      duration: "5:00",
    },
    {
      title: "Supersonic",
      duration: "5:06",
    },
    {
      title: "Foggy Notion",
      duration: "6:59",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
