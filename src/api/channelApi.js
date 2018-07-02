import * as axios from "axios";

export class ChannelApi {
    getChannelVideos(channelId) {
        return axios.get(VIMEO_API_CHANNELS_URL + '/' + channelId + '/videos?fields=' +
            'uri,' +
            'name,' +
            'description,' +
            'link,' +
            'pictures,' +
            'stats,' +
            'metadata.connections.comments,' +
            'metadata.connections.likes,' +
            'user.link,' +
            'user.name,status', {
            headers: {
                'Authorization': AUTH_TOKEN,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
}