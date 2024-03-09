import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function ValidatedShoppingListForm({ submitForm }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({ defaultValues: { product: "", quantity: 0 } });
  useEffect(() => reset(), [isSubmitSuccessful, reset]);
  const registerOptions = {
    product: { required: "You must enter product name" },
    quantity: {
      required: "You must enter quantity for product",
      min: { value: 1, message: "You should enter min 1 to add to list" },
    },
  };
  const submit = (formData) => {
    submitForm(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="product">Product: </label>
          <input
            type="text"
            placeholder="product name"
            id="product"
            name="product"
            {...register("product", registerOptions.product)}
          />
          <p>
            <small>{errors.product && errors.product.message}</small>
          </p>
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            {...register("quantity", registerOptions.quantity)}
          />
          <p>
            <small>{errors.quantity && errors.quantity.message}</small>
          </p>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
