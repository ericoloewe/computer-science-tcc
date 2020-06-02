using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using web_api.Datas;
using web_api.Models;
using web_api.Services;

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService service;
        private readonly ILogger<UserController> logger;

        public UserController(IUserService service, ILogger<UserController> logger)
        {
            this.service = service;
            this.logger = logger;
        }

        // POST: api/User
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult> PostUser(UserData userEvent)
        {
            try
            {
                await service.TryToCreate(userEvent);
                return Ok();
            }
            catch (ArgumentException ex)
            {
                logger.LogError(ex, $"There was an exception => {ex.Message}");
                return BadRequest();
            }
        }
    }
}
