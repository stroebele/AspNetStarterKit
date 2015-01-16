namespace StarterKit.Auth.Migrations
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<StarterKit.Auth.AuthContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "StarterKit.Auth.AuthContext";
        }

        protected override void Seed(StarterKit.Auth.AuthContext context)
        {
            if (context.Clients.Count() > 0)
            {
                return;
            }

            context.Clients.AddRange(BuildClientsList());
            context.SaveChanges();
        }


        private static List<Client> BuildClientsList()
        {

            List<Client> clientsList = new List<Client> 
            {
                new Client
                { ClientId = "html", 
                    Secret= Helper.GetHash("D9QLu8UMq8PT4JN"), 
                    Name="AngularJS front-end Application", 
                    ApplicationType =  ApplicationTypes.JavaScript, 
                    Active = true, 
                    RefreshTokenLifeTime = 7200, 
                    AllowedOrigin = "*"
                },
                new Client
                { ClientId = "gruntjs", 
                    Secret=Helper.GetHash("Hk6zhWtzkzLqGVW"), 
                    Name="grunt js Application", 
                    ApplicationType =ApplicationTypes.NativeConfidential, 
                    Active = true, 
                    RefreshTokenLifeTime = 14400, 
                    AllowedOrigin = "*"
                }
            };

            return clientsList;
        }
    }
}
