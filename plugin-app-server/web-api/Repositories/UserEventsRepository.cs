using System.Threading.Tasks;
using web_api.Models;

namespace web_api.Repositories
{
    public class UserEventsRepository : IUserEventsRepository
    {
        private readonly PluginContext _context;

        public UserEventsRepository(PluginContext context)
        {
            _context = context;
        }

        public async Task Save(UserEvent userEvent)
        {
            _context.UserEvents.Add(userEvent);

            await _context.SaveChangesAsync();
        }
    }
}
