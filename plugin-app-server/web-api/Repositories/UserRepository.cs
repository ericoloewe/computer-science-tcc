using System.Threading.Tasks;
using web_api.Models;

namespace web_api.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly PluginContext _context;

        public UserRepository(PluginContext context)
        {
            _context = context;
        }

        public async Task Save(User user)
        {
            _context.Users.Add(user);

            await _context.SaveChangesAsync();
        }
    }
}
