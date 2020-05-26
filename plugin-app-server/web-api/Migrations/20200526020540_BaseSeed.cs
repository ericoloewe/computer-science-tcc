using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class BaseSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Feelings",
                columns: new[] { "Id", "CreatedDate", "Name" },
                values: new object[,]
                {
                    { "1", new DateTime(2020, 5, 25, 23, 5, 39, 448, DateTimeKind.Local).AddTicks(490), "Alegre" },
                    { "2", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5686), "Triste" },
                    { "3", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5796), "Assustado" },
                    { "4", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5843), "Ansioso" },
                    { "5", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5886), "Bravo" },
                    { "6", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5939), "Feliz" },
                    { "7", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5981), "Chorando" },
                    { "8", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(6021), "Com vergonha" },
                    { "9", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(6061), "Com raiva" },
                    { "10", new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(6106), "Amando" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "1");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "10");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "2");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "3");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "4");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "5");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "6");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "7");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "8");

            migrationBuilder.DeleteData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "9");
        }
    }
}
