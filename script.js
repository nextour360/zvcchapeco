(function(){
    var script = {
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "start": "this.playAudioList([this.audio_2A7B8CFA_353E_6603_41B6_E697A49427B3]); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "data": {
  "name": "Player468"
 },
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "class": "Player",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "definitions": [{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -0.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": 5.32
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5491042B_4AF7_4F6E_41A2_E610218DC247",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 5.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -0.41,
  "class": "PanoramaCameraPosition",
  "pitch": 5.32
 }
},
{
 "items": [
  {
   "start": "this.viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2AFE71E9_393F_C8ED_4189_EA0A60EE86E2, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2AFE71E9_393F_C8ED_4189_EA0A60EE86E2, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2VideoPlayer)",
   "media": "this.video_1BF6A63E_3336_6203_4199_5C8C3DC36989",
   "player": "this.viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2AFE71E9_393F_C8ED_4189_EA0A60EE86E2",
 "class": "PlayList"
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_52A3175D_4911_C925_41C8_B6CB40047BD5",
   "camera": "this.panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_385DF719_331A_220E_41A3_81D50C099301",
   "camera": "this.panorama_385DF719_331A_220E_41A3_81D50C099301_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF",
   "camera": "this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B",
   "camera": "this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
   "camera": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E",
   "camera": "this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035",
   "camera": "this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF",
   "camera": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5",
   "camera": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_38285C4C_331A_E607_41B6_B816D19E9345",
   "camera": "this.panorama_38285C4C_331A_E607_41B6_B816D19E9345_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.video_21AE9010_3316_5E1F_41B3_4A815E77C02F",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 11)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.video_206D619E_331A_FE03_41AF_F84F7BC68076",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 12)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.video_2790D3EC_332E_6207_41C1_66E8ABC177D5",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 13)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.video_26E695F5_3336_6601_41BD_F4C2652F015A",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 14)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.video_27BD338A_333A_E203_41C7_2768A5B95173",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 15)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.video_29F49ADA_352A_2203_41C2_FE1C6ED9CC99",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "end": "this.trigger('tourEnded')",
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 16, 0)",
   "media": "this.video_1BF6A63E_3336_6203_4199_5C8C3DC36989",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/video_1BF6A63E_3336_6203_4199_5C8C3DC36989_t.jpg",
 "label": "Snapinsta.app_video_247299378_409252474111620_2103927536961492510_n.mp4 - Copia",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 720,
 "loop": false,
 "id": "video_1BF6A63E_3336_6203_4199_5C8C3DC36989",
 "height": 900,
 "video": {
  "width": 720,
  "height": 900,
  "class": "VideoResource",
  "mp4Url": "media/video_1BF6A63E_3336_6203_4199_5C8C3DC36989.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "id": "panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -11.86,
  "class": "PanoramaCameraPosition",
  "pitch": -3.68
 }
},
{
 "items": [
  {
   "start": "this.viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2AFF51E9_393F_C8ED_4191_4C552FA7F928, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2AFF51E9_393F_C8ED_4191_4C552FA7F928, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101VideoPlayer)",
   "media": "this.video_206D619E_331A_FE03_41AF_F84F7BC68076",
   "player": "this.viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2AFF51E9_393F_C8ED_4191_4C552FA7F928",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_549F241F_4AF7_4F25_41A8_28D7D0B6E030",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 26.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 7.41,
 "id": "popup_202CD66F_332E_2201_41C6_7896E3D4F82C",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "pitch": -5.32,
 "showDuration": 500,
 "autoplay": true,
 "yaw": -2.17,
 "showEasing": "cubic_in",
 "video": {
  "width": 720,
  "height": 900,
  "class": "VideoResource",
  "mp4Url": "media/video_2790D3EC_332E_6207_41C1_66E8ABC177D5.mp4"
 }
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 16.22,
 "id": "popup_27A40976_3336_6E03_41A0_A0F4553317D7",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "pitch": -9.34,
 "showDuration": 500,
 "autoplay": true,
 "yaw": -0.44,
 "showEasing": "cubic_in",
 "video": {
  "width": 720,
  "height": 900,
  "class": "VideoResource",
  "mp4Url": "media/video_26E695F5_3336_6601_41BD_F4C2652F015A.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_38285C4C_331A_E607_41B6_B816D19E9345_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/video_21AE9010_3316_5E1F_41B3_4A815E77C02F_t.jpg",
 "label": "ZEISS PhotoFusion X Lenses_ Performance Perfected. (2)",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "loop": false,
 "id": "video_21AE9010_3316_5E1F_41B3_4A815E77C02F",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_21AE9010_3316_5E1F_41B3_4A815E77C02F.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54C7B45A_4AF7_4F2F_41CD_515664E4F748",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -179.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_385DF719_331A_220E_41A3_81D50C099301_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -17.89,
  "class": "PanoramaCameraPosition",
  "pitch": 6.66
 }
},
{
 "thumbnailUrl": "media/video_206D619E_331A_FE03_41AF_F84F7BC68076_t.jpg",
 "label": "Precision spectacle Lenses by ZEISS",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "loop": false,
 "id": "video_206D619E_331A_FE03_41AF_F84F7BC68076",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_206D619E_331A_FE03_41AF_F84F7BC68076.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "displayOriginPosition": {
  "hfov": 165,
  "yaw": 0,
  "stereographicFactor": 1,
  "class": "RotationalCameraDisplayPosition",
  "pitch": -90
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "displayMovements": [
  {
   "duration": 1700,
   "easing": "linear",
   "class": "TargetRotationalCameraDisplayMovement"
  },
  {
   "duration": 3000,
   "targetStereographicFactor": 0,
   "easing": "cubic_in_out",
   "class": "TargetRotationalCameraDisplayMovement",
   "targetPitch": 0
  }
 ]
},
{
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_33FB0CBD_3931_7F6A_41B4_202E5837C8F8",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBorderSize": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "shadowSpread": 1,
 "scrollBarWidth": 10,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderSize": 0,
 "overflow": "scroll",
 "closeButtonPressedIconColor": "#888888",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "bodyPaddingBottom": 0,
 "veilOpacity": 0.4,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonPaddingTop": 5,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingBottom": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52D"
 ],
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "borderRadius": 5,
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingLeft": 10,
 "borderSize": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "data": {
  "name": "Window475"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0
},
{
 "items": [
  {
   "start": "this.viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2AFD31E8_393F_C8EB_41C5_2C8BE3407A40, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2AFD31E8_393F_C8EB_41C5_2C8BE3407A40, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969VideoPlayer)",
   "media": "this.video_27BD338A_333A_E203_41C7_2768A5B95173",
   "player": "this.viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2AFD31E8_393F_C8EB_41C5_2C8BE3407A40",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "22",
 "id": "panorama_38285C4C_331A_E607_41B6_B816D19E9345",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 144.19,
   "yaw": -130.81,
   "panorama": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_20FC930D_331A_6201_41A3_188F7B3C4157",
  "this.popup_20E3A315_331A_E201_41C1_6B8900287FC7",
  "this.overlay_20750ED1_3315_E201_4181_1EDF07EFE609"
 ]
},
{
 "displayPlaybackBar": true,
 "id": "MainViewerVideoPlayer",
 "viewerArea": "this.MainViewer",
 "class": "VideoPlayer"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "11",
 "id": "panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 23.84,
   "yaw": 126.11,
   "panorama": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 106.07,
   "yaw": -88.66,
   "panorama": "this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_20233F29_332E_6201_41B0_6373EC39BF24",
  "this.overlay_20201566_332A_2603_41C2_5EFE6EDDDCDA",
  "this.popup_27A40976_3336_6E03_41A0_A0F4553317D7",
  "this.overlay_27C794B1_3336_2601_41C0_19EC4A3A186E",
  "this.overlay_274C5E3F_3336_6201_4197_FCF06AE9F69D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -11.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -3.68
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_546AE3E8_4AF7_48EB_41CB_0AA8119F03BD",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -73.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "start": "this.viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52DVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2AFEB1E9_393F_C8ED_41C5_722D39A8ECBB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2AFEB1E9_393F_C8ED_41C5_722D39A8ECBB, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52DVideoPlayer)",
   "media": "this.video_26E695F5_3336_6601_41BD_F4C2652F015A",
   "player": "this.viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52DVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2AFEB1E9_393F_C8ED_41C5_722D39A8ECBB",
 "class": "PlayList"
},
{
 "items": [
  {
   "start": "this.viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2AFEE1E9_393F_C8ED_41C8_92C4E7BB10E6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2AFEE1E9_393F_C8ED_41C8_92C4E7BB10E6, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3VideoPlayer)",
   "media": "this.video_21AE9010_3316_5E1F_41B3_4A815E77C02F",
   "player": "this.viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3VideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2AFEE1E9_393F_C8ED_41C8_92C4E7BB10E6",
 "class": "PlayList"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -11.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -3.68
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54FAF4B7_4AF7_4F66_41A9_3B14744C4B96",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 47.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "items": [
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_52A3175D_4911_C925_41C8_B6CB40047BD5",
   "camera": "this.panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_385DF719_331A_220E_41A3_81D50C099301",
   "camera": "this.panorama_385DF719_331A_220E_41A3_81D50C099301_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF",
   "camera": "this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B",
   "camera": "this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
   "camera": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E",
   "camera": "this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035",
   "camera": "this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF",
   "camera": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5",
   "camera": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "player": "this.MainViewerPanoramaPlayer",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_38285C4C_331A_E607_41B6_B816D19E9345",
   "camera": "this.panorama_38285C4C_331A_E607_41B6_B816D19E9345_camera",
   "class": "PanoramaPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.video_21AE9010_3316_5E1F_41B3_4A815E77C02F",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.video_206D619E_331A_FE03_41AF_F84F7BC68076",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "media": "this.video_2790D3EC_332E_6207_41C1_66E8ABC177D5",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "media": "this.video_26E695F5_3336_6601_41BD_F4C2652F015A",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "media": "this.video_27BD338A_333A_E203_41C7_2768A5B95173",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "media": "this.video_29F49ADA_352A_2203_41C2_FE1C6ED9CC99",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MapViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16)",
   "begin": "this.fixTogglePlayPauseButton(this.MapViewerVideoPlayer)",
   "media": "this.video_14DFCB85_352A_E201_41B4_42F55EDB2A69",
   "player": "this.MapViewerVideoPlayer",
   "class": "VideoPlayListItem"
  },
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 0)",
   "media": "this.video_1BF6A63E_3336_6203_4199_5C8C3DC36989",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "partial": false,
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "2",
 "id": "panorama_385DF719_331A_220E_41A3_81D50C099301",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.5,
   "yaw": 166.3,
   "panorama": "this.panorama_52A3175D_4911_C925_41C8_B6CB40047BD5",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -1.52,
   "yaw": -28.52,
   "panorama": "this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "overlays": [
  "this.overlay_3C7BEDC1_3375_E601_41B5_34A189CD69FB",
  "this.overlay_5274FA27_4913_3B66_41BA_192C103C4EC9"
 ]
},
{
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_33C57CBD_3931_7F6A_41CB_557AD2D6E69B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBorderSize": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "shadowSpread": 1,
 "scrollBarWidth": 10,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderSize": 0,
 "overflow": "scroll",
 "closeButtonPressedIconColor": "#888888",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "bodyPaddingBottom": 0,
 "veilOpacity": 0.4,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonPaddingTop": 5,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingBottom": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2"
 ],
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "borderRadius": 5,
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingLeft": 10,
 "borderSize": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "data": {
  "name": "Window477"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0
},
{
 "thumbnailUrl": "media/video_14DFCB85_352A_E201_41B4_42F55EDB2A69_t.jpg",
 "label": "Mais que uma lente. Uma ZEISS!  _ 2016 (1)",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "loop": true,
 "id": "video_14DFCB85_352A_E201_41B4_42F55EDB2A69",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_14DFCB85_352A_E201_41B4_42F55EDB2A69.mp4"
 }
},
{
 "thumbnailUrl": "media/video_296D9B57_3517_E201_41C4_CA40712A0EEA_t.jpg",
 "label": "ZEISS Foco na Inf\u00e2ncia _ a\u00e7\u00e3o para ampliar os horizontes de crian\u00e7as que precisam (1)",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "loop": false,
 "id": "video_296D9B57_3517_E201_41C4_CA40712A0EEA",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_296D9B57_3517_E201_41C4_CA40712A0EEA.mp4"
 }
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "buttonCardboardView": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "id": "MainViewerPanoramaPlayer"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_532E151B_4AF7_492E_41C0_33CA50E2BD6E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 91.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5318F501_4AF7_491D_41B0_274F511D0F4D",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 102.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "thumbnailUrl": "media/video_29F49ADA_352A_2203_41C2_FE1C6ED9CC99_t.jpg",
 "label": "ZEISS Foco na Inf\u00e2ncia _ a\u00e7\u00e3o para ampliar os horizontes de crian\u00e7as que precisam (1)",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "loop": false,
 "id": "video_29F49ADA_352A_2203_41C2_FE1C6ED9CC99",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_29F49ADA_352A_2203_41C2_FE1C6ED9CC99.mp4"
 }
},
{
 "thumbnailUrl": "media/video_27BD338A_333A_E203_41C7_2768A5B95173_t.jpg",
 "label": "Seeing Beyond nos ajuda a enxergar o mundo dos nossos clientes - 2020",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 1280,
 "loop": false,
 "id": "video_27BD338A_333A_E203_41C7_2768A5B95173",
 "height": 720,
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_27BD338A_333A_E203_41C7_2768A5B95173.mp4"
 }
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 12.22,
 "id": "popup_26E5149D_333A_2601_41C2_4EFAC1FE6F5B",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "pitch": 5.32,
 "showDuration": 500,
 "autoplay": true,
 "yaw": -87.14,
 "showEasing": "cubic_in",
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_27BD338A_333A_E203_41C7_2768A5B95173.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54B3D44D_4AF7_4F25_4183_CAEBA3D7CAE5",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 52.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -0.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": 5.32
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_547973FE_4AF7_48E7_419C_82D21F1D46E9",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 44.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "7",
 "id": "panorama_3828C672_331A_6203_41C5_A6792BAF5F9B",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C"
  },
  {
   "backwardYaw": -88.66,
   "yaw": 106.07,
   "panorama": "this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -159.47,
   "yaw": -101.63,
   "panorama": "this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_235349D0_336A_2E1F_41BE_0A62E28784CA",
  "this.overlay_24317DED_332A_2601_41C0_F992FD56657C",
  "this.overlay_2B8F81F5_332A_5E01_41B1_ED4A88BB2B5E"
 ]
},
{
 "thumbnailUrl": "media/video_26E695F5_3336_6601_41BD_F4C2652F015A_t.jpg",
 "label": "Snapinsta.app_video_310142724_110988058453000_5582369335872561102_n",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 720,
 "loop": false,
 "id": "video_26E695F5_3336_6601_41BD_F4C2652F015A",
 "height": 900,
 "video": {
  "width": 720,
  "height": 900,
  "class": "VideoResource",
  "mp4Url": "media/video_26E695F5_3336_6601_41BD_F4C2652F015A.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5367C55D_4AF7_4925_41BE_1AEFE14EB380",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -73.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54EBB489_4AF7_4F2D_41C2_58593A1EA997",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -6.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 22.38,
 "id": "popup_20E3A315_331A_E201_41C1_6B8900287FC7",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "pitch": -5.82,
 "showDuration": 500,
 "autoplay": true,
 "yaw": 57.74,
 "showEasing": "cubic_in",
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_206D619E_331A_FE03_41AF_F84F7BC68076.mp4"
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "9",
 "id": "panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -153.33,
   "yaw": 106.48,
   "panorama": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -174.53,
   "yaw": -132.45,
   "panorama": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 126.11,
   "yaw": 23.84,
   "panorama": "this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -127.93,
   "yaw": 61.89,
   "panorama": "this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_2316A4BE_3376_6603_41C1_69DCF4324053",
  "this.overlay_23635257_3375_E201_41B2_2D9AC66DCFC2",
  "this.overlay_2286E1E7_336D_DE01_41C8_204EAADF0434",
  "this.overlay_2A38DCA5_3316_E601_41B4_ABCBD44396C5"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -11.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -3.68
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_53AA9597_4AF7_4925_4184_E4BE93345674",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -118.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "audio": {
  "oggUrl": "media/audio_2A7B8CFA_353E_6603_41B6_E697A49427B3.ogg",
  "mp3Url": "media/audio_2A7B8CFA_353E_6603_41B6_E697A49427B3.mp3",
  "class": "AudioResource"
 },
 "autoplay": true,
 "id": "audio_2A7B8CFA_353E_6603_41B6_E697A49427B3",
 "data": {
  "label": "94783_699474_699474_Steven_Richard_Beddall_-_Stevens_Buyout_I_-_AO-000824-3_-_Master_V1_-_80_Bpm_-_310522_-_BOV_-_ORG_-_2444 (online-audio-converter.com)"
 },
 "class": "MediaAudio"
},
{
 "thumbnailUrl": "media/video_2790D3EC_332E_6207_41C1_66E8ABC177D5_t.jpg",
 "label": "Snapinsta.app_video_273228565_1335413613546454_1286408954943517121_n",
 "scaleMode": "fit_inside",
 "class": "Video",
 "width": 720,
 "loop": false,
 "id": "video_2790D3EC_332E_6207_41C1_66E8ABC177D5",
 "height": 900,
 "video": {
  "width": 720,
  "height": 900,
  "class": "VideoResource",
  "mp4Url": "media/video_2790D3EC_332E_6207_41C1_66E8ABC177D5.mp4"
 }
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 28.09,
 "id": "popup_22372D6E_3316_6603_41C7_EF772B9B18DE",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "pitch": 11.25,
 "showDuration": 500,
 "autoplay": true,
 "yaw": 19.23,
 "showEasing": "cubic_in",
 "video": {
  "width": 1280,
  "height": 720,
  "class": "VideoResource",
  "mp4Url": "media/video_21AE9010_3316_5E1F_41B3_4A815E77C02F.mp4"
 }
},
{
 "items": [
  {
   "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_5445A3BE_4AF7_4966_41CD_2D1ED7F3EA03, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_5445A3BE_4AF7_4966_41CD_2D1ED7F3EA03, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
   "media": "this.video_296D9B57_3517_E201_41C4_CA40712A0EEA",
   "player": "this.MainViewerVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "playList_5445A3BE_4AF7_4966_41CD_2D1ED7F3EA03",
 "class": "PlayList"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "16",
 "id": "panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 173.6,
   "yaw": -135.91,
   "panorama": "this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -132.45,
   "yaw": -174.53,
   "panorama": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -77.61,
   "yaw": 131.43,
   "panorama": "this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_21F578FB_3315_EE01_41C4_EDCBC5EBB1D8",
  "this.overlay_21A0AE62_331A_E203_41C4_8027623EC392",
  "this.overlay_21143933_331A_2E01_41AC_93660D248725",
  "this.overlay_24259F39_332E_6201_41C3_1102F45C37D6",
  "this.overlay_2BEEBB7A_332F_E200_41C6_49F381A3D181",
  "this.popup_07D1E381_332A_2201_41B3_0C73DA92D369"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_548BF414_4AF7_4F3B_41AE_FA97DD6E3E5B",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -35.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54D61465_4AF7_4FE5_41CA_BFF46AFB0973",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 178.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "closeButtonBackgroundOpacity": 0,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_33FA6CBD_3931_7F6A_41C1_DC2D4B158445",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBorderSize": 1,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#CC3399"
 ],
 "footerHeight": 5,
 "shadowSpread": 1,
 "scrollBarWidth": 10,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderSize": 1,
 "overflow": "scroll",
 "closeButtonPressedIconColor": "#888888",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "bodyPaddingBottom": 0,
 "veilOpacity": 0.4,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.75,
  1
 ],
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonPaddingTop": 5,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.75,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingBottom": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundOpacity": 0,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3"
 ],
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "borderRadius": 5,
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.75,
  1
 ],
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#CC3399"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingLeft": 10,
 "borderSize": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#CC3399"
 ],
 "layout": "vertical",
 "data": {
  "name": "Window476"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 1
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "13",
 "id": "panorama_3828A0D1_331A_3E01_416A_F2EB52532035",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -101.63,
   "yaw": -159.47,
   "panorama": "this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 131.43,
   "yaw": -77.61,
   "panorama": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_22C14627_336E_2201_419F_1262B5EC1DF5",
  "this.overlay_2270B220_336E_223F_41AC_D3981873738E",
  "this.overlay_21A79491_336A_E601_41C8_41481D0A1C06",
  "this.popup_22372D6E_3316_6603_41C7_EF772B9B18DE"
 ]
},
{
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_33C71CBE_3931_7F67_41B9_70CD925AC7E9",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBorderSize": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "shadowSpread": 1,
 "scrollBarWidth": 10,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderSize": 0,
 "overflow": "scroll",
 "closeButtonPressedIconColor": "#888888",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "bodyPaddingBottom": 0,
 "veilOpacity": 0.4,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonPaddingTop": 5,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingBottom": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101"
 ],
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "borderRadius": 5,
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingLeft": 10,
 "borderSize": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "data": {
  "name": "Window479"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0
},
{
 "displayPlaybackBar": true,
 "id": "MapViewerVideoPlayer",
 "viewerArea": "this.MapViewer",
 "class": "VideoPlayer"
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_54B87441_4AF7_4F1D_41A1_23D56B10083F",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -53.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "id": "ImageResource_2AD0D1FE_393F_C8E6_419C_01D5BE94E786",
 "levels": [
  {
   "url": "media/popup_2933E19B_393F_492D_41B9_F639FB5B987F_0_0.jpg",
   "width": 2160,
   "height": 2160,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_2933E19B_393F_492D_41B9_F639FB5B987F_0_1.jpg",
   "width": 2048,
   "height": 2048,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_2933E19B_393F_492D_41B9_F639FB5B987F_0_2.jpg",
   "width": 1024,
   "height": 1024,
   "class": "ImageResourceLevel"
  },
  {
   "url": "media/popup_2933E19B_393F_492D_41B9_F639FB5B987F_0_3.jpg",
   "width": 512,
   "height": 512,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "ImageResource"
},
{
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_33C41CBE_3931_7F66_41B5_A38790FE6024",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBorderSize": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "shadowSpread": 1,
 "scrollBarWidth": 10,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderSize": 0,
 "overflow": "scroll",
 "closeButtonPressedIconColor": "#888888",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "bodyPaddingBottom": 0,
 "veilOpacity": 0.4,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonPaddingTop": 5,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingBottom": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73A"
 ],
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "borderRadius": 5,
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingLeft": 10,
 "borderSize": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "data": {
  "name": "Window478"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 10.21,
 "id": "popup_07D1E381_332A_2201_41B3_0C73DA92D369",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "loop": false,
 "hideDuration": 500,
 "hideEasing": "cubic_out",
 "pitch": 0.44,
 "showDuration": 500,
 "autoplay": true,
 "yaw": 0.08,
 "showEasing": "cubic_in",
 "video": {
  "width": 720,
  "height": 900,
  "class": "VideoResource",
  "mp4Url": "media/video_1BF6A63E_3336_6203_4199_5C8C3DC36989.mp4"
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5377356F_4AF7_49E5_41A4_4AAD22841E9E",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 78.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5333C531_4AF7_497A_41C4_4530057535FA",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -13.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_533DA525_4AF7_4965_41CD_6BB8436AD709",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 20.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -11.86,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": -3.68
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5343453C_4AF7_496B_41A9_7DB9388B4A41",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -156.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5453A3DD_4AF7_4925_41BF_74BEC43544E0",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 49.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "closeButtonBackgroundOpacity": 0.3,
 "bodyPaddingTop": 0,
 "closeButtonRollOverIconColor": "#666666",
 "id": "window_33F82CBB_3931_7F6D_41B2_86BAC3C1C78B",
 "backgroundOpacity": 1,
 "paddingLeft": 0,
 "closeButtonBorderSize": 0,
 "closeButtonRollOverBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "footerHeight": 5,
 "shadowSpread": 1,
 "scrollBarWidth": 10,
 "bodyBackgroundOpacity": 0,
 "closeButtonPressedBorderColor": "#000000",
 "minHeight": 20,
 "propagateClick": false,
 "modal": true,
 "titlePaddingTop": 5,
 "bodyBackgroundColorDirection": "vertical",
 "headerVerticalAlign": "middle",
 "headerPaddingBottom": 5,
 "closeButtonPressedBorderSize": 0,
 "overflow": "scroll",
 "closeButtonPressedIconColor": "#888888",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonRollOverBackgroundOpacity": 0.3,
 "minWidth": 20,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "closeButtonPaddingLeft": 5,
 "backgroundColor": [],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "closeButtonPressedBackgroundColorDirection": "vertical",
 "titleFontFamily": "Arial",
 "bodyPaddingBottom": 0,
 "veilOpacity": 0.4,
 "closeButtonBackgroundColorDirection": "vertical",
 "closeButtonRollOverBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "shadowHorizontalLength": 3,
 "closeButtonBorderRadius": 0,
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "headerBackgroundOpacity": 0,
 "shadow": true,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingTop": 10,
 "shadowBlurRadius": 6,
 "closeButtonIconHeight": 20,
 "closeButtonPaddingRight": 5,
 "closeButtonPressedIconLineWidth": 5,
 "closeButtonPaddingTop": 5,
 "contentOpaque": false,
 "bodyPaddingLeft": 0,
 "closeButtonBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonRollOverIconLineWidth": 5,
 "paddingBottom": 0,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "verticalAlign": "middle",
 "closeButtonPressedBackgroundOpacity": 0.3,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0,
 "children": [
  "this.viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969"
 ],
 "shadowOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "class": "Window",
 "borderRadius": 5,
 "paddingRight": 0,
 "titleFontSize": "1.29vmin",
 "shadowColor": "#000000",
 "titlePaddingRight": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "closeButtonIconColor": "#000000",
 "closeButtonPressedBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "backgroundColorRatios": [],
 "closeButtonPaddingBottom": 5,
 "closeButtonBorderColor": "#000000",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingLeft": 5,
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconLineWidth": 5,
 "closeButtonPressedBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "headerPaddingLeft": 10,
 "borderSize": 0,
 "closeButtonRollOverBackgroundColorDirection": "vertical",
 "headerPaddingRight": 0,
 "bodyPaddingRight": 0,
 "closeButtonIconWidth": 20,
 "footerBackgroundOpacity": 0,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "titlePaddingBottom": 5,
 "closeButtonBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "layout": "vertical",
 "data": {
  "name": "Window474"
 },
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "closeButtonRollOverBorderColor": "#000000",
 "closeButtonRollOverBorderSize": 0
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 33.25,
    "path": "shortest",
    "pitchSpeed": 17.05,
    "targetYaw": -0.41,
    "easing": "cubic_in_out",
    "class": "TargetPanoramaCameraMovement",
    "targetPitch": 5.32
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_5386C57E_4AF7_49E6_41D0_9FC82A9F4E43",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": -48.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxWidth": "95%",
 "rotationZ": 0,
 "rotationY": 0,
 "hfov": 7.41,
 "id": "popup_2933E19B_393F_492D_41B9_F639FB5B987F",
 "popupMaxHeight": "95%",
 "class": "PopupPanoramaOverlay",
 "hideEasing": "cubic_out",
 "image": {
  "levels": [
   {
    "url": "media/popup_2933E19B_393F_492D_41B9_F639FB5B987F_0_2.jpg",
    "width": 1024,
    "height": 1024,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.8,
 "showDuration": 500,
 "hideDuration": 500,
 "yaw": -81.51,
 "showEasing": "cubic_in"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "height": 1536,
      "class": "TiledImageResourceLevel",
      "rowCount": 3
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "dji_fly_20230402_172924_475_1680469649231_pano_optimized",
 "id": "panorama_52A3175D_4911_C925_41C8_B6CB40047BD5",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 166.3,
   "yaw": 0.5,
   "panorama": "this.panorama_385DF719_331A_220E_41A3_81D50C099301",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_54A69AB0_4AF1_DB7A_41CB_31009814EDEC"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_53C975AE_4AF7_4967_41C4_90A893682FB3",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 151.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "19",
 "id": "panorama_3828530A_331A_E203_41BA_B2B4BB157ED5",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": -130.81,
   "yaw": 144.19,
   "panorama": "this.panorama_38285C4C_331A_E607_41B6_B816D19E9345",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 106.48,
   "yaw": -153.33,
   "panorama": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -135.91,
   "yaw": 173.6,
   "panorama": "this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_2161EB6B_331D_E201_41B8_4365F75FD6B7",
  "this.overlay_211C2742_331E_E203_41C5_273907D56B27",
  "this.overlay_20DE0869_331E_2E01_41A3_9B2D919EFFFF",
  "this.overlay_206AF229_3316_6201_419E_8A5A46872A8E",
  "this.overlay_20516946_3316_EE03_41B4_8FFF43132A34",
  "this.popup_202CD66F_332E_2201_41C6_7896E3D4F82C",
  "this.overlay_37DE2842_3931_C71E_41AF_83CD935913A6",
  "this.overlay_36393629_3931_4B6D_41BB_84B114392D4F",
  "this.popup_2933E19B_393F_492D_41B9_F639FB5B987F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   },
   {
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323
   },
   {
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3828A0D1_331A_3E01_416A_F2EB52532035_camera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 }
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel",
      "rowCount": 4
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel",
      "rowCount": 2
     },
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel",
      "rowCount": 1
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_t.jpg",
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "4",
 "id": "panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF",
 "class": "Panorama",
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_t.jpg",
 "hfov": 360,
 "hfovMax": 130,
 "hfovMin": "150%",
 "adjacentPanoramas": [
  {
   "backwardYaw": 61.89,
   "yaw": -127.93,
   "panorama": "this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C",
   "distance": 1,
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -28.52,
   "yaw": -1.52,
   "panorama": "this.panorama_385DF719_331A_220E_41A3_81D50C099301",
   "distance": 1,
   "class": "AdjacentPanorama"
  }
 ],
 "partial": false,
 "overlays": [
  "this.overlay_23864D69_3376_2601_41BA_A71D12EE5BD0",
  "this.overlay_236F13FF_3376_2201_41C9_396607B31FC8",
  "this.overlay_27E9D3F9_333B_E201_41C2_E4423E1ABF22",
  "this.popup_26E5149D_333A_2601_41C2_4EFAC1FE6F5B"
 ]
},
{
 "items": [
  {
   "start": "this.viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73AVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_2AFFC1E9_393F_C8ED_41C4_501CD2D771D7, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_2AFFC1E9_393F_C8ED_41C4_501CD2D771D7, 0)",
   "begin": "this.fixTogglePlayPauseButton(this.viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73AVideoPlayer)",
   "media": "this.video_2790D3EC_332E_6207_41C1_66E8ABC177D5",
   "player": "this.viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73AVideoPlayer",
   "class": "VideoPlayListItem"
  }
 ],
 "id": "PlayList_2AFFC1E9_393F_C8ED_41C4_501CD2D771D7",
 "class": "PlayList"
},
{
 "verticalAlign": "middle",
 "maxHeight": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "maxWidth": 58,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton MUTE"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "MainViewer",
 "left": 0,
 "paddingLeft": 0,
 "progressHeight": 6,
 "progressBottom": 55,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": true,
 "vrPointerColor": "#FFFFFF",
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarBottom": 5,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 10,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "top": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 0.5,
 "toolTipFontSize": 13,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 7,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "data": {
  "name": "--SETTINGS"
 },
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 115.05,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 641,
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--STICKER"
 },
 "children": [
  "this.Image_3E15FB5E_3376_6203_41BC_DCC5C45B82A0"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 573,
 "borderRadius": 0,
 "paddingRight": 0,
 "left": 30,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 133,
 "top": 15,
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--MENU"
 },
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "minHeight": 1,
 "propagateClick": true,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": 0,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 118,
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.64,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--INFO photo"
 },
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--INFO photoalbum"
 },
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--PANORAMA LIST"
 },
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--LOCATION"
 },
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--FLOORPLAN"
 },
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--PHOTOALBUM + text"
 },
 "children": [
  "this.Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A"
 ],
 "id": "Container_2820BA13_0D5D_5B97_4192_AABC38F6F169",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, true, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--PHOTOALBUM"
 },
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "--REALTOR"
 },
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": true,
 "creationPolicy": "inAdvance",
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "shadow": false,
 "layout": "absolute",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "class": "UIComponent",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "UIComponent10431"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0.55
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "class": "ZoomImage",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": 0,
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [],
 "bottom": 0,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "custom",
 "visible": false,
 "data": {
  "name": "ZoomImage10432"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1
},
{
 "pressedIconColor": "#888888",
 "fontFamily": "Arial",
 "iconWidth": 20,
 "id": "closeButtonPopupPanorama",
 "iconColor": "#000000",
 "class": "CloseButton",
 "paddingLeft": 5,
 "borderRadius": 0,
 "paddingRight": 5,
 "verticalAlign": "middle",
 "right": 10,
 "shadowColor": "#000000",
 "iconHeight": 20,
 "shadowSpread": 1,
 "minHeight": 0,
 "propagateClick": false,
 "rollOverIconColor": "#666666",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "showEffect": {
  "duration": 350,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "minWidth": 0,
 "iconBeforeLabel": true,
 "fontWeight": "normal",
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "fontSize": "1.29vmin",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "label": "",
 "fontStyle": "normal",
 "iconLineWidth": 5,
 "shadow": false,
 "data": {
  "name": "CloseButton10433"
 },
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "visible": false,
 "layout": "horizontal",
 "paddingBottom": 5,
 "paddingTop": 5,
 "cursor": "hand",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "maxWidth": 58,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton FULLSCREEN"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2VideoPlayer",
 "viewerArea": "this.viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101VideoPlayer",
 "viewerArea": "this.viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101",
 "class": "VideoPlayer"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52D",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "ViewerArea10426"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969VideoPlayer",
 "viewerArea": "this.viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969",
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_20E3A315_331A_E201_41C1_6B8900287FC7, {'backgroundOpacity':0.3,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'backgroundColorDirection':'vertical','borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_33C71CBE_3931_7F67_41B9_70CD925AC7E9, this.video_206D619E_331A_FE03_41AF_F84F7BC68076, this.PlayList_2AFF51E9_393F_C8ED_4191_4C552FA7F928, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 22.38,
   "yaw": 57.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C4C56F_3336_2601_41C0_3E1999F8D530",
   "pitch": -5.82,
   "yaw": 57.74,
   "hfov": 22.38,
   "distance": 100
  }
 ],
 "id": "overlay_20FC930D_331A_6201_41A3_188F7B3C4157",
 "data": {
  "label": "Info Red 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5, this.camera_548BF414_4AF7_4F3B_41AE_FA97DD6E3E5B); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": -130.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.48,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C5F56F_3336_2601_41A9_98D84BBF3092",
   "pitch": 1.48,
   "yaw": -130.81,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_20750ED1_3315_E201_4181_1EDF07EFE609",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 26.85,
   "yaw": -0.59,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C0356B_3336_2601_41C0_7C1194ACA8ED",
   "pitch": -9.38,
   "yaw": -0.59,
   "hfov": 26.85,
   "distance": 100
  }
 ],
 "id": "overlay_20233F29_332E_6201_41B0_6373EC39BF24",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_27A40976_3336_6E03_41A0_A0F4553317D7, {'backgroundOpacity':0.3,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'backgroundColorDirection':'vertical','borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_33FB0CBD_3931_7F6A_41B4_202E5837C8F8, this.video_26E695F5_3336_6601_41BD_F4C2652F015A, this.PlayList_2AFEB1E9_393F_C8ED_41C5_722D39A8ECBB, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 16.22,
   "yaw": -0.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 16.22,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_1_0.png",
      "width": 263,
      "height": 293,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.34,
   "yaw": -0.44
  }
 ],
 "id": "overlay_20201566_332A_2603_41C2_5EFE6EDDDCDA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C, this.camera_5343453C_4AF7_496B_41A9_7DB9388B4A41); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.48,
   "yaw": 126.11,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C1356C_3336_2607_41B0_BCAEA21DFDB0",
   "pitch": -3.39,
   "yaw": 126.11,
   "hfov": 12.48,
   "distance": 100
  }
 ],
 "id": "overlay_27C794B1_3336_2601_41C0_19EC4A3A186E",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B, this.camera_5367C55D_4AF7_4925_41BE_1AEFE14EB380); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.41,
   "yaw": -88.66,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C1F56C_3336_2607_41C1_BE0FF810913E",
   "pitch": -7.07,
   "yaw": -88.66,
   "hfov": 12.41,
   "distance": 100
  }
 ],
 "id": "overlay_274C5E3F_3336_6201_4197_FCF06AE9F69D",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52DVideoPlayer",
 "viewerArea": "this.viewer_uid544AF3B9_4AF7_496D_41D0_35AD5A06C52D",
 "class": "VideoPlayer"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3VideoPlayer",
 "viewerArea": "this.viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3",
 "class": "VideoPlayer"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF, this.camera_54D61465_4AF7_4FE5_41CA_BFF46AFB0973); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": -28.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.52,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26D4B563_3336_2601_41B9_C5C4E919ACC9",
   "pitch": 1.52,
   "yaw": -28.52,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_3C7BEDC1_3375_E601_41B5_34A189CD69FB",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_52A3175D_4911_C925_41C8_B6CB40047BD5, this.camera_54C7B45A_4AF7_4F2F_41CD_515664E4F748); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 15.63,
   "yaw": 166.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0_HS_4_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 21.29,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_55EF6C60_4AF1_7F1B_41CC_6095470DB3D6",
   "pitch": 21.29,
   "yaw": 166.3,
   "hfov": 15.63,
   "distance": 100
  }
 ],
 "id": "overlay_5274FA27_4913_3B66_41BA_192C103C4EC9",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid544B83BC_4AF7_496A_41C6_7AA480D6EAF2",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "ViewerArea10428"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "verticalAlign": "middle",
 "maxHeight": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "maxWidth": 58,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton GYRO"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "maxWidth": 58,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 37,
 "id": "IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270",
 "maxWidth": 49,
 "class": "IconButton",
 "width": 100,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270.png",
 "right": 30,
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "bottom": 8,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_1B9ADD00_16C4_0505_41B4_B043CA1AA270_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton VR"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.27,
   "yaw": 170.18,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.82,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26CF456A_3336_2603_41C3_79B64E8C4CE9",
   "pitch": -0.82,
   "yaw": 170.18,
   "hfov": 12.27,
   "distance": 100
  }
 ],
 "id": "overlay_235349D0_336A_2E1F_41BE_0A62E28784CA",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035, this.camera_533DA525_4AF7_4965_41CD_6BB8436AD709); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 13.88,
   "yaw": -101.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.5,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FF68A1E_331E_2203_41C3_380A4D4D3328",
   "pitch": -0.5,
   "yaw": -101.63,
   "hfov": 13.88,
   "distance": 100
  }
 ],
 "id": "overlay_24317DED_332A_2601_41C0_F992FD56657C",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E, this.camera_532E151B_4AF7_492E_41C0_33CA50E2BD6E); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.49,
   "yaw": 106.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.16,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FF6FA1F_331E_2201_41C4_8A3642458199",
   "pitch": -2.16,
   "yaw": 106.07,
   "hfov": 12.49,
   "distance": 100
  }
 ],
 "id": "overlay_2B8F81F5_332A_5E01_41B1_ED4A88BB2B5E",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF, this.camera_54B3D44D_4AF7_4F25_4183_CAEBA3D7CAE5); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": 61.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2DDEEE42_32EA_2203_4190_218E49EE9744",
   "pitch": -1.32,
   "yaw": 61.89,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_2316A4BE_3376_6603_41C1_69DCF4324053",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E, this.camera_54B87441_4AF7_4F1D_41A1_23D56B10083F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.47,
   "yaw": 23.84,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.2,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2DDE0E42_32EA_2203_41BE_B85E6A948CEC",
   "pitch": -4.2,
   "yaw": 23.84,
   "hfov": 12.47,
   "distance": 100
  }
 ],
 "id": "overlay_23635257_3375_E201_41B2_2D9AC66DCFC2",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5, this.camera_549F241F_4AF7_4F25_41A8_28D7D0B6E030); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.47,
   "yaw": 106.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26CF856B_3336_2601_41C6_547F5F6CBD41",
   "pitch": -3.8,
   "yaw": 106.48,
   "hfov": 12.47,
   "distance": 100
  }
 ],
 "id": "overlay_2286E1E7_336D_DE01_41C8_204EAADF0434",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF, this.camera_5491042B_4AF7_4F6E_41A2_E610218DC247); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.12,
   "yaw": -132.45,
   "image": {
    "levels": [
     {
      "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2DDD8E42_32EA_2203_41A2_CAD302D495A1",
   "pitch": 2.55,
   "yaw": -132.45,
   "hfov": 14.12,
   "distance": 100
  }
 ],
 "id": "overlay_2A38DCA5_3316_E601_41B4_ABCBD44396C5",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828A0D1_331A_3E01_416A_F2EB52532035, this.camera_5318F501_4AF7_491D_41B0_274F511D0F4D); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": 131.43,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C1D56D_3336_2601_41C5_FE4C84BD37FE",
   "pitch": -0.11,
   "yaw": 131.43,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_21F578FB_3315_EE01_41C4_EDCBC5EBB1D8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828530A_331A_E203_41BA_B2B4BB157ED5, this.camera_54EBB489_4AF7_4F2D_41C2_58593A1EA997); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": -135.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.99,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C2756D_3336_2601_41C2_E0F166A580F2",
   "pitch": -0.99,
   "yaw": -135.91,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_21A0AE62_331A_E203_41C4_8027623EC392",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C, this.camera_54FAF4B7_4AF7_4F66_41A9_3B14744C4B96); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": -174.53,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.3,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C2156E_3336_2603_41C7_24F4369B14CF",
   "pitch": -0.3,
   "yaw": -174.53,
   "hfov": 12.5,
   "distance": 100
  }
 ],
 "id": "overlay_21143933_331A_2E01_41AC_93660D248725",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.4,
   "yaw": -0.07,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.33,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2FF26A22_331E_2203_41C1_43BA45535008",
   "pitch": 0.33,
   "yaw": -0.07,
   "hfov": 14.4,
   "distance": 100
  }
 ],
 "id": "overlay_24259F39_332E_6201_41C3_1102F45C37D6",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_07D1E381_332A_2201_41B3_0C73DA92D369, {'backgroundOpacity':0.3,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'backgroundColorDirection':'vertical','borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_33C57CBD_3931_7F6A_41CB_557AD2D6E69B, this.video_1BF6A63E_3336_6203_4199_5C8C3DC36989, this.PlayList_2AFE71E9_393F_C8ED_4189_EA0A60EE86E2, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.21,
   "yaw": 0.08,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 17,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.21,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_4_0.png",
      "width": 163,
      "height": 174,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.44,
   "yaw": 0.08
  }
 ],
 "id": "overlay_2BEEBB7A_332F_E200_41C6_49F381A3D181",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid544B53BA_4AF7_496F_41A8_91CAD145B4C3",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "ViewerArea10427"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF, this.camera_5386C57E_4AF7_49E6_41D0_9FC82A9F4E43); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.23,
   "yaw": -77.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.21,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C1956C_3336_2607_41AA_949312171FE4",
   "pitch": 0.21,
   "yaw": -77.61,
   "hfov": 14.23,
   "distance": 100
  }
 ],
 "id": "overlay_22C14627_336E_2201_419F_1262B5EC1DF5",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828C672_331A_6203_41C5_A6792BAF5F9B, this.camera_5377356F_4AF7_49E5_41A4_4AAD22841E9E); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 14.06,
   "yaw": -159.47,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C0D56C_3336_2607_41BB_1426D552B5DD",
   "pitch": -0.22,
   "yaw": -159.47,
   "hfov": 14.06,
   "distance": 100
  }
 ],
 "id": "overlay_2270B220_336E_223F_41AC_D3981873738E",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_22372D6E_3316_6603_41C7_EF772B9B18DE, {'backgroundOpacity':0,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':1,'backgroundColorDirection':'vertical','borderSize':1,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#CC3399'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0,'iconLineWidth':5,'pressedBorderSize':1,'rollOverBackgroundOpacity':0,'backgroundColorRatios':[0,0.7490196078431373,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#CC3399'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.7490196078431373,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.7490196078431373,1],'backgroundColor':['#DDDDDD','#EEEEEE','#CC3399'],'iconWidth':20,'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_33FA6CBD_3931_7F6A_41C1_DC2D4B158445, this.video_21AE9010_3316_5E1F_41B3_4A815E77C02F, this.PlayList_2AFEE1E9_393F_C8ED_41C8_92C4E7BB10E6, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 28.09,
   "yaw": 19.23,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C0856D_3336_2601_4196_0721624AEB6A",
   "pitch": 11.25,
   "yaw": 19.23,
   "hfov": 28.09,
   "distance": 100
  }
 ],
 "id": "overlay_21A79491_336A_E601_41C8_41481D0A1C06",
 "data": {
  "label": "Info Red 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid544553BE_4AF7_4966_41D1_2D1E69336101",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "ViewerArea10430"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "MapViewer",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73A",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "ViewerArea10429"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "viewer_uid544913B7_4AF7_4965_41A1_0331AA8C9969",
 "progressBottom": 2,
 "paddingLeft": 0,
 "progressHeight": 6,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 100,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "ViewerArea10425"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_385DF719_331A_220E_41A3_81D50C099301, this.camera_5333C531_4AF7_497A_41C4_4530057535FA); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 9.77,
   "yaw": 0.5,
   "image": {
    "levels": [
     {
      "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -62.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_55EFAC60_4AF1_7F1B_41C2_A35E5F96E94C",
   "pitch": -62.35,
   "yaw": 0.5,
   "hfov": 9.77,
   "distance": 100
  }
 ],
 "id": "overlay_54A69AB0_4AF1_DB7A_41CB_31009814EDEC",
 "data": {
  "label": "Arrow 06a"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_38285C4C_331A_E607_41B6_B816D19E9345, this.camera_5453A3DD_4AF7_4925_41BF_74BEC43544E0); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.5,
   "yaw": 144.19,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.67,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C2E56E_3336_2603_41B3_A5E3E593F0DF",
   "pitch": 0.67,
   "yaw": 144.19,
   "hfov": 12.5,
   "distance": 50
  }
 ],
 "id": "overlay_2161EB6B_331D_E201_41B8_4365F75FD6B7",
 "data": {
  "label": "Circle Arrow 01 Left"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C, this.camera_546AE3E8_4AF7_48EB_41CB_0AA8119F03BD); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.49,
   "yaw": -153.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.92,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C3656E_3336_2603_41C5_19F5A138CB76",
   "pitch": -1.92,
   "yaw": -153.33,
   "hfov": 12.49,
   "distance": 100
  }
 ],
 "id": "overlay_211C2742_331E_E203_41C5_273907D56B27",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF, this.camera_547973FE_4AF7_48E7_419C_82D21F1D46E9); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 6.58,
   "yaw": 173.6,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.17,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C3256E_3336_2603_41C9_A32F1F119EA1",
   "pitch": 0.17,
   "yaw": 173.6,
   "hfov": 6.58,
   "distance": 100
  }
 ],
 "id": "overlay_20DE0869_331E_2E01_41A3_9B2D919EFFFF",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 11.25,
   "yaw": -2.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_3_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.44,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26C3C56E_3336_2603_41BD_F9EEE3DD1BAA",
   "pitch": -5.44,
   "yaw": -2.13,
   "hfov": 11.25,
   "distance": 100
  }
 ],
 "id": "overlay_206AF229_3316_6201_419E_8A5A46872A8E",
 "data": {
  "label": "Info Red 08"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_202CD66F_332E_2201_41C6_7896E3D4F82C, {'backgroundOpacity':0.3,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'backgroundColorDirection':'vertical','borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_33C41CBE_3931_7F66_41B5_A38790FE6024, this.video_2790D3EC_332E_6207_41C1_66E8ABC177D5, this.PlayList_2AFFC1E9_393F_C8ED_41C4_501CD2D771D7, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -2.17,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_4_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_4_0.png",
      "width": 119,
      "height": 119,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.32,
   "yaw": -2.17
  }
 ],
 "id": "overlay_20516946_3316_EE03_41B4_8FFF43132A34",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 10.81,
   "yaw": -81.46,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0_HS_5_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.84,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_2AE981D9_393F_C92A_41BD_0D7986D332DB",
   "pitch": -4.84,
   "yaw": -81.46,
   "hfov": 10.81,
   "distance": 100
  }
 ],
 "id": "overlay_37DE2842_3931_C71E_41AF_83CD935913A6",
 "data": {
  "label": "Circle Generic 02"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_2933E19B_393F_492D_41B9_F639FB5B987F, {'backgroundOpacity':0.3,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'backgroundColorDirection':'vertical','borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, this.ImageResource_2AD0D1FE_393F_C8E6_419C_01D5BE94E786, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 7.41,
   "yaw": -81.51,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0_HS_6_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.8,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.41,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0_HS_6_0.png",
      "width": 119,
      "height": 119,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.8,
   "yaw": -81.51
  }
 ],
 "id": "overlay_36393629_3931_4B6D_41BB_84B114392D4F",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_385DF719_331A_220E_41A3_81D50C099301, this.camera_53C975AE_4AF7_4967_41C4_90A893682FB3); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.41,
   "yaw": -1.52,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_1_HS_0_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26D53564_3336_2607_41AD_7396F0D265E8",
   "pitch": -7.07,
   "yaw": -1.52,
   "hfov": 12.41,
   "distance": 100
  }
 ],
 "id": "overlay_23864D69_3376_2601_41BA_A71D12EE5BD0",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_38289F41_331A_627E_419A_DF8C7F0BD17C, this.camera_53AA9597_4AF7_4925_4184_E4BE93345674); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.49,
   "yaw": -127.93,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_1_HS_1_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.75,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26D5F565_3336_2601_41BD_D99183BEC558",
   "pitch": -1.75,
   "yaw": -127.93,
   "hfov": 12.49,
   "distance": 100
  }
 ],
 "id": "overlay_236F13FF_3376_2201_41C9_396607B31FC8",
 "data": {
  "label": "Circle Arrow 01"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_26E5149D_333A_2601_41C2_4EFAC1FE6F5B, {'backgroundOpacity':0.3,'pressedIconLineWidth':5,'rollOverIconWidth':20,'rollOverBorderColor':'#000000','rollOverIconColor':'#666666','rollOverBorderSize':0,'backgroundColorDirection':'vertical','borderSize':0,'paddingLeft':5,'pressedBackgroundColorDirection':'vertical','paddingRight':5,'iconColor':'#000000','rollOverIconHeight':20,'iconHeight':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical','pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'iconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconColor':'#888888','borderColor':'#000000','pressedIconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'paddingTop':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconLineWidth':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconWidth':20,'pressedIconWidth':20}, true) } else { this.showPopupMedia(this.window_33F82CBB_3931_7F6D_41B2_86BAC3C1C78B, this.video_27BD338A_333A_E203_41C7_2768A5B95173, this.PlayList_2AFD31E8_393F_C8EB_41C5_2C8BE3407A40, '95%', '95%', true, true) }",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "hfov": 12.22,
   "yaw": -87.14,
   "image": {
    "levels": [
     {
      "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.32,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_26D5B565_3336_2601_41B8_A6CFFFBCE02A",
   "pitch": 5.32,
   "yaw": -87.14,
   "hfov": 12.22,
   "distance": 100
  }
 ],
 "id": "overlay_27E9D3F9_333B_E201_41C2_E4423E1ABF22",
 "data": {
  "label": "Info Red 02"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "displayPlaybackBar": true,
 "id": "viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73AVideoPlayer",
 "viewerArea": "this.viewer_uid5444E3BD_4AF7_496A_41D1_0231A2D6D73A",
 "class": "VideoPlayer"
},
{
 "data": {
  "name": "button menu sup"
 },
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 110,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 110,
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-button set"
 },
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
  "this.IconButton_294DB6B8_3515_E20E_41A7_75EB469672C0",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
  "this.IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "scrollBarWidth": 10,
 "width": "91.304%",
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "height": "85.959%",
 "gap": 3,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "vertical",
 "visible": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "maxHeight": 253,
 "id": "Image_3E15FB5E_3376_6203_41BC_DCC5C45B82A0",
 "left": "0%",
 "maxWidth": 450,
 "class": "Image",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_3E15FB5E_3376_6203_41BC_DCC5C45B82A0.png",
 "width": "20.593%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "47.368%",
 "top": "3.01%",
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image2641"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "maxHeight": 2,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "maxWidth": 3000,
 "class": "Image",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 53,
 "minWidth": 1,
 "height": 2,
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "white line"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-button set container"
 },
 "children": [
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 1199,
 "borderRadius": 0,
 "paddingRight": 0,
 "left": "0%",
 "paddingLeft": 30,
 "minHeight": 1,
 "propagateClick": true,
 "scrollBarWidth": 10,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "0%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": 51,
 "gap": 3,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "10.72%",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "8.03%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "14.15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "top": "3.92%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "10%",
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "5%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "7%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "10%",
 "children": [
  "this.Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
  "this.Container_221C9648_0C06_E5FD_41A1_A79DE53B3031"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "5%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "7%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_28215A13_0D5D_5B97_4198_A7CA735E9E0A",
 "left": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_28214A13_0D5D_5B97_4193_B631E1496339",
  "this.Container_2B0BF61C_0D5B_2B90_4179_632488B1209E"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "7%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "15%",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "vertical",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "7%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "7%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Global"
 },
 "shadowOpacity": 0.3,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "10%",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "shadowColor": "#000000",
 "scrollBarWidth": 10,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "layout": "horizontal",
 "backgroundColorRatios": [
  0,
  1
 ],
 "shadowHorizontalLength": 0,
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "bottom": "5%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": true,
 "shadowBlurRadius": 25,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "shadowVerticalLength": 0
},
{
 "data": {
  "name": "Container X global"
 },
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "10%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 20,
 "right": "10%",
 "scrollBarWidth": 10,
 "minHeight": 1,
 "propagateClick": false,
 "overflow": "visible",
 "scrollBarOpacity": 0.5,
 "bottom": "80%",
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "top": "5%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C4C56F_3336_2601_41C0_3E1999F8D530",
 "levels": [
  {
   "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_1_HS_0_0.png",
   "width": 780,
   "height": 1170,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C5F56F_3336_2601_41A9_98D84BBF3092",
 "levels": [
  {
   "url": "media/panorama_38285C4C_331A_E607_41B6_B816D19E9345_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C0356B_3336_2601_41C0_7C1194ACA8ED",
 "levels": [
  {
   "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C1356C_3336_2607_41B0_BCAEA21DFDB0",
 "levels": [
  {
   "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C1F56C_3336_2607_41C1_BE0FF810913E",
 "levels": [
  {
   "url": "media/panorama_3828D858_331A_2E0F_41A2_3754ED2E7D8E_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26D4B563_3336_2601_41B9_C5C4E919ACC9",
 "levels": [
  {
   "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_55EF6C60_4AF1_7F1B_41CC_6095470DB3D6",
 "levels": [
  {
   "url": "media/panorama_385DF719_331A_220E_41A3_81D50C099301_0_HS_4_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26CF456A_3336_2603_41C3_79B64E8C4CE9",
 "levels": [
  {
   "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FF68A1E_331E_2203_41C3_380A4D4D3328",
 "levels": [
  {
   "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FF6FA1F_331E_2201_41C4_8A3642458199",
 "levels": [
  {
   "url": "media/panorama_3828C672_331A_6203_41C5_A6792BAF5F9B_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2DDEEE42_32EA_2203_4190_218E49EE9744",
 "levels": [
  {
   "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2DDE0E42_32EA_2203_41BE_B85E6A948CEC",
 "levels": [
  {
   "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26CF856B_3336_2601_41C6_547F5F6CBD41",
 "levels": [
  {
   "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2DDD8E42_32EA_2203_41A2_CAD302D495A1",
 "levels": [
  {
   "url": "media/panorama_38289F41_331A_627E_419A_DF8C7F0BD17C_0_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C1D56D_3336_2601_41C5_FE4C84BD37FE",
 "levels": [
  {
   "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C2756D_3336_2601_41C2_E0F166A580F2",
 "levels": [
  {
   "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C2156E_3336_2603_41C7_24F4369B14CF",
 "levels": [
  {
   "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2FF26A22_331E_2203_41C1_43BA45535008",
 "levels": [
  {
   "url": "media/panorama_3828B9EE_331A_2E03_41AA_50E490A94EBF_1_HS_3_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C1956C_3336_2607_41AA_949312171FE4",
 "levels": [
  {
   "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C0D56C_3336_2607_41BB_1426D552B5DD",
 "levels": [
  {
   "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C0856D_3336_2601_4196_0721624AEB6A",
 "levels": [
  {
   "url": "media/panorama_3828A0D1_331A_3E01_416A_F2EB52532035_1_HS_2_0.png",
   "width": 780,
   "height": 1170,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_55EFAC60_4AF1_7F1B_41C2_A35E5F96E94C",
 "levels": [
  {
   "url": "media/panorama_52A3175D_4911_C925_41C8_B6CB40047BD5_0_HS_1_0.png",
   "width": 480,
   "height": 420,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C2E56E_3336_2603_41B3_A5E3E593F0DF",
 "levels": [
  {
   "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C3656E_3336_2603_41C5_19F5A138CB76",
 "levels": [
  {
   "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C3256E_3336_2603_41C9_A32F1F119EA1",
 "levels": [
  {
   "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_2_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26C3C56E_3336_2603_41BD_F9EEE3DD1BAA",
 "levels": [
  {
   "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_1_HS_3_0.png",
   "width": 600,
   "height": 900,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_2AE981D9_393F_C92A_41BD_0D7986D332DB",
 "levels": [
  {
   "url": "media/panorama_3828530A_331A_E203_41BA_B2B4BB157ED5_0_HS_5_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26D53564_3336_2607_41AD_7396F0D265E8",
 "levels": [
  {
   "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_1_HS_0_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26D5F565_3336_2601_41BD_D99183BEC558",
 "levels": [
  {
   "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_1_HS_1_0.png",
   "width": 800,
   "height": 1200,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "id": "AnimatedImageResource_26D5B565_3336_2601_41B8_A6CFFFBCE02A",
 "levels": [
  {
   "url": "media/panorama_3835F519_331A_6601_41C5_7DF7A8FE48DF_1_HS_2_0.png",
   "width": 680,
   "height": 1020,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource",
 "rowCount": 6
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "maxWidth": 60,
 "class": "IconButton",
 "width": 60,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "shadow": false,
 "data": {
  "name": "image button menu"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 58,
 "id": "IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521",
 "maxWidth": 58,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521.png",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_EED5213F_E3B9_7A7D_41D8_1B642C004521_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "click": "this.openLink('https://www.facebook.com/zeissvisioncenter.Chapeco/?locale=pt_BR', '_blank')",
 "shadow": false,
 "data": {
  "name": "IconButton FB"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 1095,
 "id": "IconButton_294DB6B8_3515_E20E_41A7_75EB469672C0",
 "maxWidth": 1095,
 "class": "IconButton",
 "width": 42,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_294DB6B8_3515_E20E_41A7_75EB469672C0.png",
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 1,
 "mode": "push",
 "height": 75,
 "borderSize": 0,
 "click": "this.openLink('https://www.instagram.com/zeissvisioncenter_chapeco/', '_blank')",
 "shadow": false,
 "data": {
  "name": "IconButton51680"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 58,
 "id": "IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC",
 "maxWidth": 58,
 "class": "IconButton",
 "width": 58,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC.png",
 "paddingLeft": 0,
 "rollOverIconURL": "skin/IconButton_EE5807F6_E3BE_860E_41E7_431DDDA54BAC_rollover.png",
 "minHeight": 1,
 "propagateClick": true,
 "transparencyActive": true,
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "borderSize": 0,
 "click": "this.shareTwitter(window.location.href)",
 "shadow": false,
 "visible": false,
 "data": {
  "name": "IconButton TWITTER"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "fontFamily": "Montserrat",
 "iconWidth": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "width": 120,
 "borderRadius": 8,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "iconHeight": 0,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "layout": "horizontal",
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "data": {
  "name": "SOBRE A ZEISS"
 },
 "backgroundColor": [
  "#0033FF",
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "iconBeforeLabel": true,
 "mode": "push",
 "minWidth": 1,
 "fontSize": 12,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 1,
 "height": 40,
 "label": "SOBRE A ZEISS",
 "fontStyle": "normal",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, true, 0, null, null, false)",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "textDecoration": "none",
 "rollOverShadow": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.68,
 "horizontalAlign": "center"
},
{
 "fontFamily": "Montserrat",
 "iconWidth": 42,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "width": 110,
 "borderRadius": 8,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "iconHeight": 42,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "data": {
  "name": "LOCALIZA\u00c7\u00c3O"
 },
 "backgroundColor": [
  "#0033FF",
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "mode": "push",
 "minWidth": 1,
 "fontSize": 12,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 1,
 "height": 40,
 "label": "LOCALIZA\u00c7\u00c3O  ",
 "fontStyle": "normal",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, true, 0, null, null, false)",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "textDecoration": "none",
 "layout": "horizontal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.68,
 "horizontalAlign": "center"
},
{
 "fontFamily": "Montserrat",
 "iconWidth": 32,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "width": 130,
 "borderRadius": 8,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": true,
 "fontWeight": "bold",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "data": {
  "name": "PANOR\u00c2MAS"
 },
 "backgroundColor": [
  "#0033FF",
  "#000000"
 ],
 "rollOverBackgroundColorRatios": [
  0
 ],
 "iconBeforeLabel": true,
 "mode": "push",
 "minWidth": 1,
 "fontSize": 12,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 1,
 "height": 40,
 "label": "LABORAT\u00d3RIO",
 "fontStyle": "normal",
 "click": "this.mainPlayList.set('selectedIndex', 9)",
 "shadow": false,
 "rollOverBackgroundOpacity": 0.8,
 "shadowBlurRadius": 15,
 "textDecoration": "none",
 "layout": "horizontal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.71,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_2A10F34D_357A_6201_41BE_05BD6BAA0ED8"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "46.875%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100.093%",
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Image_2853B5B0_357D_E600_41C6_147D418E4D1E",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 50,
 "borderRadius": 0,
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "width": "52.083%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 20,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "width": "25%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "85%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 50,
 "borderRadius": 0,
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "width": "50%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 20,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "width": "25%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 140,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "backgroundOpacity": 0.05,
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "paddingLeft": 70,
 "itemLabelFontWeight": "normal",
 "scrollBarWidth": 10,
 "width": "100%",
 "itemThumbnailBorderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "itemLabelFontSize": 14,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelTextDecoration": "none",
 "itemHeight": 156,
 "scrollBarOpacity": 0.5,
 "selectedItemThumbnailShadow": true,
 "itemLabelFontColor": "#666666",
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "gap": 26,
 "scrollBarColor": "#04A3E1",
 "backgroundColorDirection": "vertical",
 "backgroundColor": [
  "#000000"
 ],
 "itemBackgroundOpacity": 0,
 "itemLabelGap": 7,
 "height": "100%",
 "itemBackgroundColorDirection": "vertical",
 "rollOverItemLabelFontColor": "#04A3E1",
 "itemThumbnailHeight": 125,
 "itemPaddingBottom": 3,
 "itemWidth": 220,
 "shadow": false,
 "itemMode": "normal",
 "itemLabelFontStyle": "normal",
 "itemHorizontalAlign": "center",
 "itemLabelHorizontalAlign": "center",
 "paddingBottom": 70,
 "horizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "verticalAlign": "middle",
 "itemLabelFontFamily": "Montserrat",
 "class": "ThumbnailGrid",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "borderRadius": 5,
 "paddingRight": 70,
 "itemThumbnailOpacity": 1,
 "itemBorderRadius": 0,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "backgroundColorRatios": [
  0
 ],
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "itemMinHeight": 50,
 "itemThumbnailShadow": false,
 "itemThumbnailWidth": 220,
 "borderSize": 0,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "itemMinWidth": 50,
 "selectedItemLabelFontWeight": "bold",
 "itemBackgroundColorRatios": [],
 "rollOverItemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarMargin": 2,
 "paddingTop": 10
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "id": "Container_221C0648_0C06_E5FD_4193_12BCE1D6DD6B",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "85%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
  "this.Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
  "this.Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6"
 ],
 "id": "Container_221C9648_0C06_E5FD_41A1_A79DE53B3031",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 50,
 "borderRadius": 0,
 "paddingRight": 50,
 "scrollBarWidth": 10,
 "width": "15%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "minWidth": 400,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 20,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "width": "25%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 140,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "header"
 },
 "children": [
  "this.HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
  "this.IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3"
 ],
 "id": "Container_28214A13_0D5D_5B97_4193_B631E1496339",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 140,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
  "this.IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
  "this.IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14"
 ],
 "id": "Container_2B0BF61C_0D5B_2B90_4179_632488B1209E",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container photo"
 },
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "-left"
 },
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "55%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "-right"
 },
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 60,
 "borderRadius": 0,
 "paddingRight": 60,
 "scrollBarWidth": 10,
 "width": "45%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "minWidth": 460,
 "overflow": "visible",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "scrollBarColor": "#0069A3",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 20,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 1,
 "horizontalAlign": "left"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "width": "25%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "maxHeight": 1224,
 "id": "Image_2A10F34D_357A_6201_41BE_05BD6BAA0ED8",
 "left": "0%",
 "maxWidth": 979,
 "class": "Image",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_2A10F34D_357A_6201_41BE_05BD6BAA0ED8.png",
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image47848"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 60,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right"
},
{
 "maxHeight": 1219,
 "id": "Image_2853B5B0_357D_E600_41C6_147D418E4D1E",
 "maxWidth": 983,
 "class": "Image",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_2853B5B0_357D_E600_41C6_147D418E4D1E.png",
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "Image47996"
 },
 "horizontalAlign": "center",
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingBottom": 0
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 30,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 370,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 40,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "paddingLeft": 0,
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "right": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "minHeight": 1,
 "propagateClick": false,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "vrPointerColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "bottom": 0,
 "top": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "Viewer info 1"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "data": {
  "name": "Container arrows"
 },
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 60,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right"
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 30,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 370,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 40,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingLeft": 80,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "77.115%",
 "minHeight": 100,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.04vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.04vh;font-family:'Bebas Neue Bold';\">Panorama list:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "verticalAlign": "top",
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "left": "0%",
 "class": "WebFrame",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "right": "0%",
 "url": "https://maps.google.com/maps?output=embed&center=-27.1020863,-52.6206853&z=17&q=ZEISS+VISION+CENTER+Chapec%C3%B3+%E2%80%93+%C3%93tica+%C3%93culos+de+grau,+arma%C3%A7%C3%A3o",
 "minHeight": 1,
 "propagateClick": false,
 "scrollEnabled": true,
 "backgroundColorRatios": [
  0
 ],
 "bottom": "0%",
 "minWidth": 1,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "shadow": false,
 "insetBorder": false,
 "data": {
  "name": "WebFrame48191"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundOpacity": 1
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_221C8648_0C06_E5FD_41A0_8247B2B7DEB0",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 60,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right"
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
  "this.Button_221B5648_0C06_E5FD_4198_40C786948FF0"
 ],
 "id": "Container_221B7648_0C06_E5FD_418B_12E57BBFD8EC",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 30,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_221B4648_0C06_E5FD_4194_30EDC4E7D1B6",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 370,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 40,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingLeft": 80,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "77.115%",
 "minHeight": 100,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.04vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.04vh;font-family:'Bebas Neue Bold';\">FLOORPLAN:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "verticalAlign": "top",
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "id": "HTMLText_28217A13_0D5D_5B97_419A_F894ECABEB04",
 "left": "0%",
 "scrollBarMargin": 2,
 "class": "HTMLText",
 "paddingLeft": 80,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "77.115%",
 "minHeight": 100,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "top": "0%",
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:5.04vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.04vh;font-family:'Bebas Neue Bold';\">PHOTOALBUM:</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText54192"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "backgroundOpacity": 0
},
{
 "verticalAlign": "top",
 "maxHeight": 60,
 "id": "IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3.jpg",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_rollover.jpg",
 "width": "100%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "top": 20,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28216A13_0D5D_5B97_41A9_2CAB10DB6CA3_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2820BA13_0D5D_5B97_4192_AABC38F6F169, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "ViewerAreaLabeled_281D2361_0D5F_E9B0_41A1_A1F237F85FD7",
 "left": "0%",
 "paddingLeft": 0,
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "top": "0%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "Viewer photoalbum + text 1"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D",
 "left": 10,
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_rollover.png",
 "width": "14.22%",
 "minHeight": 50,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D.png",
 "transparencyActive": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "top": "20%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2BE71718_0D55_6990_41A5_73D31D902E1D_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14.png",
 "right": 10,
 "rollOverIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_rollover.png",
 "width": "14.22%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "top": "20%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_28BF3E40_0D4B_DBF0_41A3_D5D2941E6E14_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "vrPointerSelectionTime": 2000,
 "playbackBarHeadShadow": true,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "paddingLeft": 0,
 "progressHeight": 6,
 "progressBottom": 2,
 "playbackBarOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipShadowOpacity": 1,
 "toolTipFontFamily": "Arial",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "vrPointerColor": "#FFFFFF",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "minWidth": 1,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipShadowVerticalLength": 0,
 "toolTipFontColor": "#606060",
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "height": "100%",
 "transitionDuration": 500,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBottom": 0,
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "shadow": false,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadOpacity": 1,
 "paddingBottom": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingRight": 6,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipBorderSize": 1,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "playbackBarHeight": 10,
 "toolTipDisplayTime": 600,
 "playbackBarHeadWidth": 6,
 "class": "ViewerArea",
 "borderRadius": 0,
 "paddingRight": 0,
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "progressBarBorderSize": 6,
 "toolTipBorderRadius": 3,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowSpread": 0,
 "playbackBarBorderRadius": 0,
 "top": "0%",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": 12,
 "progressLeft": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowColor": "#000000",
 "borderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressOpacity": 1,
 "vrPointerSelectionColor": "#FF6600",
 "toolTipShadowBlurRadius": 3,
 "playbackBarBorderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "progressRight": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "paddingTop": 0,
 "toolTipShadowColor": "#333333"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "width": "14.22%",
 "minHeight": 50,
 "propagateClick": false,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "transparencyActive": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "top": "20%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "right": 10,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "width": "14.22%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "bottom": "20%",
 "minWidth": 50,
 "mode": "push",
 "top": "20%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "top",
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "maxWidth": 60,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "right": 20,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "width": "10%",
 "minHeight": 50,
 "propagateClick": false,
 "transparencyActive": false,
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "top": 20,
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "shadow": false,
 "data": {
  "name": "IconButton X"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "right"
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "maxWidth": 2000,
 "class": "Image",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_outside",
 "data": {
  "name": "Image"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "bottom",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 0,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 0,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 60,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 20,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right"
},
{
 "data": {
  "name": "Container text"
 },
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 520,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "minWidth": 100,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#E73B2C",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "100%",
 "shadow": false,
 "layout": "vertical",
 "contentOpaque": false,
 "paddingBottom": 30,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "data": {
  "name": "Container space"
 },
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarMargin": 2,
 "class": "Container",
 "width": 370,
 "borderRadius": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "backgroundColorRatios": [
  0,
  1
 ],
 "overflow": "scroll",
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 40,
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.56vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.55vh;font-family:'Bebas Neue Bold';\">ZEISS VISION CENTER Chapec\u00f3</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.19vh;font-family:'Bebas Neue Bold';\">\u00d3tica - \u00f3culos de grau, arma\u00e7\u00e3o, linha infantil, masculina e feminina.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>A Zeiss Chapec\u00f3 possui tecnologia de origem alem\u00e3 \u00e9 uma empresa l\u00edder no mercado \u00f3tico, conhecida por oferecer lentes de alta qualidade para \u00f3culos de alta qualidade e tecnologia avan\u00e7ada. Com uma forte cultura de inova\u00e7\u00e3o, a empresa investe constantemente em pesquisa e desenvolvimento para oferecer aos seus clientes as mais avan\u00e7adas solu\u00e7\u00f5es em lentes e tecnologia \u00f3tica.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.69vh;font-family:'Times New Roman CYR';\"><B>Chapec\u00f3-SC</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#333333;font-size:2.69vh;font-family:'Times New Roman CYR';\"><B>Telefone: (49) 3323-3826</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.7vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20,
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "fontFamily": "Bebas Neue Bold",
 "iconWidth": 32,
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": "46%",
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "minWidth": 1,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "9%",
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "layout": "horizontal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.7,
 "horizontalAlign": "center"
},
{
 "verticalAlign": "middle",
 "maxHeight": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "maxWidth": 150,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "width": "12%",
 "minHeight": 70,
 "propagateClick": false,
 "transparencyActive": true,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton <"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "data": {
  "name": "Container separator"
 },
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "backgroundOpacity": 0,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "80%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "height": "30%",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "shadow": false,
 "layout": "absolute",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "horizontalAlign": "left"
},
{
 "verticalAlign": "middle",
 "maxHeight": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "maxWidth": 150,
 "class": "IconButton",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "width": "12%",
 "minHeight": 70,
 "propagateClick": false,
 "transparencyActive": true,
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "borderSize": 0,
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "shadow": false,
 "data": {
  "name": "IconButton >"
 },
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "backgroundOpacity": 0,
 "horizontalAlign": "center"
},
{
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.56vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.55vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.55vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.19vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:2.69vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.69vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Nam sed faucibus est.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Ut eget lorem sed leo.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20,
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "fontFamily": "Bebas Neue Bold",
 "iconWidth": 32,
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "shadowColor": "#000000",
 "iconHeight": 32,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "width": "46%",
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "backgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "minWidth": 1,
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "9%",
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "layout": "horizontal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.7,
 "horizontalAlign": "center"
},
{
 "id": "HTMLText_221B6648_0C06_E5FD_41A0_77851DC2C548",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.56vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.04vh;font-family:'Bebas Neue Bold';\">ZEISS VISION CENTER Chapec\u00f3</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.19vh;font-family:'Bebas Neue Bold';\">Av. Porto Alegre, 390-D - Centro, Chapec\u00f3 - SC, 89802-130</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.19vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.19vh;font-family:'Bebas Neue Bold';\">Contato: (49) 33233826</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:5.04vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;\">ZEISS VISION CENTER, \u00e9 a \u00d3tica EMBAIXADORA das lentes ZEISS em Chapec\u00f3.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.85vh;\">Somos licenciados pela ZEISS Alemanha.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingBottom": 20,
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "fontFamily": "Bebas Neue Bold",
 "iconWidth": 32,
 "id": "Button_221B5648_0C06_E5FD_4198_40C786948FF0",
 "pressedBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "width": 207,
 "borderRadius": 0,
 "paddingRight": 0,
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "iconHeight": 32,
 "shadowSpread": 1,
 "minHeight": 1,
 "propagateClick": false,
 "fontWeight": "normal",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "backgroundColorRatios": [
  0
 ],
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "data": {
  "name": "Button"
 },
 "backgroundColor": [
  "#04A3E1"
 ],
 "iconBeforeLabel": true,
 "mode": "push",
 "minWidth": 1,
 "fontSize": 34,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": 59,
 "label": "lorem ipsum",
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "textDecoration": "none",
 "visible": false,
 "layout": "horizontal",
 "paddingBottom": 0,
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "backgroundOpacity": 0.7,
 "horizontalAlign": "center"
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "45%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.56vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:5.88vh;font-family:'Bebas Neue Bold';\">real estate agent</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingBottom": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2
},
{
 "data": {
  "name": "- content"
 },
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarMargin": 2,
 "class": "Container",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "scrollBarWidth": 10,
 "width": "100%",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "overflow": "scroll",
 "scrollBarVisible": "rollOver",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "height": "80%",
 "shadow": false,
 "layout": "horizontal",
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left"
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "maxWidth": 200,
 "class": "Image",
 "paddingLeft": 0,
 "borderRadius": 0,
 "paddingRight": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "width": "25%",
 "minHeight": 1,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "borderSize": 0,
 "shadow": false,
 "scaleMode": "fit_inside",
 "data": {
  "name": "agent photo"
 },
 "horizontalAlign": "left",
 "paddingTop": 0,
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingBottom": 0
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "backgroundOpacity": 0,
 "class": "HTMLText",
 "paddingLeft": 10,
 "borderRadius": 0,
 "paddingRight": 10,
 "scrollBarWidth": 10,
 "width": "75%",
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarOpacity": 0.5,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "borderSize": 0,
 "shadow": false,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.19vh;font-family:'Bebas Neue Bold';\">john doe</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.02vh;font-family:'Bebas Neue Bold';\">licensed real estate salesperson</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.85vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.85vh;font-family:'Bebas Neue Bold';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.18vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.01vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.18vh;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingBottom": 10,
 "paddingTop": 0,
 "scrollBarMargin": 2
}],
 "scrollBarWidth": 10,
 "vrPolyfillScale": 0.65,
 "minHeight": 20,
 "propagateClick": true,
 "mouseWheelEnabled": true,
 "backgroundPreloadEnabled": true,
 "defaultVRPointer": "laser",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "overflow": "visible",
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "height": "100%",
 "mobileMipmappingEnabled": false,
 "scripts": {
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "existsKey": function(key){  return key in window; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; }
 },
 "shadow": false,
 "downloadEnabled": false,
 "desktopMipmappingEnabled": false,
 "contentOpaque": false,
 "paddingBottom": 0,
 "paddingTop": 0,
 "verticalAlign": "top",
 "horizontalAlign": "left",
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
