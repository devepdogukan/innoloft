import { Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import Error from "~/components/alert/error";
import Check from "~/icons/Check";
import { ProductService } from "~/services";
import { UpdateVideoScheme } from "~/validations/product";

export default function Video() {
  const { data } = useSelector((state) => state.product);

  if (!data) return null;

  return (
    <div className="mt-5 bg-[#fff] w-full p-5  rounded-md border-gray-200 border overflow-hidden">
      <p className="mb-5 text-gray-700 font-semibold text-base">Video</p>
      <div className="w-full flex items-center justify-center">
        <Formik
          validationSchema={UpdateVideoScheme}
          initialValues={{ video: data?.video }}
          onSubmit={async (values) => {
            await ProductService.update(values);
          }}
        >
          {({ errors, touched, values, dirty, isSubmitting }) => (
            <Form className="w-full">
              <Field
                className="input"
                name="video"
                type="text"
                placeholder="Add a youtube or vimeo link"
              />
              {errors.video && touched.video && <Error label={errors.video} />}

              <div className="flex justify-end items-center gap-2.5 mt-[15px]">
                {dirty && (
                  <button
                    type="reset"
                    className="text-gray-500 font-normal text-sm"
                  >
                    Cancel
                  </button>
                )}
                <button
                  type="submit"
                  className="bg-[#272E71] disabled:cursor-not-allowed disabled:opacity-50  font-normal text-sm flex cursor-pointer items-center gap-[5px] px-2.5 py-[5px] rounded-md text-[#ffffff]"
                  disabled={values.video === data?.video || errors.video}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                    </>
                  ) : (
                    <Check />
                  )}
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
