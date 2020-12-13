const db = require('./database');

beforeAll(async () => {
	await db.sequelize.sync();
});

test('create contact', async () => {
	expect.assertions(1);
	const contact = await db.Contact.create({
		id: 1,
		firstName: 'John',
		lastName: 'Doe'
	});
	expect(contact.id).toEqual(1);
});

test('get contact', async () => {
	expect.assertions(2);
	const contact = await db.Contact.findByPk(1);
	expect(contact.firstName).toEqual('John');
	expect(contact.lastName).toEqual('Doe');
});

test('delete contact', async () => {
	expect.assertions(1);
	await db.Contact.destroy({
		where: {
			id: 1,
		}
	});
	const contact = await db.Contact.findByPk(1);
	expect(contact).toBeNull();
});

afterAll(async () => {
	await db.sequelize.close();
});
