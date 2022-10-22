import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from "react";


import Input from "../../components/input/Input";
import CheckBox from '../../components/checkbox/Checkbox';


const Login = () => {
    const [rememberPassword, setRememberPassword] = useState(false);
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const alertRegister = () => {
        alert("რეგისტრაცია");
    };

    const alertPassRenew = () => {
        alert("პაროლის აღდგენა");
    };
    const passwordHandler = (userText) => {
        setPassword(userText);
    };

    const emailHandler = (userText) => {
        setemail(userText);
    };

    const login = () => {
        alert("ელ.ფოსტა : " + email + ", პაროლი : " + password);
    }


    return (
        <View style={styles.loginContainer}>
            <View style={styles.mainImageContainer}>
                <Image style={styles.mainImage} source={require("../../assets/images/main/logo.png")} />
            </View>
            <View style={styles.heading}>
                <Text style={styles.headingText}>
                    ავტორიზაცია
                </Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        ელ.ფოსტა
                    </Text>
                    <Input inputHandler={passwordHandler} />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>
                        პაროლი
                    </Text>
                    <Input inputHandler={emailHandler} />
                </View>
                <View style={styles.forgotContainer}>
                    <Text style={styles.forgot}>
                        დაგავიწყდა პაროლი?
                    </Text>
                    <Text onPress={alertPassRenew} style={[styles.forgot, styles.link]}>
                        პაროლის აღდგენა
                    </Text>
                </View>
                <CheckBox
                    onPress={() => setRememberPassword(!rememberPassword)}
                    title="დამახსოვრება"
                    isChecked={rememberPassword}
                />
                <View style={styles.logginButton}>
                    <Text onPress={login} style={styles.loginButtonText}>
                        შესვლა
                    </Text>
                </View>
            </View>
            <View style={styles.registerContainer}>
                <Text style={styles.register}>
                    არ ხარ რეგისტრირებული?
                </Text>
                <Text onPress={alertRegister} style={[styles.register, styles.link]}>
                    რეგისტრაცია
                </Text>
            </View>
        </View>
    );
}

export default Login;

const styles = StyleSheet.create({
    loginContainer: {
        padding: 10,
        justifyContent: "center",
        height: "100%"
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10
    },
    headingText: {
        color: "#9691a4"
    },
    mainImageContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    mainImage: {
        width: 200,
        height: 100,
        resizeMode: 'stretch',
    },
    formContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 14,
        marginBottom: 30
    },
    inputContainer: {
        marginBottom: 10
    },
    label: {
        color: '#666276',
        marginBottom: 5,
        fontSize: 14,
        fontWeight: "bold"
    },
    forgotContainer: {
        fontSize: 11,
        flexDirection: 'row'
    },
    link: {
        color: '#fd5631',
        marginLeft: 7
    },
    logginButton: {
        backgroundColor: '#07c98b',
        width: 100,
        justifyContent: "center",
        marginVertical: 20,
        height: 40,
        alignItems: "center",
        borderRadius: 14
    },
    loginButtonText: {
        color: "#fff",
        fontWeight: '500'
    },
    registerContainer: {
        fontSize: 16,
        flexDirection: "row",
        justifyContent: 'center',
    },
    register: {
        fontSize: 15
    },
    fakeContainer: {
        height: 40,
        width: "100%",
        alignItems: "center"
    }
});
