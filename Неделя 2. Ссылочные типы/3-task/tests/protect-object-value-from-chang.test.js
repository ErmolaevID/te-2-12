import { strict as assert } from "assert";
import { protectObjectValueFromChange } from '../solution.js';

export const tryToRewriteString = () => {
    const initValue = 'string';

    const testObject = {
        a: 5,
        b: initValue,
        c: 10,
        d: 'asd'
    }
    protectObjectValueFromChange(testObject, 'b');
    testObject.b = 'changedValue';

    assert.equal(testObject.b, initValue);
}

export const tryToRewriteObject = () => {
    const initValue = {
        ha: '55'
    };

    const testObject = {
        a: 5,
        b: initValue,
        c: 10,
        d: 'asd',
    }
    protectObjectValueFromChange(testObject, 'b');
    testObject.b = 'changedValue';

    assert.equal(testObject.b, initValue);
}
