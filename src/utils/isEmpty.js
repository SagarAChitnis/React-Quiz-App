/*
Checks if the object is an undefined, null or empty value and returns a boolean
*/

const isEmpty = value => value === undefined || value == null || (typeof value === 'object' && Object.keys(value).length === 0) || (typeof value === 'string' && value.trim().length === 0);

export default isEmpty;
