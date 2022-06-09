/**
 * 
 * @export
 * @interface ISimpleCrudItem
 */
export interface ISimpleCrudItem {
    /**
     * 
     * @type {number}
     * @memberof ISimpleCrudItem
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof ISimpleCrudItem
     */
    surname: string;
    /**
     * 
     * @type {string}
     * @memberof ISimpleCrudItem
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ISimpleCrudItem
     */
    age: number;
    /**
     * 
     * @type {string}
     * @memberof ISimpleCrudItem
     */
    address: string;
    /**
     * 
     * @type {number}
     * @memberof ISimpleCrudItem
     */
    salary: number;
}

