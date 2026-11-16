import { Button, Dimensions, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    const width = Dimensions.get("window").width;
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.textStyle}>Hello World</Text>
                <Button title="Press me" />
            </View>
            <View
                style={{
                    backgroundColor: "yellow",
                    alignItems: "flex-end",
                    height: 500,
                    flexDirection: "row",
                    gap: 10,
                }}
            >
                <View
                    style={{
                        backgroundColor: "tomato",
                        flexBasis: 100,
                        width: width / 2 - 10,
                        height: 100,
                        flexGrow: 1,
                    }}
                >
                    <Text>1</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "purple",
                        flexBasis: 100,
                        width: width / 2 - 10,
                        height: 100,
                        flexGrow: 1,
                    }}
                >
                    <Text>2</Text>
                </View>
                <View
                    style={{
                        backgroundColor: "green",
                        flexBasis: 100,
                        width: width / 2 - 10,
                        height: 100,
                        flexGrow: 1,
                    }}
                >
                    <Text>3</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 70,
    },
    textStyle: {
        color: "blue",
        fontSize: 24,
        borderWidth: 1,
        borderColor: "blue",
    },
    top: {
        flexDirection: "column-reverse",
    },
});
