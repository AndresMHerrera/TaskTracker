using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Service.Models;

namespace Service.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        [HttpPost("login")]
        public async Task<ActionResult<LoginResponseDto>> Login([FromBody]LoginDto login)
        {
            var response = new LoginResponseDto();
            response.IsLoggedIn = true;

            return Ok(response);
        }
    }
}
