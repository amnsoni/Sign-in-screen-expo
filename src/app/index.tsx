import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f1f1f1",
    fontFamily: "Sans-serif, Helvetica, Arial"
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5
  },
  headerText: {
    color: "#666"
  },
  formContainer: {
    width: "90%",
    marginTop: 20,
    marginBottom: 20,
    padding: 10
  },
  formLabel: {
    fontWeight: "bold",
    marginBottom: 5
  },
  formInput: {
    borderWidth: 1,
    padding: 14,
    paddingLeft: 50,
    borderRadius: 13,
    marginVertical: 10,
    width: "100%"
  },
  signInButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 14,
    borderRadius: 13,
    backgroundColor: "#739b1b",
    marginTop: 20
  }, 
  socialButton: {
  width: 60,
  height: 60,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 2,
  borderColor: "#6b6b6b",
  borderRadius: 10
  }, 
  footerLink: {
    color: "#739b1b",
    textDecorationLine: "underline",
    textAlign: "center"
  }
});

export default function Index() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar style="auto" animated={true}/>

      <View style={styles.headerContainer}>
        <Image source={require("@/assets/images/logoleaf.png")} style={{ height: 80, width: 80 }}></Image>
        <Text style={styles.headerTitle}>Sign In</Text>
        <Text style={styles.headerText}>Lets experience the joy of Telecare AI.</Text>
      </View>

      <KeyboardAvoidingView style={styles.formContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>

        <Text style={styles.formLabel}>Email Address</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <FontAwesome style={{ position: "absolute", top: 20, left: 10}} name="envelope" size={24} color="black" />
          <TextInput style={styles.formInput} value={email}
            onChangeText={setEmail}
            placeholder="Enter your email..."
          />
        </View>

        <Text style={styles.formLabel}>Password</Text>
        <View style={{ flexDirection: "row", width: "100%"}}>
          <FontAwesome style={{ position: "absolute", top: 20, left: 10 }} name="lock" size={24} color="black" />
          <TextInput style={styles.formInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password..."
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            {showPassword ?
              <FontAwesome style={{ position: "absolute", top: 20, right: 10 }} name="eye" size={24} color="gray" />
              : <FontAwesome style={{ position: "absolute", top: 20, right: 10 }} name="eye-slash" size={24} color="gray" />
            }
          </Pressable>
        </View>


        <Pressable style={styles.signInButton}>
          <Text style={{color: "white", fontWeight: "bold"}}>Sign In</Text>
          <FontAwesome name="arrow-right" size={15} color="white"/>
        </Pressable>  
      </KeyboardAvoidingView>


      <View style={{ flexDirection: "row", gap: 20, marginVertical: 20}}>
        <View style={styles.socialButton}>
          <FontAwesome name="facebook-f" size={24} color="black" />
        </View>
        <View style={styles.socialButton}>
          <FontAwesome name="google" size={24} color="black" />
        </View>
        <View style={styles.socialButton}>
          <FontAwesome name="instagram" size={24} color="black" />
        </View>
      </View>

      <View>
        <View style={{ flexDirection: "row", gap: 5, marginTop: 20}}>
          <Text>Don't have an account?</Text>
          <Link href={"/"} style={styles.footerLink}>Sign up</Link>
        </View>
        <Link href={"/"} style={styles.footerLink}>Forgot your password?</Link>
      </View>
    </SafeAreaView>
  )
}

