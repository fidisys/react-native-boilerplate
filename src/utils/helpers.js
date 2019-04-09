
export const getPageFromLink = (link) => {
  const pageNumber = /page=(\d+)/.exec(link);
  return pageNumber ? pageNumber[1] : null;
};
