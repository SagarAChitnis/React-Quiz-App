/*
Checks if the object is an undefined, null or empty value and returns a boolean
*/

const isEmptyOrUndefined = value => value == null || (typeof value === 'object' && Object.keys(value).length === 0) || value === undefined;

export default isEmptyOrUndefined;
