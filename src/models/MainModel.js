import HabitController from "../controllers/mdbHabit";
import HabitCompletionController from "../controllers/mdbHabitCompletion";
import RewardController from "../controllers/mdbReward";
import RedemptionController from "../controllers/mdbRedemption";

class MainModel {
  constructor() {
    this.data = null;
  }

  getData(db) {
    // HabitController.createHabit(db, "Habit 1", "Habit 1 description", 1, 10);

    this.data = {
      habits: HabitController.getAllHabits(db).then(),
    };

    return this.data;
  }
}

export default MainModel;
