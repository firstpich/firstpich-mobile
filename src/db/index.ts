import { Database } from "@nozbe/watermelondb";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

import schema from "./schema";
import migrations from "./migrations";
import { Platform } from "react-native";

// the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  migrations,
  dbName: "firstpich",
  jsi: Platform.OS === "ios",
  onSetUpError: err => {
    console.error("Database failed to load ", err);
  },
});

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [],
});

export { database };
