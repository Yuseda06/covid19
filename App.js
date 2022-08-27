import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CovidScreen from "./src/screens/CovidScreen";
import HomeScreen from "./src/screens/HomeScreen";



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Covid: CovidScreen

  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: 'Covid-19 Statistics'
    }
  }
);

export default createAppContainer(navigator);