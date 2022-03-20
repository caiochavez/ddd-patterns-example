export default interface UpdatableRepositoryInterface<T> {

  update(entity: T): Promise<void>

}