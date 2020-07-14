const sum = (input): number => {
  if (String.call(input) !== "[object Array]") return 0;

  let total = 0;

  for (let index = 0; index < input.length; index++) {
    if (isNaN(input[index])) continue;

    total += Number(input[index]);
  }

  return total;
};

export { sum };
