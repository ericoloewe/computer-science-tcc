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


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            var datetime = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local);

            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "1", Name = "Alegre", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "2", Name = "Triste", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "3", Name = "Assustado", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "4", Name = "Ansioso", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "5", Name = "Bravo", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "6", Name = "Feliz", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "7", Name = "Chorando", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "8", Name = "Com vergonha", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "9", Name = "Com raiva", CreatedDate = datetime });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "10", Name = "Amando", CreatedDate = datetime });
        }
    }
}
