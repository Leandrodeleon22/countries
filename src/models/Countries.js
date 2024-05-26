import { Schema, model, models, Document } from "mongoose";

const CountrySchema = new Schema({
  name: { type: String, required: true },
  topLevelDomain: { type: [String], required: true },
  alpha2Code: { type: String, required: true },
  alpha3Code: { type: String, required: true },
  callingCodes: { type: [String], required: true },
  altSpellings: { type: [String], required: true },
  subregion: { type: String, required: true },
  region: { type: String, required: true },
  population: { type: Number, required: true },
  latlng: { type: [Number], required: true },
  demonym: { type: String, required: true },
  area: { type: Number, required: true },
  timezones: { type: [String], required: true },
  borders: { type: [String], required: true },
  nativeName: { type: String, required: true },
  numericCode: { type: String, required: true },
  flags: { type: Object, required: true },
  currencies: { type: [Object], required: true },
  languages: { type: [Object], required: true },
  translations: { type: Object, required: true },
  flag: { type: String, required: true },
  regionalBlocs: { type: [Object], required: true },
  cioc: { type: String, required: true },
  independent: { type: Boolean, required: true },
});

const Countries = models.Countries || model("Countries", CountrySchema);

export default Countries;
