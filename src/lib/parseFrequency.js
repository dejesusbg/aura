export default function parseFrequency(habit) {
  const now = new Date();
  const lastUpdated = new Date(habit.updated_at);
  const created = new Date(habit.created_at);

  if (!habit.frequency) {
    return habit.streak == 0;
  }

  const isUpdatedToday = lastUpdated.toDateString() === now.toDateString();
  const isCreatedToday = lastUpdated.toString() === created.toString();

  const daysOfWeek = habit.frequency.split("").map(Number);
  const currentDay = now.getDay();

  return daysOfWeek.includes(currentDay) && (!isUpdatedToday || isCreatedToday);
}
