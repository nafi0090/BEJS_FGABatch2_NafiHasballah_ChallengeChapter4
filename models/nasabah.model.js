const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const NASABAH = {
	getNasabah: async () => {
		try {
			const result = await prisma.nasabah.findMany();
			return result;
		} catch (err) {
			console.error(err.message);
			return err
		}
	},

    createNasabah: async (data) => {
        try{
            const result = await prisma.nasabah.create({
                data: data
        });
            return result;
        }catch (err) {
            console.error(err.message);
            return err;
        }
    },

    updateNasabah: async (id, data) => {
        try {
            const result = await prisma.nasabah.update({
                where: { id: id },
                data: data
            });
            return result;
        } catch (err) {
            console.error(err.message);
            throw err;
        }
    },

    deleteNasabah: async (id) => {
        try {
            const result = await prisma.nasabah.delete({
                where: {id: id},
            });
            return result;
        } catch (err) {
            console.error(err.message);
        }
    }
};

module.exports = NASABAH;