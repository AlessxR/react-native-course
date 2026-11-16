import {
    Button,
    StatusBar,
    StyleSheet,
    TextInput,
    useColorScheme,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";
import { useTheme } from "@/hooks/use-theme";

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const theme = useTheme();

    return (
        <ThemedView style={styles.screen}>
            <SafeAreaView style={styles.content}>
                <StatusBar
                    barStyle={
                        colorScheme === "dark"
                            ? "light-content"
                            : "dark-content"
                    }
                />
                <ThemedText type="subtitle" style={{ color: "blue" }}>
                    Welcome to the App!
                </ThemedText>
                <ThemedText
                    themeColor="textSecondary"
                    style={styles.description}
                >
                    Try entering a message below.
                </ThemedText>
                <TextInput
                    defaultValue="hello!"
                    placeholder="Type something..."
                    placeholderTextColor={theme.textSecondary}
                    selectionColor={theme.text}
                    style={[
                        styles.input,
                        {
                            backgroundColor: theme.backgroundElement,
                            borderColor: theme.backgroundSelected,
                            color: theme.text,
                        },
                    ]}
                />
                <Button title="Press me!" />
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    content: {
        flex: 1,
        width: "100%",
        maxWidth: MaxContentWidth,
        alignItems: "center",
        justifyContent: "center",
        padding: Spacing.four,
        gap: Spacing.three,
    },
    title: {
        textAlign: "center",
    },
    description: {
        textAlign: "center",
    },
    input: {
        width: "100%",
        maxWidth: 440,
        minHeight: 52,
        paddingHorizontal: Spacing.three,
        borderWidth: 1,
        borderRadius: 14,
        fontSize: 16,
    },
});
