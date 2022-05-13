function sleep(ms) {
  if (ms === 0) return;
  return new Promise((resolve) => setTimeout(resolve, ms));
}
module.exports = sleep;
