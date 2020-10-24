function decorate(component) {
  component.greetings = function () {
    console.log("yo world!");
  };

  return component;
}
