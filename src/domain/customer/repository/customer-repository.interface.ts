import RepositoryInterface from "../../@shared/repository/repository-interface"
import Customer from "../entity/customer"
import UpdatableRepositoryInterface from "../../@shared/repository/updatable-repository-interface"

export default interface CustomerRepositoryInterface extends
  RepositoryInterface<Customer>, UpdatableRepositoryInterface<Customer> {}