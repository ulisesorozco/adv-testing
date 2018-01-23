import { LoginStoreModel, LoginStore } from './login-store'

test('can be created', () => {
  const model: LoginStore = LoginStoreModel.create({})

  expect(model).toBeTruthy()
})
