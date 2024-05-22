import * as Yup from "yup";
export const ProductsSchema = Yup.object().shape({
  title: Yup.string().min(2, "Too Short!").required("Required"),
  price: Yup.number().min(20, "Too Short!").required("Required"),
  image: Yup.string().url("Invalid URL").required("Required"),
  discountPrice: Yup.number().min(20, "Too Short!").required("Required"),
});
