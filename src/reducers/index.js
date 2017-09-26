export default (state = [], action) => {
  switch (action.type) {
    case "SHOW_JOKE":
      const { joke } = action;
      return [
        joke: joke
      ];
    default:
      return state;
  }
}
