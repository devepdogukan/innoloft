import * as Yup from 'yup';


export const UpdateVideoScheme = Yup.object().shape({
    video: Yup.string()
        .min(2, 'Too Short!')
        .max(150, 'Too Long!')
        .required('Required'),
});


export const UpdateOfferScheme = Yup.object().shape({
    description: Yup.string()
        .min(2, 'Too Short!')
        .max(10000, 'Too Long!')
        .required('Required'),
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(150, 'Too Long!')
        .required('Required'),
});




