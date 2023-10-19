import React from 'react';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PassowrdInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {RootStackParamList} from '../../../routes/Routes';
import {useForm, Controller} from 'react-hook-form';
import {LoginSchema, loginSchema} from './loginSchema';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

type LoginFormType = {
  email: string;
  password: string;
};

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }
  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }
  function submitForm({email, password}: LoginFormType) {
    console.log(email);
    console.log(password);
  }

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <Controller
        control={control}
        name="email"
        render={({field, fieldState}) => (
          <>
            <TextInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="E-mail"
              placeholder="Digite seu e-mail"
              boxProps={{mb: 's20'}}
            />
          </>
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field, fieldState}) => (
          <>
            <PasswordInput
              errorMessage={fieldState.error?.message}
              value={field.value}
              onChangeText={field.onChange}
              label="Senha"
              placeholder="Digite sua senha"
              boxProps={{mb: 's20'}}
            />
          </>
        )}
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        preset="outline"
        marginTop="s12"
        title="Criar uma conta"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}
