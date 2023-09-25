const {createForm, getFormById, updateInfo} = require("../controllers/formController");

const getForm = async (req, res) => {
    try {
        const { id } = req.params;
        const form = await getFormById(id);
        
        res.status(200).json(form);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const sendForm = async (req, res) => {
    try {
        const answer = req.body;
        const newForm = await createForm(answer);
        res.status(201).json(newForm);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateForm = async (req, res) => {
    try {
        const { id } = req.params;
        const form = req.body;
        const update = await updateInfo(id, form);
        
        res.status(200).json(update);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getForm,
    sendForm,
    updateForm
}