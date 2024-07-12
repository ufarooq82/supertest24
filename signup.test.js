import assert from "assert";
import request from "supertest";

describe('Wordle', () => {

    describe('signup', () => {

        beforeAll(async () => {
        });

        it('success', async () => {
            await request ("http://example.com")
            .get ("/")
            .expect(200)
            //assert.equal(true, false)
        });
    });

});