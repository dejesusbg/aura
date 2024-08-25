import HabitController from "../controllers/mdbHabit";
import HabitCompletionController from "../controllers/mdbHabitCompletion";
import RewardController from "../controllers/mdbReward";
import RedemptionController from "../controllers/mdbRedemption";

class MainModel {
  constructor() {
    this.data = null;
  }

  getData(db) {
    this.data = {
      habits: HabitController.getAllHabits(db).then(),
      rewards: RewardController.getAllRewards(db).then(),
      completions: HabitCompletionController.getAllCompletions(db).then(),
      redemptions: RedemptionController.getAllRedemptions(db).then(),
    };

    return this.data;
  }
}

export default MainModel;
