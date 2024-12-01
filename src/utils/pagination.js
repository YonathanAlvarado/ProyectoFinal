export const getPaginationOptions = (req) => {
  const { 
    limit = 10, 
    page = 1, 
    sort
  } = req.query;

  const options = {
    page: parseInt(page),
    limit: parseInt(limit)
  };

  if (sort) {
    options.sort = { price: sort === 'desc' ? -1 : 1 };
  }

  return options;
};

export const createPaginatedResponse = (result, req, baseUrl) => {
  const { limit } = req.query;
  
  return {
    status: 'success',
    payload: result.docs,
    totalPages: result.totalPages,
    prevPage: result.prevPage,
    nextPage: result.nextPage,
    page: result.page,
    hasPrevPage: result.hasPrevPage,
    hasNextPage: result.hasNextPage,
    prevLink: result.hasPrevPage ? `${baseUrl}?page=${result.prevPage}&limit=${limit}` : null,
    nextLink: result.hasNextPage ? `${baseUrl}?page=${result.nextPage}&limit=${limit}` : null
  };
};