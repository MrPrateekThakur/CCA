import SubCategory from "../Modal/SubCategory.modal.js";

export const addSubCategory = async (request, response, next) => {
    try {
        let isSubCategoryExist = !! await SubCategory.findOne({ where: { type: request.body.type } });
        if (isSubCategoryExist)
            return response.status(201).json({ Message: 'Sub-Category already exists...' });

        let result = await SubCategory.create(request.body);
        return response.status(200).json({ Message: 'Sub-Category addedd successfully....', data: result });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: 'Internal server error' });
    }
}

export const removeSubCategory = (request, response, next) => {
    SubCategory.destroy({ where: { type: request.body.type } })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'Sub-Category was remove.... ' });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}

export const getSubCategoryByCategory = (request, response, next) => {
    SubCategory.findAll({ where: { category_id: request.body.category_id } })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'All Sub-Category by category', data: result });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}

export const allSubCategory = (request, response, next) => {
    SubCategory.findAll()
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'All Sub-Category', data: result });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}