export default function parseFrequency(habit) {
  const now = new Date();
  const lastUpdated = new Date(habit.updated_at);

  const isUpdatedToday = lastUpdated.toDateString() === now.toDateString();

  if (!habit.frequency || habit.frequency === "once") {
    return habit.created_at.getTime() === lastUpdated.getTime();
  }

  const daysOfWeek = habit.frequency.split("").map(Number);
  const currentDay = now.getDay();

  return daysOfWeek.includes(currentDay) && !isUpdatedToday;
}
