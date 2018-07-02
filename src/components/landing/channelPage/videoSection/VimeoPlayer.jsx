import React from 'react';
import Vimeo from '@vimeo/player';
import styles from './VimeoPlayer.css'

export class VimeoPlayerComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedVideo: props.selectedVideo
        }
    }

    componentDidMount() {
        const videoId = this.getVideoId(this.state.selectedVideo)
        if (videoId) {
            this.loadNewVideo(videoId);
        }
    }

    componentWillReceiveProps(nextProps) {

        const videoId = this.getVideoId(this.state.selectedVideo);
        const newVideoId = this.getVideoId(nextProps.selectedVideo);
        if (videoId !== newVideoId) {
            this.loadNewVideo(newVideoId);
            this.setState({selectedVideo: nextProps.selectedVideo})
        }
    }


    getVideoId(selectedVideo) {
        return selectedVideo.uri.replace('/videos/', '');
    }

    loadNewVideo(videoId) {
        console.log('Load: ' + videoId)
        if (this.vimeoPlayer) {
            this.vimeoPlayer.loadVideo(videoId)
                .catch(console.log.bind(console));
        }
        else {
            const options = {
                id: videoId,
            };
            this.vimeoPlayer = new Vimeo('vimeoPlayer', options);
        }
    }

    render() {
        return (
            <React.Fragment>
                <div
                    id="vimeoPlayer"
                    className={styles["VimeoPlayer-container"]}
                />
                <article>
                    <section className={styles["VimeoPlayer-container-title"]}>
                        <h2>{this.state.selectedVideo.name}</h2>
                        <section>
                            <i className="fas fa-play"/> {this.state.selectedVideo.plays}
                        </section>
                    </section>
                    <p>{this.state.selectedVideo.description}</p>
                </article>
            </React.Fragment>

        );
    }
}