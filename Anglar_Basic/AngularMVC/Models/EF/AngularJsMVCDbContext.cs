using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Web;

namespace AngularMVC.Models.EF
{
    public class AngularJsMVCDbContext : DbContext
    {
        public AngularJsMVCDbContext() : base("name = AngularJsMVCDbContext ")
        {

        }
        //setting EF convention
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            // using  singluar table name
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<User> Users { get; set; }
    }
}