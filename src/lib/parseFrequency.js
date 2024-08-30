Date.prototype.getWeekNumber = function () {
  const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
  const pastDaysOfYear = (this - firstDayOfYear) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

function parseFrequency(habit) {
  const now = new Date();
  const lastUpdated = new Date(habit.updated_at);

  if (habit.frequency === "once") {
    console.log(habit.created_at, lastUpdated);
    return habit.created_at.getTime() === lastUpdated.getTime();
  }

  if (habit.frequency === "daily") {
    return now.getDate() !== lastUpdated.getDate() || habit.created_at.getTime() === lastUpdated.getTime();
  }

  if (habit.frequency.startsWith("weekly")) {
    const daysOfWeek = habit.frequency.slice(6).split("").map(Number); // Extract days of the week
    const currentDay = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6

    if (daysOfWeek.length > 0) {
      return (
        daysOfWeek.includes(currentDay) &&
        (now.getWeekNumber() !== lastUpdated.getWeekNumber() || habit.created_at.getTime() === lastUpdated.getTime())
      );
    } else {
      return (
        now.getWeekNumber() !== lastUpdated.getWeekNumber() || habit.created_at.getTime() === lastUpdated.getTime()
      );
    }
  }

  if (habit.frequency === "monthly") {
    return now.getMonth() !== lastUpdated.getMonth() || habit.created_at.getTime() === lastUpdated.getTime();
  }

  return false;
}

export default parseFrequency;
