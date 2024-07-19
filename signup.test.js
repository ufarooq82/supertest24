import assert from "assert";
import { type } from "os";
import request from "supertest";

describe('Wordle', () => {

    describe('signup', () => {

        beforeAll(async () => {
        });

        it('signup successfull', async () => {
            await request ("http://localhost:9999/wordle/api")
            .post ("/auth/register")
            .send ({"username":"umer supertest02","email":"umersupertest01@supertest.co.uk","password":"poland82!!P","country":"GB","receiveUpdates":false,"role":"ROLE_PLAYER"})
            .expect(201)
            //assert.equal(true, false)
        });

        it('login successfull', async () => {
            const response=await request ("http://localhost:9999/wordle/api") 
            .post ("/auth/login")
            .send ({username: "umer supertest01", password: "poland82!!P"}
            )
            .expect(200)
            //assert.equal(true, false)
            assert.equal (true,response.body.hasOwnProperty ('accessToken'))
        });

        it.only('newgame endpiont', async () => {

            const response=await request ("http://localhost:9999/wordle/api") 
            .post ("/auth/login")
            .send ({username: "umer supertest01", password: "poland82!!P"}
            )
            .expect(200)
            //assert.equal(true, false)
            //assert.equal (true,response.body.hasOwnProperty ('accessToken'))
            await request ("http://localhost:9999/wordle/api") //http://localhost:9999/wordle/api/game
            .post ("/game")
            .set('Authorization', 'Bearer ' + response.body.accessToken)
            .expect(200)


        });



    });

});