import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import axios from "axios";
import { useRouter } from "next/router";
import { validateForm } from '../../untils/validate-form'
import { data } from "autoprefixer";

const BasicWithHTML = (props) => {
  // console.log(props.data);
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
  const formik = useFormik({
    initialValues: {
      operator: props.data ? props.data.author : "",
      fio: props.data ? props.data.fio : "",
      referenceContent: props.data ? props.data.referenceContent : "",
      inn: props.data ? props.data.inn : "",
      type: props.data ? props.data.type : "",
      author: props.data ? props.data.author : "",
      province: props.data ? props.data.province : "",
      destrict: props.data ? props.data.destrict : "",
      address: props.data ? props.data.address : "",
      phone: props.data ? props.data.phone : "",
      email: props.data ? props.data.email : "",
      category: props.data ? props.data.category : "",
      underCategory: props.data ? props.data.underCategory : "",
      theme: props.data ? props.data.theme : "",
      reviewResult: props.data ? props.data.reviewResult : "",
      comment: props.data ? props.data.comment : "",
    },

    validationSchema: validateForm,

    onSubmit: async (values) => {
      await axios
        .post(`/api/Datas/${props.data ? "put" : "create"}`, props.data ? { id: props.data.id, value: values } : values)
        .then((res) => {
          router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
  useEffect(() => {
    const data = {
      operator: props.data ? props.data.operator : props.user ? props.user.username : '',
      fio: props.data ? props.data.fio : props.user ? props.user.fullname : '',
      referenceContent: props.data ? props.data.referenceContent : "",
      inn: props.data ? props.data.inn : "",
      type: props.data ? props.data.type : "",
      author: props.data ? props.data.author : "",
      province: props.data ? props.data.province : "",
      destrict: props.data ? props.data.destrict : "",
      address: props.data ? props.data.address : "",
      phone: props.data ? props.data.phone : "",
      email: props.data ? props.data.email : "",
      category: props.data ? props.data.category : "",
      underCategory: props.data ? props.data.underCategory : "",
      theme: props.data ? props.data.theme : "",
      reviewResult: props.data ? props.data.reviewResult : "",
      comment: props.data ? props.data.comment : "",
    };
    formik.setValues(data)
  }, [props.data]);


  const router = useRouter();

  const handleStirChange = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      await axios.post(`/api/Person/${formik.values.type === types[0].value ? 'fiz' : 'yur'}`, {
        inn: formik.values.inn,
      }).then(async (res) => {
        const obl = []
        const ray = []

        if (res.data.success !== false) {
          await axios.post("/api/Location/provinces", {
            obl: res.data.data.ns10_code
          }).then(response => { obl.push(response.data[0]) })

          await axios.post("/api/Location/destrict", {
            ray: res.data.data.ns10_code
          }).then(response => { ray.push(response.data[0]) })

          const NewData = {
            operator: formik.values.operator,
            fio: formik.values.fio,
            referenceContent: formik.values.referenceContent,
            inn: formik.values.inn,
            type: formik.values.type,
            author: res.data.data.company_name,
            province: obl[0].name_uz,
            destrict: ray[0].name_uz,
            address: res.data.data.adress,
            phone: formik.values.phone,
            email: formik.values.email,
            category: formik.values.category,
            underCategory: formik.values.underCategory,
            theme: formik.values.theme,
            reviewResult: formik.values.reviewResult,
            comment: formik.values.comment,
          }
          formik.setValues(NewData)

        } else {
          alert("Ushbu INN Buyicha Malumot Topilmadi")
        }
      })
    }

  }

  return (
    <div className="w-full bg-white">
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-4 md:grid-cols-12 sm:grid-cols-12 xl:grid-cols-12"
      >
        <div className="md:col-span-12 bg-blue-500 py-5 px-6 lg:col-span-12 sm:col-span-12 grid md:grid-cols-12 sm:grid-cols-12   xl:grid-cols-12 gap-4">
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
        </div>

        <div className="px-6 md:col-span-12 lg:col-span-12 sm:col-span-12">
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="type">
            Типы:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="type"
            name="type"
            options={types}
            value={types.filter(opt => opt.label === formik.values.type)}
            onBlur={() => {
              formik.setFieldTouched("type", true);
            }}
            onChange={(opt) => {
              formik.setFieldValue("type", opt.value);
            }}
          />
          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-900 font-bold">{formik.errors.type}</div>
          ) : null}
        </div>

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="inn">
            STIR:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <input
            type="number"
            min={0}
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="inn"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.inn}
            onKeyPress={handleStirChange}
          />
          {formik.touched.inn && formik.errors.inn ? (
            <div className="text-red-900 font-bold">{formik.errors.inn}</div>
          ) : null}
        </div>

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="category">
            Категория:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="category"
            name="category"
            options={categories}
            value={categories.filter(opt => opt.label === formik.values.category)}
            onBlur={() => {
              formik.setFieldTouched("category", true);
            }}
            onChange={(opt) => {
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="underCategory">
            Под категория:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="underCategory"
            name="underCategory"
            onFocus={() => {
              if (!formik.values.category) {
                alert("Iltimos kategoriyani tanlang!!!");
                return;
              }
            }}
            options={
              formik.values.category
                ? underCategories
                : [{ value: " ", label: " " }]
            }
            value={underCategories.filter(opt => opt.label === formik.values.underCategory)}
            onBlur={() => {
              formik.setFieldTouched("underCategory", true);
            }}
            onChange={(opt) => {
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
          <label htmlFor="theme">
            Тема:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          <Select
            id="theme"
            name="theme"
            options={
              formik.values.underCategory ? themes : [{ value: "", label: "" }]
            }
            value={themes.filter(opt => opt.label === formik.values.theme)}
            onFocus={() => {
              if (!formik.values.underCategory) {
                alert("Iltimos kategoriya ostini tanlang!!!");
                return;
              }
            }}
            onBlur={() => {
              formik.setFieldTouched("theme", true);
            }}
            onChange={(opt) => {
              formik.setFieldValue("theme", opt.value);
            }}
          />
          {formik.touched.theme && formik.errors.theme ? (
            <div className="text-red-900 font-bold">{formik.errors.theme}</div>
          ) : null}
        </div>
        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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

        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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
        <div className="px-6 md:col-span-6 lg:col-span-4 sm:col-span-12">
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

        <div className="px-6 md:col-span-12 lg:col-span-8 sm:col-span-12">
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
            onClick={formik.isValid ? props.closeModal : null}
            type="submit"
            className="text-blue-600 border-blue-600 bg-white  hover:text-white hover:bg-blue-600 hover:border-blue-900 border-2 font-bold transition duration-300 ease-in-out px-3 py-2"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicWithHTML;
