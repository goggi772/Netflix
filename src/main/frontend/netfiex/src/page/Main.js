import Header from '../components/Header';
import {
  MainPageBackGround,
  MainNavBarBackGround,
  MainNavBar,
} from './BeforeLoginPage';
import { LoginLogoContainer } from './Login';
function Main() {
  return (
    <MainPageBackGround>
      <MainNavBarBackGround>
        <Header></Header>
      </MainNavBarBackGround>
    </MainPageBackGround>
  );
}

export default Main;
