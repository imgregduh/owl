import React from 'react';
import {ChannelApi} from "../../../api/channelApi";


export class ChannelPageContainer extends React.Component {

    constructor() {
        super();
        this.state = {
            playlist: [],
            loadingFailed: false
        };
        this.channelApi = new ChannelApi()
    }

    componentDidMount() {
        this.channelApi.getChannelVideos('hdcomedy')
            .then(res => res.data)
            .then(parsedData => parsedData.data.map(video => (
                {
                    uri: video.uri,
                    name: video.name,
                    description: video.description,
                    thumbnailImage: video.pictures.sizes[video.pictures.sizes.length - 1] ? video.pictures.sizes[video.pictures.sizes.length - 1]["link"] : null,
                    link: video.link,
                    plays: video.stats.plays
                }
            )))
            .then(videoData => {
                this.setState({playlist: videoData});
                this.setState({loadingFailed: false})
            })
            .catch((e) => {
                console.log(e)
                this.setState({loadingFailed: true})
            });
    }

    render() {
        {
            if (this.state.playlist.length > 0) {
                return (
                    this.props.render(this.state.playlist)
                )
            } else if (!this.state.loadingFailed) {
                return (<div>Loading playlist...</div>)
            } else {
                return (<div>Loading failed...</div>)
            }
        }
    }
}