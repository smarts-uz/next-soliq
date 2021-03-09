import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "react-select";
import axios from "axios";
import { useRouter } from "next/router";
import "yup-phone";
const BasicWithHTML = (props) => {
  const getSelects = (datas) => {
    let arr = [];
    datas?.map((data) => {
      arr.push({ value: data.name, label: data.name });
    });

    return arr;
  };

  const getSelectTypes = (datas) => {
    let arr = [];
    datas?.map((data) => {
      arr.push({ value: data.uzbek, label: data.uzbek });
    });

    return arr;
  };
  const [categories, setCategories] = useState(getSelects(props?.categories));
  const [underCategories, setUnderCategories] = useState(
    getSelects(props?.underCategories)
  );
  const [themes, setThemes] = useState(getSelects(props.themes));
  const [types, setTypes] = useState(getSelectTypes(props.types));

  const getSelectByIdForCategory = (e) => {
    const cate = props.categories.filter((category) => {
      return e.value == category.name;
    });

    const values = props.underCategories.filter((underCate) => {
      return underCate.categoryId == cate[0].id;
    });
    setUnderCategories(getSelects(values));
  };

  const getSelectByIdForUnderCategory = (e) => {
    const cate = props.underCategories.filter((underCate) => {
      return e.value == underCate.name;
    });

    const values = props.themes.filter((theme) => {
      return theme.underCategoryId == cate[0].id;
    });

    setThemes(getSelects(values));
  };

  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      operator: "",
      fio: "",
      // numberOfCalls: '',
      // history: '',
      referenceContent: "",
      inn: "",
      type: "",
      author: "",
      province: "",
      destrict: "",
      address: "",
      phone: "",
      email: "",
      category: "",
      underCategory: "",
      theme: "",
      reviewResult: "",
      comment: "",
    },
    validationSchema: Yup.object({
      operator: Yup.string()
        .min(6,"Оператор должен состоять не менее чем из 6 символов")
        .max(50,"Оператор должен состоять не более чем из 50 символов")
        .required("Оператор является обязательным полем"),
      fio: Yup.string()
        .min(6,"Ф.И.О должен состоять не менее чем из 6 символов")
        .max(50,"Ф.И.О должен состоять не более чем из 50 символов")
        .required("Ф.И.О является обязательным полем"),
      // numberOfCalls: Yup.string()
      //     .min(6)
      //     .max(50)
      //     .required(),
      // history: Yup.string()
      //     .min(6)
      //     .max(50)
      //     .required(),
      referenceContent: Yup.string()
        .min(100,"Содержание обращения должно содержать не менее 100 символов")
        .max(1024,"Содержание обращения должен состоять не более чем из 50 символов")
        .required("Обязательное поле"),
      inn: Yup.number()
        .min(6, "Слишком коротко!")
        .max(999999999999, "Слишком Долго!")
        .required("Обязательное поле"),
      type: Yup.string()
        .min(3, "Слишком коротко!")
        .max(50, "Слишком Долго!")
        .required("Обязательное поле"),

      author: Yup.string()
        .min(3, "Слишком коротко!")
        .max(50, "Слишком Долго!")
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
      phone: Yup.string().phone("UZ").required("Телефон должен быть действующим номером телефона для региона Узбекистан"),
      email: Yup.string().email("Неверный адрес электронной почты").required("Обязательное поле"),
      category: Yup.string().required("Обязательное поле!"),
      underCategory: Yup.string().required("Обязательное поле!"),
      theme: Yup.string().required("Обязательное поле!"),
      reviewResult: Yup.string().required("Обязательное поле!"),
      comment: Yup.string().min(100).max(1024).required("Обязательное поле!"),
    }),
    onSubmit: async (values) => {
        console.log("start")
      await axios
        .post("/api/Datas/create", values)
        .then((res) => {
          console.log("Hi");
          router.push("/containers/Form/dataTable");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  return (
    <div className="container mx-auto md:w-4/5 xl:w-3/5">
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-4  md:grid-cols-12 sm:grid-cols-12 sm:px-4  xl:grid-cols-12 px-8 py-10"
      >
        <div className="md:col-span-12 bg-blue-300 py-10 px-6 lg:col-span-12 sm:col-span-12 grid md:grid-cols-12 sm:grid-cols-12   xl:grid-cols-12 gap-4">
          <div className="md:col-span-6 lg:col-span-6 sm:col-span-12">
            <label htmlFor="operator">
              Оператор:<span className="text-red-600 font-extrabold"> *</span>{" "}
            </label>
            <input
              type="text"
              className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
              name="operator"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.operator}
            />
            {formik.touched.operator && formik.errors.operator ? (
              <div className="text-red-900 font-bold">
                {formik.errors.operator}
              </div>
            ) : null}
          </div>

          <div className="md:col-span-6 lg:col-span-6 sm:col-span-12">
            <label htmlFor="fio">
              Ф.И.О:<span className="text-red-600 font-extrabold"> *</span>{" "}
            </label>
            <input
              type="text"
              className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
              name="fio"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.fio}
            />
            {formik.touched.fio && formik.errors.fio ? (
              <div className="text-red-900 font-bold">{formik.errors.fio}</div>
            ) : null}
          </div>

          {/* <div className="md:col-span-6 lg:col-span-3 sm:col-span-12">
            <label htmlFor="numberOfCalls">
              Количество звонков:
              <span className="text-red-600 font-extrabold"> *</span>{" "}
            </label>
            <input
              type="text"
              className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
              name="numberOfCalls"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.numberOfCalls}
            />
            {formik.touched.numberOfCalls && formik.errors.numberOfCalls ? (
              <div className="text-red-900 font-bold">
                {formik.errors.numberOfCalls}
              </div>
            ) : null}
          </div> */}

          {/* <div className="md:col-span-6 lg:col-span-3 sm:col-span-12">
            <label htmlFor="history">
              История:<span className="text-red-600 font-extrabold"> *</span>{" "}
            </label>
            <input
              type="text"
              className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
              name="history"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.history}
            />
            {formik.touched.history && formik.errors.history ? (
              <div className="text-red-900 font-bold">
                {formik.errors.history}
              </div>
            ) : null}
          </div> */}
        </div>

        <div className="md:col-span-12 lg:col-span-12 sm:col-span-12">
          <label htmlFor="referenceContent">
            Содержание обращения:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <textarea
            rows={4}
            className="w-full  rounded border-2 focus:border-blue-500 border-gray-300 px-4 py-2 focus:outline-none"
            name="referenceContent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.referenceContent}
          />
          {formik.touched.referenceContent && formik.errors.referenceContent ? (
            <div className="text-red-900 font-bold">
              {formik.errors.referenceContent}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="inn">
            STIR:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="number"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="inn"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.inn}
          />
          {formik.touched.inn && formik.errors.inn ? (
            <div className="text-red-900 font-bold">{formik.errors.inn}</div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="type">
            Типы:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="type"
            name="type"
            options={types}
            // onChange={formik.handleChange}
            onBlur={() => {
              formik.setFieldTouched("type", true);
            }}
            onChange={(opt, e) => {
              console.log(opt, e);

              formik.setFieldValue("type", opt.value);
            }}
          />
          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-900 font-bold">{formik.errors.type}</div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="author">
            Автор обращения:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>

          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="author"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.author}
          />

          {formik.touched.author && formik.errors.author ? (
            <div className="text-red-900 font-bold">{formik.errors.author}</div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="province">
            Область:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="province"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.province}
          />

          {formik.touched.province && formik.errors.province ? (
            <div className="text-red-900 font-bold">
              {formik.errors.province}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="destrict">
            Район/город:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="destrict"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.destrict}
          />
          {formik.touched.destrict && formik.errors.destrict ? (
            <div className="text-red-900 font-bold">
              {formik.errors.destrict}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="address">
            Адрес:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-900 font-bold">
              {formik.errors.address}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="category">
            Категория:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="category"
            name="category"
            options={categories}
            // onChange={formik.handleChange}
            onBlur={() => {
              formik.setFieldTouched("category", true);
            }}
            onChange={(opt, e) => {
              console.log(opt, e);
              getSelectByIdForCategory(opt);
              formik.setFieldValue("category", opt.value);
            }}
          />
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-900 font-bold">
              {formik.errors.category}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="underCategory">
            Под категория:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="underCategory"
            name="underCategory"
            onFocus={() => {
              if (!formik.values.category) {
                alert("Пожалуйста, выберите категорию!!!");
                return;
              }
            }}
            options={
              formik.values.category
                ? underCategories
                : [{ value: " ", label: " " }]
            }
            // onChange={formik.handleChange}
            onBlur={() => {
              formik.setFieldTouched("underCategory", true);
            }}
            onChange={(opt, e) => {
              console.log(opt, e);
              getSelectByIdForUnderCategory(opt);
              formik.setFieldValue("underCategory", opt.value);
            }}
          />
          {formik.touched.underCategory && formik.errors.underCategory ? (
            <div className="text-red-900 font-bold">
              {formik.errors.underCategory}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="theme">
            Тема:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="theme"
            name="theme"
            options={
              formik.values.underCategory ? themes : [{ value: "", label: "" }]
            }
            onFocus={() => {
              if (!formik.values.underCategory) {
                alert("Пожалуйста, выберите подкатегорию!!!");
                return;
              }
            }}
            // onChange={formik.handleChange}
            onBlur={() => {
              formik.setFieldTouched("theme", true);
            }}
            onChange={(opt, e) => {
              console.log(opt, e);
              formik.setFieldValue("theme", opt.value);
            }}
          />
          {formik.touched.theme && formik.errors.theme ? (
            <div className="text-red-900 font-bold">{formik.errors.theme}</div>
          ) : null}
        </div>
        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="phone">
            Телефон:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="tel"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-900 font-bold">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="email">
            email:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="email"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-900 font-bold">{formik.errors.email}</div>
          ) : null}
        </div>

        <hr className="col-span-12 hidden lg:block  xl:block 2xl:block lg:block" />
        <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="reviewResult">
            Результат рассмотрения:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="reviewResult"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.reviewResult}
          />
          {formik.touched.reviewResult && formik.errors.reviewResult ? (
            <div className="text-red-900 font-bold">
              {formik.errors.reviewResult}
            </div>
          ) : null}
        </div>

        <div className="md:col-span-12 lg:col-span-8 sm:col-span-12">
          <label htmlFor="comment">
            Примечание: <span className="text-red-600 font-extrabold"> *</span>
          </label>
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="comment"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
          {formik.touched.comment && formik.errors.comment ? (
            <div className="text-red-900 font-bold">
              {formik.errors.comment}
            </div>
          ) : null}
        </div>

        <div className="flex justify-around space-x-4 text-center sm:col-start-7 sm:col-end-13     md:col-span-4 md:col-start-9 xl:col-span-2 xl:col-start-6">
          <button
            type="submit"
            className="text-blue-600 border-blue-600 bg-white  hover:text-white hover:bg-blue-600 hover:border-blue-900 border-2 font-bold transition duration-300 ease-in-out px-3 py-2"
          >
            {" "}
            Сохранить
          </button>
          <button
            type="button"
            className="text-yellow-600 border-yellow-600 bg-white hover:text-white hover:bg-yellow-600 hover:border-yellow-900 border-2 font-bold transition duration-300 ease-in-out px-3 py-2"
          >
            {" "}
            Выход
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicWithHTML;
