import { Colors } from "@/tokens";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

export function Input(props: TextInputProps) {
    return (
        <TextInput
            placeholderTextColor={Colors.gray}
            {...props}
            style={[styles.input, props.style]}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        width: "100%",
        height: 58,
        backgroundColor: Colors.violetDark,
        paddingHorizontal: 26,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#666477",
        color: "#FFFFFF",
        fontSize: 16,
    },
});
