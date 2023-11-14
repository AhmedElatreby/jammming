import React from "react";
import styles from "./Tracklist.css";
import Track from "../Track/Track";
import SearchResults from "../SearchResults/SearchResults";

class Tracklist extends React.Component {
  render() {
    const { tracks } = this.props;
    if (!tracks) {
      return null;
    }
    return (
      <div className="Tracklist">
        {this.props.tracks.map((song) => {
          return (
            <Track
              key={song.id}
              track={song}
              onAdd={this.props.onAdd}
              onRemove={this.props.onRemove}
              isRemoval={this.props.isRemoval}
            />
          );
        })}
      </div>
    );
  }
}
export default Tracklist;
