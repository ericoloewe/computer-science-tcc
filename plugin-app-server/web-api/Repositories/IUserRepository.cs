using System.Threading.Tasks;
using web_api.Models;

namespace web_api.Repositories
{
    public interface IUserRepository
    {
        Task Save(User user);
    }
}