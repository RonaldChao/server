const UserModel = require('../../modules/dataBase/user');

describe('UserModel', () => {

    const mock = {
        name: 'Steve Rogers',
        username: 'Steve',
        id: '12345ab',
        gender: 'M'
    };

    it('create user account', (done) => {
        UserModel.create(mock).then(
            (res) => {
                done();
            },
            (err) => {
                console.log(err);
            }
        )
    });

    it('Get by username', async () => {
        const condition = { username: mock.username };
        let returnUser = await UserModel.getByCondition(condition);

        expect(returnUser.name).toBe(mock.name);
        expect(returnUser.username).toBe(mock.username);
        expect(returnUser.id).toBe(mock.id);
        expect(returnUser.gender).toBe(mock.gender);
    })

    it('Update by condition', async () => {
        const condition = { username: mock.username };
        const update = {
            name: 'Cap. America',
            id: '45678',
            gender: 'M'
        };

        let updatedUserInfo = await UserModel.updateByCondition(condition, update, { new: true });

        expect(updatedUserInfo.name).toBe(update.name);
        expect(updatedUserInfo.id).toBe(update.id);
        expect(updatedUserInfo.gender).toBe(update.gender);
    })

    it('Delete function', async () => {
        const condition = { username: mock.username };
        UserModel.deleteByCondition(condition, null)
            .then(
            res => console.log('Res: ', res),
            err => console.log(err)
            );
    })
});