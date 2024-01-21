import getDistance from 'geolib/es/getDistance';

import customerRepository from '../repository/customerRepository';

// Application business logic
class CustomerService {
  async save(name, email, phone, lat_x, long_y) {
    const existingCustomer = await customerRepository.findByEmail(email);

    // check if customer exists
    if (existingCustomer) {
      throw new Error('E-mail already exists');
    }

    await customerRepository.save(name, email, phone, lat_x, long_y);
  }

  async findAll() {
    return await customerRepository.findAll();
  }

  async findSortOrder() {
    try {
      const customers = await customerRepository.findAll();

      const startingLocation = { latitude: 0, longitude: 0 };

      // Adds the company's home location
      const customersWithLocation = customers.map((customer) => {
        const latitude = customer.lat_x;
        const longitude = customer.long_y;

        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

        if (!isNaN(latitude) && !isNaN(longitude)) {
          return {
            ...customer,
            distance: getDistance(startingLocation, {
              latitude,
              longitude,
            }),
          };
        } else {
          return {
            ...customer,
            distance: NaN,
          };
        }
      });

      // Sort customers from nearest to farthest
      const sortedCustomers = customersWithLocation.sort(
        (a, b) => a.distance - b.distance,
      );

      return sortedCustomers;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CustomerService();
