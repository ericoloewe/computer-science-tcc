﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using web_api.Models;

namespace web_api.Migrations
{
    [DbContext(typeof(PluginContext))]
    [Migration("20200526025113_StaticDateTime")]
    partial class StaticDateTime
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn)
                .HasAnnotation("ProductVersion", "3.1.4")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("web_api.Models.Album", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Albums");
                });

            modelBuilder.Entity("web_api.Models.Artist", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("SpotifyUri")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Artists");
                });

            modelBuilder.Entity("web_api.Models.Feeling", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Feelings");

                    b.HasData(
                        new
                        {
                            Id = "1",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Alegre"
                        },
                        new
                        {
                            Id = "2",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Triste"
                        },
                        new
                        {
                            Id = "3",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Assustado"
                        },
                        new
                        {
                            Id = "4",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Ansioso"
                        },
                        new
                        {
                            Id = "5",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Bravo"
                        },
                        new
                        {
                            Id = "6",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Feliz"
                        },
                        new
                        {
                            Id = "7",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Chorando"
                        },
                        new
                        {
                            Id = "8",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Com vergonha"
                        },
                        new
                        {
                            Id = "9",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Com raiva"
                        },
                        new
                        {
                            Id = "10",
                            CreatedDate = new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local),
                            Name = "Amando"
                        });
                });

            modelBuilder.Entity("web_api.Models.Genre", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Genres");
                });

            modelBuilder.Entity("web_api.Models.Music", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<string>("AlbumId")
                        .HasColumnType("text");

                    b.Property<string>("ArtistId")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("SpotifyUri")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("AlbumId");

                    b.HasIndex("ArtistId");

                    b.ToTable("Musics");
                });

            modelBuilder.Entity("web_api.Models.User", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("SpotifyUri")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("web_api.Models.UserEvent", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("text");

                    b.Property<DateTime>("CreatedDate")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("timestamp without time zone");

                    b.Property<int>("Type")
                        .HasColumnType("integer");

                    b.Property<string>("UserId")
                        .HasColumnType("text");

                    b.Property<string>("Value")
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("UserEvents");
                });

            modelBuilder.Entity("web_api.Models.Music", b =>
                {
                    b.HasOne("web_api.Models.Album", "Album")
                        .WithMany("Musics")
                        .HasForeignKey("AlbumId");

                    b.HasOne("web_api.Models.Artist", "Artist")
                        .WithMany("Musics")
                        .HasForeignKey("ArtistId");
                });

            modelBuilder.Entity("web_api.Models.UserEvent", b =>
                {
                    b.HasOne("web_api.Models.User", "User")
                        .WithMany("UserEvents")
                        .HasForeignKey("UserId");
                });
#pragma warning restore 612, 618
        }
    }
}
