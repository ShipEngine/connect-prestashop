import { AuthenticationType, OrderSourceAppMetadata } from '@shipengine/connect-order-source-api';
import { prestashop } from './order-source';

export const Metadata: OrderSourceAppMetadata = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: '5723baee-3670-48ec-a0b1-45802e9aa643',
  Name: 'prestashop-v2',
  AuthProcess: {
    Identifier: {
      AuthenticationType: AuthenticationType.ApiKey,
      IsSandbox: false,
    },
  },
  OrderSources: [prestashop],
};
