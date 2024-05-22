import { useFormik } from "formik";
import { Button, Checkbox, TextField } from "@mui/material";
import style from "./index.module.scss";
import { addOne } from "../../services/index";
import { endpoint } from "../../services/constant";
import { ProductsSchema } from "../../validations/productApi";

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      discountPrice: "",
      image: "",
    },
    onSubmit: (values, { resetForm }) => {
      addOne(endpoint.products, values)
        .then((response) => {})
        .catch((err) => {
          console.log(err);
        });
      console.log(values);
      resetForm();
    },
    validationSchema: ProductsSchema,
  });
  return (
    <>
      <form id={style["addform"]} onSubmit={formik.handleSubmit}>
        <TextField
          id="title"
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.title && formik.touched.title && (
          <div id="feedback">{formik.errors.title}</div>
        )}
        <TextField
          id="price"
          label="Price"
          variant="outlined"
          type="number"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.price && formik.touched.price && (
          <div id="feedback">{formik.errors.price}</div>
        )}
        <TextField
          id="discountPrice"
          label="Discount Price"
          variant="outlined"
          type="number"
          name="discountPrice"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.discountPrice && formik.touched.discountPrice && (
          <div id="feedback">{formik.errors.discountPrice}</div>
        )}
        <TextField
          id="image"
          label="Image"
          variant="outlined"
          type="text"
          name="image"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.image && formik.touched.image && (
          <div id="feedback">{formik.errors.image}</div>
        )}
        {/* <Checkbox /> */}
        <Button variant="contained" type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default AddProduct;
