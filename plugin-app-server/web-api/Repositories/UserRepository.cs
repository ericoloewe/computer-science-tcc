using Microsoft.EntityFrameworkCore;
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
            var foundedUser = _context.Users.Find(user.Id);

            if (foundedUser != null)
            {
                _context.Entry(foundedUser).State = EntityState.Detached;
                _context.Users.Update(user);
            }
            else
                _context.Users.Add(user);

            await _context.SaveChangesAsync();
        }
    }
}
