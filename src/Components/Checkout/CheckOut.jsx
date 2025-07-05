
import axios from 'axios';
import { useFormik } from 'formik';
import { useContext } from 'react';
import { CartContext } from '../Context/CartProvider';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { cartItems, response, cartId, headers, setNoOfCartItem,onlinePayment } = useContext(CartContext);
    console.log(cartItems);
    console.log(response);
    console.log(cartId)
    const formik = useFormik({
        initialValues: {
            details: "",
            phone: "",
            city: "",
        },
        onSubmit: (values) => {
            payment(values);
        },
    });

   


    async function payment(shippingAddress) {
            let response = await onlinePayment(shippingAddress)
            console.log(response)
           window.location.href = response.data.session.url;
          
        }
    

    return (
        <div className='checkout flex flex-col-reverse md:flex-row justify-center'>
        
            <div className='form md:shrink-0'>
                <form onSubmit={formik.handleSubmit}>
                    <div className="text-center">
                        <p className='text-gray-500 pb-5'>Enter your data to complete payment process</p>
                    </div>

                    <div className="text-center">
                        <div className="mb-4">
                            <input
                                name='details'
                                id='details'
                                type="text"
                                placeholder='Details'
                                onChange={formik.handleChange}
                                value={formik.values.details}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.details && formik.errors.details ? (
                                <div className='text-red-500'>{formik.errors.details}</div>
                            ) : null}
                        </div>

                        <div className="mb-4">
                            <input
                                name='phone'
                                id='phone'
                                type="tel"
                                placeholder='Phone'
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className='text-red-500'>{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        <div className="mb-4">
                            <input
                                name='city'
                                id='city'
                                type="text"
                                placeholder='City'
                                className='h-11 w-4/5 mx-auto'
                                onChange={formik.handleChange}
                                value={formik.values.city}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.city && formik.errors.city ? (
                                <div className='text-red-500'>{formik.errors.city}</div>
                            ) : null}
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button
                            type='submit'
                            disabled={!(formik.isValid && formik.dirty)}
                            className='px-14 py-3  text-white rounded-full f_roboto bg-[#35AFA0]'
                        >
                            PayNow
                        </button>
                    </div>
                </form>
            </div>

            <div className='items flex-col  item w-80'>
                {cartItems.map((item, index) => (
                    <div key={index} className='flex items-center justify-between'>
                        <img width={64} src={item.product.imageCover} alt='product-image' className='ml-3' />
                        <p className='flex items-center p-1'><h1 className='px-1'>{item.count}x </h1>{item.product.title}</p>
                        <h3>{item.price}$</h3>

                    </div>
                ))}
                <div className='flex items-center justify-between ml-2'>
                    <h1 className='text-[#35AFA0]'>Shipping</h1>
                    <h2>FREE</h2>
                </div>
                <div className='flex justify-between mt-2 ml-2'>
                    <div>
                        <h2>Total</h2>
                        <p>including $2.46 in taxes</p>
                    </div>
                    <div>

                        <h2>USD $ {response?.data?.totalCartPrice || 0}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
