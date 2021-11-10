export type TAddress = {
  street1: string;
  street2?: string | null;
  city: string;
  state: string;
  zip: number;
};

/**
 * formatAddress
 * @param address {TAddress}
 * @returns String
 */
export const formatAddress = (address: TAddress) => {
  const addressLines = [];

  addressLines.push(address.street1);
  if (address.street2) {
    addressLines.push(address.street2);
  }
  addressLines.push(`${address.city}, ${address.state} ${String(address.zip)}`);

  return addressLines.join('\n');
};
