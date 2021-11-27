const doIt = () => "meow";
const doItYes = (importit = false) => {
  if (importit) {
    import("./liba").then((module) => {
      return doIt() + module.sayYes();
    });
  }
};

export { doIt, doItYes };
