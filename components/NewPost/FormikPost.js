import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {USERS} from '../../data/users';
import placeholderimage from '../../assets/placeholderimage.png';
import {Divider} from 'react-native-elements';
import validUrl from 'valid-url';
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit.'),
});
const placeholder_image = 'https://i.ibb.co/KKWrJyb/placeholderimage.png';
const FormikPost = ({navigation}) => {
  const [thumbnailUrl, setThumbnailurl] = useState('');
  return (
    <Formik
      initialValues={{caption: '', imageUrl: ''}}
      onSubmit={values => {
        console.log(values);
        console.log('Your Post was submited succesfully');
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}>
      {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl) ? thumbnailUrl : placeholder_image,
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{flex: 1, marginLeft: 12}}>
              <TextInput
                style={{color: 'white', fontSize: 20}}
                placeholder="Write a Caption"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />
          <TextInput
            onChange={e => setThumbnailurl(e.nativeEvent.text)}
            style={{color: 'white', fontSize: 18}}
            placeholder="Enter Image URL"
            placeholderTextColor="gray"
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{fontSize: 10, color: 'red'}}>{errors.imageUrl}</Text>
          )}
          <Button onPress={handleSubmit} title="share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPost;

const styles = StyleSheet.create({});
