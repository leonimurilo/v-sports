const createRequestTypes = base => ({
  request: `REQUEST_${base}`,
  success: `SUCCESS_${base}`,
  failure: `FAILURE_${base}`,
  reset: `RESET_${base}`
});

export const GET_USERS = createRequestTypes("GET_USERS");
export const REMOVE_USER = "REMOVE_USER";

