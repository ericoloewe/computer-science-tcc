using System.Threading.Tasks;
using web_api.Datas;
using web_api.Models;
using web_api.Repositories;

namespace web_api.Services
{
    public class UserService : IUserService
    {
        private IUserRepository repository;

        public UserService(IUserRepository repository)
        {
            this.repository = repository;
        }

        public async Task TryToCreate(UserData eventData)
        {
            await repository.Save(new User()
            {
                Id = eventData.SpotifyUri,
                Name = eventData.Name,
            });
        }
    }
}
