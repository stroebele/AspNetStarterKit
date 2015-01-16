namespace StarterKit.Auth.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class FixClientIdSpellingError : DbMigration
    {
        public override void Up()
        {
            RenameColumn("dbo.Clients", "CleintId", "ClientId");
        }
        
        public override void Down()
        {
            RenameColumn("dbo.Clients", "ClientId", "CleintId");
        }
    }
}
