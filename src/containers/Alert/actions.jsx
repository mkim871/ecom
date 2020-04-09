import alertConstants from "./constants";

export const close = () => ({
  type: alertConstants.CLOSE,
});

export const show = (title, message, severity) => ({
  type: alertConstants.OPEN,
  title,
  message,
  severity,
});
