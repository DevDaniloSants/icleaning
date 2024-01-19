// helpers
import caretakerRepository from '../repository/CaretakerRepository';

// Application business logic
class CaretakerService {
  async save(name, email, phone) {
    await caretakerRepository.save(name, email, phone);
  }

  async findAll() {
    return await caretakerRepository.findAll();
  }

  async findById(id) {
    const caretaker = await caretakerRepository.findById(id);

    if (!caretaker) {
      throw new Error('NotFound');
    }

    return caretaker;
  }
}

export default new CaretakerService();
