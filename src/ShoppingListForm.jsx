import { useState } from "react";

export default function ShoppingListForm({ submitForm }) {
  const [formData, setFormData] = useState({ product: "", quantity: 0 });
  const updateInputs = (e) => {
    setFormData((currValues) => ({
      ...currValues,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData);
    setFormData({ product: "", quantity: 0 });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="product">Product: </label>
        <input
          type="text"
          placeholder="product name"
          value={formData.product}
          onChange={updateInputs}
          id="product"
          name="product"
        />
        <label htmlFor="quantity">Quantity: </label>
        <input
          type="number"
          value={formData.quantity}
          onChange={updateInputs}
          id="quantity"
          name="quantity"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
