using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jedChat.Services
{
    public class MessageHub : Hub, IMessageHub
    {
        public MessageHub()
        {

        }

        public Task BroadcastMessage(string user, string message) {

            return Clients.All.SendAsync("ReceiveMessage", user, message);
        
        
        }
        public Task ReceiveMessage() { return; }
    }
}
