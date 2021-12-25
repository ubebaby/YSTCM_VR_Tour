var APP_DATA = {
  "scenes": [
    {
      "id": "0-alice-lee-plaza",
      "name": "Alice Lee Plaza",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 2.8890945468506084,
        "pitch": -0.0630361858920665,
        "fov": 1.5221166547874645
      },
      "linkHotspots": [
        {
          "yaw": -2.92438070249357,
          "pitch": 0.012172559146964801,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.1142627858512952,
          "pitch": -0.16430703882083364,
          "title": "NUS Museum",
          "text": "The NUS Museum is the oldest university museum in Singapore."
        },
        {
          "yaw": -2.5767317010010267,
          "pitch": -0.13363293258234243,
          "title": "Yong Siew Toh Conservatory of Music",
          "text": "YSTCM is Singapore's first conservatory of music."
        }
      ]
    },
    {
      "id": "1-conservatory-foyer",
      "name": "Conservatory Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7550970503078087,
          "pitch": 0.014486048365728976,
          "rotation": 0,
          "target": "0-alice-lee-plaza"
        },
        {
          "yaw": -2.9723492393537647,
          "pitch": 0.07600588129885111,
          "rotation": 0,
          "target": "2-conservatory-lounge"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.4159072550497758,
          "pitch": -0.1567774724072759,
          "title": "Pa Kua Sculpture",
          "text": "YSTCM Sculpture by Chong Fahcheong."
        }
      ]
    },
    {
      "id": "2-conservatory-lounge",
      "name": "Conservatory Lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.41443631116832336,
          "pitch": 0.1549064503350781,
          "rotation": 0,
          "target": "1-conservatory-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5501443754166431,
          "pitch": -0.20243819044087275,
          "title": "Picture Wall",
          "text": "YSTCM achievements photo wall."
        }
      ]
    }
  ],
  "name": "NUS Music Conservatory Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
