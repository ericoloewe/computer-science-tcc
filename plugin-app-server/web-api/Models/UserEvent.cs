using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api.Models
{
    public class UserEvent
    {
        [Key]
        public string Id { get; set; }
        public UserEventType Type { get; set; }
        public string Value { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedDate { get; set; }
    }

    public enum UserEventType
    {
        CHANGE_MUSIC_TIME,
        CHANGE_TO_NEXT_MUSIC,
        CHANGE_TO_PREVIOUS_MUSIC,
        CHOOSE_FEELING,
        HIDE_DETAILS,
        LIKED_ARTIST,
        LIKED_GENRE,
        LIKED_MUSIC,
        PAUSE_MUSIC,
        PLAY_MUSIC,
        SHOW_DETAILS,
    }
}
