export default defineTask({
  meta: {
    name: "now",
    description: "Simple task to check the current time",
  },
  run({ payload, context }) {
    console.log("Current time:", new Date().toISOString());
    return { result: "Success" };
  },
});