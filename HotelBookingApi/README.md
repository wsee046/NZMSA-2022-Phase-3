# Back-end Phase 3 - Hotel Booking Api

This is an API that allows users to create hotel bookings. Users can input a room number and client name. They can create, update, delete, retreive a certain booking, and retreive all bookigns.

## Advanced Features List

- [x] Onion structure - clear separation of DB access layer and API layer
- [x] Usage of EF Core
- [ ] Usage of caching to speed up calls
- [ ] End to end testing using Postman or JMeter
- [x] Comprehensive unit testing
- [ ] OAuth2 with PKCE login w/ at least ONE third party provider
- [ ] Implementation of websockets using SignalR
- [x] Deployment using a CI/CD pipeline to the cloud
- [x] Usage of Fluent Validation / Fluent Assertions
- [ ] Demonstration of complex BE logic

## Onion structure - clear separation of DB access layer and API layer
The API has a onion structure. The `Domain` folder is the domain layer and defines the models - specifically 
for a `HotelBooking` object. The `Infrastructure` folder is the repository layer and defines the database context.
The `Controllers` folder is the service layer and manages the CRUD operations. The UI layer is handled by SwaggerUI.

## Usage of EF Core
The API uses EF Core to interact with the database.

## Deployment using a CI/CD pipeline to the cloud
The project was deployed using a CI/CD pipeline to Azure Cloud using GitHub actions.

## Comprehensive unit testing
NUnit, NSubstitute and Fluent Assertions are used to test the CRUD operations. It tests:
- Creating a hotel booking
- Editing a hotel booking
- Deleting a hotel booking
- Retrieving a hotel booking by ID
- Retrieving all existing hotel bookings

## Usage of Fluent Validation / Fluent Assertion
Fluent Assertion was used to perform unit tests on the CRUD operations.
