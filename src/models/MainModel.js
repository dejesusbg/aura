import HabitController from "../controllers/mdbHabit";
import CompletionController from "../controllers/mdbCompletion";

class MainModel {
  constructor() {
    this.data = null;
  }

  getData(db) {
    this.data = {
      habits: HabitController.getAllHabits(db).then(),
      completions: CompletionController.getAllCompletions(db).then(),
    };

    return this.data;
  }
}

export default MainModel;
