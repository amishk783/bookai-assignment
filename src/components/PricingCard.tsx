interface PricingRow {
  api: string;
  model: string;
  price: number;
}
const pricingArray: PricingRow[] = [
  {
    api: "OpenAI",
    model: "GPT-3.5",
    price: 0.002,
  },
  {
    api: "OpenAI",
    model: "GPT-4",
    price: 0.003,
  },
  {
    api: "TogetherAI",
    model: "Llama-2-70b",
    price: 0.0008,
  },
  {
    api: "TogetherAI",
    model: "Llama-2-13b",
    price: 0.0006,
  },
];

export const PricingCard = () => {
  return (
    <div className="flex justify-start items-start flex-col p-8 bg-section rounded-lg">
      <h2 className="mt-8 text-secondary text-2xl font-bold">API Pricing</h2>
      <p className="text-base ">
        Our API pricing is based on the model used and the number of tokens
        processed. Here's a breakdown of the costs:
      </p>
      <table className="w-full mt-4 border-2  border-solid rounded-2xl border-separate border-spacing-0 overflow-hidden border-primary">
        <thead className="">
          <tr className="table-row text-left border-b border-red-200">
            <th className=" bg-primary font-semibold uppercase text-sm text-white p-4">
              API
            </th>
            <th className=" bg-primary font-semibold uppercase text-sm text-white p-4">
              MODEL
            </th>
            <th className=" bg-primary font-semibold uppercase text-sm text-white p-4">
              PRICE 1K TOKENS
            </th>
          </tr>
        </thead>
        <tbody className=" table-row-group ">
          {pricingArray.map((pricing) => (
            <tr className=" table-row ">
              <td className="p-4 text-left border-b border-primary">
                {pricing.api}
              </td>
              <td className="p-4 text-left border-b border-primary">
                {pricing.model}
              </td>
              <td className="p-4 text-left border-b border-primary">
                {pricing.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 className="mt-8 text-secondary text-xl font-bold">
        Token Estimation
      </h3>
      <p className="text-base  text-left font-inter  pt-2">
        On average, 1 token is approximately 4 characters or 0.75 words. For
        precise pricing, we recommend using our token calculator tool.
      </p>
      <h3 className="mt-8 text-secondary text-xl  font-bold">Billing</h3>
      <p className="text-base  text-left font-inter   pt-2">
        You will only be charged for the tokens used in generating the book. The
        API tracks token usage and bills accordingly. Detailed usage reports are
        available in your account dashboard.
      </p>
    </div>
  );
};
