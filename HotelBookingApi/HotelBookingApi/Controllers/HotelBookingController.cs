using HotelBookingApi.Domain.Models;
using HotelBookingApi.Domain.DTO;
using HotelBookingApi.Infrastructure.Persistence.Contexts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelBookingApi.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class HotelBookingController : ControllerBase
{
    private readonly SqlDbContext _context;

    public HotelBookingController(SqlDbContext context)
    {
        _context = context;
    }

    //create new Hotel Booking
    [HttpPost]
    public async Task<ActionResult<HotelBooking>> CreateHotelBooking(HotelBookingDTO bookingDTO)
    {
        if (_context.Bookings == null)
        {
            return Problem("Entity set 'HotelBookingContext.User'  is null.");
        }

        var booking = new HotelBooking
        {
            RoomNumber = bookingDTO.RoomNumber,
            ClientName = bookingDTO.ClientName
        };

        _context.Bookings.Add(booking);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetHotelBooking", new { id = booking.Id }, booking);
    }

    // Get
    [HttpGet("{id}")]
    public async Task<ActionResult<HotelBooking>> GetHotelBooking(int id)
    {
        if (_context.Bookings == null)
        {
            return NotFound();
        }

        var result = await _context.Bookings.FindAsync(id);

        if (result == null)
            return NotFound();

        return result;
    }

    // Put
    [HttpPut("{id}")]
    public async Task<IActionResult> PutHotelBooking(int id, HotelBooking booking)
    {
        if (id != booking.Id)
        {
            return BadRequest("Ids do not match");
        }

        if (!HotelBookingExists(id))
            return BadRequest("Hotel Booking ID not found");

        var updateHotelBooking = await _context.Bookings.FirstOrDefaultAsync(h => h.Id == booking.Id);

        _context.Entry(updateHotelBooking).State = EntityState.Modified;

        updateHotelBooking.RoomNumber = booking.RoomNumber;
        updateHotelBooking.ClientName = booking.ClientName;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!HotelBookingExists(id))
            {
                return NotFound();
            } else
            {
                throw;
            }
        }
        return NoContent();
    }

    // Delete
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteHotelBooking(int id)
    {
        if (_context.Bookings == null)
        {
            return NotFound();
        }
        var result = await _context.Bookings.FindAsync(id);
        if (result == null)
            return NotFound();

        _context.Bookings.Remove(result);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    // Get all
    [HttpGet]
    public async Task<ActionResult<IEnumerable<HotelBooking>>> GetAllHotelBookings()
    {
        if (_context.Bookings == null)
        {
            return NotFound();
        }
        var result = await _context.Bookings.ToListAsync();
        return result;
    }

    private bool HotelBookingExists(int id)
    {
        return (_context.Bookings?.Any(e => e.Id == id)).GetValueOrDefault();
    }
}
