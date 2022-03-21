import EventHandlerInterface from "../../../@shared/event/event-handler.interface"
import CustomerAddressChangedEvent from "../customer_address_changed.event"

export default class SendConsoleLogHandler implements EventHandlerInterface<CustomerAddressChangedEvent> {
  handle(event: CustomerAddressChangedEvent): void {
    const { id, name, address } = event.eventData
    console.log(`Endereço do cliente: ${id}, ${name} alterado para: ${address.toString()}`)
  }
}