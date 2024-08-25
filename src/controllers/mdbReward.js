import Reward from "../models/Reward";

var base62 = require("base62");

class RewardController {
  static async createReward(db, name, description, points_required) {
    const reward = new Reward(base62.encode(Date.now()), name, description, points_required);
    await Reward.save(db, reward);

    return reward;
  }

  static async getReward(db, reward_id) {
    return await Reward.getById(db, reward_id);
  }

  static async updateReward(db, reward_id, updatedData) {
    const reward = await Reward.getById(db, reward_id);

    if (reward) {
      Object.assign(reward, updatedData);
      reward.updated_at = new Date();
      await Reward.save(db, reward);
      return reward;
    }
    
    throw new Error("Reward not found");
  }

  static async deleteReward(db, reward_id) {
    await Reward.delete(db, reward_id);
  }

  static async getAllRewards(db) {
    return await Reward.getAll(db);
  }
}

export default RewardController;
