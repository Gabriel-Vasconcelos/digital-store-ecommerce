import { Bars3Icon } from "@heroicons/react/20/solid";
import SiteContainer from "../commons/SiteContainer/SiteContainer";

const Header = () => {
  return (
    <header className="w-full">
      <SiteContainer>
        <button type="button">
          <Bars3Icon className="text-dark-gray w-6"/>
        </button>
        <h1>Testando o bagulho</h1>

      </SiteContainer>
      </header>
  )
}

export default Header;