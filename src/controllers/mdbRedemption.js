import Redemption from "../models/Redemption";

class RedemptionController {
  static async createRedemption(db, reward_id, points_spent) {
    const redemption = new Redemption(Date.now(), reward_id, new Date(), points_spent);
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
