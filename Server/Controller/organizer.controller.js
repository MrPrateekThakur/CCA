import jwt from "jsonwebtoken";
import Organizer from "../Modal/Organizer.modal.js";

export const signUp = async (request, response) => {
    try {
        // const { Name, email, password, mobile, isActive } = request.body;
        // let TournamentObj = new Organizer(null, Name, email, password, mobile, isActive);

        // await TournamentObj.register();
        // let data = { Name, email, password, mobile, isActive };

        // let token = jwt.sign(data, 'organizerToken');
        // return response.status(200).json({ Message: "Tournament created successfully....", token });

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
        // let result = await Organizer.create(request.body);
        // let token = jwt.sign(data, 'organizerToken');
        // return response.status(200).json({ Message: "Tournament created successfully....", token, data: result });

        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
        for (let organizer of request.body)
            await Organizer.create(organizer);

        return response.status(200).json({ Message: "Organizer account created...." });
    } catch (error) {
        console.log(error);

        if (error.errno == 1062)
            return response.status(400).json({ Message: 'Already registered....' });
        return response.status(500).json({ Error: "Internal server error...." });
    }
} // ✔️

export const signIn = () => {

}

export const profile = () => {
    Organizer.findOne()
        ;
}