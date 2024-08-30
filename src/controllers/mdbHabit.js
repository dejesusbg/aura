import uniqueId from "../lib/uniqueId";

import Habit from "../models/Habit";

class HabitController {
  static async createHabit(db, name, description, points, frequency) {
    const habit = new Habit(uniqueId(), name, description, points, frequency);
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
