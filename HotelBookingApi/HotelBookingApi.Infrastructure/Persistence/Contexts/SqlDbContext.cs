using HotelBookingApi.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelBookingApi.Infrastructure.Persistence.Contexts;

public class SqlDbContext : DbContext
{
    public SqlDbContext(DbContextOptions<SqlDbContext> options)
        : base(options)
    {

    }

    public DbSet<HotelBooking>? Bookings { get; set; }
}
