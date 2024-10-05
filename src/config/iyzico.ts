import Iyzipay from 'iyzipay';

const iyzipay = new Iyzipay({
    apiKey: process.env.IYZIPAY_API_KEY, // .env dosyasından API Key alın
    secretKey: process.env.IYZIPAY_SECRET_KEY, // .env dosyasından Secret Key alın
    baseUrl: 'https://sandbox-api.iyzipay.com' // Sandbox URL'i
});

export default iyzipay;
