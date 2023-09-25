const { Form } = require("../db");

const createForm = async ({full_name, phone_number, start_date, preferred_language, how_found, newsletter_subscription}) =>
    await Form.create({full_name, phone_number, start_date, preferred_language, how_found, newsletter_subscription});

const getFormById = async (id) => {
    let form;
    if(id) {
        form = await Form.findByPk(id);
    } else { 
        form = await Form.findAll();
    }
    return form;
};

const updateInfo = async (id, {full_name, phone_number, start_date, preferred_language, how_found, newsletter_subscription}) => {
    const update = await Form.update(
        {
        full_name, phone_number, 
        start_date, preferred_language, 
        how_found, newsletter_subscription
        }, 
       {where:{id}}
    )
    return Form.findByPk(id);
}

module.exports = {createForm, getFormById, updateInfo};