import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import {WebView} from 'react-native-webview';
import { Header } from "./components";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    // children: [
    //   {
    //     path: "history",
    //     element: <HistoryPage />,
    //   },
    //   {
    //     path: "main",
    //     element: <MainPage />,
    //   },
    //   {
    //     path: "",
    //     element: <MainPage />,
    //   },
    // ],
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <View style={styles.container}>
        <SafeAreaView style={{ flex: 1 }}>
          <WebView source={{ uri: "https://www.educative.io/" }} />
        </SafeAreaView>
        <StatusBar style="auto" />
      </View>
    </RouterProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
