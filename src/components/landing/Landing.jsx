import React from 'react';
import Header from './Header.jsx';
import {ChannelPageContainer} from "./channelPage/ChannelPageContainer.jsx";
import {ChannelPage} from "./channelPage/ChannelPage.jsx";


class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <ChannelPageContainer
                    render={(playlist) =>
                        <ChannelPage
                            playlist={playlist}
                        />
                    }
                />
            </div>
        );
    }
}

export default Landing;
