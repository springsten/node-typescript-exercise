import { RowDataPacket } from 'mysql2';
import { connection } from './connection';
import { promises } from 'dns';

export interface Icecream extends RowDataPacket {
  id: number;
  name: string;
  description: string;
  price: number;
}

export async function getAllIcecreams(): Promise<Icecream[]> {
  const conn = await connection;
  const [rows] = await conn.query<Icecream[]>('SELECT * FROM IceCreams', []);
  return rows;
}
