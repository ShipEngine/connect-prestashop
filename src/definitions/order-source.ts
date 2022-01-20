import { ConnectionFormSchema } from './connection-form';
import { join } from 'path';
import { OrderSourceDefinition } from '@shipengine/connect-order-source-api';

export const prestashop: OrderSourceDefinition = {
  // DO NOT CHANGE THIS ID AFTER PUBLISHING
  Id: 'bc739fe8-402c-42e1-a24b-735416cf20ff',
  Name: 'PrestaShop',
  SendEmail: false,
  CanRefresh: false,
  CanConfigureTimeZone: false,
  CanConfirmShipments: false,
  CanLeaveFeedback: false,
  HasCustomMappings: false,
  HasCustomStatuses: false,
  HasInventoryLevels: false,
  AccountConnection: {
    Name: 'PrestaShop Connection',
    ConnectionFormSchema,
  },
  Images: {
    Logo: join(__dirname, '../../assets/logo.svg'),
    Icon: join(__dirname, '../../assets/icon.svg'),
  },
};
