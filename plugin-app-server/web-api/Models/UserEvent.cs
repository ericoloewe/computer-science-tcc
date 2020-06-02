using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace web_api.Models
{
    public class UserEvent
    {
        [Key]
        public string Id { get; set; }
        public string Type { get; set; }
        public string Value { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public DateTime CreatedDate { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }
    }
}
