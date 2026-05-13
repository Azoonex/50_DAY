type Activity = {
  userId: string;
  points: number;
};

const activities: Activity[] = [
  { userId: "u1", points: 10 },
  { userId: "u2", points: 20 },
  { userId: "u1", points: 15 },
  { userId: "u3", points: 5 },
  { userId: "u2", points: 10 },
  { userId: "u3", points: 30 },
];

function getTopUsers(activities: Activity[], topN: number) {
  const userTotals: Record<string, number> = {};
  for (const activity of activities) {
    if (userTotals[activity.userId]) {
      userTotals[activity.userId] += activity.points;
    } else {
      userTotals[activity.userId] = activity.points;
    }
  }

  const usersArray = Object.entries(userTotals).map(([userId, total]) => {
    return { userId, total };
  });

  usersArray.sort((a, b) => b.total - a.total);

  return usersArray.slice(0,topN)
}
console.log(getTopUsers(activities, 1));

