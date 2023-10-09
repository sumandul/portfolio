
"use client";

import { useEffect } from "react"
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { Loader } from "components";


// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };
const DownloadPage = () => {
    const router = useRouter()

    useEffect(() => {

        fetch('cv.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file 
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values 
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }, [])

    setTimeout(() => {
        router.push("/")

    }, 3000)

    return (

        <>
        <div className=" flex justify-center items-center   min-h-[50vh]">
        <Loader/>
        </div>
       
           

        </>



    )

}

export default DownloadPage;





