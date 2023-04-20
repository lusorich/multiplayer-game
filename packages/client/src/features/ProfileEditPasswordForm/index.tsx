
import { StyledButton } from 'shared/ui/Styled';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useChangeUserPasswordMutation } from 'app/store/api/users/usersApi';
import { yupSchemaProfileEditPasswordForm as schema } from 'shared/const/validate';
import { yupResolver } from '@hookform/resolvers/yup';
import { PAGES } from 'app/lib/routes.types';

import { helpingDataInputs } from './helpingDataInputs';

import s from './index.module.scss';

export const ProfileEditPasswordForm = () => {
  const navigate = useNavigate();

  const [changeUserPassword] = useChangeUserPasswordMutation();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IProfileEditPassword>({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: IProfileEditPassword) => {
    console.log(data);
    // ------------ API ИЗМЕНИТЬ ДАННЫЕ -------------
    // ЗАПРОС НА ИЗМЕНЕНИЕ ПАРОЛЯ

    const response = await changeUserPassword({
      oldPassword: data.oldpassword,
      newPassword: data.password,
    });

    const isError = 'error' in response;

    if (isError) {
      alert('что-то пошло не так, попробуйте еще раз');
    } else {
      navigate(PAGES.PROFILE);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
      className={s.myForm}>
      {helpingDataInputs.map(input => (
        <div key={input.name} className={s.wrapLabelInputMsg}>
          <div className={s.myWrapInput}>
            <label htmlFor={input.name} className={s.myInputLabel}>
              {input.label}
            </label>
            <input
              className={s.myInput}
              type={input.type}
              placeholder={input.placeholder}
              {...register(input.name)}
            />
          </div>
          {errors[input.name]?.message && (
            <div className={s.msg}>{errors[input.name]?.message as string}</div>
          )}
        </div>
      ))}
      <StyledButton type="submit" extendClass={s.btnSubmit}>
        Сохранить
      </StyledButton>
    </form>
  );
};
