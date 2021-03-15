import "yup-phone";
import * as Yup from "yup";


export const validateForm = () => {
  return Yup.object({
    operator: Yup.string()
      .min(6, "Оператор должен состоять не менее чем из 6 символов")
      .max(50, "Оператор должен состоять не более чем из 50 символов")
      .required("Оператор является обязательным полем"),
    fio: Yup.string()
      .min(6, "Ф.И.О должен состоять не менее чем из 6 символов")
      .max(50, "Ф.И.О должен состоять не более чем из 50 символов")
      .required("Ф.И.О является обязательным полем"),
    referenceContent: Yup.string()
      .min(100, "Содержание обращения должно содержать не менее 100 символов")
      .max(
        1024,
        "Содержание обращения должен состоять не более чем из 50 символов"
      )
      .required("Обязательное поле"),
    inn: Yup.number()
      .min(6, "Слишком коротко!")
      .max(999999999999, "Слишком Долго!")
      .required("Обязательное поле"),
    type: Yup.string()
      .min(3, "Слишком коротко!")
      .max(50, "Слишком Долго!")
      .required("Обязательное поле"),
    passport_series: Yup.string()
      .length(2)
      .uppercase(),
    passport_number: Yup.string()
      .length(7),
      
    author: Yup.string()
      .min(3, "Слишком коротко!")
      .max(100, "Слишком Долго!")
      .required("Обязательное поле"),
    province: Yup.string()
      .min(3, "Слишком коротко!")
      .max(50, "Слишком Долго!")
      .required("Обязательное поле"),
    destrict: Yup.string()
      .min(3, "Слишком коротко!")
      .max(50, "Слишком Долго!")
      .required("Обязательное поле"),
    address: Yup.string()
      .min(3, "Слишком коротко!")
      .max(50, "Слишком Долго!")
      .required("Обязательное поле"),
    phone: Yup.string()
      .phone("UZ")
      .required(
        "Телефон должен быть действующим номером телефона для региона Узбекистан"
      ),
    email: Yup.string()
      .email("Неверный адрес электронной почты")
      .required("Обязательное поле"),
    category: Yup.string().required("Обязательное поле!"),
    underCategory: Yup.string().required("Обязательное поле!"),
    theme: Yup.string().required("Обязательное поле!"),
    reviewResult: Yup.string().required("Обязательное поле!"),
    comment: Yup.string().min(100).max(1024).required("Обязательное поле!"),
  });
}

export const validateReg = () => {
  return Yup.object({
    username: Yup.string().required(),
    password: Yup.string().min(5).required(),
  })
}