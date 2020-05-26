using System.Threading.Tasks;
using web_api.Datas;

namespace web_api.Services
{
    public interface IUserEventsService
    {
        Task Save(UserEventData eventData);
    }
}