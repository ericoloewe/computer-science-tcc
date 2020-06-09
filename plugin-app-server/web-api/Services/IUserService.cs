using System.Threading.Tasks;
using web_api.Datas;

namespace web_api.Services
{
    public interface IUserService
    {
        Task TryToCreate(UserData eventData);
    }
}