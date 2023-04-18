
const Submit = async (inputs:{name:string,mail:string,subject:string}, textarea:string, gReCaptchaToken:string ) => {
    const name = inputs.name
    const email = "saurabharya2421@gmail.com"
    const subject = inputs.subject
    const message = textarea
    const msg = {name:name,email:email,subject:subject,message:message, gReCaptchaToken:gReCaptchaToken}
    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`+"api/contact/post",{
      method:'POST',
      body:JSON.stringify(msg),
      headers:{'Content-Type' : 'application/json'}
    })
    return response
  }

  export default Submit