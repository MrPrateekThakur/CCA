import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";

import Player from "../Modal/Player.modal.js";
import SubCategory from "../Modal/SubCategory.modal.js";
import Category from "../Modal/Category.modal.js";
import Team from "../Modal/Team.modal.js";
import Request from "../Modal/Request.modal.js";
import { Op } from "sequelize";

export const signUp = async (request, response) => {

    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ Error: errors.array() });

    Player.create(request.body)
        .then(result => {
            return response.status(200).json({ Message: "SignUp successfully", data: result });

        }).catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error...' });
        });

    // try {

    //     for (let playerObj of request.body)
    //         await Player.create(playerObj)

    //     return response.status(200).json({ Message: "SignUp successfully" });
    // } catch (error) {
    //     console.log(error);
    //     return response.status(500).json({ Error: 'Internal server error...' });
    // }

} // ✔️

export const signIn = async (request, response, next) => {
    try {
        const data = await Player.findOne({ where: { email: request.body.email }, raw: true });

        if (!data)
            return response.status(201).json({ Message: 'Invalid email' });

        if (Player.checkPassword(request.body.password, data.password)) {
            const token = jwt.sign(request.body, 'userToken');
            return response.status(200).json({ Message: 'SignIn successfully...', data, token });
        }

        return response.status(201).json({ Message: 'Invalid password' });
    } catch (error) {
        return response.status(500).json({ Error: 'Internal server error' });
    }
};// ✔️

export const viewAllUser = async (request, response, next) => {
    Player.findAll({
        include: [{
            model: SubCategory,
            include: [{
                model: Category
            }]
        }]
    })
        .then(result => {
            if (result)
                return response.status(200).json({ Message: 'All users', data: result });
            return response.status(201).json({ Message: 'No Data Found' });
        })
        .catch(error => {
            console.log("Internal server error", error);
        })
}; // ✔️

export const viewUser = async (request, response, next) => {
    Player.findOne({ where: { email: request.body.email } })
        .then(Data => {
            if (Data)
                return response.status(200).json({ Message: 'User details', Data });
            return response.status(201).json({ Message: 'No user found' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error' });
        })
}; // ✔️

export const removeUser = async (request, response, next) => {
    Player.destroy({ where: { email: request.body.email } })
        .then(result => {
            console.log(result);
            if (result)
                return response.status(200).json({ Message: 'User removed successfully' });
            return response.status(201).json({ Message: 'Invalid email' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}; // ✔️

export const update = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ Error: errors.array() });

    Player.update(request.body, { where: { user_id } })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'Data updated successfully....', data: result });
        })
        .catch(err => {
            console.log(err);
            return response.send().json({ Error: 'Internal server error' })
        })
}; // ✔️

export const updateImage = async (request, response, next) => {
    try {
        let array = request.body;
        for (let key = 0; key < array.length; key++) {
            await Player.update({ image: array[key].image }, { where: { player_id: (key + 9) } })
            console.log(array[key].image, key);
        }

        return response.status(200).json({ Message: 'Data updated successfully....' });
    } catch (err) {
        console.log(err);
        return response.status(500).json({ Error: 'Internal server error' })
    }
} // ✔️

export const requestToPlayer = async (request, response, next) => {
    const { player_id, captain_Id } = request.body;

    console.log('request.body', request.body);
    try {
        let isCaptain = await Team.findOne({ where: { captain_Id } });
        if (!isCaptain)
            return response.status(500).json({ Message: 'You are not a captain to send request to a player' });

        const player = await Player.findByPk(player_id);

        console.log(player.is_active);
        if (!player.is_active)
            return response.status(400).json({ Error: "Player is not active" });

        let result = Request.create(request.body)
        return response.status(200).json({ Message: "Request For Join", result: result });

    } catch (error) {
        console.error(error);
        return response.status(500).json({ Error: "Internal Server Error" });
    }
};// ✔️

export const searchAllPlayer = async (request, response, next) => {
    try {
        let { searchBy, data } = request.body;
        // let result = await Player.findAll({ where: { [searchBy]: data } });

        let result = await Player.findAll({
            where: { [searchBy]: data },
            include: [{
                model: SubCategory,
                include: [{
                    model: Category,
                }]
            }]
        })

        // let result = await Player.findAll({ where: { subCategory_id: data } });
        console.log(result);
        return response.status(200).json({ Message: "Player data by searching", data: result });
    } catch (error) {

        console.log(error);
        return response.status(500).json({ Error: "Internal server error...." });
    }
}

export const searchByCategory = (request, response, next) => {
    let role = request.body.searchedList;

    Category.findAll({
        where: { role: { [Op.like]: `${role}%` } },
        include: [{
            model: SubCategory,
            include: [{
                model: Player,
            }]
        }]
    })
        .then(result => {
            return response.status(200).json({ Message: "Player data by searching", data: result });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: "Internal server error...." });
        });
}

// {"resource":"players","id":46,"country_id":153732,"firstname":"Virat","lastname":"Kohli","fullname":"Virat Kohli","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/14\/46.png","dateofbirth":"1988-11-05","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-fast-medium","position":{"resource":"positions","id":1,"name":"Batsman"},"updated_at":"2023-03-22T10:36:41.000000Z"},{"resource":"players","id":47,"country_id":153732,"firstname":"Lokesh","lastname":"Rahul","fullname":"Lokesh Rahul","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/15\/47.png","dateofbirth":"1992-04-18","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":null,"position":{"resource":"positions","id":3,"name":"Wicketkeeper"},"updated_at":"2020-04-04T05:07:39.000000Z"},{"resource":"players","id":48,"country_id":153732,"firstname":"Prithvi","lastname":"Shaw","fullname":"Prithvi Shaw","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/16\/48.png","dateofbirth":"1999-11-09","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-offbreak","position":{"resource":"positions","id":1,"name":"Batsman"},"updated_at":"2020-04-06T06:29:32.000000Z"},{"resource":"players","id":49,"country_id":153732,"firstname":"Mayank","lastname":"Agarwal","fullname":"Mayank Agarwal","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/17\/49.png","dateofbirth":"1991-02-16","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":null,"position":{"resource":"positions","id":1,"name":"Batsman"},"updated_at":"2020-03-31T11:40:37.000000Z"},{"resource":"players","id":50,"country_id":153732,"firstname":"Cheteshwar","lastname":"Pujara","fullname":"Cheteshwar Pujara","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/18\/50.png","dateofbirth":"1988-01-25","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"legbreak","position":{"resource":"positions","id":1,"name":"Batsman"},"updated_at":"2020-03-31T12:22:31.000000Z"},{"resource":"players","id":51,"country_id":153732,"firstname":"Ajinkya","lastname":"Rahane","fullname":"Ajinkya Rahane","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/19\/51.png","dateofbirth":"1988-06-06","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-fast-medium","position":{"resource":"positions","id":1,"name":"Batsman"},"updated_at":"2023-03-23T15:21:44.000000Z"},{"resource":"players","id":52,"country_id":153732,"firstname":"Hanuma","lastname":"Vihari","fullname":"Hanuma Vihari","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/20\/52.png","dateofbirth":"1993-10-13","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-offbreak","position":{"resource":"positions","id":4,"name":"Allrounder"},"updated_at":"2020-03-31T12:19:25.000000Z"},{"resource":"players","id":53,"country_id":153732,"firstname":"Rishabh","lastname":"Pant","fullname":"Rishabh Pant","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/21\/53.png","dateofbirth":"1997-10-04","gender":"m","battingstyle":"left-hand-bat","bowlingstyle":null,"position":{"resource":"positions","id":3,"name":"Wicketkeeper"},"updated_at":"2020-09-17T15:11:33.000000Z"},{"resource":"players","id":54,"country_id":153732,"firstname":"Ravichandran","lastname":"Ashwin","fullname":"Ravichandran Ashwin","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/22\/54.png","dateofbirth":"1986-09-17","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-offbreak","position":{"resource":"positions","id":11,"name":"Bowling Allrounder"},"updated_at":"2023-03-16T10:16:36.000000Z"},{"resource":"players","id":55,"country_id":153732,"firstname":"Ravindra","lastname":"Jadeja","fullname":"Ravindra Jadeja","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/23\/55.png","dateofbirth":"1988-12-06","gender":"m","battingstyle":"left-hand-bat","bowlingstyle":"slow-left-arm-orthodox","position":{"resource":"positions","id":4,"name":"Allrounder"},"updated_at":"2023-03-25T20:10:12.000000Z"},{"resource":"players","id":56,"country_id":153732,"firstname":"Kuldeep","lastname":"Yadav","fullname":"Kuldeep Yadav","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/24\/56.png","dateofbirth":"1994-12-14","gender":"m","battingstyle":"left-hand-bat","bowlingstyle":"left-arm-chinaman","position":{"resource":"positions","id":2,"name":"Bowler"},"updated_at":"2020-09-22T15:03:25.000000Z"},{"resource":"players","id":57,"country_id":153732,"firstname":"Mohammed","lastname":"Shami","fullname":"Mohammed Shami","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/25\/57.png","dateofbirth":"1990-09-03","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-fast","position":{"resource":"positions","id":2,"name":"Bowler"},"updated_at":"2020-03-31T12:22:11.000000Z"},{"resource":"players","id":58,"country_id":153732,"firstname":"Umesh","lastname":"Yadav","fullname":"Umesh Yadav","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/26\/58.png","dateofbirth":"1987-10-25","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-fast","position":{"resource":"positions","id":2,"name":"Bowler"},"updated_at":"2020-03-31T12:23:51.000000Z"},{"resource":"players","id":59,"country_id":153732,"firstname":"Mohammed","lastname":"Siraj","fullname":"Mohammed Siraj","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/27\/59.png","dateofbirth":"1994-03-13","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-fast-medium","position":{"resource":"positions","id":2,"name":"Bowler"},"updated_at":"2020-04-05T07:39:51.000000Z"},{"resource":"players","id":60,"country_id":153732,"firstname":"Shardul","lastname":"Thakur","fullname":"Shardul Thakur","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/28\/60.png","dateofbirth":"1991-10-16","gender":"m","battingstyle":"right-hand-bat","bowlingstyle":"right-arm-fast-medium","position":{"resource":"positions","id":2,"name":"Bowler"},"updated_at":"2020-03-31T12:23:31.000000Z"},{"resource":"players","id":61,"country_id":146,"firstname":"Jean-Paul","lastname":"Duminy","fullname":"Jean-Paul Duminy","image_path":"https:\/\/cdn.sportmonks.com\/images\/cricket\/players\/29\/61.png","dateofbirth":"1984-04-14","gender":"m","battingstyle":"left-hand-bat","bowlingstyle":"right-arm-offbreak","position":{"resource":"positions","id":4,"name":"Allrounder"},"updated_at":"2020-04-03T05:02:00.000000Z"}
