import HabitCompletion from "../models/HabitCompletion";
import Habit from "../models/Habit";

class HabitCompletionController {
  static async createCompletion(db, habit_id, points_earned) {
    const completion = new HabitCompletion(Date.now(), habit_id, new Date(), points_earned);
    await HabitCompletion.save(db, completion);

    // update the streak
    const habit = await Habit.getById(db, habit_id);
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
