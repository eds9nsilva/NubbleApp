import React from 'react';
import {useForm} from 'react-hook-form';
import {Button} from '../../../components/Button/Button';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {FormTextInput} from '../../../components/Form/FormtextInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

type SignUpFormType = {
  username: string;
  fullname: string;
  email: string;
  password: string;
};

export function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      email: '',
      fullname: '',
      password: '',
      username: '',
    },
    mode: 'onChange',
  });

  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
      },
    });
  }
  return (
    <Screen scrollable canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <FormTextInput
        control={control}
        name="username"
        rules={{required: 'Username obrigatório'}}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullname"
        rules={{required: 'Nome obrigatório'}}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="email"
        rules={{required: 'E-mail obrigatório'}}
        label="E-mail"
        placeholder="Digite seu E-mail"
        boxProps={{mb: 's20'}}
      />
      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's20'}}
      />

      <Button
        onPress={handleSubmit(submitForm)}
        disabled={!formState.isValid}
        title="Criar uma conta"
      />
    </Screen>
  );
}
