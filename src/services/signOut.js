export default function useSignOut(SignOutAction, AddCartAction, DeleteCheckoutAction) {
  SignOutAction();
  AddCartAction();
  DeleteCheckoutAction();
}