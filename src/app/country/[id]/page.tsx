import React from "react";

type ParamsIdProp = {
  params: {
    id: string;
  };
};

export default async function Country({ params }: ParamsIdProp) {
  return <div>country</div>;
}
