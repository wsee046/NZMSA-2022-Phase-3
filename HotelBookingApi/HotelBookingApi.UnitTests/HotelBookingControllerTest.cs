using NUnit.Framework;
using HotelBookingApi.Domain.Models;
using HotelBookingApi.Domain.DTO;
using HotelBookingApi.Infrastructure.Persistence.Contexts;
using HotelBookingApi.Controllers;
using Moq;
using NSubstitute;
using System.Data.Entity.Infrastructure;
using System.Reflection.Metadata;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SQLitePCL;

namespace HotelBookingApi.UnitTests;

public class HotelBookingControllerTest
{
    private List<HotelBooking> hotelBookings;

    private HotelBooking _hotelBookingToUpdate;

    private HotelBookingController _hotelBookingController;

    [SetUp]
    public void Setup()
    {
        hotelBookings = new List<HotelBooking>
        {
            new HotelBooking
            {
                Id = 1,
                RoomNumber = 100,
                ClientName = "Client 1"

            },
            new HotelBooking
            {
                Id = 2,
                RoomNumber = 101,
                ClientName = "Client 2"
            },
                new HotelBooking
            {
                Id = 3,
                RoomNumber = 102,
                ClientName = "Client 3"
                },
                new HotelBooking
            {
                Id = 4,
                RoomNumber = 103,
                ClientName = "Client 4"
                }
        };
    }

    [Test]
    public void TestGetHotelBooking()
    {
        var options = new DbContextOptionsBuilder<SqlDbContext>().UseInMemoryDatabase("TestGetHotelBooking").Options;

        var context = new SqlDbContext(options);

        context.Bookings.AddRange(hotelBookings);
        context.SaveChanges();

        _hotelBookingController = Substitute.For<HotelBookingController>(context);

        var result = _hotelBookingController.GetHotelBooking(1);
        Assert.That(result.Result.Value.Id, Is.EqualTo(1));
        Assert.That(result.Result.Value.RoomNumber, Is.EqualTo(100));
        Assert.That(result.Result.Value.ClientName, Is.EqualTo("Client 1"));
    }

    [Test]
    public void TestPostHotelBooking()
    {
        var options = new DbContextOptionsBuilder<SqlDbContext>().UseInMemoryDatabase("TestPostHotelBooking").Options;

        var context = new SqlDbContext(options);

        context.Bookings.AddRange(hotelBookings);
        context.SaveChanges();

        _hotelBookingController = Substitute.For<HotelBookingController>(context);

        HotelBookingDTO hotelBookingToPost = new HotelBookingDTO
        {
            RoomNumber = 105,
            ClientName = "Client 5"
        };

        _hotelBookingController.CreateHotelBooking(hotelBookingToPost);

        var result = _hotelBookingController.GetHotelBooking(5);
        Assert.That(result.Result.Value.Id, Is.EqualTo(5));
        Assert.That(result.Result.Value.RoomNumber, Is.EqualTo(105));
        Assert.That(result.Result.Value.ClientName, Is.EqualTo("Client 5"));

    }

    [Test]
    public void TestDeleteHotelBooking1()
    {
        var options = new DbContextOptionsBuilder<SqlDbContext>().UseInMemoryDatabase("TestDeleteHotelBooking1").Options;
        var context = new SqlDbContext(options);

        context.Bookings.AddRange(hotelBookings);
        context.SaveChanges();

        _hotelBookingController = Substitute.For<HotelBookingController>(context);

        _hotelBookingController.DeleteHotelBooking(4);
        
        List<HotelBooking> newHotelBookings = new List<HotelBooking>
        {
            new HotelBooking
            {
                Id = 1,
                RoomNumber = 100,
                ClientName = "Client 1"

            },
            new HotelBooking
            {
                Id = 2,
                RoomNumber = 101,
                ClientName = "Client 2"
            },
                new HotelBooking
            {
                Id = 3,
                RoomNumber = 102,
                ClientName = "Client 3"
                },
        };

        List<HotelBooking> newResult = (List<HotelBooking>)_hotelBookingController.GetAllHotelBookings().Result.Value;
        Assert.That(newResult, Is.EqualTo(newHotelBookings));
    }

    [Test]
    public void TestDeleteHotelBooking2()
    {
        var options = new DbContextOptionsBuilder<SqlDbContext>().UseInMemoryDatabase("TestDeleteHotelBooking2").Options;
        var context = new SqlDbContext(options);

        context.Bookings.AddRange(hotelBookings);
        context.SaveChanges();

        _hotelBookingController = Substitute.For<HotelBookingController>(context);

        _hotelBookingController.DeleteHotelBooking(2);

        List<HotelBooking> newHotelBookings = new List<HotelBooking>
        {
            new HotelBooking
            {
                Id = 1,
                RoomNumber = 100,
                ClientName = "Client 1"

            },
                new HotelBooking
            {
                Id = 3,
                RoomNumber = 102,
                ClientName = "Client 3"
                },
                new HotelBooking
                {
                    Id = 4,
                    RoomNumber = 103,
                    ClientName = "Client 4"
                }
        };

        List<HotelBooking> newResult = (List<HotelBooking>)_hotelBookingController.GetAllHotelBookings().Result.Value;
        Assert.That(newResult, Is.EqualTo(newHotelBookings));
    }

    [Test]
    public void TestGetAllHotelBookings()
    {
        var options = new DbContextOptionsBuilder<SqlDbContext>().UseInMemoryDatabase("TestGetAllHotelBookings").Options;
        var context = new SqlDbContext(options);

        context.Bookings.AddRange(hotelBookings);
        context.SaveChanges();

        _hotelBookingController = Substitute.For<HotelBookingController>(context);

        List<HotelBooking> allHotelBookings = (List<HotelBooking>)_hotelBookingController.GetAllHotelBookings().Result.Value;

        Assert.That(allHotelBookings, Is.EqualTo(hotelBookings));
    }

    [Test]
    public void TestPutHotelBooking()
    {
        var options = new DbContextOptionsBuilder<SqlDbContext>().UseInMemoryDatabase("TestPutHotelBooking").Options;
        var context = new SqlDbContext(options);

        context.Bookings.AddRange(hotelBookings);
        context.SaveChanges();
        _hotelBookingController = Substitute.For<HotelBookingController>(context);

        HotelBooking hotelBookingToPut = new HotelBooking
        {
            Id = 3,
            RoomNumber = 105,
            ClientName = "Michael Jordan"
        };

       _hotelBookingController.PutHotelBooking(3, hotelBookingToPut);
        
        var result2 = _hotelBookingController.GetHotelBooking(3);

        HotelBooking updatedBooking = result2.Result.Value;
        Assert.That(updatedBooking, Is.EqualTo(hotelBookingToPut));
        
    }
}