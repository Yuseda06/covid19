import { StyleSheet, Text, View, Button } from "react-native";
import React, {useState, useEffect} from "react";
import covid from "../api/covid";

const CovidScreen = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    try {
      const response = await covid.get("/", {
        params: {
          country: "India",
        },
      });

      console.log(response.data.response[0].country)
      setResults(response.data);

    } catch (err) {
      setErrorMessage("Something went wrong");
      console.log(err);
    }
  };

  useEffect(() => {
    searchApi("rice");
  }, []);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate("Home")}
      />

        <Text>{results.population}</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default CovidScreen;

const styles = StyleSheet.create({});
