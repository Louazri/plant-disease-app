export const toPercent = (value) => {
  if (value == null) {
    return 0;
  }
  const percent = value > 1 ? value : value * 100;
  return Math.max(0, Math.min(100, Math.round(percent)));
};

export const formatDateTime = (dateValue) => {
  if (!dateValue) {
    return "";
  }
  return new Date(dateValue).toLocaleString();
};

