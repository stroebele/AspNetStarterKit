using System;
using System.Linq;
using Microsoft.AspNet.Identity.EntityFramework;

namespace StarterKit.Auth
{
    public class AuthContext : IdentityDbContext<IdentityUser>
    {
        public AuthContext()
            : base("AuthContext")
        {

        }
    }
}