import uniqueId from "../lib/uniqueId";

import Completion from "../models/Completion";
import Habit from "../models/Habit";

class CompletionController {
  static async createCompletion(db, habit_id) {
    const habit = await Habit.getById(db, habit_id);

    const completion = new Completion(uniqueId(), habit_id, new Date(), habit.points);
    await Completion.save(db, completion);

    // update the streak
    habit.streak += 1;
    habit.updated_at = new Date();
    await Habit.save(db, habit);

    return completion;
  }

  static async getCompletion(db, completion_id) {
    return await Completion.getById(db, completion_id);
  }

  static async deleteCompletion(db, completion_id) {
    await Completion.delete(db, completion_id);
  }

  static async getAllCompletions(db) {
    return await Completion.getAll(db);
  }
}

export default CompletionController;
