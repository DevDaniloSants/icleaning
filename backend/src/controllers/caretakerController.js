import caretakeService from '../services/CaretakeService';

// Application entry pointer
class CaretakerController {
  async register(req, res) {
    const { name, email, phone } = req.body;
    await caretakeService.save(name, email, phone);
    res.status(201).json({
      status: 201,
      message: 'Caretaker create',
      creationDate: new Date(),
    });
  }

  async index(req, res) {
    const { id } = req.params;
    try {
      const caretaker = await caretakeService.findById(id);

      res.status(200).json(caretaker);
    } catch (error) {
      console.log(error);
      if (error.message === 'NotFound') {
        res.status(404).json({ status: 404, message: error.message });
      }
      res.status(500).json({ status: 500, message: error.message });
    }
  }

  async show(req, res) {
    const caretaker = await caretakeService.findAll();
    console.log(caretaker);
    res.status(200).json(caretaker);
  }
}

export default new CaretakerController();
