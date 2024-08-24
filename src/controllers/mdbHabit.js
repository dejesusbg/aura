import Habit from "../models/Habit";

class HabitController {
  static async createHabit(db, name, description, frequency, points) {
    const habit = new Habit(Date.now(), name, description, frequency, points);
    await Habit.save(db, habit);

    return habit;
  }

  static async getHabit(db, habit_id) {
    return await Habit.getById(db, habit_id);
  }

  static async updateHabit(db, habit_id, updatedData) {
    const habit = await Habit.getById(db, habit_id);

    if (habit) {
      Object.assign(habit, updatedData);
      habit.updated_at = new Date();
      await Habit.save(db, habit);
      return habit;
    }
    
    throw new Error("Habit not found");
  }

  static async deleteHabit(db, habit_id) {
    await Habit.delete(db, habit_id);
  }

  static async getAllHabits(db) {
    return await Habit.getAll(db);
  }
}

export default HabitController;
