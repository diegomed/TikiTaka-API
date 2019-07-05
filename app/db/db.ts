import { Db, MongoClient } from 'mongodb';

export class db {
  private client!: MongoClient;
  private readonly connectionString = 'mongodb://localhost:27017';
  private readonly dbName = 'local';

  constructor() {}

  public close() {
    if (this.client) {
        this.client.close()
        .then()
        .catch(error => {
            console.error(error);
        });
    } else {
        console.error('close: client is undefined');
    }
  }

  public async connect() {
    try {
      if (!this.client) {
        this.client = await MongoClient.connect(this.connectionString);
        return true;
      }
      else {
        return false;
      }
    } 
    catch(error) {
      console.error(error);
      return false;
    }
  }

  public get() {
    if (this.client) {
      return this.client.db(this.dbName);
    } else {
      console.error('no db found');
      return undefined;
    }
  }
}

const MongoDb = new db();
export default MongoDb;