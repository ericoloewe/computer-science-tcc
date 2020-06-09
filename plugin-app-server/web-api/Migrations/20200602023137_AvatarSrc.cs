using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class AvatarSrc : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AvatarSrc",
                table: "Users",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AvatarSrc",
                table: "Users");
        }
    }
}
