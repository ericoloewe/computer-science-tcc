using System.Threading.Tasks;
using web_api.Datas;
using web_api.Models;
using web_api.Repositories;

namespace web_api.Services
{
    public class UserEventsService : IUserEventsService
    {
        private IUserEventsRepository repository;

        public UserEventsService(IUserEventsRepository repository)
        {
            this.repository = repository;
        }

        public async Task Save(UserEventData eventData)
        {
            await repository.Save(new UserEvent()
            {
                Type = UserEventTypeConverter.ToEnum(eventData.Type),
                Value = eventData.Value,
            });
        }
    }
}
