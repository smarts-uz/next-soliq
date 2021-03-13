import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Select from "react-select";
import axios from "axios";
import { useRouter } from "next/router";
import { validateForm } from "../../unlits/validate-form";
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
        .post(
          `/api/Datas/${props.data ? "put" : "create"}`,
          props.data ? { id: props.data.id, value: values } : values
        )
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
      operator: props.data ? props.data.operator : "",
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
    };
    formik.setValues(data);
  }, [props.data]);

  const router = useRouter();

  const handleStirChange = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await axios
        .post(
          `/api/Person/${
            formik.values.type === types[0].value ? "fiz" : "yur"
          }`,
          {
            inn: formik.values.inn,
          }
        )
        .then(async (res) => {
          const obl = [];
          const ray = [];

          await axios
            .post("/api/Location/provinces", {
              obl: res.data.data.ns10_code,
            })
            .then((response) => {
              obl.push(response.data[0]);
            });

          await axios
            .post("/api/Location/destrict", {
              ray: res.data.data.ns10_code,
            })
            .then((response) => {
              ray.push(response.data[0]);
            });

          if (res.data.success === false) {
            alert("Ushbu INN Buyicha Malumot Topilmadi");
          } else {
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
            };
            formik.setValues(NewData);
          }
        });
    }
    // else if (e.key === 'Enter' && formik.values.type === types[0].value) {
    //   e.preventDefault();
    //   await axios.post('/api/Person/fiz', {
    //     inn: formik.values.inn,
    //   }).then(async (res) => {
    //     const obl = []
    //     const ray = []

    //     console.log(ray)

    //     await axios.post("/api/Location/provinces", {
    //       obl: res.data.data.ns10_code
    //     }).then(response => { obl.push(response.data[0]) })

    //     await axios.post("/api/Location/destrict", {
    //       ray: res.data.data.ns10_code
    //     }).then(response => { ray.push(response.data[0]) })

    //     if (res.data.success === false) {
    //       alert("Ushbu INN Buyicha Malumot Topilmadi")
    //     } else {
    //       const NewData = {
    //         operator: formik.values.operator,
    //         fio: formik.values.fio,
    //         referenceContent: formik.values.referenceContent,
    //         inn: formik.values.inn,
    //         type: formik.values.type,
    //         author: res.data.data.company_name,
    //         province: obl[0].name_uz,
    //         destrict: ray[0].name_uz,
    //         address: res.data.data.adress,
    //         phone: formik.values.phone,
    //         email: formik.values.email,
    //         category: formik.values.category,
    //         underCategory: formik.values.underCategory,
    //         theme: formik.values.theme,
    //         reviewResult: formik.values.reviewResult,
    //         comment: formik.values.comment,
    //       }
    //       formik.setValues(NewData)
    //     }
    //   })
    // }
  };

  return (
    <div className="w-full bg-white">
      <form
        onSubmit={formik.handleSubmit}
        className="grid gap-4 md:grid-cols-12 sm:grid-cols-12 xl:grid-cols-12"
      >
        <div className="md:col-span-12 py-5 px-6 lg:col-span-12 sm:col-span-12 grid md:grid-cols-12 sm:grid-cols-12 xl:grid-cols-12 gap-4">
          <div className="md:col-span-12 xl:col-span-6 sm:col-span-12 relative">
            <label htmlFor="operator">
              Оператор:<span className="text-red-600 font-extrabold"> *</span>{" "}
            </label>
            {formik.touched.operator && formik.errors.operator ? (
              <div className="text-red-900 font-bold inline-block absolute right-0">
                {formik.errors.operator}
              </div>
            ) : null}
            <input
              type="text"
              className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
              name="operator"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.operator}
            />
          </div>

          <div className="md:col-span-12 xl:col-span-6 sm:col-span-12 relative">
            <label htmlFor="fio">
              Ф.И.О:<span className="text-red-600 font-extrabold"> *</span>{" "}
            </label>
            {formik.touched.fio && formik.errors.fio ? (
              <div className="text-red-900 font-bold inline-block absolute right-0">
                {formik.errors.fio}
              </div>
            ) : null}
            <input
              type="text"
              className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
              name="fio"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.fio}
            />
          </div>
        </div>

        <div className="px-6 md:col-span-12 lg:col-span-12 sm:col-span-12 relative">
          <label htmlFor="referenceContent">
            Содержание обращения:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.referenceContent && formik.errors.referenceContent ? (
            <div className="text-red-900 font-bold inline-block absolute right-6">
              {formik.errors.referenceContent}
            </div>
          ) : null}
          <textarea
            rows={4}
            className="w-full  rounded border-2 focus:border-blue-500 border-gray-300 px-4 py-2 focus:outline-none"
            name="referenceContent"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.referenceContent}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="type">
            Типы:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.type && formik.errors.type ? (
            <div className="text-red-900 font-bold inline-block absolute right-6">
              {formik.errors.type}
            </div>
          ) : null}
          <Select
            id="type"
            name="type"
            options={types}
            value={types.filter((opt) => opt.label === formik.values.type)}
            onBlur={() => {
              formik.setFieldTouched("type", true);
            }}
            onChange={(opt) => {
              formik.setFieldValue("type", opt.value);
            }}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="inn">
            STIR:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.inn && formik.errors.inn ? (
            <div className="text-red-900 font-bold inline-block absolute right-6">
              {formik.errors.inn}
            </div>
          ) : null}
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
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="author">
            Автор обращения:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.author && formik.errors.author ? (
            <div className="text-red-900 font-bold inline-block absolute right-6">
              {formik.errors.author}
            </div>
          ) : null}

          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="author"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.author}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="province">
            Область:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.province && formik.errors.province ? (
            <div className="text-red-900 font-bold inline-block absolute right-6">
              {formik.errors.province}
            </div>
          ) : null}
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="province"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.province}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="destrict">
            Район/город:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.destrict && formik.errors.destrict ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.destrict}
            </div>
          ) : null}
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="destrict"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.destrict}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="address">
            Адрес:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.address}
            </div>
          ) : null}
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="category">
            Категория:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.category}
            </div>
          ) : null}
          <Select
            id="category"
            name="category"
            options={categories}
            value={categories.filter(
              (opt) => opt.label === formik.values.category
            )}
            onBlur={() => {
              formik.setFieldTouched("category", true);
            }}
            onChange={(opt) => {
              getSelectByIdForCategory(opt);
              formik.setFieldValue("category", opt.value);
            }}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="underCategory">
            Под категория:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.underCategory && formik.errors.underCategory ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.underCategory}
            </div>
          ) : null}
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
            value={underCategories.filter(
              (opt) => opt.label === formik.values.underCategory
            )}
            onBlur={() => {
              formik.setFieldTouched("underCategory", true);
            }}
            onChange={(opt) => {
              getSelectByIdForUnderCategory(opt);
              formik.setFieldValue("underCategory", opt.value);
            }}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="theme">
            Тема:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.theme && formik.errors.theme ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.theme}
            </div>
          ) : null}
          <Select
            id="theme"
            name="theme"
            options={
              formik.values.underCategory ? themes : [{ value: "", label: "" }]
            }
            value={themes.filter((opt) => opt.label === formik.values.theme)}
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
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="phone">
            Телефон:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.phone}
            </div>
          ) : null}
          <input
            type="tel"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="phone"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>

        <div className="px-6 lg:col-span-6 xl:col-span-4 sm:col-span-12 relative">
          <label htmlFor="email">
            email:<span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.email}
            </div>
          ) : null}
          <input
            type="email"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="email"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <hr className="col-span-12 hidden lg:block  xl:block 2xl:block lg:block" />
        <div className="px-6 md:col-span-12 xl:col-span-5 sm:col-span-12 relative">
          <label htmlFor="reviewResult">
            Результат рассмотрения:
            <span className="text-red-600 font-extrabold"> *</span>{" "}
          </label>
          {formik.touched.reviewResult && formik.errors.reviewResult ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.reviewResult}
            </div>
          ) : null}
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="reviewResult"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.reviewResult}
          />
        </div>

        <div className="px-6 md:col-span-12 xl:col-span-7 sm:col-span-12 relative">
          <label htmlFor="comment">
            Примечание: <span className="text-red-600 font-extrabold"> *</span>
          </label>
          {formik.touched.comment && formik.errors.comment ? (
            <div className="text-red-900 font-bold inline-block  absolute right-6">
              {formik.errors.comment}
            </div>
          ) : null}
          <input
            type="text"
            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
            name="comment"
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.comment}
          />
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
