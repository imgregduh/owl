import React from 'react';
import {VerticalPlayListComponent} from "./verticalPlaylist/VerticalPlaylist.jsx";
import styles from './ChannelPage.css';
import {VimeoPlayerComponent} from "./videoSection/VimeoPlayer.jsx";

export class ChannelPage extends React.Component {
    constructor() {
        super();
        this.state = {
            videoPlaylistHeight: 0,
            videoSectionWidth: 0,
            selectedVideo: undefined
        };
        this.onSelectVideo = this.onSelectVideo.bind(this);
    }

    getThumbnail(video) {
        if (video.pictures.sizes[video.pictures.sizes.length - 1]) {
            return video.pictures.sizes[video.pictures.sizes.length - 1]["link"]
        }
        return null
    }

    componentDidMount() {
        if (!this.state.selectedVideo) {
            this.onSelectVideo(this.props.playlist[0])
        }
    }

    onSelectVideo(selectedVideoInfo) {
        this.setState({selectedVideo: selectedVideoInfo});
    }

    maybeVideoPlayer(){
        if(this.state.selectedVideo){
            return (<VimeoPlayerComponent selectedVideo={this.state.selectedVideo}/>)
        }
        return null
    }

    render() {
        return (
            <section className={styles.ChannelPage}>
                <section
                    className={styles["ChannelPage-video-content"]}
                    ref={(container) => this.videoSection = container}
                >
                    {this.maybeVideoPlayer()}
                </section>
                <aside className={styles["ChannelPage-video-playlist-content"]}>
                    <VerticalPlayListComponent
                        playlist={this.props.playlist}
                        onSelectVideo={this.onSelectVideo}
                    />
                </aside>
            </section>
        );
    }
}