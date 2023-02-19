import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {HeaderTitle} from '../components/HeaderTitle';
import {useForm} from '../hooks/useForm';
import {appTheme} from '../theme/appTheme';

export const TextInputScreen = () => {
  // const [form, setForm] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  // });

  // const onChange = (value: string, field: keyof typeof form) => {
  //   setForm({
  //     ...form,
  //     [field]: value,
  //   });
  // };

  const {formState, onChange} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={appTheme.globalMargin}>
            <HeaderTitle title="TextInputs" />
            <TextInput
              style={styles.input}
              placeholder="Your name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => onChange(value, 'name')}
            />
            <TextInput
              style={styles.input}
              placeholder="Your Email"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => onChange(value, 'email')}
              keyboardType="email-address"
            />

            <View style={styles.subscribe}>
              <Text style={styles.switchText}>Subscribe</Text>
              <CustomSwitch
                isOn={formState.isSubscribed}
                onChange={val => onChange(val, 'isSubscribed')}
              />
            </View>

            <HeaderTitle title={JSON.stringify(formState, null, 3)} />

            <HeaderTitle title={JSON.stringify(formState, null, 3)} />

            <TextInput
              style={styles.input}
              placeholder="Your phone"
              onChangeText={value => onChange(value, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={styles.spacer} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  spacer: {
    height: 100,
  },
  subscribe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  switchText: {
    fontSize: 25,
  },
});
