import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, useFormik } from 'formik';
import Header from '../Header';
import * as Yup from 'yup';
import Select from 'react-select'
import { data } from 'autoprefixer';

const Basic = (props) => {
    const SignupSchema = Yup.object().shape({
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
        phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),
        comment: Yup.string()
            .min(3)
            .max(1024)
            .required("Required!"),
        email: Yup.string().email('Invalid email').required('Required'),
    });
    console.log(props);

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
    
    const formik = useFormik({
        initialValues: {
            inn: '',
            type: '',
            author: '',
            province: '',
            destrict: '',
            email: '',
            category: '',
            comment: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            console.log(values);
        }
    })
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

        console.log(cate);
        const values = props.themes.filter(theme => {
            return theme.underCategoryId == cate[0].id;
        }
        );
        console.log(values);
        setThemes(getSelects(values));
    }

    return (
        <Header>
            <div className="container  px-48">
                    {({ errors, touched }) => (
                        <form onSubmit = {formik.handleSubmit} className="grid grid-cols-6 gap-4 sm:grid-cols-2">

                            <div className="col-span-1 flex flex-col">
                                <label htmlFor="inn" className="min-width-full">STIR</label>
                                <input name="inn" type="number" value = {formik.values.inn} className="min-width-full border-2 border-gray-600" />
                                <p>{errors.inn && touched.inn ? (
                                    <div>{errors.inn}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-1 flex flex-col">
                                <label htmlFor="type" className="min-width-full">toifasi:</label>
                                <Select name="type" options = {
                                    types
                                }/>
                                {/* <Field name="type" className="min-width-full border-2 border-gray-600" /> */}
                                <p>{errors.type && touched.type ? (
                                    <div>{errors.type}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="author" className="min-width-full">murojaat muallifi: </label>
                                <Field name="author" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.author && touched.author ? (
                                    <div>{errors.author}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-1 flex flex-col">
                                <label htmlFor="province" className="min-width-full">viloyat:</label>
                                <Field name="province" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.province && touched.province ? (
                                    <div>{errors.province}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-1 flex flex-col">
                                <label htmlFor="destrict" className="min-width-full">tuman/shahar:</label>
                                <Field name="destrict" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.destrict && touched.destrict ? (
                                    <div>{errors.destrict}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-4 flex flex-col">
                                <label htmlFor="address" className="min-width-full">manzili:</label>
                                <Field name="address" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.address && touched.address ? (
                                    <div>{errors.address}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-1 flex flex-col">
                                <label htmlFor="telefon" className="min-width-full">telefon:</label>
                                <Field name="telefon" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.phone && touched.phone ? (
                                    <div>{errors.phone}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-1 flex flex-col">
                                <label htmlFor="email" className="min-width-full">pochta:</label>
                                <Field name="email" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="email" className="min-width-full">kategoriya:</label>
                                <Select name = "category" onChange={getSelectByIdForCategory} className="min-width-full border-2 border-gray-600" options={
                                    categories
                                } />
                                <p>{errors.category && touched.category ? (
                                    <div>{errors.category}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="email" className="min-width-full">kategoriya osti:</label>
                                <Select  onChange = {getSelectByIdForUnderCategory} className="min-width-full border-2 border-gray-600" options={
                                    underCategories
                                } />
                                <p>{errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="email" className="min-width-full">mavzu:</label>
                                <Select className="min-width-full text-black border-2 border-gray-600" options={
                                    themes
                                } />           <p>{errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-2 flex flex-col">
                                <label htmlFor="email" className="min-width-full">ko'rib chiqish natijasi:</label>
                                <Select className="min-width-full border-2 border-gray-600" options={
                                    [
                                        { value: 'chocolate', label: 'Chocolate' },
                                        { value: 'strawberry', label: 'Strawberry' },
                                        { value: 'vanilla', label: 'Vanilla' }
                                    ]
                                } />      <p>{errors.email && touched.email ? (
                                    <div>{errors.email}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-span-4 flex flex-col">
                                <label htmlFor="comment" className="min-width-full">izoh:</label>
                                <Field name="comment" className="min-width-full border-2 border-gray-600" />
                                <p>{errors.comment && touched.comment ? (
                                    <div>{errors.comment}</div>
                                ) : null}</p>
                            </div>

                            <div className="col-start-6 flex space-x-4">
                                <button className="w-32 focus:outline-none border-2 border-gray-600 bg-blue-600" type="submit"> Saqlash </button>
                                <button className="w-32 focus:outline-none border-2 border-gray-600 bg-yellow-600" type="button"> Chiqish </button>
                            </div>
                        </form>
                    )}
            </div>

        </Header>

    );
};


export default Basic;