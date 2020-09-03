import { EventType } from "../contexts/event";

const musicHistory: string[] = [];

export class PlayerUtil {
  static stateToEvent(state: Spotify.PlaybackState): { type: EventType, value: string } {
    const { current_track, next_tracks, previous_tracks } = state?.track_window;
    const lastMusic = musicHistory[musicHistory.length - 1]
    const value = current_track.uri;
    let type = EventType.PLAY_MUSIC

    if (value == null)
      throw new Error("Invalid current track");

    if (state?.position <= 1000)
      type = EventType.RESTART_MUSIC

    if (state.paused)
      type = EventType.PAUSE_MUSIC
    else if (lastMusic != null) {
      const returned = next_tracks.some(t => t.uri === lastMusic)
      const passed = previous_tracks.some(t => t.uri === lastMusic)

      if (passed)
        type = EventType.CHANGE_TO_NEXT_MUSIC
      else if (returned)
        type = EventType.CHANGE_TO_PREVIOUS_MUSIC
    }

    if (lastMusic !== value)
      musicHistory.push(value)

    return {
      type,
      value
    }
  }
}
