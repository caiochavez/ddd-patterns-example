import RepositoryInterface from '../../@shared/repository/repository-interface'
import Product from "../entity/product"
import UpdatableRepositoryInterface from "../../@shared/repository/updatable-repository-interface";

export default interface ProductRepositoryInterface extends
  RepositoryInterface<Product>, UpdatableRepositoryInterface<Product> {}