import 'mocha';
import * as chai from 'chai';
const expect = chai.expect;
chai.use(require('chai-as-promised'));

import { Thing } from './thing';

describe('Thing', () => {

    let thing: Thing;

    before(() => {

    });

    beforeEach(() => {
        thing = new Thing();
    });

    describe('constructor()', () => {
        it('sets default values', () => {
            expect(thing['varA']).to.equal(1);
            expect(thing['varB']).to.equal(2);
            expect(thing['varC']).to.equal('aa');
        });
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