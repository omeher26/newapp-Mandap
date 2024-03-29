// navigation/AppNavigator.js
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../components/WelcomeScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CelebrationScreen from '../screens/celebration/CelebrationScreen';
import NewsEventsH from '../screens/News Events/NewsEventsH';
import NotificationScreen from '../screens/NotificationScreen';
import AssociationsScreen from '../screens/Association/AssociationsScreen';
import AssociationMainScreen from '../screens/Association/AssociationMainScreen';
import AllMembers from '../screens/Member Search/AllMembers';
import InfoLeaderMainScreen from '../screens/Info of leaders/InfoLeaderMainScreen';
import HomeMainScreen from '../screens/HomeScreen/HomeMainScreen';
import ProfileScreen from '../screens/HomeScreen/Profile';
import PresidentScreen from '../screens/Association/PresidentScreen';
import SecretaryScreen from '../screens/Association/SecretaryScreen';
import BODScreen from '../screens/Association/BODScreen';
import MembersScreen from '../screens/Association/MembersScreen';
import MemberDetailScreen from '../screens/Member Search/MemberDetailScreen';
import NewsDetailScreen from '../screens/News Events/NewsDetailScreen';
// import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* <Stack.Screen name="Home" component={HomeMainScreen} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Associations" component={AssociationsScreen} />
        <Stack.Screen name="NewsEvent" component={NewsEventsH} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="Celebration" component={CelebrationScreen} />
        <Stack.Screen name="AssociationMainScreen" component={AssociationMainScreen} />
        <Stack.Screen name="AllMembers" component={AllMembers} />
        <Stack.Screen name="InfoLeaderMainScreen" component={InfoLeaderMainScreen} />
        <Stack.Screen name="President" component={PresidentScreen} />
        <Stack.Screen name="Secretary" component={SecretaryScreen} />
        <Stack.Screen name="bod" component={BODScreen} />
        <Stack.Screen name="Member" component={MembersScreen} />
        <Stack.Screen name="MemberDetailScreen" component={MemberDetailScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default AppNavigator;


