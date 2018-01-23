import { ModalStoreModel, ModalStore } from './modal-store'

test('can be created', () => {
  const model: ModalStore = ModalStoreModel.create({})

  expect(model).toBeTruthy()
})
