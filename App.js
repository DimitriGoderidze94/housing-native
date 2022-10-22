import { StyleSheet, View, ScrollView } from 'react-native';
import Login from "./pages/login/Login"

export default function App() {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.appContainer}>
        <Login />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  appContainer: {
    backgroundColor: 'rgb(245, 244, 248)',
    minHeight: '100%',
    width: '100%',
  },
});
