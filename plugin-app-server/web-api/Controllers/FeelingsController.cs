using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using web_api.Models;

namespace web_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeelingsController : ControllerBase
    {
        private readonly PluginContext _context;

        public FeelingsController(PluginContext context)
        {
            _context = context;
        }

        // GET: api/Feelings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Feeling>>> GetFeelings()
        {
            return await _context.Feelings.ToListAsync();
        }

        // GET: api/Feelings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Feeling>> GetFeeling(string id)
        {
            var feeling = await _context.Feelings.FindAsync(id);

            if (feeling == null)
            {
                return NotFound();
            }

            return feeling;
        }
    }
}
