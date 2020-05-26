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

        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseNpgsql("Host=127.0.0.1;Database=spotify_plugin;Username=postgres;Password=postgres");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "1", Name = "Alegre", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "2", Name = "Triste", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "3", Name = "Assustado", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "4", Name = "Ansioso", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "5", Name = "Bravo", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "6", Name = "Feliz", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "7", Name = "Chorando", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "8", Name = "Com vergonha", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "9", Name = "Com raiva", CreatedDate = DateTime.Now });
            modelBuilder.Entity<Feeling>().HasData(new Feeling { Id = "10", Name = "Amando", CreatedDate = DateTime.Now });
        }
    }
}
