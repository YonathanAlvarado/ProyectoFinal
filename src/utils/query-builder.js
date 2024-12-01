export const buildProductQuery = ({ category, available, query }) => {
  const queryObj = {};

  if (category) {
    queryObj.category = category;
  }

  if (available !== undefined) {
    queryObj.available = available === 'true';
  }

  if (query) {
    queryObj.$or = [
      { title: { $regex: query, $options: 'i' } },
      { description: { $regex: query, $options: 'i' } }
    ];
  }

  return queryObj;
};