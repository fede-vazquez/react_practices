export function search(valueToFind, listToSearch) {
  const resultList = listToSearch.filter((item) => {
    return item.toLowerCase().includes(valueToFind.toLowerCase());
  });

  return resultList;
}
