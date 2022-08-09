import { strict as assert } from "assert";
import { getUniqueFieldsValueFromObject } from '../solution.js';

export const miltyplyNumberValue = () => {
    const testObject = {
        a: 5,
        b: 'b',
        c: {
            a: 5,
            b: 'b',
            c: {
                b: 'c'
            },
            d: {
                a: 6,
                b: [
                    {
                        a: 7,
                        b: 'g'
                    },
                    {
                        a: 8,
                        b: [
                            {
                                a: 8,
                                b: 'end'
                            }
                        ]
                    }
                ]
            }
        }
    }
    const result = getUniqueFieldsValueFromObject(testObject, 'a');

    assert.equal(`[5,6,7,8]`, JSON.stringify(result))
}
