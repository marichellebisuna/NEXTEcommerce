import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document{
 render(){
  return(
   <Html lang='en'>
    <Head>
     <meta name="description" content="NextJs Ecommerce" />
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" ></link>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script>
     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
    </Head>
    <body>
     <Main/>
     <NextScript/>
    </body>
   </Html>
  )
 }
}
export default MyDocument