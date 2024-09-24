import HabitController from "../controllers/mdbHabit";

class MainModel {
  constructor() {
    this.data = null;
  }

  getData(db) {
    this.data = {
      controllers: {
        createHabit: HabitController.createHabit.bind(null, db),
        getHabit: HabitController.getHabit.bind(null, db),
        updateStreak: HabitController.updateStreak.bind(null, db),
        updateHabit: HabitController.updateHabit.bind(null, db),
        getAllHabits: HabitController.getAllHabits.bind(null, db),
      },
    };

    return this.data;
  }
}

export default MainModel;
