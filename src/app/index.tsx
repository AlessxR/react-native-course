import { Input } from "@/shared/Input/Input";
import { Colors, Gaps } from "@/tokens";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image
                    style={styles.logo}
                    source={require("../../assets/test-course-logo.png")}
                    resizeMode="contain"
                />
                <View style={styles.form}>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Button title="Login" />
                </View>
                <Text style={{ color: "#FFFFFF" }}>Recover password</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flex: 1,
        padding: 55,
        backgroundColor: Colors.black,
    },
    content: {
        width: "100%",
        alignItems: "stretch",
        gap: 20,
        borderWidth: 1,
    },
    form: {
        width: "100%",
        gap: Gaps.g16,
    },
    logo: {
        width: 170,
        height: 170,
        alignSelf: "center",
    },
});
