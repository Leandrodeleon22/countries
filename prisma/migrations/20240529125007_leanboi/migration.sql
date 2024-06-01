-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "topLevelDomain" TEXT[],
    "alpha2Code" TEXT NOT NULL,
    "alpha3Code" TEXT NOT NULL,
    "callingCodes" TEXT[],
    "capital" TEXT NOT NULL,
    "altSpellings" TEXT[],
    "subregion" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "latlng" DOUBLE PRECISION[],
    "demonym" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "timezones" TEXT[],
    "borders" TEXT[],
    "nativeName" TEXT NOT NULL,
    "numericCode" TEXT NOT NULL,
    "flags" JSONB NOT NULL,
    "currencies" JSONB[],
    "languages" JSONB[],
    "translations" JSONB NOT NULL,
    "flag" TEXT NOT NULL,
    "regionalBlocs" JSONB[],
    "cioc" TEXT NOT NULL,
    "independent" BOOLEAN NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);