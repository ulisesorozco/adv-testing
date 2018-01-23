import { AsyncStorage } from 'react-native'

export interface StorageConfig {}

/**
 * Storage Service
 *
 * Saves and loads to AsyncStorage
 */
export class Storage {
  config: StorageConfig

  /** Creates the only instance of Storage service. */
  constructor(config: StorageConfig) {
    this.config = config
    this.loadString = this.loadString.bind(this)
    this.saveString = this.saveString.bind(this)
    this.load = this.load.bind(this)
    this.save = this.save.bind(this)
    this.remove = this.remove.bind(this)
    this.clear = this.clear.bind(this)
  }

  /** Will be called before any React components are initialized. */
  async setup() {}

  /**
   * Loads a string from storage.
   *
   * @param key The key to fetch.
   */
  async loadString(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key)
    } catch (e) {
      // not sure why this would fail... even reading the RN docs I'm unclear
      return null
    }
  }

  /**
   * Saves a string to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  async saveString(key: string, value: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem(key, value)
      return true
    } catch (e) {
      return false
    }
  }

  /**
   * Loads something from storage and runs it thru JSON.parse.
   *
   * @param key The key to fetch.
   */
  async load(key: string): Promise<any | null> {
    try {
      const almostThere = await AsyncStorage.getItem(key)
      return JSON.parse(almostThere)
    } catch (e) {
      // not sure why this would fail... even reading the RN docs I'm unclear
      return null
    }
  }

  /**
   * Saves an object to storage.
   *
   * @param key The key to fetch.
   * @param value The value to store.
   */
  async save(key: string, value: any): Promise<boolean> {
    try {
      if (typeof value === 'object') {
        await AsyncStorage.setItem(key, JSON.stringify(value))
      } else {
        await AsyncStorage.setItem(key, value)
      }
      return true
    } catch (e) {
      // console.tron.log(e.message)
      return false
    }
  }

  /**
   * Removes something from storage.
   *
   * @param key The key to kill.
   */
  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key)
    } catch (e) {
      // not sure why this would fail... even reading the RN docs I'm unclear
      return null
    }
  }

  /**
   * Burn it all to the ground.
   */
  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear()
    } catch (e) {}
  }
}
