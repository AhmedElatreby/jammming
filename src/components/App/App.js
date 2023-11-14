import React from "react";
import styles from "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Example Track Name 1",
          artist: "Example Track Artist 1",
          album: "Example Track Album 1",
          id: 1,
        },
        {
          name: "Example Track Name 2",
          artist: "Example Track Artist 2",
          album: "Example Track Album 2",
          id: 2,
        },
      ],
      playlistName: "Example Playlist Name",
      playlistTracks: [
        {
          name: "Example Playlist Name 1",
          artist: "Example Playlist Artist 1",
          album: "Example Playlist Album 1",
          id: 11,
        },
        {
          name: "Example Playlist Name 2",
          artist: "Example Playlist Artist 2",
          album: "Example Playlist Album 2",
          id: 22,
        },
        {
          name: "Example Playlist Name 3",
          artist: "Example Playlist Artist 3",
          album: "Example Playlist Album 3",
          id: 33,
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const foundTrack = this.state.playlistTracks.find(
      (playlistTrack) => playlistTrack.id === track.id
    );
    const newTrack = this.state.playlistTracks.concat(track);
    foundTrack
      ? console.log("track exists")
      : this.setState({ playlistTracks: newTrack });
  }

  removeTrack(track) {
    const isPresent = this.state.playlistTracks.filter(
      (playlistTrack) => playlistTrack.id !== track.id
    );
    this.setState({ playlistTracks: isPresent });
  }

  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }

  savePlaylist() {
    const trakURIs = this.state.playlistTracks.map((track) => track.uri);
  }

  search(term) {
    Spotify.search(term)
      .then((result) => {
        this.setState({ searchResults: result });
      })
      .catch((error) => {
        console.error("Error searching for tracks:", error);
      });
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
