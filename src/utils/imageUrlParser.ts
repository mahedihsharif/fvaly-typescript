const imageUrlParser = (id: string, option:string='') => {
    const baseUrl = 'https://res.cloudinary.com/shadincloudinarytraining/image/upload/';

    return `${baseUrl}${option ? option + '/' : ''}${id}`
}
export default imageUrlParser;