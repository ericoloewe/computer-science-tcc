using Microsoft.EntityFrameworkCore;
using System;

namespace web_api.Models
{
    public class PluginContext : DbContext
    {
        public DbSet<Music> Musics { get; set; }
        public DbSet<Artist> Artists { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Album> Albums { get; set; }
        public DbSet<Feeling> Feelings { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserEvent> UserEvents { get; set; }

        public PluginContext(DbContextOptions<PluginContext> options) : base(options)
        {
        }
    }
}
