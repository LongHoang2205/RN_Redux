import { StyleSheet } from 'react-native';

// themes
import { Metrics } from "../../../Themes"

export default StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: Metrics.doubleBaseMargin
    },
    container: {
        width: "100%",
        height: "100%",
    },
    textInputContainer: {
    },
    welcomeBack: {
        fontSize: Metrics.tripleBaseMargin
    },
    appTitle: {
        fontWeight: 'bold',
        fontSize: Metrics.tripleBaseMargin
    },
    titleContainer: {
        marginBottom: Metrics.quintupleBaseMargin
    }
})