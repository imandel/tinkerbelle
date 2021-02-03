# Tinkerbelle

Tinkerbelle is a simple tool for prototyping interaction. using a phone as a smart light. You can control it via the web interface or using any software that can connect to a websocket. In the Python folder you will find a simple example that demonstrates a color gradient.

## Installation

You must have [npm and node installed](https://nodejs.org/en/download/).

clone this repo and install dependencies.

```
$ git clone git@github.com:imandel/tinkerbelle.git
$ cd tinkerbelle
$ npm install
```

## Getting started

```
$ npm run start
> tinkerbelle@1.0.0 start
> node server.js

192.168.1.999
Server is listening on 3000!
Access at: http://192.168.1.999:3000
```
#### On a mobile device
Make sure you are connected to the same network as the computer you are running the web-server. Turn your brightness and volume to full. In your phone settings, set the screen to never shut off or lock. On the phone browser navigate to whatever ip address is printed out in the console. In this case that would be `http://192.168.1.999:3000`

There should be two buttons. Selecting tinkerbell should full screen the webpage and fade out the buttons.

![mobile screen](/imgs/phone1.png)

#### On a computer
Navigate to the ip address shown in terminal `http://192.168.1.999:3000` or of using the same computer as the web-server `http://localhost:3000`.

Select [Jane Wren](https://en.wikipedia.org/wiki/Tinker_Bell#On_stage) for the controller. 

![control interface](/imgs/controller.png)

Here changing the color on the color selector will change the background for both the control interface and the tinker-belle device.

You can change the swatches shown at the bottom of the color selector by editing lines 49 to 66 in `public/index.js` and restarting the web-server.

```
swatches: [
        'rgba(255, 255, 255, 1)',
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)',
        'rgba(0, 0, 0, 1)',
      ],
```

Typing a description in the Audio input box will play the first result from [https://freesound.org/](https://freesound.org/). The stop button stops playback. Try typing `gong` or `barking`.

#### Programmatically

Any program capable of opening a web-socket client can control tinkerbelle by sending messages. There is an example in `python/ws.py` that demonstrates a simple gradient and plays a sound. Install the requirements and change line 6 to your ip address. 

```
ws = create_connection("ws://IPADDRESS:3000/")
```