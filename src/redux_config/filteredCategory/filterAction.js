import FILTER_CATEGORIES from "./filterType";

const filterData = (data) => {
  return {
    type: FILTER_CATEGORIES,
    payload: data ? data : [],
  };
};

export default filterData;
