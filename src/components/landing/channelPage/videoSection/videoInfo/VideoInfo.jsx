import React from 'react';
import styles from './VideoInfo.css'

class VideoInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVideo: props.selectedVideo
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedVideo: nextProps.selectedVideo
        })
    }

    render() {
        return (
            <article>
                <section className={styles.videoTitleSection}>
                    <h2>{this.state.selectedVideo.name}</h2>
                    <section>
                        <i className="fas fa-play"/> {this.state.selectedVideo.plays}
                    </section>
                </section>
                <p>{this.state.selectedVideo.description}</p>
            </article>
        );
    }
}

export default VideoInfoComponent;