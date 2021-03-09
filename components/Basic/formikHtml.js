import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import axios from 'axios';
import { useRouter } from "next/router";
import "yup-phone";




const BasicWithHTML = (props) => {
    console.log(props.data);
    
    
    const getSelects = (datas) => {
        
        let arr = [];
        datas?.map(data => {
            arr.push({ value: data.name, label: data.name });
        })

        return arr;


    }

    const getSelectTypes = (datas) => {
        let arr = [];
        datas?.map(data => {
            arr.push({ value: data.uzbek, label: data.uzbek });
        })

        return arr;
    }
    const [categories, setCategories] = useState(getSelects(props?.categories));
    const [underCategories, setUnderCategories] = useState(getSelects(props?.underCategories));
    const [themes, setThemes] = useState(getSelects(props.themes));
    const [types, setTypes] = useState(getSelectTypes(props.types));


    const getSelectByIdForCategory = (e) => {
        const cate = props.categories.filter(category => {
            return e.value == category.name;
        });

        const values = props.underCategories.filter(underCate => {
            return underCate.categoryId == cate[0].id;
        }
        );
        setUnderCategories(getSelects(values));
    }

    const getSelectByIdForUnderCategory = (e) => {
        const cate = props.underCategories.filter(underCate => {
            return e.value == underCate.name;
        });

        const values = props.themes.filter(theme => {
            return theme.underCategoryId == cate[0].id;
        }
        );

        setThemes(getSelects(values));
    }

    useEffect(() => {
        console.log(props.data, formik.initialValues);
        formik.initialValues =  {
            operator: props.data?.author,
            fio: props.data ? props.data.fio: '',
            // numberOfCalls: '',
            // history: '',
            referenceContent: props.data ? props.data.referenceContent: '',
            inn: props.data ? props.data.inn: 'fsdfhkwejrhdsfj',
            type: props.data ? props.data.type: '',
            author: props.data ? props.data.author: '',
            province: props.data ? props.data.province: '',
            destrict: props.data ? props.data.destrict: '',
            address: props.data ? props.data.address: '',
            phone: props.data ? props.data.phone: '',
            email: props.data ? props.data.email: '',
            category: props.data ? props.data.category: '',
            underCategory: props.data ? props.data.underCategory: '',
            theme: props.data ? props.data.theme: '',
            reviewResult: props.data ? props.data.reviewResult: '',
            comment: props.data ? props.data.comment: ''
        }
    }, []);
    const router = useRouter();
    const formik = useFormik({
        initialValues: {
            operator: props.data ? props.data.author: '',
            fio: props.data ? props.data.fio: '',
            // numberOfCalls: '',
            // history: '',
            referenceContent: props.data ? props.data.referenceContent: '',
            inn:  props.data?.inn,
            type: props.data ? props.data.type: '',
            author: props.data ? props.data.author: '',
            province: props.data ? props.data.province: '',
            destrict: props.data ? props.data.destrict: '',
            address: props.data ? props.data.address: '',
            phone: props.data ? props.data.phone: '',
            email: props.data ? props.data.email: '',
            category: props.data ? props.data.category: '',
            underCategory: props.data ? props.data.underCategory: '',
            theme: props.data ? props.data.theme: '',
            reviewResult: props.data ? props.data.reviewResult: '',
            comment: props.data ? props.data.comment: ''
        },
        validationSchema: Yup.object({
            operator: Yup.string()
                .min(6)
                .max(50)
                .required(),
            fio: Yup.string()
                .min(6)
                .max(50)
                .required(),
            // numberOfCalls: Yup.string()
            //     .min(6)
            //     .max(50)
            //     .required(),
            // history: Yup.string()
            //     .min(6)
            //     .max(50)
            //     .required(),
            referenceContent: Yup.string()
                .min(100)
                .max(1024)
                .required(),
            inn: Yup.number()
                .min(6, 'Too Short!')
                .max(999999999999, 'Too Long!')
                .required('Required'),
            type: Yup.string()
                .min(3, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required'),

            author: Yup.string()
                .min(3, "Too Short!")
                .max(50, "Too Long")
                .required('Required'),
            province: Yup.string()
                .min(3, "Too SHort!")
                .max(50, "Too Long!")
                .required("Required"),
            destrict: Yup.string()
                .min(3, "Too Short")
                .max(50, "Too Short")
                .required("Required"),
            address: Yup.string()
                .min(3, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            phone: Yup.
                string()
                .phone('UZ')
                .required(),
            email: Yup.string().email('Invalid email').required('Required'),
            category: Yup.string()
                .required('Required!'),
            underCategory: Yup.string()
                .required('Required!'),
            theme: Yup.string()
                .required('Required!'),
            reviewResult: Yup.string()
                .required('Required!'),
            comment: Yup.string()
                .min(100)
                .max(1024)
                .required("Required!")
        }),
        onSubmit: async values => {
            await axios.post('/api/Datas/create', values)
                .then(res => {
                    // console.log(res);
                    router.push('/containers/Form/dataTable');
                })
                .catch(err=>{
                    console.log(err);
                })
        },
    });

    return (
        <div className="container mx-auto ">
            <form onSubmit={formik.handleSubmit} className="grid gap-4  md:grid-cols-12 sm:grid-cols-12 sm:px-4  xl:grid-cols-12 px-8 py-10">
                
                <div className="md:col-span-12 bg-blue-300 py-10 px-6 lg:col-span-12 sm:col-span-12 grid md:grid-cols-12 sm:grid-cols-12   xl:grid-cols-12 gap-4">
                    <div className="md:col-span-6 lg:col-span-3 sm:col-span-12">
                        <label htmlFor="operator">Оператор: </label>
                        <input
                            type="text"
                            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                            name="operator"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.operator}
                        />
                        {formik.touched.operator && formik.errors.operator ? (
                            <div className="text-red-900 font-bold">{formik.errors.operator}</div>
                        ) : null}
                    </div>

                    <div className="md:col-span-6 lg:col-span-3 sm:col-span-12">
                        <label htmlFor="fio">Ф.И.О: </label>
                        <input
                            type="text"
                            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                            name="fio"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={() => {
                                formik.values.fio = props.data ? props.data.inn : formik.values.fio
                                return formik.values.fio;
                            }}
                        />
                        {formik.touched.fio && formik.errors.fio ? (
                            <div className="text-red-900 font-bold">{formik.errors.fio}</div>
                        ) : null}
                    </div>

                    <div className="md:col-span-6 lg:col-span-3 sm:col-span-12">
                        <label htmlFor="numberOfCalls">Количество звонков: </label>
                        <input
                            type="text"
                            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                            name="numberOfCalls"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.numberOfCalls}
                        />
                        {formik.touched.numberOfCalls && formik.errors.numberOfCalls ? (
                            <div className="text-red-900 font-bold">{formik.errors.numberOfCalls}</div>
                        ) : null}
                    </div>

                    <div className="md:col-span-6 lg:col-span-3 sm:col-span-12">
                        <label htmlFor="history">История: </label>
                        <input
                            type="text"
                            className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                            name="history"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.history}
                        />
                        {formik.touched.history && formik.errors.history ? (
                            <div className="text-red-900 font-bold">{formik.errors.history}</div>
                        ) : null}
                    </div>

                </div>
                <div className="md:col-span-12 lg:col-span-12 sm:col-span-12">
                    <label htmlFor="referenceContent">Содержание обращения: </label>
                    <textarea
                        rows={4}
                        className="w-full  rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                        name="referenceContent"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.referenceContent}
                    />
                    {formik.touched.referenceContent && formik.errors.referenceContent ? (
                        <div className="text-red-900 font-bold">{formik.errors.referenceContent}</div>
                    ) : null}
                </div>

                <div className="md:col-span-6 lg:col-span-2 sm:col-span-12">
                    <label htmlFor="inn">STIR: </label>
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

                <div className="md:col-span-6 lg:col-span-2 sm:col-span-12">
                    <label htmlFor="type">Типы: </label>
                    <Select
                        id="type"
                        name="type"
                        options={types}

                        // onChange={formik.handleChange}
                        onBlur={() => {

                            formik.setFieldTouched('type', true);

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
                    <label htmlFor="author">Автор обращения: </label>

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

                <div className="md:col-span-6 lg:col-span-2 sm:col-span-12">
                    <label htmlFor="province">Область: </label>
                    <input
                        type="text"
                        className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                        name="province"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.province}
                    />

                    {formik.touched.province && formik.errors.province ? (
                        <div className="text-red-900 font-bold">{formik.errors.province}</div>
                    ) : null}
                </div>

                <div className="md:col-span-6 lg:col-span-2 sm:col-span-12">
                    <label htmlFor="destrict">Район/город: </label>
                    <input
                        type="text"
                        className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                        name="destrict"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.destrict}
                    />
                    {formik.touched.destrict && formik.errors.destrict ? (
                        <div className="text-red-900 font-bold">{formik.errors.destrict}</div>
                    ) : null}

                </div>

                <div className="md:col-span-6 lg:col-span-8 sm:col-span-12">
                    <label htmlFor="address">Адрес: </label>
                    <input
                        type="text"
                        className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <div className="text-red-900 font-bold">{formik.errors.address}</div>
                    ) : null}
                </div>

                <div className="md:col-span-6 lg:col-span-2 sm:col-span-12">
                    <label htmlFor="phone">Телефон: </label>
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

                <div className="md:col-span-6 lg:col-span-2 sm:col-span-12">
                    <label htmlFor="email">email: </label>
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

                <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
                    <label htmlFor="category">Категория: </label>
                    <Select
                        id="category"
                        name="category"
                        options={categories}

                        // onChange={formik.handleChange}
                        onBlur={() => {
                            formik.setFieldTouched('category', true);

                        }}
                        onChange={(opt, e) => {
                            console.log(opt, e);
                            getSelectByIdForCategory(opt);
                            formik.setFieldValue("category", opt.value);
                        }}
                    />
                    {formik.touched.category && formik.errors.category ? (
                        <div className="text-red-900 font-bold">{formik.errors.category}</div>
                    ) : null}
                </div>

                <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
                    <label htmlFor="underCategory">Под категория: </label>
                    <Select
                        id="underCategory"
                        name="underCategory"
                        onFocus={() => {
                            if (!formik.values.category) {
                                alert("Iltimos kategoriyani tanlang!!!")
                                return;
                            }
                        }}
                        options={formik.values.category ? underCategories : [{ value: " ", label: " " }]}

                        // onChange={formik.handleChange}
                        onBlur={() => {
                            formik.setFieldTouched('underCategory', true);

                        }}
                        onChange={(opt, e) => {
                            console.log(opt, e);
                            getSelectByIdForUnderCategory(opt);
                            formik.setFieldValue("underCategory", opt.value);
                        }}
                    />
                    {formik.touched.underCategory && formik.errors.underCategory ? (
                        <div className="text-red-900 font-bold">{formik.errors.underCategory}</div>
                    ) : null}
                </div>

                <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
                    <label htmlFor="theme">Тема: </label>
                    <Select
                        id="theme"
                        name="theme"
                        options={formik.values.underCategory ? themes : [{ value: "", label: "" }]}

                        onFocus={() => {
                            if (!formik.values.underCategory) {
                                alert("Iltimos kategoriya ostini tanlang!!!")
                                return;
                            }
                        }}
                        // onChange={formik.handleChange}
                        onBlur={() => {
                            formik.setFieldTouched('theme', true);

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
                <hr className="col-span-12 hidden lg:block  xl:block 2xl:block lg:block" />
                <div className="md:col-span-6 lg:col-span-4 sm:col-span-12">
                    <label htmlFor="reviewResult">Результат рассмотрения: </label>
                    <input
                        type="text"
                        className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                        name="reviewResult"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reviewResult}
                    />
                    {formik.touched.reviewResult && formik.errors.reviewResult ? (
                        <div className="text-red-900 font-bold">{formik.errors.reviewResult}</div>
                    ) : null}
                </div>

                <div className="md:col-span-12 lg:col-span-8 sm:col-span-12">
                    <label htmlFor="comment">Примечание: </label>
                    <input
                        type="text"
                        className="w-full h-9 rounded border-2 focus:border-blue-500 border-gray-300 px-4 focus:outline-none"
                        name="comment"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.comment}
                    />
                    {formik.touched.comment && formik.errors.comment ? (
                        <div className="text-red-900 font-bold">{formik.errors.comment}</div>
                    ) : null}
                </div>

                <div className="flex justify-between space-x-4 text-center sm:col-start-7 sm:col-end-13     md:col-span-4 md:col-start-9   xl:col-span-2 xl:col-start-11 ">
                    <button type="submit" className="h-8 border-2 text-white font-bold bg-blue-600 border-gray-800 w-1/2"> Сохранить</button>
                    <button type="button" className="h-8 border-2 text-white font-bold bg-yellow-600 border-gray-800 w-1/2"> Выход</button>
                </div>
            </form>
        </div>
    );
};

export default BasicWithHTML;