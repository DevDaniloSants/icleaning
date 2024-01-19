// helpers
import { execQuery, runMigration } from '../helpers/sql.helper';

// Logic to persist and retrieve information from database
class CaretakerRepository {
  async init() {
    await runMigration();
  }

  async save(name, email, phone) {
    await execQuery('save_caretaker.sql', name, email, phone);
  }

  async findAll() {
    const { rows } = await execQuery('find_all_caretaker.sql');

    return rows;
  }

  async findById(id) {
    const { rows } = await execQuery('find_by_id_caretaker.sql', [id]);

    let result;

    if (rows.lenght !== 0) {
      result = rows[0];
    }
    console.log(result);

    return result;
  }
}

export default new CaretakerRepository();
