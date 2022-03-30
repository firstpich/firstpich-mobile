// model/Post.js
import { Model } from "@nozbe/watermelondb";
import { field, readonly, date } from "@nozbe/watermelondb/decorators";

export default class User extends Model {
  static table = "onboarding_details";

  @field("refresh_token")
  refresh_token: string;

  @field("phone")
  phone: string;

  @readonly
  @date("created_at")
  createdAt: Date;

  @readonly
  @date("updated_at")
  updatedAt: Date;
}
