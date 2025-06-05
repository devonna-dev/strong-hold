import type AddressType from "./AddressType";

export default interface GymType {
  id: number;
  name: string;
  description?: string;
  address: AddressType;
  hasNeutralLockers: boolean;
  hasNeutralRestrooms: boolean;
  hasExplicitSupport: boolean;
}
