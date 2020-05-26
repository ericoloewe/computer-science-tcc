using System;
using System.Collections.Generic;
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

        public string UserId { get; set; }
        public User User { get; set; }
    }

    public static class UserEventTypeConverter
    {
        private static readonly IDictionary<string, UserEventType> EVENT_STRING_TO_ENUM = new Dictionary<string, UserEventType>()
        {
            { "CHANGE_MUSIC_TIME",UserEventType.CHANGE_MUSIC_TIME },
            {"CHANGE_TO_NEXT_MUSIC", UserEventType.CHANGE_TO_NEXT_MUSIC},
            {"CHANGE_TO_PREVIOUS_MUSIC", UserEventType.CHANGE_TO_PREVIOUS_MUSIC},
            {"CHOOSE_FEELING", UserEventType.CHOOSE_FEELING},
            {"HIDE_DETAILS", UserEventType.HIDE_DETAILS},
            {"LIKED_ARTIST", UserEventType.LIKED_ARTIST},
            {"LIKED_GENRE", UserEventType.LIKED_GENRE},
            {"LIKED_MUSIC", UserEventType.LIKED_MUSIC},
            {"PAUSE_MUSIC", UserEventType.PAUSE_MUSIC},
            {"PLAY_MUSIC", UserEventType.PLAY_MUSIC},
            {"SHOW_DETAILS", UserEventType.SHOW_DETAILS}
        };

        public static UserEventType ToEnum(string strType)
        {
            if (!EVENT_STRING_TO_ENUM.ContainsKey(strType))
            {
                throw new ArgumentException($"Invalid type {strType}");
            }

            return EVENT_STRING_TO_ENUM[strType];
        }
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
