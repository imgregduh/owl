# The Playlist Page

We would like you to create an interactive playlist viewing experience, making use of our [open source player](https://developer.vimeo.com/player). A rough design of the page is below, but feel free to take creative liberties with the look and feel.

## Your Spec

### Layout

```
 ----------------------    ----------------
|                      |   | [next video] |
|       [player]       |   ----------------
|                      |   | [next video] |
 ----------------------    ----------------
    Title                  | [next video] |
    Description            ----------------
                           | [next video] |
                           ----------------
```

### Criteria
- Choose your favorite channel on https://vimeo.com/channels
- Make an API application for your page ([documentation](https://developer.vimeo.com/api/start))
- `GET` the list of videos from channels endpoint ([`https://api.vimeo.com/channels/{channel_id}/videos`](https://developer.vimeo.com/api/endpoints/channels#GET/channels/{channel_id}/videos))
- The player should be our [open source player](https://developer.vimeo.com/player), automatically loaded with the first video in the channel
- All subsequent videos go in the list to the right of the player
- Clicking a video in the list loads it into the player and scrolls the list appropriately
- Aside from the view libraries provided (React + CSS Modules), please write everything else from scratch
    - No libraries or frameworks, but icon sets (FontAwesome, ionicoons) are fine to use


## Things We Care About
- Semantic HTML
- Purposeful CSS (clean syntax, use of the cascade, etc.)
- Modular, reusable JavaScript
- Page responsiveness
- Layouts using modern CSS (really _flex_ your skills)
- Purposeful transitions & animations

## Things We Don't Care About
- Legacy browser support

## Bonus Points For
- Loading states
- Follow Vimeo styles from our site
- General playfulness

## Getting started

1. Install yarn
    ```
    $ curl -o- -L https://yarnpkg.com/install.sh | bash
    ```
2. Install dependencies
    ```
    $ yarn install
    ```
3. Build assets
    ```
    $ yarn build
    ```
4. Open the page
    ```
    $ open index.html
    ```

## Submission

1. Please answer the following questions in your README:

    1. Was the question/problem clear? Did you feel like something was missing or not explained correctly?

    *I felt the given description was the typical set of business requirements that specified the needed features and left UI design to interpretation.  That being said, I wasnt entirely sure if I was allowed to install any dev related tools like webpack-dev-server, I didnt see a problem with doing so since it's not part of the application but it was not clear in the description if a person could do that.  I did like the the care and not care about list, it felt like characteristics of a product owner.  Other than that, I didnt realize I needed a linux instance to run the yarn submit command till I was done with the test.  I had to install the windows 10 linux subsystem to run it.*

    2. How much time did you spend on each part: understanding, designing, coding, testing?

    *I would like to mention most of my recent experience has been in angular 4 and my experience with react is very minimal up until now.  I spent most of my coding time researching or investigating how to do various things in react that I knew I had to do.  For example, I knew I had to pass data from one component to another but I didnt know how to do that in react until I did some research.(child to parent: lift state via callback, parent to child: use props, siblings do both)*
    *understanding: ~30 mins*
    *designing: ~30 mins*
    *coding: ~6 hours I would say a good percentage of this time was looking up equivalencies*
    *test: Collectively ~2 hours everytime I made a change I ran the application to ensure it was working as anticipated. In doing so, I would sometimes hit the "hit" cap on the api call really fast which would cause me to wait 30 minutes being continuing.  Later I noticed that if I refined the query to give me specific field it would start sending me cached data.*

    3. What would you have done differently if you have more time or resources?

    *Initially, I would add unit test around business logic and around api calls(check if fields have been removed or changed), so that I can simply run a test plan over and over to ensure my other changes have not broken.  If I had more resources, I would have deployed it to a dev environment to see if it was working as anticipated. I find it common that at least one thing does not work when deployed. Once, deployed I would have then tested the application in safari using a mac device if owned one.*

    4. Are there any bottlenecks with your solution? if so, what are they and what can you do to fix them/minimize their impact?

    *The channel I picked did not exceed the paging limit, so I assume if it did I would need to make another call to get the next set.  I would probably make another call when I detect the user has scroll to a certain threshold in the playlist to the right and add more videos to the playlist.  Another thing, would be the thumbnail because I am selecting the first one in the sizes array for each video in the playlist.  If the size of the image is really small it may be really blurry when expanded.*

    5. How would the system scale for more users/visitors?

    *I would include the babel-polyfill lib to allow users to use IE11 if they wanted to or to allow IE11 only users to access it. Most of the larger companies are stuck using only 1 or 2 different browsers and IE is usually one of them since it comes with the windows OS image and can be customized for the companies needs. Other than that, I would focus more on supporting as many devices as possible and ensure the user experience is top notch in order to draw the user back to the application.  Now a days, most web applications have a mobile application to provide an apprioriate user experience. There was a time when people actually went to websites on their phones but that era is dying out quickly.*

    6. How would your solution cope if the API was slow or broke or returned incorrect data?

    *I tried to chain up all the promises and corresponding logic, in order to avoid any race conditions.  As for broken api, all the promises have a catch function, so if something failed while processing then it would be output to the console then the application will rely on default values. For slow api response, I would add a loading indicator to show the user the application is still running and trying to get data.  If there is a chance that the response might never come then we need to have a timeout mechanism so the user isnt waiting longer than they should for a bad response.*

    7. Anything else you want to share about your solution or the problem?

    *I have removed any console.log functions I had there because that is not the recommended way of logging for any web application.  Since, the business requirements said not to import any libs, I was left to use console.log.  If I had a choice I would have picked a logger that you can turn off by severity.  I found it odd that the response from the api for channel did not have a field for videoId for a single video element inside the data array.  I found myself extracting it from the url.  Other than that, since I have ramped up on react, I feel I could have taken less time to complete this test than what I have stated above in question 2. That being said, I did learn a lot about react is a short period of time.*

2. Run the submit script to create a gist of your work to send back to us

    ```
    $ yarn submit
    ```
