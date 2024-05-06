import Category from "../Modal/Category.modal.js";

export const addCategory = async (request, response, next) => {
    try {
        let isCategoryExist = !! await Category.findOne({ where: { Type: request.body.Type } });
        if (isCategoryExist)
            return response.status(201).json({ Message: 'Category already exists...' });

        let result = await Category.create(request.body);
        return response.status(200).json({ Message: 'Category addedd successfully....', data: result });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: 'Internal server error' });
    }
}

export const removeCategory = (request, response, next) => {
    Category.destroy({ where: {} })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'Category was remove.... ' });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}

export const getCategory = (request, response, next) => {
    Category.findAll()
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'All Category....', data: result });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}