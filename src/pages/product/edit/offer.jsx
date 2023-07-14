import React from "react";
import { useSelector } from "react-redux";
import { Field, Form, Formik } from "formik";
import { Editor } from "@tinymce/tinymce-react";

import Location from "~/icons/Location";
import Patent from "~/icons/Patent";
import { UpdateOfferScheme } from "~/validations/product";
import Check from "~/icons/Check";
import Error from "~/components/alert/error";
import { ProductService } from "~/services";
import { areAllKeyValuePairsIncluded } from "~/utils/format";


export default function Offer() {
  const { data } = useSelector((state) => state.product);
  const company = data?.company;
  const user = data?.user;

  if (!data) return null;

  return (
    <div className="w-full bg-[#fff] grid xl:grid-cols-[0.95fr_0.5fr] mt-[20px] rounded-md border-gray-200 border overflow-hidden">
      <div className="relative">
        <img src={data?.picture} className="w-full h-[300px]" />
        <div className="xl:p-5 max-xl:p-2.5">
          <Formik
            validationSchema={UpdateOfferScheme}
            initialValues={{ name: data?.name, description: data?.description }}
            onSubmit={async (values) => {
              await ProductService.update(values);
            }}
          >
            {({
              errors,
              touched,
              values,
              dirty,
              isSubmitting,
              handleChange,
            }) => (
              <Form className="w-full">
                <Field
                  className="input"
                  name="name"
                  type="text"
                  placeholder="Add a name"
                />
                {errors.name && touched.name && <Error label={errors.name} />}

                <Field name="description">
                  {({ field, meta }) => (
                    <div className="mt-2.5 border-gray-300">
                      <Editor
                        init={{ plugins: [], menubar: false }}
                        onEditorChange={(e) => {
                          handleChange({
                            target: { name: "description", value: e },
                          });
                        }}
                        textareaName="description"
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        value={values.description}
                      />
                    </div>
                  )}
                </Field>
                {errors.description && touched.description && (
                  <Error label={errors.description} />
                )}

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
                    disabled={areAllKeyValuePairsIncluded(data, values)}
                    className="bg-[#272E71] disabled:cursor-not-allowed disabled:opacity-50  font-normal text-sm flex cursor-pointer items-center gap-[5px] px-2.5 py-[5px] rounded-md text-[#ffffff]"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          aria-hidden="true"
                          role="status"
                          className="inline w-4 h-4 mr-3 text-white animate-spin"
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
        <div className="absolute bg-[#FFF] top-0 left-0 h-10 flex items-center rounded-ee-md overflow-hidden">
          <div className="w-10  flex items-center h-full justify-center bg-[#272E71] rounded-ee-md">
            <Patent />
          </div>
          <div className="bg-[#FFF] h-full flex place-items-center px-2.5 ">
            <p className="text-gray-700  font-semibold text-base">Patent</p>
          </div>
        </div>
      </div>
      <div className="border-l border-gray-200 xl:p-5 max-xl:p-2.5">
        <p className="text-gray-700 font-semibold text-base mb-5">Offered By</p>
        <img src={company?.logo} className="w-[200px] h-[36px] mb-2.5" />

        <div className="flex items-center gap-[10px]">
          <img
            src={user?.profilePicture}
            className="rounded-full w-[60px] h-[60px]"
          />
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 font-semibold text-sm mb-[5px]">
              {`${user?.firstName} ${user?.lastName}`}
            </p>
            <p className="text-gray-700 font-normal text-sm">{company?.name}</p>
          </div>
        </div>

        <div className="mt-5 py-2.5 flex gap-[5px]">
          <div className="min-w-[16px] h-4">
            <Location />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-normal">
              {company?.address?.street} {company?.address?.house}
            </p>
            <p className="text-gray-500 text-sm font-normal">
              {company?.address?.zipCode} {company?.address?.city?.name},
              {company?.address?.country?.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
