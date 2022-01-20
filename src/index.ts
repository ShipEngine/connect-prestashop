import { OrderSourceApp } from '@shipengine/connect-order-source-api';
import {
  GetProducts,
  SalesOrdersExport,
  ShipmentNotification,
} from './methods';
import {
  Metadata,
} from './definitions';

export default new OrderSourceApp({
  SalesOrdersExport,
  ShipmentNotification,
  GetProducts,
  Metadata,
});
