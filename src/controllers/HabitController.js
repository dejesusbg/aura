import uid from "lib/uid";

import Habit from "models/Habit";

class HabitController {
  static async createHabit(db, name, description, points, frequency) {
    const habit = new Habit(uid(), name, description, points, frequency);
    await Habit.save(db, habit);
    return habit;
  }

  static async getHabit(db, habitId) {
    return await Habit.getById(db, habitId);
  }

  static async updateStreak(db, habitId) {
    const habit = await Habit.getById(db, habitId);

    if (habit) {
      habit.streak += 1;
      habit.updated_at = new Date();
      await Habit.save(db, habit);
      return habit;
    }

    throw new Error("Habit not found");
  }

  static async updateHabit(db, habitId, updatedData) {
    const habit = await Habit.getById(db, habitId);

    if (habit) {
      Object.assign(habit, updatedData);
      await Habit.save(db, habit);
      return habit;
    }

    throw new Error("Habit not found");
  }

  static async deleteHabit(db, habitId) {
    await Habit.delete(db, habitId);
  }

  static async getAllHabits(db) {
    return await Habit.getAll(db);
  }
}

export default HabitController;
