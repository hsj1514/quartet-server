This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is the back-end server for our application. It exists to support multiplayer features for audience interactions, as well as supporting performer-audience interactions.

Currently, all client requests are handled through GET methods.

The list of GET methods this server handles is as the following:

-  /test: Called when a new user connects. Resets server parameters
-  /update: Requested by client every 3 seconds. Responds with list of stored parameters
-  /play: Requested by performer client when music/video is played. Sets isPlaying to true
-  /broadcast: Requested by performer client when broadcast is made. Stores broadcast message.
-  /name: Requested by audience client when a username is selected. Stores username.
-  /action: Requested by audience client when they perform any interaction. Updates action status.
-  /score: Requested by audience client when score is updated. Not fully implemented yet.