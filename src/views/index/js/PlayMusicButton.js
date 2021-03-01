import React from "react";


class PlayMusicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mb-4">
        <button type="button" className="btn btn-outline-info">Play music</button>
        <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/389088543&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
        <div style={{ fontSize: '10px', color: '#cccccc', lineBreak: 'anywhere', wordBreak: 'normal', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', fontFamily: 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif', fontWeight: 100 }}>
          <a href="https://soundcloud.com/grenudo999" title="grenudo" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>grenudo</a> · <a href="https://soundcloud.com/grenudo999/lofi-hip-hop" title="Lofi Hip Hop" target="_blank" style={{ color: '#cccccc', textDecoration: 'none' }}>Lofi Hip Hop</a>
        </div>

        {/* <iframe className="position-absolute" style={{ top: "0" }} width="560" height="315" src="https://www.youtube.com/embed/videoseries?autoplay=1&list=PL0ONFXpPDe_mtm3ciwL-v7EE-7yLHDlP8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe> */}
      </div>
    );
  }
}

export default PlayMusicButton;
