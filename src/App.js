import React from "react";
import "./styles.css";

class SongElement {
  constructor(song, next = null) {
    this.song = song;
    this.next = next;
  }
}
class SongPlayList {
  constructor() {
    this.head = null;
  }
  addSong(newSong) {
    const song = new SongElement(newSong, this.head);
    this.head = song;
  }
  dispalySongNames() {
    let song = this.head;
    let li = ``;
    while (song) {
      li += `${song.song.name}`;
      song = song.next;
    }
    return li;
  }
}
export default function App() {
  const newPlayList = new SongPlayList();
  newPlayList.addSong({
    name: "Dhoom1",
    fileLocation: "https://www.w3schools.com/tags/horse.ogg",
    year: 2020,
    album: "Rockstar"
  });
  newPlayList.addSong({
    name: "Dhoom2",
    fileLocation: "https://www.w3schools.com/tags/horse.ogg",
    year: 2020,
    album: "Rockstar"
  });
  console.log(newPlayList.dispalySongNames());
  return (
    <div className="App">
      <div>
        <ul>{newPlayList.dispalySongNames()}</ul>
      </div>
      <audio controls>
        <source
          src="https://www.w3schools.com/tags/horse.ogg"
          type="audio/ogg"
        />
        <source
          src="https://www.w3schools.com/tags/horse.ogg"
          type="audio/mpeg"
        />
        Your browser does not support the audio tag.
      </audio>
      <button>next</button>
      <button>prev</button>
    </div>
  );
}

// 1) link audio src
// 2) dispaly playsling songs
// next prev button
