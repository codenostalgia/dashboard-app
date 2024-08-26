import FILTER_CATEGORIES from "./filterType";

const filterData = (data) => {
  return {
    type: FILTER_CATEGORIES,
    payload: data
  };
};

export default filterData;
