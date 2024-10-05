import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
    apiKey: process.env.IYZIPAY_API_KEY, //
    secretKey: process.env.IYZIPAY_SECRET_KEY, //
    baseUrl: 'https://sandbox-api.iyzipay.com' //
});

export default iyzipay;
