import AuthButtons from "./authButtons";
import Logo from "./logo";
import NavigationInNavBar from "./navigationInNavBar";

export default function Header() {
  return (
    <header className="flex gap-2 items-center justify-between">
      <Logo />
      <NavigationInNavBar />
      <AuthButtons />
    </header>
  );
}
