import React from 'react';
import styles from './VerticalPlaylist.css';

export class VerticalPlayListComponent extends React.Component {
    constructor(props) {
        super(props);
    };
    
    onClickThumbnail(videoInfo) {
        console.log(videoInfo)
        this.props.onSelectVideo(videoInfo);
        const list = document.getElementById('videoPlaylist');
        const videoElement = document.getElementById(videoInfo.uri);
        list.parentElement.scroll({
            top: videoElement.offsetTop - 10, 
            left: 0, 
            behavior: 'smooth' 
          });
    }

    render() {
        const playlist = this.props.playlist;
        return (
            <ol id='videoPlaylist'>
                {
                    playlist.map(video => {
                        return <li key={video.uri} id={video.uri}>
                            <a>
                                <img
                                    className={styles.videoInfoThumbnail}
                                    src={video.thumbnailImage}
                                    width="130"
                                    height="73"
                                    onClick={() => { this.onClickThumbnail(video) }}
                                />
                            </a>
                            <a>
                                <h5
                                    className={styles.videoInfoPreview}
                                    onClick={() => { this.onClickThumbnail(video) }}
                                >
                                    {video.name}
                                </h5>
                            </a>
                        </li>
                    })
                }
            </ol>
        );
    }
}