using jedChat.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace jedChat.Controllers
{
    [ApiController]
    [Route("message")]

    public class MessageController : ControllerBase
    {
        private readonly IMessageHub messageHub;
        public MessageController(IMessageHub _messageHub) { messageHub = _messageHub }
        
        [Route("send")]
        public IActionResult sendMessage([FromBody] string message)
        {

            return NoContent();
        }
        
    }
}
