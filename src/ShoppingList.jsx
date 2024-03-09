import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

export default function ShoppingList() {
  const [list, setList] = useState([
    { id: uuidv4(), product: "Banana", quantity: 3 },
    { id: uuidv4(), product: "Eggs", quantity: 12 },
  ]);
  const submitForm = (item) => {
    setList((currList) => [...currList, { ...item, id: uuidv4() }]);
  };
  return (
    <div>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListForm submitForm={submitForm} />
    </div>
  );
}
