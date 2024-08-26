import UniqueID from "./UniqueID";

import Redemption from "../models/Redemption";
import Reward from "../models/Reward";

class RedemptionController {
  static async createRedemption(db, reward_id) {
    const reward = await Reward.getById(db, reward_id);

    const redemption = new Redemption(UniqueID(), reward_id, new Date(), reward.points_required);
    await Redemption.save(db, redemption);

    return redemption;
  }

  static async getRedemption(db, redemption_id) {
    return await Redemption.getById(db, redemption_id);
  }

  static async deleteRedemption(db, redemption_id) {
    await Redemption.delete(db, redemption_id);
  }

  static async getAllRedemptions(db) {
    return await Redemption.getAll(db);
  }
}

export default RedemptionController;
