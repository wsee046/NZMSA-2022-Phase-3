namespace HotelBookingApi.Domain.Models
{
    public class HotelBooking
    {
        public int Id { get; set; }
        public int RoomNumber { get; set; }
        public string? ClientName { get; set; }

        public override bool Equals(object? obj)
        {
            if (!obj.GetType().IsAssignableTo(this.GetType()))
                return false;

            var HotelBooking = obj as HotelBooking;
            if (HotelBooking == null)
                return false;
            
            if (this.Id.Equals(HotelBooking.Id) && this.RoomNumber.Equals(HotelBooking.RoomNumber) && this.ClientName.Equals(HotelBooking.ClientName))
                return true;
            else
                return false;
        }

        public override int GetHashCode()
        {
            return Id;
        }

    }

}
