using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jedChat.Services
{
    public interface IMessageHub
    {
        Task BroadcastMessage(string user, string message);
        Task ReceiveMessage();
    }
}
