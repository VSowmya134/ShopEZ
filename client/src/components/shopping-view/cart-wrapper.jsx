import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetContent, SheetHeader, SheetTitle } from "../ui/sheet";
import UserCartItemsContent from "./cart-items-content";

function UserCartWrapper({ cartItems, setOpenCartSheet }) {
 const navigate = useNavigate();
  const totalCartAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce(
          (sum, currentItem) =>
            sum +
            (currentItem?.salePrice > 0
              ? currentItem?.salePrice
              : currentItem?.price) *
              currentItem?.quantity,
          0
        )
      : 0;
  return (
    <SheetContent className="sm:max-w-md bg-white text-black px-6 py-5 flex flex-col">
      <SheetHeader className="mb-3">
        <SheetTitle className="text-lg font-bold">Your Cart</SheetTitle>
      </SheetHeader>

      <div className="mt-2 space-y-4 overflow-y-auto flex-1 pr-1">
        {cartItems && cartItems.length > 0
          ? cartItems.map((item) => <UserCartItemsContent cartItem={item} />)
          : null}
      </div>

      <div className="mt-2 space-y-4">
        <div className="flex justify-between">
          <span className="font-bold text-base">Total</span>
          <span className="font-bold text-base">${totalCartAmount}</span>
        </div>
      </div>

      <Button onClick={() => {
          navigate("/shop/checkout");
          setOpenCartSheet(false);
        }}
        className="w-full mt-5 py-3 bg-sky-950 text-white">
        Checkout
      </Button>
    </SheetContent>
  );
}

export default UserCartWrapper;
