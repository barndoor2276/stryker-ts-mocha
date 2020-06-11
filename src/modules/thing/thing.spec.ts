import 'mocha';
import * as chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-as-promised'));
import sinon from 'sinon';

import { Thing } from './thing';

describe('Thing', () => {

    let thing: Thing;

    before(() => {

    });

    beforeEach(() => {
        thing = new Thing();
    });

    describe('doThingA()', () => {
        it('returns default', () => {
            expect(thing.doThingA('aaaa', 'bbbb')).to.equal(16);
        });
        it('returns min value', () => {
            expect(thing.doThingA('', '')).to.equal(0);
        });
        it('returns max value', () => {
            expect(thing.doThingA('aaaaaaaaa', 'bbbbbbbbb')).to.equal(32);
        });
    });

});