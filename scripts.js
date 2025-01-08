function froyoOrders() {
  const froyoOrderPrompt = prompt(
    " Please enter the froyo flavors you would like to order seperated by commas"
  );

  let flavors = froyoOrderPrompt.split(",");
  console.log(flavors);

  let flavorCount = {};

  flavors.forEach((flavors) => {
    if (flavorCount[flavors]) {
      flavorCount[flavors]++;
    } else {
      flavorCount[flavors] = 1;
    }
  });
  console.table(flavorCount);
}
froyoOrders();
