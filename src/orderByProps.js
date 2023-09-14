function orderByProps(character, sortOrder) {
  const copyCharacter = { ...character };
  const firstArray = [];
  sortOrder.forEach((el) => {
    firstArray.push({ key: el, value: copyCharacter[el] });
    delete copyCharacter[el];
  });

  const secondArray = [];
  /* eslint-disable-next-line */
  for (const prop in copyCharacter) {
    secondArray.push({ key: prop, value: copyCharacter[prop] });
  }
  secondArray.sort((a, b) => a.key.localeCompare(b.key));
  return firstArray.concat(secondArray);
}

module.exports = {
  orderByProps,
};
