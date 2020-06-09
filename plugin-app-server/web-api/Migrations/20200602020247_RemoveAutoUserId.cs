using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class RemoveAutoUserId : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpotifyUri",
                table: "Users");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "SpotifyUri",
                table: "Users",
                type: "text",
                nullable: true);
        }
    }
}
