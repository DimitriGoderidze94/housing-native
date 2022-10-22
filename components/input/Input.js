import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
    const [focus, setFocus] = useState(false);

    const inputHandler = (userText) => {
        props.inputHandler(userText);
    }
    return (
        <TextInput onChangeText={inputHandler} style={[styles.input, focus ? styles.inputOnFocus : styles.inputOnBlur]}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}>
        </TextInput>
    );
}

export default Input;

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '100%',
        marginRight: 8,
        paddingHorizontal: 14,
        borderRadius: 14,
        borderColor: '#eceff5',
        height: 50,
        borderWidth: 2
    },
    inputOnFocus: { borderColor: '#000' },
    inputOnBlur: { borderColor: '#cccccc' }
});
