import Address from "../value-object/address"

export default class Customer {

  private readonly _id: string
  private _name: string
  private _address!: Address
  private _active: boolean = false
  private _rewardPoints: number = 0

  constructor(id: string, name: string) {
    this._id = id
    this._name = name
    this.validate()
  }

  get id (): string {
    return this._id
  }

  get name (): string {
    return this._name
  }

  get rewardPoints (): number {
    return this._rewardPoints
  }

  get address (): Address {
    return this._address
  }

  validate () {
    if (!this._id) throw new Error("id is required")
    if (!this._name) throw new Error("name is required")
  }

  changeName (name: string) {
    this._name = name
    this.validate()
  }

  changeAddress (address: Address) {
    this._address = address
  }

  activate () {
    if (!this._address) throw new Error("Address is mandatory to activate a customer")
    this._active = true
  }

  deactivate () {
    this._active = false
  }

  setAddress (address: Address) {
    this._address = address
  }

  isActive (): boolean {
    return this._active
  }

  addRewardPoints (points: number): void {
    this._rewardPoints += points
  }

}