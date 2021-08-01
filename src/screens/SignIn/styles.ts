import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.background
    },
    image: {
        height: 360,
        width: '100%',        
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 40,
        marginBottom: 16,
    },    
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 64,
    }
});