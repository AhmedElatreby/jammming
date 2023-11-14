import React from "react";
import styles from "./SearchResults.css";
import Tracklist from "../Tracklist/Tracklist";

class SearchResults extends React.Component {
  render() {
    return (
      <div className={styles.SearchResults}>
        <h2>Results</h2>
        <Tracklist
          tracks={this.props.searchResults}
          onAdd={this.props.onAdd}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
