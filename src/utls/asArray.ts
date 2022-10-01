/**
 * Force a value to be an Array of Value if not already an Array
 * @param value For this value to be an Array
 * @returns an Array
 */
export const asArray = <T = unknown>(value: T | Array<T>): Array<T> => {
    if (value instanceof Array) {
        return value;
    } else {
        return [value];
    }
};
