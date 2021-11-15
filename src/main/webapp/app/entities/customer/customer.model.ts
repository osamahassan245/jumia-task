export interface ICustomer {
  id?: number;
  name?: string | null;
  phone?: string | null;
}

export class Customer implements ICustomer {
  constructor(public id?: number, public name?: string | null, public phone?: string | null) {}
}

export function getCustomerIdentifier(customer: ICustomer): number | undefined {
  return customer.id;
}
