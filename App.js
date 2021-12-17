import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
         <View style={styles.square}>
            <Text style={styles.text}>Tbilisi</Text>
            <View style={styles.rectangle}>
              <View style={styles.elipse}/>
              <Text style={styles.recText}>UPDATE JUST NOW</Text>
              <Image style={styles.imageSun} source={require("./images/sun.png")} />
              <Text style={styles.gradus}>19</Text>
              <View style={styles.littleElipse}/>
              <View style={styles.hr}/>
              <Image style={styles.imageWind} source={require("./images/wind.png")}/>
              <Text style={styles.textWind}>13 km/h {"\n"}Wind</Text>
              <Image style={styles.imageHumidity} source={require("./images/humidity.png")}/>
              <Text style={styles.textHumidity}>24% {"\n"}humidity</Text>
              <Image style={styles.imageRaining} source={require("./images/raining.png")}/>
              <Text style={styles.textRaining}>87% {"\n"}Chance of Rain</Text>
            </View>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black"
  },
  square: {
    width: 345,
    height: 502,
    backgroundColor: "#15C1F7",
    borderRadius: 22,
    marginTop: 44,
  },
  text: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    marginTop: 50,
  },
  rectangle: {
    position: "absolute",
    width: 130,
    height: 32,
    left: 110,
    top: 100,
    backgroundColor: "black",
    borderRadius: 22,
  },
  recText: {
    fontSize: 10,
    marginTop: 3,
    marginLeft: 24
  },
  elipse: {
    width: 6,
    height: 6,
    backgroundColor: "#FFC657",
    top: 13,
    left: 11,
    borderRadius: 50,
  },
  imageSun: {
    width: 204,
    height: 204,
    right: 35
  },
  gradus: {
    position: 'absolute',
    fontSize: 70,
    top: 190,
    left: 20
  },
  littleElipse: {
    position: "absolute",
    width: 14,
    height: 14,
    backgroundColor: "#FFFFFF",
    top: 210,
    left: 100,
    borderRadius: 50,
    opacity: 0.5,
  },
  hr: {
    position: "absolute",
    width: 301,
    height: 1,
    backgroundColor: "white",
    top: 290,
    left: -90,
  },
  imageWind: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 310,
    left: -50,
  }, 
  imageHumidity: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 310,
    left: 50,
  }, 
  imageRaining: {
    position: "absolute",
    width: 30,
    height: 30,
    top: 310,
    left: 150,
  }, 
  textWind: {
    position: "absolute",
    top: 350,
    left: -65,
    textAlign: "center"
  },
  textHumidity: {
    position: "absolute",
    top: 350,
    left: 40,
    textAlign: "center"
  },
  textRaining: {
    position: "absolute",
    top: 350,
    left: 120,
    textAlign: "center"
  }

});
