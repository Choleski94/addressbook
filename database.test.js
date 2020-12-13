const db = require('./database');

beforeAll(async () => {
	await db.swquilize.sync();
});

test('create member', async () => {
	expect.assertions(1);
	const member = await db.Member.create({
		id: 1,
		firstName: 'John',
		lastName: 'Doe'
	});
	expect(person.id).toEqual(1);
});

test('get member', async () => {
	expect.assertions(2);
	const member = await db.Member.findByPK(1);
	expect(member.firstName).toEqual('John');
	expect(member.lastName).toEqual('Doe');
});

test('delete member', async () => {
	expect.assertions(1);
	await db.Member.destroy({
		where: {
			id: 1,
		}
	});
	const member = await db.Member.getByPk(1);
	expect(member).toBeNull();
});

afterAll(async () => {
	await db.sequelize.close();
});
