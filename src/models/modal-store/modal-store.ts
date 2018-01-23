import { types } from 'mobx-state-tree'

/**
 * Coordinates showing modals & banners.
 *
 * The `mobx-state-tree` model used to create `ModalStore` instances
 * as well as including as props in other `mobx-state-tree` models.
 */
export const ModalStoreModel = types
  .model('ModalStore')
  .props({
    banner: types.optional(types.enumeration(['auto', 'blank']), 'auto'),
    modal: types.optional(types.enumeration(['confirm', 'blank']), 'blank'),
    /** Tracks the status of the Modal workflow. */
    status: types.optional(types.enumeration(['idle', 'modal', 'banner']), 'idle'),
    /** Notification message */
    notiMessage: types.maybe(types.string),
    /** The error message to show if we cannot show */
    errorMessage: types.maybe(types.string),
  })
  .views(self => ({
    /** Are we currently showing Modal? */
    get isModal() {
      return self.status === 'modal'
    },
    /** Are we currently showing Banner? */
    get isBanner() {
      return self.status === 'banner'
    },
  }))
  // setters
  .actions(self => ({
    setStatus(value: 'idle' | 'modal' | 'banner') {
      self.status = value
    },
    setBanner(value: 'auto' | 'blank') {
      self.banner = value
    },
    setModal(value: 'confirm' | 'blank') {
      self.modal = value
    },
    setNotiMessage(value: string) {
      self.notiMessage = value
    },
    setErrorMessage(value: string) {
      self.errorMessage = value
    },
    showBanner() {
      self.status = 'banner'
    },
    showModal() {
      self.status = 'modal'
    },
    close() {
      self.status = 'idle'
    },
    reset() {
      //@TODO
    },
  }))

/**
 * Coordinates showing modals & banners.
 *
 * An instance of a ModalStore.
 */
export type ModalStore = typeof ModalStoreModel.Type

/**
 * The serialized version of a `ModalStore` often used when acquiring
 * data from an API (for example).
 */
export type ModalStoreSnapshot = typeof ModalStoreModel.SnapshotType
