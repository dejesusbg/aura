Date.prototype.getWeekNumber = function () {
  const firstDayOfYear = new Date(this.getFullYear(), 0, 1);
  const pastDaysOfYear = (this - firstDayOfYear) / 86400000;

  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

function parseFrequency(habit) {
  const now = new Date();
  const lastUpdated = new Date(habit.updated_at);

  if (habit.frequency === "" || habit.frequency === "once") {
    return habit.created_at.getTime() === lastUpdated.getTime();
  } else {
    let daysOfWeek = habit.frequency.split("");

    try {
      daysOfWeek = daysOfWeek.map(Number);
    } catch (error) {
      return false;
    }

    const currentDay = now.getDay();

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
}

export default parseFrequency;
