import HabitCompletion from "../models/HabitCompletion";
import Habit from "../models/Habit";

var base62 = require("base62");

class HabitCompletionController {
  static async createCompletion(db, habit_id) {
    const habit = await Habit.getById(db, habit_id);

    const completion = new HabitCompletion(base62.encode(Date.now()), habit_id, new Date(), habit.points);
    await HabitCompletion.save(db, completion);

    // update the streak
    habit.streak += 1;
    habit.updated_at = new Date();
    await Habit.save(db, habit);

    return completion;
  }

  static async getCompletion(db, completion_id) {
    return await HabitCompletion.getById(db, completion_id);
  }

  static async deleteCompletion(db, completion_id) {
    await HabitCompletion.delete(db, completion_id);
  }

  static async getAllCompletions(db) {
    return await HabitCompletion.getAll(db);
  }
}

export default HabitCompletionController;
