import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema/schema";
import migrations from "./migrations/migrations";

// Models here
import User from "./model/User";

// the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: "firstpich",
  jsi: true /* Platform.OS === 'ios' */,
  onSetUpError: err => {
    console.error("Database failed to load ", err);
  },
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [User],
});

export { database };
