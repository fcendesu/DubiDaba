export const getMoonPhase = (dateStr) => {
    const knownNewMoon = new Date("2000-01-06");
    const inputDate = new Date(dateStr);
    const msPerDay = 24 * 60 * 60 * 1000;
  
    const daysSinceNewMoon = (inputDate - knownNewMoon) / msPerDay;
    const lunarAge = daysSinceNewMoon % 29.53058867;
  
    if (lunarAge < 1.84566) return "New Moon";
    if (lunarAge < 5.53699) return "Waxing Crescent";
    if (lunarAge < 9.22831) return "First Quarter";
    if (lunarAge < 12.91963) return "Waxing Gibbous";
    if (lunarAge < 16.61096) return "Full Moon";
    if (lunarAge < 20.30228) return "Waning Gibbous";
    if (lunarAge < 23.99361) return "Third Quarter";
    if (lunarAge < 27.68493) return "Waning Crescent";
  
    return "New Moon";
  };
  