import Iyzipay from 'iyzipay';

import iyzipay from "../config/iyzico";


const processPayment = async (paymentData: any) => {
    const request = {
        locale: Iyzipay.LOCALE.TR,
        conversationId: '123456789',
        price: paymentData.productPrice,
        paidPrice: paymentData.productPrice,
        currency: Iyzipay.CURRENCY.TRY,
        basketId: 'B67832',
        paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
        callbackUrl: 'https://www.merchant.com/callback',
        buyer: {
            id: paymentData.user.id,
            name: paymentData.name,
            surname: paymentData.surname,
            gsmNumber: '-',
            email: paymentData.email,
        },
        basketItems: [{
            id: paymentData.productId,
            name: paymentData.productTitle,
            category1: 'Electronics',
            itemType: Iyzipay.BASKET_ITEM_TYPE.PHYSICAL,
            price: paymentData.productPrice
        }]
    };

    return new Promise((resolve, reject) => {
        iyzipay.payment.create(request, (err: any, result: any) => {
            if (err) {
                return reject(err);
            }
            resolve(result);
        });
    });
};

export default { processPayment };
