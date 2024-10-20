// 'use client'
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
  }
}

let player: YT.Player | null = null;

const initializePlayer = (videoId: string) => {
  if (!window.YT) {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      createPlayer(videoId);
    };
  } else {
    // If YouTube API script is already loaded, initialize player directly
    createPlayer(videoId);
  }
};

const createPlayer = (videoId: string) => {
  if (player) {
    player.destroy();
  }

  // Create a new YouTube player instance
  player = new window.YT.Player("player", {
    height: "140",
    width: "200",
    videoId: videoId,
    playerVars: {
      disablekb: 1,
      controls: 0,
      playsinline: 1,
      enablejsapi: 1,
      fs: 0,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 0,
      autoplay: 1,
      loop: 0,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });
};

const onPlayerReady = async (event: YT.PlayerEvent) => {
  event.target.playVideo();
};

const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
  event.target.getPlayerState();
};

export const loadVideoById = (newVideoId: string) => {
  if (player) {
    player.loadVideoById(newVideoId);
  }
};

export const getMaxDuration = () => {
  if (player) {
    try {
      const duration = player.getDuration();
      return duration
    } catch (error) {
      console.log("Failed to get Duration", error);
    }
  }
};

// Function to play the video
export const playVideoFunc = () => {
  if (player) {
    try {
      player.playVideo();
    } catch (error) {
      console.error("Failed to play video", error);
    }
  }
};

// Function to pause the video
export const pauseVideoFunc = () => {
  if (player) {
    try {
      player.pauseVideo();
    } catch (error) {
      console.error("Failed to pause video", error);
    }
  }
};

export const changeVolume = (change: number) => {
  if (player) {
    try {
      player.setVolume(change);
    } catch (error) {
      console.error("Failed to change volume", error);
    }
  }
};

export const LoopVid = (change: number) => {};

type videoId = { videoId: string };
const YouTubePlayer: React.FC<videoId> = ({ videoId }) => {
  useEffect(() => {
    initializePlayer(videoId);
    // Clean up function
    return () => {
      if (player) {
        player.destroy();
        player = null;
      }
    };
  }, [videoId]);

  if (!videoId) {
    return <></>;
  }

  return (
    <div
      style={{
        position: "absolute",
        zIndex: "10",
        top: "90%",
        left: "90%",
        transform: "translate(-50%, -50%)",
      }}
      id="player"
    ></div>
  );
};

export default YouTubePlayer;
