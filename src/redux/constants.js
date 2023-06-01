export const asyncApiState = {
  initial: (initialData = null) => ({
    status: 'initial',
    data: initialData,
    error: null,
  }),
  request: (initialData = null) => ({
    status: 'pending',
    data: initialData,
    error: null,
  }),
  success: (payload) => ({
    status: 'success',
    data: payload.data,
    error: payload.error,
  }),
  error: (error) => ({
    status: 'error',
    data: error,
    error: true,
  }),
};
