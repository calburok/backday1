const { cars } = require("../data/cars.js");

const carService = {
  getAll() {
    return cars;
  },
  getById(id) {
    return cars.find((v) => v.id === id);
  },
  createCar(id, name) {
    const [date, entryTime] = new Date().toISOString().split("T");
    const [fronttime, backtime] = entryTime.split(".");
    cars.push({ id, name, date, fronttime });
  },
  deleteCar(id) {
    const index = cars.findIndex((v) => v.id == id);
    cars.splice(index, 1);
    return true;
  },
  update(carData) {
    const existCar = cars.findIndex((v) => v.id === carData.id);
    if (existCar === -1) return false;
    cars[existCar] = { ...carData };
    return true;
  },
};

module.exports = { carService };
