const db = require('./database');

beforeAll(async () => {
	await db.swquilize.sync();
});

test('create contact', async () => {
	expect.assertions(1);
	const contact = await db.Contact.create({
		id: 1,
		firstName: 'John',
		lastName: 'Doe'
	});
	expect(person.id).toEqual(1);
});

test('get contact', async () => {
	expect.assertions(2);
	const contact = await db.Contact.findByPK(1);
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
	const contact = await db.Contact.getByPk(1);
	expect(contact).toBeNull();
});

afterAll(async () => {
	await db.sequelize.close();
});
