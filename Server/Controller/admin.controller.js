import Admin from "../Modal/Admin.modal.js";
import jwt from "jsonwebtoken";

export const signUp = async (request, response) => {
    try {
        console.log(request.body);
        let isAdminExist = !! await Admin.findOne({ where: { email: request.body.email } });

        if (isAdminExist)
            return response.status(201).json({ Message: 'Admin already exist' });

        let result = await Admin.create(request.body)
            .then(res => { return res.dataValues });

        let Token = jwt.sign(request.body, 'adminToken');
        return response.status(200).json({ Message: 'SignUp successfully', data: result, Token });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: "Internal server error...." });
    }
} // ✔️

export const signIn = async (request, response) => {
    try {
        let result = await Admin.findOne({ where: { email: request.body.email }, raw: true });

        if (!result)
            return response.status(401).json({ Message: 'Invalid Email' });

        let password = request.body.password;
        if (Admin.checkPassword(password, result.password))
            return response.status(200).json({ Message: 'SignIn success', data: request.body });
        else
            return response.status(401).json({ Message: 'Invalid Password' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: 'Internal server erro' });
    }
} // ✔️

export const updateDetails = (request, response, next) => {
    Admin.update(request.body, { where: { admin_id: request.body.admin_id } })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'Details update successfully....', result });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error...' });
        });
}