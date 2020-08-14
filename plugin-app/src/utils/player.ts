import { EventType } from "../contexts/event";

const musicHistory: string[] = [];

export class PlayerUtil {
  static stateToEvent(state: Spotify.PlaybackState): { type: EventType, value: string } {
    const { current_track } = state?.track_window;
    const lastMusic = musicHistory[musicHistory.length - 1]
    const value = current_track.uri;
    let type = EventType.PLAY_MUSIC

    if (value == null)
      throw new Error("Invalid current track");

    if (state.paused)
      type = EventType.PAUSE_MUSIC
    else if (lastMusic != null) {
      if (lastMusic !== value)
        type = EventType.CHANGE_MUSIC
      else if (state?.position === 0)
        type = EventType.RESTART_MUSIC
    }

    if (lastMusic !== value)
      musicHistory.push(value)

    return {
      type,
      value
    }
  }
}
