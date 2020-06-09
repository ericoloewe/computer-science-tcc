using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace web_api.Migrations
{
    public partial class UserEventRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 851, DateTimeKind.Local).AddTicks(3211));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "10",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(8067));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7626));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7729));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7768));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7802));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "6",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7847));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "7",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7883));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "8",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(7986));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "9",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 48, 13, 854, DateTimeKind.Local).AddTicks(8029));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "1",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 448, DateTimeKind.Local).AddTicks(490));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "10",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(6106));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "2",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5686));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "3",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5796));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "4",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5843));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "5",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5886));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "6",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5939));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "7",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(5981));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "8",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(6021));

            migrationBuilder.UpdateData(
                table: "Feelings",
                keyColumn: "Id",
                keyValue: "9",
                column: "CreatedDate",
                value: new DateTime(2020, 5, 25, 23, 5, 39, 451, DateTimeKind.Local).AddTicks(6061));
        }
    }
}
