import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { MaxContentWidth, Spacing } from "@/constants/theme";

export default function ExploreScreen() {
    return (
        <ThemedView style={styles.screen}>
            <SafeAreaView style={styles.content}>
                <ThemedText type="title" style={styles.title}>
                    Обзор
                </ThemedText>
                <ThemedText
                    style={styles.description}
                    themeColor="textSecondary"
                >
                    Здесь можно добавлять новые разделы приложения.
                </ThemedText>
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
        gap: Spacing.two,
    },
    title: {
        textAlign: "center",
    },
    description: {
        textAlign: "center",
    },
});
