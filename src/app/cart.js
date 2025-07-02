export default function Cart() {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label>Have any discount code?</label>
            <input placeholder="Enter coupon code" className="border w-full mt-1 p-2"/>
            <button className="bg-blue-500 text-white mt-2 px-4 py-1">Apply</button>
          </div>
          <div className="md:col-span-2">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <table className="w-full text-left">
              <thead>
                <tr><th>Product</th><th>Subtotal</th></tr>
              </thead>
              <tbody>
                <tr><td>Total</td><td>0.00 EGP</td></tr>
              </tbody>
            </table>
            <button className="w-full bg-blue-600 text-white mt-4 py-2">Submit Order</button>
          </div>
        </div>
      </div>
    )
  }
  