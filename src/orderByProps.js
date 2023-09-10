function orderByProps(character, sortOrder) {
  const copyCharacter = { ...character };
  const firstArray = [];
  sortOrder.forEach((el) => {
    for (const prop in copyCharacter) {
      if (Object.prototype.hasOwnProperty.call(copyCharacter, prop)) {
        if (prop === el) {
          firstArray.push({ key: prop, value: copyCharacter[prop] });
          delete copyCharacter[prop];
        }
      }
    }
  });

  const secondArray = [];
  for (const prop in copyCharacter) {
    if (Object.prototype.hasOwnProperty.call(copyCharacter, prop)) {
      secondArray.push({ key: prop, value: copyCharacter[prop] });
    }
  }
  secondArray.sort((a, b) => a.key.localeCompare(b.key));
  return firstArray.concat(secondArray);
}

module.exports = {
  orderByProps,
};
