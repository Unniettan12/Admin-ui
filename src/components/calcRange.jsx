const calcRange = (data, rowsPerPage) => {
  const range = [];

  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }

  return range;
};
export default calcRange;
