// Create Model for Member
const DB = require('../config/db');

const ACCOUNT = {
	index: async () => {
		try {
			const result = await DB.query('SELECT * FROM account');
			return result;
		} catch (err) {
			console.error(err.message);
			return err
		}
	}

    // CreateAccount: async () =>{
    //     try{
    //         const result = await DB.query('INSERT INTO account VALUES {}');
    //         return result;
    //     } catch (err) {
    //         console.error(err.message)
    //         return err
    //     }
    // }
};
module.exports = ACCOUNT;