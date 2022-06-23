import {
  Alert,
  KeyboardAvoidingView,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Validator from 'email-validator';
import {database} from '../../App';
import {collection, addDoc, getFirestore} from 'firebase/firestore';
import {initializeApp} from 'firebase/app';
const SignUpForm = ({navigation}) => {
  const auth = getAuth();
  const collectionref = collection(database, 'users');
  const SignUpFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    username: Yup.string().required().min(2, 'A username is required'),
    password: Yup.string()
      .required()
      .min(6, 'Your password has to have at least 8 characters'),
  });
  const getRandomuser = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    console.log(data.results[0].picture.large);
    return data.results[0].picture.large;
  };

  const onSignUP = async (email, password, username) => {
    try {
      addDoc(collection(database, 'users'), {
        owner_uid: Math.random(),
        username: username,
        email: email,
        profile_picture: await getRandomuser(),
      }).then(() => {
        Alert.alert('Data Added');
      });

      console.log('succesfully added');
    } catch (error) {
      Alert.alert(error.message[{text: 'okay', style: 'destructive'}]);
    }
  };
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: '', username: ''}}
        onSubmit={values =>
          onSignUP(values.email, values.password, values.username)
        }
        validationSchema={SignUpFormSchema}
        validateOnMount={true}>
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                color="black"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.username.length || values.username.length >= 2
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Username"
                autoCapitalize="none"
                textContentType="username"
                autoFocus={true}
                color="black"
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? '#ccc'
                      : 'red',
                },
              ]}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                color="black"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>
            <View style={styles.signupcontainer}>
              <Text style={{color: 'black'}}>Already have an account?</Text>
              <TouchableOpacity>
                <Text
                  style={{color: '#6BB0F5'}}
                  onPress={() => navigation.goBack()}>
                  {' '}
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    paddingLeft: 8,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },
  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4,
    marginTop: 50,
  }),
  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 18,
  },
  signupcontainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50,
  },
});
